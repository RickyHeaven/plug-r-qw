## headerBt

header 右侧按钮，和 header 同高，左侧带白色分割线，按钮内容直接写在标签内，全局 UI 组件，直接用

### 属性

- icon: 字符串，左侧图标，如果需要在文字前加 view-design 图标，将对应的 type 传给该属性，如： `<headerBt icon='md-add'>新增</headerBt>`

- withIcon: 布尔对象，是否左侧带图标，一般不用配置，会自动根据 icon 的值是否有效判断，自己通过插槽将图标加在内容前时，给该属性传：`true`

- iconSize: 字符串/数字，图标大小（通过 icon 属性加的图标），默认：`18`

- color: 字符串，按钮文字颜色，默认：`inherit`

- borderColor: 字符串，按钮左侧分割线颜色，默认：`#fff`

- disabled: 布尔对象，禁用，默认：`false`

### 事件

- click: 按钮被点击，返回 dom 事件对象

### 注意

- 不带图标，不需要配 icon 属性，icon 属性所配图标只能在左侧，只能是 view-design 图标，如需其他方式或其他图标，直接作为内容写在标签内就行

- 内容字体大小是继承的，和父元素保持统一，如需改变，直接写样式

- 示例见 wellCard 的示例，它两可配合
