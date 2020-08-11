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
            <checkboxGroupThreeClass :data="data" v-model="value" :disabled="disabled"/>
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
            <checkboxGroupThreeClass v-model="value2" :data="data" :collect-val="['id','name']" :disabled="disabled2"/>
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
            <checkboxGroupThreeClass v-model="value3" :data="data" :leaf="false"/>
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
            <checkboxGroupThreeClass v-model="value4" :data="data" :leaf="false" :collect-val="['id','name']"/>
          </div>
        </div>
      </well-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "checkboxGroupThreeClassEX",
    data() {
      return {
        data: [],
        value: [],
        disabled: false,
        disabled2: true,
        value2: [
          {
            "id": 1590,
            "name": "列表"
          }
        ],
        value3: [1,1584,1590],
        value4: [
          {
            "id": 1,
            "name": "首页"
          },
          {
            "id": 1584,
            "name": "首页"
          },
          {
            "id": 1590,
            "name": "列表"
          }
        ]
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$fetch.get(location.pathname + 'testData/checkboxGroupThreeClass.json').then(r => {
          this.value = r && r.value || []

          this.data = r && r.group || []
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .exBox {
    display: inline-block;
    width: 920px;
    height: 425px;
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