# express 安装

## 学习参考笔记
- [segmentfault](https://segmentfault.com/a/1190000002812451)
- [构建 Express Api 五个有用的中间件](https://fe.ele.me/gou-jian-express-api-wu-ge-you-yong-de-zhong-jian-jian/)
- [使用 Express + MongoDB 搭建多人博客(强烈推荐)](https://github.com/nswbmw/N-blog)
- [MongoDb安装](http://blog.csdn.net/u012995964/article/details/50943916)


## 安装需要环境
```javascript
//node版本需要大于等于v6.6.0
node >= v6.6.0
//npm版本需要大于等于3.10.3
npm  >= 3.10.3
//通过应用生成器工具 express 可以快速创建一个应用的骨架。
npm install express-generator -g
//node.js 调试工具、编写代码后无需手动重启。
npm install supervisor -g
```


## 创建应用流程
1)、在当前工作目录下创建一个命名为 myapp 的应用
```javascript
express myapp
```

2)、然后安装所有依赖包：
```javascript
cd myapp
npm install
```

3)、启动、预览
```javascript
npm start  //预览地址: http://localhost:3000/
```


## 修改配置
1)、【修改代码后自动刷新】`进入到myapp文件 > package.json文件`
```javascript
//把
"start": "node ./bin/www"
//修改为
"start": "supervisor ./bin/www"
```

2)、【安装ejs】在myapp目录下运行`npm install ejs`，然后找到app.js
```javascript
//添加
var ejs = require('ejs');

//找到16行以下添加
app.engine('.html',ejs.__express) ; 

//把 app.set('view engine', 'jade')修改为
app.set('view engine', 'html');

```



