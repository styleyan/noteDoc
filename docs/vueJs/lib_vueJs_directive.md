# 自定义指令

## 指令的注册
指令跟组件一样需要注册才能使用，同样有两种发式，一种是全局组侧：
```html
<div id="app">
　　<input type="text" v-focus="name" v-model="name" :data-name="name">
　　<button type="button" @click="name='zw'">click</button>
　　<!--当点击按钮的时候name改变，继而触发update中的方法-->
</div>
```
```javascript
Vue.directive('directionName',{
  //绑定时调用，只触发一次
  bind: function(el,binding){
    console.log('bind:',binding.value);
  },
  //dom插入后调用，只触发一次
  inserted: function(el,binding){
    console.log('insert:',binding.value);
  },
  //指令更新时调用，多次触发
  update: function(el,binding,vnode,oldVnode){
      el.focus();
      //这里的数据是可以动态绑定的通过el的data-*获取,可以是动态变量，也可以是值
      console.log(el.dataset.name);
      console.table({
        name: binding.name,
        value: binding.value,
        oldValue: binding.oldValue,
        expression:binding.expression,
　　　　arg:binding.arg,
　　　　modifiers:binding.modifiers,
　　　　vnode:vnode,
　　　　oldVnode:oldVnode
      })
  },
  //update方法调用完成后调用，多次触发
  componentUpdated: function(el,binding){
      console.log('componentUpdated:',binding.name)
  }
});

//调用指令
new Vue({
　el:'#app',
　data:{
　　name:'zwzhai'
　}
});
```
## 注册局部指令
```javascript
new Vue({
  directives: {
    //指令名称 focus 如全局一样
    focus: {
      bind: function(){
        
      }
    }
  }
});
```

## 钩子函数参数说明
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

这几个参数，大家看文档也能理解，就不多说了，关于bingding的几个属性说一下自己的看法，value这个属性，可以传字面量，也可以传单条语句（如上），还可以以变量的形式如 input type="text" v-focus="name" v-model="name" ；arg这里可以传一个字符串，因为在value去访问绑定值得时候拿到的不是直接写的那个，也就是说v-focus="name",这个name永远都是一个变量，需要定义赋值，而arg可以直接访问该值，如v-focus:foo,那么在钩子函数中拿到的就是foo这个字符串。

在vue的指令中是不可以双向数据绑定的，如官方所说：除了 el 之外，其它参数都应该是只读的，尽量不要修改他们。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。这里补充下关于dataset的知识：

data-  是html5的一个新属性，查了下浏览器支持程度，目前的主流浏览器都是支持的，IE的话要到10以上。具体的使用：在HTML中以属性的方式去写，data-yourname="value",在js中取这个属性就不用使用getAttribute这个方法，而是直接访问，ele.dataset.yourname,在js中你也可以添加和删除，添加：ele.dataset.dessert="yourname",删除：dette ele.dataset.name。此外，这个属性可以用作css选择器：.class[data-name]:{}。