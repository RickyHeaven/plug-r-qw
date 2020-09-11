<template>
  <router-link to="/index" :style="{color:color}" class="backLink">
    <Icon type="md-rewind"/>
    返回
  </router-link>
</template>

<script>
  export default {
    name: "toHome",
    props: {
      color: {
        type: String,
        default() {
          return '#46be87'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .backLink {
    position: fixed;
    z-index: 10;
    top: 20px;
    right: 40px;
    &:hover {
      opacity: .85;
    }
  }
</style>