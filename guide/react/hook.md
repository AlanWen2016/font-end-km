# React Hook


- react hook解决是什么问题
- 常见hook使用

> hook在16.8.0版本后支持, 添加hook的原因:

- 完全可选
- 100%向后兼容
- 没有计划从 React 中移除 class
- Hook 不会影响你对 React 概念的理解?


> hook想要解决的问题

1. 在组件之间复用状态逻辑很难
2. 复杂组件变得难以理解
3. 难以理解的 class


### 组件之间的逻辑复用方法
- render props
- 高阶组件

```js
const Example:React.FC = ()=> {
    const [count, setCount] = useState(1)
    const [day, setDay] = useState('Sun');
    enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
    const changeDay = ()=>{
        setDay(Days[Math.floor(Math.random() *7)])
    }
    useEffect(()=>{
        let div = document.createElement('div')
        div.innerText = `You click ${count} times`
        let body: HTMLElement = document.querySelector('body')!
        body.appendChild(div)
    }, [count])
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>click me +1</button>
            <button onClick={changeDay}>change day</button>
            <h2>{count}</h2>
            <h2>{day}</h2>
        </div>
    )
}
```
Hook在函数式组件中使用,函数式组件没有生命周期钩子和React state. Hook相当于引入这些钩子.

- useState Hook
函数组件内调用useState这个hook, 会返回一个state和修改这个state的函数, 函数的参数是这个state的初始值. 使用数组解构他们
```js
    const [count, setCount] = useState(1)
```
- useEffect Hook
副作用: React组件中, 执行数据获取、订阅和修改dom这些操作,都是副作用.跟class组件中的生命周期钩子: componentDidMount, componentDidUpdate, componentWillUnMount的作用相同, 对组件产生副作用, useEffect Hook相当于这些钩子对合成. useEffect通过返回一个回调函数消除副作用.
当你调用useEffect时, 就是告诉React在组件完成更新后,需要执行这个“副作用”


> 注意: hook的使用条件
- 在函数的最外层使用, 不能在函数的循环、条件判断和子函数中使用
- 只能在react函数组件中使用

```js
// 自定义hook, 一个计数器
function useIncreamentTimer(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count+ 1)
        }, 1000)
        // 返回一个callback, 清除副作用
        return () => clearInterval(timer)
    })
    return count
}
```


### 其他的Hook

- useReducer
```ts
interface CountState {
    count: number
}
function reducer(state: CountState, action: IActionTypes) {
    switch (action.type) {
        case 'increament':
            return { count: state.count + 1 }
        case 'decreament':
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}
const Counter: React.FC = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Counter: {state.count}
            <button onClick= {()=> dispatch({type: 'increament'})}>+</button>
            <button onClick= {()=> dispatch({type: 'decreament'})}>-</button>
        </>
    )
}
```






