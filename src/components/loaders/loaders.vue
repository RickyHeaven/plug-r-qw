<!--
    @created 2022.5.5
    @description 纯CSS3加载动画组件
-->
<template>
  <div
      class="loader-div"
      :data-loader="dataLoader"
      v-show="show"
  ></div>
</template>
<script>
  export default {
    name: 'loaders',
    props: {
      dataLoader: {       //加载动画类型，不传默认为circle
        type: String,
        default: 'circle'
      },
      show: {             //是否显示加载，默认为true
        type: Boolean,
        default: true
      }
    }
  }
</script>