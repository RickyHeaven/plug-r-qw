<template>
  <div class="examplePageL tc">
    <toHome/>
    <div class="linkM inlineBlock" @click="confirmHandle" style="height: 15px;">
      <img style="height: 100%" src="../assets/testo.png" alt="logo">
      <div>点击全屏预览</div>
    </div>
  </div>
</template>

<script>
  import PRQW from '../../src/index.js'
  import npm from '../assets/testo.png'

  export default {
    name: "fullScreenImgByDomEX",
    methods: {
      confirmHandle() {
        PRQW.fullScreenImgByDom(npm)
      }
    }
  }
</script>