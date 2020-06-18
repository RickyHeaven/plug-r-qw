import Cookies from "js-cookie";
import Vue from 'vue'
import router from './router'

const domain = window.g.domain

export default {
  state: {
    isLogin: Cookies.get("isFirst") && JSON.parse(Cookies.get("isFirst"))
  },
  
  mutations: {
    SET_IS_LOGIN(state, data) {
      state.isLogin = data;
      Cookies.set("isFirst", JSON.stringify(data), domain);
    }
  },
  
  actions: {
    // 登出
    logout({commit}) {
      Vue.prototype.$fetch.get("/umc/logout")
        .then(() => {
          commit("SET_IS_LOGIN", false)
          Cookies.remove("isFirst", domain)
          router.push('/login')
        })
        .catch(e => {
          console.error("登出请求出错：", e)
        })
    }
  }
}
