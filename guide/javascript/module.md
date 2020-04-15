# JS模块化
> 理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理

代码模块化，利于代码封装和复用。最简单的模块化形式有使用对象、函数、立刻执行函数（Immediately-Invoked Function Expression，IIFE）。
在js官方模块出来前，出现了CommonJS和AMD。ES6 Module可以完全取代AMD和CommonJS规范，成为通用的浏览器端和服务端模块化解决方案。

美国程序员Ryan Dahl创造了node.js项目,node的模块系统就是参照CommonJS模块实现的。CommonJS用于服务端的模块化。
CommonJS有个全局require()方法，用于加载模块。
由于模块需要先加载再在执行代码，在浏览器端，如果等待模块加载完成，会导致程序也一直处于运行状态。
为了解决浏览器端这个问题，必须采用异步加载的（asynchronous)，于是出现另一种用于浏览器端的模块化标准AMD。

## CommonJS
> 使用代码示例
```js
// sample.js
var a = 2;
var add = function (x) {
  return a + x;
};
module.exports.a = a;
module.exports.add = add;

// index.js 导入 sample.js
var ret = require('./module')
console.log(ret)
// 结果 { a: 2, add: [Function: add] }
```
> CommonJS规范规定，每个文件就是一个模块，module就代表这个模块。module提供一个外部访问属性exports。因此可以在一个文件里修改、或者给exports这个变量重新赋值。外部获取的将是exports这个变量。

::: tip 
导出规则
:::
```js
// 导出结果 变量2
var a = 2;
module.exports = a;
// 导出对象 a
var a = 2;
module.exports.a = a;
// 变量c不会被导出
var a = 2;
var c = 3;
module.exports.a = a;
```
::: tip 
require用法
:::

- 绝对路径引入     -----require('/ect/www/sample.js')
- 相对当前路径引入 -----require('./sample.js')
- 核心模块或者各级node_modules目录 -----require('path')   require('lodash')
- 通过package.json的main属性，可以指定文件入口
```json
// package.json
{ "name" : "some-library",
  "main" : "./lib/some-library.js" }
```

> 循环加载CommonJS规范如何处理

相互引入并不会导致死循环，node会返回模块的不完整版本。重复加载是，将直接从缓存中读取exports下的指定属性，而非重新引入。
```js
// a.js
console.log('在A');
exports.x = 'a1';
console.log('a.js ', require('./b.js').x);
exports.x = 'a2';
console.log('在A end');

// b.js
console.log('在B');
exports.x = 'b1';
console.log('b.js ', require('./a.js').x);
exports.x = 'b2';
console.log('在B end');

// c.js
console.log('c.js1 ', require('./a.js').x);
console.log('c.js2 ', require('./b.js').x);

上面代码是三个JavaScript文件。其中，a.js加载了b.js，而b.js又加载a.js。这时，Node返回a.js的不完整版本,(a.js-> exports.x = a1)，所以执行结果如下。
// output
在A
在B
b.js  a1
在B end
a.js  b2
在A end
c.js1  a2
c.js2  b2
```

## AMD

