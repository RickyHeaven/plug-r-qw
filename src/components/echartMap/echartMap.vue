<!--
    @created 2022.5.6
    @author - XP email:13638232495@139.com
    @description echart地图组件
-->
<template>
  <div class="echart-main" :style="{width:widthT,height:heightT}">
    <Button @click="oback" v-show="back" id="back" class="hidden" type="primary">返回全国</Button>
    <div class="echart-map" :id="name"></div>
  </div>
</template>
<script>
  let provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
  let provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];

  export default {
    name: 'echartMap',
    props: {
      name: {                   //地图名称，必传
        type: String,
        default: ''
      },
      tooltip: Function,        //工具提示框回调函数
      geoItemStyle: Function,   //地图区域默认颜色回调函数
      title: Function,          //标题回调函数
      mapLabel: Function,       //地图区域标签颜色回调函数
      maxSize4Pin: {            //侧边最大值
        type: Number,
        default: 40
      },
      minSize4Pin: {            //侧边最小值
        type: Number,
        default: 30
      },
      seriesData: Array,        //省级数据
      seriesDataPro: Array,     //市区县数据
      region: {                 //地图json文件，不传默认为中国
        type: String,
        default: 'china'
      },
      widthT: {                 //you know
        type: String,
        default: '870px'
      },
      heightT: {                //you know
        type: String,
        default: '384px'
      },
      inRangeColor: Array,     //从最大值到最小值的区域颜色
      visualMapFontColor: String,       //视觉映射字体颜色
      visualMapFontSize: Number,        //视觉映射字体大小
      visualMapFontWeight: String,      //视觉映射字体粗细
      visualMapFontBorderColor: String, //视觉映射字体描边颜色
      visualMapFontBorderWidth: Number, //视觉映射字体描边粗细
      visualMapShow:{             //视觉映射组件，默认不显示
        type: Boolean,
        default: false
      },
      visualMapOrient: {      //如何放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）。
        type: String,
        default: 'horizontal'
      },
      visualMapSeriesIndex: { //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
        type: Number,
        default: 1
      },
      visualMapHeight: {         //视觉映射组件高度
        type: Number,
        default: null
      },
      visualMapWidth: {         //视觉映射组件宽度
        type: Number,
        default: null
      },
      visualMapInverse: {        //是否反转 visualMap 组件。默认false
        type: Boolean,
        default: false
      },
      visualMapLeft:{             //视觉映射组件距离左边位置，默认5%
        type: String,
        default: '5%'
      },
      visualMapTop:{             //视觉映射组件距离头部位置，默认95%
        type: String,
        default: '95%'
      }
    },
    data() {
      return {
        mapName:'china',       //地域名称
        myChart: null,         //地图对象
        back: false            //返回按钮是否显示的状态
      }
    },
    mounted() {
      //实例化DOM元素（ID,国家JSON文件）
      this.myChart = window.$echarts.init(document.getElementById(this.name),
        this.region || window.echartConfig && window.echartConfig.region)
      // 全国时，添加click 进入省级
      let me = this
      me.myChart.on('click', (param)=> {
        if (param.data && param.data.provinceKey) {
          if (me.seriesDataPro.length) {
            //显示返回按钮
            me.back = true
            // 遍历取到provincesText 中的下标  去拿到对应的省js
            for (let i = 0; i < provincesText.length; i++) {
              if (param.name === provincesText[i]) {
                me.mapName = provinces[i]
                //显示对应省份的方法
                me.initEcharts(provinces[i],provincesText[i])
                break;
              }
            }
          }
        }
      })
      //自适应样式
      if (window.echartResizeMJ === undefined) {
        window.echartResizeMJ = {}
      }
      if (!window.echartResizeMJ[me.name]) {
        let temp = window.onresize
        if (temp) {
          window.onresize = function () {
            temp()
            me.myChart.resize()
            window.echartResizeMJ[me.name] = true
          }
        }
        else {
          window.onresize = function () {
            me.myChart.resize()
            window.echartResizeMJ[me.name] = true
          }
        }
      }
    },
    methods: {
      // 加载地图实例化内容结构，canvas渲染基于echarts技术，数据结构基于高德地图技术
      initEcharts(pName, Chinese_) {
        //事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
        let me = this
        //渲染在地图上的数据
        let tmpSeriesData = pName === "china" ? this.seriesData : this.seriesDataPro
        //地图款式，从中国精确到省份
        let url = pName === "china" ? 'map/china/china.json': 'map/china/province/'+ pName + '.json'
        /** 动态加载地图的json文件 */
        me.$fetch.get(location.pathname + url).then(res => {
          if (res) {
            //注册json文件到echarts算法
            window.$echarts.registerMap(pName, res)
            //定义侧边滑动的最大值和最小值，根据返回的数据来
            let max = Math.max.apply(Math, tmpSeriesData.map(function(o) {
              return o.value
            })), min = 0
            // 指定地图的配置项和数据
            let option = {
              //标题
              title: me.title(),
              tooltip: {
                trigger: 'item',
                // 鼠标滑过显示的数据
                formatter: (params) => {
                  //回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
                  return me.tooltip(params)
                }
              },
              //视觉映射组件
              visualMap: {
                show: me.visualMapShow,
                min: min,
                max: max,                          //侧边滑动的最大值，从数据中获取
                left: me.visualMapLeft,            //组件位置
                top: me.visualMapTop,              //组件位置
                inverse: me.visualMapInverse,      //是否反转 visualMap 组件
                itemHeight:me.visualMapHeight,     //图形的高度，即长条的高度
                itemWidth: me.visualMapWidth,      //图形的宽度，即长条的高度
                text: ['高', '低'],                //文本，默认为数值文本
                textStyle: {                      //字体样式
                  color: me.visualMapFontColor,
                  fontSize: me.visualMapFontSize,
                  fontWeight: me.visualMapFontWeight,
                  textBorderColor: me.visualMapFontBorderColor,
                  textBorderWidth: me.visualMapFontBorderWidth
                },
                calculable: false,                        //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
                seriesIndex: me.visualMapSeriesIndex,     //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
                orient: me.visualMapOrient,               //如何放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）。
                inRange: {
                  color: me.inRangeColor                  //范围区域颜色
                }
              },
              geo: {
                show: true,
                map: pName,
                roam: false,
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false
                  }
                },
                itemStyle: me.geoItemStyle()    //默认区域颜色，因定制化的可能性较多，由回调函数执行
              },
              series: [
                {
                  /**
                   地图区域颜色，属于echart散点（气泡）图。直角坐标系上的散点图可以用来展现数据的 x，y 之间的关系，
                   如果数据项有多个维度，其它维度的值可以通过不同大小的 symbol 展现成气泡图，也可以用颜色来表现。
                   这些可以配合 visualMap 组件完成
                   注意scatter有先后优先级顺序！
                   **/
                  name: '散点',
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  data: tmpSeriesData,
                  symbolSize: '1',
                  label: {
                    normal: {
                      show: false,
                      formatter: '{b}',
                      position: 'right'
                    },
                    emphasis: {
                      show: false
                    }
                  }
                },
                {
                  name: Chinese_ || pName,
                  type: 'map',
                  mapType: pName,
                  roam: false, //是否开启鼠标缩放和平移漫游
                  data: tmpSeriesData,
                  selectedMode: 'single',
                  label: me.mapLabel(),
                  itemStyle: {
                    normal: {
                      borderWidth: .5, //区域边框宽度
                      borderColor: '#0550c3', //区域边框颜色
                      areaColor: "#0b7e9e", //区域颜色
                    },
                    emphasis: {
                      borderWidth: .5,
                      borderColor: '#4b0082',
                      areaColor: "#ece39e",
                    }
                  }
                },
                {
                  /**
                   地图标点，属于echart散点（气泡）图。直角坐标系上的散点图可以用来展现数据的 x，y 之间的关系，
                   如果数据项有多个维度，其它维度的值可以通过不同大小的 symbol 展现成气泡图，也可以用颜色来表现。
                   这些可以配合 visualMap 组件完成
                   注意scatter有先后优先级顺序！
                   **/
                  name: '点',
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  //气泡
                  symbol: 'pin',
                  symbolSize: function(val) {
                    let a = (me.maxSize4Pin - me.minSize4Pin) / (max - min)
                    let b = me.maxSize4Pin - a * max
                    return a * val[2] + b
                  },
                  label: {
                    normal: {
                      show: true,
                      formatter: function(params) {
                        return params.data.value[2]
                      },
                      textStyle: {
                        color: '#fff',
                        fontSize: 9
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      //标点颜色
                      color: '#F62157'
                    }
                  },
                  zlevel: 6,
                  data: this.convertData(me.seriesData)
                },
              ]
            }
            // 使用刚指定的配置项和数据显示图表。
            me.myChart.setOption(option)
          }
        })
      },
      //返回地域事件
      oback(){
        //隐藏返回按钮
        this.back = false
        this.mapName = 'china'
        this.initEcharts("china", "中国")
      },
      // 用名称获取经纬度
      getGeoCoordMap(name) {
        name = name ? name : 'china'
        // 获取地图数据对象
        let geoCoordMap = {}
        // loading start
        this.myChart.showLoading()
        let mapFeatures = window.$echarts.getMap(name).geoJson.features
        // loading end
        this.myChart.hideLoading()
        mapFeatures.forEach(function(v) {
          // 地区名称
          let name = v.properties.name
          // 地区经纬度
          geoCoordMap[name] = v.properties.cp
        })
        return geoCoordMap
      },
      // 转换数据用于标记，有值的情况下才可以标记
      convertData(data) {
        let geoCoordMap = this.getGeoCoordMap(this.mapName)
        let res = []
        for (let i = 0; i < data.length; i++) {
          // 数据的名字对应的经纬度
          let geoCoord = geoCoordMap[data[i].name]
          // 如果数据data对应上，
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
    }
  }
</script>
<style scoped lang="less">
  .echart-main{
    overflow: hidden;
    position: relative;
    .echart-map{
      position: absolute;
      width: 100%;
      height: 100%
    }
    #back{
      position:absolute;
      top:10px;
      left:0;
      cursor:pointer;
      z-index: 101;
    }
  }
</style>