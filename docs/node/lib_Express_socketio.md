# express4.X框架中使用socket.io


`1)、在项目中安装`
```javascript
npm install socket.io
```


`2)、在项目根目录下创建socketio.js文件:`
```javascript
/* 
封装socket.io,为了获取server以便监听. 
*/  
var socketio = {};  
var socket_io = require('socket.io');  
  
//获取io  
socketio.getSocketio = function(server){  
    var io = socket_io.listen(server);  
    io.sockets.on('connection', function (socket) {  
        console.log('连接成功');  
        socket.on('click1',function(){  
            console.log('监听点击事件');  
            var datas = [1,2,3,4,5];  
            socket.emit('click2', {datas: datas});  
            socket.broadcast.emit('click2',  {datas: datas});  
        })  
    })  
};  
  
module.exports = socketio; 
```

`3)、改造bin目录下的www文件`
```javascript
//在var http = require('http');后面加入
var io = require('../socket.io');

//在var server = http.createServer(app);后面加入
io.getSocketio(server);
```

`4)、在html中编写如下代码`
```javascript
/****************************** html代码 **************************/
//引入socket.io基础库
<script type="text/javascript" src="http://cdn.staticfile.org/socket.io/1.3.7/socket.io.js"></script> 
//body中添加
<body>
    <button onclick = "a()">按钮</button>
    <ul id="ultext"></ul>
</body>


/****************************** js代码 **************************/
<script>
    var socket = io();
    function a(){
        socket.emit('click1');
    }
    //监听click2事件
    socket.on('click2',function(data){
        var htmldatas = data.datas;
        var html = '';

        for(var i = 0;i< htmldatas.length;i++){
            var htmldata = htmldatas[i];
            html += '<li>' + htmldata + '</li>'
        }
        document.getElementById('ultext').innerHTML = html;
    });
</script>
```
运行:访问http://localhost:3000/