# 一个简单的post/get ajax请求示例；
```javascript
router.post('/aaa', function(req, res, next) {
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
	}
	res.send(result);
	res.end();
});
```
req.body：获取ajax请求参数