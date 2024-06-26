## searchForm 搜索专用表单组件

页面条件查询表单（行内）组件，一般配合 btTablePage 组件使用，自带查询按钮和清空按钮，用户只需要监听 on-search 事件取得表单采集的数据进行处理即可，全局 UI 组件，直接用

### 属性

- formData 数组，组件内表单数据结构，参考[formR](../formR/README.md#属性)(1.1.0 以前版本叫 data，以后更名为 formData)

- formRules 对象，组件内表单验证规则，参考 formR

- teamClass 字符串，分组表单-组容器的 class，用于布局和样式控制，默认：`formTeamBox`

- showInlineClearBt 布尔对象，显示清空按钮，默认：`true`

- btnLoading 布尔对象，查询按钮显示 loading，默认：`false`

### 事件

- on-search 表单提交事件（查询按钮被点击），会返回表单收集的值

- on-item-change 组件内表单项值改变事件

- on-reset 表单被重置，一般用不上，因为该事件是由 resetForm 方法被调用（如清空按钮被点击或外部主动调用）触发，该方法为异步方法，如果想在重新渲染后进行自定义操作，在调用方法的 then 中处理即可

- on-re-render 表单被重新渲染，一般用不上，因为该事件是由 reRenderForm 方法被调用触发，该方法为异步方法，如果想在重新渲染后进行自定义操作，在调用方法的 then 中处理即可

### 方法

- submit 主动提交组件内整个表单采集的值

- getValGroup 获取用户已填数据，和 submit 有显著区别，submit 会校验表单，并提交 on-submit 事件。

- resetForm 重置表单，该方法会清空表单值并刷新 dom，异步方法，表单项默认值不会被清除，详见[formR](../formR/README.md#方法)，注意并不是重新渲染表单，重新渲染方法为 reRenderForm

- refreshFormDom 刷新 dom，异步方法，详见[formR](../formR/README.md#方法)

- reRenderForm 重新渲染表单，异步方法，详见[formR](../formR/README.md#方法)

- reValidate 手动验证表单项

- validate 主动验证组件内整个表单，一般用不上

### 注意

- 该组件是基于 formR 组件封装的用于条件查询的行内表单组件，所以涉及表单的用法参考 formR 的文档，formR 支持的属性和事件，该组件同样支持

- formData 属性不是响应式，如果改变后，需要调用 reRenderFrom 方法重新渲染表单

- formRules 属性不是响应式，如果改变后，需要调用 refreshFormDom 刷新 dom 以显示正确的校验信息

- 不可调用组件私有方法，除非非常清楚调用不会产生未知错误
