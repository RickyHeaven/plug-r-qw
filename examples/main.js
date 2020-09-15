import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './global/iViewTheme.less'
import _ from "lodash"
import VueAMap from 'vue-amap'
import plugRQw from '../src/index.js'
import '../src/style/index.less'
// import plugRQw from '../lib/plugRQw.umd.min.js'
// import '../lib/plugRQw.min.css'
import './global/init.js'
import './global/echartConfig'

Vue.config.productionTip = false

Vue.use(ViewUI)
Vue.use(VueAMap)
Vue.use(plugRQw)

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

plugRQw.init({
  store: store
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
