<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <select-scroll-more v-model="value" url="/node-serve/select-scroll-more" :searchData="{size:7}" @on-change="handleChange" style="width: 250px"/>
    <p class="outJ">值： <span>{{value}}</span> </p>
  </div>
</template>

<script>
  export default {
    name: "selectInputEX",
    data() {
      return {
        value: null
      }
    },
    methods:{
      handleChange(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  .outJ{
    margin-top: 20px;
    padding-left: 20px;
  }
</style>