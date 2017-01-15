# VueJs Prop简介

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

## propsData
描述：创建实例时传递props，主要作用是方便测试。<br>
限制：`只用于new创建的实例中`;
```javascript
var Comp = Vue.extend({
  props: ['msg'],
  template: '<div>{{ msg }}</div>'
});

var vm = new Comp({
  propsData: {
    msg: 'hello'
  }
});
```

## 字面量语法 vs 动态语法
```javascript
<comp some-prop="1"></comp>
```
因为它是一个字面prop，它的值以字符串“1”而不是以实际的数字传下去。如果想传递一个实际的javascript数字，需要使用v-bind，从而让他的值被当作JavaScript表达式计算：

```javascript
<comp v-bind:some-prop="1"></comp>
```

## 单向数据流
描述：prop是单向绑定的，当父组件的属性变化，将传递给子组件，但是不会反过来。这是为了防止子组件无意修改父组件的状态--这会让应用的数据流难以理解。<br>
`每次父组件更新时，子组件的所有prop都会更新为最新值，这意味着你不应该在子组件内部改变prop`

- 定义一个局部data属性，并将prop的初始值作为局部数据的初始值。
```javascript
  props: ['initialCounter'],
  data: function(){
    retrun { counter: this.initialCounter }
  }
```
- 定义一个computed属性，此属性从prop的值计算得出。
```javascript
  prop: ['size'],
  computed: {
    normalizedSize: function(){
      return this.size.trim().toLowerCase();
    }
  }
```

## Prop验证
描述：组件可以为props指定验证要求，如果未指定验证要求，Vue会发出警告。当组件给其他人使用时很有用。<br>
`prop`是一个对象而不是字符串数组时，它包含验证要求：
```javascript
Vue.component('example',{
  props: {
    //基础类型检测 ('null' 意思是任何类型都可以)
    propA: Number
    //多种类型
    propB: [String,Number],
    //必须且是字符串
    propC: {
      type: String,
      required: true
    },
    //数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    //数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function(){
        return { message: 'hello'}
      }
    },
    //自定义验证函数
    propF: {
      validator: function(value){
        return value > 10;
      }
    }
  }
})
```
`type`可以是下面原生构造器：
- String
- Number
- Boolean
- Function
- Object
- Array

`type`也可以是一个自定义构造器，使用`instanceof`检测。<br>
当prop验证失败了，如果使用的是开发版本会抛出一条警告。