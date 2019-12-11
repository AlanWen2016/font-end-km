# 作用域和闭包

## 闭包


在函数外部可以引用并访问函数内部作用域和变量，就是闭包。
函数嵌套函数时，内层函数引用了外层函数作用域下的变量，并且内层函数在全局环境下可访问，就形成了闭包。

```js
function numGenerator() {
    let num = 1
    num++
    return () => {
        console.log(num)
    } 
}
var getNum = numGenerator()
getNum()
```
通过函数创建函数作用域，通常在函数外部无法直接访问函数作用域的变量。但函数执行完，函数的执行上下文即被销毁。
如果返回一个函数，在函数外部可以引用这个变量，就会导致这个函数创建的作用域一直存在内存中。


### 使用闭包创建单例模式：


- 使用单例模式创建弹窗

```js
var createDialog = (function() {
    var div;
    return function() {
        if(!div){
            div = document.createElement('div')
            div.innerHTML = 'This is A Dialog'
            div.style.display = 'none'
            document.appendChild(div)
        }  
        return div;
    }
})()
```
- 抽象出创建单例模式的函数，将业务和创建单例模式的函数解耦出来

```js

var getSingle = function(fn){
    var result;
    return function() {
        result || (result= fn.apply(this, arguments))
    }
}

var createDialog = function() {
    var div = document.createElement('div')
    div.innerHTML = 'This is A Dialog'
    div.style.display = 'none'
    document.appendChild(div)
    return div
}
var getSingleDialog = getSingle(createDialog)
```







参考：


[1]. [MDN-闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)  
