import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugRQw from '../src/index.js'

Vue.config.productionTip = false

Vue.use(plugRQw)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
