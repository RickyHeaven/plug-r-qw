<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <Button @click="open">点我打开页面</Button>
    <fixed-full-modal ref="fModalRef" title="弹出页面A" @on-cancel="close">
      <p> 我是内容~~~~~~~~~~</p>
      <p> 我是内容~~~~~~~~~~</p>
      <p> 我是内容~~~~~~~~~~</p>
    </fixed-full-modal>
  </div>
</template>

<script>
  export default {
    name: "fixedFullModalEX",
    methods: {
      open() {
        this.$refs.fModalRef.open()
      },
      close() {
        console.log('页面关闭，可以这时更新数据')
      }
    }
  }
</script>