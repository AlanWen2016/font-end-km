# TypeScript

:::tip
 问题
1. TS 的项目开发中有哪些核心语法，语法规范是如何的。
2. TS 的适用场景分析，如何将 TS 编译成指定 JS 标准版本。 --target
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

#### 交叉类型： 几个类型之和
// T&U
```ts
function extend<T, U>(first: T, second: U): T&U{
    let result = {} as T & U
    for(let id in first){
        result[id] = first[id] as any
    }
    for(let id in second){
        if(!result.hasOwnProperty(id)){
            result[id] = second[id] as any
        }
    }
    return result
}
```
## 函数声明
```ts
 function add(x: number, y:number):number{
     return x+y 
 }
 let add1:(baseValue: number, increament: number)=> number = function(a, b){
     return a + b
 }
```
### 可选参数和默认值
```ts
 function add(x: number, y:number = 1, z?:number):number{
     return x+ y + z
 }
```
 
## 对象类型

### 对象的接口（interfaces）

:::tip
 如何理解interfaces
:::
在面向对象语言里，接口（interface）是行为的抽象，接口需要类（classes）来实现（implement）
TS的interfaces概念更为灵活，可以用于1. 类的行为的抽象，2.同时也可以用于描述对象的属性（对象的shape）,
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
```ts
interface Radio {
    switchRadio(): void
}
interface Battery {
    checkBatteryStatus():string
}

class Car implements Radio{
    isRadioOn:boolean = false
   switchRadio(): boolean {
       return !this.isRadioOn
   }
}


class CellPhone implements Radio,Battery {
    isRadioOn:boolean = false
    switchRadio(): boolean {
        return !this.isRadioOn
    }
    checkBatteryStatus(): string {
        return 'battery status'
    }
}

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
// :号后面都是表示类型, 函数中类型变成(x: number, y: number)=>number
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
函数重载： 允许一个函数接受不同的数量或者类型的参数作出不同的处理

```js
function sum(a:number, b:number):void
function sum(a:string, b:string):void
function sum(a: any, b: any): void{
    return a + b;
}
```



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


### 接口和抽象类的区别

#### 接口
1. 接口就是把一些类中的公共的属性和方法抽象出来，用于约束实现此接口的类
2. 接口在面向对象编程中用于表示行为的抽象、描述对象的形状
3. 一个类可以实现多个接口
4. 接口像插件一样增强类，而抽象类是具体类的抽象概念
```ts
// 描述类的interface
// a. 描述类实例的interface和b.描述类的构造器的interface

// 实例接口
interface ClockInterface{
    tick()
}
// 构造器接口
interface ClockContructor{
    new(hour: number, minute: number):ClockInterface
}

function createClock(ctor: ClockContructor, hour: number, minute: number): ClockInterface{
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface{
    constructor(h:number, m: number){
    }
    tick(){
        console.log(1354)
    }
}
class AnalogClock implements ClockInterface{
    constructor(h:number, m: number){

    }
    tick(){
        console.log('anlog')
    }
}
```



#### 抽象类VS接口
- 不同的类之前共有的属性和方法可以抽象成一个接口（Interfaces）
- 抽象类是供其他类继承的基类，抽象类不允许被实例，抽象类的方法必须在子类中被实现
- 接口仅能够用于描述，既不提供方法实现和属性初始化
- 一个类只能继承一个类或抽象类，但是能实现多个接口 

```js
abstract class Animal{
    name:string;
    constructor(name: string){
        this.name = name;
    }
    abstract speck(): void;
}

interface Flying{
    fly():void;
}

class Duck extends Animal implements Flying{
    speck(){
        console.log('Duck 不必')
    }
    fly(){
        console.log('I\'am singing in the sky')
    }
}
let d1 = new Duck('d1');
d1.fly();
```

```ts
class Animal{
    name: string
    constructor(name: string){
        this.name = name
    }
    move(distance: number = 0){
        console.log(`${this.name} move ${distance}`)
    }
}
class Cat extends Animal{
    // super执行父类构造函数
    constructor(name: string){
        super(name)
    }
    move() {
        console.log('走猫步')
        super.move(3)
    }
}
let Tom = new Cat('Tom')
console.log(Tom.move())
```

#### class的属性修饰符： public private protected

- 类(Class): 定义了一切事物的抽象特点, 比如造车, class就是造车的图纸. 
- 对象(Object): 作为类的实例, 造车造出了福特、奥迪宝马
- 面向对象的三大特性: 继承 、封装、多态

- 静态属性, 使用类名直接调用, 不需要实例化
```
class Animal{
    readonly name: string;
    static categories: string[] = ['mammal', 'bird']
    constructor(name: string){
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
```


#### 重写override和重载overload
- 重写指的是子类重写继承自父类的方法
- 重载指的是同一个函数提供多个类型的定义

### 泛型  
- 泛型变量
- 泛型类型
- 泛型类
- 泛型约束
在数组中，例如一个identity函数，它的实现就是你传什么参数，它返回什么参数。这个时候，如果把它的传参定义为any,则无法精准表示原有函数。这个使用类型变量. 函数在定义的时候, 入参和返回结果的类型都是未知, 只有在函数执行才能推断出类型.
```ts
function identity(arg: any): any{
    return arg
}
// T可以作为类型变量，
function identity<T>(arg: T): T{
    // 函数体内必须正确使用类型参数， 比如说使用 arg.length
    return arg
}
```

#### 泛型类型和泛型接口
``` ts
function identity<T>(arg: T): T{
    return arg
}
// 基础用法
let myIdentity:<T>(arg: T)=> T = identity
// 使用对象字面量
let myIdentity2: {<T>(arg: T): T} = identity 
// 使用接口
interface GenericIdentityFn<T>{
    (arg: T): T
}
let myIdentity3: GenericIdentityFn<number> = identity
```
泛型约束: 使用extends关键字, 给泛型T, 赋约束.Lenghtwise表示
```ts
interface Lenghtwise{
    length: number
}

function testIndentity<T extends Lenghtwise>(arg: T): T{
    console.log(arg.length)
    return arg
}

// 使用keyof 
function getPropert<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}
```


### 元组
数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。  
Tuple元组类型： 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。


```js
let tom: [string, number] = ['Tom', 25];
```
### 枚举
```js
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
```
### 泛型（Generics）
是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

> 泛型应用场景
给数组填充任意类型,但是无法准确描述返回结果的数据类型。
```
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
这个时候可以使用泛型,我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。
```js
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray<string>(3, 'x'); // ['x', 'x', 'x']
```

多个参数泛型使用
```js
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
```
- 使用泛型类class
```js
class  Queque<T>{
    private data:T[] = []
    push(item: any){
        this.data.push(item)
    }
    pop() {
        return this.data.shift()
    }
}
let q = new Queque<string>()

interface KeyPair<T, U>{
    key: T,
    value: U
}

let kp1: KeyPair<string, number> = {key: '1234', value: 1234}

```






## 类型保护

### 1. 类型谓词is
```ts
interface Fish{
    swim()
    layEggs()
}
interface Bird{
    fly()
    layEggs()
}
function getSmallPet(): Fish | Bird{
    //
}

let pet = getSmallPet()
if((pet as Fish).swim){
    (pet as Fish).swim()
}else if((pet as Bird).fly){
    (pet as Bird).fly()
}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}
```

### 2. 使用instanceof关键词

### 3. null和undefined类型是其他类型的有效值
```ts
function f2(str: string | null):string{
    // return str! || 'default'  // 增加感叹号表示类型不为null
    return str || 'default'
}
```




参考：

[1].[TypeScript入门教程](https://ts.xcatliu.com/basics/)

