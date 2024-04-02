import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import Vue from 'vue'
import router from './router'

export const useStore = defineStore('main', {
	state: () => ({
		locale: localStorage.getItem('locale') || 'zh',
		isLogin: false
	}),
	actions: {
		getIsLogin(d) {
			let isLogin
			if (d === 'mgr') {
				isLogin = Cookies.get('isFirst') && JSON.parse(Cookies.get('isFirst'))
			} else {
				isLogin = Cookies.get('isLoginR') && JSON.parse(Cookies.get('isLoginR'))
			}
			this.isLogin = Boolean(isLogin)
		}, // 登出
		logout() {
			Vue.prototype.$fetch
				.get('/node-serve/logout')
				.then(() => {
					this.isLogin = false
					Cookies.remove('isLoginR', window.g.domain)
					if (location.hash.indexOf('login') === -1) {
						router.push('/login')
					}
				})
				.catch((e) => {
					console.error('登出请求出错：', e)
				})
		}
	}
})
