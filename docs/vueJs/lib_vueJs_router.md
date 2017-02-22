# 路由

[官方文档](https://router.vuejs.org/zh-cn/)<br>
[github地址](https://github.com/vuejs/vue-router/tree/next)<br><br>
[vue-router 2.0 改变的内容(推荐)](https://segmentfault.com/a/1190000006623100)<br>
[vue-router源码分析-整体流程(推荐)](https://github.com/DDFE/DDFE-blog/issues/9)


## 路由解析
```javascript
new VueRouter({
  //url显示模式, 默认是 "hash",其他值2个('abstract'、'history')
  mode:'history',
  base: __dirname,
  routes: [
    {
      //通过 'to="/"'，跳转指定路由
      path: '/',
      //通过 ':to={name:"foo"}'，跳转指定路由
      name: 'foo',
      //重定向,通过name重定向  redirect{name:'foo'}
      redirect:'/foo',
      //设置别名，也可以是个数组 ['/baz', 'baz-alias']
      alias: 'nested-alias',
      // ???    也可以写成：props: { name: 'world' }
      props:true,
      // ???
      meta: { scrollToTop: true },
      // 滚动行为
      scrollBehavior: function(to, from, savedPosition){},
      //组件文件
      component: {
        //单个用template
        //多个：https://github.com/vuejs/vue-router/blob/dev/examples/named-views/app.js
        template: '<div><h2>Home</h2></div>',
        /*
        * 组件隐藏后调用
        * @param to  【Object】   
        * @param from【Object】   
        * @param next【Function】   
        */
        beforeRouteLeave: function(to,from,next){

          // next(true):显示视图，
          // next('/index')：跳转到指定路径;
          // 第三种暂时不知干嘛的
          next(true);
        },
        /*
        * 组件显示之前调用
        * @param to  【Object】   
        * @param from【object】   
        * @param next【Function】   
        */
        beforeRouteEnter: function(to,from,next){

          // next(true):显示视图，
          // next('/index')：跳转到指定路径;
          // 第三种暂时不知干嘛的
          next(true);
        },
        /*
        * 组件更新前调用
        * @param to  【Object】   
        * @param from【object】   
        * @param next【Function】   
        */
        beforeRouteUpdate: function(to,from,next){
          
          // next(true):显示视图，
          // next('/index')：跳转到指定路径;
          // 第三种暂时不知干嘛的
          next(true);
        }
      },
      children: [
        //传的参数与父级一样形式
      ],
      /*
      * 路由显示前调用，比beforeRouteEnter先执行。
      * @param to  【】   
      * @param from【】   
      * @param next【】   
      */
      beforeEnter:function(to,from,next){
        //一些代码
      },
    },
    //其他路由配置
    ....
  ]
});

```

`router-link`
```javascript
//配合path, 跳转到path指定的路由
<router-link to="/">/</router-link>
//配合name, 跳转到name指定的路由
<router-link :to="{ name: 'foo' }">foo</router-link>


//tag
<router-link to="/">/</router-link>

```


`router-view`
```javascript
//默认显示一个
<router-view class="view one"></router-view>

//通过name可以同时设置多个组件显示
// https://github.com/vuejs/vue-router/blob/dev/examples/named-views/app.js
<router-view class="view one" name="a"></router-view>

//可以带有默认值
<router-link>/qudddux</router-link>
```

## 监听路由变化
```javascript
var app = new Vue({
  el: '#app',
  //路由对象
  router,
  //监听路由
  watch: {
    //监听路由改变
    '$router': function(to,from){
        //一些代码
    }
  }
})
```

## 使用路由
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
