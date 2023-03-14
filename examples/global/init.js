import Vue from 'vue'
import Cookies from "js-cookie"
import _ from 'lodash'

import toHome from '../components/toHome.vue'
import showReadMe from '../components/showReadMe.vue'
import {useStore} from '../store'

window._ = _

export default function init () {
  let user = localStorage.getItem('userC')
  let store = useStore()
  if (user) {
    store.user = JSON.parse(user)
  }
  let isLogin
  if (store.envR === 'mgr') {
    isLogin = Cookies.get("isFirst") && JSON.parse(Cookies.get("isFirst"))
  }
  else {
    isLogin = Cookies.get("isLoginR") && JSON.parse(Cookies.get("isLoginR"))
  }
  store.isLogin = Boolean(isLogin)
}

Vue.component('toHome', toHome)
Vue.component('showReadMe', showReadMe)
