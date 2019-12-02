# 文件上传与二进制数组


## 文件上传 input
先看一个文件上传，前端压缩的例子,复习一下基础知识
```html
  <div id="uploader">
        <input id="file" type="file">
    </div>
    <script>
        var eleFile = document.querySelector('#file');
        eleFile.addEventListener('change', function (event) {
            file = event.target.files[0];
            console.log(event)
        // 选择的文件是图片
        });
    </script>
```

点击上传一张图片，通过打印输出我们得到文件相关信息。
<img src="../../assets/image/js/files.png" width="500" hegiht="313" align=center />
给input标签绑定change事件，并获取上传的文件对象，前端对文件的操作就是操作这个文件对象。


```js
var eleFile = document.querySelector('#file');
// 压缩图片需要的一些元素和对象
var reader = new FileReader(), img = new Image();

// 选择的文件对象
var file = null;

// 缩放图片需要的canvas
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

// base64地址图片加载完毕后
img.onload = function () {
    // 图片原始尺寸
    var originWidth = this.width;
    var originHeight = this.height;
    // 最大尺寸限制
    var maxWidth = 400, maxHeight = 400;
    // 目标尺寸
    var targetWidth = originWidth, targetHeight = originHeight;
    // 图片尺寸超过400x400的限制
    if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
    }
        
    // canvas对图片进行缩放
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    // 清除画布
    context.clearRect(0, 0, targetWidth, targetHeight);
    // 图片压缩
    context.drawImage(img, 0, 0, targetWidth, targetHeight);
    // canvas转为blob并上传
    canvas.toBlob(function (blob) {
        // 图片ajax上传
        var xhr = new XMLHttpRequest();
        // 文件上传成功
        xhr.onreadystatechange = function() {
            if (xhr.status == 200) {
                // xhr.responseText就是返回的数据
            }
        };
        // 开始上传
        xhr.open("POST", 'upload.php', true);
        xhr.send(blob);    
    }, file.type || 'image/png');
};

// 文件base64化，以便获知图片原始尺寸
reader.onload = function(e) {
    img.src = e.target.result;
};
eleFile.addEventListener('change', function (event) {
    file = event.target.files[0];
    // 选择的文件是图片
    if (file.type.indexOf("image") == 0) {
        reader.readAsDataURL(file);    
    }
});
```


## 文件对象File与Blog对象
The File interface provides information about files and allows JavaScript in a web page to access their content.
JS通过File对象来获取文件信息。一般，File对象来源与input文件上传的fileList对象，（上图例子的event.target.files）。其他来源看[File-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/File)

### 构造函数File
> 返回一个新构建的文件对象（File）
File对象的属性方法如下，从文件对象信息里，可以获取上传的文件名称、文件大小（单位：字节）、文件类型。__proto__表示文件原型链直接文件对象File。

```js
{
    lastModified: 1572312630000
    lastModifiedDate: Tue Oct 29 2019 09:30:30 GMT+0800 (中国标准时间) {}
    name: "WechatIMG2.jpeg"
    size: 60261
    type: "image/jpeg"
    webkitRelativePath: ""
    __proto__: File
}
```

### Blog
Blob 对象表示一个不可变、原始数据的类文件对象。Blob 表示的不一定是JavaScript原生格式的数据。File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。





### 处理File/Blog对象的Api

FileReader, URL.createObjectURL(), createImageBitmap(), 及 XMLHttpRequest.send() 都能处理 Blob 和 File


## ArrayBuffer


## 二进制转base64之间的转化


## 


## 附录

### MIME TYPE
[MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

总结：
MIME TYPE一个用来标识文件、字节流、文档性质和格式的标准。浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理URL，因此Web服务器在响应头中添加正确的MIME类型非常重要。
常见的mime type有：
::: tip 
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/*
application/json
application/javascript
application/ecmascript
application/octet-stream
application/pdf
:::





参考： 

[HTML5 file API加canvas实现图片前端JS压缩并上传](https://www.zhangxinxu.com/wordpress/2017/07/html5-canvas-image-compress-upload/)
