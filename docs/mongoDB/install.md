# MongDB安装流程

下载地址: [https://www.mongodb.com/download-center#community](https://www.mongodb.com/download-center#community) <br>
[安装文章](http://blog.csdn.net/mzbonnt/article/details/51461331)

### 安装出现的问题
安装完后再bin目录下执行目录,出现`bash: mongo: command not found`
> 需要把MongoDB的安装目录下的 bin文件路径添加到系统变量中,重启电脑

基本操作命令
```javascript
mongo test // 链接test数据库
db.shutdownServer() // 链接数据库成功后,执行的关闭服务命令
db.dropDatabase() // 删除创建的数据库
db.imooc_collection(表名).find() // 查看表中的数据,find为空时查询所有数据
use admin // 切换到admin数据库
show dbs // 查看当前系统中有多少数据库
show collections // 查看创建的表
show tables // 查看库下有多少表格
for (i=3;i<100;i++) db.imooc_collection.insert({x:i}) // js语法插入
db.imooc_collection.find().count() // count() 查看多少数据数量
db.imooc_collection.find().skip() // skip() 跳过
db.imooc_collection.find().limit(2) // limit() 限制条数
db.imooc_collection.find().sort({x:1}) // sort() 排序

// 数据更新
db.imooc_collection.update({aa:2},{aa:888}) // update()更新数据,第一个参数旧值，第二个新值
db.imooc_collection.update({aa:3},{$set:{x:8888888}}) // $set更新制定字段中的数据
db.imooc_collection.update({aa:11111},{aa:888}, true) // update第三个参数为true时，未查找到数据则把当前数据添加进去
db.imooc_collection.update({aa:1},{aa:8}, false, true) // update第四个参数为true时更新所有查找到的数据

// 数据的删除
db.imooc_collection.remove({aa:1}) // 删除查找到aa的所有数据,find方法是单条
db.imooc_collection.drop() // drop()方法，删除表中的所有数据

// 索引查询 3.6课
db.imooc_collection.getIndexes() // 查看所有集合索引情况
db.imooc_collection.ensureIndex({x: 1}) // 创建索引,x:1 正向排序,x:-1 逆向排序
```

## 索引的使用
- 索引的种类与使用
- 索引的匹配规则
- 如何建立合适的索引
- 索引建立的情况评估

