<template>
  <echart-map
      :title="title"
      :tooltip="tooltip"
      @on-click-map="onClickMap"
      name="china-map"
      ref="china-map"
      :btn-style="btnStyle"
      :seriesData="seriesData"
      :seriesDataPro="seriesDataPro"
      :visualMapShow="true"
      :visualMapInverse="true"
      visualMapLeft="30%"
      visualMapTop="bottom"
      :inRangeColor="['#dbfefe', '#1066d5']"
      widthT="100%"
      heightT="100%"
      :maxSize4Pin="50"
      :minSize4Pin="30"
      :roam="false"
  />
</template>

<script>
  //引入echarts对象
  import * as echarts from 'echarts'
  //引入地图JSON文件，资源来自依赖包
  import {china,province} from 'china-map-data'
  //引入模拟后端返回的数据
  export default {
    name: "chinaMapEX",
    data() {
      return {
        seriesData: [],      //重构后地图的省级数据
        seriesDataPro: [],   //重构后地图的市区县数据
        toolTipData: [],     //后端返回的省级数据
        provinceData: [],    //后端返回的市区县数据
        btnStyle: {          //返回按钮样式
          left: '45%',
          top: '50px'
        }
      }
    },
    created() {
      // 模拟后端返回的省份数据
      this.$fetch.get('testData/toolTipData.json').then(r => {
        this.toolTipData = r
        for (let i = 0; i < this.toolTipData.length; i++) {
          this.seriesData[i] = {}
          this.seriesData[i].name = this.toolTipData[i].provinceName
          this.seriesData[i].value = this.toolTipData[i].shopCount
          this.seriesData[i].provinceKey = this.toolTipData[i].provinceKey
        }
      })
      // 模拟后端返回的市区县数据，请求省市数据
      this.$fetch.get('testData/provinceData.json').then(r => {
        this.provinceData = r
        for (let i = 0; i < this.provinceData.length; i++) {
          this.seriesDataPro[i] = {}
          this.seriesDataPro[i].name = this.provinceData[i].cityName
          this.seriesDataPro[i].value = this.provinceData[i].shopCount
        }
      })
    },
    mounted() {
      this.$nextTick(()=>{
        //注册地图，由示例页面来处理JSON数据
        this.regionName('china')
        //渲染地图，由组件来处理逻辑
        this.$refs['china-map'].initEcharts("china", "中国")
      })
    },
    methods:{
      //点击地图触发所点击的区域是哪个，针对性渲染
      onClickMap(name,txt){
        this.regionName(name)
        this.$refs['china-map'].initEcharts(name, txt)
      },
      //注册地图JSON文件，由页面例子来处理
      regionName(name){
        if(name == 'china'){
          echarts.registerMap(name,china)
        }else{
          echarts.registerMap(name,province[name])
        }
      },
      //地图区域颜色回调函数
      mapItemStyle(){
        return {
          normal: {
            borderWidth: .4,          //区域边框宽度
            borderColor: '#62aef5',   //区域边框颜色
            areaColor: "#edf2fa",     //区域颜色
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
      //地图标题回调函数
      title(){
        return {
          text:'中国地图产品销售量并包含市区县级',
          textStyle: {
            color: '#333',
            fontSize: 30,
            fontWeight: 'bold'
          },
          left: 'center',
          top: 'top'
        }
      },
      mapLabel(){
        return {
          normal: {
            show: true, //显示省份标签
            textStyle: {
              //省份标签字体颜色
              color: "#323232",
              textBorderColor: '#fff',
              textBorderWidth: 2
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
      //工具提示框回调
      tooltip(params){
       let mapName = this.$refs['china-map'].mapName
       let tmp = mapName === "china" ? this.toolTipData : this.provinceData
       let toolTiphtml = ''
       if (mapName === "china") {
         for (let i = 0; i < tmp.length; i++) {
           if (params.name == tmp[i].provinceName) {
             toolTiphtml += tmp[i].provinceName + '<br>销售额：' + this.unitConvert(tmp[i].totalPrice) + '<br>订单数：' + tmp[i].orderCount + '单' + '<br>门店数：' + tmp[i].shopCount
           }
         }
         return toolTiphtml
       } else {
         for (let i = 0; i < tmp.length; i++) {
           if (params.name == tmp[i].cityName) {
             toolTiphtml += tmp[i].cityName + '<br>销售额：' + this.unitConvert(tmp[i].totalPrice) + '<br>订单数：' + tmp[i].orderCount + '单' + '<br>门店数：' + tmp[i].shopCount
           }
         }
         return toolTiphtml
       }
      },
      // 金额转换万字单位 start
      unitConvert(num) {
        if (num) {
          let moneyUnits = ["", "万"],
            dividend = 10000,
            curentNum = num, //转换数字
            curentUnit = moneyUnits[0] //转换单位
          for (let i = 0; i < 2; i++) {
            curentUnit = moneyUnits[i];
            if (this.strNumSize(curentNum) < 5) {
              return num;
            }
          }
          curentNum = curentNum / dividend;
          let m = {
            num: 0,
            unit: ""
          }
          m.num = curentNum.toFixed(2)
          m.unit = curentUnit
          return m.num + m.unit
        }
      },
      strNumSize(tempNum) {
        let stringNum = tempNum.toString()
        let index = stringNum.indexOf(".")
        let newNum = stringNum
        if (index != -1) {
          newNum = stringNum.substring(0, index)
        }
        return newNum.length
      }
    }
  }
</script>