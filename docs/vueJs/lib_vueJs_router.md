# 路由

[官方文档](https://router.vuejs.org/zh-cn/)<br>
[github地址](https://github.com/vuejs/vue-router/tree/next)<br><br>
用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：

## 使用路由
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

## 重定向路由
```javascript
var routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    //redirect 打开首页转到 '/foo'
    { path: '/', redirect: '/foo'}
];
```


## 动态路由
```javascript
<div id="apps">
  <ul>
    <li><router-link to="/a/b/e">go to aaa</router-link></li>
    <li><router-link to="/a/b">go to bbb</router-link></li>
  </ul>
  <router-view></router-view>
</div>
```
```javascript
var List = { template: '<div>list{{$route}}</div>'};
var test = { template: '<div>test{{$route}}</div>'};

var routes = [{
  path: '/:aa/:bb/e',
  component: List
},{
  path: '/:a/:b',
  component: test
}];

var router = new VueRouter({routes});

new Vue({
  el: '#apps',
  router
});
```
你可以在一个路由中设置多段『路径参数』，对应的值都会设置到 $route.params 中。例如：

| 模拟    | 匹配路径 | $route.params |
| ----- |--------- | --------------|
| /:aa/:bb | /a/b | { bb: 'b',aa:'a' } |
| /a/:bb/ | /a/b | { bb: 'b'} |

除了 $route.params 外，$route 对象还提供了其它有用的信息，例如，$route.query（如果 URL 中有查询参数）、$route.hash 等等。


## 嵌套路由
```javascript
const routes = [
    { path: '/index', component: index,
        children: [
            { path: 'info', component: info}
        ]
     }
]
```
通过/index/info就可以访问到info组件了


## 懒加载
```javascript
const routes = [
    { path: '/index', component: resolve => require(['./index.vue'], resolve) },
    { path: '/hello', component: resolve => require(['./hello.vue'], resolve) },
]
```
通过懒加载就不会一次性把所有组件都加载进来，而是当你访问到那个组件的时候才会加载那一个。对于组件比较多的应用会提高首次加载速度。




| 项目        | 价格    |  数量   |
| ----        | ------  | ------  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12    |
| 管线        |    $1   |  234    |
