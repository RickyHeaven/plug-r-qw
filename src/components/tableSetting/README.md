## tableSetting

设置表格哪些列展示，支持指定列默认展示、指定列禁止修改展示设置，全局 UI 组件，直接用

### 属性

- value: 数组，组件的值，推荐用*v-model* 绑定，对应 table 的 columns，必填。

- sKey: 字符串，组件数据在 _localstorage_ 的唯一标识，不可与其他 sKey 重复，命名规则：插件所在单文件名称\_取名时间，如：`tableSettingEx_202007030903` 必填

- width: 字符串，设置面板宽度，默认：`'240px'`

- bg: 字符串，设置面板背景色（面板有阴影），默认值可通过全局属性tableSettingBg改变，默认：`'#fff'`

- placement: 字符串设置面板呼出位置，默认：`'bottom-end'`

- defaultCheck: 布尔类型，是否设置默认勾选（默认`false`，用于默认展示所有列），如果设为 true（用于默认展示部分列）,则在 v-model 绑定的*columns*项里设置`showSettingCheck:true`

- storage: 字符串，指定使用浏览器缓存类型，可选值`'localStorage'`、`'sessionStorage'`，默认：`'localStorage'`

- transfer: 布尔类型，是否将面板放置于 body 内，在 Tabs、带有 overflow:hidden 的 上级容器内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果，默认值可通过全局属性tableSettingTransfer改变，默认：`true`

- eventsEnabled: 布尔类型，是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能，但可以让弹出面板根据页面环境动态改变位置和自身尺寸，提升体验，默认值可通过全局属性tableSettingEventsEnabled改变，默认：`true`

### columns 与配置相关字段

- disableShowSetting 布尔对象，禁止该字段在设置界面被操作

- showSettingCheck 布尔对象，需要有默认部分字段展示时，需要展示的字段配置项里给该字段赋值`true`，详见`defaultCheck`字段说明

### 注意

- sKey 命名一定要规范

- value(columns)里一定要有 title,设置面板列表的标签是取的这个字段,如选择框 'selection',一定要加上：`title:'选择'`
