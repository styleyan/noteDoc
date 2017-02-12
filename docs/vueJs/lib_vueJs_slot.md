# slot分发
主要是让组件的可扩展性更强
<br><br>

## 匿名slot使用
```javascript
/* html结构 */
<div id="myApp">
    <my-component>ddd</my-component>
</div>

/* 定义一个简单的slot插槽 */
Vue.component('myComponent',{
    template:'<div class="vvv"><slot>sdf</slot></div>'
});


/* 初始化组件 */
new Vue({
    el: '#myApp'
});
```


## 具名slot使用
```javascript
/* html结构 */
<div id="myApp">
    <my-component><p slot="slotAA">my name: yxf</p></my-component>
</div>

/* 定义一个简单的slot插槽 */
Vue.component('myComponent',{
    template:'<div class="vvv"><slot name="slotAA"><p>my name: default</p></slot></div>'
});


/* 初始化组件 */
new Vue({
    el: '#myApp'
});
```

以上2个例子说明slot在组件中作用只是起到一个默认值的作用。