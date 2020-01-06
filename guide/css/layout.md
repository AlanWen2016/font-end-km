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

- 两列布局
- 三列布局
- 多列布局
- 全屏布局


### 1. 两列布局
两列布局分常见分类
- 1.1 左边定宽，右侧自适应
- 1.2 右边定宽，左边自适应
- 1.3 一列不定，一列自适应


#### 1.1 左边定宽，右侧自适应

dom结构
```html
<body>
    <div id="left">左列定宽</div>
    <div id="right">右侧自适应</div>
    <div>some other words </div>
</body>
```

- 使用浮动布局
```html
<style>
    #left{
        background-color: aquamarine;
        float: left;
        width: 200px;
        height: 500px;
    }

    #right{
    background-color: blanchedalmond;
    height: 500px;
    margin-left: 100px;
    }
</style>
```
- float和负margin
```html

    <style>
        #left {
            background-color: aquamarine;
            float: left;
            width: 200px;
            height: 500px;
        }
        #right-fix {
            float: right;
            width: 100%;
            margin-left: -220px;
            /*正值大于或等于#left的宽度,才能上移一行*/
        }
        #right {
            margin-left: 220px;
            /*大于或等于#left的宽度,才不会遮挡#left*/
            background-color: burlywood;
            height: 500px;
        }
    </style>
    <div id="left">左列定宽</div>
    <div id="right-fix">
        <div id="right">右列自适应</div>
    </div>
```

- float+overflow

```css
#left {
    background-color: #f00;
    float: left;
    width: 100px;
    height: 500px;
}
#right {
    background-color: #0f0;
    height: 500px;
    overflow: hidden; /*触发bfc达到自适应*/
}
```
- table布局
```html
<div id="parent">
    <div id="left">左列定宽</div>
    <div id="right">右列自适应</div>
</div>
<style>
#parent{
    width: 100%;
    display: table;
    height: 500px;
}
#left {
    width: 100px;
    background-color: red;
}
#right {background-color: yellow;}
/*利用单元格自动分配宽度*/
#left,#right{display: table-cell;}
</style>
```

- 绝对定位
```css
#parent{position: relative;}  /*父相*/
#left {
    position: absolute;  /*子绝*/
    top: 0;
    left: 0;
    background-color: #f00;
    width: 100px;
    height: 500px;
}
#right {
    position: absolute;  /*子绝*/
    top: 0;
    left: 100px;  /*值大于等于#left的宽度*/
    right: 0;
    background-color: #0f0;
    height: 500px;
}
```

- flex布局
```css
#parent{
    width: 100%;
    height: 500px;
    display: flex;
}
#left {
    width: 100px;
    background-color: #f00;
}
#right {
    flex: 1; /*均分了父元素剩余空间*/
    background-color: #0f0;
}

```
- Grid布局
```css
#parent {
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 100px auto;  /*设定2列就ok了,auto换成1fr也行*/
}
#left {background-color: #f00;}
#right {background-color: #0f0;}
```
#### 1.2 右边定宽，左边自适应
#### 1.3 左右列都不确定
```css
#left {
    margin-right: 10px;
    float: left;  /*只设置浮动,不设宽度*/
    height: 500px;
    background-color: #f00;
}
#right {
    overflow: hidden;  /*触发bfc*/
    height: 500px;
    background-color: #0f0;
}
```
- flex布局
```css
#parent{display: flex;}
#left { 
    margin-right: 10px;
    height: 500px;
    background-color: #f00;
}
#right {
    height: 500px;
    background-color: #0f0;
    flex: 1;  /*均分#parent剩余的部分*/
}
```
:::tips
两栏布局： 两栏布局可以使用浮动布局，然后把不需要浮动都盒子触发bfc以达到自适应都效果。或者使用绝对定位。
使用table布局，主要存在不敢治margin之类都属性。移动端兼容行运行的情况下，可以直接使用flex布局。
:::

### 2. 三栏布局

三栏布局实现两侧定宽100px,中间自适应
1. table布局  
```css
 table{
           width: 100%;
       }
       td:first-of-type{
         background: cadetblue;
         width: 100px;
         height: 200px;
       }
       td{
           background: cornflowerblue;;
       }
       td:last-of-type{
           height: 200px;
           width: 100px;
           background: chocolate;
       }
```

