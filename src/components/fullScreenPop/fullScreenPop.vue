<!--created 2019.07.09-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div v-show="showPop" class="fullScreenPopBoxAM">
    <div class="headerAM" :style="{color:headerColor,backgroundColor:headerBg,fontSize:hFontSize}">
      <!--这是标题-->
      <span class="headerTxtAM">{{title||t('r.title')}}</span>
      <!--这是返回按钮-->
      <header-bt icon="md-return-left" @click="close">{{t('r.back')}}</header-bt>
    </div>
    <div class="contentAM">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import headerBt from '../headerBt/headerBt.vue'
  import {myTypeof} from "../../methods/functionGroup"
  import Locale from '../../mixins/locale'

  export default {
    name: "fullScreenPop",
    mixins: [Locale],
    components: {headerBt},
    props: {
      title: {
        type: String
      },
      headerColor: {
        type: String
      },
      headerBg: {
        type: String
      },
      headerFontSize: {
        type: [
          String,
          Number
        ],
        default: 12
      }
    },
    data() {
      return {
        showPop: false
      }
    },
    computed: {
      hFontSize() {
        if (myTypeof(this.headerFontSize) === 'Number') {
          return this.headerFontSize + 'px'
        }
        return this.headerFontSize
      }
    },
    methods: {
      open() {
        this.showPop = true
        this.$emit('on-open')
      },
      close(getData) {
        this.showPop = false
        this.$emit('on-close', getData === true)
      }
    }
  }
</script>