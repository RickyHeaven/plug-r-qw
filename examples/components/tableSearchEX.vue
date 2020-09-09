<template>
  <div class="examplePageL vh100">
    <toHome/>
    <header class="headerKH">
      <tableSearch v-model="val" :open="open" placeholder="姓名" @on-search="search" @on-toggle="open=!open" top="5px" btn-color="#fff"/>
    </header>
    <showHidePanelB v-model="open">
      <p>我是内容~~~~~</p>
      <p>我是内容~~~~~</p>
      <p>我是内容~~~~~</p>
      <p>我是内容~~~~~</p>
      <p>我是内容~~~~~</p>
    </showHidePanelB>
    <p>搜索内容：{{val}}</p>
  </div>
</template>

<script>
  export default {
    name: "tableSearchEX",
    data() {
      return {
        open: true,
        val: null
      }
    },
    methods: {
      search(val) {
        window.$swal('搜索内容', val, 'info')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../global/variables";

  .headerKH {
    height: 40px;
    background-color: $vueColor;
    position: relative;
  }
</style>