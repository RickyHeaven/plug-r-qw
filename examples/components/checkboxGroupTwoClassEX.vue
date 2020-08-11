<template>
  <div class="examplePageL vh100">
    <toHome/>
    <div class="exBox">
      <well-card title="简单用法">
        <template slot="bts">
          <headerBt icon="ios-trash" @click="value=[]">清空</headerBt>
          <headerBt :icon="disabled?'md-unlock':'md-lock'" @click="disabled=!disabled">
            {{disabled?'解禁':'禁用'}}
          </headerBt>
        </template>
        <div class="boxJA">
          <div class="topKK">
            <p>组件值： {{value}}</p>
          </div>
          <div class="flowAA">
            <checkboxGroupTwoClass v-model="value" :data="data" :disabled="disabled"/>
          </div>
        </div>
      </well-card>
    </div>

    <div class="exBox">
      <well-card title="收集多个字段">
        <template slot="bts">
          <headerBt icon="ios-trash" @click="value2=[]">清空</headerBt>
          <headerBt :icon="disabled2?'md-unlock':'md-lock'" @click="disabled2=!disabled2">
            {{disabled2?'解禁':'禁用'}}
          </headerBt>
        </template>
        <div class="boxJA">
          <div class="topKK">
            <p>组件值： {{value2}}</p>
          </div>
          <div class="flowAA">
            <checkboxGroupTwoClass v-model="value2" :data="data" :collect-val="['id','name']" :disabled="disabled2"/>
          </div>
        </div>
      </well-card>
    </div>

    <div class="exBox">
      <well-card title="全部收集模式">
        <template slot="bts">
          <headerBt icon="ios-trash" @click="value3=[]">清空</headerBt>
        </template>
        <div class="boxJA">
          <div class="topKK">
            <p>组件值： {{value3}}</p>
          </div>
          <div class="flowAA">
            <checkboxGroupTwoClass v-model="value3" :data="data" :leaf="false"/>
          </div>
        </div>
      </well-card>
    </div>

    <div class="exBox">
      <well-card title="全部收集模式-多字段收集">
        <template slot="bts">
          <headerBt icon="ios-trash" @click="value4=[]">清空</headerBt>
        </template>
        <div class="boxJA">
          <div class="topKK">
            <p>组件值： {{value4}}</p>
          </div>
          <div class="flowAA">
            <checkboxGroupTwoClass v-model="value4" :data="data" :leaf="false" :collect-val="['id','name']"/>
          </div>
        </div>
      </well-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "checkboxGroupTwoClassEX",
    data() {
      return {
        value: [77],
        disabled: false,
        disabled2: true,
        value2: [
          {
            "id": 77,
            "name": "系统A人员"
          }
        ],
        value3: [
          5,
          77
        ],
        value4: [
          {
            "id": 5,
            "name": "系统A"
          },
          {
            "id": 77,
            "name": "系统A人员"
          }
        ],
        data: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$fetch.get(location.pathname + "testData/checkboxGroupTwoClass.json")
          .then(r => {
            this.data = r
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .exBox {
    display: inline-block;
    width: 920px;
    height: 422px;
    margin-right: 10px;
    margin-bottom: 10px;
    .headerBt {
      .bbD {
        top: 1px;
        position: relative;
      }
    }
  }

  .boxJA {
    overflow: hidden;
    height: 100%;
    padding: 100px 10px 10px 10px;
    position: relative;
    .topKK {
      width: 100%;
      height: 80px;
      position: absolute;
      top: 10px;
      right: 0;
      overflow-y: auto;
      padding: 0 10px;
    }
    .flowAA {
      height: 100%;
      overflow: auto;
    }
  }
</style>