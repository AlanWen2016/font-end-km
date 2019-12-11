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

