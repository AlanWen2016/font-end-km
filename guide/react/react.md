# React


## JSX 
React认为渲染逻辑本质上和UI逻辑内在耦合。
熟悉JSX语法


## React元素
React元素是React应用的最小单元。
不同于Dom元素，react元素是个普通对象。React Dom会负责更新Dom来与React Dom保持同步状态。


## 组件&Pros

### 组件

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





