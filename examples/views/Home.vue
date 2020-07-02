<template>
  <div class="home">
    <div class="login">
      当前env：{{envK}}
      <span @click="loginH">{{isLogin?'登出':'登录'}}</span>
    </div>
    <img class="brandK" alt="Vue logo" src="../assets/logo.png">
    <div class="brandBox">
      <span style="font-size: 18px">首页 </span>
      <hello-r style="margin-left: 10px"/>
    </div>
    <div>
      <div class="menuBox">
        <h3>目录</h3>
        <ol class="menuList">
          <li v-for="(item,index) of routeArr" :key="'menu'+index">
            <span style="margin-right: 8px">{{index+1}}.</span>
            <router-link class="rLinkN" :to="item.path">{{item.name}}</router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /examples
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'home',
    computed: {
      ...mapState({
        isLogin: state => state.user.isLogin,
        envK: state => state.user.envR
      }),
      routeArr() {
        return this.$router.options.routes.filter(e => {
          if (e.name && e.name !== 'login' && e.name !== 'index') {
            return e
          }
        })
      }
    },
    methods: {
      ...mapActions({
        logoutA: 'logout'
      }),
      loginH() {
        if (this.isLogin) {
          this.logoutA()
        }
        else {
          this.$router.push('login')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .home {
    padding-top: 20px;
    .login {
      position: absolute;
      top: 10px;
      right: 20px;
      >span{
        margin-left: 10px;
        color: #46be87;
        cursor: pointer;
        &:hover {
          opacity: .85;
        }
      }
    }

    .brandK {
      position: absolute;
      top: 30px;
      left: 50px;
      height: 25px;
    }

    .brandBox {
      height: 50px;
      padding-left: 90px;
      line-height: 50px;
    }

    .menuBox {
      padding: 20px 20px 20px 80px;
      overflow-y: auto;
      .menuList {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        > li {
          width: 250px;
          margin-right: 15px;
          line-height: 40px;
          .rLinkN {
            color: #46be87;
          }
        }
      }
    }
  }
</style>
