## transferBox

穿梭框，左右两套由筛选表单-表格-页签集成的 UI 组件之间的数据穿梭，左右表格数据皆来自接口，穿梭时自动请求接口，然后自动刷新数据；全局组件，不用引入，直接用

### 属性：

- titleLeft: 字符串，左侧标题,默认：`'已添加'`

- titleRight: 字符串，右侧标题,默认：`'未添加'`

- formDataLeft: 数组，左侧筛选表单结构数据，格式参考[formR 文档]('../formR#属性')中`formData`

- formDataRight: 数组，右侧筛选表单结构数据，注意：左右一样时可传同一变量，但还是都得传

- formRulesLeft: 数组，左侧筛选表单校验规则数据，格式参考[formR 文档]('../formR#属性')中`formRules `

- formRulesRight: 数组，右侧筛选表单校验规则数据，注意：左右一样时可传同一变量，但还是都得传

- constSearchDataLeft: 对象，左侧筛选常量数据，即请求表格数据时带的常量条件，如：`{type:'org'}`

- constSearchDataRight: 对象，右侧筛选常量数据，注意：左右一样时可传同一变量，但还是都得传

- leftTableColumns: 数组，左侧表格结构数据，格式参考[btTablePage 文档]('../btTablePage#属性')中`columns`

- rightTableColumns: 数组，右侧表格结构数据，注意：左右一样时可传同一变量，但还是都得传

- leftTableUrl: 字符串，左侧表格数据接口地址，格式参考[btTablePage 文档]('../btTablePage#属性')中`url`

- rightTableUrl: 字符串，右侧表格数据接口地址，注意：左右一样时可传同一变量，但还是都得传

- addUrl: 字符串，添加(向左穿)接口地址

- deleteUrl: 字符串，移除(向右穿)接口地址

- addAllUrl: 字符串，全部添加(向左穿)接口地址

- deleteAllUrl: 字符串，全部移除(向右穿)接口地址

- addParamsHandle: Function，添加接口参数处理函数（入参为右侧已选数据），默认：`(selection)=>selection.map(e=>e?.id)`

- deleteParamsHandle: Function，移除接口参数处理函数（入参为左侧已选数据），注意：左右一样时可传同一方法，但还是都得传

- addAllParamsHandle: Function，全部添加接口参数处理函数（入参为右侧筛选表单数据），默认：`searchData=>searchData`

- deleteAllParamsHandle: Function，全部移除接口参数处理函数（入参为左侧筛选表单数据），注意：左右一样时可传同一方法，但还是都得传

- addMethod: 字符串，添加接口请求方式，默认：`'post'`

- addAllMethod: 字符串，全部添加接口请求方式，默认：`'post'`

- deleteMethod: 字符串，移除接口请求方式，默认：`'delete'`

- deleteAllMethod: 字符串，全部移除接口请求方式，默认：`'delete'`

- searchFormLabelWith: 数字，搜索表单 label 的 width

- usePagePro: 布尔对象，是否使用pagePro组件作为页签，可用全局属性`btTablePageUsePagePro`更改默认值，默认：`false`

- showTotal: 布尔值，page是否展示total，可通过全局变量`pageShowTotal`改变默认值，默认值：`true`

- showSizer: 布尔值，page是否展示sizer，可通过全局变量`pageShowSizer`改变默认值，默认值：`true`

### 事件：

- transferred: 进行了穿梭，用于给外层组件判断是否需要刷新，如穿梭后改变了外层 table 的数据，那么发生过穿梭行为后，关闭穿梭框进入 table 时就需要刷新

- on-data-change-l: 左侧表格数据更改（一般是接口拉取了新的数据），返回值：新的表格数据

- on-data-change-l: 右侧表格数据更改（一般是接口拉取了新的数据），返回值：新的表格数据

### 方法：

- reset: 重置穿梭框

- search: 主动触发筛选/刷新数据

### 注意：

- 该组件的父容器需要有有效的高度，比如给定 px、vh 高度，或者有效的百分比高度（使用百分比高度必须要能让它生效）
