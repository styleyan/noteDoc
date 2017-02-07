# Vue自定义过滤器

## 注意事项
- 全局方法 Vue.filter() 注册一个自定义过滤器，必须放在Vue实例化前面；
- 过滤器函数始终以表达式的值作为第一个参数，带引号的参数是为字符串，二不带引号的参数按表达式计算；
- 可以设置两个过滤器参数，前提是这两个过滤器处理的不冲突；
- 用户从input输入的数据在回传到model之前也可以先处理；


## 简单定义一个过滤
```html
<div id="app">
　　<input type="text" v-model="name">
    <span>输入值：{{name | sum}}</span>
</div>
```
```javascript
  Vue.filter('sum',function (value) {
    return value + ':yxf';
  });
  var app = new Vue({
    el: '#app',
    data: {
      name: 'ddddddd'
    }
  });
```


## filter中传多个参数
```html
<div id="app">
　　<input type="text" v-model="name">
    {{name | filterFun("result：","；")}}
</div>
```
```javascript
  var app = new Vue({
    el: '#app',
    filters: {
      filterFun: function(value,val1,val2){
        console.log('val1:'+val1) // -> "result："
        console.log('val2:'+val2) // -> "；"
        return val1 + value + val2;
      }
    },
    data: {
      name: 22
    }
  });
```
filters的function默认第一位参数,为当前的message的值value，`在写函数的时候应注意，自定义的参数是从第二位开始传的`。


## 支持多个filter
```html
<div id="app">
　　<input type="text" v-model="name">
    {{name | filterFun | filterFun2}}
</div>
```
```javascript
  var app = new Vue({
    el: '#app',
    filters: {
      filterFun: function(value){
        return value + ':';
      },
      filterFun2: function(value){
		return '第二次过滤结果：' + value;
  	  }
    },
    data: {
      name: 22
    }
  });
```

## 常用自定义过滤
uppercase(首字母大写)
```javascript
Vue.filter('uppercase',function(value){
	if(!value) return '';
	value = value.toString();
	return value.charAt(0).toUpperCase() +　value.slice(1);
});
```