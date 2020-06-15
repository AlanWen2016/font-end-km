# webpack进阶
以一个掘金小册的标准写webpack

## webpack进阶
- Webpack在打包过程中：
- 通过Loader特殊处理类型资源，例如样式文件和图片资源
- 通过Plugin实现自动化构建任务， 例如自动压缩、自动发布 

webpack通过入口文件， 顺着文件所需要到加载的文件打包的bundle.js文件，对于依赖模块中无法通过javacript代码表示的资源模块，例如图片、文字，一般Loader会把它们单独作为资源文件拷贝的输出目录中。 
查阅源码的思路：

1.Webpack CLI启动打包流程
2.载入Webpack核心模块，创建Compiler对象
3.使用Compiler对象开始编译整个项目
4.从入口文件开始，解析模块依赖，形成依赖关系树
5.递归依赖树，将每个模块交给对应的Loader处理 
6.合并loader处理的结果，将打包结果输出到dist目录

## webpack loader
## webpack plugin

### 常见插件和使用
### 插件简单开发———一个去除注释插件

