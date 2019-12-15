# CSS Animation动画/transition过渡/transform变形

::: tip 
CSS Animatioin用于实现一个样式配置转换到两一个样式配置。
动画包括两部分：
- 描述动画样式的规则
- 用于指定动画开始、结果、中间点样式的关键帧
:::

### 描述动画规则

- 2.段落标题
**Animatiion子属性**
- animation-name 动画名称,用于指定@keyframes描述的关键帧名称
- animation-delay dom元素加载完毕后到动画开始执行这段之间
- animation-direction 描述动画每次运行完成是反向运行，还是重新开始运行，有哪些取值
  - normal
  - alternaten 动画交替反向运行 
  - reverse 反向运行
  - alternate-reverse 反向交替， 反向开始交替
- animation-duration 设置动画周期, 1s/33s
- animation-interation-count 动画重复次数，使用数字，或者infinite表示无限重复
- animation-play-state 设置动画暂停、恢复
  -  running 
  -  paused

- animation-timing-function 描述动画速度，实际是动画的加速度曲线，控制动画在关键帧之间的速度变化
  - 常用关键字： 常用linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)
  - [timing-function参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)
- animation-fill-mode 指定动画执行前后为目标元素应用样式
  - none 动画未执行时，动画不应用任何样式与目标
  - forwards 目标将保留执行期间最后一个关键帧的值
  - backwards 动画将在应用于目标时立即应用第一个关键帧中定义的值
  - both 遵循forwars和backwards规则

/* @keyframes duration | timing-function | delay | name */
> 一次性设置所有动画属性：animation: slidein 3s ease-in 1s infinite reverse both running;

完成动画的时间定义后，下一步就是定义动画关键场景。

 ---
### 定义动画序列（关键帧）

使用@keyframes设置两个或者两个以上关键帧，控制动画在对应时间节点要如何渲染
关键帧节点取值：
- 百分比： 0%，25% 75% 100%
- 关键字： to, from

```css
p{
  animation: 3s slidein;
  animation-iteration-count: infinite;
  animation-direction: reverse;
    
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
```


::: tip 
transition过渡，在给定的持续时间内平滑地更改属性值（从一个值到另一个值），也就是只需要指定开始与结束的参数，参数改变时就触发动画。
:::

## Transition过渡

过渡出现背景： CSS3以前，css是没有时间轴的概念，属性的状态变化都是即时完成。要实现属性从一个状态到另一个状态到变化，可以使用transition。
- 如何描述状态过渡？
以高度从0px到100px为例子
1. 过渡时长 transition-duration
2. 执行过渡到开始时间 transition-delay
3. 过渡过程的速度控制 transition-timing-function
4. 是哪个属性要执行过渡变化 transition-property
```css
img{
    transition-property: height;
    transition-duration: 1s;
    transition-delay: 1s;
    transition-timing-function: ease;
}
```
- 过渡的简写形式： transition: 1s 1s height ease

### transition的局限

- 需要事件触发，没法在网页加载是自动发生
- 一次性不可重复
- 只能一定起始状态和结束状态
- 一条规则只能定义一个属性，不能定义多个属性

