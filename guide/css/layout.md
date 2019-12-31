# css布局

> 目录
- 水平和垂直居中
- 常规布局

[参考链接](https://www.sweet-kk.top/css-layout/#/)


## 1. 水平居中实现

```css
.parent{
    background-color: beige;
}
.son{
    background-color:burlywood;
}

/* 方案1: 定宽，使用margin: 0 auto*/
.parent{
    width: 600px;
    height: 400px;
}
.son{
    width: 300px;
    height: 200px;
    margin: 0 auto;
}

    /* 方案2: text-aling:center */
.parent{
    text-align: center;
}
.son{
    display: inline-block;
}

/* 方案3: 绝对定位*/
    .parent{
    position: relative;
}
.son{
    width: 600px; 
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}  

    /* 方案4: flex布局*/
    .parent{
    display: flex;
    justify-content: center;
}

```

## 2.垂直居中

1. 行内元素使用line-height
```css
.parent{
    height: 100px;
    line-height: 100px;
}
// 说明： 如果是n行，line-height = height / n 
```
2. 图片居中
```css
.parent{
    height: 100px;
    line-height: 100px;
    font-size: 0;
}
img{vertical-align: middle;} /*默认是基线对齐，改为middle*/
```
3. 块级元素居中

3.1 table-cell
```
<div class="parent">
    <div class="son"></div>
</div>
.parent{
    display: table-cell;
    vertical-align: middle;
}
// 设置tabl-cell的元素，宽度和高度的值设置百分比无效，需要给它的父元素设置display: table; 才生效；
table-cell不感知margin，在父元素上设置table-row等属性，也会使其不感知height；设置float或position会对默认布局造成破坏，可以考虑为之增加一个父div定义float等属性；内容溢出时会自动撑开父元素
```

3.2 绝对定位
```
.parent{
    height: 150px;
    position: relative;  
}
#son{
    position: absolute; 
    top: 50%;  // 父元素高度一半,这里等同于top:75px;
    transform: translateY(-50%);  // 自身高度一半, 25px
    height: 50px;
}
```
3.3 margin: auto
```css
.parent{position: relative;}
.son{
    position: absolute;
    margin: auto 0;
    top: 0;
    bottom: 0;
    height: 50px;
}
```
3.4 flex
```css
// 子元素全部垂直居中
.parent{
    display: flex;
    align-items: center;
}
// 单独控制某个子元素
.parent{display: flex;}
.son{align-self: center;}
```

4 视窗居中
```css
.son{
    // 0如果去掉，则会多出滚动条并且上下都是50vh的margin。如果去掉就给body加上overflow:hidden;
    margin: 50vh auto 0;  
    transform: translateY(-50%);
}
```

兼容性问题：


## 常见布局类型


