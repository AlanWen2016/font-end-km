# TypeScript

:::tip
 问题
1. TS 的项目开发中有哪些核心语法，语法规范是如何的。
2. TS 的适用场景分析，如何将 TS 编译成指定 JS 标准版本。
3. TS 如何使用第三方模块，同时如何发布 TS 模块。
4. 越来越多的项目在往 TS 迁移，如何把老的项目往 TS 迁移。
5. 用 TS 封装 Promise 实现一个中间件函数。

:::

## TS核心语法

js分两种数据类型： 基本数据类型（string, number, undefined, null, symbol,boolean） 和对象数据类型

## 基本数据类型

#### 基本数据类型的定义
```ts
let isDone: boolean = false;
let num: number = 1234;
let und: undefined = undefined;
const str: string = 'string';
```
#### 任意类型

```ts
let something: any;
something = 'seven';
something = 7;
```

#### 类型推论
如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
```ts
let _any；// 推论为任意类型
any = 1324;
any = 'abc';

let mustBeNum = 1234; // mustBeNum被推论为number类型
```
#### 联合类型

```ts
let combineType: string | number;
```
> tips: 只能访问联合类型共有的方法，否则报错
```
function getString(something: string | number) string {
    // return something.length 报错
    return something.toString()  // 共有方法，可以
}
```

## 对象类型

### 对象的接口（interfaces）

:::tip
 如何理解interfaces
:::
在面向对象语言里，接口（interface）是行为的抽象，接口需要类（classes）来实现（implement）
TS的interfaces概念更为灵活，可以用于类的行为的抽象，同时也可以用于描述对象的属性（对象的shape）,
接口的实现（implement）必须实现接口interface所有的方法和属性。多一个，少一个都是不允许的，除非interface配置的是可选属性。
接口定义方式：
- 通用属性
- 可选属性
- 任意属性
- 属性描述： readonly

```ts
// 定义一个interface： Person
interface Person{
    name: string;
    age: number;
}
// interface implement
let Tim: Person = {
    name: 'Tim',
    age: 18
}

// 可选属性、任意属性以及属性的描述
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;  //[propName: string]: string; 将会报错

}
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

```

### 组数类型
```ts
// 定义指定类型数组
let fibonacci: number[] = [1, 1, 2, 3, 5];
// 任意类型
let fibonacci: any[] = [1,{a:1}, 'abc', 2, 3, 5];

// 使用数组泛型
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

#### 类数组（Array-like Object）不是数组类型，比如 arguments
类数组要使用接口来定义
```ts
// 使用内置的接口进行定义
function sum() {
    let args: IArguments = arguments;
}
// arguments要使用接口来描述
function sum() {
    let args: {
        [index: number]: any;
        length: number;
        callee: Function;
    } = arguments;
}
// IArguments相当于
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```

### 函数类型
js函数有两种定义形式：一个是函数声明，另一个函数表达式
```js
function sum (x, y){
    return x + y;
}
let sum = function(x, y) {
    return x = y
}
```
- ts函数写法
```ts
function sum (x: number, y: number): number{
    return x + y;
}
let sum:(x: number, y: number)=>number = function(x: number, y: number): number{
    return x + y;
} 
```
- 接口形式定义函数
```ts
interface foo {
  (arg1: number, arg2: any): boolean
}

let compare: foo = function (a, b){
  return a === b
}
```
- ts函数：可选参数、默认参数、剩余参数、函数重载

### 类型断言
用于手动指定一个值的类型，而不是转换。编写代码显式声明。
语法：
<类型>值 or 值 as 类型 

### 声明文件
使用第三方库时，需要先获得声明文件，才能获得接口不全，代码提升功能。以.d.ts后缀结尾。
- 声明文件的编写...

### 内置对象
js内置的对象，可以作为ts定义好的类型,它们定义在ts的核心文件中。
```ts
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```


参考：

[1].[TypeScript入门教程](https://ts.xcatliu.com/basics/)

