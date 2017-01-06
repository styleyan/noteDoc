# VueJs的基本语法

## 编写基础格式

```javascript
var vm = new Vue({
    //选取DOM
    el:'#box',
    //数据
    data:{
      msg:'土豪喝汤配虾',
      name:'_dddd'
    },
    //保存事件方法
    methods:{
      addItem:function(){},
      removeItem:function(){}  
    },
    //监听属性变化
    computed:{
      msg:function(){},
      //还可以添加get/set方法
      firstName:{
        get:function(){},
        set:function(){}
      }
    },
    //观察 Vue 实例上的数据变动。当一些数据需要根据其它数据变化时使用
    watch:{
      firstName:function(val){},
      lastName:function(val){}
    },
    //暂定???
    filters:{
      capitalize:function(){}
    },
    //暂定???
    template:'<div>{{msg}}</div>',
    //暂定???
    mounted:function(){},
    /*在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：
    数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 
    DOM编译，$el 还不存在。*/
    created:function(){},
    //暂定??? 混合
    mixins:[XXXX]
});

```

## VueJs静态方法

```javascript
//暂定???
1.  Vue.set();
//暂定???
2.  Vue.nextTick();
//暂定???
3.  Vue.extend({});
//暂定???
4.  Vue.mixin({});
```

## VueJs简单语法

####  1)、if条件语句

```html
<div id="app-3">
  <p v-if="seen">Now you see me</p>
</div>
```

```javascript
var app3 = new Vue({
  el:'#app-3',
  data:{
    seen:true
  }
});
```
当控制条设置`app3.seen = false`,“Now You see me” 就会消失。

####  2)、v-show条件指令
v-show也是条件渲染指令，和v-if指令不同的是，`使用v-show指令的元素始终会被渲染到HTML，
只是简单地为元素设置CSS的style属性。`
```html
<div id="appShow">
  <p v-show="status">土豪喝汤配虾</p>
</div>
```
```javascript
var appShow = new Vue({
  el:"#appShow",
  data:{
    status:false
  }
})
```

####  3)、for循环语句
```html
<div id="app-4">
  <ol>
    <li v-for="(value, key, index) in todos">
      {{todo.text}}:{{index}}
    </li>
  </ol>
</div>
```
上例中v-for中`value:值，key:键名，index:索引`

```javascript
var app4 = new Vue({
  el:"#app-4",
  data:{
    todos:[
      {text:'Learn JavaScript'},
      {text:'Learn Vue'},
      {text:'Build something awesome'}
    ]
  }
})
```
只要在控制台里，输入`app4.todos.pubh({text:'New item'})`。你会发现列表中多了一栏新内容。

## 事件绑定
```html
<div id="app">
  <button v-on:click="doSomething">提交按钮</button>
</div>
```
简写
```html
<div id="app">
  <button @click="doSomething">提交按钮</button>
</div>
```
```javascript

```





