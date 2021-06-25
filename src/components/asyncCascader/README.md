## asyncCascader
远程拉取数据的级联下拉选择框，依据url属性从后端拉取数据，失焦时选择，v-model绑定选中的ID，全局UI组件，直接用

### 属性
* valProp: 数字/字符串/数组，组件的值，推荐用*v-model* 绑定，如：
```
<asyncCascader v-model="value"/>

value: 2
```

* url: 字符串，拉取数据的接口地址，默认值：`window.g.mgrURL + '/web/v1/umc/orgs'`，如果需要使用自己的url，那么该接口返回值需满足以下格式：
```
  [
    {
      id: 1,
      name: '机构A'
    },
    {
      id: 2,
      name: '机构B',
      children: [
        {
          id: 3,
          name: '机构B-1'
        }
      ]
    }
  ]
  
  该数组需以r或r.data或r.data.records的值返回，r为请求返回最外层数据
```

* optionVal 字符串，节点val对应接口字段

* optionLabel 字符串，节点label对应节点字段

* optionFilter Function，自定义待选项筛选逻辑，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理），如：
```
<asyncCascader
  ...
  :optionFilter="d=> d.filter(e => e.id !== 3)"
  ...
/>
```

* onlyLastVal: 布尔对象，组件值只取选中的最后一级，默认：`true`,如共3级`[1,2,3]`，选中为第二级`2`,则v-model的值为`2`,否则为`[1,2]`

* onlyLastLabel: 布尔对象，组件选择框只展示选中的最后一级，默认：`true`,如共3级`['机构1','机构1-1','机构1-1-1']`，选中为第二级`机构1-1`,则展示`机构1-1`,否则为`机构1/机构1-1`(分隔符可自定义，默认`/`)

* filterable: 布尔对象，是否支持筛选待选项，默认值：`false`

* separator: 字符串，选中的label分隔符，显示全部label时生效，默认值：`'/'`

* placeholder: 字符串，选择框placeholder，默认值：`'搜索'`

* disabled: 布尔对象，禁用组件（仅展示时用），默认：`false`
### 事件
* on-label-change: 组件label发生改变，返回改变后的label
### 注意
* 传给v-model(valProp)的值为带分隔符的label字符串时，组件返回的值是id，多级下时id的数组,最后一级模式下是选中的id
