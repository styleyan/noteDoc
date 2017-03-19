# 箭头函数
<br>

#### 箭头函数与传统的javascript函数区别
- 函数体内的this对象，就是定义时所在的对象，而不是函数执行的上下文。
- 箭头函数不可用new 关键字来实例化对象，不然会报错；
- 不可以使用 yield 命令，因此箭头函数不能用作Generator函数；
- 不可以使用arguments对象，该对象在函数体内不存在，如果要用可以用Rest参数代替；
- 箭头函数调用得到返回值，传统函数需要显示用return；


## 不引入参数
```javascript
var sun = () => 1 + 2;

//等同于：
var sum = function(){
	return 1 + 2;
}
```


## 引入单个参数
```javascript
var foo = param1 => param1;
//等同于：
var foo = function(param1){
	return param1;
}

x => x * x;
//等同于
function (x){
	return x * x;
}
```

## 引入多个参数
```javascript
var sum = (num1,num2) => num1 + num2;
//等同于
var sum = function (num1,num2){
	return num1 + num2;
}
```
`多个参数时候，则应加上小括号`


## 函数体多条语句执行
```javascript
var sum = (num1,num2) => { return num1 + num2 }
//等同于：
var sum = function(num1,num2){
	return num1 + num2;
}
```
`若你想使用标准的函数体，或者函数体内可能有更多的语句要执行，则要用大括号将函数体括起来，并明确定义返回值。`


## 箭头函数返回对象情况
```javascript
var getTempItem = id => ({
	id: id,
	name: 'Temp'
});
//同等于：
var getTemItem = function(id){
	return {
		id: id,
		name: 'Temp'
	};
};
```
`用小括号包含大括号则是对象的定义，而非函数主体`

