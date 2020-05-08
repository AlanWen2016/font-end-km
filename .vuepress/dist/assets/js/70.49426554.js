(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{440:function(e,r,t){"use strict";t.r(r);var a=t(0),s=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"forwarded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forwarded","aria-hidden":"true"}},[e._v("#")]),e._v(" forwarded")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://npmjs.org/package/forwarded",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/npm/v/forwarded.svg",alt:"NPM Version"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://npmjs.org/package/forwarded",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/npm/dm/forwarded.svg",alt:"NPM Downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/node/v/forwarded.svg",alt:"Node.js Version"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://travis-ci.org/jshttp/forwarded",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/travis/jshttp/forwarded/master.svg",alt:"Build Status"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://coveralls.io/r/jshttp/forwarded?branch=master",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/forwarded/master.svg",alt:"Test Coverage"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Parse HTTP X-Forwarded-For header")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("This is a "),t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),t("OutboundLink")],1),e._v(" module available through the\n"),t("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm registry"),t("OutboundLink")],1),e._v(". Installation is done using the\n"),t("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("npm install")]),e._v(" command"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" forwarded\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[e._v("#")]),e._v(" API")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" forwarded "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'forwarded'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"forwarded-req"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forwarded-req","aria-hidden":"true"}},[e._v("#")]),e._v(" forwarded(req)")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" addresses "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("forwarded")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Parse the "),t("code",[e._v("X-Forwarded-For")]),e._v(" header from the request. Returns an array\nof the addresses, including the socket address for the "),t("code",[e._v("req")]),e._v(", in reverse\norder (i.e. index "),t("code",[e._v("0")]),e._v(" is the socket address and the last index is the\nfurthest address, typically the end-user).")]),e._v(" "),t("h2",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),t("p",[t("a",{attrs:{href:"LICENSE"}},[e._v("MIT")])])])},[],!1,null,null,null);r.default=s.exports}}]);