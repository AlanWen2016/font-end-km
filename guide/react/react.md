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

> JSX属性和表达式


## React元素
React元素是React应用的最小单元。
不同于Dom元素，react元素是个普通对象。React Dom会负责更新Dom来与React Dom保持同步状态。

ReactDOM.render可以保证浏览器显示跟React元素保持一致, React更新的时候,只更新必要元素



## 组件&Pros




### 组件

组件分类：
- 函数式组件
- class组件，使用ES6的class来定义组件


> 组件编写规则
组件必须以大写字母开头，否则将被视为原生dom标签。
所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

```js
interface Props {
    name: string
}
function Welcome(props: Props):React.ReactElement {
    return <h1>hello {props.name}</h1>
}
const Welcome2: React.FunctionComponent<Props> = (props: Props): React.ReactElement =>{
    return <h1>hello {props.name}</h1>
}

ReactDOM.render(<Welcome name="abc"/>, root)
```
函数式组件就像一个纯函数, 因为这个函数只接受属性和对象,并却返回一个值,输入确定,输出确定.
```js
// class 组件
class Welcome2 extends React.Component<Props>{
    render(): React.ReactElement{
        return <h1>hello {this.props.name}</h1>
    }
}
ReactDOM.render(<Welcome2 name="efg"/>, root)
```

### 复合组件和提供组件



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

### setState方法
setState方法由父类Component所提供，当我们调用这个方法，React.js会更新组件的状态state,并重新调用render方法，然后再把render方法
所渲染的最新内容更新到页面上。

- setState传递对象
```js
handleClick() {
  this.setState({
    isLike: false
  })
}
```
- setStatus传递函数

```js
  handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }
```
 







## react事件处理

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

- 这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上。
- event对象：和普通浏览器一样，事件监听函数会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对象所包含的方法和属性都基本一致。不同的是 React.js 中的 event 对象并不是浏览器提供的，而是它自己内部所构建的.
- this的绑定问题: 
React.js调用你所传给它的方法，并不是通过对象的方式进行调用（this.handleClick），而是通过函数调用（handleClick）,所以事件监听函数内并不能通过**this**获取到实例。这一点跟vue不一样。

如果想要在函数中使用当前实例，就需要手动绑定将实例方法bind到当前实例。


#### 绑定两个事件

```jsx
class Dog extends Component{
  bark() {
    console.log('汪汪汪')
  }
  run() {
    console.log('run run run')
  }
  render() {
    return (
      <h2 onClick={()=>{this.bark(); this.run()}}>Dog Dog Dog</h2>
    )
  }
}

```

### 组件插槽
this.props.children可以获得插槽内的内容。
```js
class Card  extends Component{
    render() {
        return (
            <div>
                <h2>Card</h2>
                {this.props.children}
            </div>
        )
    }
}

class Cards extends Component{
  render() {
    return (
      <div>
        <Card>
           <h3 className='red'>h3</h3>
        </Card>
      </div>
    )
  }
}
```

### 渲染原生html代码
```js
class DangerHtml extends Component {
  constructor() {
    super();
    this.state = {
      rawHtml: "<div>here is raw html</div>",
    };
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.rawHtml }}></div>
      </div>
    );
  }
}
```

### style样式编写
在 React.js 中你需要把 CSS 属性变成一个对象再传给元素：

```js
<h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
```

### 组件参数校验
组件参数校验需要引入第三方库: prop-types
```
npm install --save prop-types
```

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object
  }

  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}
```
> 复用组件业务逻辑的方法可以使用高阶组件和render props 
## HOC高阶组件
```js
const withDoNothing = ((Component)=>{
  const newComponent = (props) =>{
    return <Component {...props} />
  }
  return newComponent
})
```
高阶组件使用React作为参数，并且返回一个全新的React组件作为结果。高阶组件一般带有with前缀，高阶组件本身是个纯函数，可以用于抽象出的公共逻辑部分

```js
const withLoginIn = (Component) =>{
  const NewComponent = (props) =>{
    if(getUserId()){
      return <Component {...props}/>
    }else{
      return null;
    }
    return NewComponent
  }
}
```

## render props

一个简单的render props组件， 
```js
const renderAll = (props) =>{
  return (
    <React.Fragment>
      {porps.children(props)}
    </React.Fragment>
  )
}

