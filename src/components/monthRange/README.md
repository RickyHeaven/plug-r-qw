## monthRange

月份区间选择器

### 属性

- value: 数组，组件的值，推荐用*v-model* 绑定，如：

```
<monthRange v-model="value"/>

value: ['2023-03','2024-06']
```

- placement: 字符串，选择框位置，默认值：`‘bottom-start’`

- placeholder: 字符串，日期选择框 placeholder，默认值：`'请选择日期'`

- options1: 对象，开始日期选择器配置项

- options2: 对象，结束日期选择器配置项

- disabled: 布尔对象，禁用组件（仅展示时用），默认：`false`

### 事件

- on-change: 组件值发生改变，返回改变后的值

### 注意

- 该组件被引入了 formR，type 为`monthRange`，可以直接使用，但是 formR 所有日期组件 placement 固定为`bottom-end`,且不可更改，故与单独使用时默认位置不一样，如需调整单独使用时位置，给 placement 传对应的值就行。
