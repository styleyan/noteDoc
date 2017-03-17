# 正则  RegExp对象


## 支持正则表达式的String对象方法
```javascript
//检索与正则表达式相匹配的值。
search() 

//替换与正则表达式匹配的子串
replace()

//把字符串分隔为字符串数组
split()

//找到一个或多个正则表达式的匹配
match()
```

## RegExp 对象方法
```javascript
//编译正则表达式。
compile()


//检索字符串中指定的值。返回找到的值，并确定其位置。
exec()


//检索字符串中指定的值。返回 true 或 false。
test()
```

## RegExp 对象属性
```javascript
//RegExp对象是否具有标志 g。
[a-z]/g

```


## 量词
```javascript
// 匹配任何包含至少一个n的字符串
n+

//匹配任何包含零个或多个n的字符串
n*

//匹配任何包含零个或一个n的字符串
n?

//匹配包含X个n的序列的字符串
n{X}

//匹配包含X至Y个n的序列的字符串
n{X,Y}

//匹配至少包含X个n的序列字符串
n{X,}

//匹配任何结尾为n的字符串
n$

//匹配任何开头为n的字符串
^n

//匹配任何其后紧接指定字符串n的字符串
?=n

//匹配热和其后没有紧接指定字符串n的字符串
?!n
```

## 元字符
```javascript
//查找当字符，除了换行和行结束符
.

//查找单词字符
\w

//查找非单词字符
\W

//查找数字
\d

//查找非数字字符
\D

//查找空白字符
\s

//查找非空白字符
\S
```


## 方括号
```javascript
[abc]                查找方括号之间的任何字符
[^abc]               查找任何不在方括号之间的字符
[0-9]                查找任何从0-9的数字
[a-z]                查找任何小写a到小写z的字符
[A-Z]                查找任何大写A到大写Z的字符
[A-z]                查找任何从大写A到小写z的字符
(red|blue|green)     查找任何指定的选项
```


