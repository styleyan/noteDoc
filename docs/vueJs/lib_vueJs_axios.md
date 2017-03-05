# axios 发送ajax请求

[axios中文说明文档](http://www.kancloud.cn/yunye/axios/234845)<br>
[ajax学习体系( 推荐 )](http://louiszhai.github.io/2016/11/02/ajax/)<br><br>

使用npm 安装 axios
```javascript
npm install axios --save
```
安装其他插件，可以直接在main.js中引入 并Vue.use(),但是axios并不能use,只能每个需要发送请求的组件中即时引入。<br>
为了解决这个问题，有两种开发思路，一是在引入axios之后，修改原型链，二是结合Vuex，封装一个aciton。


## 改写原型链
首页在main.js中引入axios
```javascript
import axios from 'axios'
```
这样在其他组件是无法使用axios的，需要把axios改写为Vue的原型属性。
```javascript
Vue.prototype.$ajax = axios
```
就能直接在组件methods中使用`$ajax命令`
```javascript
methods:{
	getData(){
		this.$ajax.post('/first').then(function(data){
			console.log(data);
		}).catch(function(data){
			console.log(data);
		})
	}
}
```


## Vuex 中封装
action 和mutations主要区别在于，action可以包含多个异步mutations操作；<br>
另外还有一个重要区别：<br>
mutations有个固定参数 state,接收的是Vuex中的state对象<br>
action也有一个固有参数 context,但是 context是state的父级，包含 state、getters<br><br>

在store.js，将axios引入并在action添加新的方法
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
//引入axios
import axios from 'axios'

Vue.use(Vuex)

conse store = new Vuex.Store({
	//定义状态
	state: {
		test: {
			name: '__DDDD'
		},
		test2: {
			tell: '888888888'
		}
	},
	actions: {
		//封装一个ajax方法
		casingAjax({ state }){
			axios({
				method: 'post',
				url: '/list',
				data: state.test
			})
		}
	}
})

export default store
```
在组件中发送请求的时候，需要使用this.$store.dispatch来分发
```javascript
methods: {
	postAjax(){
		this.$store.dispatch('casingAjax');
	}
}
```
postAjax是绑定在组件上的一个方法，将触发casingAjax,从而通过axios向服务器发送请求。


## 配置说明
```javascript
//设置默认请求超出时间
axios.default.timeout = 50000;
//设置默认请求路径
axios.default.baseURL = "https://api.github.com"
```

`http request 拦截器`
```javascript
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
```

`http response 拦截器`
```javascript
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    }
);
```
[考察链接地址](https://github.com/superman66/vue-axios-github/blob/master/src/http.js);