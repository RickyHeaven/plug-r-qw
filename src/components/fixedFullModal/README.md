## fixedFullModal 固定定位的全屏弹框
无底栏，顶部露出55px,用于显示菜单，菜单不能操作，全局UI组件，直接用

### 属性
* title 字符串，弹框标题，默认：`'标题'`

* top 字符串，顶部露出的高度，默认：`'55px'`

### 事件
* on-cancel 弹框关闭事件，常用于关闭弹框时更新数据

### 方法
* open 打开弹框

* close 关闭弹框

### 注意
* 该组件是基于view-design的Modal组件封装的，所以用法参考Modal的文档，Modal支持的属性和事件，该组件同样支持