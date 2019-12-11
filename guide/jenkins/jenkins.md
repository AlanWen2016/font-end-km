# jenkin

Jenkins是基于java开发的持续集成工具，用于监控执行的重复的工作，用于自动执行构建、测试、交互或部署软件相关的任务

::: tip 
CI/CD概念
:::


**持续集成（continuous integration,ci）**: 代码合并、构建、部署、测试都在一起，不断执行这个过程，并对结果进行反馈  
**持续部署（Continuous Deloyment, CD）**:部署到测试环境、预生产环境、生产环境。  
**持续交付（Continuous Delivery, CD）**:将最终的产品发布到成产环境，工用户使用。

::: tip 
非容器化部署方式 VS 容器化部署方式
:::

- 非容器化部署方式：开发 -> 编译 -> 部署到测试环境 -> 测试 -> 部署到生成环境
- 容器化部署方式：开发 -> 编译 -> 打包镜像仓库 -> 部署到任何环境 -> 测试


### jenkins Pipeline(流水线)



### jenkins安装
[参考](https://juejin.im/post/5bea7908e51d456fb51b8aa5)

> 使用war包安装jenkins 

环境要求：
- CentOS
- jdk和tomcat
- jenkin war包

```
# 安装jdk和tomcat, 怎么装？
# 使用wget下载war包
```

> 下载rpm包进行安装

```
```

### jenkins配置

- 邮件配置

- 权限分配
1. 安装插件 Role-based Authorization Strategy
2. 配置用户权限


- 