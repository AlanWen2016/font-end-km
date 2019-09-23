
#### 1.多重边框的实现
- 使用box-shade
- 使用box-shadow + outline

#### 2.灵活的背景定位
- background-postion
a. 使用top bottom等方位
b. 使用background-origin: 设置值为content-box, padding-box, border-box
c. 使用cacl()计算，设置background-position设置，第一个值水平位置，第二个值垂直位置

#### 3.外框直角、内框圆角的框
a. 使用两个元素，里面的元素设置圆角，外部元素不设置
b. 只用一个元素，内部元素设置border-radius,和outline描边，再使用box-shadow填充border-radius的缝隙


#### 4.复杂的背景图片实现 p64先跳过


#### 7. 伪随机背景 跳过
#### 8. 连续的图像边框 跳过

## 第三章 

#### 9. 自适应的椭圆

- boder-radius属性可以单独指定水平和垂直半径，使用斜杠(/)进行分隔
- boder-radius属性： 
border-top-left-radius
border-top-right-radius
border-bottom-right-radius
border-bottom-left-radius

```css

  .ellipse {
    background: #fb3;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    }
```

#### 10. 平行四边形
使用斜向拉伸
```css
.button { transform: skewX(-45deg); }
```

#### 11. 菱形

两种方法： 
1. 使用两个div，反向旋转
2. 路径裁切
```css
.picture {
width: 400px;
transform: rotate(45deg);
overflow: hidden;
}
.picture > img {
max-width: 100%;
transform: rotate(-45deg) scale(1.42);
}

// method 2

img {
    clip-path: polygon(50% 0, 100% 50%,
    50% 100%, 0 50%);
    transition: 1s clip-path;
}
img:hover {
    clip-path: polygon(0 0, 100% 0,
    100% 100%, 0 100%);
}
```

#### 12. 切角效果
使用多层背景实现

#### 13. 梯形标签页

#### 14. 简单的饼图

#### 15. 单侧投影
使用负值
box-shadow: 0 5px 4px -4px black;

#### 16. 不规则投影
#### 17. 染色效果

```css
filter: sepia(1) saturate(4) hue-rotate(295deg);
```
#### 18. 毛玻璃效果
#### 19. 折角效果

## 第五章 字体排印
#### 20. 连字符断行
#### 21. 插入换行
有一个Unicode 字符是专门代表换行符的：0x000A􀅖。在CSS 中，
这个字符可以写作"\000A"，或简化为"\A"。

```css
dt::before {
    content: '\A';
    white-space: pre;
}

```
#### 22. 文本行的斑马条纹
```css
.zebra-lines{
    padding: .5em;
    line-height: 1.5;
    background: beige;
    background-size: auto 3em;
    background-origin: content-box;
    background-image: linear-gradient(rgba(0,0,0,.2) 50%,
    transparent 0);
}

```
#### 23. 调整tab 的宽度
```
pre {
tab-size: 2;
}
```
#### 24. 连字 不需要吧
#### 25. 华丽的& 符号  花里胡哨
#### 26. 自定义下划线
```
.underline{
    background: linear-gradient(90deg,
    gray 66%, transparent 0) repeat-x;
    background-size: .2em 2px;
    background-position: 0 1em;
}
```

#### 27. 现实中的文字效果
#### 28. 环形文字
SVG
#### 29. 选用合适的鼠标光标
#### 30. 扩大可点击区域
.hit-area-border{
    border: 10px solid transparent;
    box-shadow: 0 0 0 1px rgba(0,0,0,.3) inset;
    background-clip: padding-box;
}
#### 31. 自定义复选框
#### 32. 通过阴影来弱化背景 
遮罩层
.

#### 33. 通过模糊来弱化背景
#### 34. 交互式的图片对比控件

## 第七章 结构和布局



#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 
#### 