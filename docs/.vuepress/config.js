module.exports = {
  title: '闲云首页',
  description: '本是青灯不归客，却因浊酒恋红尘。星空不问赶路人，岁月不负有心人。',
  head: [  
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    // meta
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "许剑煜"}],
    ["meta", {name: "keywords", content: "Vue笔记"}],
    ['link', { rel: 'stylesheet', href: '/live2dModels/live2d/css/common.css' }],  //引入css
    ['script', { type: 'text/javascript', src: '/live2dModels/live2d/js/live2d.js' }],  //引入live2d
    ['script', { type: 'text/javascript', src: '/live2dModels/live2d/js/init.js' }],  //引入live2d初始化脚本,async:'async'
    // ['script', {}, `
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
    logo: '/logo.jpg',
    lastUpdated: 'lastUpdate', // string | boolean
    // nav:[ // 导航栏配置
    //   {text: 'Vue', link: '/Vue/' } ,
    //   {text: 'Pictures', link: '/Pictures/' },
    //   {text: 'GitHub', link: 'https://github.com/xianyunyehexjy'}      
    // ],
    nav: [
      { text: '首页', link: '/' },
      {
          text: '分类',
          ariaLabel: '分类',
          items: [
              { text: '文章', link: '/Vue/' },
              { text: '琐碎', link: '/Other/' },
          ]
      },
      { text: '图片', link: '/Pictures/' },
      {text: 'GitHub', link: 'https://github.com/xianyunyehexjy'}     
  ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: [
    // 'vuepress-plugin-baidu-autopush',
    '@vuepress/pwa'
  ]
};
 