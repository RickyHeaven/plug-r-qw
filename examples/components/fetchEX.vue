<template>
  <div class="examplePageL tc">
    <toHome/>
    <Button @click="confirmHandle">点击模拟请求</Button>
  </div>
</template>

<script>
  export default {
    name: "fetchEX",
    methods: {
      confirmHandle() {
        this.$fetch.get(location.pathname + 'testData/fetch.json').then(r => {
          if (r && r.code === 0) {
            this.$swal('请求成功', '姓名：' + r.data.name + '; 邮箱：' + r.data.email, 'success')
          }
        })
      }
    }
  }
</script>