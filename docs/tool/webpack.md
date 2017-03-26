# webpack配置

- [webpack2.2中文版](https://doc.webpack-china.org/)
- [webpack2.2中文版（css888站）](http://www.css88.com/doc/webpack2/)
- [webpack与gulp区别](http://www.cnblogs.com/lovesong/p/6413546.html)
- [零构建webpack开发多页面环境](https://github.com/riskers/blog/issues/27)
- [webpack编译流程](https://github.com/slashhuang/blog/issues/1)
- [多页面/入口支持打包](http://www.cnblogs.com/sloong/p/5689162.html)
- [阮一峰webpack配置](https://github.com/ruanyf/webpack-demos)


## webpack命令
```javascript
npm install webpack -g     安装webpack

//启动webpack
webpack     开发环境下编译(打包)
webpack -p  生产环境下编译(压缩)
webpack -w  监听文件的改动，自动去编译
webpack -d  开启生成 source maps (用来调试)


//开启本地服务器
npm install webpack-dev-sever -g   安装
webpack-dev-server --port 8088     设置端口号
webpack-dev-server --inline        改变完代码以后，自动刷新浏览器
webpack-dev-server --hot           热重载(局部更改)
```


## webpack常用loaders
```javascript
//babel
npm install babel-loader babel-core babel-preset-es2015 -D

//sass编译
npm install style-loader css-loader sass-loader -D
```




## webpack常用plugins
```javascript
//代码优化
CommonsChunkPlugin - 抽取公共代码
UglifyJsPlugin     - 压缩混淆代码


//依赖注入
DefinePlugin   - 自由变量注入
ProvidePlugin  - 模块变量标示符注入


//文件抽取
file-loader       - 传送font等文件
ExtractTextPlugin - 抽取css文件


//开发体验优化
WebpackNotifierPlugin - 编译完成动态通知
HtmlWebpackPlugin     - 采用模板引擎形式注入到html文件，让开发更加easy


//目录/文件拷贝
CopyWebpackPlugin - 目录及文件拷贝
```
[webpack2插件列表](https://webpack.js.org/plugins/)


## 安装问题
`1)、babel编译不了es6语法`<br>
需要在更目录下添加.babelrc文件,并在.babelrc文件设置
```javascript
{
  "presets": ["es2015"]
}
```

`2)、node-sass模块安装不了`<br>
先把[【node-sass】](https://github.com/sass/node-sass)下载放到/node_modules/文件下，然后从[【releases】](https://github.com/sass/node-sass/releases)下载对应的版本，在项目"/node_modules/node-sass/"中创建"vendor"文件夹，在"vendor"文件夹创建"win32-x64-48"文件夹，最后把releases下载的文件复制到"win32-x64-48"文件夹里面，并将其重命名为binding.node。

