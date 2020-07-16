<template>
  <div class="tabTopBtnsT" @click="click" v-has="has" :class="{disabled:disabled}" :style="{'font-size': txtSize}">
    <Icon :type="icon" :size="size"></Icon>
    {{name}}
  </div>
</template>

<script>
  export default {
    name: "iconTxtBtn",
    props: {
      name: {
        type: String,
        default() {
          return '按钮'
        }
      },
      icon: {
        type: String,
        default() {
          return 'md-download'
        }
      },
      size: {
        type: Number,
        default() {
          return 17
        }
      },
      disabled: {
        type: Boolean,
        default() {
          return false
        }
      },
      has: {
        type: String
      }
    },
    computed:{
      txtSize(){
        return Math.floor(this.size/17*12) + 'px'
      }
    },
    methods: {
      click(e) {
        if(this.disabled){
          return
        }
        this.$emit('click', e)
      }
    }
  }
</script>