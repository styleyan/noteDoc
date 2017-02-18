# cli模块引用

`运行环境搭配：` [vue-cli 2.0 配置说明](http://www.cnblogs.com/nmxs/p/6206306.html);<br>

[vue-cli]: https://github.com/vuejs/vue-cli

## vue-cli构架项目
与express-generator类似方便用户初始化项目骨架<br>官网地址： [vue-cli][]<br>
```javascript
 npm install -g vue-cli
 //基于webpack编译构建项目
 vue init webpack my-project
 cd my-project
 npm install
 //启动开发模式
 npm run dev
 //打包发布命令
 npm run build
```
浏览地址：http://localhost:8080<br>
备注：`当启动出现报错，检查8080端口是否被占用。`

## 入门例子地址
- [vue-demo-kugou](https://github.com/lavyun/vue-demo-kugou)
- [从零构建vue2 + vue-router + vuex 开发环境到入门](https://github.com/lzxb/vue2-demo)
- [用Vue.js开发微信app界面](https://github.com/useryangtao/vue-wechat)
- [vue.js实例项目](https://www.zhihu.com/question/37984203)
- [高仿饿了么](https://github.com/SimonZhangITer/VueDemo_Sell_Eleme)

## 简单示例
1.新建 aaa.vue文件，并写<br>
```javascript
<template>
	<div class="user">
		<p>{{userName}}</p>
		<button @click="showName">点我</button>
	</div>
</template>

<script>
	//默认对外接口格式
	export default {
		name: 'xxxx-xxx',
		data () {
			return {
				userName: 'zhan=?',
				num: 1
			}
		},
		methods: {
			showName () {
				this.userName += (this.num++);
			}
		}
	}
</script>
```
2.有用到 aaa.vue组件时引用；
```javascript
<template>
	<div class="ddd">
		// html引入组件
		<a-aa></a-aa>
	</div>
</template>

<script>
	//导入aaa组件
	import Aaa from './aaa.vue';

	export default {
		computed: {
			...malGetters(['head'])
		},
		name: 'xxx',
		//加入组件
		components: {Aaa}
	}

	//... 一些代码
</script>
```