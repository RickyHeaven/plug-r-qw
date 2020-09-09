<template>
  <div class="tableSearchV" :style="{width:width,right:right,top:top}">
    <Input v-model="valueX" search @on-search="onSearch" class="searchInputC" :placeholder="placeholder"/>
    <span class="sbt" @click="openX=!openX" v-show="showBtn" :style="{color:btnColor}"><icon
        :type="iconL" :color="btnColor"
    ></icon>高级查询</span>
  </div>
</template>

<script>
  /**
   * 高级查询插件
   * @desc 联合showHidePanelB、searchForm等插件对table进行查询
   * @author ricky email:zhangqingcq@foxmail.com
   * @date 2020.03.19
   * @param {string} value - 搜索框的值（v-model）必填
   * @param {boolean} open - 高级搜索是否开启 必填
   * @param {string} [placeholder] - 搜索框的placeholder
   * @param {string} [width] - 整个插件宽度
   * @param {string} [right] - 整个插件定位-右（最近relative）
   * @param {string} [top] - 整个插件定位-上（最近relative）
   * @example 调用示例 <table-search v-model="areaName" :open="openSearch" placeholder="片区名称" @on-search="search" @on-toggle="openSearch=!openSearch"/>
   */

  export default {
    name: "tableSearch",
    model: {
      prop: 'value',
      event: 'subVal'
    },
    props: {
      value: {
        default: null
      },
      open: {
        type: Boolean,
        default: false
      },
      placeholder: {
        default() {
          return '请输入'
        }
      },
      showBtn: {
        /*是否显示高级查询按钮*/
        type: Boolean,
        default: true
      },
      width: {
        default: '300px'
      },
      right: {
        default: '0'
      },
      top: {
        default: '0'
      },
      btnColor: {
        type: String,
        default: 'inherit'
      }
    },
    data() {
      return {
        debounceCount: false
      }
    },
    computed: {
      valueX: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('subVal', val)
        }
      },
      iconL() {
        return this.openX ? 'ios-arrow-up' : 'ios-arrow-down'
      },
      openX: {
        get() {
          return this.open
        },
        set(val) {
          this.$emit('on-toggle', val)
        }
      },
    },
    methods: {
      onSearch() {/*私有*/
        if (!this.debounceCount) {
          this.debounceCount = true
          this.$emit('on-search', this.valueX)
          setTimeout(() => {
            this.debounceCount = false
          }, 2000)
        }
      }
    }
  }
</script>