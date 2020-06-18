import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchCount:0,
    show404:false,
    windowInnerH:window.innerHeight
  },
  mutations: {
    ADD_FETCH_COUNT(state){
      state.fetchCount++
    },
    MINUS_FETCH_COUNT(state){
      state.fetchCount--
    },
    SET_WINDOW_INNER_HEIGHT(state, data) {
      state.windowInnerH = data
    },
    SET_SHOW404(state, data) {
      state.show404 = data
    }
  },
  actions: {},
  modules: {
    user
  }
})
