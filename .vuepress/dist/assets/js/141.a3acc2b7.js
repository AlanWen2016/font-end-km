(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{357:function(n,a,t){"use strict";t.r(a);var s=t(0),e=Object(s.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"使用vueprss构建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用vueprss构建项目"}},[n._v("#")]),n._v(" 使用vuePrss构建项目")]),n._v(" "),t("h3",{attrs:{id:"javascript基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础"}},[n._v("#")]),n._v(" JavaScript基础")]),n._v(" "),t("h4",{attrs:{id:"变量和类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量和类型"}},[n._v("#")]),n._v(" 变量和类型")]),n._v(" "),t("p",[n._v("1.JavaScript规定了几种语言类型\nJavaScript其中语言类型：\nNumber, String, Object, null, undefined, Symbol, Bealoo")]),n._v(" "),t("p",[n._v("2.JavaScript对象的底层数据结构是什么")]),n._v(" "),t("p",[n._v("3.Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol\n4.JavaScript中的变量在内存中的具体存储形式\n5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作\n6.理解值类型和引用类型\n7.null和undefined的区别\n8.至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("  function isArray(arr) {\n      if(typeof Array.isAarry === 'function'){\n        return Array.isArray(arr);\n      }else{\n        return Object.prototype.toString.call(arr) ===  '[Object Array]';\n      }\n  }\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br")])]),t("p",[n._v("9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用\n10.出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法")]),n._v(" "),t("h4",{attrs:{id:"原型和原型链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链"}},[n._v("#")]),n._v(" 原型和原型链")]),n._v(" "),t("p",[n._v("1.理解原型设计模式以及JavaScript中的原型规则\n2.instanceof的底层实现原理，手动实现一个instanceof\n4.实现继承的几种方式以及他们的优缺点\n5.至少说出一种开源项目(如Node)中应用原型继承的案例\n6.可以描述new一个对象的详细过程，手动实现一个new操作符\n7.理解es6 class构造以及继承的底层实现原理")]),n._v(" "),t("h4",{attrs:{id:"作用域和闭包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域和闭包"}},[n._v("#")]),n._v(" 作用域和闭包")]),n._v(" "),t("p",[n._v("1.理解词法作用域和动态作用域\n2.理解JavaScript的作用域和作用域链\n3.理解JavaScript的执行上下文栈，可以应用堆栈信息快速定位问题\n4.this的原理以及几种不同使用场景的取值\n5.闭包的实现原理和作用，可以列举几个开发中闭包的实际应用\n6.理解堆栈溢出和内存泄漏的原理，如何防止\n7.如何处理循环的异步操作\n8.理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理")]),n._v(" "),t("h4",{attrs:{id:"执行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行机制"}},[n._v("#")]),n._v(" 执行机制")]),n._v(" "),t("p",[n._v("1.为何try里面放return，finally还会执行，理解其内部机制\n2.JavaScript如何实现异步编程，可以详细描述EventLoop机制\n3.宏任务和微任务分别有哪些\n4.可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法\n5.使用Promise实现串行\n6.Node与浏览器EventLoop的差异\n7.如何在保证页面运行流畅的情况下处理海量数据")]),n._v(" "),t("h4",{attrs:{id:"语法和api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法和api"}},[n._v("#")]),n._v(" 语法和API")]),n._v(" "),t("p",[n._v("1.理解ECMAScript和JavaScript的关系\n2.熟练运用es5、es6提供的语法规范，\n3.熟练掌握JavaScript提供的全局对象（例如Date、Math）、全局函数（例如decodeURI、isNaN）、全局属性（例如Infinity、undefined）\n4.熟练应用map、reduce、filter 等高阶函数解决问题\n5.setInterval需要注意的点，使用settimeout实现setInterval\n6.JavaScript提供的正则表达式API、可以使用正则表达式（邮箱校验、URL解析、去重等）解决常见问题\n7.JavaScript异常处理的方式，统一的异常处理方案")]),n._v(" "),t("h3",{attrs:{id:"html和css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html和css"}},[n._v("#")]),n._v(" HTML和CSS")]),n._v(" "),t("h4",{attrs:{id:"html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[n._v("#")]),n._v(" HTML")]),n._v(" "),t("p",[n._v("1.从规范的角度理解HTML，从分类和语义的角度使用标签\n2.常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式\n3.元信息类标签(head、title、meta)的使用目的和配置方法")]),n._v(" "),t("p",[n._v("meta标签：用来定义文档的各种元数据。\n类型：\na. 指定名、值元数据对")]),t("meta",{attrs:{name:"description",content:"A simple sample"}}),n._v("\nb. 声明字符编码 "),t("meta",{attrs:{charset:"utf-8"}}),n._v("\nc. 模拟http标头字段"),t("meta",{attrs:{"http-equiv":"refresh",content:"5"}}),t("p"),n._v(" "),t("p",[n._v("4.HTML5离线缓存原理\n5.可以使用Canvas API、SVG等绘制高性能的动画")]),n._v(" "),t("h4",{attrs:{id:"css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[n._v("#")]),n._v(" CSS")]),n._v(" "),t("p",[n._v("1.CSS盒模型，在不同浏览器的差异\n区分w3c盒模型和ie盒模型\n盒子的四个组成区域相对应，每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。")]),n._v(" "),t("p",[n._v("box-sizing的两个属性： content-box | border-box")]),n._v(" "),t("p",[n._v("content-box:\nwidth  = content width;\nheight = content height")]),n._v(" "),t("p",[n._v("border-box:\nwidth  = border + padding + content width\nheigth = border + padding + content heigth")]),n._v(" "),t("p",[n._v("外边距折叠：\na.相邻元素之间\nb.父元素与其第一个或最后一个子元素之间\nc.空的块级元素")]),n._v(" "),t("p",[n._v("2.CSS所有选择器及其优先级、使用场景，哪些可以继承，如何运用@规则\na. 内联1000\nb. id 100\nc. class、伪类、属性 10\nd. 标签 1")]),n._v(" "),t("p",[n._v("3.CSS伪类和伪元素有哪些，它们的区别和实际应用\n4.HTML文档流的排版规则，CSS几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理\n5.水平垂直居中的方案、可以实现6种以上并对比它们的优缺点")]),n._v(" "),t("h4",{attrs:{id:"水平居中实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平居中实现"}},[n._v("#")]),n._v(" 水平居中实现")]),n._v(" "),t("p",[n._v("5.1 对行内元素，设置text-align: ceter;\n5.2 块级元素：\na. 转化为行内元素，display: inline-block;父元素设置text-align: center\nb. 定宽：父子元素都是定宽，子元素设置了margin: 0 auto;\nc. 使用绝对定位，有几种实现方式")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(".element {\n    width: 600px; height: 400px;\n    position: absolute; left: 50%; top: 50%;\n    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */\n}\n.element {\n    width: 600px; height: 400px;\n    position: absolute;\n     left: 0; top: 0; right: 0; bottom: 0;\n    margin: auto;    /* 有了这个就自动居中了 */\n}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br")])]),t("p",[n._v("d. flex布局")]),n._v(" "),t("p",[n._v("6.BFC实现原理，可以解决的问题，如何创建BFC")]),n._v(" "),t("p",[n._v("float属性不为none\noverflow不为visible(可以是hidden、scroll、auto)\nposition为absolute或fixed\ndisplay为inline-block、table-cell、table-caption")]),n._v(" "),t("p",[n._v("7.可使用CSS函数复用代码，实现特殊效果\n8.PostCSS、Sass、Less的异同，以及使用配置，至少掌握一种\n9.CSS模块化方案、如何配置按需加载、如何防止CSS阻塞渲染\n10.熟练使用CSS实现常见动画，如渐变、移动、旋转、缩放等等")]),n._v(" "),t("h5",{attrs:{id:"css渐变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css渐变"}},[n._v("#")]),n._v(" CSS渐变")]),n._v(" "),t("p",[n._v("CSS渐变实现两种或者多种颜色渐进过渡，有三种类型渐变\na. 线性渐变，由line-gradient 函数创建\nb. 径向渐变(由 radial-gradient 函数创建)\nc. 圆锥圆锥 (由 conic-gradient 函数创建)")]),n._v(" "),t("p",[n._v("11.CSS浏览器兼容性写法，了解不同API在不同浏览器下的兼容性情况\n12.掌握一套完整的响应式布局方案")]),n._v(" "),t("pre",[t("code",[n._v("flex布局知识归纳\n")])]),n._v(" "),t("p",[n._v("Element UI响应式布局实现：")]),n._v(" "),t("p",[n._v("手写\n1.手写图片瀑布流效果\n2.使用CSS绘制几何图形（圆形、三角形、扇形、菱形等）\n3.使用纯CSS实现曲线运动（贝塞尔曲线）\n4.实现常用布局（三栏、圣杯、双飞翼、吸顶），可是说出多种方式并理解其优缺点")]),n._v(" "),t("p",[n._v("计算机基础\n关于编译原理，不需要理解非常深入，但是最基本的原理和概念一定要懂，这对于学习一门编程语言非常重要。\n编译原理\n1.理解代码到底是什么，计算机如何将代码转换为可以运行的目标程序\n2.正则表达式的匹配原理和性能优化\n3.如何将JavaScript代码解析成抽象语法树(AST)\n4.base64的编码原理\n5.几种进制的相互转换计算方法，在JavaScript中如何表示和转换")]),n._v(" "),t("h4",{attrs:{id:"网络协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[n._v("#")]),n._v(" 网络协议")]),n._v(" "),t("p",[n._v("1.理解什么是协议，了解TCP/IP网络协议族的构成，每层协议在应用程序中发挥的作用\n2.三次握手和四次挥手详细原理，为什么要使用这种机制\n3.有哪些协议是可靠，TCP有哪些手段保证可靠交付\n4.DNS的作用、DNS解析的详细过程，DNS优化原理\n5.CDN的作用和原理\n6.HTTP请求报文和响应报文的具体组成，能理解常见请求头的含义，有几种请求方式，区别是什么\n7.HTTP所有状态码的具体含义，看到异常状态码能快速定位问题\n8.HTTP1.1、HTTP2.0带来的改变\n9.HTTPS的加密原理，如何开启HTTPS，如何劫持HTTPS请求\n10.理解WebSocket协议的底层原理、与HTTP的区别\n11.跨域")]),n._v(" "),t("p",[n._v("CORS(Cross-Origin Resource Sharing)跨域资源共享： 使用自定义的HTTP头部信息（Origin: http://www.baidu.com）,包含域名端口号、协议， 服务器根据这个头部信息给予响应。如果服务器接受，就在Access-Control-Allow-Origin头部发回同样的源信息（如果是公共资源，可以发回“*”）。\n如果没有这个头部信息，或者这个头部和源信息不匹配，浏览器就会驳回请求。")]),n._v(" "),t("p",[n._v("设计模式\n1.熟练使用前端常用的设计模式编写代码，如单例模式、装饰器模式、代理模式等\n2.发布订阅模式和观察者模式的异同以及实际应用\n3.可以说出几种设计模式在开发中的实际应用，理解框架源码中对设计模式的应用")]),n._v(" "),t("h4",{attrs:{id:"数据结构和算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构和算法"}},[n._v("#")]),n._v(" 数据结构和算法")]),n._v(" "),t("p",[n._v("据我了解的大部分前端对这部分知识有些欠缺，甚至抵触，但是，如果突破更高的天花板，这部分知识是必不可少的，而且我亲身经历——非常有用！")]),n._v(" "),t("h5",{attrs:{id:"javascript编码能力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript编码能力"}},[n._v("#")]),n._v(" JavaScript编码能力")]),n._v(" "),t("p",[n._v("1.多种方式实现数组去重、扁平化、对比优缺点\n2.多种方式实现深拷贝、对比优缺点\n3.手写函数柯里化工具函数、并理解其应用场景和优势\n4.手写防抖和节流工具函数、并理解其内部原理和应用场景\n5.实现一个sleep函数\n手动实现前端轮子\n1.手动实现call、apply、bind\n2.手动实现符合Promise/A+规范的Promise、手动实现async await\n3.手写一个EventEmitter实现事件发布、订阅\n4.可以说出两种实现双向绑定的方案、可以手动实现\n5.手写JSON.stringify、JSON.parse\n6.手写一个模版引擎，并能解释其中原理\n7.手写懒加载、下拉刷新、上拉加载、预加载等效果")]),n._v(" "),t("h4",{attrs:{id:"数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[n._v("#")]),n._v(" 数据结构")]),n._v(" "),t("p",[n._v("1.理解常见数据结构的特点，以及他们在不同场景下使用的优缺点\n2.理解数组、字符串的存储原理，并熟练应用他们解决问题\n3.理解二叉树、栈、队列、哈希表的基本结构和特点，并可以应用它解决问题\n4.了解图、堆的基本结构和使用场景")]),n._v(" "),t("h4",{attrs:{id:"算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[n._v("#")]),n._v(" 算法")]),n._v(" "),t("p",[n._v("1.可计算一个算法的时间复杂度和空间复杂度，可估计业务逻辑代码的耗时和内存消耗\n2.至少理解五种排序算法的实现原理、应用场景、优缺点，可快速说出时间、空间复杂度\n3.了解递归和循环的优缺点、应用场景、并可在开发中熟练应用\n4.可应用回溯算法、贪心算法、分治算法、动态规划等解决复杂问题\n5.前端处理海量数据的算法方案")]),n._v(" "),t("h4",{attrs:{id:"运行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[n._v("#")]),n._v(" 运行环境")]),n._v(" "),t("p",[n._v("我们需要理清语言和环境的关系：\nECMAScript描述了JavaScript语言的语法和基本对象规范\n浏览器作为JavaScript的一种运行环境，为它提供了：文档对象模型（DOM），描述处理网页内容的方法和接口、浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口")]),n._v(" "),t("p",[n._v("Node也是JavaScript的一种运行环境，为它提供了操作I/O、网络等API")]),n._v(" "),t("h4",{attrs:{id:"浏览器api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器api"}},[n._v("#")]),n._v(" 浏览器API")]),n._v(" "),t("p",[n._v("1.浏览器提供的符合W3C标准的DOM操作API、浏览器差异、兼容性\n2.浏览器提供的浏览器对象模型 (BOM)提供的所有全局API、浏览器差异、兼容性\n3.大量DOM操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等)\n4.浏览器海量数据存储、操作性能优化\n5.DOM事件流的具体实现机制、不同浏览器的差异、事件代理\n6.前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库")]),n._v(" "),t("p",[n._v("ajax:")]),n._v(" "),t("h4",{attrs:{id:"get请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get请求"}},[n._v("#")]),n._v(" get请求")]),n._v(" "),t("p",[n._v("function ajax(url,callback) {\nvar xhr = new XMLHttpRequest();\nxhr.open('GET',url, true);\nxhr.onreadystatechange = function() {\nif(xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304){\ncallback(xhr.responseText)\n}\n}\nxhr.send();\n}\n// readState:\n0: 未初始化\n1：启动（已调用open(),未调用send()）\n2: 发送（已经调用send()还收到response）\n3: 接收（已经接收到部分响应数据）\n4：完成（已经接收到全部响应数据）")]),n._v(" "),t("h4",{attrs:{id:"post-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-请求"}},[n._v("#")]),n._v(" post 请求")]),n._v(" "),t("p",[n._v('// code for IE6, IE5  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");')]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function(url, data, fn) { //datat应为\'a=a1&b=b1\'这种字符串格式\n    var xhr = new XMLHttpRequest();\n    xhr.open("POST", url, true);\n    // 添加http头，发送信息至服务器时内容编码类型\n    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");\n    xhr.onreadystatechange = function() {\n        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {\n            fn.call(this, xhr.responseText);\n        }\n    };\n    xhr.send(data);\n}\n\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 使用Promise实例封装ajax\n\nconst getJSON = function(url) {\n  const promise = new Promise(function(resolve, reject){\n    const handler = function() {\n      if (this.readyState !== 4) {\n        return;\n      }\n      if (this.status === 200) {\n        resolve(this.response);\n      } else {\n        reject(new Error(this.statusText));\n      }\n    };\n    const client = new XMLHttpRequest();\n    client.open("GET", url);\n    client.onreadystatechange = handler;\n    client.responseType = "json";\n    client.setRequestHeader("Accept", "application/json");\n    client.send();\n\n  });\n\n  return promise;\n};\n\ngetJSON("/posts.json").then(function(json) {\n  console.log(\'Contents: \' + json);\n}, function(error) {\n  console.error(\'出错了\', error);\n});\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br")])]),t("p",[n._v("7.浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型\n8.浏览器提供的几种存储机制、优缺点、开发中正确的选择\n9.浏览器跨标签通信\n浏览器原理\n1.各浏览器使用的JavaScript引擎以及它们的异同点、如何在代码中进行区分\n2.请求数据到请求结束与服务器进行了几次交互\n3.可详细描述浏览器从输入URL到页面展现的详细过程\n4.浏览器解析HTML代码的原理，以及构建DOM树的流程\n5.浏览器如何解析CSS规则，并将其应用到DOM树上\n6.浏览器如何将解析好的带有样式的DOM树进行绘制\n7.浏览器的运行机制，如何配置资源异步同步加载\n8.浏览器回流与重绘的底层原理，引发原因，如何有效避免\n9.浏览器的垃圾回收机制，如何避免内存泄漏\n10.浏览器采用的缓存方案，如何选择和控制合适的缓存方案")]),n._v(" "),t("h4",{attrs:{id:"node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[n._v("#")]),n._v(" Node")]),n._v(" "),t("p",[n._v("1.理解Node在应用程序中的作用，可以使用Node搭建前端运行环境、使用Node操作文件、操作数据库等等\n2.掌握一种Node开发框架，如Express，Express和Koa的区别\n3.熟练使用Node提供的API如Path、Http、Child Process等并理解其实现原理\n4.Node的底层运行原理、和浏览器的异同\n5.Node事件驱动、非阻塞机制的实现原理")]),n._v(" "),t("h4",{attrs:{id:"框架和类库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架和类库"}},[n._v("#")]),n._v(" 框架和类库")]),n._v(" "),t("p",[n._v("轮子层出不穷，从原理上理解才是正道\nTypeScript\n1.理解泛型、接口等面向对象的相关概念，TypeScript对面向对象理念的实现\n2.理解使用TypeScript的好处，掌握TypeScript基础语法\n3.TypeScript的规则检测原理\n4.可以在React、Vue等框架中使用TypeScript进行开发")]),n._v(" "),t("h4",{attrs:{id:"react"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[n._v("#")]),n._v(" React")]),n._v(" "),t("p",[n._v("1.React和vue 选型和优缺点、核心架构的区别\n2.React中setState的执行机制，如何有效的管理状态\n3.React的事件底层实现机制\n4.React的虚拟DOM和Diff算法的内部实现\n5.React的Fiber工作原理，解决了什么问题\n6.React Router和Vue Router的底层实现原理、动态加载实现原理\n7.可熟练应用React API、生命周期等，可应用HOC、render props、Hooks等高阶用法解决问题\n8.基于React的特性和原理，可以手动实现一个简单的React")]),n._v(" "),t("h4",{attrs:{id:"vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[n._v("#")]),n._v(" Vue")]),n._v(" "),t("p",[n._v("1.熟练使用Vue的API、生命周期、钩子函数")]),n._v(" "),t("p",[n._v("2.MVVM框架设计理念\n3.Vue双向绑定实现原理、Diff算法的内部实现\n4.Vue的事件机制\n5.从template转换成真实DOM的实现机制")]),n._v(" "),t("h4",{attrs:{id:"多端开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多端开发"}},[n._v("#")]),n._v(" 多端开发")]),n._v(" "),t("p",[n._v("1.单页面应用（SPA）的原理和优缺点，掌握一种快速开发SPA的方案")]),n._v(" "),t("p",[n._v("2.理解Viewport、em、rem的原理和用法，分辨率、px、ppi、dpi、dp的区别和实际应用")]),n._v(" "),t("p",[n._v("3.移动端页面适配解决方案、不同机型适配方案")]),n._v(" "),t("p",[n._v("4.掌握一种JavaScript移动客户端开发技术，如React Native：可以搭建React Native开发环境，熟练进行开发，可理解React Native的运作原理，不同端适配\n5.掌握一种JavaScript PC客户端开发技术，如Electron：可搭建Electron开发环境，熟练进行开发，可理解Electron的运作原理\n6.掌握一种小程序开发框架或原生小程序开发\n7.理解多端框架的内部实现原理，至少了解一个多端框架的使用")]),n._v(" "),t("h4",{attrs:{id:"数据流管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据流管理"}},[n._v("#")]),n._v(" 数据流管理")]),n._v(" "),t("p",[n._v("1.掌握React和Vue传统的跨组件通信方案，对比采用数据流管理框架的异同")]),n._v(" "),t("p",[n._v("Vue组件通信方式：")]),n._v(" "),t("p",[n._v("2.熟练使用Redux管理数据流，并理解其实现原理，中间件实现原理\n3.熟练使用Mobx管理数据流，并理解其实现原理，相比Redux有什么优势\n4.熟练使用Vuex管理数据流，并理解其实现原理")]),n._v(" "),t("p",[n._v("简述Vuex原理：\nVuex实现了单向数据流，在全局有个State对象，用于保存共享的数据，\nvue组件dispatch方法，调用action,action获取元数据（如：处理异步请求），然后将结果commit到mutation。 最后根据State的变化，渲染到视图上。")]),n._v(" "),t("p",[n._v("5.以上数据流方案的异同和优缺点，不情况下的技术选型")]),n._v(" "),t("h4",{attrs:{id:"实用库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实用库"}},[n._v("#")]),n._v(" 实用库")]),n._v(" "),t("p",[n._v("1.至少掌握一种UI组件框架，如antd design，理解其设计理念、底层实现\n2.掌握一种图表绘制框架，如Echart，理解其设计理念、底层实现，可以自己实现图表\n3.掌握一种GIS开发框架，如百度地图API\n4.掌握一种可视化开发框架，如Three.js、D3\n5.工具函数库，如lodash、underscore、moment等，理解使用的工具类或工具函数的具体实现原理")]),n._v(" "),t("h4",{attrs:{id:"开发和调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发和调试"}},[n._v("#")]),n._v(" 开发和调试")]),n._v(" "),t("p",[n._v("1.熟练使用各浏览器提供的调试工具\n2.熟练使用一种代理工具实现请求代理、抓包，如charls\n3.可以使用Android、IOS模拟器进行调试，并掌握一种真机调试方案\n4.了解Vue、React等框架调试工具的使用")]),n._v(" "),t("h4",{attrs:{id:"前端工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端工程"}},[n._v("#")]),n._v(" 前端工程")]),n._v(" "),t("p",[n._v("前端工程化：以工程化方法和工具提高开发生产效率、降低维护难度\n项目构建\n1.理解npm、yarn依赖包管理的原理，两者的区别\n2.可以使用npm运行自定义脚本\n3.理解Babel、ESLint、webpack等工具在项目中承担的作用\n4.ESLint规则检测原理，常用的ESLint配置\n5.Babel的核心原理，可以自己编写一个Babel插件\n6.可以配置一种前端代码兼容方案，如Polyfill\n7.Webpack的编译原理、构建流程、热更新原理，chunk、bundle和module的区别和应用\n8.可熟练配置已有的loaders和plugins解决问题，可以自己编写loaders和plugins")]),n._v(" "),t("h4",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" nginx")]),n._v(" "),t("p",[n._v("1.正向代理与反向代理的特点和实例\n2.可手动搭建一个简单的nginx服务器、\n3.熟练应用常用的nginx内置变量，掌握常用的匹配规则写法\n4.可以用nginx实现请求过滤、配置gzip、负载均衡等，并能解释其内部原理")]),n._v(" "),t("h4",{attrs:{id:"开发提速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发提速"}},[n._v("#")]),n._v(" 开发提速")]),n._v(" "),t("p",[n._v("1.熟练掌握一种接口管理、接口mock工具的使用，如yapi\n2.掌握一种高效的日志埋点方案，可快速使用日志查询工具定位线上问题\n3.理解TDD与BDD模式，至少会使用一种前端单元测试框架")]),n._v(" "),t("h4",{attrs:{id:"版本控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[n._v("#")]),n._v(" 版本控制")]),n._v(" "),t("p",[n._v("1.理解Git的核心原理、工作流程、和SVN的区别\n2.熟练使用常规的Git命令、git rebase、git stash等进阶命令\n3.可以快速解决线上分支回滚、线上分支错误合并等复杂问题")]),n._v(" "),t("h4",{attrs:{id:"持续集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[n._v("#")]),n._v(" 持续集成")]),n._v(" "),t("p",[n._v("1.理解CI/CD技术的意义，至少熟练掌握一种CI/CD工具的使用，如Jenkins\n2.可以独自完成架构设计、技术选型、环境搭建、全流程开发、部署上线等一套完整的开发流程（包括Web应用、移动客户端应用、PC客户端应用、小程序、H5等等）")]),n._v(" "),t("h4",{attrs:{id:"项目和业务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目和业务"}},[n._v("#")]),n._v(" 项目和业务")]),n._v(" "),t("p",[n._v("后端技能\n1.了解后端的开发方式，在应用程序中的作用，至少会使用一种后端语言\n2.掌握数据最终在数据库中是如何落地存储的，能看懂表结构设计、表之间的关联，至少会使用一种数据库\n性能优化\n1.了解前端性能衡量指标、性能监控要点，掌握一种前端性能监控方案\n2.了解常见的Web、App性能优化方案\n3.SEO排名规则、SEO优化方案、前后端分离的SEO\n4.SSR实现方案、优缺点、及其性能优化\n5.Webpack的性能优化方案\n6.Canvas性能优化方案\n7.React、Vue等框架使用性能优化方案\n前端安全\n1.XSS攻击的原理、分类、具体案例，前端如何防御\n2.CSRF攻击的原理、具体案例，前端如何防御\n3.HTTP劫持、页面劫持的原理、防御措施\n业务相关\n1.能理解所开发项目的整体业务形态、业务目标、业务架构，可以快速定位线上业务问题\n2.能理解所开发项目整体的技术架构、能快读的根据新需求进行开发规划、能快速根据业务报警、线上日志等定位并解决线上技术问题\n3.可以将自己的想法或新技术在业务中落地实践，尽量在团队中拥有一定的不可替代性")]),n._v(" "),t("p",[n._v("学习提升h")]),n._v(" "),t("p",[n._v("vczh大神在知乎问题【如何能以后达到温赵轮三位大神的水平？】下的回答：\n这十几年我一共做了三件事：\n1、不以赚钱为目的选择学习的内容；\n2、以自己是否能造出轮子来衡量学习的效果；\n3、坚持每天写自己的代码，前10年每天至少6个小时，不包含学习和工作的时间。")]),n._v(" "),t("p",[n._v("关于写博客说明下，能给别人讲明白的知识会比自己学习掌握的要深刻许多\n1.拥有自己的技术博客，或者在一些博客平台上拥有自己的专栏\n2.定期的将知识进行总结，不断完善自己的知识体系\n3.尽量将自己的知识转换成真实的产出，不要仅仅停留在书面理解层面，更重要的是实际应用\n4.坚持输出自己的代码，不要盲目的扎进公司业务")])])}),[],!1,null,null,null);a.default=e.exports}}]);