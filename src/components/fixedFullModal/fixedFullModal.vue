<template>
  <Modal
    :title="title" v-bind="$attrs" v-on="$listeners" v-model="isOpen" :mask-closable="false" :styles="{top: top}"
    fullscreen footer-hide
  >
    <slot></slot>
  </Modal>
</template>

<script>
  export default {
    name: "fixedFullModal",
    props: {
      title: {
        type: String,
        default: '标题'
      },
      top: {
        type: String,
        default: '55px'
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      open() {
        this.isOpen = true
      },
      close() {
        this.isOpen = false
      }
    }
  }
</script>
