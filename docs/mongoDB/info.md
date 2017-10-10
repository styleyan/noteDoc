## 为什么选择MongoDB
- 无数据结构限制
  - 没有表结构的概念, 每条记录可以有完全不同的结构
  - 业务开发方便快捷
  - sql数据库需要事先定义表结构在使用
- 完全的索引支持
  - redis的key-value
  - hbase的单索引，二级索引需要自己实现
- 方便的冗余与扩展
  - 复制集保证数据安全
  - 分片扩展数据规模
- 良好的支持
  - 完善的文档
  - 齐全的驱动支持

## 相关工具
- MongoDB版本
- ssh工具: xshell
- 文本编辑器: vscode 

## MongoDB文件说明
- mongod(mongo数据库的执行程序,如数据库部署)
- mongo(用于连接mongoDB数据服务器的客户端)
- mongoimport/mongoexport(mongo数据的导入与导出)
- mongodump/mongorestore(mongo数据的导入、导出: 二级制不能被直接读取,用于做数据的备份与恢复)
- mongooplog(mongo数据库操作日志的回放)
- mongostat(查看mongo服务器的各种状态)

## MongoDB的概念
- MongoDB
- mongo
- 索引
- 集合
- 复制集
- 分片
- 数据均衡

## MongoDB的搭建
- 搭建简单的单机服务
- 搭建具有冗余容错功能的复制集
- 搭建大规模数据集群
- 完成集群的自动部署

## 熟悉MongoDB的使用
- 最基本的文档读、写、更新、删除
- 各种不同类型的索引创建与使用
- 复杂的聚合查询
- 对数据集合进行分片，在不同分片间维持数据均衡
- 数据备份与恢复
- 数据迁移

## 简单运维
- 部署MongoDB集群
- 处理多种常见的故障
  - 单节点失效，如何恢复工作
  - 数据库意外被杀死如何进行数据恢复
  - 数据库发生拒绝服务时如何排查原因
  - 数据库磁盘快满时如何处理

## MongoDB学习网站
- [MongoDB官网](http://www.mongodb.org)
- [MongoDB国内官方网站](http://www.mongodb.com)
- [中文MongoDB文档地址](docs.mongodb.com)
- [mongoDB的github](https://github.com/mongodb)
- [mongoDB的jira(bug提交以及回复)](https://jira.mongodb.org/)

