# 实例事件

## vm.$on( event, callback )  监听事件
参数：`{string} event，{function} callback`<br>
描述：`监听当前实例上的自定义事件，事件可以由vm.$emit触发，回调函数会接收所有传入事件触发函数的额外参数。

```javascript

```


## vm.$once( event, callback )
描述：`监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。`



## vm.$off( [event, callback] )
描述：移除事件监听器

- 如果没有提供参数，则移除所有的事件监听器；
- 如果只提供了事件，则移除该事件所有的监听器；


## vm.$emit( event, […args] )  监听事件
描述：触发当前实例上的事件，附加参数都会传给监听器回调。