2. 浮动布局

使用浮动调整两个定宽的元素位置， 使用margin或者overfloat调整自适应元素大小
// 左侧定宽
```html
<style>
    #parent{min-width: 320px;} /*100+10+200+20,防止宽度不够,子元素换行*/
        #left {
            margin-right: 10px; /*间隔*/
            float: left;
            width: 100px;
            height: 500px;
            background-color:cornsilk;
        }
        #center{
            margin-right: 10px; /*在此定义和#right的间隔*/
            float: left;
            width: 200px;
            height: 500px;
            background-color: cadetblue;
        }
        #right {
            height: 500px;
            background-color:cyan;
            /* overflow: hidden;  触发bfc */
            margin-left: 330px;
        }

</style>
<div id="parent">
    <div id="left">左列定宽</div>
    <div id="center">中间定宽</div>
    <div id="right">右列自适应</div>
</div>
```
// 两侧定宽

```html
<style>
 #parent{min-width: 320px;} 
        #left {
            margin-right: 10px; /*间隔*/
            float: left;
            width: 100px;
            height: 500px;
            background-color:cornsilk;
        }
        #center{
            margin-right: 10px; /*在此定义和#right的间隔*/
            height: 500px;
            background-color: cadetblue;
        }
        #right {
            height: 500px;
            background-color:cyan;
            float: right;
            width: 100px;
            /* overflow: hidden;  触发bfc */
        }

</style>
 <div id="parent">
        <div id="left">左列定宽</div>
        <div id="right">右列自适应</div>
        <div id="center">中间定宽</div>
 </div>
```

3.display table-cell
利用table展示自适应的
```css
#parent{min-width: 320px;} 
        #left {
            margin-right: 10px; /*间隔*/
            float: left;
            width: 100px;
            height: 500px;
            background-color:cornsilk;
        }
        #center{
            margin-right: 10px; /*在此定义和#right的间隔*/
            height: 500px;
            background-color: cadetblue;
            display: table-cell;
            width: 2000px;
        }
        #right {
            height: 500px;
            background-color:cyan;
            float: right;
            width: 100px;
            /* overflow: hidden;  触发bfc */
        }
 <div id="parent">
        <div id="left">左列定宽</div>
        <div id="right">右列自适应</div>
        <div id="center">中间定宽</div>
 </div>
````
4. 两侧定宽，中间自适应之圣杯布局VS双飞翼布局
##### 圣杯布局实现思路

基本要求
- 1. have a fluid center with fixed width sidebars,
- 2. allow the center column to appear first in the source,
- 3. allow any column to be the tallest,
- 4. equire only a single extra div of markup, and
- 5  require very simple CSS, with minimal hacks patches.



- STEP 1: create the frame 创建页面结构,设置container的padding
```html
<style>
 #container {
  padding-left: 200px;   /* LC width */
  padding-right: 150px;  /* RC width */
}
</style>
<div id="header"></div>
<div id="container"></div>
<div id="footer"></div>
```
- STEP 2: ADD THE COLUMNS 增加中间部分的左中右三列
左列、右列是定宽列，设定好宽度。左中右三列设定左浮动。
```html
<style>
        #header{
            background-color: darkgray;
        }
        #footer {
            clear: both;
            background-color: darkgray;
        }
        #container {
            padding-left: 200px;
            /* LC width */
            padding-right: 150px;
            /* RC width */
        }
        #container .column{
            float: left;
        }
        #center{
            width: 100%;
            background-color: deepskyblue;
        }
        #left{
            width: 200px;
            background-color: darksalmon;
        }
        #right{
            width: 150px;
            background-color: deeppink;
        }
    </style>
 <div id="header">header</div>
    <div id="container">
        <div id="center" class="column">center</div>
        <div id="left" class="column">left</div>
        <div id="right" class="column">right</div>
    </div>
    <div id="footer">footer</div>
