# React

React是采用声明式，高效且灵活的构建页面框架。

>声明式VS命令式编程 
- 命令式编程：命令“机器”如何去做事情(how)，这样不管你想要的是什么(what)，它都会按照你的命令实现。
- 声明式编程：告诉“机器”你想要的是什么(what)，让机器想出如何去做(how)。
```js
// 命令式
var makes = [];
for (i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}

// 声明式
var makes = cars.map(function(car){ return car.make; });
```

## JSX 
React认为渲染逻辑本质上和UI逻辑内在耦合。
熟悉JSX语法


## React元素
React元素是React应用的最小单元。
不同于Dom元素，react元素是个普通对象。React Dom会负责更新Dom来与React Dom保持同步状态。


## 组件&Pros




### 组件

组件分类：
- 函数式组件
- class组件，使用ES6的class来定义组件

> 组件编写规则
组件必须以大写字母开头，否则将被视为原生dom标签。
所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

## state&生命周期

- 将函数转化为class组件
```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
- 修改state, setState
- 数据流传递方向






## react事件处理

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```




## react教程- 井字游戏

### react组件声明
```js
class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
```

#### 1. 组件拆分
- Square 井字棋的每个格子
- Board  棋盘 
- Game   在页面为棋盘预留一个占位

#### 2. 交互逻辑
- 使用Props传递数据。 在子组件中使用this.props获取父组件到state属性和方法
- 在声明的组件内，设置组件自身的状态, 在构造函数里设置state
```js
class ShopList extends React.Component {
  constructor() {
    super(); // 使用javascript classes的组件中，当子类继承父类方法，必须执行此方法super,才能获取正确的this绑定
    this.state = {
      value: null
    }
  }
}
```
#### React中到不可变性 
在组件内修改state对象和属性可以使用Object.asign, Array.slice方法进行浅拷贝





