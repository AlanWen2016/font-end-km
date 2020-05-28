(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{439:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"taro开发头条小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro开发头条小程序"}},[s._v("#")]),s._v(" taro开发头条小程序")]),s._v(" "),a("blockquote",[a("p",[s._v("Taro 是一套遵循 React 语法规范的 多端开发 解决方案。")])]),s._v(" "),a("h1",{attrs:{id:"taro开发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro开发流程"}},[s._v("#")]),s._v(" taro开发流程")]),s._v(" "),a("h2",{attrs:{id:"_1-安装cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装cli"}},[s._v("#")]),s._v(" 1. 安装cli")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 npm 安装 CLI")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @tarojs/cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR 使用 yarn 安装 CLI")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @tarojs/cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR 安装了 cnpm，使用 cnpm 安装 CLI")]),s._v("\n$ cnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @tarojs/cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新的应用")]),s._v("\n$ taro init myApp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2-快速启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速启动"}},[s._v("#")]),s._v(" 2. 快速启动")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# quick start")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev:tt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build:tt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### npm script")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev:tt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:tt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 仅限全局安装")]),s._v("\n$ taro build --type tt --watch\n$ taro build --type tt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### npx 用户也可以使用")]),s._v("\n$ npx taro build --type tt --watch\n$ npx taro build --type tt\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_3-页面与组件编写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-页面与组件编写"}},[s._v("#")]),s._v(" 3. 页面与组件编写")]),s._v(" "),a("h3",{attrs:{id:"_3-1-目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-目录结构"}},[s._v("#")]),s._v(" 3.1 目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("├── config\n├── dist\n├── package-lock.json\n├── package.json\n├── project.config.json\n├── src\n│   ├── app.jsx\n│   ├── app.scss\n│   ├── assets\n│   ├── components // 组件\n│   ├── constants\n│   ├── custom-variables.scss\n│   ├── index.html\n│   ├── pages // 页面\n│   ├── actions\n│   ├── reducers \n│   ├── store\n│   └── utils // 工具函数\n└── yarn.lock\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"_3-1-页面路由配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-页面路由配置"}},[s._v("#")]),s._v(" 3. 1 页面路由配置")]),s._v(" "),a("ul",[a("li",[s._v("配置路由： app.jsx下config.pages")]),s._v(" "),a("li",[s._v("路由传参数")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sent.jsx")]),s._v("\n Taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("navigateTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("/pages/webView/index?encodeUrl=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// received.jsx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("componentWillMount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 { id: '2', type: 'test' }")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-2-状态管理工具-redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-状态管理工具-redux"}},[s._v("#")]),s._v(" 3.2 状态管理工具 redux")]),s._v(" "),a("h2",{attrs:{id:"_4-开发工具与调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-开发工具与调试"}},[s._v("#")]),s._v(" 4. 开发工具与调试")]),s._v(" "),a("ul",[a("li",[s._v("真机调试只支持Android")])]),s._v(" "),a("blockquote",[a("p",[s._v("开发可能碰到的问题？")])]),s._v(" "),a("ol",[a("li",[s._v("验签： content-type配置， device_id必须相同")]),s._v(" "),a("li",[s._v("合法域名配置、工程配置（es6->es5, https证书校验问题）")]),s._v(" "),a("li",[s._v("base64图片，Image组件无法识别'data:img'开头的base64图片")]),s._v(" "),a("li",[s._v("redux使用")]),s._v(" "),a("li",[s._v("函数起名字render问题，渲染的组件使用render开头，普通函数不能用使用render开头")]),s._v(" "),a("li",[s._v("组件样式问题，全局变量配置")]),s._v(" "),a("li",[s._v("async-validator 参数校验")])]),s._v(" "),a("p",[s._v("参考：")])])}),[],!1,null,null,null);t.default=e.exports}}]);