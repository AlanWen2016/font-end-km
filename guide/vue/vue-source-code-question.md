# 带着问题寻找答案
1. 谈谈你对mvvm对理解？
2. 响应式原理
3. Vue2如何检测数组变化
4. 为何Vue采用异步渲染
5. nextTick实现原理
使用nextTick保证视图渲染完成, nextTick返回一个promise
- flushQueque（callback）
```js
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    if ( ) {
      macroTimerFunc()
    } else {
      microTimerFunc()
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```

6. Vue的computed的特定
Vue的computed和watch的实现原理都是watcher
- 默认computed也是一个wacher,是具备缓存的，只要当依赖当属性发生改变才会更新视图
initComputed的时候new Watcher会设置{lazy:true, dirty: true}
默认dirty属性为true,完成第一次计算，会将diry属性设置为false，只要computed里的计算属性依赖的数据没有更改，每次获取计算属性时候，直接返回之前执行的缓存结果

7. watch的{deep: true}如何实现


8. 组件的生命周期
9. ajax要写到哪个生命周期
10. 何时需要执行beforeDestory
11. Vue的模版编译原理
12. v-if和v-show的差异
13. v-if和v-for为什么不能连用？
14. vnode如何描述dom？
15. diff算法和算法复杂度
