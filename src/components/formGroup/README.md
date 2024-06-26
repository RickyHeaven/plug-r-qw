## formGroup 表单群组件

表单群组件，表单相关用法参考[formR](../formR/README.md)，组件自带确定和取消按钮，常用于新增、修改页面，全局 UI 组件，直接用

### 属性

- formData 数组，组件内表单数据结构，参考[formR](../formR/README.md#属性)

- formRules 对象，组件内表单验证规则，参考 formR

- width 数字/字符串，组件宽度，默认：`'100%'`

- labelWidth 数字，组件内表单项标签宽度，默认：`160`

- contentWidth 字符串，组件内表单项内容宽度(一般不占满，给验证信息留空间)，默认：`'70%'`

- itemWidth 数字，组件内表单项内容宽度(用于行内表单)，默认：`200`

- teamClass 字符串，分组表单-组容器的 class，用于布局和样式控制，默认：`formTeamBox`

- showOkBt 布尔对象，是否展确定按钮，默认：`true`

- okBtTxt 字符串，组件底部确认按钮内容，默认：`'确定'`

- showCancelBt 布尔对象，是否展取消按钮，默认：`true`

- cancelBtTxt 字符串，组件底部取消按钮内容，默认：`'取消'`

- showLongOkBt 布尔对象，是否展长确定按钮，该按钮和短确定按钮不可同时出现，默认：`false`

- longOkBtTxt 字符串，组件底部长确定按钮内容，默认：`'确定'`

- disabled 布尔对象，禁用组件内表单，默认：`false`

- inline 布尔对象，行内表单，表单项横向排列（不单独成行），样式类似 searchForm，默认：`false`

- btnLoading 布尔对象，提交按钮显示 loading，默认：`false`

### 事件

- on-submit 表单提交（组件底部确定按钮被点击也会触发）事件，会返回表单收集的值

- on-cancel 组件底部取消按钮被点击

- on-item-change 组件内表单项值改变事件

- on-reset 表单被重置，一般用不上，因为该事件是由 resetForm 方法被调用（如清空按钮被点击或外部主动调用）触发，该方法为异步方法，如果想在重新渲染后进行自定义操作，在调用方法的 then 中处理即可

- on-re-render 表单被重新渲染，一般用不上，因为该事件是由 reRenderForm 方法被调用触发，该方法为异步方法，如果想在重新渲染后进行自定义操作，在调用方法的 then 中处理即可

### 方法

- submit 主动提交组件内整个表单采集的值

- getValGroup 获取用户已填数据，和 submit 有显著区别，submit 会校验表单，并提交 on-submit 事件。

- close 主动触发取消按钮点击事件，一般用不上

- resetForm 重置表单，该方法会清空表单值并刷新 dom，异步方法，表单项默认值不会被清除，详见[formR](../formR/README.md#方法)，注意并不是重新渲染表单，重新渲染方法为 reRenderForm

- refreshFormDom 刷新 dom，异步方法，详见[formR](../formR/README.md#方法)

- reRenderForm 重新渲染表单，异步方法，详见[formR](../formR/README.md#方法)

- setItemToValGroup 设置组件内表单项的值，可以添加新字段，valGroup 为 formR 组件私有属性，不可直接操作，故有该方法，详见[formR](../formR/README.md#方法)

- updateValGroup 更新组件内表单项的值，只能更新已有字段，valGroup 为 formR 组件私有属性，不可直接操作，故有该方法，详见[formR](../formR/README.md#方法)

- updateFormDataT 更新组件内表单结构，例如设置或取消禁用，formDataT 为 formR 组件私有属性，不可直接操作，故有该方法，详见[formR](../formR/README.md#方法)

- reValidate 手动验证表单项

- validate 主动验证组件内整个表单，一般用不上

### 注意

- 该组件是基于 formR 组件封装的带有指定样式的确定按钮和取消按钮的表单群组件，所以涉及表单的用法参考 formR 的文档，formR 支持的属性和事件，该组件同样支持

- formData 属性不是响应式，如果改变后，需要调用 reRenderFrom 方法重新渲染表单

- formRules 属性不是响应式，如果改变后，需要调用 refreshFormDom 刷新 dom 以显示正确的校验信息

- 不可调用组件私有方法，除非非常清楚调用不会产生未知错误
