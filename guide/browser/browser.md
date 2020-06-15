# 浏览器实现原理和API


#### 浏览器API
1.浏览器提供的符合W3C标准的DOM操作API、浏览器差异、兼容性
2.浏览器提供的浏览器对象模型 (BOM)提供的所有全局API、浏览器差异、兼容性
3.大量DOM操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等)
4.浏览器海量数据存储、操作性能优化
5.DOM事件流的具体实现机制、不同浏览器的差异、事件代理
6.前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库
7.浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型
8.浏览器提供的几种存储机制、优缺点、开发中正确的选择
9.浏览器跨标签通信


浏览器原理
1.各浏览器使用的JavaScript引擎以及它们的异同点、如何在代码中进行区分
2.请求数据到请求结束与服务器进行了几次交互
3.可详细描述浏览器从输入URL到页面展现的详细过程
4.浏览器解析HTML代码的原理，以及构建DOM树的流程
5.浏览器如何解析CSS规则，并将其应用到DOM树上
6.浏览器如何将解析好的带有样式的DOM树进行绘制
7.浏览器的运行机制，如何配置资源异步同步加载
8.浏览器回流与重绘的底层原理，引发原因，如何有效避免
9.浏览器的垃圾回收机制，如何避免内存泄漏
10.浏览器采用的缓存方案，如何选择和控制合适的缓存方案

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





## 
ajax:

#### get请求

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
// readState:
0: 未初始化
1：启动（已调用open(),未调用send()）
2: 发送（已经调用send()还收到response）
3: 接收（已经接收到部分响应数据）
4：完成（已经接收到全部响应数据）


#### post 请求  
// code for IE6, IE5  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
```
function(url, data, fn) { //datat应为'a=a1&b=b1'这种字符串格式
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
            fn.call(this, xhr.responseText);
        }
    };
    xhr.send(data);
}

```

```
// 使用Promise实例封装ajax

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```



## 浏览器都数据存储与垃圾回收机制

### 浏览器数据的存储
- 原始数据类型存在栈空间，引用数据类型存储在堆空间。

### V8的垃圾回收机制
清理垃圾数据，以释放内存空间。计算机清理内存垃圾的策略可以分为： 自动回收和手动回收。
C/C++这类语言的内容


## 前端浏览器输入URL后发生什么？

1. dns解析
2. 建立tcp连接
3. 获取html
4. 浏览器渲染

1. 用户输入URL，浏览器会根据用户输入的信息判断是搜索还是网址，如果是搜索内容，就将搜索内容+默认搜索引擎合成新的URL；如果用户输入的内容符合URL规则，浏览器就会根据URL协议，在这段内容上加上协议合成合法的URL
2. 用户输入完内容，按下回车键，浏览器导航栏显示loading状态，但是页面还是呈现前一个页面，这是因为新页面的响应数据还没有获得
3. 浏览器进程浏览器构建请求行信息，会通过进程间通信（IPC）将URL请求发送给网络进程
GET /index.html HTTP1.1
4. 网络进程获取到URL，先去本地缓存中查找是否有缓存文件，如果有，拦截请求，直接200返回；否则，进入网络请求过程
如果浏览器确信缓存有效根本没有进行网络请求，直接使用的 disk cache 或则 memory cache 这个时候的响应码是 200。如果浏览器不确信缓存是否有效就会发送请求（请求头带有 If-None-Match 字段），如果返回 304 说明之缓存有效，浏览器可以放心的使用缓存，否则返回 200 并带上新的数据

5. 网络进程请求DNS返回域名对应的IP和端口号，如果之前DNS数据缓存服务缓存过当前域名信息，就会直接返回缓存信息；否则，发起请求获取根据域名解析出来的IP和端口号，如果没有端口号，http默认80，https默认443。如果是https请求，还需要建立TLS连接。
6. Chrome 有个机制，同一个域名同时最多只能建立 6 个TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。如果当前请求数量少于6个，会直接建立TCP连接。
7. TCP三次握手建立连接，http请求加上TCP头部——包括源端口号、目的程序端口号和用于校验数据完整性的序号，向下传输
8. 网络层在数据包上加上IP头部——包括源IP地址和目的IP地址，继续向下传输到底层
9. 底层通过物理网络传输给目的服务器主机
10. 目的服务器主机网络层接收到数据包，解析出IP头部，识别出数据部分，将解开的数据包向上传输到传输层
11. 目的服务器主机传输层获取到数据包，解析出TCP头部，识别端口，将解开的数据包向上传输到应用层
12. 应用层HTTP解析请求头和请求体，如果需要重定向，HTTP直接返回HTTP响应数据的状态code301或者302，同时在请求头的Location字段中附上重定向地址，浏览器会根据code和Location进行重定向操作；如果不是重定向，首先服务器会根据 请求头中的If-None-Match 的值来判断请求的资源是否被更新，如果没有更新，就返回304状态码，相当于告诉浏览器之前的缓存还可以使用，就不返回新数据了；否则，返回新数据，200的状态码，并且如果想要浏览器缓存数据的话，就在相应头中加入字段：
Cache-Control:Max-age=2000
响应数据又顺着应用层——传输层——网络层——网络层——传输层——应用层的顺序返回到网络进程
13. 数据传输完成，TCP四次挥手断开连接。如果，浏览器或者服务器在HTTP头部加上如下信息，TCP就一直保持连接。保持TCP连接可以省下下次需要建立连接的时间，提示资源加载速度
Connection:Keep-Alive
14. 网络进程将获取到的数据包进行解析，根据响应头中的Content-type来判断响应数据的类型，如果是字节流类型，就将该请求交给下载管理器，该导航流程结束，不再进行；如果是text/html类型，就通知浏览器进程获取到文档准备渲染
15. 浏览器进程获取到通知，根据当前页面B是否是从页面A打开的并且和页面A是否是同一个站点（根域名和协议一样就被认为是同一个站点），如果满足上述条件，就复用之前网页的进程，否则，新创建一个单独的渲染进程
16. 浏览器会发出“提交文档”的消息给渲染进程，渲染进程收到消息后，会和网络进程建立传输数据的“管道”，文档数据传输完成后，渲染进程会返回“确认提交”的消息给浏览器进程
17. 浏览器收到“确认提交”的消息后，会更新浏览器的页面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新web页面，此时的web页面是空白页
18. 渲染进程对文档进行页面解析和子资源加载，HTML 通过HTM 解析器转成DOM Tree（二叉树类似结构的东西），CSS按照CSS 规则和CSS解释器转成CSSOM TREE，两个tree结合，形成render tree（不包含HTML的具体元素和元素要画的具体位置），通过Layout可以计算出每个元素具体的宽高颜色位置，结合起来，开始绘制，最后显示在屏幕中新页面显示出来


。

https://github.com/skyline75489/what-happens-when-zh_CN



1. [百度百科-七层网络协议](https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E4%B8%83%E5%B1%82%E5%8D%8F%E8%AE%AE)
