# 实例属性

## vm.$data
类型：【Object | Function】<br>
描述：`Vue实例观察的数据对象，Vue实例代理了对其data对象属性的访问。`<br>
限制：`组件的定义只接受 function`<br>
详细：Vue实例的数据对象，将会递归将 data 的属性转换为 getter/setter，从而让data的属性能够响应数据变化，对象必须是纯碎的对象(含有零个或多个的key/value对)：浏览器API创建的原生对象，原形上的属性会被忽略。data只能是数据-不推荐观察拥有状态行为的对象。

实例创建之后，可以通过` vm.$data `访问原始数据对象，Vue实例也代理了 data 对象上所有的属性，因此访问vm.a等价于访问 `vm.$data.a`。

以 _ 或 $ 开头的属性不会被Vue实例代理，因为他们可能和Vue内置的属性、API方法冲突。你可以使用`vm.$data._property`的方式访问这些属性。

当一个组件被定义，`data`必须声明为返回一个初始化数据对象的函数，因为组件可能被用来创建多个实例，如果`data`仍然是一个纯碎的对象，则所有的实例将共享引用同一个数据对象，`通过提供 data 函数，每次创建一个新实例后，我们能够调用data 函数，从而返回初始化数据的一个全新副本数据对象。

`如果需要，可以通过将来 vm.$data 传入 JSON.parse(JSON.stringify(...)) 得到深拷贝的原始数据对象。`

```javascript
var data = { a: 1 }

//直接创建一个实例
var vm = new Vue({
    data: data
});
vm.a // -> 1
vm.$data === data // -> true

// Vue.extend() 中 data 必须是函数
var Component = Vue.extend({
    data: function () {
        return { a: 1 }
    }
});
```

## vm.$el
类型：`HTMLElement`<br>
操作：'只读'<br>
描述：Vue实例使用的根DOM元素。


## vm.$options
类型：`Object`<br>
操作：`只读`<br>
描述：自定义属性,外部可通过vm.$options访问：`
```javascript
new Vue({
    //自定义属性 'customOption'
    customOption: 'foo',
    created: function () {
        console.log(this.$options.customOption) // -> 'foo'
    }
});
```

## vm.$parent
类型：`Vue instance`<br>
操作：`只读`<br>
描述：`父实例，如果当前实例有的话。`


## vm.$root
类型：`vue instance`<br>
操作：`只读`<br>
描述：`当前组件树的跟Vue实例，如果当前实例没有父实例，此实例将会是其自己。`


## vm.$children
类型：`Array<vue instance>`<br>
操作：`只读`<br>
描述：当前实例的直接子组件，需要注意 `$children 并不保证顺序，也不是响应式的`。如果发现自己正在尝试使用 $children 来进行数据绑定，`考虑使用一个数组配合 v-for 来生成子组件，并且使用Array作为真正的来源`。


## vm.$slots
类型：`{ [name: string]: ? Array<VNode> }`<br>
操作：`只读`<br>
描述：用来访问被slot分发的内容，每个具名slot有其相应的属性（例如：`slot="foo"` 中的内容将会在 `vm.$solts.foo`中被找到）。`default`属性包括了所有没有被包含在具名slot中的节点。

在使用render函数书写一个组件时，访问`vm.$solts`最有帮助。

```html
<blog-post>
    <h1 slot="header">
        About Me
    </h1>
    <p>这是一个测试而已拉....</p>
    <p slot="footer">
        Copyright 2017 Evan You
    </p>
    <p> If I have some content down here,included in vm.$sole.default.</p>
</blog-post>
```
```javascript
Vue.component('blog-post',{
    render: function(createElement){
        var header = this.$slots.header;
        var body   = this.$slots.default;
        var footer = this.$slots.footer;

        return createElement('div',[
            createElement('header',header),
            createElement('main',body),
            createElement('footer',footer)
        ])
    }
});
```


## vm.$scopedSlots 
类型：`{ [name: string]: props => VNode | Array<VNode> }`<br>
操作：`只读`<br>
描述：????


## vm.$refs
类型：`Object`<br>
操作：`只读`<br>
描述：一个对象，其中包含了所有拥有`ref`注册的子组件。
```html
<div id="app">
    <p ref="p">hello</p>
    <child-comp ref="child"></child-comp>
</div>
```
```javascript
Vue.component('childComp',{
    template:'<div>这是个</div>'
});
var vm = new Vue({
    el: '#app',
    data: {
        name: ''
    }
});

vm.$refs.child // -> 获得childComp组件
```


## vm.$isServer
类型：`boolean`<br>
操作：`只读`<br>
描述：当前Vue实例是否运行于服务器。


