<!--created 2020.04.14-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div class="tableBtnsG" :class="{disabled:disabled}" v-has="has" @click="onClick" :title="title">
    <Icon :type="icon" :size="size"></Icon>
  </div>
</template>

<script>
  export default {
    name: "tableIconBtn",
    props: {
      icon: {
        type: String,
        default() {
          return 'md-radio-button-on'
        }
      },
      title: {
        type: String,
        default() {
          return '按钮'
        }
      },
      has: {
        type: String
      },
      disabled: {
        type: Boolean,
        default() {
          return false
        }
      },
      size: {
        type: Number,
        default() {
          return 24
        }
      }
    },
    methods: {
      onClick(e) {
        if (this.disabled) {
          return
        }
        this.$emit('click', e)
      }
    }
  }
</script>
