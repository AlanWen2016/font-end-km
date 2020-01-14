# 响应式对象构建

## Object.defineProperty

The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object. --- MDN
直接定义或者修改对象的属性，并且返回该对象。

> Object.defineProperty(obj, key, descriptor)

- obj需要定义的对象
- 需要定义的对象的属性key
- 需要定义对象的属性key的描述
    - configurable： 决定了对象的key是否可删除
    - enumerable： 决定了对象是否可遍历（枚举）
    - writeable: 决定了对象的key的value是否可修改

> 定一个对象的属性值
```js
let obj = {}
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});
```
> 定义对象属性值，读取数据属性值进行劫持
```js
let obj = {}
Object.defineProperty(obj, 'key', {
  enumerable: true,
  configurable: true,
  writeable:true,
  get(){return 1111},
  set(newValue) { bValue = newValue; },
});
```
如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。定义了value属性，就不用在定义get,set否则报错。

```js
function ScoreReport() {
      var score = null;
      var report = [];
      Object.defineProperty(this, 'score',{
          configurable: true,
          enumerable: true,
          get: function() {
              console.log('getter')
              return score
          },
          set: function(val) {
              score =  val;
              report.push({score: val});
              console.log('setter')
          }
      })
      this.getReport = function() {
          return report;
      }
  }
  let re = new ScoreReport();
  re.score = 1234;
  re.score = 2222;
  console.log(re.getReport());
  // setter 
  // setter
  // [ { score: 1234 }, { score: 2222 } ]
```

## ES6 Proxy
The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
Proxy对象被用于修改(像属性查找，赋值，枚举，函数调用等)默认操作的API


> var proxy = new Proxy(target, handler);

- **target** 代理对象，数组，或者proxy对象
- **handle** 一个对象，其属性是当执行一个操作时定义代理的行为的函数。

> Proxy.revocable() 创建一个可撤销的Proxy对象。

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }
    // The default behavior to store the value
    obj[prop] = value;

    // 表示成功
    return true;
  }
};

let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age); 
// 100
person.age = 'young'; 
// 抛出异常: Uncaught TypeError: The age is not an integer
person.age = 300; 
// 抛出异常: Uncaught RangeError: The age seems invalid
```
