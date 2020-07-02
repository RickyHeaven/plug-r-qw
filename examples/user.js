import Cookies from "js-cookie";
import Vue from 'vue'
import router from './router'

const domain = window.g.domain

export default {
  state: {
    isLogin: false,
    envR: localStorage.getItem('envR') || 'umc',
    user: {
      tenantCode: "",
      username: "",
      password: ""
    }
  },
  
  mutations: {
    SET_IS_LOGIN(state, data) {
      if (data === false || data === true) {
        state.isLogin = data;
        
        if (state.envR === 'mgr') {
          Cookies.set("isFirst", JSON.stringify(data), domain);
        }
        else {
          Cookies.set("isLoginR", JSON.stringify(data), domain);
        }
      }
    },
    SET_ENV_R(state, data) {
      state.envR = data;
      localStorage.setItem('envR', data)
    },
    SET_USER(state, data) {
      state.user = data;
      if(state.envR === 'mgr'){
        localStorage.setItem('userD', JSON.stringify(data))
      }else {
        localStorage.setItem('userC', JSON.stringify(data))
      }
    }
  },
  
  actions: {
    GET_IS_LOGIN({commit}, data) {
      let isLogin
      if (data === 'mgr') {
        isLogin = Cookies.get("isFirst") && JSON.parse(Cookies.get("isFirst"))
      }
      else {
        isLogin = Cookies.get("isLoginR") && JSON.parse(Cookies.get("isLoginR"))
      }
      commit('SET_IS_LOGIN', Boolean(isLogin))
    },
    GET_USER({commit}, data) {
      let user
      if (data === 'mgr') {
        user = localStorage.getItem("userD")
      }
      else {
        user = localStorage.getItem("userC")
      }
      if(user){
        user = JSON.parse(user)
      }else {
        user = {
          tenantCode: "",
          username: "",
          password: ""
        }
      }
      commit('SET_USER', user)
    },
    // 登出
    logout({commit, state}) {
      let url = "/umc/logout"
      if (state.envR === 'mgr') {
        url = '/mgr/logout'
      }
      Vue.prototype.$fetch.get(url)
        .then(() => {
          commit("SET_IS_LOGIN", false)
          if (state.envR === 'mgr') {
            Cookies.remove("isFirst", domain)
          }
          else {
            Cookies.remove("isLoginR", domain)
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
}
