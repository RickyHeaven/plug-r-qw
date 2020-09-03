## formModal 表单弹框组件
表单和弹框的组合UI组件，表单相关用法参考[formR](../formR/README.md)，弹框支持调用方法开关，通过属性配置等。

### 属性
* title 字符串，弹框标题，位于弹框左上角，默认：`'标题'`

* formData 数组，弹框内表单数据结构，参考[formR](../formR/README.md#属性)

* formRules 对象，弹框内表单验证规则，参考formR

* width 数字/字符串，弹框宽度，默认：`520`

* contentWidth 字符串，弹框内表单内容宽度，默认：`'70%'`

* okBtTxt 字符串，弹框底栏确认按钮内容，默认：`'确定'`

* cancelBtTxt 字符串，弹框底栏取消按钮内容，默认：`'取消'`

* disabled 布尔对象，禁用弹框内表单，默认：`false`

* hideFooter 布尔对象，隐藏底栏，默认：`false`

* btnLoading 布尔对象，提交按钮显示loading，默认：`false`

### 事件
* on-submit 表单提交（弹框底栏确定按钮被点击也会触发）事件，会返回表单收集的值

* on-close 弹框关闭（如弹框底栏取消按钮被点击会触发）事件

* on-open 弹框开启事件

* on-item-change 弹框内表单项值改变事件

### 方法
* open 打开弹框

* close 主动关闭弹框，一般用于提交事件后续逻辑处理完成后手动关闭弹框

* submit 主动提交弹框内整个表单采集的值

* getFormHeight 主动获取弹框内表单高度，并根据结果自动调整弹框高度，一般用不上

* setHeight 主动设置弹框内表单高度（为了间接影响弹框高度），需要传高度，一般用不上

* resetForm 重置表单，该方法会清空表单值并刷新dom，异步方法，详见[formR](../formR/README.md#方法)，注意并不是重新渲染表单，重新渲染方法为 reRenderForm

* refreshFormDom 刷新dom，异步方法，详见[formR](../formR/README.md#方法)

* reRenderForm 重新渲染表单，异步方法，详见[formR](../formR/README.md#方法)

* setItemToValGroup 设置弹框内表单项的值，可以添加新字段，valGroup为formR组件私有属性，不可直接操作，故有该方法，详见[formR](../formR/README.md#方法)

* updateValGroup 更新弹框内表单项的值，只能更新已有字段，valGroup为formR组件私有属性，不可直接操作，故有该方法，详见[formR](../formR/README.md#方法)

* updateFormDataT 更新弹框内表单结构，例如设置或取消禁用，formDataT为formR组件私有属性，不可直接操作，故有该方法，详见[formR](../formR/README.md#方法)

* validate 主动验证弹框内整个表单，一般用不上

### 注意
* 该组件是基于formR组件封装的弹框和表单的组件组合，集弹框和表单各种功能于一身，所以涉及表单的用法参考formR的文档

