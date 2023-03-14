import {defineStore} from "pinia"
import Cookies from "js-cookie"
import Vue from "vue"
import router from "./router"

export const useStore = defineStore('main', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'zh',
    isLogin: false,
    envR: localStorage.getItem('envR') || 'umc',
    user: {
      tenantCode: "",
      username: "",
      password: ""
    }
  }),
  actions: {
    getIsLogin(d) {
      let isLogin
      if (d === 'mgr') {
        isLogin = Cookies.get("isFirst") && JSON.parse(Cookies.get("isFirst"))
      }
      else {
        isLogin = Cookies.get("isLoginR") && JSON.parse(Cookies.get("isLoginR"))
      }
      this.isLogin = Boolean(isLogin)
    },
    getUser(d) {
      let user
      if (d === 'mgr') {
        user = localStorage.getItem("userD")
      }
      else {
        user = localStorage.getItem("userC")
      }
      if (user) {
        user = JSON.parse(user)
      }
      else {
        user = {
          tenantCode: "",
          username: "",
          password: ""
        }
      }
      this.user = user
    }, // 登出
    logout() {
      let url = "/umc/logout"
      if (this.envR === 'mgr') {
        url = '/mgr/logout'
      }
      Vue.prototype.$fetch.get(url)
        .then(() => {
          this.isLogin = false
          if (this.envR === 'mgr') {
            Cookies.remove("isFirst", window.g.domain)
          }
          else {
            Cookies.remove("isLoginR", window.g.domain)
          }
          localStorage.removeItem('userC')
          if (location.hash.indexOf('login') === -1) {
            router.push('/login')
          }
        })
        .catch(e => {
          console.error("登出请求出错：", e)
        })
    }
  }
})
