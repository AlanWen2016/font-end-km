
// 创建一个简单的http服务器程序
 
// 1、加载http模块
var http = require('http');
 
// 2、创建一个http服务对象
var server = http.createServer();
 
// 3、监听用户的请求事件（request事件）
// 回调函数中有两个参数
// request 对象 包含用户请求报文中所有内容，通过request对象可以获取所有用户提交过来的数据
// response 对象 用来向用户响应一些数据，当服务器要向客户端响应数据的时候必须使用response对象
server.on('request', function (req, res) {
  res.write('Hello World!!!');
  // 对于每一个请求，服务器必须结束响应，否则，客户端（浏览器）会一直等待服务器响应结束
  res.end();
});
 
// 4、启动服务
server.listen(8080, function () {
  console.log('服务器启动了，请访问：http://localhost:8080');
});
