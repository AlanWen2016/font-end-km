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


## 节流与防抖
手写防抖和节流工具函数、并理解其内部原理和应用场景

### 1. 节流

函数节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 无视后来产生的函数调用请求，也不会延长时间间隔。3 秒间隔结束后第一次遇到新的函数调用会触发执行，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推。

```js
function throttle(fn, delay = 50) {
    let prev=0;
    return function(...arg){
        let curr = + new Date()
        if(curr - prev > delay){
            prev = curr
            fn.apply(this, arg)
        }
    }
}
```

### 2. 防抖debounce
> 什么是防抖？
在高频率触发的操作中，比如用户疯狂的点击一个按钮，这个按钮后面绑定一个点击事件，向后台接口发送一个异步请求以获取数据。还有比如监听滚动事件scroll。为了限制高频率触发事件，要对事件进行防抖限制。防抖动，就是不断触发事件过程中，我们设定一个定时器，一旦有新的事件触发，就重启计时器，所以最后一次触发才是真正对有效触发。
举一个形象对例子，就像公交车到车站，司机需要停车等待1min，乘客开始上车，只要有乘客上车，司机就只能等待，一直等所有乘客上完车，假设一分钟内，没有乘客再上车，司机才能开车。

```js
// 使用闭包形式保存setTimeout返回对句柄timer
function debounce(fn, delay = 50) {
    let timer = null;
    return function(...arg){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this, arg)   
        }, delay)
    }
}
```
上面对函数第一次执行至少是delay毫秒之后，是无法立即执行，可以添加第三个参数的形式，控制是否立即执行
```js
function debounce(fn, delay = 50, immediate = false) {
  let timer = null;
  return function(...arg){
    if(timer) clearTimeout(timer)

    if(immediate && !timer){
      return fn.apply(this, arg)
    }

    timer = setTimeout(()=>{
      fn.apply(this, arg)   
    }, delay)
  }
}
```
undersocore库的实现 
```js
// 此处的三个参数上文都有解释
_.debounce = function(func, wait, immediate) {
  // timeout 表示定时器
  // result 表示 func 执行返回值
  var timeout, result;

  // 定时器计时结束后
  // 1、清空计时器，使之不影响下次连续事件的触发
  // 2、触发执行 func
  var later = function(context, args) {
    timeout = null;
    // if (args) 判断是为了过滤立即触发的
    // 关联在于 _.delay 和 restArguments
    if (args) result = func.apply(context, args);
  };

  // 将 debounce 处理结果当作函数返回
  var debounced = restArguments(function(args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 第一次触发后会设置 timeout，
      // 根据 timeout 是否为空可以判断是否是首次触发
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
    	// 设置定时器
      timeout = _.delay(later, wait, this, args);
    }

    return result;
  });

  // 新增 手动取消
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

// 根据给定的毫秒 wait 延迟执行函数 func
_.delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});
```




参考：

1. [偏函数和函数柯里化](https://www.cnblogs.com/goloving/p/8542817.html)
2. [MDN-call/bind/apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)