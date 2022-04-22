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
      component: () => import('./views/Home.vue')
    },
    {
      path: '/swal',
      name: '$swal',
      component: () => import('./components/swalEX.vue'),
      meta: {title: '方法：提示框'}
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: () => import('./components/messageBoxEX.vue'),
      meta: {title: '方法：对话框'}
    },
    {
      path: '/fetch',
      name: '$fetch',
      component: () => import('./components/fetchEX.vue'),
      meta: {title: '方法：网络请求'}
    },
    {
      path: '/fullScreenImgPreview',
      name: 'fullScreenImgPreview',
      component: () => import('./components/fullScreenImgPreviewEX.vue'),
      meta: {title: '方法：全屏预览，Modal实现'}
    },
    {
      path: '/fullScreenImgByDom',
      name: 'fullScreenImgByDom',
      component: () => import('./components/fullScreenImgByDomEX.vue'),
      meta: {title: '方法：全屏预览，原生实现'}
    },
    {
      path: '/btTablePage',
      name: 'btTablePage',
      component: () => import('./components/btTablePageEX.vue'),
      meta: {title: '组件：顶部按钮、表格、页签集合'}
    },
    {
      path: '/wellCard',
      name: 'wellCard',
      component: () => import('./components/wellCardEX.vue'),
      meta: {title: '组件：选项卡'}
    },
    {
      path: '/tableTree',
      name: 'tableTree',
      component: () => import('./components/tableTreeEX.vue'),
      meta: {title: '组件：树形表格'}
    },
    {
      path: '/uploadGroup',
      name: 'uploadGroup',
      component: () => import('./components/uploadGroupEX.vue'),
      meta: {title: '组件：上传组件'}
    },
    {
      path: '/tableSetting',
      name: 'tableSetting',
      component: () => import('./components/tableSettingEX.vue'),
      meta: {title: '组件：表格列设置'}
    },
    {
      path: '/inputMap',
      name: 'inputMap',
      component: () => import('./components/inputMapEX.vue'),
      meta: {title: '组件：带输入框的地图'}
    },
    {
      path: '/tableIconBtn',
      name: 'tableIconBtn',
      component: () => import('./components/tableIconBtnEX.vue'),
      meta: {title: '组件：表格图标按钮'}
    },
    {
      path: '/iconTxtBtn',
      name: 'iconTxtBtn',
      component: () => import('./components/iconTxtBtnEX.vue'),
      meta: {title: '组件：带文字图标按钮'}
    },
    {
      path: '/showHidePanel',
      name: 'showHidePanel',
      component: () => import('./components/showHidePanelEX.vue'),
      meta: {title: '组件：收展卡'}
    },
    {
      path: '/selectInput',
      name: 'selectInput',
      component: () => import('./components/selectInputEX.vue'),
      meta: {title: '组件：可选title输入框'}
    },
    {
      path: '/asyncCascader',
      name: 'asyncCascader',
      component: () => import('./components/asyncCascaderEX.vue'),
      meta: {title: '组件：远程级联'}
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./components/editorEX.vue'),
      meta: {title: '组件：富文本'}
    },
    {
      path: '/alCascaderMC',
      name: 'alCascaderMC',
      component: () => import('./components/alCascaderMCEX.vue'),
      meta: {title: '组件：行政区域级联'}
    },
    {
      path: '/checkboxTree',
      name: 'checkboxTree',
      component: () => import('./components/checkboxTreeEX.vue'),
      meta: {title: '组件：复选树形组件'}
    },
    {
      path: '/checkboxGroupTwoClass',
      name: 'checkboxGroupTwoClass',
      component: () => import('./components/checkboxGroupTwoClassEX.vue'),
      meta: {title: '组件：两级复选组'}
    },
    {
      path: '/checkboxGroupThreeClass',
      name: 'checkboxGroupThreeClass',
      component: () => import('./components/checkboxGroupThreeClassEX.vue'),
      meta: {title: '组件：三级复选组'}
    },
    {
      path: '/fullScreenPop',
      name: 'fullScreenPop',
      component: () => import('./components/fullScreenPopEX.vue'),
      meta: {title: '组件：弹框（撑满父元素）'}
    },
    {
      path: '/formR',
      name: 'formR',
      component: () => import('./components/formREX.vue'),
      meta: {title: '组件：表单核心组件'}
    },
    {
      path: '/formModal',
      name: 'formModal',
      component: () => import('./components/formModalEX.vue'),
      meta: {title: '组件：表单弹框'}
    },
    {
      path: '/searchForm',
      name: 'searchForm',
      component: () => import('./components/searchFormEX.vue'),
      meta: {title: '组件：搜索表单'}
    },
    {
      path: '/formGroup',
      name: 'formGroup',
      component: () => import('./components/formGroupEX.vue'),
      meta: {title: '组件：表单组'}
    },
    {
      path: '/showHidePanelB',
      name: 'showHidePanelB',
      component: () => import('./components/showHidePanelBEX.vue'),
      meta: {title: '组件：收展卡B'}
    },
    {
      path: '/tableSearch',
      name: 'tableSearch',
      component: () => import('./components/tableSearchEX.vue'),
      meta: {title: '组件：带高级查询按钮的快捷搜索组件'}
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import('./components/echartsEX.vue'),
      meta: {title: '组件：统计图'}
    },
    {
      path: '/selectScrollMore',
      name: 'selectScrollMore',
      component: () => import('./components/selectScrollMoreEX.vue'),
      meta: {title: '组件：带下拉加载更多的选择框'}
    },
    {
      path: '/findCollection',
      name: 'findCollection',
      component: () => import('./components/findCollectionEX.vue'),
      meta: {title: '方法：查找并返回集合'}
    },
    {
      path: '/transferBox',
      name: 'transferBox',
      component: () => import('./components/transferBoxEX.vue'),
      meta: {title: '组件：穿梭框'}
    },
    {
      path: '/fixedFullModal',
      name: 'fixedFullModal',
      component: () => import('./components/fixedFullModalEX.vue'),
      meta: {title: '组件：全屏弹框，顶部露出下层（如菜单）'}
    },
    {
      path: '/page404',
      name: 'page404',
      component: () => import('./components/page404EX.vue'),
      meta: {title: '组件：404页面'}
    },
    {
      path: '/sichuanCuisine/combo/sideMenu',
      name: 'sideMenu',
      component: () => import('./components/sideMenuEX.vue'),
      meta: {title: '组件：侧边菜单'}
    }
  ]
})
