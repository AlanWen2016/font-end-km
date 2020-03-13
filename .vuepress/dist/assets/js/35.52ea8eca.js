(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{250:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" content-type")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/content-type",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/content-type.svg",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/content-type",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/content-type.svg",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://nodejs.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/node/v/content-type.svg",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/jshttp/content-type",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/jshttp/content-type/master.svg",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/content-type",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/content-type/master.svg",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Create and parse HTTP Content-Type header according to RFC 7231")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" content-type\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contentType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"contenttype-parse-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-parse-string"}},[t._v("#")]),t._v(" contentType.parse(string)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/svg+xml; charset=utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Parse a content type string. This will return an object with the following\nproperties (examples are shown for the string "),s("code",[t._v("'image/svg+xml; charset=utf-8'")]),t._v("):")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("type")]),t._v(": The media type (the type and subtype, always lower case).\nExample: "),s("code",[t._v("'image/svg+xml'")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("parameters")]),t._v(": An object of the parameters in the media type (name of parameter\nalways lower case). Example: "),s("code",[t._v("{charset: 'utf-8'}")])])])]),t._v(" "),s("p",[t._v("Throws a "),s("code",[t._v("TypeError")]),t._v(" if the string is missing or invalid.")]),t._v(" "),s("h3",{attrs:{id:"contenttype-parse-req"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-parse-req"}},[t._v("#")]),t._v(" contentType.parse(req)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Parse the "),s("code",[t._v("content-type")]),t._v(" header from the given "),s("code",[t._v("req")]),t._v(". Short-cut for\n"),s("code",[t._v("contentType.parse(req.headers['content-type'])")]),t._v(".")]),t._v(" "),s("p",[t._v("Throws a "),s("code",[t._v("TypeError")]),t._v(" if the "),s("code",[t._v("Content-Type")]),t._v(" header is missing or invalid.")]),t._v(" "),s("h3",{attrs:{id:"contenttype-parse-res"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-parse-res"}},[t._v("#")]),t._v(" contentType.parse(res)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Parse the "),s("code",[t._v("content-type")]),t._v(" header set on the given "),s("code",[t._v("res")]),t._v(". Short-cut for\n"),s("code",[t._v("contentType.parse(res.getHeader('content-type'))")]),t._v(".")]),t._v(" "),s("p",[t._v("Throws a "),s("code",[t._v("TypeError")]),t._v(" if the "),s("code",[t._v("Content-Type")]),t._v(" header is missing or invalid.")]),t._v(" "),s("h3",{attrs:{id:"contenttype-format-obj"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-format-obj"}},[t._v("#")]),t._v(" contentType.format(obj)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/svg+xml'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Format an object into a content type string. This will return a string of the\ncontent type for the given object with the following properties (examples are\nshown that produce the string "),s("code",[t._v("'image/svg+xml; charset=utf-8'")]),t._v("):")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("type")]),t._v(": The media type (will be lower-cased). Example: "),s("code",[t._v("'image/svg+xml'")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("parameters")]),t._v(": An object of the parameters in the media type (name of the\nparameter will be lower-cased). Example: "),s("code",[t._v("{charset: 'utf-8'}")])])])]),t._v(" "),s("p",[t._v("Throws a "),s("code",[t._v("TypeError")]),t._v(" if the object contains an invalid type or parameter names.")]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=n.exports}}]);