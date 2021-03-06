# js状态管理工具

 
## Flux架构,[官方文档](https://facebook.github.io/flux/docs/in-depth-overview)
现代前端框架应用里，页面渲染可以认为是数据状态对页面到反馈，通过一定机制实现数据状态改变自动更新视图。如果直接修改dom将会导致一定到性能问题。为了解决这个问题Facebook的工程师提出的Vitrual Dom的思想，使用一个普通对象模拟dom对象的结构，当数据状态state变化的时候，根据state生成Virtual Dom, 然后在通过Dom diff算法进行对比更新dom,减少渲染过程的性能消耗。视图更新如何合理修改state,为此Facebook工程师提出了Flux架构实现单项数据流。通过集中化管理数据，方便数据变动的追踪和预测。


All data flows through the dispatcher as a central hub. Actions are provided to the dispatcher in an action creator method, and most often originate from user interactions with the views. The dispatcher then invokes the callbacks that the stores have registered with it, dispatching actions to all stores. Within their registered callbacks, stores respond to whichever actions are relevant to the state they maintain. The stores then emit a change event to alert the controller-views that a change to the data layer has occurred. Controller-views listen for these events and retrieve data from the stores in an event handler. The controller-views call their own setState() method, causing a re-rendering of themselves and all of their descendants in the component tree.

所有数据都是流向“dispatcher”（派发器）这个中心枢纽，操作“dispatcher”的方法通常来源于用户交互洁面， 派发器会修改store变化，并且store的变化会上报事件。视图层通过store上报的事件修改视图。

<img src="../../assets/image/flux-simple.png" width="500" hegiht="313" align=center />  

 - **Action**
 Action创建器用于创建方法来调用dispacher.
- **Dispatcher**
每个方法掉通过store在dispatcher注册的回调函数，修改store
- **Store**
store的更新后，会上报一个事件。通过这个事件，控制器-视图派发到每个相关的视图上。

<img src="../../assets/image/flux.png" width="500" hegiht="313" align=center />  


### Vuex
<img src="../../assets/image/vuex.png" width="500" hegiht="313" align=center />

首先，和 Redux 中使用不可变数据来表示 state 不同，Vuex 中没有 reducer 来生成全新的 state 来替换旧的 state，Vuex 中的 state 是可以被修改的。这么做的原因和 Vue 的运行机制有关系，Vue 基于 ES5 中的 getter/setter 来实现视图和数据的双向绑定，因此 Vuex 中 state 的变更可以通过 setter 通知到视图中对应的指令来实现视图更新。

Vuex 中的 state 是可修改的，而修改 state 的方式不是通过 actions，而是通过 mutations。一个 mutation 是由一个 type 和与其对应的 handler 构成的，type 是一个字符串类型用以作为 key 去识别具体的某个 mutation，handler 则是对 state 实际进行变更的函数。

总体的设计原则是Actions 是异步，处理业务逻辑的，而 Mutation 只是简单对state 的状态进行改变。通过这样你所有的组件进行的操作都可以和你的state 的状态一一对应，代码清晰简单。另外还有一个疑问就是“将后端返回的json做相关处理”这个代码又应该是先处理好，然后

总结一下数据流向顺序：
1. 在视图中触发 action，并根据实际情况传入需要的参数。
2. 在 action 中触发所需的 mutation，在 mutation 函数中改变 state。mutation 必须是同步函数，而 action 可以包含任意的异步操作。
3. 通过 getter/setter 实现的双向绑定会自动更新对应的视图。


思考为什么不能在mutation中进行异步操作？

Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

## 原生js实现状态管理

[]





_____

参考资料：
1. [Flux 架构入门教程-阮一峰](http://www.ruanyifeng.com/blog/2016/01/flux.html)
2. [flux-concepts-github](https://github.com/facebook/flux/tree/master/examples/flux-concepts)
3. [浅谈前端状态管理（上）- 知乎](https://zhuanlan.zhihu.com/p/25800767)