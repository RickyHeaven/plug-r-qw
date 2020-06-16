import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
import './global/iViewTheme.less'
import _ from "lodash"
import plugRQw from '../src/index.js'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(plugRQw)

window._ = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
