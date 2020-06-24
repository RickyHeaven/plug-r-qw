import Cookies from "js-cookie";
import Vue from 'vue'
import router from './router'

const domain = window.g.domain

export default {
  state: {
    isLoginr: Cookies.get("isLoginr") && JSON.parse(Cookies.get("isLoginr"))
  },
  
  mutations: {
    SET_IS_LOGIN(state, data) {
      state.isLoginr = data;
      Cookies.set("isLoginr", JSON.stringify(data), domain);
    }
  },
  
  actions: {
    // 登出
    logout({commit}) {
      Vue.prototype.$fetch.get("/umc/logout")
        .then(() => {
          commit("SET_IS_LOGIN", false)
          Cookies.remove("isLoginr", domain)
          router.push('/login')
        })
        .catch(e => {
          console.error("登出请求出错：", e)
        })
    }
  }
}
