## 输入框地图组件
带搜索框的地图组件，支持搜索地点，经纬度回显地点，缩放，移动，全局UI组件，直接用

### 属性
* valProp: 对象，组件的值，推荐用*v-model* 绑定，如：
```angular2html
<inputMap v-model="value"/>

value: {
          name: '光电园(地铁站)',
          address: "6号线",
          district: "重庆市渝北区",
          lng: 106.499401,
          lat: 29.616077
        }
```

* width: 字符串/正整数，组件宽度，默认值：`100%`

* height: 字符串/正整数，组件高度

* placeholder: 字符串，搜索框placeholder，默认值：`'搜索'`

* disabled: 布尔对象，禁用组件（仅展示时用），默认：`false`

* showMap: 布尔对象，是否展示地图，设置为`false`时，只有一个输入框，没有地图，默认：`true`
### 事件
* on-change: 组件值发生改变，返回改变后的值，相当于vue-amap的select事件
### 注意
* v-model绑定的值必须是一个对象，没有初始值可设为`{}`
