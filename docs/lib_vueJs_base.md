# VueJs的基本语法

## 编写基础格式

```javascript
var vm = new Vue({
    //选取DOM
    el:'#box',
    //数据
    data:{
      msg:'这是个错误的',
      name:'_dddd'
    },
    //保存事件方法
    methods:{
      //添加
      addItem:function(){},
      //删除
      removeItem:function(){}  
    },
    //监听属性变化
    computed:{
      //msg数据变量回调
      msg:function(){
        console.log('变量了')
      }
    }
});

```



