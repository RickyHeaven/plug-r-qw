import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'
import router from './router'
import { useStore } from './store'
import VueI18n from 'vue-i18n'
import en from './lang/en-US'
import zh from './lang/zh-CN'
import ViewUI from '@zhangqingcq/view-design-r'
import enI from '@zhangqingcq/view-design-r/dist/locale/en-US'
import zhI from '@zhangqingcq/view-design-r/dist/locale/zh-CN'
import './global/iViewTheme.less'
import VueAMap from 'vue-amap'
import plugRQw from '../src'
import '../src/style/index.less'
import enR from '../src/locale/lang/en-US'
import zhR from '../src/locale/lang/zh-CN'
// import plugRQw from '../lib/plugRQw.umd.min.js'
// import '../lib/plugRQw.min.css'
// import enR from '../lib/lang/en-US'
// import zhR from '../lib/lang/zh-CN'

import init from './global/init'
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.use(VueI18n)

const messages = {
	en: { ...en, ...enI, ...enR },
	zh: { ...zh, ...zhI, ...zhR }
}

const i18n = new VueI18n({
	locale: localStorage.getItem('locale') || 'zh',
	messages
})

Vue.use(ViewUI, {
	i18n(path, options) {
		return i18n.t(path, options) || ''
	}
})
Vue.use(VueAMap)
Vue.use(plugRQw, {
	useStore,
	router,
	i18n(path, options) {
		return i18n.t(path, options) || ''
	}
})

Vue.use(dataV)

Vue.prototype.pageSizes = [10, 20, 50, 100]

window._AMapSecurityConfig = {
	securityJsCode: '6784d3fc333089ce3d6d314112609eac'
}

VueAMap.initAMapApiLoader({
	key: '6836a3633a8cdf2bffab565e44242866',
	plugin: ['AMap.Autocomplete', 'AMap.Geocoder'], // 默认高德 sdk 版本为 1.4.4
	v: '1.4.4'
})

Vue.prototype.setTimeout(() => {
	init()
}, 2000)

new Vue({
	i18n,
	router,
	pinia,
	render: (h) => h(App)
}).$mount('#app')

window.i18n = i18n
