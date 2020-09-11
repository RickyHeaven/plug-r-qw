<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <wellCard title="模块A">
      <template #bts>
        <headerBt icon="md-add" @click="handleClick">新增</headerBt>
        <headerBt>按钮B</headerBt>
        <headerBt :disabled="true">按钮A</headerBt>
      </template>
      我是内容~~~~~~~~~~
    </wellCard>
  </div>
</template>

<script>
  export default {
    name: "wellCardEX",
    methods:{
      handleClick(){
        console.log('新增按钮点击')
      }
    }
  }
</script>