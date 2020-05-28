(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{238:function(t,s,a){t.exports=a.p+"assets/img/csrf.3d7f097b.png"},448:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"浏览器安全篇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全篇"}},[t._v("#")]),t._v(" 浏览器安全篇")]),t._v(" "),n("h2",{attrs:{id:"同源策略（sampe-orign-policy）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同源策略（sampe-orign-policy）"}},[t._v("#")]),t._v(" 同源策略（sampe-orign policy）")]),t._v(" "),n("p",[t._v("如果两个URL的协议、域名和端口都相同，我们就称这两个URL同源。协议例如http与https。"),n("br"),t._v("\n同源策略的限制体现到下面三个方面：")]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("DOM层面，限制不同源JS脚本对dom的操作")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("数据层面，同源策略限制了不同源的站点读取当前站点的 Cookie、IndexDB、LocalStorage 等数据。")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[t._v("网络层面，同源策略限制XMLHttpRequest请求")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("同源策略、CSP 和 CORS 之间的关系：")])]),t._v(" "),n("ul",[n("li",[t._v("读取数据和操作DOM要用跨文档机制")]),t._v(" "),n("li",[t._v("跨域请求要用CORS机制")]),t._v(" "),n("li",[t._v("引用第三方资源用CSP策略")])]),t._v(" "),n("h2",{attrs:{id:"xss-cross-site-scripting-跨站脚本攻击"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xss-cross-site-scripting-跨站脚本攻击"}},[t._v("#")]),t._v(" XSS(cross-site-scripting)跨站脚本攻击")]),t._v(" "),n("p",[t._v("\bXSS是指黑客往html页面或者dom中注入恶意脚本，用户在浏览页面时，利用恶意脚本达到攻击的目的。首先往浏览器中注入恶意脚本，然后再通过恶意脚本将用户信息发送至黑客部署的恶意服务器上")]),t._v(" "),n("blockquote",[n("p",[t._v("这些恶意脚本能做什么坏事呢？")])]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("窃取cookie信息")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("伪造dom，引诱用户填写账户密码")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[t._v("监听用户行为，例如监听键盘事件")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"4"}},[n("li",[t._v("浮窗广告")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("恶意脚本如何注入？")])]),t._v(" "),n("ul",[n("li",[t._v("存储型XSS, 恶意JavaScript代码提交到网站的数据库，最后脚本代码被渲染到页面")]),t._v(" "),n("li",[t._v("反射型XSS,用户将一段含有恶意代码的请求提交给Web服务器，Web 服务器接收到请求时，又将恶意代码反射给了浏览器端。在现实生活中，黑客经常会通过 QQ 群或者邮件等渠道诱导用户去点击这些恶意链接，")]),t._v(" "),n("li",[t._v("基于dom的XSS，黑客通过各种手段将恶意脚本注入用户的页面中，\n比如通过网络劫持在页面传输过程中修改HTML页面的内容，这种劫持类型很多，有通过WiFi路由器劫持的，有通过本地恶意软件来劫持的，它们的共同点是在 Web 资源传输过程或者在用户使用页面的过程中修改 Web 页面的数据。")])]),t._v(" "),n("blockquote",[n("p",[t._v("如何防范XSS？")])]),t._v(" "),n("p",[t._v("存储型 XSS 攻击和反射型 XSS 攻击都是需要经过 Web 服务器来处理的")]),t._v(" "),n("ul",[n("li",[t._v("数据库存储时候对特殊字符进行过滤")]),t._v(" "),n("li",[t._v("利用CSP策略限制第三方资源的加载和请求")]),t._v(" "),n("li",[t._v("httpOnly属性限制js脚本对cookie的读取")])]),t._v(" "),n("blockquote",[n("p",[t._v("了解CSP, Content-Security-Policy")])]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("使用meta元素")])])])]),t._v(" "),n("div",{staticClass:"language-HTML line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default-src 'self'; img-src https://*; child-src 'none';"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("使用http头部信息，网络服务器返回  Content-Security-Policy  HTTP头部")])])])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容安全策略( CSP )"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"csrf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),n("blockquote",[n("p",[t._v("2007年Gmail的CSRF漏洞\n在 2007 年的某一天，David 无意间打开了 Gmail 邮箱中的一份邮件，并点击了该邮件中的一个链接。过了几天，David 就发现他的域名被盗了。\n"),n("img",{attrs:{src:a(238),width:"500",hegiht:"313",align:"center"}})])]),t._v(" "),n("blockquote",[n("p",[t._v("什么是CSRF")])]),t._v(" "),n("p",[t._v("CSRF 英文全称是 Cross-site request forgery，所以又称为“跨站请求伪造”，是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。攻击者盗用了你的身份，以你的名义发送恶意请求，对服务器来说这个请求是完全合法的，但是却完成了攻击者所期望的一个操作，比如以你的名义发送邮件、发消息，盗取你的账号，添加系统管理员，甚至于购买商品、虚拟货币转账等。")]),t._v(" "),n("blockquote",[n("p",[t._v("CSRF类型")])]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("GET类型的CSRF")])])])]),t._v(" "),n("div",{staticClass:"language-HTML line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://bank.example/withdraw?amount=10000&for=hacker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("POST类型")])])])]),t._v(" "),n("div",{staticClass:"language-HTML line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://bank.example/withdraw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("POST")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xiaoming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("for"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hacker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("ul",[n("li",[n("ol",{attrs:{start:"3"}},[n("li",[t._v("链接类型")])])])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('  <a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">\n  美女图片下载\n  <a/>\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("blockquote",[n("p",[t._v("如何防止CSRF攻击")])]),t._v(" "),n("p",[t._v("CSRF攻击的特点")]),t._v(" "),n("ul",[n("li",[t._v("攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。")]),t._v(" "),n("li",[t._v("攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。")]),t._v(" "),n("li",[t._v("整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。")]),t._v(" "),n("li",[t._v("跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Cookie 的 SameSite 属性（strict lax none),\nsameSite属性会限制第三方网站从第三方站点的链接打开和从第三方站点提交携带Cookie的信息。")])]),t._v(" "),n("li",[n("p",[t._v("验证站点请求来源：Referer 和 Origin\n服务器的策略是优先判断 Origin，如果请求头中没有包含 Origin 属性，再根据实际情况判断是否使用 Referer 值。Referer 的值是由浏览器提供的，虽然 HTTP 协议上有明确的要求，但是每个浏览器对于 Referer 的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞,就是说refer是可以伪造的")])]),t._v(" "),n("li")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("rdn"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4262458649985523")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mcs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("snssdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\nConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keep"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alive\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("954")]),t._v("\nSec"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Fetch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Dest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" empty\nUser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mozilla"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OS")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10_13_6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KHTML")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3987")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".149")]),t._v(" Safari"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("charset"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTF")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nAccept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nOrigin: https://palm.bytedance.com\nSec-Fetch-Site: cross-site\nSec-Fetch-Mode: cors\nReferer: https://palm.bytedance.com/sdk/\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8\n")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("CSRF token")])]),t._v(" "),n("p",[t._v("CSRF 攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 cookie 中，因此黑客可以在不知道这些验证信息的情况下直接利用用户自己的 cookie 来通过安全验证。要抵御 CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。\n   这种方法要比检查 Referer 要安全一些，token 可以在用户登陆后产生并放于 session 之中，然后在每次请求时把 token 从 session 中拿出，与请求中的 token 进行比对，但这种方法的难点在于如何把 token 以参数的形式加入请求。对于 GET 请求，token 将附在请求地址之后，这样 URL 就变成 http://url?csrftoken=tokenvalue。 而对于 POST 请求来说，要在 form 的最后加上 ，这样就把 token 以参数的形式加入请求了。但是，在一个网站中，可以接受请求的地方非常多，要对于每一个请求都加上 token 是很麻烦的，并且很容易漏掉，通常使用的方法就是在每次页面加载时，使用 javascript 遍历整个 dom 树，对于 dom 中所有的 a 和 form 标签后加入 token。这样可以解决大部分的请求，但是对于在页面加载之后动态生成的 html 代码，这种方法就没有作用，还需要程序员在编码时手动添加 token。")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("参考资料：")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5bc009996fb9a05d0a055192",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列之二：如何防止CSRF攻击？"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/freeking101/article/details/86537087",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSRF攻击与防御"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);