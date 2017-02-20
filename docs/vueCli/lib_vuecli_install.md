# cli模块引用
与express-generator类似方便用户初始化项目骨架,【[vue-cli官网地址](https://github.com/vuejs/vue-cli)】

## vue-cli构架项目
【[vue-cli 2.0 webpack 配置说明](http://www.cnblogs.com/nmxs/p/6206306.html);】<br>
`版本：node >= v6.60  npm >= 3.10.3`
```javascript
 npm install -g vue-cli
 //基于webpack编译构建项目
 vue init webpack my-project
 cd my-project
 npm install
 //启动开发模式
 npm run dev
 //打包发布命令
 npm run build
```
浏览地址：http://localhost:8080<br>
备注：`当启动出现报错，检查8080端口是否被占用。`