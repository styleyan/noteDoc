# 路由

用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
    <h1>hello App</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
</div>
```

```javascript
var Foo = { template: '<div>foo</div>'};
var Bar = { template: '<div>bar</div>'};

var routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
// {routes} 同等于 {routes:[{},{}]}
// 路由实例化对象
var router = new VueRouter({"routes":routes});

var app = new Vue({
    "el": "#app",
    "router": router
});
```
