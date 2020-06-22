<template>
  <div class="examplePageL tcG">
    <toHome/>
    <Button @click="swalHandle('success')">成功</Button>
    <Button @click="swalHandle('error')">失败</Button>
    <Button @click="swalHandle('warning')">警告</Button>
    <Button @click="swalHandle('info')">提示</Button>
  </div>
</template>

<script>
  export default {
    name: "swalEX",
    methods: {
      swalHandle(type) {
        window.$swal('哈喽', '同志，你好！', type)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .examplePageL {
    .ivu-btn.ivu-btn-default {
      margin-right: 20px;
    }
  }
</style>