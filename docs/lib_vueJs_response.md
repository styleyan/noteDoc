# 数据响应式变化

## 通过computed监听
描述：计算属性将被混入到Vue实例中。所有getter和setter的this上下文自动地绑定为Vue实例。<br>
`不应使用箭头函数来定义计算属性函数(例如 aDouble: () => this.a * 2)。理由是箭头函数绑定了父级作用域的上下文，所有this将不会按照期望指向Vue实例，this.a 将是undefined。`<br>
计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。

```javascript
var vm = new Vue({
  data: { a: 1 },
  computed: {
    //仅读取,值只须为函数
    aDouble: function(){
      return this.a * 2;
    },
    //读取和设置
    aPlus: {
      get: function(){
        return this.a + 1;
      },
      set: function(v){
        this.a = v - 1;
      }
    }
  }
});

vm.aPlus // -> 2
vm.aPlus = 3
vm.a  // -> 2
vm.aDouble // -> 4
```
- get：获取时调用
- set：赋值时调用
- function: 只获取不设置

备注：computed仅读取数据可直接写函数并把值return返回,`"设置/读取"应设置get/set方法，假如只设置了set未设置get方法，只能设置不能读取。`



## 通过watch来监听
描述：一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue实例将会在实例化时调用`$watch`，遍历watch 对象的每一个属性。

```javascript
var vm = new Vue({
    data: {
        a: 11,
        b: 22,
        c: 33
    },
    methods: {
        'someMethod': function(){
            console.log('bb属性变化');
        }
    },
    watch: {
        a: function (val,oldVal) {
            console.log('new:%s, old:%s',val,oldVal);
        },
        // 方法名，直接调用methods定义的someMethod方法。
        b: 'someMethod',
        // 深度 watcher
        c: {
            handler: function(val,oldVal){
                console.log('deep watcher')
            },
            deep: true
        }
    }
});
vm.a = 2 // -> new: 2, old: 1
```
备注：`不应该使用箭头函数来定义watcher函数(例如 searchQuery: newValue => this.updatedAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所有this将不会按照期望指向Vue实例， this.updatedAutocomplete 将是undefined。`