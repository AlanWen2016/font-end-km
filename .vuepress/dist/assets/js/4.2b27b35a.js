(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{214:function(t,a,e){t.exports=e.p+"assets/img/vue-render.4ba187aa.png"},215:function(t,a,e){t.exports=e.p+"assets/img/watcher.f09e8df0.jpg"},216:function(t,a,e){t.exports=e.p+"assets/img/route.79813723.jpg"},217:function(t,a,e){t.exports=e.p+"assets/img/vuex.c322fecf.jpg"},268:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue杂谈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue杂谈"}},[t._v("#")]),t._v(" VUE杂谈")]),t._v(" "),s("h3",{attrs:{id:"尤雨溪：vue-2-0，渐进式前端解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尤雨溪：vue-2-0，渐进式前端解决方案"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.infoq.cn/article/vue-2-progressive-front-end-solution",target:"_blank",rel:"noopener noreferrer"}},[t._v("尤雨溪：Vue 2.0，渐进式前端解决方案"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("文章的内容是尤雨溪2016年Qcon的演讲")]),t._v(" "),s("h2",{attrs:{id:"_1-为什么需要框架？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么需要框架？"}},[t._v("#")]),t._v(" 1. 为什么需要框架？")]),t._v(" "),s("ul",[s("li",[t._v("解决复杂问题")]),t._v(" "),s("li",[t._v("框架（工具）复杂度与问题复杂度的权衡")])]),t._v(" "),s("h2",{attrs:{id:"_2-框架复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-框架复杂度"}},[t._v("#")]),t._v(" 2. 框架复杂度")]),t._v(" "),s("ul",[s("li",[t._v("声明式渲染")]),t._v(" "),s("li",[t._v("组件系统")]),t._v(" "),s("li",[t._v("客户端路由")]),t._v(" "),s("li",[t._v("状态管理")]),t._v(" "),s("li",[t._v("构建工具")])]),t._v(" "),s("h2",{attrs:{id:"_3-如何理解vue文档的渐进式框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何理解vue文档的渐进式框架"}},[t._v("#")]),t._v(" 3. 如何理解vue文档的渐进式框架")]),t._v(" "),s("ul",[s("li",[t._v("核心 + 生态栈")]),t._v(" "),s("li",[t._v("可弹性的工具复杂度应对不同复杂度场景（视图层核心+工具库）")])]),t._v(" "),s("h2",{attrs:{id:"_4-vue设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue设计"}},[t._v("#")]),t._v(" 4. vue设计")]),t._v(" "),s("h3",{attrs:{id:"_4-1-声明式渲染："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-声明式渲染："}},[t._v("#")]),t._v(" 4.1 声明式渲染：")]),t._v(" "),s("p",[t._v("大部分框架都认为：DOM尽可能是一个函数式到状态的映射。DOM的状态就是数据的状态的一种映射。\n所以逻辑尽可能在状态层面进行，View应该在框架的帮助下更新到合理的状态。")]),t._v(" "),s("ul",[s("li",[t._v("Vue的渲染流程")])]),t._v(" "),s("img",{attrs:{src:e(214),width:"500",hegiht:"313",align:"center"}}),t._v(" "),s("p",[t._v("a. vue编译器会把模板编译成渲染函数\nb. 渲染函数被调用会返回一个虚拟dom树，这个dom树就是描述当前应用的状态\nc. dom diff\nd. 虚拟dom树交个dispath函数，把虚拟dom树施加到真实dom上")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用vitural dom 的原因：\na. 浏览器的js引擎非常快\nb. dom的渲染非常慢")])]),t._v(" "),s("li",[s("p",[t._v("vue使用template与渲染函数/jsx：\na. 模板的语法接近html, 语义化、css编写方便\nb. 渲染函数、jsx更为灵活，便于处理复杂逻辑")])]),t._v(" "),s("li",[s("p",[t._v("Vue依赖检测追踪系统的设计与实现\n"),s("img",{attrs:{src:e(215),width:"500",hegiht:"313",align:"center"}})])])]),t._v(" "),s("h3",{attrs:{id:"_4-2-组件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-组件系统"}},[t._v("#")]),t._v(" 4.2 组件系统")]),t._v(" "),s("ul",[s("li",[t._v("组件的设计思想是，将UI结构映射到恰当的组件树")]),t._v(" "),s("li",[t._v("组件通信方式，单向数据流，父组件通过props传递信息给子组件，子组件想要在父组件产生副作用，必须要派发事件。")]),t._v(" "),s("li",[t._v("vue的单文件组件设计是基于构建工具实现(vue-loader?),通过构建工具，可以对单文件（html、image、css）使用不同的处理器")])]),t._v(" "),s("h3",{attrs:{id:"_4-3-客户端路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-客户端路由"}},[t._v("#")]),t._v(" 4.3 客户端路由")]),t._v(" "),s("p",[t._v("页面应用的每个状态都会对应一个url，URL和组件树之间有个状态映射关系。客户端路由所做的工作就是生命式的将路由和组件状态对应起来。\n使用hash去模拟一下，可以做出简单路由。")]),t._v(" "),s("p",[t._v("客户端路由需要解决很多问题：")]),t._v(" "),s("img",{attrs:{src:e(216),width:"500",hegiht:"313",align:"center"}}),t._v(" "),s("h3",{attrs:{id:"_4-4-状态管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-状态管理"}},[t._v("#")]),t._v(" 4.4 状态管理")]),t._v(" "),s("p",[t._v("每个组件有自己的状态，也存再组件公用的状态。使用全局Store对象存储用户状态。\nvuex有其使用规则，mutation显示触发store修改，action处理异步请求和其他副作用。\n"),s("img",{attrs:{src:e(217),width:"500",hegiht:"313",align:"center"}})]),t._v(" "),s("h3",{attrs:{id:"_4-5-工具构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-工具构建"}},[t._v("#")]),t._v(" 4.5 工具构建")])])}),[],!1,null,null,null);a.default=r.exports}}]);