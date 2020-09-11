<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <div class="eBoxA">
      <editor v-model="value"/>
    </div>
    <div class="eBoxA" style="padding-top: 10px">
      <p>组件值： {{value}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "editorEX",
    data() {
      return {
        value: null
      }
    }
  }
</script>

<style scoped>
  .eBoxA {
    width: 75%;
    margin: 0 auto;
  }
</style>