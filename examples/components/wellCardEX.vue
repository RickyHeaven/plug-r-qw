<template>
  <div class="examplePageL vh100">
    <toHome/>
    <wellCard title="模块A">
      <template #bts>
        <div class="fullHeight tr">
          <Button class="headerBt withIcoL" type="text" @click="handleClick" size="small" ghost>
            <icon type="md-add"/>新增
          </Button>
        </div>
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