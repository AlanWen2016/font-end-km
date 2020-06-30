# 计划目录

- vue源码阅读与总结
- 公司webpack项目升级
- 脚手架工具和包管理，技术沉淀
- 写一个ts项目，项目ts推动
- 算法题
- 性能优化方案
- 设计模式




## 前端性能监控 [前端性能监控](https://juejin.im/post/5d8cc378f265da5ba0776f36)
## 前端错误上报处理
## TS项目
## 骨架屏

## ssr



- new 实现
- call/apply 实现
- bind 实现
- deepclone 深拷贝实现
- throttle 实现
- debounce 实现
- URL 参数解析实现
```js
let url = 'http://localhost:9001/static/index.html?id=3245&user=34'
let str = window.location.search.match(/[?&][^?&]+=[^?&]+/g) // ['?id=3245', '&user=34']
let obj = {}
str.forEach((item)=>{
    item = item.substring(1).split('=')
    obj[item[0]] = obj[item[1]]
})

```
- Promise 实现
- setTimeout 实现
- async/await 实现
- 订阅/发布实现
- 柯里化实现

```
```