<template>
  <echart-map
      :title="title"
      :mapLabel="mapLabel"
      :mapItemStyle="mapItemStyle"
      :tooltip="tooltip"
      name="world-map"
      ref="world-map"
      widthT="100%"
      heightT="100%"
      :roam="false"
  />
</template>

<script>
  //引入echarts对象
  import * as echarts from 'echarts'
  //引入地图JSON文件，资源来自依赖包
  import {world} from 'china-map-data'
  export default {
    name: "worldMapEX",
    data() {
      return {

      }
    },
    mounted() {
      this.$nextTick(()=>{
        //注册地图，由示例页面来处理JSON数据
        this.regionName('world')
        //渲染地图，由组件来处理逻辑
        this.$refs['world-map'].initEcharts("world", "世界")
      })
    },
    methods:{
      //注册地图JSON文件，由页面例子来处理
      regionName(name){
        echarts.registerMap(name,world)
      },
      //地图区域颜色回调函数
      mapItemStyle(){
        return {
          normal: {
            borderWidth: .4,          //区域边框宽度
            borderColor: '#0550c3',   //区域边框颜色
            areaColor: "#41a4d7",     //区域颜色
          },
          emphasis: {
            borderWidth: .5,
            borderColor: '#dd9023',
            areaColor: "#ece39e",
            shadowOffsetX: 5,
            shadowOffsetY: 10,
            shadowBlur: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      },
      title(){
        return {
          text:'世界地图',
          textStyle: {
            color: '#fff',
            fontSize: 28
          },
          left: 'center',
          top: '10%'
        }
      },
      //地图区域标签默认颜色回调，可定义的颜色之多，请参考echarts文档
      mapLabel(){
        return {
          normal: {
            show: false
          }
        }
      },
      //工具提示框回调
      tooltip(params){
        return params.name
      }
    }
  }
</script>
