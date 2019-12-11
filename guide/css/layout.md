# css布局

[参考链接](https://www.sweet-kk.top/css-layout/#/)


## 水平居中实现

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