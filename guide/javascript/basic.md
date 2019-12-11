
# 变量和类型

```js
 function Person(name, age, salary){
     this.name = name;
     this.age = age;
     this.salary = salary;
 }

 function f1(person){
     person.name = "ls";
     person = new Person("aa", 10, 10);
    
 }
 var p = new Person("sz", 19, 1000);

 console.log(p.name);
 f1(p);
 console.log(p.name);


```


## this绑定

::: tips
一句话概括this绑定：this指向是在调用函数时根据执行上下动态确定的
:::

### 五种this绑定



## 浅拷贝 VS 深拷贝

### 数组使用slice()

### 对象使用Object.asign


### Array


#### reduce函数

reduce方法将数组中对每个元素执行一个由你提供对reducer回调函数，将结果汇总为单个返回值。此方法合适将数组汇总到单个返回值。

arr.reduce(callback(accumulate, currentValue[, index[, array]])[, initialValue])

- callback回调函数，执行数组中的每个值的函数
- accumulate累计器累计回调返回值， 没有设置initalValue,则为数组的第一个元素，这两个都没有，将会报错
- currentValue函数正在处理的数组元素


---------------
##### 用例 

1. 数组累和， [0,1,3,4]
```
const arr = [0,1,3,4]
let total = arr.reduce(function(accumulate, current){
    return accumulate + current
}, 0)
```

2. 数组去重

```js
// method1

let arr = [2,3,5,77,3,23,4,2]
let reducer = function(accumulate, current){
  if(!accumulate.includes(current)){
    accumulate.push(current)
  }
  return accumulate
}
let newArr = arr.sort().reduce(reducer,[])
console.log(newArr)

// method2
Array.from(new Set(arr))
```
3. 计算数组的元素出现的数量
4. 轮流执行多个promise
```js
  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
        console.log('running p1')
      resolve(a * 5);
    });
  }
  
  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
        console.log('running p2')
      resolve(a * 2);
    });
  }
  
function runPromiseByQueue(myPromises) {
  myPromises.reduce(
    (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
    Promise.resolve()
  );
}
  
  const promiseArr = [p1, p2];
  runPromiseInSequence(promiseArr, 10)

new Promise((resolve, reject) => {
  // Promise #1

  resolve();
})
  .then(result => {
    // Promise #2

    return result;
  })
  .then(result => {
    // Promise #3

    return result;
  }); // ... and so on!

```
> reduce是同步的，在一个事件循环就会完成，将多个promise放在数组中，使用ruduce转成串行执行，实际是在内存中快速构建了promise执行队列，将每一个promise函数加入一个了promise.then执行链中。

5. 按照对象属性进行分类
```
// 将对象按照age进行分组
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];
```
6. reduce Polyfill

```js
Array.prototype.reduce = Array.prototype.reduce || function(func, initialVal){
    var arr = this
    // base为累积的结果， 执行第一次，如果由设置初始值则为初始值，没有则为数组第一位
    var base = typeof initialVal === 'undefined' ? arr[0] : initialVal
    // 如果初始值为定义，则数组从第1位开始遍历
    var startIndex = typeof initialVal ==== 'undefined' ? 1 : 0
    arr.slice(startIndex).forEach(function(value, index){
        // 遍历数组结果，并传入的函数
        base = func(base, value, index + startIndex, arr)
    })
    return base
}

```
