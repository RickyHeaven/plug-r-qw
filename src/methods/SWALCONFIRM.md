## swalConfirm
对话框，支持不同类型提示，支持确认按钮回调，支持按钮配置，挂在vue原型上，组件内使用this调用，相对于swal达到同样效果时用法更简洁；为了和$swal风格一致，它在vue原型下叫$swalConfirm，单独引用时，也推荐使用$swalConfirm来命名它

### 参数
* title 字符串，对话框的title，没有的话传`''`，和swal不同，传null可以触发默认值，swal的该参数没有默认值

* text 字符串/DOM node，提示框内容，没有时传`''`，和swal不同，传null可以触发默认值，swal的该参数没有默认值

* icon 字符串，可选值：`'success','error','warning','info'`，可不传，和swal不同，传null可以触发默认值，swal的该参数没有默认值

* onOk Function，确定按钮被点击时的回调