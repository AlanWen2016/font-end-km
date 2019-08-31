(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{195:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-animation动画-transition过渡-transform变形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-animation动画-transition过渡-transform变形","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Animation动画/transition过渡/transform变形")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("CSS Animatioin用于实现一个样式配置转换到两一个样式配置。\n动画包括两部分：")]),t._v(" "),a("ul",[a("li",[t._v("描述动画样式的规则")]),t._v(" "),a("li",[t._v("用于指定动画开始、结果、中间点样式的关键帧")])])]),t._v(" "),a("h3",{attrs:{id:"描述动画规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述动画规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述动画规则")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("2.段落标题\n"),a("strong",[t._v("Animatiion子属性")])])]),t._v(" "),a("li",[a("p",[t._v("animation-name 动画名称,用于指定@keyframes描述的关键帧名称")])]),t._v(" "),a("li",[a("p",[t._v("animation-delay dom元素加载完毕后到动画开始执行这段之间")])]),t._v(" "),a("li",[a("p",[t._v("animation-direction 描述动画每次运行完成是反向运行，还是重新开始运行，有哪些取值")]),t._v(" "),a("ul",[a("li",[t._v("normal")]),t._v(" "),a("li",[t._v("alternaten 动画交替反向运行")]),t._v(" "),a("li",[t._v("reverse 反向运行")]),t._v(" "),a("li",[t._v("alternate-reverse 反向交替， 反向开始交替")])])]),t._v(" "),a("li",[a("p",[t._v("animation-duration 设置动画周期, 1s/33s")])]),t._v(" "),a("li",[a("p",[t._v("animation-interation-count 动画重复次数，使用数字，或者infinite表示无限重复")])]),t._v(" "),a("li",[a("p",[t._v("animation-play-state 设置动画暂停、恢复")]),t._v(" "),a("ul",[a("li",[t._v("running")]),t._v(" "),a("li",[t._v("paused")])])]),t._v(" "),a("li",[a("p",[t._v("animation-timing-function 描述动画速度，实际是动画的加速度曲线，控制动画在关键帧之间的速度变化")]),t._v(" "),a("ul",[a("li",[t._v("常用关键字： 常用linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("timing-function参考"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("animation-fill-mode 指定动画执行前后为目标元素应用样式")]),t._v(" "),a("ul",[a("li",[t._v("none 动画未执行时，动画不应用任何样式与目标")]),t._v(" "),a("li",[t._v("forwards 目标将保留执行期间最后一个关键帧的值")]),t._v(" "),a("li",[t._v("backwards 动画将在应用于目标时立即应用第一个关键帧中定义的值")]),t._v(" "),a("li",[t._v("both 遵循forwars和backwards规则")])])])]),t._v(" "),a("p",[t._v("/* @keyframes duration | timing-function | delay | name */")]),t._v(" "),a("blockquote",[a("p",[t._v("一次性设置所有动画属性：animation: slidein 3s ease-in 1s infinite reverse both running;")])]),t._v(" "),a("p",[t._v("完成动画的时间定义后，下一步就是定义动画关键场景。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"定义动画序列（关键帧）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义动画序列（关键帧）","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义动画序列（关键帧）")]),t._v(" "),a("p",[t._v("使用@keyframes设置两个或者两个以上关键帧，控制动画在对应时间节点要如何渲染\n关键帧节点取值：")]),t._v(" "),a("ul",[a("li",[t._v("百分比： 0%，25% 75% 100%")]),t._v(" "),a("li",[t._v("关键字： to, from")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3s slidein"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-iteration-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" infinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" slidein")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("transition过渡，在给定的持续时间内平滑地更改属性值（从一个值到另一个值），也就是只需要指定开始与结束的参数，参数改变时就触发动画。")])])])},[],!1,null,null,null);n.default=e.exports}}]);