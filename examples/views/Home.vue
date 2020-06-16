<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <hello-r/>
      <test-style/>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /examples

  export default {
    name: 'home',
    created() {
      window.$swal('成功', 'swal组件引入成功！', 'success')
      this.messageBox({
        title: '成功',
        content: 'messageBox组件引入成功！',
        onOk: () => {
          console.log('ok 按钮被点击')
        }
      })
    }
  }
</script>
