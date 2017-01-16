# 实例方法/生命周期

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