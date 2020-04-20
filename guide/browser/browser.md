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




1. [百度百科-七层网络协议](chttps://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E4%B8%83%E5%B1%82%E5%8D%8F%E8%AE%AE)