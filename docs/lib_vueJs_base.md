# VueJs的基本语法

## 编写基础格式

```javascript
var vm = new Vue({
    //选取DOM
    el:'#box',
    //数据
    data:{
      msg:'土豪喝汤配虾',
      name:'_dddd'
    },
    //保存事件方法
    methods:{
      addItem:function(){},
      removeItem:function(){}  
    },
    //监听属性变化
    computed:{
      msg:function(){},
      //还可以添加get/set方法
      firstName:{
        get:function(){},
        set:function(){}
      }
    },
    //观察 Vue 实例上的数据变动。当一些数据需要根据其它数据变化时使用
    watch:{
      firstName:function(val){},
      lastName:function(val){}
    },
    //暂定???
    filters:{
      capitalize:function(){}
    },
    //暂定???
    template:'<div>{{msg}}</div>',
    //暂定???
    mounted:function(){},
    /*在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：
    数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 
    DOM编译，$el 还不存在。*/
    created:function(){},
    //暂定??? 混合
    mixins:[XXXX]
});

```

## VueJs静态方法

```javascript
//暂定???
1.  Vue.set();
//暂定???
2.  Vue.nextTick();
//暂定???
3.  Vue.extend({});
//暂定???
4.  Vue.mixin({});
```



