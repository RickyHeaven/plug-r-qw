<template>
  <div class="examplePageL vh100">
    <showReadMe route-now="echartMap"/>
    <toHome/>
    <div class="map-one">
      <echart-map
          :title="titleOne"
          :tooltip="tooltip"
          name="china-map"
          ref="china-map"
          :btn-style="btnStyle"
          :seriesData="seriesData"
          :seriesDataPro="seriesDataPro"
          @on-click-map="onClickMap"
          :visualMapShow="true"
          :visualMapInverse="true"
          :visualMapFontSize="20"
          visualMapFontColor="#222"
          titleFontWeight="bold"
          visualMapLeft="30%"
          visualMaptop="bottom"
          :inRangeColor="['#dbfefe', '#1066d5']"
          widthT="100%"
          heightT="100%"
      />
    </div>
    <div class="map-two">
      <div class="map-bg"></div>
      <echart-map
          :title="titleTwo"
          :geoItemStyle="geoItemStyle"
          :mapLabel="mapLabel"
          :mapItemStyle="mapItemStyle"
          :seriesData="seriesDataTwo"
          scatterSymbol="arrow"
          name="china-map-two"
          ref="china-map-two"
          :inRangeColor="['#4b85fa', '#175ce5', '#0a2966']"
          widthT="100%"
          heightT="100%"
      />
    </div>
    <div class="map-three">
      <echart-map
          :title="titleThree"
          :mapItemStyle="mapItemStyleThree"
          :mapLabel="mapLabelThree"
          :tooltip="tooltipThree"
          name="beijing-map"
          ref="beijing-map"
          widthT="100%"
          heightT="100%"
      />
    </div>
    <div class="map-four">
      <div class="map-bg"></div>
      <echart-map
          :title="titleFour"
          :mapLabel="mapLabelFour"
          :mapItemStyle="mapItemStyleFour"
          :tooltip="tooltipFour"
          name="world-map"
          ref="world-map"
          widthT="100%"
          heightT="100%"
      />
    </div>
  </div>
</template>

