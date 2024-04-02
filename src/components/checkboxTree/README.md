## checkboxTree

复选框树，支持 v-model，可自定义 label 和 v-model 收集字段，可定义 v-model 只收集叶子节点数据或全部选中的节点数据，全局 UI 组件，直接用

### 属性

- value: 数组，选中节点数据组成的数组（默认只收集叶子节点），推荐使用 v-model 绑定

- data: 数组，树结构数据，每节点需要有 label 和 collectVal 的值对应的属性（如：name,id），子节点为 children 属性，是否默认展开为 expand 属性，如：

```
  [
    {
      name: 'parent 1',
      id: 1,
      expand: true,
      children: [
        {
          name: 'child 1-1',
          id: 11,
          expand: true,
          children: [
            {
              name: 'leaf 1-1-1',
              id: 111
            },
            {
              name: 'leaf 1-1-2',
              id: 112
            }
          ]
        },
        {
          name: 'child 1-2',
          id: 12,
          children: [
            {
              name: 'leaf 1-2-1',
              id: 121
            },
            {
              name: 'leaf 1-2-2',
              id: 122
            }
          ]
        }
      ]
    }
  ]
```

- expandAll 布尔对象，是否默认全部展开，默认：`false`

- label 字符串，节点的标签，默认：`'name'`

- collectVal 字符串/数组，v-model 收集节点的哪些字段，默认：`'id'`

- leaf 布尔对象，叶子节点模式，v-model 只返回叶子节点数据，任何选择操作都会选择叶子节点，默认：`true`

- inlineLeaf 布尔对象，叶子节点为行内模式，横向排列，默认：`false`

- disabled 布尔对象，禁用整颗树的 checkbox 选择功能

### 事件

- on-change 选择的节点发生变化，返回选中的节点数据，默认只返回叶子几点

### 注意

- v-model 默认只包含叶子节点数据（默认 id）
