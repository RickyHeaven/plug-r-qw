## fullScreenPop

“全屏”弹出页（绝对定位，和最近一个 relative 元素大小一致），自带 header，提供方法开关页面，全局 UI 组件，直接用

### 属性

- title: 字符串，header 文字内容，默认：`标题`

- headerColor: 字符串，header 文字颜色，默认继承父元素

- headerBg: 字符串，header 背景颜色，默认：`@titleBg`

- headerFontSize: 数字/字符串，header 字体大小，默认：`12`

### 事件

- on-open: 页面打开

- on-close: 页面关闭，内部通过 v-show 实现

### 方法

- open: 打开页面

- close: 关闭页面

### 注意

- 页面开关通过 v-show 控制，也就是说关闭状态下也会渲染，如果不想渲染，可通过 on-close\on-open 事件控制页面内容的渲染。
