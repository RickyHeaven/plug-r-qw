<template>
  <div class="examplePageL vh100">
    <showReadMe route-now="echarts"/>
    <toHome/>
    <div class="content">
      <div class="o-hd" style="margin-bottom:20px">
        <!--普通柱状图-->
        <echart
            :config="dataOne"
            name="dataOne"
            ref="dataOne"
            widthT="calc(50% - 20px)"
            heightT="360px"
        />
        <!--交错正负轴标签图-->
        <echart
            :config="dataTwo"
            name="dataTwo"
            ref="dataTwo"
            widthT="calc(50% - 20px)"
            heightT="360px"
        />
        <!--堆叠条形图-->
        <echart
            :config="dataThree"
            name="dataThree"
            ref="dataThree"
            widthT="calc(50% - 20px)"
            heightT="360px"
        />
        <!--刻度与标签对齐并且可以动态设置数据图-->
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
              <div class="txt">{{item.name}}</div>
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
  import echarts from "echarts"

  export default {
    name: "echartBarEX",
    data() {
      return {
        dataOne: {},
        dataTwo: {},
        dataThree: {},
        dataFour: {},
        showData: [],                           //可控制的饼状图数据
        showDataName: 'echartfBarDataFour',     //可控制的饼状图缓存名称
        setModal: false,                        //可控制的饼状图弹框
        setList: []                             //可控制的饼状图设置按钮列表
      }
    },
    mounted() {
      this.dataOne = {
        title: {
          text: '带背景色加自定义单个柱子颜色普通柱状图'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              200,
              {
                value: 500,
                itemStyle: {
                  color: '#a90000'
                }
              },
              80,
              70,
              110,
              130
            ],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
      this.dataTwo = {
        title: {
          text: '交错正负轴标签图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 80,
          bottom: 30
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
            'ten',
            'nine',
            'eight',
            'seven',
            'six',
            'five',
            'four',
            'three',
            'two',
            'one'
          ]
        },
        series: [
          {
            name: 'Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              formatter: '{b}'
            },
            data: [
              { value: -0.07, label: 'right' },
              { value: -0.09, label: 'right' },
              0.2,
              0.44,
              { value: -0.23, label: 'right' },
              0.08,
              { value: -0.17, label: 'right' },
              0.47,
              { value: -0.36, label: 'right' },
              0.18
            ]
          }
        ]
      }
      this.dataThree = {
        title: {
          text: '堆叠条形图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      }


      //模拟后端返回可动态控制显示的数据
      let datas = [
        {
          num: 10,
          name: 'Mon'
        },
        {
          num: 52,
          name: 'Tue'
        },
        {
          num: 200,
          name: 'Wed'
        },
        {
          num: 334,
          name: 'Thu'
        },
        {
          num: 390,
          name: 'Fri'
        },
        {
          num: 330,
          name: 'Sat'
        },
        {
          num: 220,
          name: 'Sun'
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
          Names.push(datas[k].name)
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
              if(datas[j].name == localDatas[p].name){
                datas[j].state = localDatas[p].state
                //必须状态为true才可以显示，没有删除渲染值
                if(!localDatas[p].state){
                  for(let n = 0;n<Names.length;n++){
                    if(Names[n] == localDatas[p].name){
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
              if(this.setList[i].name == local[j].name){
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
            names.push((this.setList[i].name))
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
      loadChart(names,nums){
        let chart = {
          title: {
            text: '刻度与标签对齐并且可以动态设置数据图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
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
              data: names,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'Direct',
              type: 'bar',
              barWidth: '60%',
              data: nums
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
