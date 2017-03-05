# ejs

安装 ejs：
```javascript
npm i ejs --save
```

修改 index.js 如下：
```javascript
var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(3000);
```

通过 `app.set `设置模板引擎为 ejs 和存放模板的目录。在 myExpress 下新建 views 文件夹，在 views 下新建 users.ejs，添加如下代码：
```javascript
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      body {padding: 50px;font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;}
    </style>
  </head>
  <body>
    <h1><%= name.toUpperCase() %></h1>
    <p>hello, <%= name %></p>
  </body>
</html>
```
修改 routes/users.js 如下：

```javascript
var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
  res.render('users', {
    name: req.params.name
  });
});

module.exports = router;
```

通过调用 res.render 函数渲染 ejs 模板，res.render 第一个参数是模板的名字，这里是 users 则会匹配 views/users.ejs，第二个参数是传给模板的数据，这里传入 name，则在 ejs 模板中可使用 name。res.render 的作用就是将模板和数据结合生成 html，同时设置响应头中的 Content-Type: text/html，告诉浏览器我返回的是 html，不是纯文本，要按 html 展示。现在我们访问 localhost:3000/users/haha，
<br>
<br>

上面代码可以看到，我们在模板 <%= name.toUpperCase() %> 中使用了 JavaScript 的语法 .toUpperCase() 将名字转化为大写，那这个 <%= xxx %> 是什么东西呢？ejs 有 3 种常用标签：

- <% code %>：运行 JavaScript 代码，不输出
- <%= code %>：显示转义后的 HTML内容
- <%- code %>：显示原始 HTML 内容


### Data
```javascript
supplies: ['mop', 'broom', 'duster']
```

### Template
```javascript
<ul>
<% for(var i=0; i<supplies.length; i++) {%>
   <li><%= supplies[i] %></li>
<% } %>
</ul>
```


### Result
```javascript
<ul>
  <li>mop</li>
  <li>broom</li>
  <li>duster</li>
</ul>
```

### includes
我们使用模板引擎通常不是一个页面对应一个模板，这样就失去了模板的优势，而是把模板拆成可复用的模板片段组合使用，如在 views 下新建 header.ejs 和 footer.ejs，并修改 users.ejs：

#### views/header.ejs
```javascript
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      body {padding: 50px;font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;}
    </style>
  </head>
  <body>
```

#### views/footer.ejs
```javascript
</body>
</html>
```

#### views/users.ejs
```javascript
<%- include('header') %>
  <h1><%= name.toUpperCase() %></h1>
  <p>hello, <%= name %></p>
<%- include('footer') %>
```

我们将原来的 users.ejs 拆成出了 header.ejs 和 footer.ejs，并在 users.ejs 通过 ejs 内置的 include 方法引入，从而实现了跟以前一个模板文件相同的功能。
