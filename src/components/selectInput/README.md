## selectInput

下拉选择和输入框组合，select 选择要输入的 key,input 输入 val，全局 UI 组件，直接用

### 属性

- value: 对象，组件的值，建议使用 v-model 绑定，key 对应 select 值，val 对应 input 值，默认：`{key:null,val:null}`

- labelWidth: 数字，select(label)宽度，默认：`160`

- itemWidth: 数字，input 和验证信息宽度总和（表单项内容宽度），默认：`200`

- selectOption: 数组，select 待选项

- placeholder: 字符串，input 占位符，默认：`'请输入'`

- clearable: 布尔对象，input 是否可清空，默认：`false`

- disabled: 布尔对象，是否禁用组件，默认：`false`

### 事件

- on-change: select 或 input 值改变（如果使用 v-model 绑定组件的值，这个事件就是多余的），返回包含 select 和 input 值的对象，如果 select 改变且之前有值，则多返回一个字段`beforeKey`表示之前的 key 值，如：`{key:'name',val:'ricky',beforeKey:'id'}`
