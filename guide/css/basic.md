# CSS基础



## 水平、垂直居中的实现
```css
.wrap{
    width: 500px;
    height: 500px;
    background: grey;
    position: relative;
}
.wrap .box{
    width: 200px;
    height: 200px;
    background: pink;
    /* position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto; */

    /* position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px; */

    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) */
    }

```
## BFC

Block Formatting Context（块级格式化上下文)))， 具有BFC特性的元素，可以看作带有隔离功能的容器， 容器内部元素布局不会影响到外部元素。

### 触发BFC的条件
- body元素
- 绝对定位元素： position(absolute、 fixed)
- display为inline-block、 table-cell、flex
- overflow不为visible以外的值（hidden、 auto、 scroll）


### BFC使用场景

- BFC下外边距折叠，可以放在不同的BFC容器中
- BFC清除浮动
- 阻止浮动元素覆盖，用于左边定宽，右边自适应

```html
<div style="height: 100px;width: 100px;float: left;background: lightblue;margin: 10px">我是一个左浮动的元素</div>
<div style="height: 200px;background: #eee;overflow: hidden;">我是一个没有设置浮动, 
也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>
```