// useage
<RenderAll>
{()=> <h1>Hello world</h1>}
</RenderAll>

```
"render props"是指一直在react组件之间使用一个值为函数的prop共享代码的简单技术。
renderAll预期子组件是一个函数，它所做的事情就是把子组件当做函数使用，调用的参数就是传入的props.
render props是React师姐的“依赖注入” （Dependency Injection）

> 以根据用户登录态决定是否显示一些用户界面为例

```js
const Login = (props)=>{
  const userName = getUesrName()
  if(userName){
    const allProps = {userName, ...props}
    return (
      <React.Fragment>
        {props.children(allProps)}
      </React.Fragment>
    )
  }else{
    return null
  }
}

// usage
<Login>
  <--传递一个函数组件进去， 返回一个新的组件-->
  {({userName})=> <h1>Hello {userName}</h1>}
</Login>
```
上面的例子作为render方法的是props.children,这个模式“以函数为子组件（function as chiild）”, 实际上任何props都可以作为函数.
用户登录信息是可复用的逻辑，通过传参的形式，注入依赖， 后续别的业务组件需要使用的登录逻辑，同样可以使用依赖注入。

```JS
const Auth = (props)=>{
  const userName = getUserName()
  if(userName){
    const allProps = {userName, ...props}
    return (
      <React.Fragment>
        {props.login(allProps)}
      </React.Fragment>
    )
  }else{
     <React.Fragment>
      {props.noLogin(props)}
     </React.Fragment>
  }
}

// useage
<Auth
  login={({userName})=> <h1>Hello {userName}</h1>}
  onLogin = {()=> <h1>NO Login</h1>}
>

</Auth>
```
> 总结：

- 形式上： render props实际上还是React 组件， HOC其实是个产生React组件的函数




-------
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
class LikeButton extends React.Component {
  constructor() {
    super(); // 使用javascript classes的组件中，当子类继承父类方法，必须执行此方法super,才能获取正确的this绑定
    this.state = {
      isLike: false
    }
  }
  handleClickBtn() {
    // 
    this.setState({
      isLiked: !this.state.isLiked
    })
    if(this.props.onClick){ // 调用父组件传递的方法
      this.props.OnClick();
    }
  }
  render(){
    return (
      <div onClick={this.handleClickBtn.bind(this)}>
      {
        this.state.isLike ? this.props.isLiked : this.props.unliked
      }
      </div>
    )
  }
}

class Index extends React.Compoent{
  constructor(){
    super();
  }
  render() {
    return (
      <LikeButton 
      wordings={{isLiked: '已赞', unliked: '赞'}}
      onClick={()=>{ console.log('click on like button')}}
       />
    )
  }
}
```

设置默认props值
```js
static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
```


#### React中到不可变性 
在组件内修改state对象和属性可以使用Object.asign, Array.slice方法进行浅拷贝。
props一旦传入， 不可以在组件内部对它进行修改，但是可以通过父组件主动重新渲染的方式来传入新的props,从而达到更新的效果。



### 列表渲染

```js
const users = [
  { username: "Jerry", age: 21, gender: "male" },
  { username: "Tomy", age: 22, gender: "male" },
  { username: "Lily", age: 19, gender: "female" },
  { username: "Lucy", age: 20, gender: "female" },
];
class UserList extends Component {
  render() {
    return (
      <div>
        {users.map((user, i) => {
          return (
            <div key={i}>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr/>
            </div>
          );
        })}
      </div>
    );
  }
}
```

## react的生命周期

> React16 前的生命周期
```js
compoentWillMount // 组件创建后,render前
componentDidMount // 组件挂载完成
componentWillReceiveProps // 接收nextProps
shouldCompoentUpdate // state或props改变粗发,如果该函数的返回值为 false，则生命周期终止，反之继续；
compoentWillUpdate
compoentDidUpdate // 
compoentWillUnMount // 卸载
```

废弃的生命周期: compoentWillReceiveProps、 componentWillUpdate、componentWillMount
> React16 开始应用的新生命周期


挂载过程：

- constructor
- getDerivedStateFromProps
- render
- componentDidMount
更新过程：

- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate
卸载过程：

- componentWillUnmount

# Redux

> redux设计思想 
- web应用是一个状态机，视图与状态是一一对应
- 所有状态存在一个对象里。