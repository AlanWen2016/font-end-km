(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{322:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"parseurl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parseurl"}},[s._v("#")]),s._v(" parseurl")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://npmjs.org/package/parseurl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://badgen.net/npm/v/parseurl",alt:"NPM Version"}}),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://npmjs.org/package/parseurl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://badgen.net/npm/dm/parseurl",alt:"NPM Downloads"}}),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://badgen.net/npm/node/parseurl",alt:"Node.js Version"}}),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://travis-ci.org/pillarjs/parseurl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://badgen.net/travis/pillarjs/parseurl/master",alt:"Build Status"}}),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://coveralls.io/r/pillarjs/parseurl?branch=master",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://badgen.net/coveralls/c/github/pillarjs/parseurl/master",alt:"Test Coverage"}}),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("Parse a URL with memoization.")]),s._v(" "),n("h2",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),n("p",[s._v("This is a "),n("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),n("OutboundLink")],1),s._v(" module available through the\n"),n("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm registry"),n("OutboundLink")],1),s._v(". Installation is done using the\n"),n("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[n("code",[s._v("npm install")]),s._v(" command"),n("OutboundLink")],1),s._v(":")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" parseurl\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" parseurl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'parseurl'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"parseurl-req"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parseurl-req"}},[s._v("#")]),s._v(" parseurl(req)")]),s._v(" "),n("p",[s._v("Parse the URL of the given request object (looks at the "),n("code",[s._v("req.url")]),s._v(" property)\nand return the result. The result is the same as "),n("code",[s._v("url.parse")]),s._v(" in Node.js core.\nCalling this function multiple times on the same "),n("code",[s._v("req")]),s._v(" where "),n("code",[s._v("req.url")]),s._v(" does\nnot change will return a cached parsed object, rather than parsing again.")]),s._v(" "),n("h3",{attrs:{id:"parseurl-original-req"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parseurl-original-req"}},[s._v("#")]),s._v(" parseurl.original(req)")]),s._v(" "),n("p",[s._v("Parse the original URL of the given request object and return the result.\nThis works by trying to parse "),n("code",[s._v("req.originalUrl")]),s._v(" if it is a string, otherwise\nparses "),n("code",[s._v("req.url")]),s._v(". The result is the same as "),n("code",[s._v("url.parse")]),s._v(" in Node.js core.\nCalling this function multiple times on the same "),n("code",[s._v("req")]),s._v(" where "),n("code",[s._v("req.originalUrl")]),s._v("\ndoes not change will return a cached parsed object, rather than parsing again.")]),s._v(" "),n("h2",{attrs:{id:"benchmark"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[s._v("#")]),s._v(" Benchmark")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run-script bench\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" parseurl@1.3.3 bench nodejs-parseurl\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/index.js\n\n  http_parser@2.8.0\n  node@10.6.0\n  v8@6.7.288.46-node.13\n  uv@1.21.0\n  zlib@1.2.11\n  ares@1.14.0\n  modules@64\n  nghttp2@1.32.0\n  napi@3\n  openssl@1.1.0h\n  icu@61.1\n  unicode@10.0\n  cldr@33.0\n  tz@2018c\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/fullurl.js\n\n  Parsing URL "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8888/foo/bar?user=tj&pet=fluffy"')]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" tests completed.\n\n  fasturl            x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,207")]),s._v(",842 ops/sec ±3.76% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("184")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - legacy x   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("507,180")]),s._v(" ops/sec ±0.82% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("191")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - whatwg x   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("290,044")]),s._v(" ops/sec ±1.96% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("189")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl           x   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("488,907")]),s._v(" ops/sec ±2.13% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/pathquery.js\n\n  Parsing URL "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/foo/bar?user=tj&pet=fluffy"')]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" tests completed.\n\n  fasturl            x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3,812")]),s._v(",564 ops/sec ±3.15% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - legacy x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,651")]),s._v(",631 ops/sec ±1.68% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("189")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - whatwg x   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("161,837")]),s._v(" ops/sec ±2.26% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("189")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl           x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4,166")]),s._v(",338 ops/sec ±2.23% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("184")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/samerequest.js\n\n  Parsing URL "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/foo/bar?user=tj&pet=fluffy"')]),s._v(" on same request object\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" tests completed.\n\n  fasturl            x  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3,821")]),s._v(",651 ops/sec ±2.42% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("185")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - legacy x  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,651")]),s._v(",162 ops/sec ±1.90% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("187")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - whatwg x    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("175,166")]),s._v(" ops/sec ±1.44% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl           x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14,912")]),s._v(",606 ops/sec ±3.59% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("183")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/simplepath.js\n\n  Parsing URL "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/foo/bar"')]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" tests completed.\n\n  fasturl            x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12,421")]),s._v(",765 ops/sec ±2.04% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("191")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - legacy x  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7,546")]),s._v(",036 ops/sec ±1.41% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - whatwg x    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("198,843")]),s._v(" ops/sec ±1.83% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("189")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl           x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24,244")]),s._v(",006 ops/sec ±0.51% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("194")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/slash.js\n\n  Parsing URL "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" tests completed.\n\n  fasturl            x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17,159")]),s._v(",456 ops/sec ±3.25% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - legacy x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11,635")]),s._v(",097 ops/sec ±3.79% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("184")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl - whatwg x    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("240,693")]),s._v(" ops/sec ±0.83% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("189")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl           x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("42,279")]),s._v(",067 ops/sec ±0.55% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("190")]),s._v(" runs sampled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br")])]),n("h2",{attrs:{id:"license"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),n("p",[n("a",{attrs:{href:"LICENSE"}},[s._v("MIT")])])])}),[],!1,null,null,null);a.default=e.exports}}]);