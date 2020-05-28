## 浏览器的回流与重绘
> 浏览器回流与重绘的底层原理，引发原因，如何有效避免

浏览器的渲染流程：

- 1.解析HTML，生成DOM树，解析CSS，生成CSSOM树
- 2.将DOM树和CSSOM树结合，生成渲染树(Render Tree)
- 3.Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
- 4.Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- 5.Display:将像素发送给GPU，展示在页面上。（这一步其实还有很多内容，比如会在GPU将多个合成层合并为同一个层，并展示在页面中。而css3硬件加速的原理则是新建合成层

### 什么是回流，什么是重绘？

回流： reflow, 跟DOM元素的几何属性相关。当DOM元素当几何尺寸发生改变，例如元素的宽、高，隐藏元素时，浏览器需要重新计算元素的几何属性，然后将结果绘制出来，这个过程叫回流，也叫重排

重绘： repaint, DOM元素属性被修改，但是没有改变元素的几何属性，比如说只是改变了元素背景颜色，浏览器不需要重新计算元素的几何属性，直接为该元素绘制样式，这个过程叫重绘。

回流过程一定会导致回流，重绘和回流都是比较消耗性能的，性能优化就是需要减少重绘和回流的次数。

### 哪些操作会导致重绘和回流

导致重绘的操作比较容易识别： 
   不影响元素的几何尺寸，修改元素是颜色、背景色、可见性（visibility）

导致回流的操作：
 - 改变元素的几何属性
    先看元素的几何属性，常见的几何属性：width、height、padding、margin、left、top、border 

- 改变dom树结构
    这里主要是只元素节点的增减和移动，浏览器引擎布局的过程，顺序上可以类比于树的前序遍历——它是一个从上到下、从左到右的过程。通常在这个过程中，当前元素不会再影响其前面已经遍历过的元素。
    当你要用到像这样的属性：
    - offsetTop、offsetLeft、offsetWidth、offsetHeight
    - scrollTop、scrollLeft、scrollWidth、scrollHeight
    - clientTop、clientLeft、clientWidth、clientHeight
    - getComputedStyle()
    - getBoundingClientRect
    - 具体可以访问这个网站：https://gist.github.com/paulirish/5d52fb081b3570c81e3a


- 调用了 getComputedStyle 方法，或者 IE 里的 currentStyle 时，也会触发回流


### 如何减少重绘和回流操作？

- 合并属性操作
- 避免逐条改变样式，使用类名去合并样式
- DOM 离线化： 一旦我们给元素设置 display: none，将其从页面上“拿掉”，那么我们的后续操作，将无法触发回流与重绘——这个将元素“拿掉”的操作，就叫做 DOM 离线化。


#### 最小化重绘和重排
- - 使用cssText
```js
const el = document.getElementById('test');
el.style.cssText += 'border-left: 1px; border-right: 2px; padding: 5px;';
```
- - 修改CSS的class
```js
const el = document.getElementById('test');
el.className += ' active';

```
#### 批量修改DOM

- 使元素脱离文档流
- 对其进行多次修改
- 将元素带回到文档中。

#### css3硬件加速（GPU加速）
划重点：使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘 。但是对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。
- transform
- opacity
- filters
- Will-change

_____

参考资料：
1. [你真的了解回流和重绘吗](https://github.com/chenjigeng/blog/issues/4)

