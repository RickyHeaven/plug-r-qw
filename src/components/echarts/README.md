### echarts 图表组件

### echarts 介绍
echarts，一个使用 JavaScript 实现的开源可视化库。

可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等）。

底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

echarts 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图。

其他功能如地理数据可视化的地图、热力图、线图，关系数据可视化的关系图、旭日图，多维数据可视化的平行坐标。

还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。

### 属性
* params - 接口参数

* config - 实例化对象的全局配置，配置后将无视下面的规则覆盖整个图表，多用于复杂的图表统计

* url - 拉取数据的接口地址

* data - 图表默认数据，没有url请求可以展示静态数据

* yAxis - Y轴数据

* xAxis - X轴数据

* tooltip - 提示框，鼠标悬浮交互时的信息提示

* series - 图表内容

* theme - 图表主题，不传为默认的设计稿风格

* name - 图表名称，必传

* title - 图表标题

* titleColor - 标题颜色

* titleFontSize - 标题字体大小

* titleFontWeight - 标题字体粗细

* titleX - 标题的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'

* titleY - 标题的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'

* subTitle - 图表副标题

* subTitleColor - 副标题颜色

* subTitleFontSize - 副标题字体大小

* legendShow - 是否显示图例，默认为显示

* legendType - 图例类型，'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用

* legendColor - 图例颜色

* legendFontSize - 图例字体大小

* legendX - 图例的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'

* legendY - 图例的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'

* legendOrient - 图例朝向, horizontal -- 水平对齐，vertical -- 垂直对齐

* widthT - 图表宽度

* heightT - 图表高度

### 方法
* time-line-change 时间轴中的时间点改变后的事件,回调为索引值

* series-bar-click 回调当前点击的图表值

### 注意
1、图表对象实例化必须要有独一无二的ID和ref名称

2、做响应式开发图表，宽度不要定死，布局可以从父级来进行调整