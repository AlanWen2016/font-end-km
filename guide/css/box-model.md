### CSS盒模型

1.CSS盒模型，在不同浏览器的差异
  区分w3c盒模型和ie盒模型
     盒子的四个组成区域相对应，每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。
  
  box-sizing的两个属性： content-box | border-box

  content-box:
  width  = content width;
  height = content height

  border-box:
  width  = border + padding + content width
  heigth = border + padding + content heigth


   外边距折叠：
   a.相邻元素之间
   b.父元素与其第一个或最后一个子元素之间
   c.空的块级元素