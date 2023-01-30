<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <div class="mapBox">
      <inputMap v-model="value"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inputMapEX",
    data() {
      return {
        value: {
          name: '光电园(地铁站)',
          address: "6号线",
          district: "重庆市渝北区",
          lng: 106.499401,
          lat: 29.616077
        }
      }
    },
    mounted() {
      /*this.setTimeout(() => {
        this.value = {
          lat:39.992213,
          lng:116.315839,
          name:"北京大学东门"
        }
      }, 8000)*/
    }
  }
</script>

<style scoped>
  .mapBox {
    width: 600px;
    margin: 0 auto;
  }
</style>
