# 数组
参考文章：
- [MDN Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)


## shift()
`从数组中删除第一个元素，并返回该元素的值。会更改数组的长度`
```javascript
let a = [1,2,3];
let b = a.shift();

console.log(a); // [2,3]
console.log(b); // 1
```

## unshift()
`该方法将一个或多个元素添加到数组的开头，并返回数组的新长度`
```javascript
var arr = [4,5,6,7];
arr.unshift(1,2,3) // 7

console.log(arr); // [1,2,3,4,5,6,7]
```

## pop()
`该方法从数组中删除最后一个元素，并返回该元素的值。会更改数组的长度`
```javascript
var a = ['a','b','c'];
a.pop();  // c
console.log(a) // ['a','b'];
console.log(a.length) //2;
```

## push()
`该方法将一个或多个元素添加到数组的尾部，并返回数组的新长度`
```javascript
var arr = [4,5];
arr.push(6,7); //4

console.log(arr) // [4,5,6,7]
```

## concat()
`用于合并两个或多个数组，该方法不会更改现有数组，而是返回一个新数组`
```javascript
var arr1 = [4,5];
var arr2 = [6,7];
var arr3 = arr1.concat(arr2); // [4,5,6,7]

console.log(arr1);   //  [4,5]
console.log(arr2);   //  [6,7]
```

## splice(start,deletCount,item1,item2,item3....)
`该方法通过删除现有元素/添加新元素来更改原数组的内容, 并以新数组形式返回删除的数。`
```javascrit
var myTest = ['a','b','c','d'];
//添加到数组
myTest.splice(2,0,'bbbb') // ["a", "b", "bbbb", "c", "d"]
//从数组删除一个数
myTest.splice(2,1) // ['a','b','c','d']
//替换
myTest.splice(2,1,'cccc') // ['a','b','cccc','d']
```

## slice(begin,end)
`该方法返回从开始到结束(不包括结束)的浅拷贝新数组对象，原数组不会被修改`
```javascript
var arr = [1,2,3,4];
//拷贝全部
arr.slice()

//从指定下标开始拷贝
arr.slice(1)

//选取下标(1-2)的数
var sliced = arr.slice(1,3)
console.log(arr);     // [1,2,3,4]
console.log(sliced);  // [2,3]
```

## reverse()
`该方法颠倒数组中元素的位置，第一个变成最后一个，最后一个变成第一个，并返回数组的引用`
```javascript
var myArray = ['one','two','three'];
myArray.reverse()
console.log(myArray) // ['three','two','one']
```

## sort()


## from()
`该方法从一个类似数组或可迭代对象创建一个新的数组实例`
```javascript
const bar = ['a','b','c'];
Array.from(bar)  //['a','b','c']

Array.from('foo') // ['f','o','o']

//在es3中通过slice方法来转换
var str = 'foo';
Array.prototype.slice.call(str);  // ['f','o','o']
```

## of()
`该方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型`,Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7)创建一个具有单个元素7的数组，而Array(7)创建一个包含7个undefined元素的数组。
```javascript
Array.of(7)      // [7]
Array.of(1,2,3); // [1,2,3]

//使用 Array 创建
Array(7)         // [,,,,,,,,]
Array(1,2,3)     // [1,2,3]
```

## isArray()
`该方法用于确定传递的值是否为Array`
```javascript
Array.isArray([1,2,3,4])     // true
Array.isArray({foo: 123})    // false
Array.isArray('foobar')      // false
Array.isArray(undefined)	 // false

//在es3中是通过toString()方法来判断
toString.call([1,2,3])       // '[object Array]'
```


## copyWithin() 

## entries() / keys() /values()
`entries()，keys()和values() —— 用于遍历数组。它们都返回一个迭代对象。`可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
```javascript
var arr = ['a','b','c','d'];
/* ====================== entries方法 ================== */
var iterator = arr.entries();
for(let e of iterator){
	console.log(e)
}
// [0,'a']
// [1,'b']
// [2,'c']
// [3,'d']
//手动调用next()
iterator.next()  // {done: false,value:[0,'a']}

/* ====================== keys方法 ================== */
var arrKeys = arr.keys();
for (let index of arrKeys) {
	console.log( index )
}
// 0
// 1
// 2
// 3
//手动调用next()
arrKeys.next()  //  {value: 0, done: false}

/* ================= values方法(谷歌浏览器未实现) ============== */
var arrValues = arr.values();
for( let val of arrValues ){
	console.log(val)
}
// a
// b
// c
// d
//手动调用next()
arrKeys.next()  //  {value: 'a', done: false}
```

## every()
`测试数组所有的元素是否都通过了指定函数的测试，并返回true/false`
```javascript
var arr = [3,4,5,6,7,8];

var result = arr.every(function(val,index,arr){
	return val > 8;
});
console.log(result)  // false

var result2 = arr.every(function(val,index,arr){
	return val > 2;
});
console.log( result2 )  // true
```

## fill(value,start,end)
`该方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引，返回修改后的数组，会改变原数组值`<br>
如果start，end 是个负数, 则结束索引会被自动计算成为 length+end。
```javascript
var arr = [1,2,3,4];
arr.file('a');
// ['a','a','a','a']
```

## filter()
`使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组`。
```javascript
var arrs = [5,6,7,8,9,0,22,33,4,5];
var filtered = arrs.filter(function(val){
	return value >= 9;
});

//得到新数组：[9,22,33]   
```

## find()
`该方法返回数组中满足提供测试函数的第一个元素的值，否则返回undefined。`
```javascript
var arr = [2,3,5,6,7,8];

// 得到 7;
arr.find(function(val){
	return val > 6;
});
```

## findIndex()
`findIndex()方法返回数组中满足提供测试函数的第一个元素的索引。否则返回-1;`
```javascript
var arr = [12,3,4,5,66];
//得到 4;
arr.findIndex(function(val){
	return val > 20;
})
```


## forEach(callback(val,index,array))
`对数组的每一个元素执行一次提供的函数;`
```javascript
let a = ['a','b','c'];
a.forEach(function(val){
	console.log(val);
});
// a
// b
// c
```
与for循环区别:<br>
1)、forEach 无法通过 return、break、continue中断循环;<br>
2)、forEach 对于空数组会跳过,如: [2, 5, ,9],排除 [''],[undefined]<br>
3)、在遍历中已删除项不会被遍历到，for会显示出undefined<br>


## includes()
`判断当前数组是否包含某指定的值，如果是，则返回true,否则放回false。`

## indexOf()


## lastIndexOf()

## map()
`遍历数组中的每一个数，并返回一个新数组`
```javascript
var arrNum = [2,3,4,5];
var roots = arrNum.map(function(currentValue,index,array){
	return currentValue*2;
});
console.log(arrNum) // [2,3,4,5]
console.log(roots)  // [4,6,8,10]
```

## reduce()

## reduceRight()

## some()
`测试数组中的某些元素是否通过了指定函数的测试,返回为true停止循环`
```javascript
var arrs = [3,4,5,6,7,8];
//一直循环到结束，结果返回false
var result = arrs.some(function(val){
	console.log('result');
	return val > 10;
});

//只循环2次
var result = arrs.some(function(val){
	console.log('result');
	return val > 3;
});
```

## toString()/join()


## [@@iterator]()