Asynchronous Module Definition, AMD采用异步方式加载模块，模块加载不影响后面的语句执行。所有依赖这个模块的语句，都定义在一个回调函数中，等到模块加载完毕，函数才会运行。
目前require.js实现AMD标准，[官网](https://requirejs.org/)。AMD也采用require()语句加载模块，使用两个参数，require([module], callback);

#### require.js（AMD规范）用法
定义一个模块
```js
　　// math.js
define(function (){
　　var add = function (x,y){
　　　　　　return x+y;
　　};
　 return {
　　　　add: add
　　};
});
```
模块使用
```javascript
　　require(['math'], function (math) {
　　　　math.add(2, 3);
　　});
```

补充知识：

```html
<script src="1.js"></script>
<script src="2.js"></script>
<script src="3.js"></script>
<script src="4.js"></script>
<script src="5.js"></script>
<script src="6.js"></script>
```
浏览器在加载js文件是，浏览器会停止渲染，等待文件加载完成。如何加载文件数量、市场特别多，会导致页面等待时间比较长。如何文件存在相互依赖，还需要维护文件的加载顺序。
通常，可以将文件放在网页底部，或者使用defer/async标识延迟加载。
```html
<script src="js/require.js" defer async="true" ></script>
```
::: tip
defer与async的区别是：
defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；  
async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
:::
require.js可以解决以上两个问题：现js文件的异步加载，管理模块之间的依赖性。


## ES Module
es6模块化的设计思想是静态化，使得在编译过程就知道模块之间的依赖关系。ES6使用 export 和 import 来导出、导入模块。


### 导出

```js
var a = 1;
var b= 2;
export {a, b};
// 使用export default命令，为模块指定默认输出。

export function f() {};
export class {}
export default class { ... }

```

### 导入
```
import _, { each, forEach } from 'lodash';
import _ from 'lodash';
import { area, circumference } from './circle';
import * as circle from './circle';

```

### 模块继承

假设module2继承module1, 在module2中可以再次输出module1

```js
// module2

export * from 'module1' // export * 或忽略掉原来module里的export default方法
export const e = 1234;

```

### 多个模块共享常量的方法
```js
// db.js
export const db = {
    a1: 1
}
// const2.js
export const apple = 11;
// index.js
export {db} from './db'
export {apple} from './const2'
// 引入
import {db, apple} from './constants/index';

```

### ES6 模块与 CommonJS 模块的差异

- CommonJS 模块输出的是一个值的拷贝，会被缓存，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。


ES module 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并将用不到的代码排除出最终的包。
```js
// m1.js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

// m2.js
import {foo} from './m1.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);

// output: bar baz 
// ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块，

```
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter(); // 模块内部的counter已经变成4了
console.log(mod.counter); // 3
```
### CMD
CMD是SeaJS 在推广过程中对模块定义的规范化产出
对于依赖的模块AMD是提前执行，CMD是延迟执行。不过RequireJS从2.0开始，也改成可以延迟执行（根据写法不同，处理方式不同）。
CMD推崇依赖就近，AMD推崇依赖前置。

### UMD
UMD是AMD和CommonJS的融合
AMD模块以浏览器第一的原则发展，异步加载模块。
CommonJS模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。
这迫使人们又想出另一个更通用的模式UMD （Universal Module Definition）。希望解决跨平台的解决方案。

UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。
在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。
```js
((root, factory) => {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        //CommonJS
        var $ = requie('jquery');
        module.exports = factory($);
    } else {
        root.testModule = factory(root.jQuery);
    }
})(this, ($) => {
    //todo
});
```
> umd模块sample
```js
(function(root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        // console.log('是commonjs模块规范，nodejs环境')
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // console.log('是AMD模块规范，如require.js')
        define(factory())
    } else if (typeof define === 'function' && define.cmd) {
        // console.log('是CMD模块规范，如sea.js')
        define(function(require, exports, module) {
            module.exports = factory()
        })
    } else {
         // console.log('没有模块环境，直接挂载在全局对象上');
        root.umdModule = factory();
    }
}(this, function() {
    let ABC = 1234;
    return ABC;
}));


// 在浏览器引入的html输出 umdModule, 结果： 1234
```


总结：

CommonJS规范规定，每个模块内部，module变量代表当前模块。
这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。



 _____


参考：


[1]. [CommonJS规范-阮一峰](http://javascript.ruanyifeng.com/nodejs/module.html#toc4)  
[2]. [AMD规范-阮一峰](http://www.ruanyifeng.com/blog/2012/11/require_js.html)    
[3]. [JS模块化工具requirejs教程](https://www.runoob.com/w3cnote/requirejs-tutorial-1.html)    
[4]. [ECMASCRIPT 6入门](http://es6.ruanyifeng.com/#docs/module-loader)