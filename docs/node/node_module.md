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
