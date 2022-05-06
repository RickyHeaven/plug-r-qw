<template>
  <div class="examplePageL vh100">
    <showReadMe route-now="echarts"/>
    <toHome/>
    <div class="content">
      <div class="o-hd" style="margin-bottom:20px">
        <!--普通圆环饼状图-->
        <echart
            :config="dataOne"
            name="dataOne"
            ref="dataOne"
            widthT="calc(50% - 20px)"
            heightT="720px"
        />
        <!--南丁格尔玫瑰图并且可以动态设置数据图-->
        <div class="setItem">
          <i @click="openSet()" class="iconfont icon-set"></i>
          <echart
              :config="dataTwo"
              name="dataTwo"
              ref="dataTwo"
              widthT="100%"
              heightT="720px"
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
  export default {
    name: "echartPieEX",
    data() {
      return {
        dataOne: {},
        dataTwo: {},
        showData: [],                           //可控制的饼状图数据
        showDataName: 'echartfPieDataTwo',      //可控制的饼状图缓存名称
        setModal: false,                        //可控制的饼状图弹框
        setList: []                             //可控制的饼状图设置按钮列表
      }
    },
    mounted() {
      this.dataOne = {
        title: {
          text: '普通圆环饼状图'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
      //模拟后端返回可动态控制显示的数据
      let datas = [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
      //设置缓存值状态
      this.setDataState(datas)
    },
    methods:{
      setDataState(datas){
        //这个为特殊变量，列表会保存所有值，但是变量才是真正渲染图表的值，根据用户设置的state状态来确定是否赋值
        let showData = []
        //首先查找local缓存里是否设置过，缓存名称可以是从接口里取也可以是动态设置
        let localDatas = JSON.parse(localStorage.getItem(this.showDataName))
        //没有缓存或者手动清除了需要全部重新取值
        if(!localDatas){
          for(let k = 0;k<datas.length;k++){
            showData.push({
              name: datas[k].name,
              value: datas[k].value
            })
            //追加状态全部为true
            datas[k].state = true
          }
        }else{
          //有缓存的话从缓存里取值和名称
          for(let j = 0;j<localDatas.length;j++){
            //获取缓存的状态
            if(localDatas[j].name == datas[j].name){
              datas[j].state = localDatas[j].state
            }
            //必须状态为true才追加
            if(datas[j].state){
              showData.push({
                name: datas[j].name,
                value: datas[j].value
              })
            }
          }
        }
        //获取重构后的带状态的列表数据
        this.showData = datas
        //渲染单个图表
        this.dataTwo = this.loadChart(showData)
      },
      openSet(){
        //查询是否有缓存记录，没有的话从列表中取
        let local = JSON.parse(localStorage.getItem(this.showDataName))
        if(local){
          this.setList = local
        }else{
          this.setList = this.showData
        }
        //打开模态框
        this.setModal = true
      },
      //确认设置
      defineSet(){
        let showData = []
        for(let i=0;i<this.setList.length;i++){
          //有状态才保存值给变量
          if(this.setList[i].state){
            showData.push({
              name: this.setList[i].name,
              value: this.setList[i].value
            })
          }
        }
        //重新渲染图表
        this.$nextTick(()=>{
          this.dataTwo = this.loadChart(showData)
          //手动让图表自适应
          let myChart = window.$echarts.init(document.getElementById(this.showDataName))
          myChart.resize()
        })
        //保存图表设置的配置缓存
        localStorage.setItem(this.showDataName,JSON.stringify(this.setList))
      },
      loadChart(data){
        let chart = {
          title: {
            text: '南丁格尔玫瑰图并且可以动态设置数据'
          },
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: data
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
      right: 10%;
      top: -5px;
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
