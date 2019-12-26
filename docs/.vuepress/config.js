module.exports = {
  title: '闲云野鹤',
  description: 'xianyunyehe',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    // ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
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
