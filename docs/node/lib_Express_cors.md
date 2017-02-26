# express允许跨域

模块安装
```
npm install cors --save
```

在app.js中添加
```javascript
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

```

8080端口发出ajax请求
```javascript
$('button').click(function(){
    $.ajax({
        type:'POST',
        url:'http://localhost:3000/first',
        headers:{
            "Conten-Type":"http://localhost:3000/first"
        },
        success:function (data) {
            console.log(data);
        }
    })
});
```


