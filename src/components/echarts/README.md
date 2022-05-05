## echarts 图表组件

使用方式：`<echart />` 标签

echarts，一个使用 JavaScript 实现的开源可视化库。

可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等）。

底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

echarts 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图。

其他功能如地理数据可视化的地图、热力图、线图，关系数据可视化的关系图、旭日图，多维数据可视化的平行坐标。

还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。

### 属性
* params - 对象，接口参数，默认：`{}`

* config - 对象，实例化对象的全局配置，配置后将无视下面的规则覆盖整个图表，多用于复杂的图表统计，默认：`{}`

* url - 字符串，拉取数据的接口地址，默认：`''`

* data - 对象，图表默认数据，没有url请求可以展示静态数据，默认：`{}`

* yAxis - 对象/字符串，Y轴数据，默认：`value`

* xAxis - 对象/字符串，X轴数据，默认：`category`

* tooltip - 对象，提示框，鼠标悬浮交互时的信息提示，默认：`{}`

* series - 对象，图表内容，默认：`{}`

* theme - 字符串，图表主题，不传为默认的设计稿风格，其他流行风格有`vintage`、`macarons`、`infographic`、`shine`、`roma`

* name - 字符串，图表名称，必传，默认：`''`

* title - 字符串，图表标题，默认：`未知`

* titleColor - 字符串，标题颜色，不传会从配置文件或主题中取默认值

* titleFontSize - 数字，标题字体大小，不传会从配置文件或主题中取默认值

* titleFontWeight - 数字/字符串，标题字体粗细，不传会从配置文件或主题中取默认值

* titleX - 数字/字符串，标题的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'，不传会从配置文件或主题中取默认值

* titleY - 数字/字符串，标题的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'，不传会从配置文件或主题中取默认值

* subTitle - 字符串，图表副标题，默认：`''`

* subTitleColor - 字符串，副标题颜色，不传会从配置文件或主题中取默认值

* subTitleFontSize - 数字，副标题字体大小，不传会从配置文件或主题中取默认值

* legendShow - 布尔对象，是否显示图例，默认：`true`

* legendType - 字符串，图例类型，'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用，默认：`plain`

* legendColor - 字符串，图例颜色，不传会从配置文件或主题中取默认值

* legendFontSize - 数字，图例字体大小，不传会从配置文件或主题中取默认值

* legendX - 数字/字符串，图例的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'，不传会从配置文件或主题中取默认值

* legendY - 数字/字符串，图例的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'，不传会从配置文件或主题中取默认值

* legendOrient - 字符串，图例朝向, horizontal -- 水平对齐，vertical -- 垂直对齐，默认：`horizontal`

* widthT - 字符串，图表宽度，默认：`870px`

* heightT - 字符串，图表高度，默认：`384px`

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