# Vue自定义过滤器

## 注意事项
- 全局方法 Vue.filter() 注册一个自定义过滤器，必须放在Vue实例化前面；
- 过滤器函数始终以表达式的值作为第一个参数，带引号的参数是为字符串，二不带引号的参数按表达式计算；
- 可以设置两个过滤器参数，前提是这两个过滤器处理的不冲突；
- 用户从input输入的数据在回传到model之前也可以先处理；

## 简单定义个一个过滤
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