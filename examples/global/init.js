import Vue from 'vue'
import toHome from '../components/toHome.vue'
import store from '../store'
import Cookies from "js-cookie"

(function () {
  let user = localStorage.getItem('userC')
  if(user){
    user = JSON.parse(user)
    store.commit('SET_USER',user)
  }
  let isLogin
  if (store.state.user.envR === 'mgr') {
    isLogin = Cookies.get("isFirst") && JSON.parse(Cookies.get("isFirst"))
  }
  else {
    isLogin = Cookies.get("isLoginR") && JSON.parse(Cookies.get("isLoginR"))
  }
  store.commit('SET_IS_LOGIN', Boolean(isLogin))
})()

Vue.component('toHome', toHome)