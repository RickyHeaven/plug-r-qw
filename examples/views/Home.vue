<template>
  <div class="home">
    <div class="btBox">
      <Input class="searchB" search placeholder="快捷查找当前页面示例" @on-search="search"/>

      {{$t('r.testMsg')+' | '+$t('e.testTxt')}}
      <i-switch size="large" v-model="localeT" style="margin-right: 10px">
        <span slot="open">ENG</span>
        <span slot="close">CN</span>
      </i-switch>
      <!--当前env：{{envK}}
      <span @click="loginH">{{isLogin?'登出':'登录'}}</span>-->
    </div>
    <img class="brandK" alt="Vue logo" src="../assets/logo.png">
    <div class="brandBox">
      <span style="font-size: 18px">首页 </span>
      <hello-r style="margin-left: 10px"/>
    </div>
    <div>
      <div class="menuBox">
        <h1>目录</h1>
        <p style="color: #aaa">鼠标悬浮于示例显示中文title</p>
        <ol class="menuList">
          <li v-for="(item,index) of routeArr" :key="'menu'+index" :title="item.meta&&item.meta.title">
            <span style="margin-right: 8px">{{index+1}}.</span>
            <router-link class="rLinkN" :class="{active:active.indexOf(index)!==-1}" :to="item.path">{{item.name}}
            </router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /examples
  import {mapState, mapMutations, mapActions} from 'vuex'
  import TestHouse from "../components/testHouse"

  export default {
    name: 'home',
    components: {TestHouse},
    data() {
      return {
        active: [],
        routeArr: []
      }
    },
    computed: {
      ...mapState({
        isLogin: state => state.user.isLogin,
        envK: state => state.user.envR,
        locale: state => state.locale
      }),
      localeT: {
        get() {
          return this.locale === 'en'
        },
        set(val) {
          this.SET_LOCALE(val ? 'en' : 'zh')
        }
      }
    },
    created() {
      this.routeArr = this.$router.options.routes.filter(e => {
        if (e.name && e.name !== 'login' && e.name !== 'index') {
          return e
        }
      })
    },
    methods: {
      ...mapMutations([
        'SET_LOCALE'
      ]), ...mapActions({
        logoutA: 'logout'
      }),
      search(d) {
        if (d) {
          this.active = this.routeArr.map((e, i) => {
            if (e.name.toLowerCase().indexOf(d.toLowerCase()) !== -1) {
              return i
            }
          }).filter(e => e !== undefined)
        }
        else {
          this.active = []
        }
      },
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

    .btBox {
      position: absolute;
      top: 10px;
      right: 20px;

      .searchB {
        display: inline-block;
        width: 200px;
        margin-right: 20px;
      }

      > span {
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

          width: 280px;
          margin-right: 15px;
          line-height: 40px;
          font-size: 18px;

          .rLinkN {
            color: #46be87;
            border: 1px dashed transparent;
            padding: 2px 4px;

            &.active {
              border-color: #fb4286;
            }
            &:hover{
              color: #57f024;
            }
          }
        }
      }
    }
  }
</style>
