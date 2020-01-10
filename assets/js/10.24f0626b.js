(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{228:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[t._v("#")]),t._v(" 文章")]),t._v(" "),n("h3",{attrs:{id:"学习心得："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学习心得："}},[t._v("#")]),t._v(" 学习心得：")]),t._v(" "),n("p",[t._v("在css中有函数calc（）可以动态地计算不同比例的高度或宽度，比如")]),t._v(" "),n("pre",[n("code",[t._v("height: calc(100% - 30px);\n")])]),t._v(" "),n("p",[t._v("在css中表达正常，在less中出错，因为 less 本身就有 ‘减’ 这个操作，所以就违背了原意，所以在 less 中，要写成：")]),t._v(" "),n("pre",[n("code",[t._v('height: ~"calc(100% - 30px)";\n')])]),t._v(" "),n("p",[t._v("若要需要按照某个比例固定高度可以用")]),t._v(" "),n("pre",[n("code",[t._v('min-height: e("calc(100vh - 184px)")\n')])]),t._v(" "),n("p",[t._v("点击左侧栏目列表跳转到对应文章列表的问题时，初次点击可以跳转到对应的页面，但是当第二次点击时，虽然地址栏的参数改变了，也没有重新刷新页面中的内容。")]),t._v(" "),n("p",[t._v("造成上述情况的原因：\nvue项目中路由跳转默认采用hash的方式，而hash的变化不会导致浏览器发送请求到服务器；\n将获取数据的的函数的执行放在了Vue生命周期函数 mounted() 中，组件初次加载时执行了 mounted() 函数中的内容，但是再次点击时只有参数变化，组件已经挂载结束而且不会重新加载，mounted()  中的内容当然也就不会重新执行了。\n解决方案：使用侦听器监听URL地址栏参数变化\n当侦听器监听到URL地址栏参数变化时，调用获取数据列表的函数 getDate()")]),t._v(" "),n("html",[n("pre",[n("code",[t._v("watch: {\n    '$route' (to, from) {\n        this.getData(this.$route.query.id)\n    }\n}\n\nmethods: {\n    async getData (id) {\n      // 按照id获取数据\n      const { data: { result } } = await this.$http.get('getShowList', {\n        params: { id }\n      })\n      this.dataList = result\n    }\n}\n")])]),t._v(" "),n("p")]),n("p"),t._v(" "),n("p",[t._v("通过这种方式，就能使页面内容随着参数变化而变化了")]),t._v(" "),n("p",[t._v("【CSS】既添加背景色又添加背景图")]),t._v(" "),n("div",{staticStyle:{background:"center top / 100% 100% no-repeat url(xx), red"}})])}),[],!1,null,null,null);e.default=a.exports}}]);