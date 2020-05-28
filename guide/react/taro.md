# taro开发头条小程序


> Taro 是一套遵循 React 语法规范的 多端开发 解决方案。


# taro开发流程
## 1. 安装cli
```sh
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
# 创建新的应用
$ taro init myApp
```

## 2. 快速启动

```sh
# quick start
$ yarn dev:tt
$ yarn build:tt
### npm script
$ npm run dev:tt
$ npm run build:tt
### 仅限全局安装
$ taro build --type tt --watch
$ taro build --type tt
### npx 用户也可以使用
$ npx taro build --type tt --watch
$ npx taro build --type tt

```

## 3. 页面与组件编写

### 3.1 目录结构

```
├── config
├── dist
├── package-lock.json
├── package.json
├── project.config.json
├── src
│   ├── app.jsx
│   ├── app.scss
│   ├── assets
│   ├── components // 组件
│   ├── constants
│   ├── custom-variables.scss
│   ├── index.html
│   ├── pages // 页面
│   ├── actions
│   ├── reducers 
│   ├── store
│   └── utils // 工具函数
└── yarn.lock

```
### 3. 1 页面路由配置
- 配置路由： app.jsx下config.pages
- 路由传参数
```js
// sent.jsx
 Taro.navigateTo({
      url: `/pages/webView/index?encodeUrl=${encodeURIComponent(url)}`
 })
// received.jsx
componentWillMount (){
    console.log(this.$router.params) // 输出 { id: '2', type: 'test' }
  }
```
### 3.2 状态管理工具 redux


## 4. 开发工具与调试
- 真机调试只支持Android


> 开发可能碰到的问题？

1. 验签： content-type配置， device_id必须相同
2. 合法域名配置、工程配置（es6->es5, https证书校验问题）
3. base64图片，Image组件无法识别'data:img'开头的base64图片
4. redux使用
5. 函数起名字render问题，渲染的组件使用render开头，普通函数不能用使用render开头
6. 组件样式问题，全局变量配置
7. async-validator 参数校验


参考： 