<script>
  //引入echarts对象
  import echarts from "echarts"
  //引入地图JSON文件，资源来自依赖包
  import chinaMapData from 'china-map-data'
  export default {
    name: "echartMapEX",
    data() {
      return {
        seriesData: [],      //重构后地图的省级数据
        seriesDataPro: [],   //重构后地图的市区县数据
        toolTipData: [],     //后端返回的省级数据
        provinceData: [],    //后端返回的市区县数据
        seriesDataTwo: [],
        btnStyle: {          //返回按钮样式
          left: '45%',
          top: '50px'
        }
      }
    },
    mounted() {
      // 模拟后端返回的省份数据
      this.toolTipData = [
        {
        "provinceName": "北京",
        "provinceKey": 110000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 58,
        "totalPrice": 860448.7,
        "orderCount": 31744,
        "onlineCount": 0
      }, {
        "provinceName": "天津",
        "provinceKey": 120000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 74,
        "totalPrice": 697438.3,
        "orderCount": 30025,
        "onlineCount": 0
      }, {
        "provinceName": "河北",
        "provinceKey": 130000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 175,
        "totalPrice": 1051461.5,
        "orderCount": 50625,
        "onlineCount": 0
      }, {
        "provinceName": "山西",
        "provinceKey": 140000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 73,
        "totalPrice": 432680.2,
        "orderCount": 20427,
        "onlineCount": 0
      }, {
        "provinceName": "内蒙古",
        "provinceKey": 150000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 46,
        "totalPrice": 379952.5,
        "orderCount": 14585,
        "onlineCount": 0
      }, {
        "provinceName": "辽宁",
        "provinceKey": 210000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 74,
        "totalPrice": 543290.6,
        "orderCount": 27143,
        "onlineCount": 0
      }, {
        "provinceName": "吉林",
        "provinceKey": 220000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 25,
        "totalPrice": 234353.7,
        "orderCount": 11123,
        "onlineCount": 0
      }, {
        "provinceName": "黑龙江",
        "provinceKey": 230000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 25,
        "totalPrice": 152894.8,
        "orderCount": 6481,
        "onlineCount": 0
      }, {
        "provinceName": "上海",
        "provinceKey": 310000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 78,
        "totalPrice": 665877.5,
        "orderCount": 26753,
        "onlineCount": 0
      }, {
        "provinceName": "江苏",
        "provinceKey": 320000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 475,
        "totalPrice": 3302139.4,
        "orderCount": 158180,
        "onlineCount": 0
      }, {
        "provinceName": "浙江",
        "provinceKey": 330000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 332,
        "totalPrice": 2285259.3,
        "orderCount": 116344,
        "onlineCount": 0
      }, {
        "provinceName": "安徽",
        "provinceKey": 340000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 168,
        "totalPrice": 1081322.1,
        "orderCount": 57139,
        "onlineCount": 0
      }, {
        "provinceName": "福建",
        "provinceKey": 350000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 145,
        "totalPrice": 1352019.8,
        "orderCount": 65228,
        "onlineCount": 0
      }, {
        "provinceName": "江西",
        "provinceKey": 360000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 103,
        "totalPrice": 689353.7,
        "orderCount": 31822,
        "onlineCount": 0
      }, {
        "provinceName": "山东",
        "provinceKey": 370000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 198,
        "totalPrice": 1177320.9,
        "orderCount": 59966,
        "onlineCount": 0
      }, {
        "provinceName": "河南",
        "provinceKey": 410000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 184,
        "totalPrice": 953710.6,
        "orderCount": 52829,
        "onlineCount": 0
      }, {
        "provinceName": "湖北",
        "provinceKey": 420000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 125,
        "totalPrice": 890921.4,
        "orderCount": 46768,
        "onlineCount": 0
      }, {
        "provinceName": "湖南",
        "provinceKey": 430000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 111,
        "totalPrice": 1007182.7,
        "orderCount": 44094,
        "onlineCount": 0
      }, {
        "provinceName": "广东",
        "provinceKey": 440000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 384,
        "totalPrice": 3792306.1,
        "orderCount": 165774,
        "onlineCount": 0
      }, {
        "provinceName": "广西",
        "provinceKey": 450000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 194,
        "totalPrice": 1252955,
        "orderCount": 69882,
        "onlineCount": 0
      }, {
        "provinceName": "海南",
        "provinceKey": 460000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 58,
        "totalPrice": 617514,
        "orderCount": 33090,
        "onlineCount": 0
      }, {
        "provinceName": "重庆",
        "provinceKey": 500000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 35,
        "totalPrice": 468892.6,
        "orderCount": 20163,
        "onlineCount": 0
      }, {
        "provinceName": "四川",
        "provinceKey": 510000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 127,
        "totalPrice": 793622.7,
        "orderCount": 43625,
        "onlineCount": 0
      }, {
        "provinceName": "贵州",
        "provinceKey": 520000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 78,
        "totalPrice": 659747.2,
        "orderCount": 28817,
        "onlineCount": 0
      }, {
        "provinceName": "云南",
        "provinceKey": 530000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 87,
        "totalPrice": 657485.2,
        "orderCount": 30916,
        "onlineCount": 0
      }, {
        "provinceName": "西藏",
        "provinceKey": 540000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 5,
        "totalPrice": 106922.4,
        "orderCount": 2470,
        "onlineCount": 0
      }, {
        "provinceName": "陕西",
        "provinceKey": 610000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 65,
        "totalPrice": 589961.2,
        "orderCount": 27093,
        "onlineCount": 0
      }, {
        "provinceName": "甘肃",
        "provinceKey": 620000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 40,
        "totalPrice": 248209.2,
        "orderCount": 12390,
        "onlineCount": 0
      }, {
        "provinceName": "青海",
        "provinceKey": 630000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 3,
        "totalPrice": 33328.1,
        "orderCount": 1161,
        "onlineCount": 0
      }, {
        "provinceName": "宁夏",
        "provinceKey": 640000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 14,
        "totalPrice": 146590.7,
        "orderCount": 5240,
        "onlineCount": 0
      }, {
        "provinceName": "新疆",
        "provinceKey": 650000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 43,
        "totalPrice": 294423.4,
        "orderCount": 11741,
        "onlineCount": 0
      }]
      // 模拟后端返回的市区县数据，请求省市数据
      this.provinceData = [
        {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "乌鲁木齐市",
        "cityKey": 650100,
        "shopCount": 17,
        "totalPrice": 89429.1,
        "orderCount": 4019,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "克拉玛依市",
        "cityKey": 650200,
        "shopCount": 1,
        "totalPrice": 363.6,
        "orderCount": 17,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "昌吉回族自治州",
        "cityKey": 652300,
        "shopCount": 3,
        "totalPrice": 2203.7,
        "orderCount": 82,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "博尔塔拉蒙古自治州",
        "cityKey": 652700,
        "shopCount": 1,
        "totalPrice": 7327.7,
        "orderCount": 236,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "巴音郭楞蒙古自治州",
        "cityKey": 652800,
        "shopCount": 2,
        "totalPrice": 28768.4,
        "orderCount": 961,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "阿克苏地区",
        "cityKey": 652900,
        "shopCount": 5,
        "totalPrice": 78415.2,
        "orderCount": 3108,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "喀什地区",
        "cityKey": 653100,
        "shopCount": 4,
        "totalPrice": 38870.1,
        "orderCount": 1477,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "和田地区",
        "cityKey": 653200,
        "shopCount": 1,
        "totalPrice": 10488,
        "orderCount": 218,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "伊犁哈萨克自治州",
        "cityKey": 654000,
        "shopCount": 6,
        "totalPrice": 32864.2,
        "orderCount": 1363,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "塔城地区",
        "cityKey": 654200,
        "shopCount": 1,
        "totalPrice": 160,
        "orderCount": 5,
        "onlineCount": 0
      }, {
        "provinceName": null,
        "provinceKey": null,
        "cityName": "省直辖行政单位",
        "cityKey": 659000,
        "shopCount": 2,
        "totalPrice": 5533.4,
        "orderCount": 255,
        "onlineCount": 0
      }]
      for (let i = 0; i < this.toolTipData.length; i++) {
        this.seriesData[i] = {}
        this.seriesData[i].name = this.toolTipData[i].provinceName
        this.seriesData[i].value = this.toolTipData[i].shopCount
        this.seriesData[i].provinceKey = this.toolTipData[i].provinceKey
      }
      for (let i = 0; i < this.provinceData.length; i++) {
        this.seriesDataPro[i] = {}
        this.seriesDataPro[i].name = this.provinceData[i].cityName
        this.seriesDataPro[i].value = this.provinceData[i].shopCount
      }
      // 模拟第二种后端返回的数据
      this.seriesDataTwo = [
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
      this.$nextTick(()=>{
        //注册地图，由示例页面来处理JSON数据
        this.regionName('china')
        //渲染地图，由组件来处理逻辑
        this.$refs['china-map'].initEcharts("china", "中国")
        this.$refs['china-map-two'].initEcharts("china", "中国")
        this.regionName('beijing')
        this.$refs['beijing-map'].initEcharts("beijing", "北京")
        this.regionName('world')
        this.$refs['world-map'].initEcharts("world", "世界")
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
        switch (name) {
          case 'china':
            echarts.registerMap('china',chinaMapData.china)
            break
          case 'world':
            echarts.registerMap('world',chinaMapData.world)
            break
          case 'anhui':
            echarts.registerMap('anhui',chinaMapData.province.anhui)
            break
          case 'aomen':
            echarts.registerMap('aomen',chinaMapData.province.aomen)
            break
          case 'beijing':
            echarts.registerMap('beijing',chinaMapData.province.beijing)
            break
          case 'chongqing':
            echarts.registerMap('chongqing',chinaMapData.province.chongqing)
            break
          case 'fujian':
            echarts.registerMap('fujian',chinaMapData.province.fujian)
            break
          case 'gansu':
            echarts.registerMap('gansu',chinaMapData.province.gansu)
            break
          case 'guangdong':
            echarts.registerMap('guangdong',chinaMapData.province.guangdong)
            break
          case 'guangxi':
            echarts.registerMap('guangxi',chinaMapData.province.guangxi)
            break
          case 'guizhou':
            echarts.registerMap('guizhou',chinaMapData.province.guizhou)
            break
          case 'hainan':
            echarts.registerMap('hainan',chinaMapData.province.hainan)
            break
          case 'hebei':
            echarts.registerMap('hebei',chinaMapData.province.hebei)
            break
          case 'heilongjiang':
            echarts.registerMap('heilongjiang',chinaMapData.province.heilongjiang)
            break
          case 'henan':
            echarts.registerMap('henan',chinaMapData.province.henan)
            break
          case 'hubei':
            echarts.registerMap('hubei',chinaMapData.province.hubei)
            break
          case 'hunan':
            echarts.registerMap('hunan',chinaMapData.province.hunan)
            break
          case 'jiangsu':
            echarts.registerMap('jiangsu',chinaMapData.province.jiangsu)
            break
          case 'jiangxi':
            echarts.registerMap('jiangxi',chinaMapData.province.jiangxi)
            break
          case 'jilin':
            echarts.registerMap('jilin',chinaMapData.province.jilin)
            break
          case 'liaoning':
            echarts.registerMap('liaoning',chinaMapData.province.liaoning)
            break
          case 'neimenggu':
            echarts.registerMap('neimenggu',chinaMapData.province.neimenggu)
            break
          case 'ningxia':
            echarts.registerMap('ningxia',chinaMapData.province.ningxia)
            break
          case 'qinghai':
            echarts.registerMap('qinghai',chinaMapData.province.qinghai)
            break
          case 'shandong':
            echarts.registerMap('shandong',chinaMapData.province.shandong)
            break
          case 'shanghai':
            echarts.registerMap('shanghai',chinaMapData.province.shanghai)
            break
          case 'shanxi':
            echarts.registerMap('shanxi',chinaMapData.province.shanxi)
            break
          case 'shanxi1':
            echarts.registerMap('shanxi1',chinaMapData.province.shanxi1)
            break
          case 'sichuan':
            echarts.registerMap('sichuan',chinaMapData.province.sichuan)
            break
          case 'taiwan':
            echarts.registerMap('taiwan',chinaMapData.province.taiwan)
            break
          case 'tianjin':
            echarts.registerMap('tianjin',chinaMapData.province.tianjin)
            break
          case 'xianggang':
            echarts.registerMap('xianggang',chinaMapData.province.xianggang)
            break
          case 'xinjiang':
            echarts.registerMap('xinjiang',chinaMapData.province.xinjiang)
            break
          case 'xizang':
            echarts.registerMap('xizang',chinaMapData.province.xizang)
            break
          case 'yunnan':
            echarts.registerMap('yunnan',chinaMapData.province.yunnan)
            break
          case 'zhejiang':
            echarts.registerMap('zhejiang',chinaMapData.province.zhejiang)
            break
        }
      },
      //地图区域颜色回调函数
      mapItemStyleThree(){
        return {
          normal: {
            borderWidth: 1,           //区域边框宽度
            borderColor: '#000',      //区域边框颜色
            areaColor: "#edf2fa",     //区域颜色
          },
          emphasis: {
            borderWidth: 2,
            borderColor: '#9c9c9c',
            areaColor: "#74d24b"
          }
        }
      },
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
      mapItemStyleFour(){
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
      //地图标题回调函数
      titleOne(){
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
      titleTwo(){
        return {
          text:'自定义阴影遮罩标点地图样式',
          textStyle: {
            color: '#fff',
            fontSize: 28
          },
          left: 'center',
          top: '20px'
        }
      },
      titleThree(){
        return {
          text:'自定义显示指定地图区域（北京市）',
          textStyle: {
            color: '#000',
            fontSize: 28
          },
          left: 'center',
          top: '20px'
        }
      },
      titleFour(){
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
      mapLabelThree(){
        return {
          normal: {
            show: true, //显示省份标签
            textStyle: {
              //省份标签字体颜色
              color: "#323232",
              fontSize: 12
            }
          },
          emphasis: { //对应的鼠标悬浮效果
            show: true,
            textStyle: {
              color: "#3b7ec3"
            }
          }
        }
      },
      mapLabelFour(){
        return {
          normal: {
            show: false
          }
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
      //地图区域默认颜色回调，可定义的颜色之多，请参考echarts文档
      geoItemStyle(){
        return {
          normal: {
            //区域颜色没有值的时候默认颜色
            areaColor: '#edf2fa',
            shadowBlur: 10,
            shadowColor: "#051433",
            shadowOffsetX: 10,
            shadowOffsetY: 20
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
      tooltipThree(params){
        return '这是'+ params.seriesName+ '的' + params.name
      },
      tooltipFour(params){
        return params.name
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

<style scoped lang="less">
  .examplePageL{
    overflow-x: hidden;
    overflow-y: scroll
  }
  .map-one,.map-two,.map-three,.map-four{
    width: 50%;
    height: 93%;
    position: relative;
    float: left;
  }
  .map-two,.map-four{
    background: linear-gradient(45deg, #020d29, #030b33);
    .map-bg{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: radial-gradient(rgba(60,155,250,1), rgba(60,155,250,0), #030b33);
      opacity: .4;
      z-index: 0;
    }
  }
</style>
