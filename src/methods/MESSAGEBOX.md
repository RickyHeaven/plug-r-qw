## messageBox
对话框，支持确认按钮回调，支持按钮配置，支持宽高定制，挂在vue原型上，组件内使用this调用

### 唯一参数，对象类型，支持属性如下
* title 字符串，对话框的title，可不传

* content 字符串/DOM node，提示框内容，可不传

* onOk Function，确定按钮被点击时的回调，可不传

* height 正整数，弹框高度，默认值：`130`

* width 正整数，弹框宽度，默认值：`416`

* onOkPromise 布尔对象，onOk是否返回promise对象，可不传，为`true`时，onOk需要返回promise,点击确定按钮后该按钮开启loading状态，取消按钮变为禁用状态，promise有结果后弹框自动关闭

* okText 字符串，ok按钮文字，可不传

* cancelText 字符串，取消按钮文字，可不传

* noWarnIcon 布尔对象，是否隐藏图标，可不传，为`true`时隐藏图标

* footerAlign 字符串，底部对齐方式，可不传，支持`'left','right','center'`默认值：`'center'`

* cancelBt 布尔对象，是否展示取消按钮，可不传，为`false`时隐藏，默认值：`true`