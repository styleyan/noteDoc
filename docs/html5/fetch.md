# fetch

## 简述
fetch是浏览器提供的原生ajax接口，`使用window.fetch可以代替以前的$.get,$.post`。

## 特点
1)、基于promise<br>
2)、不需要第三库

## 缺点
1)、使用fetch无法取消一个ajax请求，因为Fetch API基于Promise,而Promise无法做到这一点。<br>
2)、兼容性不好，有的浏览器没有Fetch API,可以引入【[polyfill](https://github.com/github/fetch)】

## 使用方法
```javascript
fetch('/').then(function(response){
	response.text().then(function(text){
		console.log(text)
	})
});
```



