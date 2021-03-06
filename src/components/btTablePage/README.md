## btTablePage
表格-页签-表顶操作（如：批量XX，导出）集成UI组件，全局组件，不用引入，直接用

### 属性：
注意：view-design 的 Table 组件的属性都支持，请在使用中注意冲突情况，如果冲突，请不要使用

* url: 字符串，表格数据接口地址（不带参数）,如：`'/dcc/gas-iccids'`

* search-data: 对象，拉取表格数据时所有的参数全都放这里面（日常拉取或者条件查询）如：`{useStatus: 1}`

* columns: 数组，格式同iView的columns,但需要表格前多选时，直接设置selection属性，不用在这里添加列。

* selection: 布尔类型，需要表格多选时设置。

* selectionFixed: 每列开头选择框固定（`left`: 左固定，`right`: 右固定， `''`: 不固定，和iview table 固定列一样）

* rowClickSelect: 是否点击行操作开头选择框(需要`selection: true`时才有效)

* data: 数组，在展示静态表格（没有请求地址url,不用更新，只展示一组静态数据）时用，格式同iView的data。

* page-size: 正整数，在需要定义初始化表格页面条数时使用，默认值10。

* sortable: 字符串（'custom'/''），`custom`: 所有带key的列后端排序，`''`: 特定列排序，直接在columns里设置。

* init-data: 布尔对象，默认为`true`: 组件创建后自动拉取第一次数据，`false`: 不自动拉取第一次，后面改变search-data的值或者调用手动拉取方法。

* highlightRow: 当前（选中，无论是否带选择框）行高亮，`radio: true`时会无视该属性值开启高亮

* rowClickNum: 自动拉取第一次数据（`init-data: true`）时点击第几行，默认`-1`，不点击

* radio: 表格是否是单选表格，每次只能选中一行（没有选择框，高亮选中行表示选中）

* tableEmptyTdHandle: 表格内容为空是否显示为`--`

* noBorderTable: 表格无边框

* noPage: 不带页签

* orderDefault: 默认排序方式，默认值`'desc'`,('asc'/'desc')

* orderKey: 排序字段的key

* getDataLoading: 拉取表格数据时显示遮罩层，默认值`false`

* showTopRow: 展示顶行（列表设置、批量操作按钮、导出等按钮、统计信息等）,各项子内容通过slot接入，默认值`false`

### 事件：
注意：view-design 的 Table 组件的所有事件都可监听

* on-row-click: 行被点击，返回当前行数据

* on-data-change: 表格数据改变，返回改变后的数据


### 方法：
* getTableData: 主动更新表格数据，一般在操作表格数据后使用，条件查询时只需要更改属性`search-data`的值

* addRow: 添加行（分页时不推荐使用，会导致当前页展示的数据条数和页签显示的不符,分页时直接跟后端新增数据然后重新拉取表格数据）

* setRowData: 更改指定行数据

* deleteRow: 删除指定行（分页时不推荐使用，会导致当前页展示的数据条数和页签显示的不符,分页时直接跟后端删除数据然后重新拉取表格数据）

* clearSelect: 清空选择

* clearTableData: 清空表格（重置数据）

* clearSearchDataT: searchData每次变动都会存个备份到searchDataT,但有时候我们在外面清空searchData时，并不希望空的searchData触发表
格数据拉取（比如我们希望并手动清空table数据，同时清空查询条件form数据），于是不把空的值传递给searchData(searchData不变，但外面的form
进行过一次清空),这样就需要手动清空备份，否则外面再次给searchData附与上一次同样的值，不会触发表格数据拉取

* getDataAndClickRow: 拉取表格数据并且点击行，如果传true，则点击当前行，不传则点击 rowClickNum 指定行

* getSelected: 获取已选行数据

*getTableData: 拉取表格数据
### 注意：
* 该组件的父容器需要有有效的高度，比如给定px、vh高度，或者有效的百分比高度（使用百分比高度必须要能让它生效）