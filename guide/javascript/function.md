# Function原型方法

- JavaScript的世界观里, 函数也是对象, 函数是一等公民？为什么

## Function.prototype.call方法 fun.call(thisArg, arg1, arg2, ...)
call方法一个指定this值和单独给出一个或者多个参数来调用一个函数，改变函数执行中的this绑定。


- 使用call方法调用父构造函数
可以使用call来实现继承，写一个方法，然后让另一个兑现继承它。

```js
function Computer (name) {
    this.name = name;
    this.run = function () {
        console.log('Programing is running')
    }
}

function Mac () { 
    Computer.call(this, 'Mac')
    this.os = 'IOS'
}
function Pc () {
    Computer.call(this, 'Pc');
    this.os = 'Windows'
}

var _pc = new Pc()
var _Mac = new Mac()
```
- 使用 call 方法调用函数并且指定上下文的 'this'
```
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};
```
- 使用 call 方法调用函数并且不指定第一个参数（argument), 默认情况this指向window全局对象，严格模式‘use strict’则为undefined



## apply方法

apply(thisArg, arrArg))调用一个具有给定this值的函数，第二个参数是数组（或者类数组）,数组参数有长度限制，依照不同的js引擎不同，javascript核心已经做了限制65536个。


> 用例

- 使用apply进行数组合并
```js
var arr1 = [1, 3, 4];
var arr2 = ['a', 'b'];
// 可用concat返回一个新的数组

// 1. 将使用push方法
arr1.push.call(arr1, arr2)
console.log(arr1)
```
- 获取数组中最大数值， 使用Math.min, Math.max
apply允许你在本来需要使用数组遍历的变量的任务中使用内置函数。
```
var arr1 = [23,2,123,65,2,34,67,3,22];
/* 应用(apply) Math.min/Math.max 内置函数完成 */
Math.min.apply(null, arr1) // /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
Math.max.apply(null, arr1)
```

## bind方法

bind方法回返回一个绑定函数，无论这个函数怎么调用，this都是绑定到值。bind用于绑定执行上下文，和初始函数。

js新手容易犯的错误，就是引用对象的方法，例子如下：

```js
this.x = 9;    // 在浏览器中，this指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81
var retrieveX = module.getX;
retrieveX();   // 此时，执行函数的this指向window， 所以返回结果9
```
由于对象内容this的指向会由函数调用的执行上下文决定，对象内容的属性和方法也会因此改变。
可以使用bind方法进行显示绑定。上面的例子可以修改为：

```js
var bindGetX = retrieveX.bind(moudule)
bindGetX()//  output: 81
```



#### bind的使用技巧

- 偏函数
当bind第一个参数为null，bind方法不修改原有函数的this绑定，当可以绑定前面的参数
```js
function multiply (a,b, c){
  return a*b*c;
}
var double = multiply.bind(null, 2)
double(3,4) // Outputs: 24
```

维基百科上的偏函数定义： 
In computer science, partial application (or partial function application) 
refers to the process of fixing a number of arguments to a function, 
producing another function of smaller arity.
大意是，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。
（什么是元？元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。）


#### bind方法在ECMAscript5发布的，在IE9及以上版本支持。bind方法的polyfill

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
          return fToBind.apply(this instanceof fBound
                 ? this
                 : oThis,
                 // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 维护原型关系
    if (this.prototype) {
      // 当执行Function.prototype.bind()时, this为Function.prototype 
      // this.prototype(即Function.prototype.prototype)为undefined
      fNOP.prototype = this.prototype; 
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```



### call， bind, apply
bind是返回对应函数，便于稍后调用，apply、call是立即调用；




参考：

1. [偏函数和函数柯里化](https://www.cnblogs.com/goloving/p/8542817.html)
2. [MDN-call/bind/apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)