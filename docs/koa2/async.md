# koa2延迟请求响应

通过async....await来实现5秒后响应请求，基于Promise对象。
```javascript
module.exports = function (router) {
  router.get('/api/mock/mytest/one', async (ctx) => {
    const timeout = function (ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms)
      })
    }
    await timeout(5000)

    ctx.body = {
      code: '0',
      desc: '这是个测试的',
      arr: [
        { 'name': 'yxf', age: 21 }
      ]
    }

  })
}
```