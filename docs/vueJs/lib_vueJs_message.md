# 组件之间通信几种方法


## 跨组件【订阅/发布】模式
描述：vue2.0支持
```javascript
var bus = new Vue();

//把值发送指定频道
bus.$emit('fcName',1)

//接收指定频道的值
bus.$on('fcName',function(id){
	console.log(id);
});
```

## 通过prop向子组件通信
```html
<div id="app">
  <p>{{ total }}</p>
  <button type="button" @click="clickRef">调用子组件</button>
  <child :message="total"></child>
</div>
```
`message前加":" total是数据变量，未加total是字符串`。

```javascript
Vue.component('child',{
    template:'<div>全局组件：{{ message }}</div>',
    props: ["message"]
});
var vm = new Vue({
    el: '#app',
    data: {
      total: 1
    },
    methods: {
      clickRef: function(){
        this.total++;
      }
    }
});
```




## vuex