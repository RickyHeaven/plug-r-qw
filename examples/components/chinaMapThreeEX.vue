<template>
  <echart-map
      :title="title"
      :geoItemStyle="geoItemStyle"
      :mapLabel="mapLabel"
      :mapItemStyle="mapItemStyle"
      :seriesData="seriesData"
      name="china-map-three"
      ref="china-map-three"
      :widthT="widthT"
      :heightT="heightT"
  />
</template>

<script>
  //引入echarts对象
  import * as echarts from 'echarts'
  //引入地图JSON文件，资源来自依赖包
  import {china} from 'china-map-data'
  export default {
    name: "chinaMapThreeEX",
    props: {
      widthT: {
        type: String,
        default() {
          return '100%'
        }
      },
      heightT: {
        type: String,
        default() {
          return '100%'
        }
      }
    },
    data() {
      return {
        seriesData: [],
        HFData: []
      }
    },
    mounted() {
      this.seriesData = [
        {
          'name': '北京',
          'value': 200
        },
        {
          'name': '新疆',
          'value': 600
        },
        {
          'name': '重庆',
          'value': 800
        },
        {
          'name': '四川',
          'value': 1000
        }
      ]

      // 随便造点数据，可以在地图上显示的城市的坐标信息
      var seriesData = {
        '安徽省铜陵': [117.81154, 30.945515],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '贵阳': [106.6992, 26.7682],
        '杨凌': [109.1162, 34.2004],
        '深圳': [114.5435, 22.5439],
        '济南': [117.1582, 36.8701],
        '海口': [110.3893, 19.8516],
        '沈阳': [123.1238, 42.1216],
        '武汉': [114.3896, 30.6628],
        '红安': [114.23, 31.1],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '成都': [103.9526, 30.7617],
        '拉萨': [91.1865, 30.1465],
        '天津': [117.4219, 39.4189],
        '呼和浩特': [111.4124, 40.4901],
        '哈尔滨': [127.9688, 45.368],
        '北京': [116.4551, 40.2539],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '乌鲁木齐': [87.9236, 43.5883],
        '上海': [121.4648, 31.2891],
        '三亚': [109.5000, 18.2000],
        '重庆': [106.54041, 29.40268]
     }

     // 随便造点数据， 数据中name的城市名称必须与geoCoordMap中城市名称一致, 不然关联不上，重庆到各地区的线路
     this.HFData = [
         [{name: '重庆'}, {name: '长春',value: 66}],
         [{name: '重庆'}, {name: '长沙',value: 66}],
         [{name: '重庆'}, {name: '贵阳',value: 66}],
         [{name: '重庆'}, {name: '杨凌',value: 66}],
         [{name: '重庆'}, {name: '深圳',value: 66}],
         [{name: '重庆'}, {name: '济南',value: 66}],
         [{name: '重庆'}, { name: '海口',value: 66}],
         [{name: '重庆'}, {name: '沈阳',value: 66}],
         [{name: '重庆'}, {name: '武汉',value: 66}],
         [{name: '重庆'}, {name: '昆明',value: 66}],
         [{name: '重庆'}, {name: '重庆',value: 118}],
         [{name: '重庆'}, {name: '杭州',value: 66}],
         [{name: '重庆'}, {name: '成都',value: 66}],
         [{name: '重庆'}, {name: '拉萨',value: 66}],
         [{name: '重庆'}, {name: '天津',value: 66}],
         [{name: '重庆'}, {name: '呼和浩特',value: 66}],
         [{name: '重庆'}, {name: '哈尔滨',value: 66}],
         [{name: '重庆'}, {name: '北京',value: 66}],
         [{name: '重庆'}, {name: '南宁',value: 66}],
         [{name: '重庆'}, {name: '南昌',value: 66}],
         [{name: '重庆'}, {name: '乌鲁木齐',value: 66}],
         [{name: '重庆'}, {name: '上海',value: 66}]
       ]

        let planePath = 'arrow' // 箭头的svg
        let series = []
        let color = ['#fff', '#FFFFA8', '#46bee9']
        let convertData = (data)=> {
          let res = []
          for (let i = 0; i < data.length; i++) {
            let dataItem = data[i]
            let fromCoord = seriesData[dataItem[0].name]
            let toCoord = seriesData[dataItem[1].name]
            if (fromCoord && toCoord) {
              res.push([{
                coord: fromCoord
              },
              {
                coord: toCoord
              }])
            }
          }
          return res
        }

        // 遍历由合肥到其他城市的线路
        [['重庆', this.HFData]].forEach((item, i) => {
          // 配置
          series.push(
            {
              // 系列名称，用于tooltip的显示
              name: item[0],
              type: 'lines',
              zlevel: 1,
              // 用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
              // effect出发到目的地 的白色尾巴线条
              // 线特效的配置
              effect: {
                show: true,
                period: 6,
                // 特效动画的时间，单位为 s
                trailLength: 0.1,
                // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
                color: '#46bee9',
                // 移动箭头颜色
                symbol: planePath,
                symbolSize: 6 // 特效标记的大小
              },
              // lineStyle出发到目的地 的线条颜色
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 0,
                  curveness: 0.2 //幅度
                }
              },
              data: convertData(item[1]) //开始到结束数据
            },
            {
              //出发地信息
              name: item[0],
              type: 'lines',
              zlevel: 2,
              effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 6
              },
              lineStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FFFFA8' // 出发
                  },
                    {
                      offset: 1,
                      color: '#58B3CC ' // 结束 颜色
                    }], false),
                  width: 1.5,
                  opacity: 0.4,
                  curveness: 0.2
                }
              },
              data: convertData(item[1])
            },
            {
              // 目的地信息
              name: item[0],
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: (val) => {
                return val[2] / 8
              },
              itemStyle: {
                normal: {
                  color: color[i]
                }
              },
              data: item[1].map((dataItem) => {
                return {
                  name: dataItem[1].name,
                  value: seriesData[dataItem[1].name].concat([dataItem[1].value])
                }
              })
            })
      })
      this.$nextTick(()=>{
        //注册地图，由示例页面来处理JSON数据
        this.regionName('china')
        //渲染地图，由组件来处理逻辑
        this.$refs['china-map-three'].initEcharts("china", "中国")
      })
    },
    methods:{
      //注册地图JSON文件，由页面例子来处理
      regionName(name){
        echarts.registerMap(name,china)
      },
      //地图标题回调函数
      title(){
        return {
          text:'中华人民共和国',
          textStyle: {
            color: '#2C68FF',
            fontSize: 14
          },
          left: 'center',
          top: '22%'
        }
      },
      mapLabel(){
        return {
          normal: {
            show: true, //显示省份标签
            textStyle: {
              //省份标签字体颜色
              color: "#fff",
              fontSize: 10
            }
          },
          emphasis: { //对应的鼠标悬浮效果
            show: true,
            textStyle: {
              color: "#F53131"
            },
          }
        }
      },
      mapItemStyle(){
        return {
          normal: {
            borderWidth: .3,          //区域边框宽度
            areaColor: "rgba(27, 93, 226, .9)",     //区域颜色
            borderColor: '#edf2fa',   //区域边框颜色
          },
          emphasis: {
            borderWidth: .5,
            borderColor: '#4b0082',
            areaColor: "#ece39e",
            shadowOffsetX: 5,
            shadowOffsetY: 10,
            shadowBlur: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      },
      //地理颜色回调，可定义的颜色之多，请参考echarts文档
      geoItemStyle(){
        return {
          normal: {
            areaColor: '#0B46BD',     //区域色
            shadowBlur: 10,
            shadowColor: "#051433",   //阴影色
            shadowOffsetX: 12,
            shadowOffsetY: 18
          }
        }
      }
    }
  }
</script>