import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import en from './lang/en-US'
import zh from './lang/zh-CN'
import ViewUI from '@zhangqingcq/view-design-r'
import '@zhangqingcq/view-design-r/dist/styles/iview.css'
import enI from '@zhangqingcq/view-design-r/dist/locale/en-US'
import zhI from '@zhangqingcq/view-design-r/dist/locale/zh-CN'
import './global/iViewTheme.less'
import _ from "lodash"
import VueAMap from 'vue-amap'
import plugRQw from '../src/index.js'
import '../src/style/index.less'
import enR from '../src/locale/lang/en-US'
import zhR from '../src/locale/lang/zh-CN'
// import plugRQw from '../lib/plugRQw.umd.min.js'
// import '../lib/plugRQw.min.css'
// import enR from '../lib/lang/en-US'
// import zhR from '../lib/lang/zh-CN'
import './global/init.js'
import dataV from '@jiaminghi/data-view'


Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(dataV)

Vue.locale = () => {
}

const messages = {
  en: {...en, ...enI, ...enR},
  zh: {...zh, ...zhI, ...zhR}
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
  store,
  router,
  i18n(path, options) {
    return i18n.t(path, options) || ''
  }
})

window._ = _

Vue.prototype.pageSizes = [
  10,
  20,
  50,
  100
]

window._AMapSecurityConfig = {
  securityJsCode:'1e77836c15c172e8cda4249f26d64326',
}

VueAMap.initAMapApiLoader({
  key: 'd1e34acab7c1eae8614e0a12bfafc99d',
  plugin: [
    'AMap.Autocomplete',
    'AMap.Geocoder'
  ], // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.i18n = i18n
