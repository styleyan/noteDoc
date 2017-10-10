#  http协议笔记

### 推荐文章
- [阮一峰 HTTP协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
- [TCP/IP协议族的构成](https://segmentfault.com/a/1190000011265376)
- [HTTP/2 Server Push 详解](https://segmentfault.com/p/1210000009594280/read)
- [掌握 HTTP 缓存——从请求到响应过程的一切](https://segmentfault.com/a/1190000008538177)
- [一文读懂 HTTP/2 特性](https://tech.upyun.com/article/227/%E4%B8%80%E6%96%87%E8%AF%BB%E6%87%82%20HTTP%2F2%20%E7%89%B9%E6%80%A7.html)

## 设置缓存
```javascript
//public表示代理服务器和浏览器都可以缓存60秒
'Cache-Control': 'public, max-age=60';
//请求和响应都不保存在对方的磁盘系统中
'Cache-Control': 'no-store';
//浏览器每次请求，代理服务器必须向服务器验证缓存是否过期
'Cache-Control': 'must-revalidate';
//响应过期的日期和时间
'Expires': 200
//Etag是lastModifed的补充，生成Etag是需要后台写一个算法生成的，比如取文件的hashCode或MD5
'ETag': "577f845c-59c4",
//
Pragma:no-cache
//
Last-Modified
//
If-Modified-Since
```
缓存相关文章
- [知乎-Etag,last-Modified](https://www.zhihu.com/question/22883627)


## 开启压缩
```javascript
//开启gzip压缩
Content-Encoding: gzip
//告诉代理服务器缓存两种版本的资源：压缩和非压缩，
//这有助于避免一些公共代理不能正确地检测Content-Encoding标头的问题。
Vary: Accept-Encoding
```


## 允许跨域
```javascript
//指定允许其他域名访问
'Access-Control-Allow-Origin:*'
//响应类型
'Access-Control-Allow-Methods:POST,GET'
//响应头设置
'Access-Control-Allow-Headers:x-requested-with,content-type'
//如果需要读取cookie,在xhr发起请求的时候在xhr.open后面设置参数withCredentials为true：
'Access-Control-Allow-Credentials:true'
```
相关文章
- [ajax设置Access-Control-Allow-Origin实现跨域访问](http://www.cnblogs.com/shsgl/p/5979879.html)
- [TAT.yukin使用HTML5 跨域共享特性解决AJAX跨域](http://www.alloyteam.com/2012/11/html5-cors/)


## 持久连接、连接重用
http协议采用的是"请求-应答"模式，当使用普通模式，即非keepAlive模式时，每个请求/应答客户端和服务器都要新建一个链接，完成之后立即断开链接；当使用Keep-Alive模式时，Keep-Alive功能使用客户端到服务器端的理解持续有效，当出现对服务器的后续请求时，Keep-Alive功能避免了建立或者重新建立链接。
```
开启
Connection:keep-alive
//告诉客户端需要接收多少数据
Content-Length: 4999994
//服务器不能预先知道内容大小启动以下模式，当长度为0的chunk标识结束
Transfer-Encoding:chunked
```
- [HTTP Keep-Alive模式](http://blog.csdn.net/huangjin0507/article/details/52233935)

## 其他
```javascript
如果浏览器请求保持连接，则该头部表明希望 WEB 服务器保持连接多长时间（秒）
Keep-Alive：

请求来源
Referer:http://www.baidu.com
```
