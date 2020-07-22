## checkboxTree
复选框树，支持v-model绑定值，绑定的值只取叶子节点id，全局UI组件，直接用

### 属性
* value: 数组，选中的叶子节点id组成的数组，推荐使用v-model绑定

* data: 数组，树结构数据，每节点需要有name、id两属性，子节点为children属性，是否默认展开为expand属性，如：
```angular2html
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
### 注意
* v-model只包含叶子节点id