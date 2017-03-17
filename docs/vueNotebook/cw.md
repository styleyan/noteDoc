# watch与computed一些情况

## watch与computed执行顺序
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

## watch与computed同时存在
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

## computed出现死循调用情况
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


