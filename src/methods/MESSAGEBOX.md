## messageBox
对话框，支持确认按钮回调，支持按钮配置，支持宽高定制，挂在vue原型上，组件内使用this调用

### 唯一参数，对象类型，支持属性如下
* title 字符串，对话框的title，可不传

* content 字符串/DOM node，提示框内容，可不传

* onOk Function，确定按钮被点击时的回调，可不传

* onCancel Function，取消按钮被点击时的回调，可不传

* height 正整数，弹框高度，默认值：`130`

* width 正整数，弹框宽度，默认值：`416`

* okText 字符串，ok按钮文字，可不传

* cancelText 字符串，取消按钮文字，可不传

* noWarnIcon 布尔对象，是否隐藏图标，可不传，为`true`时隐藏图标

* footerAlign 字符串，底部对齐方式，可不传，支持`'left','right','center'`默认值：`'center'`

* cancelBt 布尔对象，是否展示取消按钮，可不传，为`false`时隐藏，默认值：`true`

### 注意
* 如果想嵌套使用该方法，从第二层弹框开始都需放在定时器里执行，例如：
```
  this.messageBox({
    content: '第一层',
    onOk: () => {
      this.setTimeout(() => {
        this.messageBox({
          content: '第二层',
          onOk: () => {
            this.setTimeout(() => {
              this.messageBox({
                content: '第三层'
              })
            }, 1000)
          }
        })
      }, 1000)
    }
  })
  
  ps:this.setTimeout也是该库内方法，可以自动销毁，使用方法和window.setTimeout一样
```