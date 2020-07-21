## editor
富文本编辑器，v-model绑定内容，全局UI组件，直接用

### 属性
* value: 字符串，编辑器内容，推荐使用v-model绑定

* valueType: 字符串，内容类型，`html`和`text`二选一，默认：`html`

* changeInterval: 数字，on-change事件触发时间，默认：`200`

* disabled: 布尔对象，禁用编辑功能，默认：`false`
### 事件
* on-change: 编辑器内容发生变化，返回编辑器内容
### 方法
* setHtml: 将指定内容设为编辑器内容，直接给v-model赋值效果也一样
### 注意
* 直接选中内容删除是不会清空编辑器内容的，还会有空标签，如果要清空，可以给v-model赋值`''`