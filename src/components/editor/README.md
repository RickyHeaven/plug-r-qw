## editor
富文本编辑器，v-model绑定内容，全局UI组件，直接用

### 属性
* value 字符串，编辑器内容，推荐使用v-model绑定

* valueType 字符串，内容类型，`html`和`text`二选一，默认：`html`

* focus 布尔对象，是否自动获取焦点，默认：`false`

* changeInterval 数字，on-change事件触发时间，默认：`200`

* colors 数组，编辑器文字颜色和背景色，由16进制string组成，默认：`['#000000','#eeece0','#1c487f','#4d80bf','#c24f4a','#8baa4a','#7b5ba1','#46acc8','#f9963b','#ffffff']`

* fontNames 数组，编辑器可选字体，默认：`['黑体','仿宋','楷体','标楷体','华文仿宋','华文楷体','宋体','微软雅黑','Arial','Tahoma','Verdana','Times New Roman','Courier New']`

* uploadImgMaxSize 数字，限制上传图片大小，默认：`102400`(100k)

* uploadImgMaxLength 数字，限制一次最多能传几张图片，默认：`10`

* uploadImgShowBase64 布尔对象，是否使用base64作为本地图片上传保存方式，默认：`true`

* disabled 布尔对象，禁用编辑功能，默认：`false`
### 事件
* on-change 编辑器内容发生变化，返回编辑器内容
### 方法
* setHtml 将指定内容设为编辑器内容，直接给v-model赋值效果也一样

