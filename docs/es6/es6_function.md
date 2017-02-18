# 函数扩张
[箭头函数介绍](http://www.jianshu.com/p/4b101a763e85)

## 简单示例
```javascript
function abs (num,callback){
  for(var i = 0; i< num; i++){
      callback(i);
  }
}

//旧写法
abs(8,function(i){
  console.log(i);
});

//es6写法
abs(8,(i)=>{
  console.log(i);
})
```

## 解构赋值
```javascript
var yxf = {
    sayName:function(){console.log('sayName')},
    sayAge: function(){console.log('sayAge')}
};

function test({sayName,sayAge}){
   sayName();  // =>  sayName
   sayAge();   // =>  sayAge
}

test(yxf);
```
`直接获取对象的方法`
