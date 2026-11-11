## echarts 地图组件

使用方式：`<echart-map />` 标签

加载地图实例化内容，canvas 渲染基于 echarts 技术，地图结构基于高德地图在线生成技术，支持数据展示型地图和迁徙图两种类型，全局 UI 组件，直接用

### 属性

- name: 字符串，地图名称，必传（作为地图容器 id，需保证唯一），默认：`''`

- roam: 布尔对象，是否开启鼠标缩放和平移漫游，默认：`true`

- mapType: 字符串，地图类型，`normal`（数据展示型）、`migration`（迁徙图），默认：`'normal'`

- widthT: 字符串，组件宽度，默认：`'870px'`

- heightT: 字符串，组件高度，默认：`'384px'`

- seriesData: 数组，数据展示型地图的省级数据，默认：`[]`

- seriesDataPro: 数组，数据展示型地图的市区县数据，默认：`[]`

- inRangeColor: 数组，范围区域颜色（从最大值到最小值的颜色区分），默认：`[]`

- migrationData: 数组，迁徙图数据，默认数据示例格式：

```
[
  [
    { name: '重庆', lngLat: [106.553263, 29.564724] },
    { name: '北京', lngLat: [116.399014, 39.924869], value: 666 }
  ]
]
```

- setSeries: 数组，自定义 series 内容配置，定义后会覆盖组件自带的 series 配置，默认：`[]`

- setGeo: 回调函数，地图地理配置，默认：`(pName, me) => {...}`（包含 show、map、roam、label、itemStyle 等配置）

- setLine: 数组，迁徙图自定义线条配置，没有配置则使用组件内默认配置，默认：`[]`

- setScatter: 数组，自定义散点（气泡）配置，没有配置则使用组件内默认配置，默认：`[]`

- migrationRippleEffect: 回调函数，波纹绘制配置，默认：`() => ({ brushType: 'stroke' })`

- migrationEffect: 回调函数，迁徙图第一层特效配置，默认返回 `{ show: true, period: 6, trailLength: 0.1, color: '#46bee9', symbol: 'pin', symbolSize: 6 }`

- migrationLineStyle: 回调函数，迁徙图第一层线条样式，默认返回 `{ normal: { color: '#fff', width: 0, curveness: 0.2 } }`

- migrationEffect2: 回调函数，迁徙图第二层线条特效配置，默认返回 `{ show: true, period: 6, trailLength: 0, symbol: 'pin', symbolSize: 6 }`

- migrationLineStyle2: 回调函数，迁徙图第二层线条样式，默认返回包含线性渐变、线宽、透明度、幅度等配置

- btnStyle: 对象，返回全国按钮样式

- scatterLabel: 回调函数，标点标签内容（params 返回数组形式，内容分别是经度、维度、值），默认：`(params) => params.data.value[2]`

- tooltip: 回调函数，工具提示框内容，默认：`() => '随便定义任何内容也是可以的，通过回调函数取'`

- scatterLabelPosition: 字符串，标记文字位置，可选 `top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight`，默认：`'inside'`

- scatterGeoShow: 布尔对象，是否显示标点，默认：`true`

- scatterGeoItemStyle: 回调函数，标点样式，默认返回 `{ normal: { color: '#F62157' } }`

- scatterGeoLabelTextStyle: 回调函数，气泡标签文字样式，默认返回 `{ color: '#fff', fontSize: 9 }`

- geoItemStyle: 回调函数，地理全局颜色（无值时颜色、边框颜色、鼠标滑过选中颜色等），默认返回组件内置配色

- title: 回调函数，标题配置，默认返回 `{ show: false }`

- mapLabel: 回调函数，地图区域标签颜色配置，默认返回省份标签及悬浮效果配置

- mapItemStyle: 回调函数，地图区域颜色配置，默认返回区域边框宽度、边框颜色、区域颜色及悬浮效果配置

- scatterSymbol: 字符串，标点类型，还可以自定义图片地址，默认：`'pin'`

- maxSize4Pin: 数字，标点最大尺寸，默认：`40`

- minSize4Pin: 数字，标点最小尺寸，默认：`30`

- visualMap: 回调函数，视觉映射组件配置，默认：`(me, min, max) => {...}`

- visualMapText: 数组，视觉映射组件文本，默认：`['高', '低']`

- visualMapTextStyle: 回调函数，视觉映射字体样式，默认：`() => ({})`

- visualMapShow: 布尔对象，是否显示视觉映射组件，默认：`false`

- visualMapOrient: 字符串，如何放置视觉映射组件，`'horizontal'` 或 `'vertical'`，默认：`'horizontal'`

- visualMapSeriesIndex: 数字，指定取哪个系列的数据，默认：`1`

- visualMapHeight: 数字，视觉映射组件高度，默认：`null`

- visualMapWidth: 数字，视觉映射组件宽度，默认：`null`

- visualMapInverse: 布尔对象，是否反转视觉映射组件，默认：`false`

- visualMapLeft: 字符串，视觉映射组件距离左边位置，默认：`'5%'`

- visualMapTop: 字符串，视觉映射组件距离顶部位置，默认：`'95%'`

- scatterGeoZlevel: 数字，标点 zlevel，默认：`6`

### 事件

- on-click-map: 点击地图省份进入省级（或点击返回全国）时触发，返回参数为地图英文名和中文名，如 `('beijing', '北京')`

### 方法

组件内部方法（如 initEcharts、oback 等）主要用于内部渲染，一般无需外部调用；组件会自动监听 window resize 进行自适应，并在销毁时释放地图实例

### 注意

- name 属性必传，且需保证唯一，作为地图容器 id

- 进入省级需要传入 seriesDataPro 数据，否则点击省份不会下钻

- 迁徙图类型（mapType 为 migration）使用 migrationData、setLine、setScatter 等配置，数据展示型（mapType 为 normal）使用 seriesData、seriesDataPro、inRangeColor 等配置