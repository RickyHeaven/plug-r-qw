import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
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
      name: '$swal',
      component: ()=>import('./components/swalEX.vue')
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: ()=>import('./components/messageBoxEX.vue')
    },
    {
      path: '/fetch',
      name: '$fetch',
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
    },
    {
      path: '/wellCard',
      name: 'wellCard',
      component: ()=>import('./components/wellCardEX.vue')
    },
    {
      path: '/tableTree',
      name: 'tableTree',
      component: ()=>import('./components/tableTreeEX.vue')
    },
    {
      path: '/uploadGroup',
      name: 'uploadGroup',
      component: ()=>import('./components/uploadGroupEX.vue')
    },
    {
      path: '/tableSetting',
      name: 'tableSetting',
      component: ()=>import('./components/tableSettingEX.vue')
    },
    {
      path: '/inputMap',
      name: 'inputMap',
      component: ()=>import('./components/inputMapEX.vue')
    },
    {
      path: '/tableIconBtn',
      name: 'tableIconBtn',
      component: ()=>import('./components/tableIconBtnEX.vue')
    },
    {
      path: '/iconTxtBtn',
      name: 'iconTxtBtn',
      component: ()=>import('./components/iconTxtBtnEX.vue')
    },
    {
      path: '/showHidePanel',
      name: 'showHidePanel',
      component: ()=>import('./components/showHidePanelEX.vue')
    },
    {
      path: '/selectInput',
      name: 'selectInput',
      component: ()=>import('./components/selectInputEX.vue')
    },
    {
      path: '/orgCascader',
      name: 'orgCascader',
      component: ()=>import('./components/orgCascaderEX.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: ()=>import('./components/editorEX.vue')
    },
    {
      path: '/alCascaderMC',
      name: 'alCascaderMC',
      component: ()=>import('./components/alCascaderMCEX.vue')
    },
    {
      path: '/checkboxTree',
      name: 'checkboxTree',
      component: ()=>import('./components/checkboxTreeEX.vue')
    },
    {
      path: '/checkboxGroupTwoClass',
      name: 'checkboxGroupTwoClass',
      component: ()=>import('./components/checkboxGroupTwoClassEX.vue')
    },
    {
      path: '/checkboxGroupThreeClass',
      name: 'checkboxGroupThreeClass',
      component: ()=>import('./components/checkboxGroupThreeClassEX.vue')
    },
    {
      path: '/fullScreenPop',
      name: 'fullScreenPop',
      component: ()=>import('./components/fullScreenPopEX.vue')
    },
    {
      path: '/formR',
      name: 'formR',
      component: ()=>import('./components/formREX.vue')
    }
  ]
})
