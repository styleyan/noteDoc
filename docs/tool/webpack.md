# webpack配置

- [webpack2.2文档](https://webpack.js.org/concepts/)
- [webpack2.2中文版文档](https://doc.webpack-china.org/)
- [webpack2新特性](https://github.com/dwqs/blog/issues/46)
- [webpack2升级指南](https://segmentfault.com/a/1190000008181955)
- [webpack与gulp区别](http://www.cnblogs.com/lovesong/p/6413546.html)

## webpack作用
1. 一切都是模块化(js,css,图片等)
1. 一个模块加载器，打包工具
1. 自动解决依赖,默认支持commonJs规范

## 安装webpack
```javascript
npm install webpack -g
```

## loader类似一个转化器
`它可以把一个东西，转化成另一个东西
```javascript
//加载css文件loader
require('style-loader!css-loader!./style.css');
```
`在webpack中，一个文件需要多个loader加载器，用“!”链接多个。`

## webpack.config配置文件
```javascript
module.exports = {
	// 是页面中的入口文件
	entry: './entry.js',
	//是指页面通过webpack打包后生成的目标文件放在什么地方去
	output: {
		filename: 'bundle.js'
	},
	//直接生成srouce-map
	devtool: 'source-map',
	//是文件的加载器
	module: {
		//配置loader
		loaders: [{
			//匹配以.css文件，需要加载loader模块
			test: /\.css$/,
			loader: 'style-loader!css-loader',
			//排除哪些目录
			exclude: /node_modules/
		}, {
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	}
}
```

## webpack命令
```javascript
webpack     开发环境下编译(打包)
webpack -p  生产环境下编译(压缩)
webpack -w  监听文件的改动，自动去编译
webpack -d  开启生成 source maps (用来调试)
```

## babel使用
```javascript
npm install babel-loader babel-core babel-preset-es2015 -D
```

## webpack 本地服务器
```javascript
//安装
npm install webpack-dev-sever -g
//设置端口号
webpack-dev-server --port 8088 
//改变完代码以后，自动刷新浏览器
webpack-dev-server --inline 
//热重载(局部更改)
webpack-dev-server --hot
```

## 把运行的命令放在package.json中
```javascript
{
  "scripts": {
  	//添加到这里
    "dev": "webpack-dev-server --port 8989"
  },
}

//终端使用,相当于 webpack-dev-server
npm run dev
```


## webpack插件
```javascript
//把所有入口节点的公共代码提取生成一个common.js
new webpack.optimize.CommonsChunkPlugin('common.js')

//有选择的提取,只提取entry1节点和entry2中的共用部分模块, 生成一个common.js
new webpack.optimize.CommonsChunkPlugin('common.js',['entry1','entry2']);

```


