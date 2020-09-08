## showHidePanelB
收展面板，用于展示或收起表格页条件查询表单组，通过v-model绑定的值控制收展，全局UI组件，直接用

### 属性
* show: 布尔对象，面板是否展开，建议用v-model绑定，如：
```
<show-hide-panel-b v-model="open">内容</show-hide-panel-b>

open为你定义的变量
```

* bg: 字符串，面板背景色(默认白色)，如：`bg:'#fff'`
