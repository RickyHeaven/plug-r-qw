## tableSetting
设置表格哪些列展示，支持指定列默认展示、指定列禁止修改展示设置，全局UI组件，直接用

### 属性
* value: 数组，组件的值，推荐用*v-model* 绑定，对应table的columns，必填。

* sKey: 字符串，组件数据在 *localstorage* 的唯一标识，不可与其他sKey重复，命名规则：插件所在单文件名称_取名时间，如：`tableSettingEx_202007030903` 必填

* top: 字符串，设置面板定位-上（相对于按钮），如：`top='40px'`

* right: 字符串，设置面板定位-右（相对于按钮）

* width: 字符串，设置面板宽度，默认：`150px`

* bg: 字符串，设置面板背景色，默认：`#ccc`

* defaultCheck: 布尔类型，是否设置默认勾选（默认`false`，用于默认展示所有列），如果设为true（用于默认展示部分列）,则在v-model绑定的*columns*项里设置`showSettingCheck:true`
### 注意
* sKey命名一定要规范

* value(columns)里一定要有title,设置面板列表的标签是取的这个字段,如选择框'selection',一定要加上：`title:'选择'`
