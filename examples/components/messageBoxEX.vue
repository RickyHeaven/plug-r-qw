<template>
  <div class="examplePageL tc">
    <toHome/>
    <Button @click="confirmHandle">对话框</Button>
  </div>
</template>

<script>
  export default {
    name: "messageBoxEX",
    methods:{
      confirmHandle(){
        this.messageBox({
          title: '提示',
          content: '确定执行该操作？',
          onOk: () => {
            console.log('ok 按钮被点击')
          }
        })
      }
    }
  }
</script>