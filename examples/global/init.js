import Vue from 'vue'
import Cookies from 'js-cookie'

import toHome from '../components/toHome.vue'
import showReadMe from '../components/showReadMe.vue'
import { useStore } from '../store'

export default function init() {
	let store = useStore()
	store.isLogin = Boolean(Cookies.get('isLoginR') && JSON.parse(Cookies.get('isLoginR')))
}

Vue.component('toHome', toHome)
Vue.component('showReadMe', showReadMe)
