(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{307:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"镜像使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 镜像使用")]),a._v(" "),s("blockquote",[s("p",[a._v("docker命令大全 docker command --help")])]),a._v(" "),s("h3",{attrs:{id:"_1-拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-拉取镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 拉取镜像")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker pull centos \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-查看镜像信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看镜像信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 查看镜像信息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 查看镜像列表\ndocker images [options]\n// 镜像列表 options\ndocker images -a ...\n// 查看详细信息\ndocker inspect centos\n// 查看镜像历史\ndocker history centos \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"_3-查找镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-查找镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.查找镜像")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker search centos [options]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("可选参数")])]),a._v(" "),s("ul",[s("li",[a._v("-s --start=30  30以上的星级镜像\n--no-trunc=true|false: 输出信息不截断\n--automated=true|false:仅仅显示自动创建的的镜像")])]),a._v(" "),s("h3",{attrs:{id:"_4-删除镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.删除镜像")]),a._v(" "),s("p",[a._v("通过镜像tag或者IMAGE ID删除")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker rmi centos \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_5-创建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.创建镜像")]),a._v(" "),s("ul",[s("li",[a._v("a. 基于原有的镜像容器创建")]),a._v(" "),s("li",[a._v("b. 基于本地模板导入")]),a._v(" "),s("li",[a._v("c. 基于Dockerfile创建")])]),a._v(" "),s("blockquote",[s("p",[a._v("基于已有镜像创建")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]\ndocker commit -m "add a new file" -a "alan wen" e87e1d03bce5 test:008\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("[options]\n-a, --author\n-c, --change 提交时候执行的Dockerfile指令\n-m, --message 提交信息\n-p, --pause=true 提交时暂停容器")]),a._v(" "),s("blockquote",[s("p",[a._v("基于本地模板导入")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker import [OPTION] file|RUL-[repository[:tag]]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_6-镜像保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-镜像保存","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.镜像保存")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 导出镜像到本地文件   -o, --output string   Write to a file, instead of STDOUT\ndocker save -o ubuntu_14.04.tar ubuntu:14.04\n// 载入镜像\ndocker load --input  ubuntu_14.04.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"_7-上传镜像到远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-上传镜像到远程仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 7. 上传镜像到远程仓库")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker push NAME[:TAG]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])},[],!1,null,null,null);e.default=r.exports}}]);