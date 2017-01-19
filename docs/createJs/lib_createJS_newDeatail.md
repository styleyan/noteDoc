# createJs简介
实例方法返回说明


## 公共属性
```javascript
var image = new createjs.Bitmap("puke.png");
image.regX  //以右下角为中心点左右偏移，负数向右，正数向左
image.regY  //以右下角为中心点上下偏移，负数向下，正数向上
image.alpha //透明度 0.1~9之间

stage.skewX //以右下角为中心点
```

#### 实例
```javascript
 var stage = new createjs.Stage("myCanvas");
 var image = new createjs.Bitmap("puke.png");
 image.x = 500;
 image.y = 400;
 image.regX = 240;
 image.regY = 130;
 stage.addChild(image);
 createjs.Ticker.addEventListener("tick", function(event){
     image.skewX += 6;
     image.skewY += 6;
     stage.update();
 });
```


## new createjs.Bitmap("puke.png");
描述：一个位图表示图像，帆布或视频显示列表中。位图可以使用现有的HTML元素，或字符串被实例化。

```javascript
 var image = new createjs.Bitmap("puke.png");


```