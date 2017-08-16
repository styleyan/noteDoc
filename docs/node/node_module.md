# 记录node实用性的一些模块

1)、`anyhwere 随启随用的静态文件服务器`
```javascript
npm install anywhere -g
```

<br>
2)、`nrm  registry管理工具`
```javascript
npm install -g nrm

// 显示列表
nrm ls
//代理切换到cnpm
nrm use cnpm
```

<br>
3)、`pm2  多进程管理器`
```javascript
npm install pm2 -g
```

<br>
4)、`mockJs 随机数模拟`
```javascript
// 全局安装
npm install mockjs -g
// 查看模拟帮助
random -h
// 模拟一个随机url
random url



// 本地安装
npm install mockjs
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
```

<br>
5)、`supervisor  监视应用文件修改时候重启应用程序`
```javascript
npm install supervisor -g
```

6)、`nodemon 监视应用文件修改时候重启应用程序`
```javascript
npm install nodemon -g
```

<br>
6)、`node-notifier  桌面通知模块`
```javascript
npm install --save node-notifier


//简单使用
notifier.notify({
  'title': 'My notification',
  'message': 'Hello, there!'
});
```


<br>
7)、`npm-user-downloads 查看 npm 用户某个时间段内所有模块的下载量，按从高到低排名`
```javascript
npm i npm-user-downloads -g

//查看 hupengbest 用户最后一个月，最近20条数据。
nud hupengbest last-month --limit=20
```

8)、`opn 自动打开浏览器`
```javascript
npm install opn

var opn = require('opn');
var uri = 'http://localhost:' + port;
console.log('Listening at：' + uri + '\n');
opn(uri);
```

9)、`cors express允许跨域模块`
```javascript
//模块安装
npm install cors --save


//================在app.js中添加================
var cors = require('cors');
//配置跨域
app.use(cors({
	//允许这个域的访问
	origin: ["http://localhost:8080"],
	//只允许GET和POST请求
	methods: ['GET', 'POST'],
	//只允许带这两种请求头的链接访问,可以不设置这个
	alloweHeaders: ['Conten-Type', 'Authorization']
}));
//在routes/index.js中配置一条路由映射
router.post('/first', function(req, res, next) {
  res.json({name:'aaa',pwd:'123'});
});


//===============8080端口发出ajax请求===========
$('button').click(function(){
    $.ajax({
        type:'POST',
        url:'http://localhost:3000/first',
        headers:{
            "Conten-Type":"http://localhost:3000/first"
        },
        success:function (data) {
            // body...
            console.log(data);
        }
    })
})
```

10)、`cross-env 解决跨平台设置NODE_ENV的问题`
```javascript
npm install --save-dev cross-env
```


11)、`winston  日志管理模块`
```javascript
npm install --svae-dev winston
```

12)、`sinopia 本地搭建npm仓库`
```javascript
npm install -g sinopia

//设置localhost端口
npm set registry http://localhost:4873

//启动
sinopia

//使用nrm切换
nrm use localhost

//下载模块
npm install xxxx
```

13)、`http-proxy-middleware 解决开发环境的跨域问题`
```javascript
proxyTable: {
  '/list': {
    target: 'http://api.xxxxxxxx.com',
    changeOrigin: true,
    pathRewrite: {
      '^/list': '/list'
    }
  }
}
```

14)、`chalk console.log 输出不同颜色的模块`
```javascript
// 安装
npm install chalk

// 使用方法
const chalk = require('chalk')
console.log(chalk.blue('Hell world'))  // 控制台提示文字颜色为红色
```


