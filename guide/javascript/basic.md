
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




对象就是包含key//value的集合，数组就是一组值的集合
数组具有一个最基本特征：索引，这是对象所没有的，通过 数组名[索引] 可以访问数组元素。数组表示有序数据的集合，而对象表示无序数据的集合。如果数据的顺序很重要，就用数组，否则就用对象。
数组和对象的另一个区别是，数组的数据没有”名称”（name），对象的数据有”名称”（name）。

```js
let obj1 = {
    a: {e: 12},
    b: undefined,
    c: new Date(),
    d: /^\d/,
    f: 1234
}


// 使用for循环
let obj2 = {}
for(key in obj1){
    obj2[key] = obj1[key] 
}
// es6解构赋值
let obj3 = {...obj2}
obj2.a.e = 4
obj2.f = 3
console.log(obj1, obj2, obj3)
let obj4 = Object.assign({}, obj1);
var obj5 = Object.create(obj1);

// 数据浅拷贝， 只拷贝第一层
var a = [1,2,3,4];
var b = a.slice();
b[0] = 2;
alert(a); // 1,2,3,4
alert(b); // 2,2,3,4

// 修改obj第一层数据，如果




let abj = {a: {b: 2}, k: undefined, c: null, f: /^\d/}
function deepClone (obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(typeof obj !== "object") return obj
    let type = Object.prototype.toString.call(obj);
    if(type === "[object Date]"){
        return new Date(obj)
    }
    if(type === "[object RegExp]"){
        return new RegExp(obj)
    }
    for(key in obj){
        let prop = obj[key];        // 避免相互引用对象导致死循环，如obj.a = obj的情况
        if(prop === obj) {            
            continue;
        }     
        if(obj.hasOwnProperty(key)){
            if(obj[key]&&typeof obj[key] ==="object"){
                objClone[key] = deepClone(obj[key]);
              }else{
                //如果不是，简单复制
                objClone[key] = obj[key];
              }
        }
    }
    return objClone
}

let bbj = deepClone(abj)
bbj.a = {c: 26}
console.log(bbj, bbj === abj, abj)

```
热门的函数库lodash，也有提供_.cloneDeep用来做深拷贝


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

## 箭头函数

1. 箭头函数放弃this绑定, 它会从自己的作用域链继承this，无法使用new实例化
2. 不绑定arguments, 当箭头函数调用arguments同样在作用域链中查询
3. 没有prototype属性

