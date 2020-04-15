# JS执行机制

1.为何try里面放return，finally还会执行，理解其内部机制
2.JavaScript如何实现异步编程，可以详细描述EventLoop机制
3.宏任务和微任务分别有哪些
4.可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法
5.使用Promise实现串行
6.Node与浏览器EventLoop的差异
7.如何在保证页面运行流畅的情况下处理海量数据


当拿到一段 JavaScript 代码时，浏览器或者 Node 环境首先要做的就是；传递给 JavaScript 引擎，并且要求它去执行。一个 JavaScript 引擎会常驻于内存中，它等待着我们（宿主）把 JavaScript 代码或者函数传递给它执行。

执行 JavaScript 并非一次性完成，宿主环境当遇到一些事件时，会继续把一段代码传递给 JavaScript 引擎去执行，此外，我们可能还会提供 API 给 JavaScript 引擎，比如 setTimeout 这样的 API，它会允许 JavaScript 在特定的时机执行。我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务。



## 宏任务和微任务

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

// output...

// script start
// script end
// promise1
// promise2
// setTimeout
```
js是单线程的，每个线程有它自己的唯一的事件循环，事件循环的任务源可以不唯一。类似setTimeout, promise, ajax, DOM操作等都是典型的任务源，任务队列中的任务便是来自这些任务源。而这些任务源产生的任务又可以分为Tasks和Microtasks两种。


Each 'thread' gets its own event loop, so each web worker gets its own, so it can execute independently, whereas all windows on the same origin share an event loop as they can synchronously communicate. The event loop runs continually, executing any tasks queued. An event loop has multiple task sources which guarantees execution order within that source (specs such as IndexedDB define their own), but the browser gets to pick which source to take a task from on each turn of the loop. This allows the browser to give preference to performance sensitive tasks such as user-input. 

每个“线程”都有自己的事件循环，因此每个web worker都有自己的事件循环，它可以独立执行。而同一源上的所有窗口都共享一个事件循环，所以它们可以同步通信。
事件循环持续运行，执行任何排队的任务。一个事件循环有多个任务源，这些任务源保证了该源内的执行顺序(比如IndexedDB这样的规范定义了它们自己的任务)，但是浏览器可以在每次循环时选择从哪个源获取任务。这允许浏览器优先选择性能敏感的任务，比如用户输入。

Tasks are scheduled so the browser can get from its internals into JavaScript/DOM land and ensures these actions happen sequentially. Between tasks, the browser may render updates. Getting from a mouse click to an event callback requires scheduling a task, as does parsing HTML, and in the above example, setTimeout.

将任务安排好，以便浏览器能够从内部进入JavaScript/DOM领域，并确保这些操作按顺序发生。在任务之间，浏览器可能重新渲染。从鼠标单击到事件回调需要调度一个任务，解析HTML也是如此，在上面的示例中，需要调度setTimeout。

Microtasks are usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task. The microtask queue is processed after callbacks as long as no other JavaScript is mid-execution, and at the end of each task. Any additional microtasks queued during microtasks are added to the end of the queue and also processed. Microtasks include mutation observer callbacks, and as in the above example, promise callbacks.

微任务通常是针对当前正在执行的脚本之后应该立即发生的事情进行调度的，比如对一批操作进行响应，或者进行异步处理，而不需要承担整个新任务的副作用。
只要在执行过程中没有其他JavaScript，并且在每个任务结束时，就会在回调之后处理微任务队列。在微任务期间排队的任何其他微任务都被添加到队列的末尾并被处理。
微任务包括突变观察者回调，与上面的示例一样，promise回调。



## Event Loop
js引擎提供一种机制来处理分块执行的代码，这种机制就是事件循环：

```js
// 伪代码
var eventLoop = []; // eventLoop 作为队列的数据，存储待执行的事件
var event; // 当前要处理的事件
while(true){
  // 一次tick
if（eventLoop.length > 0）{
    event = eventLoop.shift()
    try{
        // 执行当前事件
        event()
    } catch (err){
        // 错误上报
        reportError(err)
    }
  }
}
```

### 一个完整是事件循环流程

1. 初始状态：调用栈空。micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。
2. 全局上下文（script）标签的代码被推入执行栈，代码同步执行，并产生新的macrotask和microtask任务队列。同步代码执行完了，script 脚本会被移出 macro 队列，这个过程本质上是队列的 macro-task 的执行和出队的过程。
3. 执行微任务
4. 执行渲染操作，更新界面
5. 处理web worker




> setTimeout()为什么不精准？
因为setTimeout并没有把你的回调函数挂在事件循环中。作为一个定时器，当设定时间到达后，环境才把你的回调函数放入事件循环中。这时候你的事件队列可能很长了，所以这个回调执行的时间完全依赖事件队列的状态决定。





_____

参考资料：
1. [tasks-microtasks-queues-and-schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)