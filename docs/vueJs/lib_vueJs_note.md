# vue需要注意的性能问题

### watch与computed同时用时候，watch优先computed输出
```javascript
var app = new Vue({
	el: '#app',
	data: {
		aaa: 5
	},
	computed: {
		ccc: function(){
			console.log('computed');
			return this.aaa*2
		}
	},
	watch: {
		aaa: function(val,oldVal){
			console.log(val + ':新值');
			console.log(oldVal + ':旧值')
		}
	}
})
```

### computed属性不能与data属性一样，不然会失效
```javascript
var app = new Vue({
	el: '#app',
	data: {
		aaa: 5
	},
	computed: {
		aaa: function(){
			console.log('computed');
			return this.aaa*2
		}
	}
})
```

### computed计算的属性一定要存在，不然会出现无线循环，导致网页奔溃
```javascript
var app = new Vue({
	el: '#app',
	data: {
		bbb: 5
	},
	computed: {
		aaa: function(){
			console.log('computed');
			// aaa不存在
			return this.aaa*2
		}
	}
})
```


### computed计算的属性与data一样时，computed失效
```javascript
var app = new Vue({
	el: '#app',
	data: {
		aaa:34,
		bbb: 5
	},
	computed: {
		bbb: function(){
			console.log('computed');
			// aaa不存在
			return this.aaa*2
		}
	}
})
```


