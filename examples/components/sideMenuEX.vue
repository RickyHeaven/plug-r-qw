<template>
  <div class="sideMenuEX">
    <toHome/>

    <sideMenu :data="data"/>
  </div>
</template>

<script>
  import d from '../../public/testData/sideMenu.json'

  export default {
    name: "sideMenuEX",
    data() {
      return {
        data: d
      }
    }
  }
</script>
<style lang="scss" scoped>
  .sideMenuEX{
    display: flex;
    padding: 50px 0 0 0;
    height: 100vh;
  }
</style>