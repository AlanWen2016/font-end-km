# 图片懒加载

## 1.图片懒加载原生实现

实现原理：
1. 首先给图片元素设置默认占位
2. 给图片src设置默认值，将图片真实需要加载的src链接，使用data-src暂时存起来
3. 当图片进入视口时，修改图片src属性，使图片加载

问题：
a. 如何判断元素与视窗的距离
b. 绑定scroll事件后如何防抖

### 1.1 简易domo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Lazy-Load</title>
  <style>
    .pic {
      width: 200px;
      height:200px;
      background-color: gray;
    }
    .pic {
        display: block;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="img">
      // 注意我们并没有为它引入真实的src
      <img class="pic" alt="加载中" src="../assets/image/lazyload/img1.jpg" 
      data-src="../assets/image/lazyload/img1.jpg">
    </div>
    <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img2.jpg">
    </div>
    <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img3.gif">
    </div>
    <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img4.png">
    </div>
    <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img5.jpg">
    </div>
     <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img6.jpg">
    </div>
     <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img7.jpg">
    </div>
     <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img8.jpg">
    </div>
     <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img4.png">
    </div>
     <div class="img">
      <img class="pic" alt="加载中" data-src="../assets/image/lazyload/img4.png">
    </div>
  </div>
  <script>
    // 获取所有的图片标签
    const imgs = document.getElementsByTagName('img')
    // 获取可视区域的高度， innerHeight是IE9之后才有的
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
    let num = 0
    function lazyload(){
        for(let i=num; i<imgs.length; i++) {
            // 用可视区域高度减去元素顶部距离可视区域顶部的高度
            // getBoundingClientRect返回元素大小和相对视口距离
            let distance = viewHeight - imgs[i].getBoundingClientRect().top
            // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
            if(distance >= 0 ){
                // 给元素写入真实的src，展示图片
                imgs[i].src = imgs[i].getAttribute('data-src')
                // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
                num = i + 1
            }
        }
    }
    // 监听Scroll事件
    window.addEventListener('scroll', lazyload, false);
</script>
</body>
</html>
```

### 1.2封装优化

1.2.1 增加节流
```js
function throttle (fn, interval = 500) {
  let timer = null
  let firstTime = true

  return function (...args) {
    if (firstTime) {
      // 第一次加载
      fn.apply(this, args)
      return firstTime = false
    }

    if (timer) {
      // 定时器正在执行中，跳过
      return
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(this, args)
    }, interval)

  }
}
```

```js
function LazyLoad (el, options) {
  if (!(this instanceof LazyLoad)) {
    return new LazyLoad(el)
  }

  this.setting = Object.assign({}, { src: 'data-src', srcset: 'data-srcset', selector: '.lazyload' }, options)

  if (typeof el === 'string') {
    el = document.querySelectorAll(el)
  }
  this.images = Array.from(el)

  this.listener = this.loadImage()
  this.listener()
  this.initEvent()
}

LazyLoad.prototype = {
  loadImage () {
    return throttle(function () {
      let startIndex = 0
      while (startIndex < this.images.length) {
        const image = this.images[startIndex]
        if (isElementInViewport(image)) {
          const src = image.getAttribute(this.setting.src)
          const srcset = image.getAttribute(this.setting.srcset)
          if (image.tagName.toLowerCase() === 'img') {
            if (src) {
              image.src = src
            }
            if (srcset) {
              image.srcset = srcset
            }
          } else {
            image.style.backgroundImage = `url(${src})`
          }
          this.images.splice(startIndex, 1)
          continue
        }
        startIndex++
      }
      
      if (!this.images.length) {
        this.destroy()
      }
    }).bind(this)
  },
  initEvent () {
    window.addEventListener('scroll', this.listener, false)
  },
  destroy () {
    window.removeEventListener('scroll', this.listener, false)
    this.images = null
    this.listener = null
  }
}
```

## 2. 图片懒加载vue实现
使用插件：vue-lazyload,看github上面的说明
```
npm install vue-lazyload
```
```html
<template>
    <div class="lazyload">
        <div v-lazy-container="{ selector: 'img' }">
            <img :data-src="Img1">
            <img :data-src="Img2">
            <img :data-src="Img3">
        </div>
    </div>
</template>

<script>
    const OnePxImg = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    import Img1 from "@/assets/lazyload/img1.jpg"
    import Img2 from "@/assets/lazyload/img2.jpg"
    import Img3 from "@/assets/lazyload/img3.gif"
    export default {
        name: "lazyload",
        data(){
            return {
                OnePxImg,
                Img1,
                Img2,
                Img3
            }
        }
    }
</script>
```