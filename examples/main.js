import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import iviewArea from 'iview-area'
import './global/iViewTheme.less'
import _ from "lodash"
import VueAMap from 'vue-amap'
import plugRQw from '../lib/plugRQw.umd.min.js'
import '../lib/plugRQw.min.css'

Vue.config.productionTip = false

Vue.use(ViewUI)
Vue.use(iviewArea)
Vue.use(VueAMap)
Vue.use(plugRQw)

window._ = _

Vue.prototype.pageSizes = [
  10,
  20,
  50,
  100
]

VueAMap.initAMapApiLoader({
  key: 'ff57a9e37db989fcd67dc02a4f136084',
  plugin: [
    'AMap.Autocomplete',
    'AMap.Geocoder'
  ], // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
