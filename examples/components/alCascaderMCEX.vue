<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <div class="boxTM middleE">
      <wellCard title="3级（level:2)常用">
        <div class="boxInnerSC">
          行政区域：
          <alCascaderMC v-model="value" class="alAK" @on-name-change="handleChange"/>
          <p class="msgD">组件值： {{value}}</p>
        </div>
      </wellCard>
    </div>
    <div class="boxTM">
      <wellCard title="1级（level:0)">
        <div class="boxInnerSC">
          行政区域：
          <alCascaderMC v-model="value2" class="alAK" :level="0"/>
          <p class="msgD">组件值： {{value2}}</p>
        </div>
      </wellCard>
    </div>
    <div class="boxTM">
      <wellCard title="2级（level:1)">
        <div class="boxInnerSC">
          行政区域：
          <alCascaderMC v-model="value3" class="alAK" level="1"/>
          <p class="msgD">组件值： {{value3}}</p>
        </div>
      </wellCard>
    </div>
    <div class="boxTM middleE">
      <wellCard title="外部清空">
        <div class="boxInnerSC">
          行政区域：
          <alCascaderMC v-model="value5" class="alAK shortN" level="2"/>
          <Button @click="value5 = null">清空</Button>
          <p class="msgD">组件值： {{value5}}</p>
        </div>
      </wellCard>
    </div>
    <div class="boxTM middleF">
      <wellCard title="点击即选中">
        <div class="boxInnerSC">
          行政区域：
          <alCascaderMC v-model="value6" class="alAK shortN" change-on-select/>
          <p class="msgD">组件值： {{value6}}</p>
        </div>
      </wellCard>
    </div>
  </div>
</template>

<script>
  export default {
    name: "alCascaderMCEX",
    data() {
      return {
        value: null,
        value2: '重庆市',
        value3: '山西省/大同市',
        value5: 500112000000,
        value6: null
      }
    },
    methods:{
      handleChange(data){
        console.log('name change',data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .boxTM {
    width: 300px;
    display: inline-block;
    margin: 0 10px 10px 0;
    height: 200px;

    &.middleE {
      width: 360px;
      .boxInnerSC .alAK {
        width: 250px;
        &.shortN {
          width: 220px;
        }
      }
    }

    &.longE {
      width: 400px;
      .boxInnerSC .alAK {
        width: 300px;
      }
    }

    .boxInnerSC {
      padding: 10px 0 0 10px;
      .alAK {
        width: 200px;
        display: inline-block;
      }
      > p {
        margin-top: 10px;
      }
    }
  }
</style>