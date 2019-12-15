# 浏览器实现原理和API

<!-- <img src="~assets/image/browser.png" width="400" height="300" alt=""> -->
<img src="../../assets/image/broswer.png" width="500" hegiht="313" align=center />



## 从输入浏览器URL到页面显示到过程

- 1. 向服务端发送请求，使用http/https
- 2. 解析请求回来到代码，解析成dom数
- 3. 计算dom树上到CSS属性(计算css属性)
- 4. 根据css属性对元素逐个进行渲染，得到内存中到位图
- 5. （可选步骤）对位图进行合成，用于增加后期对绘制速度
- 6. 合成之后，绘制到界面上


1. 向服务端发送请求：
Http协议是基于TCP协议，TCP协议是双向通讯通道，http协议在TCP协议到基础上，规定了Request-Response模式，规定请求必须从客户端首先发起。
Http是纯粹到文本协议，它规定了使用TCP协议来传输文本格式到应用层协议。


### 七层网络协议
// TODO



### Http请求头和响应
```
GET / HTTP/1.1
Host: developer.mozilla.org/zh-CN/

```


```json
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Connection: keep-alive
Cookie:
Host: www.baidu.com
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36
```
### Http请求方法和响应状态码



1. [百度百科-七层网络协议](chttps://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E4%B8%83%E5%B1%82%E5%8D%8F%E8%AE%AE)