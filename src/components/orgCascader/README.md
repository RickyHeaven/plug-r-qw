## orgCascader
机构级联下拉选择框，依据url属性从后端拉取数据，失焦时选择，v-model绑定选中的机构ID，全局UI组件，直接用

### 属性
* valProp: 数字/字符串/数组，组件的值，推荐用*v-model* 绑定，如：
```angular2html
<orgCascader v-model="value"/>

value: 2
```

* url: 字符串，拉取机构数据的接口地址，默认值：`window.g.mgrURL + '/umc/orgs'`，如果需要使用自己的url，那么该接口返回值需满足以下格式：
```angular2html
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

* onlyLastVal: 布尔对象，组件值只取选中的最后一级，默认：`true`,如共3级`[1,2,3]`，选中为第二级`2`,则v-model的值为`2`,否则为`[1,2]`

* onlyLastLabel: 布尔对象，组件选择框只展示选中的最后一级，默认：`true`,如共3级`['机构1','机构1-1','机构1-1-1']`，选中为第二级`机构1-1`,则展示`机构1-1`,否则为`机构1/机构1-1`(分隔符可自定义，默认`/`)

* placeholder: 字符串，选择框placeholder，默认值：`'搜索'`

* disabled: 布尔对象，禁用组件（仅展示时用），默认：`false`
### 事件
* on-name-change: 组件label发生改变，返回改变后的label
### 注意
* 传给v-model(valProp)的值为带分隔符的label字符串时，组件返回的值是id，多级下时id的数组,最后一级模式下是选中的id
