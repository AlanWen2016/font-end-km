# js执行机制

## 进程与线程
**进程**是CPU资源分配的最小单位,进程包括运行中的程序和程序所使用到的内存和系统资源.

**线程**是建立在进程的基础上的一次程序运行单位，通俗点解释线程就是程序中的一个执行流，一个进程可以有多个线程

区别：
进程是操作系统分配资源的最小单位，线程是程序执行的最小单位

一个进程由一个或多个线程组成，线程可以理解为是一个进程中代码的不同执行路线

进程之间相互独立，但同一进程下的各个线程间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)

调度和切换：线程上下文切换比进程上下文切换要快得多

## js单线程

1. js作为浏览器端脚本语言，主要用于实现用户交互和操作dom,设计为单线程可以规避复杂的同步问题。


## 浏览器的进程

1. 浏览器的一些进程：
1.1 Browser进程
- 浏览器的主进程(负责协调、主控)，该进程只有一个
- 负责浏览器界面显示，与用户交互。如前进，后退等
- 负责各个页面的管理，创建和销毁其他进程
- 将渲染(Renderer)进程得到的内存中的Bitmap(位图)，绘制到用户界面上
- 网络资源的管理，下载等
1.2 GPU进程 
-  该进程也只有一个，用于3D绘制等等
1.3 第三方插件进程

1.4 渲染进程(重)
-即通常所说的浏览器内核(Renderer进程，内部是多线程)
-每个Tab页面都有一个渲染进程，互不影响
-主要作用为页面渲染，脚本执行，事件处理等



> 渲染进程Renderer的主要线程: GUI渲染线程、JS引擎线程、事件触发线程、定时触发器线程、异步http请求线程





GUI渲染线程
负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等

解析html代码(HTML代码本质是字符串)转化为浏览器认识的节点，生成DOM树，也就是DOM Tree
解析css，生成CSSOM(CSS规则树)
把DOM Tree 和CSSOM结合，生成Rendering Tree(渲染树)


当我们修改了一些元素的颜色或者背景色，页面就会重绘(Repaint)
当我们修改元素的尺寸，页面就会回流(Reflow)
当页面需要Repaing和Reflow时GUI线程执行，绘制页面
回流(Reflow)比重绘(Repaint)的成本要高，我们要尽量避免Reflow和Repaint
GUI渲染线程与JS引擎线程是互斥的

当JS引擎执行时GUI线程会被挂起(相当于被冻结了)
GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行


JS引擎线程
JS引擎线程就是JS内核，负责处理Javascript脚本程序(例如V8引擎)
JS引擎线程负责解析Javascript脚本，运行代码
JS引擎一直等待着任务队列中任务的到来，然后加以处理

浏览器同时只能有一个JS引擎线程在运行JS程序，所以js是单线程运行的
一个Tab页(renderer进程)中无论什么时候都只有一个JS线程在运行JS程序


GUI渲染线程与JS引擎线程是互斥的，js引擎线程会阻塞GUI渲染线程

就是我们常遇到的JS执行时间过长，造成页面的渲染不连贯，导致页面渲染加载阻塞(就是加载慢)
例如浏览器渲染的时候遇到"script"标签，就会停止GUI的渲染，然后js引擎线程开始工作，执行里面的js代码，等js执行完毕，js引擎线程停止工作，GUI继续渲染下面的内容。所以如果js执行时间太长就会造成页面卡顿的情况


事件触发线程

定时触发器线程

异步http请求线程


## 事件循环

JS引擎线程只会执行执行栈中的事件，执行栈中的代码执行完毕，就会读取事件队列中的事件并添加到执行栈中继续执行，这样反反复复就是我们所谓的事件循环(Event Loop)

## 宏任务与微任务
在ECMAScript中，macrotask也被称为task
我们可以将每次执行栈执行的代码当做是一个宏任务(包括每次从事件队列中获取一个事件回调并放到执行栈中执行)， 每一个宏任务会从头到尾执行完毕，不会执行其他
由于JS引擎线程和GUI渲染线程是互斥的关系，浏览器为了能够使宏任务和DOM任务有序的进行，会在一个宏任务执行结果后，在下一个宏任务执行前，GUI渲染线程开始工作，对页面进行渲染


常见的宏任务

主代码块
setTimeout
setInterval
setImmediate ()-Node
requestAnimationFrame ()-浏览器

ES6新引入了Promise标准，同时浏览器实现上多了一个microtask微任务概念，在ECMAScript中，microtask也被称为jobs
我们已经知道宏任务结束后，会执行渲染，然后执行下一个宏任务， 而微任务可以理解成在当前宏任务执行后立即执行的任务
当一个宏任务执行完，会在渲染前，将执行期间所产生的所有微任务都执行完

宏任务 -> 微任务 -> GUI渲染 -> 宏任务 -> ...

常见微任务

process.nextTick ()-Node
Promise.then()
catch
finally
Object.observe
MutationObserver



------

参考： 

1. [一次搞懂JS运行机制](https://juejin.im/post/5e22b391f265da3e204d8c14#heading-13)