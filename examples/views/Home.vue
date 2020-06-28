<template>
  <div class="home">
    <img class="brandK" alt="Vue logo" src="../assets/logo.png">
    <div class="brandBox">
      <span style="font-size: 18px">首页 </span>
      <hello-r style="margin-left: 10px"/>
    </div>
    <div>
      <div class="menuBox">
        <h3>目录</h3>
        <ol class="menuList">
          <li v-for="(item,index) of menu" :key="'menu'+index">
            <span style="margin-right: 8px">{{index+1}}.</span><router-link class="rLinkN" :to="item.path">{{item.name}}</router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /examples

  export default {
    name: 'home',
    data() {
      return {
        menu: [
          {
            name: '$swal',
            path: '/swal'
          },
          {
            name: 'messageBox',
            path: '/messageBox'
          },
          {
            name: '$fetch',
            path: '/fetch'
          },
          {
            name: 'fullScreenImgPreview',
            path: '/fullScreenImgPreview'
          },
          {
            name: 'fullScreenImgByDom',
            path: '/fullScreenImgByDom'
          },
          {
            name: 'btTablePage',
            path: '/btTablePage'
          },
          {
            name: 'wellCard',
            path: '/wellCard'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .home{
    padding-top: 20px;

    .brandK{
      position: absolute;
      top: 30px;
      left: 50px;
      height: 25px;
    }

    .brandBox{
      height: 50px;
      padding-left: 90px;
      line-height: 50px;
    }

    .menuBox{
      padding: 20px 20px 20px 80px;
      overflow-y: auto;
      .menuList{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        >li{
          width: 250px;
          margin-right: 15px;
          line-height: 40px;
          .rLinkN{
            color: #46be87;
          }
        }
      }
    }
  }
</style>
