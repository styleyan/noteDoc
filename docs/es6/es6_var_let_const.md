# var/let/const区别


## let/const代码块内有效
```javascript
if(true){
	let a = 'aaa';
	const b = 'bbb';
}

a   // is not defined
b   // is not defined
```
`let,const命令所在的代码块内有效，let很适合用于for循环`



## let/const 不存在变量提升
```javascript
// var 的情况
console.log(aaa)   //输出undefined
var aaa = 2;

//let 的情况
console.log(bbb)   //报错
let bbb = 56;

//const 的情况
console.log(ccc)   //报错
const ccc = {};
```

## let/const暂时性死区
```javascript
var tmp = 3232;

//let/const 声明
if(true){
	tmp = 'abc'; //报错
	let tmp;
}

//var 声明
if(true){
	tmp = 'abc';  // abc
	var tmp;
}
```
`如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。`

```javascript
typeof x; //报错
let x;
```
`“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。`


## let/const不允许重复声明
```javascript
function foo(){
	var a = 4;
	var a = 'foo';
};
foo() //正常显示


function bar(){
	let a = 4;
	let a = "bar"
};
bar() //报错



//不管理是var/let/const 声明过的都不可以重复声明
var aa = 'aaaa';
const aa = {};  //报错
```


## let/const 不属于顶层对象的属性
```javascript
var a = 'aaa';
window.a 	//aaa


const b = 'bbb';
window.b    // undefined


const c = 'ccc';
window.c    // undefined
```
`let命令、const命令声明的全局变量，不属于顶层对象的属性。`


