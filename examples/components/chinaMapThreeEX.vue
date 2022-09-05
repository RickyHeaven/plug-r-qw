<template>
  <echart-map
      :title="title"
      :geoItemStyle="geoItemStyle"
      :mapLabel="mapLabel"
      name="china-map-three"
      ref="china-map-three"
      :widthT="widthT"
      :heightT="heightT"
      map-type="migration"
      :migrationConfig="migrationConfig"
      :scatterTooltip="scatterTooltip"
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
        migrationConfig: {
          lnglatData: {
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
          },
          HFData: [            //关联的城市数据
            [{name: '重庆'}, {name: '长春',value: 66}],
            [{name: '重庆'}, {name: '长沙',value: 66}],
            [{name: '重庆'}, {name: '贵阳',value: 66}],
            [{name: '重庆'}, {name: '杨凌',value: 66}],
            [{name: '重庆'}, {name: '深圳',value: 66}],
            [{name: '重庆'}, {name: '济南',value: 66}],
            [{name: '重庆'}, {name: '海口',value: 66}],
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
        }
      }
    },
    mounted() {
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
      scatterTooltip(params){
        //params返回数组形式，内容分别是经度、维度、值
        return params.data.name + '：' + params.data.value[2]
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
      //地理颜色回调，可定义的颜色之多，请参考echarts文档
      geoItemStyle(){
        return {
          normal: {
            areaColor: '#0B46BD',
            borderColor: '#1a8ce9'
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#0066ba',
            areaColor: "#0494e1",
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    }
  }
</script>