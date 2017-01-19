# 实例方法

## vm.$mount()实例方法
描述：`如果Vue实例在实例化时美有收到el选项，则它处于“未挂载”状态，没有关联的DOM元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。`

```javascript
var MyComponent = Vue.extend({
	template: '<div>Hello!</div>'
});

//插件并挂载到 #app (会替换 #app)
new MyComponent().$mount('#app');

//同上
new MyComponent().$mount('#app')

// 或者，在文档之外渲染并且随后挂载
var component = new MyComponent().$mount();
document.getElementById('app').appendChild(component.$el);
```

## vm.$forceUpdate()
描述：`迫使Vue实例重新渲染，注意它仅仅影响实例本身和插入插槽内容的子组件,而不是所有子组件。`<br>
触发这个问题有以下几个前提：<br>
1. vue版本为2.0版本，1.0无此问题。<br>
2. 使用组件嵌套，在父组件的模板中访问`$children`变量<br>
3. 在渲染完成后没有在将`$children`变量写入过父组件的`data`变量（或其他vm数据)就会触发此问题。

```javascript
<!-- 父组件HTML模板 -->
<div id="app">
	<div {{$children.length}}</div> // 此处显示0，应该为3 
	<child></child>
	<child></child>
	<child></child>
</div>

//子组件代码
Vue.component("child",{
	template: "<div>child</div>",
});

//父组件声明
new Vue({
	el: '#app'
});
```
#### 解决方法1：
`使用$forceUpdate()，注册父组件的mounted方法，执行 $forceUpdate()。`

```javascript
new Vue({
	el: '#app',
	mounted: function(){
		this.$forceUpdate();//强制重新绘制
	}
})
```
####解决方法2：
使用vm的变量代替$children，注册父组件的mounted方法，将$children赋值给自定义的vm的变量。同事模板中使用自定义的变量来代替默认的$children。

```javascript
var vm = new Vue({
	el: '#app',
	data: {
		child: []
	},
	mounted: function () {
		this.child = this.$children;//手动将$children对象赋值给自定义child变量
	}
});
```



## vm.$nextTick([callback])
描述：将回调延迟到下次DOM更新循环之后执行。在修改数据之后立即使用它，然后等待DOM更新。它跟全局方法Vue.nextTick一样，不同的是回调的this自动绑定到调用他的实例上。
```html
<div id="app">
	{{ message }}
</div>
```
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    message: 'before'
  },
  methods: {
    example: function(){
      this.message = 'changed';
      this.$nextTick(function(){
        //DOM现在更新了
        // this 绑定到当前实例
        this.doSomethingElse();
      });
    },
    doSomethingElse: function(){
      console.log('DOM显示更新了')
    }
  }
});
```



## vm.$destroy()
描述：完全销毁一个实例，清理它与其它实例的连接，解绑它的全部指令及时间监听器。触发deforeDestroy和destroyed的钩子。<br>
`在大多数场景中不应该调用这个方法。最好使用v-if和v-for指令以数据驱动的方式控制字组件的生命周期。`




## vm.$watch( expOrFn, callback, [options] )
参数：
- `{string | function} expOrFn`
- `{Function} callback`
- `{Object} [options]`
  - `{boolean} deep`
  - `{boolean} immediate`

返回值：`{Function} unwatch`

描述：观察Vue实例变化的一个表达式或计算属性函数，回调函数得到的参数为新值和旧值。表达式只接受监督的键路径，对于更复杂的表达式，用一个函数取代。

注意：`在变异（不是替换）对象或数组时，旧值将与心智相同，因为他们的应用指向同一个对象/数组。Vue不会保留变异之前值的副本`。
```javascript
  var vm = new Vue({
    el: '#app',
    data: {
      a: {
        b: {
          c: 'aaa'
        }
      }
    }
  });
  
  //在控制台添加监听方法
  vm.$watch('a.b.c',function(newVal,oldVal){
      console.log('oldVal：' + oldVal);
      console.log('newVal：' + newVal);
  });

  vm.a.b.c = '这是测试';
  //输出：oldVal：aaa，newVal：这是测试
```
`通过函数表达式来实现监听,当a、b数据有变化会先把a、b值相加，然后返回到回调函数。`
```javascript
var vm = new Vue({
	el: '#app',
	data: {
		a: 'yxf',
		b: 'wn'
	}
});
//通过函数监听2个函数变化
vm.$watch(function () {
	return this.a + this.b;
},function(newVal,oldVal) {
	console.log('newVal:' + newVal);
	console.log('oldVal:' + oldVal);
});
```
`vm.$watch`返回一个取消观察函数，用来停止触发回调：
```javascript
var unwatch = vm.$watch('a',function(newVal,oldVal){
	//一些代码
});
//之后取消观察
unwatch();
```


## vm.$set( object, key, value )
参数：`{Object} object || {string} key  || {any} value`<br>
返回值：`设置的值。`<br>
描述：`设置对象的属性，如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制`。
```html
<div id="app">
	<span>name：{{ user.name }}</span>
	<span>sex：{{ user.sex }}</span>
</div>
```
```javascript
var vm = new Vue({
	el: '#app',
	data: {
		user: {
			name: 'yxf'
		}
	}
});

vm.$set(vm.user,"sex","1111"); // -> sex变化为1111
```
备注：`如果用vm.user.sex直接赋值不会立即更新视图，需要其他数据更新或用vm.$set(vm.user,"sex","bbbb")后然后在用vm.user.sex才会立即更新视图`。



## vm.$delete( object, key )
参数：`{Object} object || {string} key`<br>
返回值：`设置的值。`<br>
描述：`删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制`。