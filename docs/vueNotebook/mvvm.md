# 双向绑定实现

`通过proxy代理能监控每一次对 data 的读写操作，更重要的是方便监控的扩长。`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>my Test</title>
</head>
<body>
姓名<input type="text" name="nick">
<br>
年龄 <input type="text" name="age">
<br>
<button>加一岁</button>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>

</body>
</html>
```

```javascript
var data = {
  nick: '战三',
  age: 12
};

var proxy = new Proxy(data,{
  /*
  * @param obj    代理对象
  * @param prop   改变的属性名
  * @param value  改变的属性值
  */
  set: function(obj,prop,value){
    obj[prop] = value;
    $('input[name='+ prop +']').val(value);
  },
  /*
  * @param obj    代理对象
  * @param prop   改变的属性名
  */
  get: function(obj,prop){
    if(prop == 'age'){
      console.log('prop')
    };
    return obj[prop];
  }
});

$('input[name=nick').val(data.nick).on('input',function(){
  data.nick = this.value;
});

$('input[name=age').val(data.age).on('input',function(){
  data.age = parseInt(this.value);
});

$('button').on('click',function(){
  proxy.age += 1;
})
```


