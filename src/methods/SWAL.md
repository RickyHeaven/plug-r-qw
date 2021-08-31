## swal
提示框，支持不同类型提示，支持确认按钮回调，支持按钮配置，挂在vue原型上，组件内使用this调用；为了区分sweetalert的swal全局对象，它在vue原型下为$swal，如果单独引用，也推荐使用$swal来命名它

### 参数
* option 字符串/对象/布尔对象，字符串时为提示框的title，没有的话传`''`，对象时为提示框详细配置，参考[option详解](#option)，布尔对象时仅支持`false`，可主动关闭已经打开的弹框

* text 字符串/DOM node，提示框内容，没有的话传`''`

* icon 字符串，可选值：`'success','error','warning','info'`，可不传


```
推荐使用方式示例：
this.$swal('操作成功','','success')

复杂场景使用示例：
this.$swal({
    title:'操作成功',
    icon:'success',
    onOk(){
        //在这里执行确定按钮被点击后的逻辑
    }
})

ps:这种场景使用$swalConfirm更简洁：this.$swalConfirm(null, null, 'warning', () => { console.log('确定被点击') })
```

### <a name='option'>option支持属性详解（为对象时）</a>
* title 字符串，提示框标题，可不传

* text 字符串/DOM node，提示框内容，可不传

* icon 字符串，可选值：`'success','error','warning','info'`，可不传

* onOk Function，确定按钮点击回调

* content 同text属性，不要同时使用这两个属性

* type 字符串，同icon，建议使用icon

* className 字符串，弹框顶级node的自定义class（在模态框下），可借用该属性自定义弹框样式

* buttons 对象/数组，弹框底部按钮配置，参考[buttons详解](#buttons)

### <a name='buttons'>buttons详解</a>
* 为对象时，层级太多，我直接给个示例：
 ```
 buttons:{
    cancel:{
      text:'取消',
      className:'myCancelClass'
    },
    confirm:{
      text:'确定',
      className:'myConfirmClass'
    }
 }
 ```
 
* 为数组时，示例：
 ```
 buttons:['取消','确定']
 ```