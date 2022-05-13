## selectScrollMore
远程下拉选择框，下拉滚动加载更多选项，支持筛选，全局UI组件，直接用

### 属性
* value: 数字/字符串/数组，组件的值，建议使用v-model绑定，默认：`null`

* url: 字符串，待选项接口地址，不带条件

* searchData: 对象，待选项接口条件，默认：`{}`

* getOptions: 布尔对象，是否拉取待选项,false:不拉取，并清空待选项和值，默认：`true`

* optionFilter: 函数，接口返回数据处理函数，传入接口返回的数据，返回处理后的数据，例如：`d => d.filter(e => e.id !== 3)`

* optionsLabelKey: 字符串/数组，待选项label取接口数据中哪个字段，默认：`'name'`

* optionsValKey: 字符串，待选项value取接口数据中哪个字段，默认：`'id'`

* searchKey: 字符串，搜索框的值在拉取待选项数据的条件中对应的key

* searchWordsRequired: 布尔对象，只有在searchKey对应字段有值时（用户输入内容搜索时）拉取数据，默认：`false`

* collectLabel: 布尔对象，需要在选中时返回出value以外其他字段，配合on-change事件使用，默认：`false`

* placeholder: 字符串，input占位符，默认：`'请输入'`

* disabled: 布尔对象，是否禁用组件，默认：`false`

### 事件
* on-change: 组件值改变，可以收到除v-model以外其他字段（选项中），collectLabel需为`true`时生效

* 该组件依赖于自定义指令v-loadmore，而该指令触发条件之一是下拉列表必须在y方向滚动（下拉列表最大高度200px，大概7条数据），所以searchData的size字段需大于等于7

### 支持的view-design中Select原生属性（下面没有列举的一律不支持）：
* multiple: 布尔对象，是否支持多选，默认：`false`

* not-found-text: 字符串，当下拉列表为空时显示的内容，默认：`无匹配数据`

* prefix: 字符串，在 Select 内显示图标

* max-tag-count: 数字，多选时最多显示多少个 tag

* max-tag-placeholder: 方法，隐藏 tag 时显示的内容，参数是剩余项数量