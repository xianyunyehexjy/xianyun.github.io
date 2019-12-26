module.exports = {
  title: '许剑煜的博客',
  description: '本是青灯不归客，却因浊酒恋红尘。<br>星空不问赶路人，岁月不负有心人。',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    // meta
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "许剑煜"}],
    ["meta", {name: "keywords", content: "Vue笔记"}]

    // ,['script', {}, `
    // var _hmt = _hmt || [];
    // (function() {
    //   var hm = document.createElement("script");
    //   hm.src = "https://hm.baidu.com/hm.js?78211cc0bb0086ea217533a8f283d678";
    //   var s = document.getElementsByTagName("script")[0]; 
    //   s.parentNode.insertBefore(hm, s);
    // })();
    // `]
  ],
  base: '/xianyun.github.io/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'Vue', link: '/Vue/' } ,
      // {text: 'InfiniteSplitTable', link: '/InfiniteSplitTable' },
      {text: 'Pictures', link: '/Pictures/' },
      {text: 'GitHub', link: 'https://github.com/xianyunyehexjy'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: [
    'vuepress-plugin-baidu-autopush',
    '@vuepress/pwa'
  ]
};
