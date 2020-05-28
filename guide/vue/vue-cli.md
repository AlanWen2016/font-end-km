# 蛋疼的打包与构建

打包与构建都配置相当麻烦，所以写点笔记记录一下：

## @vue/cli 4.0.4

1. 旧版本问题：
Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x),卸载方式：

```
npm uninstall vue-cli -g
 // yarn global remove vue-cli
```
2. 全部安装
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli

// 结果检查
vue -V
```

3. 创建项目:
```
vue create vue-template
```

> 旧版本
```
npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project
```
