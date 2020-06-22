<template>
  <div class="examplePageL tcG">
    <toHome/>
    <Button @click="confirmHandle">点击模拟请求</Button>
  </div>
</template>

<script>
  export default {
    name: "fetchEX",
    methods:{
      confirmHandle(){
        this.$fetch.get('httpTestData.json').then(r=>{
          if(r&&r.code===0){
            window.$swal('请求成功','姓名：'+r.data.name+'; 邮箱：'+r.data.email,'success')
          }
        })
      }
    }
  }
</script>