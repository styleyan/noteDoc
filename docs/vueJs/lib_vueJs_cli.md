# cli模块引用

`运行环境搭配：` [vue-cli 2.0 配置说明](http://www.cnblogs.com/nmxs/p/6206306.html);<br>

## 入门例子地址
[vue-demo-kugou](https://github.com/lavyun/vue-demo-kugou)<br>
[从零构建vue2 + vue-router + vuex 开发环境到入门](https://github.com/lzxb/vue2-demo)<br>
[用Vue.js开发微信app界面](https://github.com/useryangtao/vue-wechat)

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