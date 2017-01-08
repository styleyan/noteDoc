#vueJs 全局方法

## Vue.extend


## Vue.nextTick


## Vue.set


## Vue.delete
描述：删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于`避开 Vue 不能检测到属性被删除的限制`。
```html
<div id="example">{{user.name}}</div>
```
```javascript
  var example = new Vue({
    el: '#example',
    data:{
      user:{
        name:'dddd'
      }
    }
  });
  //3秒后删除name属性
  setTimeout(function(){
    Vue.delete(example.$data.user,"name");
  },3000);
```
`Vue.delete(Vue实例data属性上的数据,需要删除的键值)`，与set刚好相反。


## Vue.directive（自定义指令）
描述：注册或获取全局指令。
```html
<div id="app">
  <input type="text" v-focus="name" v-model="name" :data-name="name">
  <button type="button" @click="vueName">click</button>
</div>
```
```javascript
Vue.directive('focus',{
  bind:function(el,binding){
    console.log('bind:',binding.value);
  },
  inserted: function(el,binding){
    console.log('insert:',binding.value);
  },
  update:function(el,binding,vnode,oldVnode){
    el.focus();
    console.log('update：' + el.dataset.name);
    console.table({
      name:binding.name,
      value:binding.value,
      oldValue:binding.oldValue,
      expression:binding.expression,
      arg:binding.arg,
      modifiers:binding.modifiers,
      vnode:vnode,
      oldVnode:oldVnode
    });
  },
  componentUpdated:function(el,binding){
    console.log('componentUpdated:',binding.name);
  }
});

new Vue({
  el:'#app',
  data:{
    name:'zwzhai',
    add:'北京海定区'
  },
  methods:{
    vueName:function(){
      this.name = 'yxf';
    }
  }
});
```
#### 钩子函数参数说明
- el：指令所绑定的元素，可以用来直接操作DOM。
- binding：一个对象，包含以下属性：
  - name: 指令名，不包括 `v-` 前缀。
  - value: 指令的绑定值，例如：`v-my-directive="1 + 1"`, value 的值是`2`。
  - oldValue: 指令绑定的前一个值，仅在`update`和`componentUpdated`钩子中可用。无论值是否改变都可用。
  - expression: 绑定值的字符串形式。例如`v-my-directive="1 + 1"`，expression的值是`"1 + 1"`。
  - arg: 传给指令的参数。例如`v-my-directive:foo`，arg的值是`"foo"`。
  - modifiers: 一个包含修饰符的对象。例如：`v-my-directive.foo.bar`, 修饰符对象modifiers的值是`{ foo: true, bar: true }`。
- vnode: Vue 编译生成的虚拟节点。
- oldVnode: 上一个虚拟节点，仅在`update`和`componentUpdated`钩子中可用。




## Vue.filter



## Vue.component



## Vue.use



## Vue.mixin



## Vue.compile