<!--created 2021.08.20-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Modal
      v-bind="$attrs" v-on="$listeners" v-model="isOpen" class="fixedFullModalR" :mask-closable="false"
      :styles="{top: top}" fullscreen footer-hide :closable="false"
  >
    <template #header>
      <div class="headerR">
        <span>{{ title }}</span>
        <Icon class="closeIcoR" type="ios-close" size="40" title="close" @click="close" />
      </div>
    </template>
    <slot />
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
        this.$emit('on-cancel')
      }
    }
  }
</script>
