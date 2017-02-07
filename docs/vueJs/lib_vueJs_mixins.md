# vue混合合并


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


