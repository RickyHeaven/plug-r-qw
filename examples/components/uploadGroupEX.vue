<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <well-card class="upBox" height="350px" width="520px" title="本地上传">
      <div class="innerK">
        <p style="margin-bottom: 10px">说明：文件本地上传，组件的值为file对象的集合，需要获取file对象自行处理上传逻辑时使用，file对象不能直接在页面展示，请查看控制台</p>
        <uploadGroup v-model="fileId" :manual-upload="true" @on-file-id-change="printFile(fileId)"/>
      </div>
    </well-card>
    <well-card class="upBox" height="350px" width="520px" title="本地上传-图片模式">
      <div class="innerK">
        <p style="margin-bottom: 10px">说明：上传格式限制为图片时，该模式可预览上传的图片，如果文件列表中有非图片文件，则自动转换为列表模式，file对象不能直接在页面展示，请查看控制台</p>
        <uploadGroup v-model="fileId2" :manual-upload="true" :show-img="true" @on-file-id-change="printFile(fileId2)"/>
      </div>
    </well-card>
    <well-card class="upBox" height="350px" width="520px" title="上传到服务器">
      <div class="innerK">
        <p style="margin-bottom: 10px">
          说明：文件直接上传到服务器，因为本组件该模式是定制化开发，接口数据格式限定死了，本例子用的私有地址，只在特定环境有效,如果需要在其他接口数据格式下使用该组件，推荐使用本地模式，然后自己处理上传到服务器的逻辑，或者使用iview的upload组件</p>
        <p>组件值：{{fileId3}}</p>
        <uploadGroup v-model="fileId3" :url="url"/>
      </div>
    </well-card>
    <well-card class="upBox" height="350px" width="520px" title="上传到服务器-图片模式">
      <div class="innerK">
        <p style="margin-bottom: 10px">
          说明：上传格式限制为图片时，该模式可预览上传的图片，如果文件列表中有非图片文件，则自动转换为列表模式</p>
        <p>组件值：{{fileId4}}</p>
        <uploadGroup v-model="fileId4" :url="url" :show-img="true"/>
      </div>
    </well-card>
  </div>
</template>

<script>
  import {mapState} from 'pinia'
  import {useStore} from "../store"

  export default {
    name: "uploadGroupEX",
    data() {
      return {
        fileId: [],
        fileId2: [],
        fileId3: [],
        fileId4: [],
      }
    },
    computed: {
      ...mapState(useStore,['envR']),
      url(){
        if(this.envR === 'umc'){
          return window.g.umcURL + '/admin/maintaince/file'
        }else{
          return window.g.mgrURL + '/fsc/file'
        }
      }
    },
    methods:{
      printFile(data){
        console.log(data)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .examplePageL {
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
    .upBox {
      text-align: left;
      margin-bottom: 20px;
      .innerK {
        padding: 20px;
        height: 100%;
      }
    }
  }
</style>
