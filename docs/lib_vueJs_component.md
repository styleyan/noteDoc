# VueJs 组件定义

## Prop 传递数据
描述：组件实例的作用域是孤立的，这意味着不能并且不应该在子组件的模板内直接引用父组件的数据，可以使用props把数据传给子组件。

####显示声明
prop是父组件用来传递数据的一个定义属性。子组件需要显示地用`props`选项声明`prop`:

```javascript
Vue.component('child',{
  //声明 props
  props: ['message'],
  //像data 一样，prop可以用在模板内
  //同样也可以在 vm 实例中像 "this.message" 这样使用
  template: '<span>{{ message }} </span>'
});

//给message赋值普通字符串
<child message="hello!"></child>

//得到结果：结果展示：hello!
```

## camelCase vs. kebab-case
描述：HTML特性不区分大小写，当只用非字符串模板时，prop的名字形式会从camelCase转为camel-case(短横线隔开)：
```javascript
Vue.component('child',{
  //camelCase in javascript
  props: ['myMessage'],
  //给组件赋值
  template: '<span>{{ myMessage }}</span>'
});

// html需要把大小写改为小横线，以下会得到hello
<child my-message="hello!"></child>

//如果未转化，页面什么也不会显示
<child myMessage="hello!"></child>
```

## 动态Prop
描述：类似于用'v-bind'绑定HTML特性到一个表达式，也可以用`v-bind`动态绑定props的值到父组件的数据中。每当父组件的数据变化时，该变化也会传导给子组件：
```html
<div id="app">
  <input v-model="parentMsg"><br>
  <child v-bind:my-message="parentMsg"></child>
</div>
```
```javascript
Vue.component('child',{
  props:["myMessage"],
  template: '<span>{{myMessage}} --> child测试'
});

var vm = new Vue({
  el: '#app',
  data: {
    parentMsg: ''
  }
});

//改动vm.parentMsg数据，组件里面的数据也会跟着改变
vm.parentMsg = 'parentMsg';
```

