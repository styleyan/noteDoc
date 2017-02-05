# 自定义指令

## 指令的注册
指令跟组件一样需要注册才能使用，同样有两种发式，一种是全局组侧：
```javascript
Vue.directive('directionName',{
  bind: function(el,binding){
    console.log('bind:',binding.value);
  },
  inserted: function(el,binding){
    console.log('insert:',binding,value);
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
