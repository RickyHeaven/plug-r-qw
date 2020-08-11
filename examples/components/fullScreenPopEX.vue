<template>
  <div class="fullPopEX">
    <toHome color="#fff"/>
    <div class="headerLAS">
      Header
    </div>
    <div class="contentLAS">
      <div class="menuLAS">
        Menu
      </div>
      <div class="pageLAS">
        <div class="titleLAS">
          示例页A
          <header-bt icon="md-add" @click="handleClick">新增</header-bt>
        </div>
        <fullScreenPop title="新增" ref="fullPop" header-bg="#282C34" header-color="#fff" :header-font-size="13">
          <div style="padding: 12px">
            我是新增页面
          </div>
        </fullScreenPop>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fullScreenPopEX",
    methods:{
      handleClick(){
        this.$refs.fullPop.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../global/variables";

  .fullPopEX {
    padding-top: $headerH;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .headerLAS {
      text-align: left;
      color: #fff;
      padding-left: 20px;
      width: 100%;
      line-height: $headerH;
      height: $headerH;
      background-color: $vueColor;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20px;
    }

    .contentLAS {
      height: 100%;
      padding: 12px 12px 12px calc(#{$menuW} + 12px);
      position: relative;
      background-color: #f8f8f8;

      .menuLAS {
        width: $menuW;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: $menuBg;
        padding: 10px 10px 10px 20px;
        color: $menuColor;
        font-size: 14px;
      }

      .pageLAS {
        height: 100%;
        background-color: #fff;
        position: relative;

        .titleLAS{
          height: $headerH;
          line-height: $headerH;
          padding-left: 10px;
          background-color: #282C34;
          color: #fff;
          font-weight: bold;
          font-size: 13px;
        }
      }
    }
  }
</style>