<template>
  <div class="examplePageL vh100">
    <showReadMe route-now="echarts"/>
    <toHome/>
    <div class="content">
      <div class="o-hd" style="margin-bottom:20px">
        <!--普通折线图-->
        <echart
            :config="dataOne"
            name="dataOne"
            ref="dataOne"
            widthT="calc(50% - 20px)"
            heightT="360px"
        />
        <!--堆叠面积图-->
        <echart
            :config="dataTwo"
            name="dataTwo"
            ref="dataTwo"
            widthT="calc(50% - 20px)"
            heightT="360px"
        />
        <!--渐变堆叠面积图-->
        <echart
            :config="dataThree"
            name="dataThree"
            ref="dataThree"
            widthT="calc(50% - 20px)"
            heightT="360px"
        />
        <!--可动态控制显示垂直折线图-->
        <div class="setItem">
          <i @click="openSet()" class="iconfont icon-set"></i>
          <echart
              :config="dataFour"
              :name="showDataName"
              :ref="showDataName"
              widthT="100%"
              heightT="360px"
          />
        </div>
        <!--动态设置勾选弹框-->
        <Modal v-model="setModal" :mask-closable="false" @on-ok="defineSet">
          <div class="switch-cont">
            <div v-for="(item,index) in setList" :key="'line'+index" class="switch-li">
              <div class="txt">{{item.scales}}</div>
              <i-switch v-model="item.state" />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
  //自定义主题、特殊场景、二次渲染或者反复设置动态值时才建议引入echarts，通常的图表数据不需要再手动引入依赖
  import * as echarts from "echarts"

  export default {
    name: "echartLineEX",
    data() {
      return {
        dataOne: {},
        dataTwo: {},
        dataThree: {},
        dataFour: {},
        showData: [],                           //可控制的折线图数据
        showDataName: 'echartLineDataFour',     //可控制的折线图缓存名称
        setModal: false,                        //可控制的折线图弹框
        setList: []                             //可控制的折线图设置按钮列表
      }
    },
    mounted() {
      this.dataOne = {
        title: {
          text: '普通折线图'
        },
        tooltip: {  //提示框
          trigger: 'axis'
        },
        legend: { //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {  //调整图标在视窗的位置
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true  //grid 区域是否包含坐标轴的刻度标签
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      this.dataTwo = {
        title: {
          text: '堆叠面积图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {  //可供下载的按钮
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      this.dataThree = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '渐变堆叠面积图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(
                // 右/下/左/上四个方位起始位置，值为0~1
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: 'rgb(128, 255, 165)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)'
                  }
                ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(
                // 右/下/左/上四个方位起始位置，值为0~1
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: 'rgb(0, 221, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)'
                  }
                ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(
                // 右/下/左/上四个方位起始位置，值为0~1
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: 'rgb(55, 162, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(116, 21, 219)'
                  }
                ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
          },
          {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(
                // 右/下/左/上四个方位起始位置，值为0~1
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: 'rgb(255, 0, 135)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(135, 0, 157)'
                  }
                ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          },
          {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(
                // 右/下/左/上四个方位起始位置，值为0~1
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: 'rgb(255, 191, 0)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(224, 62, 76)'
                  }
                ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
          }
        ]
      }


      //模拟后端返回可动态控制显示的数据
      let datas = [
        {
          num: 15,
          scales: '0 km'
        },
        {
          num: -50,
          scales: '10 km'
        },
        {
          num: -56.5,
          scales: '20 km'
        },
        {
          num: -46.5,
          scales: '30 km'
        },
        {
          num: -22.1,
          scales: '40 km'
        },
        {
          num: -2.5,
          scales: '50 km'
        },
        {
          num: -27.7,
          scales: '60 km'
        },
        {
          num: -55.7,
          scales: '70 km'
        },
        {
          num: -76.5,
          scales: '80 km'
        }
      ]
      //设置缓存值状态
      this.setDataState(datas)
    },
    methods:{
      setDataState(datas){
        //这两个变量为特殊变量，列表会保存所有值，但是变量才是真正渲染图表的值，根据用户设置的state状态来确定是否赋值
        let Names = [],Nums = []
        //首先遍历接口返回的所有值
        for(let k = 0;k<datas.length;k++){
          //追加名称
          Names.push(datas[k].scales)
          //追加值
          Nums.push(datas[k].num)
          //追加状态全部为true
          datas[k].state = true
        }
        //查找local缓存里是否设置过，如果有，更改状态
        let localDatas = JSON.parse(localStorage.getItem(this.showDataName))
        //没有缓存或者手动清除了需要全部重新取值
        if(localDatas){
          //有缓存的话从缓存里取值和名称
          for(let j = 0;j<datas.length;j++){
            //通过二维数组查找状态是否设置过
            for(let p = 0;p<localDatas.length;p++){
              //获取缓存的状态
              if(datas[j].scales == localDatas[p].scales){
                datas[j].state = localDatas[p].state
                //必须状态为true才可以显示，没有删除渲染值
                if(!localDatas[p].state){
                  for(let n = 0;n<Names.length;n++){
                    if(Names[n] == localDatas[p].scales){
                      Names.splice(n,1)
                      Nums.splice(n,1)
                      break
                    }
                  }
                }
              }
            }
          }
        }
        //获取重构后的带状态的列表数据
        this.showData = datas
        //渲染单个图表
        this.dataFour = this.loadChart(Names,Nums)
      },
      openSet(){
        //获取列表返回值
        this.setList = this.showData
        //查询是否有缓存记录，没有的话从列表中取
        let local = JSON.parse(localStorage.getItem(this.showDataName))
        if(local){
          for(let i = 0;i<this.setList.length;i++){
            for(let j = 0;j<local.length;j++){
              if(this.setList[i].scales == local[j].scales){
                this.setList[i].state = local[j].state
                break
              }
            }
          }
        }
        //打开模态框
        this.setModal = true
      },
      //确认设置
      defineSet(){
        let names = [],nums = []
        for(let i=0;i<this.setList.length;i++){
          //有状态才保存值给变量
          if(this.setList[i].state){
            names.push((this.setList[i].scales))
            nums.push((this.setList[i].num))
          }
        }
        //重新渲染图表
        this.$nextTick(()=>{
          this.dataFour = this.loadChart(names,nums)
          //手动让图表自适应
          let myChart = echarts.init(document.getElementById(this.showDataName))
          myChart.resize()
        })
        //保存图表设置的配置缓存
        localStorage.setItem(this.showDataName,JSON.stringify(this.setList))
      },
      loadChart(Names,Nums){
        let chart = {
          title: {
            text: '可动态控制显示垂直折线图'
          },
          legend: {
            data: ['Altitude (km) vs. temperature (°C)']
          },
          tooltip: {
            trigger: 'axis',
            formatter: 'Temperature : <br/>{b} : {c}°C'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          yAxis: {
            type: 'category',
            axisLine: { onZero: false },
            axisLabel: {
              formatter: '{value}'
            },
            boundaryGap: false,
            data: Names
          },
          series: [
            {
              name: 'Altitude (km) vs. temperature (°C)',
              type: 'line',
              symbolSize: 10,
              symbol: 'circle',
              smooth: true,
              lineStyle: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.3)',
                shadowBlur: 10,
                shadowOffsetY: 8
              },
              data: Nums
            }
          ]
        }
        return chart
      }
    }
  }
</script>

<style scoped lang="less">
  .examplePageL{
    background-color: #F9F9F9;
  }
  .content{
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    overflow: hidden
  }
  .echart-cont{
    float: left;
    margin: 0 20px 60px 0
  }
  .setItem{
    position: relative;
    overflow: hidden;
    float: left;
    width: 50%;
    .iconfont{
      position: absolute;
      right: 8%;
      top: 0;
      font-size: 28px;
      cursor: pointer;
      z-index: 101;
    }
  }
  .switch-cont{
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 30px auto 0;
    .switch-li{
      height: 35px;
      line-height: 35px;
      float: left;
      margin-bottom: 10px;
      width: 50%;
      overflow: hidden;
      .txt{
        color: #000000;
        font-size: 14px;
        margin-right: 10px;
        float: left;
        width: 60%;
      }
    }
  }
</style>
