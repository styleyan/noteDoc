# 响应ajax请求

一个简单的post/get ajax请求示例，进入routes目录，新建 prox.js 编写如下：
```javascript
router.post('/myApp', function(req, res, next) {
		//req.body：获取ajax请求参数
	var _data = req.body,
		result = null;

	if (!_data.aaaa) {
		result = {
			"status": 0,
			"errorCode": '4445',
			"errorMsg": '未提交请求参数',
			"result": {}
		};
	} else {
		result = {"fff": "ddd"}
	};

	//获取cookie
	console.log(req.cookies);

	//设置响应头
	res.set( {
	    'Cache-Control' : 'public, max-age=60' ,
	    'X-Frame-Options' : 'DENY'
	} );

	//返回结果给ajax
	res.send(result);

	//关闭请求
	res.end();
});
```

页面ajax请求如下：
```javascript
$.post('/prox/myApp',param,function(data){
	console.log(data);
});
```
`请求路径前要加prox是因为myApp是在prox路由里面响应的ajax。`
