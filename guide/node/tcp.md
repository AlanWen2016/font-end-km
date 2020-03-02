# TCP/IP


## 使用node创建一个简单的http服务
代码示例
```js
// http.js
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
  console.log('服务已经启动，请访问：http://localhost:8080');
});
```
启动命令
```bash
node http.js
```
## 查询电脑IP,并使用IP进行访问（在同一局域网下）, 使用tcpdump抓取tcp包
- tcpdump监听指令
```js
bash-3.2$ sudo tcpdump port 8080 -n
tcpdump: data link type PKTAP
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on pktap, link-type PKTAP (Apple DLT_PKTAP), capture size 262144 bytes
```
- 手机访问192.168.0.104.8080，tcpdump打印的结果
Mac 通过ifconfig查询IP地址： inet 192.168.0.104 netmask 0xffffff00 broadcast 192.168.0.255
```js
// IP 192.168.0.112为手机端， IP 192.168.0.104为电脑端
// 第1次握手
13:18:43.792152 IP 192.168.0.112.59444 > 192.168.0.104.8080: Flags [S], seq 4066526494, win 65535, options [mss 1460,nop,wscale 7,nop,nop,TS val 721554593 ecr 0,sackOK,eol], length 0
// 第2次握手
13:18:43.792255 IP 192.168.0.104.8080 > 192.168.0.112.59444: Flags [S.], seq 1744630445, ack 4066526495, win 65535, options [mss 1460,nop,wscale 5,nop,nop,TS val 432914137 ecr 721554593,sackOK,eol], length 0
// 第3次握手
13:18:44.106422 IP 192.168.0.112.59444 > 192.168.0.104.8080: Flags [.], ack 1, win 1029, options [nop,nop,TS val 721554931 ecr 432914137], length 0
// 192.168.0.112修改了接受窗口大小
13:18:44.106465 IP 192.168.0.104.8080 > 192.168.0.112.59444: Flags [.], ack 1, win 4117, options [nop,nop,TS val 432914451 ecr 721554931], length 0
// 发送http请求
13:18:44.108490 IP 192.168.0.112.59444 > 192.168.0.104.8080: Flags [P.], seq 1:413, ack 1, win 1029, options [nop,nop,TS val 721554932 ecr 432914137], length 412: HTTP: GET / HTTP/1.1
13:18:44.108528 IP 192.168.0.104.8080 > 192.168.0.112.59444: Flags [.], ack 413, win 4104, options [nop,nop,TS val 432914453 ecr 721554932], length 0
13:18:44.109079 IP 192.168.0.104.8080 > 192.168.0.112.59444: Flags [P.], seq 1:133, ack 413, win 4104, options [nop,nop,TS val 432914453 ecr 721554932], length 132: HTTP: HTTP/1.1 200 OK
13:18:44.294803 IP 192.168.0.112.59444 > 192.168.0.104.8080: Flags [.], ack 133, win 1028, options [nop,nop,TS val 721555222 ecr 432914453], length 0

13:18:49.111494 IP 192.168.0.104.8080 > 192.168.0.112.59444: Flags [F.], seq 133, ack 413, win 4104, options [nop,nop,TS val 432919434 ecr 721555222], length 0
13:18:49.201365 IP 192.168.0.112.59444 > 192.168.0.104.8080: Flags [.], ack 134, win 1028, options [nop,nop,TS val 721560131 ecr 432919434], length 0
// 第一次挥手； 30s内不再请求数据，要把连接关闭，发送一个Fin报文（30s受请求的connection: keep-alive字段影响）
13:18:49.201752 IP 192.168.0.112.59444 > 192.168.0.104.8080: Flags [F.], seq 413, ack 134, win 1028, options [nop,nop,TS val 721560131 ecr 432919434], length 0
// 第二次挥手： 电脑端向手机端发送ACK,这时候连接出于半关闭状态，这个时候手机端不可以再向电脑端发送数据，电脑端可以向手机端发送数据
13:18:49.201804 IP 192.168.0.104.8080 > 192.168.0.112.59444: Flags [.], ack 414, win 4104, options [nop,nop,TS val 432919523 ecr 721560131], length 0
// 第三次挥手： 手机端向电脑端发送Fin，通知电脑端关闭连接
13:18:56.773992 IP 192.168.0.112.59444 > 192.168.0.104.8080: Flags [F.], seq 413, ack 134, win 1028, options [nop,nop,TS val 721567664 ecr 432919434], length 0
// 第四次挥手： 手机端向电脑端发送ACK，此时连接完全关闭，然后手机端进入TIME_WAIT的状态
13:18:56.774028 IP 192.168.0.104.8080 > 192.168.0.112.59444: Flags [.], ack 414, win 4104, options [nop,nop,TS val 432927075 ecr 721560131], length 0
```
----------
## 一个完整的http连接

- 1. TCP三次握手建立连接
- 2. TCP四次挥手断开连接


