#vueJs 全局方法

## Vue.extend
描述：`使用基础Vue构造器，创建一个“子类”。参数是一个包含组件选项的对象。`
需要注意在Vue.extend中的data选项必须是个函数，如果不是会多个子类会共享data。
```html
<div id="mount-point"></div>
```
```javascript
//创建构造器
var Prefile = Vue.extend({
	template:'<p>{{firstName}} {{lastName}} aka {{alias}} </p>',
	data:function(){
		return {
			firstName:'Walter',
			lastName:'White',
			alias:'Heisenberg'
		}
	}
});

//创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point');
```

## Vue.nextTick
描述：`在下次 DOM更新循环结束之后执行延迟回调。`在修改数据之后立即使用这个方法，获取更新后的 DOM。
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

vm.message = 'new message' //更改数据
vm.$el.textContent === 'new message' //false
vm.nextTick(function(){
	vm.$el.textContent === 'new message' //true
});
```
在组件内使用`vm.$nextTick()`实例方法，因为它不需要全局`Vue`，并且回调函数中的`this`将自动绑定到当前的Vue实例上。
```javascript
Vue.component('example',{
	template: '<span>{{ message }}</span>',
	data: function(){
		return {
			message: 'not updated'
		}
	},
	methods: {
		updateMessage: function(){
			this.message = 'updated';
			console.log(this.$el.textContent) // => '没有更新'
			this.$nextTick(function(){
				console.log(this.$el.textContent)  // => '更新完成'
			})
		}
	}
});
```

## Vue.set
描述：设置对象的属性，如果对象是响应式的，`确保属性被创建后也是响应式同时触发视图更新`。这个方法主要用于避开 Vue 不能检测属性被添加的限制。<br>
`注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。`


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
描述：注册或获取全局过滤器，全局注册必须在实例Vue对象前。
```javascript
<div id="app">
    //得到“5,filter;”
    {{num | add}} 
</div>
```
```javascript
Vue.filter('add',function(value){
  return value + ',filter;';
});
var app = new Vue({
    el: '#app',
    data: {
      num: 5
    }
});
```


## Vue.component



## Vue.use



## Vue.mixin



## Vue.compile