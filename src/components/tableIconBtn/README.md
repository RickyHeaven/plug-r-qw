## tableIconBtn

表格用图标按钮，集成了权限 v-has(自定义指令)，可指定图标、大小、提示信息，可禁用，全局 UI 组件，直接用

### 属性

- icon: 字符串，组件的图标，view-design 的 icon，如：

```
<tableIconBtn icon="ios-cart"/>
```

- title: 字符串，按钮提示信息

- has: 字符串，按钮权限，通过自定义指令 v-has 控制，这里只需要通过该属性给按钮传配好的权限标识就行

- size: 正整数，按钮图标大小，默认值：`24`

- disabled: 布尔对象，禁用按钮，默认：`false`

### 事件

- click: 按钮点击事件

### 注意

- has 是定制化指令，原理是去 sessionStorage 中找‘btnPermissions’，然后将获取的值按‘，’切割，最后看其中有没有 has 所带的值，如果想要用权限功能，可以参考这个原理配置权限数据并存到 session
