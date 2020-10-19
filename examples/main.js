import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import en from './lang/en-US'
import zh from './lang/zh-CN'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import enI from 'view-design/dist/locale/en-US'
import zhI from 'view-design/dist/locale/zh-CN'
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
import './global/echartConfig'

Vue.config.productionTip = false

Vue.use(VueI18n)

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

/**
 * @description 注入 echarts 图表,全局控制，只加载一次主题
 * @param {object} registerTheme - 引入需要添加的主题和创建名称
 * @return {object} $echarts
 */
import echarts from "echarts"
/** 设计稿主题款式 westeros - 通心粉款式 */
import westeros from './global/westeros.json'

echarts.registerTheme('westeros', westeros)
window.$echarts = echarts //图表

VueAMap.initAMapApiLoader({
  key: 'ff57a9e37db989fcd67dc02a4f136084',
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