## fullScreenPop
“全屏”弹出页（绝对定位，和最近一个relative元素大小一致），自带header，提供方法开关页面，全局UI组件，直接用

### 属性
* title: 字符串，header文字内容，默认：`标题`

* headerColor: 字符串，header文字颜色，默认继承父元素

* headerBg: 字符串，header背景颜色，默认：`@titleBg`

* headerFontSize: 数字/字符串，header字体大小，默认：`12`
### 事件
* on-open: 页面打开

* on-close: 页面关闭，内部通过v-show实现
### 方法
* open: 打开页面

* close: 关闭页面
### 注意
* 页面开关通过v-show控制，也就是说关闭状态下也会渲染，如果不想渲染，可通过on-close\on-open事件控制页面内容的渲染。