```
- STEP 3: PULL THE LEFT COLUMN INTO PLACE 将左列移动到对应位置
```css
#container .column{
    float: left;
    position: relative;
}
#left{
    width: 200px;        /* LC width */
    margin-left: -100%;  
    background-color: darksalmon;
    right: 200px;
}
```
- STEP 4: PULL THE RIGHT COLUMN INTO PLACE 将右列移动到对应位置
```css
#right {
  width: 150px;          /* RC width */
  margin-right: -150px;  /* RC width */
}
```

-STEP 5: DESIGN DEFENSIVELY 设定最小值
```css
body {
  min-width: 550px;  /* 2x LC width + RC width */
}
```
```html
<style>
    #header{
        background-color: darkgray;
    }
    #footer {
        clear: both;
        background-color: darkgray;
    }
    #container {
        padding-left: 200px;
        /* LC width */
        padding-right: 150px;
        /* RC width */
    }
    #container .column{
        float: left;
        position: relative;
    }
    #center{
        width: 100%;
        background-color: deepskyblue;
    }
    #left{
        width: 200px;        /* LC width */
        margin-left: -100%;  
        background-color: darksalmon;
        right: 200px;
    }
    #right{
        width: 150px;
        margin-right: -150px; /* 使用负margin让css计算这个#right元素宽度为0，让元素浮动上去 */
        background-color: deeppink;
    }
</style>

```



圣杯布局和双飞翼布局解决的问题是一样的，就是两边定宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。

圣杯布局和双飞翼布局解决问题的方案在前一半是相同的，也就是三栏全部float浮动，但左右两栏加上负margin让其跟中间栏div并排，以形成三栏布局。
不同在于解决”中间栏div内容不被遮挡“问题的思路不一样：
圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。

双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。多了1个div，少用大致4个css属性（圣杯布局中间divpadding-left和padding-right这2个属性，加上左右两个div用相对布局position: relative及对应的right和left共4个属性，一共6个；而双飞翼布局子div里用margin-left和margin-right共2个属性，6-2=4），个人感觉比圣杯布局思路更直接和简洁一点。

简单说起来就是”双飞翼布局比圣杯布局多创建了一个div，但不用相对布局了“，而不是你题目中说的”去掉relative"就是双飞翼布局“。

#### 双飞翼布局
如果把三栏布局比作一只大鸟，可以把main看成是鸟的身体，sub和extra则是鸟的翅膀。这个布局的实现思路是，先把最重要的身体部分放好，然后再将翅膀移动到适当的地方。因此请容许我给这个布局实现取名为双飞翼布局（Flying Swing Layout）


```html
    <style>
        #header {
            height: 60px;
            background-color: #ccc;
        }

        #left {
            float: left;
            width: 100px;
            height: 500px;
            margin-left: -100%;
            /*调整#left的位置,值等于自身宽度*/
            background-color: #f00;
            opacity: 0.5;
        }

        #center {
            height: 500px;
            float: left;
            width: 100%;
            background-color: #eeff2b;
        }

        #center_inbox {
            height: 480px;
            border: 1px solid #000;
            margin: 0 220px 0 120px;
            /*关键!!!左右边界等于左右盒子的宽度,多出来的为盒子间隔*/
        }

        #right {
            float: left;
            width: 200px;
            height: 500px;
            margin-left: -200px;
            /*使right到指定的位置,值等于自身宽度*/
            background-color: #0f0;
            opacity: 0.5;
        }

        #footer {
            clear: both;
            /*注意清除浮动!!*/
            height: 60px;
            background-color: #ccc;
        }
    </style>
   <div id="header"></div>
    <!--中间栏需要放在前面-->
    <div id="parent">
        <div id="center">
            <div id="center_inbox">中间自适应</div>
            <hr>
            <!--方便观察原理-->
        </div>
        <div id="left">左列定宽</div>
        <div id="right">右列定宽</div>
    </div>
    <div id="footer"></div>
```


Note:
对于两个浮动元素，
```html
<style>
    #parent{
        width: 500px;
    }
    </style>
<div id="parent">
    <div id="s1"></div>
    <div id="s2"></div>
</div>
```



参考： 

1 [圣杯布局 - In Search of the Holy Grail](https://alistapart.com/article/holygrail/) 
2.[双飞翼布局介绍-始于淘宝UED](http://www.imooc.com/wenda/detail/254035)