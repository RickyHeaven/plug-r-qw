<template>
  <div class="content">
    <div class="o-hd" style="margin-bottom:20px">
      <echart
        :data="DataOne"
        title = "柱状图"
        name="DataOneTotal"
        ref="DataOneTotal"
        widthT="80%"
        heightT="460px"
        :initData="true"
      ></echart>
      <echart
        :data="DataTwo"
        title = "折线图"
        name="DataTwoTotal"
        ref="DataTwoTotal"
        widthT="55%"
        heightT="360px"
        :initData="true"
      ></echart>
      <echart
        :data="DataThree"
        title = "饼状图"
        name="DataThreeTotal"
        ref="DataThreeTotal"
        widthT="40%"
        heightT="360px"
        :initData="true"
      ></echart>

      <!--这是各项单独配置方式，但还是推荐用data方式更友好-->
      <echart
        :data="{}"
        :title="DataFour.title"
        :legendShow="DataFour.legendShow"
        :legendX="DataFour.legendX"
        :legendY="DataFour.legendY"
        :subTitle="DataFour.subTitle"
        :yAxis="DataFour.yAxis"
        :xAxis="DataFour.xAxis"
        :series="DataFour.series"
        name="DataFourTotal"
        ref="DataFourTotal"
        widthT="calc(100% - 20px)"
        heightT="560px"
        :initData="true"
      ></echart>
    </div>
  </div>
</template>

<script>
  export default {
    name: "examplePage6",
    data() {
      return {

        DataOne: {
          series: {
            data: [500,200,100,15,60,450],
            type: 'bar'
          }
        },

        DataTwo: {
          series: [
            {
              data: [1,2,3,4,8,4,35,93,23],
              type: 'line'
            },
            {
              data: [52,21,5,150,123,61,200],
              type: 'line'
            }
            ]
        },

        DataThree: {
          series: {
            data: [
              {
                name: '北京',
                value: 150
              },
              {
                name: '重庆',
                value: 250
              },
              {
                name: '上海',
                value: 300
              }
            ],
            type: 'pie'
          }
        },

        DataFour:{
          title: '多功能统计',
          legendShow: true,
          legendX: 'right',
          legendY: 'bottom',
          subTitle: '多个图表',
          yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          xAxis: {
            type: 'value'
          },
          series: [
            {
              data: [1,2,3,4,8,4,35,93,23],
              type: 'line'
            },
            {
              data: [62,22,31,14,8,24,35,93,23],
              type: 'bar'
            },
            {
              data: [
                {
                  name: '北京',
                  value: 150
                },
                {
                  name: '重庆',
                  value: 250
                },
                {
                  name: '上海',
                  value: 300
                }
              ],
              type: 'pie'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .content{
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    background-color: #F9F9F9;
    overflow: hidden;
  }
  .echart-cont{
    float: left;
    margin: 0 20px 20px 0;
  }
</style>
