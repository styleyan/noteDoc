# vuex笔记
`官网地址` [vuex官网](https://vuex.vuejs.org/zh-cn/)


`推荐文章：`<br>
[到底vuex是什么?(推荐)](https://segmentfault.com/a/1190000007516967?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

## 实际例子
[V2EX-mobile](https://github.com/Vincent1993/V2EX-mobile)<br>
[官方例子](https://github.com/vuejs/vue-hackernews-2.0)


## new Vuex.Store接受参数
```javascript
const store = new Vuex.Store({
	//数据源
	state: {

	},
	//数据操作
	mutations: {

	},
	actions: {

	},
	modules: {

	},
	getters: {

	},	
	//开启严格模式，仅需在插件store的时候传入 strict: true;
	//在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
	strict: true
})
```
1. `不要在发布环境下启用严格模式！`严格模式会深度监测状态树来检测不合规的状态变更<br>


## new Vuex.Store() 实例 api
前往》[Vuex.Store 实例方法](https://vuex.vuejs.org/zh-cn/api.html)
```javascript
const store = new Vuex.Store({.../参数});

//提交 mutation
store.commit(mutation, payload);
store.commit({type:'mutation',xxx:xxx});
//分发 action。返回 action 方法的返回值，如果多个处理函数被触发，那么返回一个 Pormise。
dispatch(type: string, payload?: any) | dispatch(action: Object)
//???
store.getters
//查看是否开启严格模式
store.strict

//动态 Modules 注册
store.registerModule('xxxxx',{})

//???
store.replaceState

//???
store.unregisterModule

// ???
store.watch
```


## 简单示例
```javascript
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuex@next"></script>

<div id="app">
  <p>{{count}}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </p>
</div>

<script>
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
      inc: state => state.count++,
    dec: state => state.count--
  }
})

const app = new Vue({
  el: '#app',
  computed: {
    count () {
        return store.state.count
    }
  },
  methods: {
    inc () {
      store.commit('inc')
    },
    dec () {
        store.commit('dec')
    }
  }
})
</script>
```