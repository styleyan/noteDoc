# 实例生命周期
以下几点在服务器端渲染期间不会被调用。


## beforeCreate
类型：`Function`<br>
描述：`在实例化之后，数据观测(data observer)和event/watcher事件配置之前被调用`。



## created
类型：`Function`<br>
描述：`实例已经创建完成之后被调用`，在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event事件回调，然而，挂载阶段还没开始，$el 属性没钱不可见。



## beforeMount
类型：`Function`<br>
描述：`在挂载开始之前被调用：相关的render函数首次被掉用`。



## mounted
类型：`Function`<br>
描述：`el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子`，如果root实例挂载了一个文档元素，当mounted被调用时 vm.$el也在文档内。


## beforeUpdate
类型：`Function`<br>
描述：`数据更新时调用，发生再虚拟DOM重新渲染和打补丁之前`，你可以再这个钩子中进一步地更改状态，这不会触发放假的重渲染过程。


## updated
类型：`Function`<br>
描述：`由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子`。

当这个钩子被调用时，组件DOM已经更新，可以执行依赖于DOM的操作。


## activated
类型：`Function`<br>
描述：`keep-alive组件激活时调用`。


## deactivated
类型：`Function`<br>
描述：`keep-alive组件停用时调用`。<br>


## beforeDestroy
类型：`Function`<br>
描述：`实例销毁之前调用`,在这一步，实例仍然完全可用。


## destroyed
类型：`Function`<br>
描述：Vue实例销毁后调用，调用后Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。


[![生命周期流程图](docs/images/lifecycle.png)](docs/images/lifecycle.png)


## 推荐博客
> * [Vue.js 生命周期和route的生命周期讲解](http://www.jianshu.com/p/e9f884b6ba6c)