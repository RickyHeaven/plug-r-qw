<template>
  <div class="examplePageL vh100">
    <toHome/>
    <selectInput v-model="value" :selectOption="selectOption"/>
    <p class="outJ">组件key： <span>{{value.key}}</span> </p>
    <p class="outJ">组件val： <span>{{value.val}}</span></p>
    <p class="outJ">组件beforeKey： <span>{{value.beforeKey}}</span></p>
  </div>
</template>

<script>
  export default {
    name: "selectInputEX",
    data() {
      return {
        value: {
          key: 'name',
          val: null
        },
        selectOption: [
          {
            label: '姓名',
            val: 'name'
          },
          {
            label: '身份证号',
            val: 'id'
          }
        ]
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