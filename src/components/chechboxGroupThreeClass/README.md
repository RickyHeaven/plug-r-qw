## checkboxGroupThreeClass
三级复选框组，支持v-model，可自定义label和v-model收集字段，可定义v-model只收集叶子节点数据或全部选中的节点数据，全局UI组件，直接用

### 属性
* value: 数组，选中节点数据组成的数组（默认只收集叶子节点），推荐使用v-model绑定

* data: 数组，复选框组结构数据，每节点需要有label和collectVal的值对应的属性（如：name,id），子节点为children属性，如：
```angular2html
  [
    {
      name: 'parent 1',
      id: 1,
      children: [
        {
          name: 'child 1-1',
          id: 11,
          children: [
            {
              name: 'child 1-1-1',
              id: 111
            }
          ]
        },
        {
          name: 'child 1-2',
          id: 12,
          children: [
            {
              name: 'child 1-2-1',
              id: 121
            }
          ]
        }
      ]
    }
  ]
```
* firstTitle 字符串，一级标题，默认：`'一级'`

* secondTitle 字符串，二级标题，默认：`'二级'`

* thirdTitle 字符串，三级标题，默认：`'三级'`

* label 字符串，节点的标签，默认：`'name'`

* collectVal 字符串/数组，v-model收集节点的哪些字段，默认：`'id'`

* leaf 布尔对象，叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点，默认：`true`

* disabled 布尔对象，禁用整颗树的checkbox选择功能
### 事件
* on-change 选择的节点发生变化，返回选中的节点数据，默认只返回叶子几点
### 注意
* v-model默认只包含叶子节点数据（默认id）
* data 数据结构必须完整，三级结构每一级都不能少