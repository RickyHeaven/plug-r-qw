<template>
  <div class="examplePageL vh100">
    <toHome/>
    <div class="boxKJ">
      <p>组件值：{{value}}</p>
      <checkboxTree v-model="value" :data="data"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "checkboxTreeEX",
    data() {
      return {
        value: [112],
        data:[
          {
            name: 'parent 1',
            id: 1,
            expand: true,
            children: [
              {
                name: 'child 1-1',
                id: 11,
                expand: true,
                children: [
                  {
                    name: 'leaf 1-1-1',
                    id: 111
                  },
                  {
                    name: 'leaf 1-1-2',
                    id: 112
                  }
                ]
              },
              {
                name: 'child 1-2',
                id: 12,
                children: [
                  {
                    name: 'leaf 1-2-1',
                    id: 121
                  },
                  {
                    name: 'leaf 1-2-2',
                    id: 122
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .boxKJ {
    padding: 20px 0 0 20px;
  }
</style>