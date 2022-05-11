## echarts 地图组件

使用方式：`<echart-map />` 标签

加载地图实例化内容，canvas渲染基于echarts技术，数据结构基于高德地图在线生成技术

### 属性

* config - 对象，实例化对象的全局配置，默认：`{}`

* region - 字符串，地图json文件，不传默认为中国地图，其他国家请用在线生成工具后引入至项目

* name - 字符串，地图名称，必传，默认：`''`

* widthT - 字符串，地图宽度，默认：`870px`

* heightT - 字符串，地图高度，默认：`384px`

### 事件
* timelinechanged 时间轴中的时间点改变触发事件

* click 普通点击事件

* onresize 监听屏幕大小，图表进行相应缩放
```
if (window.echartResizeMJ === undefined) {
  window.echartResizeMJ = {}
}
if (!window.echartResizeMJ[me.name]) {
  let temp = window.onresize
  if (temp) {
    window.onresize = function () {
      temp()
      myChart.resize()
      window.echartResizeMJ[me.name] = true
    }
  }
  else {
    window.onresize = function () {
      myChart.resize()
      window.echartResizeMJ[me.name] = true
    }
  }
}
```

### 方法
* time-line-change 时间轴中的时间点改变后的方法,回调为当前页的索引值
```
myChart.on('timelinechanged', function (res) {
  me.$emit('time-line-change', res.currentIndex)
})
```

* series-bar-click 点击方法，回调当前点击的图表值
```
myChart.on('click', 'series.bar', function (res) {
  me.$emit('series-bar-click', res)
})
```

### 注意
1、图表对象实例化必须要有独一无二的ID和ref名称，否则图表出不来

2、做响应式开发图表，宽度不要定死，布局可以从父级来进行调整