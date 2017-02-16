# 函数扩张

### 匿名函数
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