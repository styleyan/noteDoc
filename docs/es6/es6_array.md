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



## join()

## from()

## of()

## isArray()

## copyWithin()

## entries()
`返回一个新的Array iterator对象，该对象包含数组中每个索引的键/值对。`
```javascript
var arr = ['a','b','c','d'];
var iterator = arr.entries();

console.log(iterator.next().value); // [0,'a']

//使用for...of循环
for(let e of iterator){
	console.log(e)
}
// [0,'a']
// [1,'b']
// [2,'c']
// [3,'d']
```


## every()

## fill()

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


## findIndex()
`findIndex()方法返回数组中满足提供测试函数的第一个元素的索引。否则返回-1;`


## forEach()
`对数组的每一个元素执行一次提供的函数;`

## includes()
`判断当前数组是否包含某指定的值，如果是，则返回true,否则放回false。

## indexOf()

## keys()

## lastIndexOf()

## map()

## reduce()

## reduceRight()

## some()

## toString()

## [@@iterator]()