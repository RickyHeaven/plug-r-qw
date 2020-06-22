<template>
  <div class="examplePageL tcG">
    <toHome/>
    <div class="linkM inlineBlock" @click="confirmHandle" style="height: 15px;">
      <img style="height: 100%" src="../assets/logo.png" alt="logo">
      点击全屏预览
    </div>
  </div>
</template>

<script>
  import logo  from '../assets/logo.png'
  export default {
    name: "fullScreenImgByDomEX",
    methods:{
      confirmHandle(){
        this.fullScreenImgByDom(logo)
      }
    }
  }
</script>