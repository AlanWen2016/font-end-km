# npm发布js函数库
[查看源码]()
## 一. npm注册、登陆

1. 注册账户网站： [前往npm官网](https://www.npmjs.com/signup)
2. 登陆：
```
npm login 
// 然后输入账号密码
```

## 二. webpack构建项目架子

2.1 创建目录
```
mkdir biu-function
cd biu-function
```
2.2 初始化
```shell
// 配置函数库名、版本号、作者......
npm init
```

2.3 webpack安装
[webpack中文网](https://www.webpackjs.com/guides/installation/)
```
// 以开发依赖的形式安装
npm install --save-dev webpack
npm install --save-dev webpack-cli
```
webpack-cli可以用于在命令行直接执行webpack命令

2.4 webpack配置
在根目录创建webpack.config.js

```shell
npm install --save-dev clean-webpack-plugin
```

```javascript
// node 核心模块，处理路径相关
const path = require('path')
// webpack插件，新版本用法发与webpack中文网上写的有点出入，需要注意
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入模板文件， 看你需不需要
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Biu', // Peanut 可以随便更换，不是固定值,是函数库名字，类似Jquery
  },
  plugins: [
         new CleanWebpackPlugin(),
        //  new HtmlWebpackPlugin({ template: './src/index.html' }),
        ],

}
```

扩展阅读：
// TODO 


2.5 支持es6语法, 可以跳过

[前往Babel中文网](babeljs.cn/docs/usage)

将 ES2015+ 语法的 JavaScript 代码编译为能在当前浏览器上工作的代码。这将涉及到新语法的转换和缺失特性的修补。这里需要使用babel

2.5.1 安装babel依赖包
```shell
npm install --save-dev babel-loader @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```
2.5.2 babel预设配置在根目录下创建配置文件babel.config.js或者.babelrc
- babel.config.js
```javascript
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];
module.exports = { presets };
```
- .babelrc
```json
  {
    "presets": [
        [
          "@babel/env",
          {
            "targets": {
              "edge": "17",
              "firefox": "60",
              "chrome": "67",
              "safari": "11.1",
            },
            "useBuiltIns": "usage",
          },
        ],
      ],
    "plugins": []
  }
```
2.5.3 webpack配置babel-loader解析es6
```javascript
module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
            ]
          }
```



## 三. 函数库编写

```shell
mkdir src
touch src/index.js
```

```javascript
// index.js
function add(a, b) {
    return a + b
  }
  export default {add}
```

函数导出可以直接export或者export default导出变量、对象，这个会影响import。
例如：
```javascript
export default { add }
// 使用import引入 import Biu from 'biu-function'
// 这个Biu就是导出的default对象
// 使用 script标签引入，则需要使用Biu.default.add()
// Biu实在webpack.config.js定义的library的名字
```


## 四. 构建与发布
1. 在package.json文件修改srcipt，增加webpack构建，可以增加额外webpack配置

```shell
  "build": "webpack"
  // "build": "webpack --config webpack.config.js"
```
2. 将package.json文件的main(入口)，改成对应构建的结果，便于函数库引入
```javascript
  "main": "dist/index.js"
```

```shell
npm run build // 相当于执行 webpck进行打包
npm publish // 直接发布
```
发布成功可以在npm官网找到上传的包

## 五. 安装与引入使用

```shell
npm install biu-funciton
```

在文件中的引入，使用
```javascript
import Biu  from 'biu-function';
console.log(Biu.add(1,2), 'Biu'); // 3 Biu
```

_____

参考资料：
1. [webpack中文网](https://www.webpackjs.com/guides/)
2. [Babel中文网](https://www.babeljs.cn/docs/usage)
2. [github仓库clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)


