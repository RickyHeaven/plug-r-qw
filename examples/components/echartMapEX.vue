<template>
  <div class="examplePageL vh100">
    <showReadMe route-now="echartMap"/>
    <toHome/>
    <div class="map-one">
      <chinaMap />
    </div>
    <div class="map-two">
      <div class="map-bg"></div>
      <chinaMapTwo />
    </div>
    <div class="map-three">
      <beijingMap />
    </div>
    <div class="map-four">
      <div class="map-bg"></div>
      <worldMap />
    </div>
  </div>
</template>

<script>
  import chinaMap from './chinaMapEX'
  import chinaMapTwo from './chinaMapTwoEX'
  import beijingMap from './beijingMapEX'
  import worldMap from './worldMapEX'
  export default {
    name: "echartMapEX",
    components:{
      chinaMap,
      chinaMapTwo,
      beijingMap,
      worldMap
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    methods:{
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
    float: left
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
      z-index: 0
    }
  }
</style>
