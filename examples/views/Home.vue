<template>
  <div class="home">
    <div class="btBox">
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
        <ol class="menuList">
          <div class="mold" v-for="(item,index) of routeArr" :key="'menu'+index">
            <div class="tit">
              <i class="iconfont icon-label"></i>
              <span>{{item.name}}</span>
            </div>
            <div class="cont">
              <router-link
                  class="li"
                  v-for="(subItem,ix) of item.children"
                  :to="subItem.path"
                  :key="'subItem'+ix"
                  :style="{background:subItem.meta.bg}"
                  :title="subItem.meta.title"
              >
                <div class="show bz-buttonAnimat" :class="subItem.meta.cls">
                  <div class="icon"><i class='iconfont' :class="subItem.meta.icon"></i></div>
                  <div class="txt">{{subItem.name}}</div>
                  <!--随机动画，当前索引值为偶数就显示四条边，奇数就显示两条边-->
                  <div v-show="(ix + 3) % 2 == 0" class="inner"></div>
                </div>
              </router-link>
            </div>
          </div>
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
        width: 100%;
        margin: 0 auto;
        overflow: hidden;

        .mold {
          width: 100%;
          height: auto;
          margin: 20px 0;
          .tit{
            font-size: 20px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
            i{
              margin-right: 10px;
            }
            span{
              color: #24abf2;
              font-weight: bold
            }
          }

          .cont{
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
            .li {
              cursor: default;
              width: 360px;
              background-color: #46be87;
              height: 120px;
              border-radius: 4px;
              display: block;
              float: left;
              margin:0 30px 30px 0;
              position: relative;
              .show{
                width: 300px;
                height: 80px;
                margin: 20px auto 0;
                position: relative;
                cursor: pointer;
                color: white;
                overflow: hidden;
                .icon{
                  height: 30px;
                  line-height: 30px;
                  overflow: hidden;
                  margin:10px 0 10px;
                  text-align: center;
                  i{
                    font-size: 30px;
                  }
                }
                .txt{
                  font-size: 18px;
                  height: 18px;
                  line-height: 18px;
                  color: #fff;
                  width: 100%;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }

  /**
    规定鼠标移入时动画效果
    bz-buttonAnimat       //规定线条显示
    clockwise             //规定动画顺时针
    counterclockwise      //规定动画逆时针
    horizontal            //上下两条边框出现线条
    vertical              //左右两条边框出现线条
    both                  //四条边框出现线条
   **/
  .bz-buttonAnimat{position:relative;}
  .bz-buttonAnimat .inner{position:absolute;top:0;left:0;width:100%;height:100%;}
  .bz-buttonAnimat:nth-of-type(1):before,
  .bz-buttonAnimat:nth-of-type(1):after,
  .bz-buttonAnimat:nth-of-type(1) .inner:before,
  .bz-buttonAnimat:nth-of-type(1) .inner:after{background-color:#ffa726;}
  .bz-buttonAnimat:nth-of-type(2):before,
  .bz-buttonAnimat:nth-of-type(2):after,
  .bz-buttonAnimat:nth-of-type(2) .inner:before,
  .bz-buttonAnimat:nth-of-type(2) .inner:after{background-color:#26a69a;}
  .bz-buttonAnimat:nth-of-type(3):before,
  .bz-buttonAnimat:nth-of-type(3):after,
  .bz-buttonAnimat:nth-of-type(3) .inner:before,
  .bz-buttonAnimat:nth-of-type(3) .inner:after{background-color:#7e57c2;}
  .bz-buttonAnimat:before,
  .bz-buttonAnimat:after,
  .bz-buttonAnimat .inner:before,
  .bz-buttonAnimat .inner:after{position:absolute;content:"";display:block;-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s,-webkit-transform 0.3s;}
  .bz-buttonAnimat.horizontal:before,
  .bz-buttonAnimat.horizontal:after,
  .bz-buttonAnimat.both:before,
  .bz-buttonAnimat.both:after{left:0;width:100%;height:2px;-webkit-transform:scaleX(0);transform:scaleX(0);}
  .bz-buttonAnimat.horizontal .inner:before,
  .bz-buttonAnimat.horizontal .inner:after,
  .bz-buttonAnimat.both .inner:before,
  .bz-buttonAnimat.both .inner:after{top:0;width:2px;height:100%;-webkit-transform:scaleY(0);transform:scaleY(0);}
  .bz-buttonAnimat.horizontal .inner:before,
  .bz-buttonAnimat.both .inner:before{left:0;}
  .bz-buttonAnimat.horizontal .inner:after,
  .bz-buttonAnimat.both .inner:after{right:0;}
  .bz-buttonAnimat.horizontal .inner:hover:before,
  .bz-buttonAnimat.horizontal .inner:hover:after,
  .bz-buttonAnimat.both .inner:hover:before,
  .bz-buttonAnimat.both .inner:hover:after{-webkit-transform:scaleY(1);transform:scaleY(1);}
  .bz-buttonAnimat.horizontal:before,
  .bz-buttonAnimat.both:before{top:0;}
  .bz-buttonAnimat.horizontal:after,
  .bz-buttonAnimat.both:after{bottom:0;}
  .bz-buttonAnimat.horizontal:hover:before,
  .bz-buttonAnimat.horizontal:hover:after,
  .bz-buttonAnimat.both:hover:before,
  .bz-buttonAnimat.both:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1);}
  .bz-buttonAnimat.horizontal:hover .inner:before,
  .bz-buttonAnimat.horizontal:hover .inner:after,
  .bz-buttonAnimat.both:hover .inner:before,
  .bz-buttonAnimat.both:hover .inner:after{-webkit-transform:scaleY(1);transform:scaleY(1);}
  .bz-buttonAnimat.horizontal.clockwise .inner:before,
  .bz-buttonAnimat.both.clockwise .inner:before{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.horizontal.clockwise .inner:after,
  .bz-buttonAnimat.both.clockwise .inner:after{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
  .bz-buttonAnimat.horizontal.clockwise:before,
  .bz-buttonAnimat.both.clockwise:before{-webkit-transform-origin:right center;transform-origin:right center;}
  .bz-buttonAnimat.horizontal.clockwise:after,
  .bz-buttonAnimat.both.clockwise:after{-webkit-transform-origin:left center;transform-origin:left center;}
  .bz-buttonAnimat.horizontal.clockwise:hover .inner:before,
  .bz-buttonAnimat.both.clockwise:hover .inner:before{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
  .bz-buttonAnimat.horizontal.clockwise:hover .inner:after,
  .bz-buttonAnimat.both.clockwise:hover .inner:after{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.horizontal.clockwise:hover:before,
  .bz-buttonAnimat.both.clockwise:hover:before{-webkit-transform-origin:left center;transform-origin:left center;}
  .bz-buttonAnimat.horizontal.clockwise:hover:after,
  .bz-buttonAnimat.both.clockwise:hover:after{-webkit-transform-origin:right center;transform-origin:right center;}
  .bz-buttonAnimat.horizontal.counterclockwise .inner:before,
  .bz-buttonAnimat.both.counterclockwise .inner:before{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
  .bz-buttonAnimat.horizontal.counterclockwise .inner:after,
  .bz-buttonAnimat.both.counterclockwise .inner:after{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.horizontal.counterclockwise:before,
  .bz-buttonAnimat.both.counterclockwise:before{-webkit-transform-origin:left center;transform-origin:left center;}
  .bz-buttonAnimat.horizontal.counterclockwise:after,
  .bz-buttonAnimat.both.counterclockwise:after{-webkit-transform-origin:right center;transform-origin:right center;}
  .bz-buttonAnimat.horizontal.counterclockwise:hover .inner:before,
  .bz-buttonAnimat.both.counterclockwise:hover .inner:before{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.horizontal.counterclockwise:hover .inner:after,
  .bz-buttonAnimat.both.counterclockwise:hover .inner:after{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
  .bz-buttonAnimat.horizontal.counterclockwise:hover:before,
  .bz-buttonAnimat.both.counterclockwise:hover:before{-webkit-transform-origin:right center;transform-origin:right center;}
  .bz-buttonAnimat.horizontal.counterclockwise:hover:after,
  .bz-buttonAnimat.both.counterclockwise:hover:after{-webkit-transform-origin:left center;transform-origin:left center;}
  .bz-buttonAnimat.vertical:before,
  .bz-buttonAnimat.vertical:after{top:0;width:2px;height:100%;-webkit-transform:scaleY(0);transform:scaleY(0);}
  .bz-buttonAnimat.vertical:before{left:0;}
  .bz-buttonAnimat.vertical:after{right:0;}
  .bz-buttonAnimat.vertical:hover:before,
  .bz-buttonAnimat.vertical:hover:after{-webkit-transform:scaleY(1);transform:scaleY(1);}
  .bz-buttonAnimat.vertical.clockwise:before{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.vertical.clockwise:after{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
  .bz-buttonAnimat.vertical.clockwise:hover:before{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
  .bz-buttonAnimat.vertical.clockwise:hover:after{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.vertical.counterclockwise:before{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
  .bz-buttonAnimat.vertical.counterclockwise:after{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.vertical.counterclockwise:hover:before{-webkit-transform-origin:top center;transform-origin:top center;}
  .bz-buttonAnimat.vertical.counterclockwise:hover:after{-webkit-transform-origin:bottom center;transform-origin:bottom center;}
</style>
