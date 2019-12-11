# canvas教程


## 什么是Canvas
Canvas元素是可以使用javaScript来绘制图形的HTML元素。IE9.0和Chrome4.0起版本开始支持，主流新版本浏览器都是支持的。
Canvas 的默认大小为300像素×150像素（宽×高，像素的单位是px）

### quick start
画个矩形，并填充颜色
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Canvas教程</title>
    <style>
        canvas{
            border: 1px solid goldenrod;
        }
    </style>
</head>
<body>
    <h1>Canvas</h1>
    <canvas id="myCanvas"></canvas>
    <script>
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 150, 75);
    </script>
</body>
</html>
```

### 获取渲染上下文(2D)
```js
 var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

```

### 坐标
画布栅格（canvas grid）以及坐标空间
![An image](../../assets/image/Canvas_default_grid.png)


## 绘制图形
> 绘制图像有哪些api,如何绘制矩形，三角形，直线，圆弧和曲线

路径类似于photoshop的钢笔工具。


moveTo(x,y) 定义线条开始坐标，确定路径的地点，移动鼠标一样
lineTo(x,y) 定义线条结束坐标


- 1. 画好一条直线，使用stroke填充
```js
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(300,100);
    ctx.stroke();
```
- 2. 绘制圆 arc(x,y,r,start,stop)

## 绘制文本
## 图片操作
## 动画





参考文献:

[1][MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)  
