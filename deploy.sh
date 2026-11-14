#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -eu

# 如果依赖还没装好，先自动安装
if [ ! -d node_modules ] || [ ! -x "node_modules/.bin/vuepress" ]; then
  echo "依赖未安装，正在执行 npm install..."
  npm install
fi

# 生成静态文件
npm run build

DIST_DIR="docs/.vuepress/dist"
if [ ! -d "$DIST_DIR" ]; then
  echo "构建输出目录不存在: $DIST_DIR"
  exit 1
fi

# 获取远程仓库地址，优先使用环境变量 GIT_REMOTE_URL，其次当前 git remote
REMOTE_URL="${GIT_REMOTE_URL:-$(git remote get-url origin 2>/dev/null || true)}"
if [ -z "$REMOTE_URL" ]; then
  echo "未配置 GitHub 远程仓库。"
  echo "请执行：git remote add origin https://github.com/<用户名>/<仓库名>.git"
  echo "或者在部署前设置 GIT_REMOTE_URL 环境变量。"
  exit 1
fi

# 检测是否使用 SSH 方式，给出更明确的提示
case "$REMOTE_URL" in
  git@github.com:*)
    echo "检测到 SSH 远程地址: $REMOTE_URL"
    echo "请切换到 HTTPS 远程地址，或配置正确的 SSH key。"
    exit 1
    ;;
esac

# 进入生成的文件夹
cd "$DIST_DIR"

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

if [ ! -d .git ]; then
  git init
fi

git add -A

if git diff --cached --quiet; then
  echo "没有需要发布的内容。"
  cd -
  exit 0
fi

git config user.name "${GIT_USER_NAME:-github-actions[bot]}"
git config user.email "${GIT_USER_EMAIL:-github-actions[bot]@users.noreply.github.com}"

git commit -m "${GIT_COMMIT_MESSAGE:-deploy}" || true

git push -f "$REMOTE_URL" HEAD:master
cd -