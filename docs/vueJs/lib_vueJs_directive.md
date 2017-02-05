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
  bind: function(el,binding){
    console.log('bind:',binding.value);
  },
  inserted: function(el,binding){
    console.log('insert:',binding,value);
  },
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
注册局部指令
```javascript
new Vue({
  directives: {
    //指令名称 focus
    focus: {
      bind: function(){
        
      }
    }
  }
});
```
