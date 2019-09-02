# CSS基础



### 水平、垂直居中的实现
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