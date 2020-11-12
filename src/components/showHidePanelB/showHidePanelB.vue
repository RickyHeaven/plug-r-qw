<!--created 2020.03.19-->
<!--author ricky email:zhangqingcq@foxmail.com-->
<!--参数：show(v-model绑定)展开收起；bg 例如：bg = '#fff' 或 bg = 'white' 不传为透明背景 (bg为自定义属性，控制该组件背景色) <show-hide-panel-b v-model="open" bg="#fff">需要包装的代码</show-hide-panel-b>  -->

<template>
  <div :style="getBg">
    <div v-show="showX" class="contentZ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "showHidePanelB",
    model: {
      prop: 'show',
      event: 'subVal'
    },
    props: {
      bg: {
        default: 'transparent'
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      showX: {
        get() {
          return this.show
        },
        set(val) {
          this.$emit('subVal', val)
        }
      },
      getBg() {
        if (this.showX) {
          return 'background:' + this.bg
        }
        else {
          return ''
        }
      }
    }
  }
</script>
