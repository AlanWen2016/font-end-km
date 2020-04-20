# Promise

## JS单线程与事件循环

JS引擎是建立在单线程事件循环的基础上。单线程意味着同一时间，只能执行一段代码。
每当一段代码需要被执行，就会被放入作业队列（Job Queue）。当这段代码被执行完毕后，事件循环（event loop）就会处理作业队列中的下一个作业。
js引擎提供一种机制来处理分块执行的代码，这种机制就是事件循环。

> 事件循环伪代码

```js
var eventLoop = []; // eventLoop 作为队列的数据，存储待执行的事件
var event; // 当前要处理的事件
while(true){  // 一次tick
if（eventLoop.length > 0）{
    event = eventLoop.shift() // 获取需要执行的队列
    try{
        event()   // 执行当前事件
    } catch (err){
        reportError(err)// 错误上报
    }
  }
}
```
setTimeout()为什么不精准？
setTimeout()方法不是ecmascript规范定义的内容，而是属于BOM提供的功能, 该方法用于在指定的毫秒数后调用函数或计算表达式。
因为setTimeout并没有把你的回调函数挂在事件循环中。作为一个定时器，当设定时间到达后，环境才把你的回调函数放入事件循环中。这时候你的事件队列可能很长了，所以这个回调执行的时间完全依赖事件队列的状态决定。

---
## Promise基础


### [Promise A+规范](https://promisesaplus.com/)的基本内容

1. Promise是什么
A promise represents the eventual result of an asynchronous（ adj.异步的； [eɪˈsɪŋkrənəs]） operation. 
promise代表异步操作的最后结果。
The primary way of interacting with a promise is through its then method,
 与promise进行交互的主要方式是通过then方法，
which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.
该方法通过注册回调以接收promise的最终值或promise未完成的原因。

2. Promise基本要求
- 2.1 一个promise必须处于三种状态之一： 请求态（pending）， 完成态（fulfilled），拒绝态（rejected）。
pedding状态是中间状态，可以转为fulfilled和rejected状态。fulfilled，rejected的状态是最终状态，并且有一个不可变的值。

- 2.2 promise必须提供then方法来存取它当前或最终的值或者原因。promise的then方法接收两个参数：
```
promise.then(onFulfilled, onRejected)
```
OnFulfilled，onReject函数最多被调用1次，OnFulfilled在promise的状态为fulfilled后调用，OnReject在promise状态为rejected之后调用。

- 2.3 then方法可以被多次调用，且返回一个promise对象

- 2.4 promise一些决议细节


### Promise相关Api



### 简版Promise实现

#### 1. 基本架子,实现.then()形式调用

```js
function MyPromise(executor) {
    const self = this
    this.status = 'pending'
    this.value = null
    this.reason = null
  
    function resolve(value) {
      self.value = value
    }
    function reject(reason) {
      self.reason = reason
    }
    executor(resolve, reject)
  }
  
  MyPromise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {
    onfulfilled(this.value)
    onrejected(this.reason)
  }  
```

```js
// 测试代码
  let promise1 = new MyPromise((resolve, reject) => {
    resolve('data');
    reject('error');
  })
  promise1.then(data => {
    console.log(data)
  }, error =>{
    console.log(error)
  })
```
上面代码输出data error。promise只能处于3中状态之一。




#### 2. 解决异步执行的问题
```
let promise3 = new MyPromise((resolve, reject) => {
   resolve('data')
})
promise3.then(data => {
  console.log(data)
})
console.log(1)
```



#### 3. 链式调用

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('lucas')
  }, 2000)
})

promise.then(data => {
  console.log(data)
  return `${data} next then`
})
.then(data => {
  console.log(data)
})
```
> 一个 Promise 实例的 then 方法体 onfulfilled 函数和 onrejected 函数中，是支持再次返回一个 Promise 实例的，也支持返回一个非 Promise 实例的普通值；并且返回的这个 Promise 实例或者这个非 Promise 实例的普通值将会传给下一个 then 方法 onfulfilled 函数或者 onrejected 函数中，这样就支持链式调用了。


#### 4. 透穿实现
> .then() 函数传递非函数值作为其参数时，实际上会被解析成 .then(null)，这时候的表现应该是：上一个 promise 对象的结果进行“穿透”，如果在后面链式调用仍存在第二个 .then() 函数时，将会获取被穿透下来的结果。

```js
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
      resolve('lucas')
  }, 2000)
})

promise.then(null)
.then(data => {
  console.log(data)
})
```

```js
Promise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {
  onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
  onrejected = typeof onrejected === 'function' ? onrejected : error => { throw error }

    // ...
}
```

4. 其他Promise静态方法的实现

- Promise.prototype.catch
- Promise.resolve，Promise.reject
- Promise.all
- Promise.race

4.1 Promise.prototype.catch

测试代码
```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('lucas error')
  }, 2000)
})

promise1.then(data => {
  console.log(data)
}).catch(error => {
  console.log(error)
})
```

4.2 Promise.reslove, Promise.reject
测试代码
```js
Promise.resolve('data').then(data => {
  console.log(data)
})
console.log(1)
```

4.3 Promise.all
测试代码
```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('lucas')
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('lucas')
  }, 2000)
})

Promise.all([promise1, promise2]).then(data => {
  console.log(data)
})
```

4.4 Promise.race
测试代码
```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('lucas1')
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('lucas2')
  }, 4000)
})

Promise.race([promise1, promise2]).then(data => {
  console.log(data)
})
```





