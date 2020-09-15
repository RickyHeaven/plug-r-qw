## tableTree
支持收展、单选、本地增删改查的树形表格，全局UI组件，直接用

### 属性
* columns: 数组，表格列结构，同iview的table的columns,组件接管了选择功能，不用在columns中加selection列，加了也没用。如：
```
[
  {
    title: "接收人号码",
    key: "np",
    align: "left",
    tooltip: "true",
    minWidth: 80
  },
  {
    title: "接收渠道",
    key: "sd",
    align: "center",
    tooltip: "true",
    minWidth: 80
  }
]
```

* data: 数组，表格内容，同iview的table的data，有子节点需在当前行加children属性，并赋对应的值。如：
```
[
  {
    np: 'ricky',
    sd: 12,
    children: [
      {
        np: 'tom',
        sd: 8,
        hideChild: false,
        children: [
          {
            np: 'jim',
            sd: 5,
            hideChild: false,
            children: [
              {
                np: 'mike',
                sd: 2,
              }
            ]
          }
        ]
      }
    ]
  },
  {
    np: 'mary',
    sd: 22,
    checkBox: true
  }
]
```
* highlightRow: 布尔类型，高亮当前行，默认false

* radio: 布尔类型，是否开启单选功能，默认false，需要默认选中的，在对应节点设`checkBox:true`，注意：因为是单选，不可同时设置多个节点`checkBox:true`
### 事件
* on-select: 节点被选中，返回选中节点数据
### 方法
* handleResize: 容器大小改变后，可调用该方法让组件重新渲染

* updateTab: 主动更新组件数据，一般不需要调用（组件会监听传入的data,自动更新）

* addLocalNode: 手动添加单个子节点，参数：
>1. @param {非负整数} index 要添加子节点的节点的序列号，由上到下，从0开始，可用params.row._index
>2. @param {Object} node 新节点数据,格式相当于table的data的一个元素
>3. @returns {Promise} 成功则返回添加的节点在组件中的数据，失败则返回失败原因

* editLocalNode: 手动编辑单个子节点，参数：
>1. @param {非负整数} index 要编辑节点的节点的序列号，由上到下，从0开始，可用params.row._index
>2. @param {Object} node 新节点数据,格式相当于table的data的一个元素
>3. @returns {Promise} 成功则返回编辑后的节点在组件中的数据，失败则返回失败原因

* deleteLocalNode: 手动删除单个子节点，参数：
>1. @param {非负整数} index 要删除节点的节点的序列号，由上到下，从0开始，可用params.row._index
>2. @returns {Promise} 成功则返回删除后的整棵表格树数据，失败则返回失败原因
### 注意
* 如果要默认展开指定节点，需要在该节点数据上设置`hideChild:false`即可
