import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import('./views/Home.vue')
    },
    {
      path: '/swal',
      name: 'swal',
      component: ()=>import('./components/swalEX.vue')
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: ()=>import('./components/messageBoxEX.vue')
    },
    {
      path: '/fetch',
      name: 'fetch',
      component: ()=>import('./components/fetchEX.vue')
    },
    {
      path: '/fullScreenImgPreview',
      name: 'fullScreenImgPreview',
      component: ()=>import('./components/fullScreenImgPreviewEX.vue')
    },
    {
      path: '/fullScreenImgByDom',
      name: 'fullScreenImgByDom',
      component: ()=>import('./components/fullScreenImgByDomEX.vue')
    },
    {
      path: '/btTablePage',
      name: 'btTablePage',
      component: ()=>import('./components/btTablePageEX.vue')
    }
  ]
})
