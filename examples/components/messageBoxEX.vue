<template>
  <div class="examplePageL tc">
    <showReadMe/>
    <toHome/>
    <Button @click="confirmHandle">对话框</Button>
    <Button @click="confirmHandleB">promise对话框</Button>
  </div>
</template>

<script>
  export default {
    name: "messageBoxEX",
    methods: {
      confirmHandle() {
        this.messageBox({
          // title: '提示',
          // content: '确定执行该操作？',
          onOk: () => {
            console.log('ok 按钮被点击')
          }
        })
      },
      confirmHandleB() {
        this.messageBox({
          onOkPromise: true,
          onOk: () => {
            return new Promise(r => {
              console.log('确定按钮被点击')
              this.setTimeout(() => {
                console.log('模拟网络请求完成')
                r()
              }, 4000)
            })
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .examplePageL {
    .ivu-btn + .ivu-btn {
      margin-left: 10px;
    }
  }
</style>