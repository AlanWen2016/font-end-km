# 网络协议

- 1.理解什么是协议，了解TCP/IP网络协议族的构成，每层协议在应用程序中发挥的作用。
- 2.三次握手和四次挥手详细原理，为什么要使用这种机制
- 3.有哪些协议是可靠，TCP有哪些手段保证可靠交付
- 4.DNS的作用、DNS解析的详细过程，DNS优化原理
- 5.CDN的作用和原理
- 6.HTTP请求报文和响应报文的具体组成，能理解常见请求头的含义，有几种请求方式，区别是什么
- 7.HTTP所有状态码的具体含义，看到异常状态码能快速定位问题
- 8.HTTP1.1、HTTP2.0带来的改变
- 9.HTTPS的加密原理，如何开启HTTPS，如何劫持HTTPS请求
- 10.理解WebSocket协议的底层原理、与HTTP的区别
- 11.跨域
------



## 跨域
### 跨域资源共享
CORS(Cross-Origin Resource Sharing)跨域资源共享： 使用自定义的HTTP头部信息（Origin: http://www.baidu.com）,包含域名端口号、协议， 服务器根据这个头部信息给予响应。如果服务器接受，就在Access-Control-Allow-Origin头部发回同样的源信息（如果是公共资源，可以发回“*”）。
如果没有这个头部信息，或者这个头部和源信息不匹配，浏览器就会驳回请求。



### 前端跨域问题处理：

实现跨域的方式
- 反向代理
- JSONP
- WebSocket
- CORS（根本解决方案）


#### NODE+express实现反向代理：
如果是express项目，可以使用http-proxy-middleware 来处理，这个插件主要用于将前端请求代理到其它服务器。
需要安装 express, http-proxy-middleware。

// 本机服务 localhost:8080
```js
<body>
    <button id="request">click Me</button>
    <script>
        function ajax(url,callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET',url, true);
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304){
                callback(xhr.responseText)
                }
            }
            xhr.send();
        }
        document.getElementById('request').addEventListener('click', function(){
            ajax('http://localhost:3000/api/',function(res){
                console.log(res)
            })
        })
    </script>
</body>
```
// 转发服务器 localhost:3000

```js 
// transfer-server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
    next();
  });
app.use('*', createProxyMiddleware({ target: 'http://localhost:3333/', changeOrigin: true }));
  
// app.get('/hello', (req, res) => res.json({res: 'Hello World! server1'}))
app.listen(3000);
```

// 目标服务器 localhost:333
```js
// target-server.js
const express = require('express')
var cookieParser = require('cookie-parser')
 
const app = express()
app.use(cookieParser())

const port = 3333
app.post('/', function (req, res) {
    res.send('Got a POST request')
  })
app.get('*', (req, res) => {
    console.dir(req.cookies);
    let {originalUrl, baseUrl, hostname} = req;
    res.send({originalUrl, baseUrl, hostname});
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```


_____

参考资料：
1. 《图解http》
2. [http-proxy-middleware仓库](https://github.com/chimurai/http-proxy-middleware)
