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

## Promise基本用法