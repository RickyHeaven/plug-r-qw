<template>
  <router-link to="/index" class="backLink"><Icon type="md-rewind" /> 返回</router-link>
</template>

<script>
  export default {
    name: "toHome"
  }
</script>
<style lang="scss" scoped>
  .backLink{
    position: fixed;
    top: 20px;
    right: 40px;
    color: #46be87;
    &:hover{
      opacity: .85;
    }
  }
</style>