# cli模块引用

## 引入组件
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

## export/import 几种方式

#### default对外接口
```javascript
//a组件 
export default{
	aaaa:function(){},
	bbbb:'sss'
}

//其他组件使用a组件
import obj from "./a";
obj  //得到 => {aaaa:function(){},bbbb:'ssss'}
```

#### 多个外面接口只取其中一个
```javascript
//a组件
export const YXF_AAAA = "YXF_AAAA";
export const YXF_YOUNAME = "YXF_YOUNAME";
export const WN_WIFE = "WN_WIFE";
export const YXF_WN_FN = ()=>{console.log('dddd')};


//其他组件使用a组件
import {YXF_WN_FN} from "./a";
YXF_WN_FN  //得到 => function(){console.log('dddd')}
```

#### 获取全部对外接口
```javascript
//a组件
export const YXF_AAAA = "AAAA";
export const YXF_YOUNAME = "YOUNAME";
export const WN_WIFE = "WN_WIFE";
export const YXF_WN_FN = ()=>{console.log('dddd')};


//其他组件使用a组件
import * as MYCONFIG from './a';

MYCONFIG //得到a组建所有接口 => {"YXF_AAAA":"AAAA","YXF_YOUNAME":"YOUNAME",....}
```


## 解构赋值
```javascript
import { mapGetters } from 'vuex'
export default {
	computed:{
		//把mapGetters结果全部复制过来 
		...mapGetters({
			thread: 'currentThread',
			messages: 'currentMessages'
		}),
		sayYouName(){
			console.log(this);
		}
	}
};

//结果
{
	computed: {
		thread:function(){},
		messages: function(){},
		sayYouName:(){}
	}
}
```
更多资料查看【[对象的扩展运算符](http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符)】