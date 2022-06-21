## customModal
居于view-design的modal封装的弹框

### 属性
* title: 字符串，弹框的标题，默认：`'标题'`

* width: 字符串/正整数，组件宽度，默认值：`520`

* hideCancelBt: 布尔对象，隐藏底部取消按钮，只剩确定按钮，点击确定可关闭弹框（类似查看弹框之类业务场景时使用），默认：`false`

# 方法
* open 打开弹框

* close 关闭弹框，一般用于在点击确定按钮进行网络请求返回结果后关闭弹框

* changeLoading 改变底部确定按钮的loading状态

### 事件
* on-close: 弹框关闭时触发

* on-submit: 弹框确定按钮点击时触发（隐藏取消按钮时点击确定按钮不触发该事件）

### 注意
* 该弹框支持view-design的modal的所有属性和事件，但使用时请先测试是否会导致异常，确认没问题时使用。

* 弹框底部支持插槽，名为`footer`，如果你想用自己的定制化底部，可使用插槽插入你的底部。