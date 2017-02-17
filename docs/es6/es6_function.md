# 函数扩张

## 推荐文章
[箭头函数介绍](http://www.jianshu.com/p/4b101a763e85)

### 简单示例
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