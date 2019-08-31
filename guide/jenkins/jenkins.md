# jenkin指南

**持续集成（continuous integration,ci）**: 
代码合并、构建、部署、测试都在一起，不断执行这个过程，并对结果进行反馈

- 持续部署（Continuous Deloyment, CD）: 部署到测试环境、预生产环境、生产环境。
 - 持续交付（Continuous Delivery, CD）: 将最终的产品发布到成产环境，工用户使用。


> 非容器化部署方式：

开发 -> 编译 -> 部署到测试环境 -> 测试 -> 部署到生成环境

> 容器化部署方式：

开发 -> 编译 -> 打包镜像仓库 -> 部署到任何环境 -> 测试


### jenkins Pipeline(流水线)



### jenkins安装
[参考](https://juejin.im/post/5bea7908e51d456fb51b8aa5)

### jenkins配置


### 阿里云平台使用

candidates="
/usr/local/jdk/bin/java
/usr/local/jdk/jre/java
"

### vuepress项目发布

#### vuepress项目本地构建

#### git提交

#### jenkins发布