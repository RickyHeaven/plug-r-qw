## pagePro

极简页签，支持v-model绑定当前页数，可选每页条数，可禁用，全局 UI 组件，直接用

### 属性

- modeValue: 正整数，当前页数

- total: 非负整数，总条数

- pageSize: 正整数，每页条数，默认值：`10`

- size: 字符串，页签尺寸，'small','default',默认值：`'default'`

- pageSizeOpts: 数组，每页条数可选项，默认：`[10, 20, 50, 100]`

- showTotal: 布尔值，是否展示total，可通过全局变量`pageShowTotal`改变默认值，默认值：`true`

- showSizer: 布尔值，是否展示sizer，可通过全局变量`pageShowSizer`改变默认值，默认值：`true`

- transfer: 布尔值，是否在body下直接弹出选框，默认值：`true`

- disabled: 布尔值，是否禁用，默认值：`false`

### 事件

- on-change: 当前页改变事件

- on-page-size-change: 每页条数改变事件

### 注意

- 组件支持v-model绑定当前页数，需为正整数

- 可以使用 vue.prototype.pageSizes 全局配置pageSizeOpts
