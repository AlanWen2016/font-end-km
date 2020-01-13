# VUE源码学习

## 第一章 源码目录设计和构建方式

1. 不同编译版本差距
<img src="../../assets/image/vue/run-time-only.png" width="500" hegiht="313" align=center />
先看个错误
```js
  var app = new Vue({
        el: '#app',
        template: `<div id="test"></div>`,
        data: {
            message: 'Hello Vue!'
        }
    })
```
npm包中vue/dist目录下，打包出来很多版本
| | UMD | CommonJS | ES Module |
| --- | --- | --- | --- |
| **Full** | vue.js | vue.common.js | vue.esm.js |
| **Runtime-only** | vue.runtime.js | vue.runtime.common.js | vue.runtime.esm.js |
| **Full (production)** | vue.min.js | | |
| **Runtime-only (production)** | vue.runtime.min.js | | |

区别：
- runtime-only版本和full版本的区别
- UMD VS CommonJs VS ESModule



## 第二章 数据驱动原理




## 第三章 



参考：

1.《vue源码解析》
2. [逐行剖析 Vue.js 源码](https://nlrx-wjc.github.io/Learn-Vue-Source-Code/)