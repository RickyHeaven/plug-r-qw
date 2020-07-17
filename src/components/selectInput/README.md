## selectInput
下拉选择和输入框组合，select选择要输入的key,input输入val，全局UI组件，直接用

### 属性
* value: 对象，组件的值，建议使用v-model绑定，key对应select值，val对应input值，默认：`{key:null,val:null}`

* labelWidth: 数字，select(label)宽度，默认：`160`

* itemWidth: 数字，input和验证信息宽度总和（表单项内容宽度），默认：`200`

* selectOption: 数组，select待选项

* placeholder: 字符串，input占位符，默认：`'请输入'`

* clearable: 布尔对象，input是否可清空，默认：`false`

* disabled: 布尔对象，是否禁用组件，默认：`false`

### 事件
* on-change: select或input值改变（如果使用v-model绑定组件的值，这个事件就是多余的），返回包含select和input值的对象，如果select改变且之前有值，则多返回一个字段`beforeKey`表示之前的key值，如：`{key:'name',val:'ricky',beforeKey:'id'}`