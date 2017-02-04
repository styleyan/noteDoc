# createJs简介
实例方法返回说明


## 公共属性
```javascript
var image = new createjs.Bitmap("puke.png");
image.x //设置原件X轴位置(相对舞台)
image.y //设置原件y轴位置(相对舞台)

image.regX  //以右下角为中心点左右偏移，负数向右，正数向左(原件所处X,Y轴)
image.regY  //以右下角为中心点上下偏移，负数向下，正数向上(原件所处X,Y轴)
image.alpha //透明度 0.1~9之间

image.skewX //以右下角为中心点左右倾斜，负数向右，正数向左
image.skewX //以右下角为中心点上下倾斜，负数向上，正数向下
image.id    //原件动画id

image.scaleX //按默认宽度倍数延X轴拉伸，如 image.scaleX = 1.2,在原来的宽度加上0.2;
image.scaleY //按默认宽度倍数延Y轴拉伸，如 image.scaleY = 1.2,在原来的宽度加上0.2;

image.visible //是否可见,true||false

image.set({})  //原件设置属性

```

#### 旋转动画实例
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


## new createjs.Shape();
描述：绘制形态
```javascript
var React = new createjs.Shape();
// 设置背景颜色
Rect.graphics.beginFill('#ff0000');
// 设置 left：5、top：5、宽：50、高：50大小的矩形。
Rect.graphics.drawRect(5,5,50,50);
```