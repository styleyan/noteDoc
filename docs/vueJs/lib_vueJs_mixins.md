# mixins混合对象


## 基础定义
混合是一种灵活的分布式复用Vue组件的方式。混合对象可以包含任意组件选项，以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。

```javascript
var myMixin = {
  created: function(){
    this.hello();
  },
  methods: {
    hello: function(){
      console.log('hello from 混合对象')
    }
  }
}

//定义一个使用混合对象的组件
var Component = Vue.extend({
  //mixins 为数组，可同时接收多个混合对象。
  mixins: [myMixin]
});

var component = new Component();  // -> 'hello form 混合对象'
```

## 选项合并
当组件和混合对象含有同名选项时，这些选项会以恰当的方式混合，同名的钩子函数会被混合为一个数组，`混合对象的钩子将在组件自身钩子之前调用`:
```javascript
var mixin = {
  created: function(){
    console.log('混合对象的钩子函数')
  }
};

var Component = Vue.extend({
  mixins: [mixin],
  created: function(){
    console.log('组件钩子被调用')
  }
});

new Component();
```
当值为对象，如methods,components,directives,将来被合并为一个对象，`两个对象键名冲突时，取组件对象的键值对`。
```javascript
var mixin = {
  methods: {
    foo: function(){
      console.log('foo');
    },
    aaa: function(){
      console.log(' from mixin');
    }
  }
};

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function(){
      console.log('bar')
    },
    //与mixin.methods.aaa方法键名冲突
    aaa: function(){
      console.log('from 组件');
    }
  }
});
vm.foo(); // -> 'foo';
vm.bar(); // -> 'bar';
vm.aaa(); // -> 'from 组件'
```


## 全局混合对象
`注册全局混合对象，将会影响到所有创建的Vue实例`
```javascript
//为自定义的选项 'myOption' 主人一个处理器
Vue.mixin({
  created: function(){
    var myOption = this.$options.myOption;
    if(myOption){
      console.log(myOption);
    }
  }
});

new Vue({
  myOption: 'hello'
});
```


## 自定义选项混合策略???
`待完善......`

