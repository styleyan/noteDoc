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
    //过滤器
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
    mixins:[XXXX],
    //注册局部指令
    directives:{},
    //注册局部组件
    components:{"my-component":cmp}
});

```

## if/for语句

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
#### 3)、if(){}else{}语句
```html
<div id="app">
  <ul v-if="items.length">
    <li v-for="item in items">{{item.name}}</li>
  </ul>
</div>
```
```javascript
var app = new Vue(
  el:'#app',
  data:{
    items:[
      {name:"yxf"},
      {name:"wn"}
    ]
  }
)
```
####  4)、for循环语句
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
快捷写法
```html
<div id="app">
  <button @click="doSomething">提交按钮</button>
</div>
```
向事件里面传参数，`如果在事件函数里面需要event对象，那么就要在参数传入$event`
```javascript
<div id="app">
  <button @click="doSomething($event,'这是测试')"></button>
</div>
```

```javascript
var app = new Vue({
    el:'#app',
    data:{
      name:'Yxf'
    },
    methods:{
      doSomething:function(e,val){
        // `this` 在方法里面指当前Vue实例对象
        console.log('Hello ' + this.name + '!');
        //原生js事件的event对象
        console.log(e);
        //传进来的参数
        console.log(val);
    }
  }
});

//也可以通过Vue实例 直接调用方法
app.doSomething();
```

事件修饰符
```html
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis">...</a>

<!-- 提交事件不在重载页面 -->
<form v-on:submit.prevent="onSubmit">...</form>

<!-- 修饰符串联 -->
<a v-on:click.stop.prevent="doThat">...</a>

<!-- 添加事件监听器使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当事件在该元素本身(而不是子元素)触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- 2.1.4版本新增  只触发一次事件 -->
<a v-on:click.once="doThis">...</a>
```

按键修饰符
```html
<!-- 只有在keyCode是13时调用 vm.submit() -->
<input v-on:keyup.13="submit">
<!-- 别名修饰 -->
<input v-on:keyup.enter="submit">
<!-- 缩写方式 -->
<input @keyup.enter="submit">
```
组合写法
```html
<!-- 2.1.0组合写法 Alt + C -->
<input @keyup.alt.67 = "clear">
<!-- 2.1.0组合写法 Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```
别名列表
1. `.enter`
1. `.tab`
1. `.delete`
1. `.esc`
1. `.space`
1. `.up`
1. `.down`
1. `.left`
1. `.right`
1. `.ctrl`
1. `.alt`
1. `.shift`
1. `.meta`

可以通过全局`config.keyCodes`对象自定义按键修饰符别名
```javascript
Vue.config.keyCodes.f1 = 112;
```

## DOM渲染完后回调
```html
<div id="example">{{message}}</div>
```
```javascript
var vm = new Vue({
  el:'#example',
  data:{
    message:'123'
  }
});
//更改数据
vm.message = 'new message';  
//false
vm.#el.textContent === 'new message'; 

vm.nextTick(function(){
  //true
  vm.$el.textContent === 'new message';  
});
```

在组件中使用示例
```javascript
Vue.component('example',{
  template:'<span>{{message}}</span>',
  data:function(){
    return {
      message:'not updated'
    }
  },
  methods:{
    updatedMessage:function(){
      this.message = 'updated';
      console.log(this.$el.textContend) // not updated
      this.$nextTick(function(){
        console.log(this.$el.textContent) // updated
      })
    }
  }
})
```





