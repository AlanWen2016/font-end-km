# ES6


## async await简单实现

### 1. generator函数
```js
function* gen(){
    console.log(1);
    yield 'Hello 1';
    yield 'Hello 2';
    yield 'Hello 3';
}
let interator = gen();
console.log(interator.next()); //{ value: 'Hello 1', done: false }
console.log(interator.next()); //{ value: 'Hello 2', done: false }
console.log(interator.next()); //{ value: 'Hello 3', done: false }
console.log(interator.next()); //{ value: undefined, done: true }
```
> 1.1 Generator函数基本概念
Generator函数可以理解为内部封装多个状态的状态机，执行Generator函数，会返回一个函数遍历器对象，可以一次遍历函数内部的状态。Genertaor函数的特征：
- 一是，function关键字与函数名之间有一个星号；
- 二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
调用遍历器对象的next方法，会移动Generator指针到下一个状态。并且放回一个结果对象。每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。


> 1.2 async/await的基本用法
```js
 async function foo(){
    let ret1 = await Promise.resolve(1);
    console.log(ret1);
    let ret2 = await Promise.resolve(2);
    console.log(ret2);
}
foo(); // 1， 2 
```

> 1.3 使用generator函数实现async/await

```js
function yeildPromise(generatorFn){
    let interator = generatorFn();
    interatorNext.call(interator);
}
function interatorNext(value){
    let interator = this;
    let result = interator.next(value);
    let val = result.value;
    if(result.done) return;
    Promise.reslove(val).then((val)=>{
        interatorNext.call(interator,val);
    })
}
// TEST
yieldPromise(function* (){
    let ret1 = yield Promise.resolve(3);
    console.log(ret1);
    let ret2 = yield Promise.resolve(4);
    console.log(ret2);
})

// output 3 4

```

_____

参考资料：

1. [知乎-什么是状态机](https://zhuanlan.zhihu.com/p/47434856)  
2. [阮一峰-es6](https://es6.ruanyifeng.com/#docs/generator-async)