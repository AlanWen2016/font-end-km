# 缓存

常见到web缓存：
- 数据库缓存
- 服务器（代理）缓存
- DNS缓存
- 浏览器缓存


## 浏览器（http）缓存

HTTP 缓存（或 Web 缓存）是用于临时存储（缓存）Web文档（如 HTML 页面和图像），以减少服务器延迟的一种信息技术。HTTP 缓存系统会保存下通过这套系统的文档的副本；如果满足某些条件，则可以由缓存满足后续请求。HTTP 缓存系统既可以指设备，也可以指计算机程序。


### http缓存分类：

- 1. 按存储位置分类
    - disk cache
    - memory cache
    - service worker


- 2. 按缓存失效到策略分类：
    - 强缓存, 控制字段包括： Cache-Control, Expires
    - 协商缓存, 控制协商缓存的字段包括： Last-Modified / If-Modified-Since 和 Etag / If-None-Match


    

