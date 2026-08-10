import Vue from 'vue'
import VueRouter from 'vue-router'
import { useStore } from './store'

Vue.use(VueRouter)

const router = new VueRouter({
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	},
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			redirect: '/fetch'
		},
		{
			path: '/fetch',
			name: '$fetch',
			component: () => import('./views/fetchEX.vue'),
			meta: {
				desc: '网络请求插件'
			}
		},
		{
			path: '/swal',
			name: '$swal',
			component: () => import('./views/swalEX.vue'),
			meta: {
				desc: '提示框'
			}
		},
		{
			path: '/alCascaderMC',
			name: 'alCascaderMC',
			component: () => import('./views/alCascaderMCEX.vue'),
			meta: {
				desc: '行政区域级联'
			}
		},
		{
			path: '/asyncCascader',
			name: 'asyncCascader',
			component: () => import('./views/asyncCascaderEX.vue'),
			meta: {
				desc: '远程级联选择器'
			}
		},
		{
			path: '/beijingMap',
			name: 'beijingMap',
			component: () => import('./views/beijingMapEX.vue'),
			meta: {
				desc: '北京地图'
			}
		},
		{
			path: '/btTablePage',
			name: 'btTablePage',
			component: () => import('./views/btTablePageEX.vue'),
			meta: {
				desc: '表格页签集成组件'
			}
		},
		{
			path: '/checkboxGroupThreeClass',
			name: 'checkboxGroupThreeClass',
			component: () => import('./views/checkboxGroupThreeClassEX.vue'),
			meta: {
				desc: '三类复选框组'
			}
		},
		{
			path: '/checkboxGroupTwoClass',
			name: 'checkboxGroupTwoClass',
			component: () => import('./views/checkboxGroupTwoClassEX.vue'),
			meta: {
				desc: '两类复选框组'
			}
		},
		{
			path: '/checkboxTree',
			name: 'checkboxTree',
			component: () => import('./views/checkboxTreeEX.vue'),
			meta: {
				desc: '复选框树'
			}
		},
		{
			path: '/chinaMap',
			name: 'chinaMap',
			component: () => import('./views/chinaMapEX.vue'),
			meta: {
				desc: '中国地图'
			}
		},
		{
			path: '/chinaMapThree',
			name: 'chinaMapThree',
			component: () => import('./views/chinaMapThreeEX.vue'),
			meta: {
				desc: '中国地图三'
			}
		},
		{
			path: '/chinaMapTwo',
			name: 'chinaMapTwo',
			component: () => import('./views/chinaMapTwoEX.vue'),
			meta: {
				desc: '中国地图二'
			}
		},
		{
			path: '/customModal',
			name: 'customModal',
			component: () => import('./views/customModalEX.vue'),
			meta: {
				desc: '自定义弹框'
			}
		},
		{
			path: '/domPrint',
			name: 'domPrint',
			component: () => import('./views/domPrintEX.vue'),
			meta: {
				desc: '网页Dom打印'
			}
		},
		{
			path: '/echartBar',
			name: 'echartBar',
			component: () => import('./views/echartBarEX.vue'),
			meta: {
				desc: 'ECharts柱状图'
			}
		},
		{
			path: '/echartLine',
			name: 'echartLine',
			component: () => import('./views/echartLineEX.vue'),
			meta: {
				desc: 'ECharts折线图'
			}
		},
		{
			path: '/echartMap',
			name: 'echartMap',
			component: () => import('./views/echartMapEX.vue'),
			meta: {
				desc: 'ECharts地图'
			}
		},
		{
			path: '/echartPie',
			name: 'echartPie',
			component: () => import('./views/echartPieEX.vue'),
			meta: {
				desc: 'ECharts饼图'
			}
		},
		{
			path: '/editor',
			name: 'editor',
			component: () => import('./views/editorEX.vue'),
			meta: {
				desc: '编辑器'
			}
		},
		{
			path: '/editorPro',
			name: 'editorPro',
			component: () => import('./views/editorProEX.vue'),
			meta: {
				desc: '富文本编辑器'
			}
		},
		{
			path: '/figure',
			name: 'figure',
			component: () => import('./views/figureEX.vue'),
			meta: {
				desc: '数字展示'
			}
		},
		{
			path: '/findCollection',
			name: 'findCollection',
			component: () => import('./views/findCollectionEX.vue'),
			meta: {
				desc: '查找集合'
			}
		},
		{
			path: '/fixedFullModal',
			name: 'fixedFullModal',
			component: () => import('./views/fixedFullModalEX.vue'),
			meta: {
				desc: '固定全屏弹框'
			}
		},
		{
			path: '/formGroup',
			name: 'formGroup',
			component: () => import('./views/formGroupEX.vue'),
			meta: {
				desc: '表单组'
			}
		},
		{
			path: '/formModal',
			name: 'formModal',
			component: () => import('./views/formModalEX.vue'),
			meta: {
				desc: '表单弹框'
			}
		},
		{
			path: '/formR',
			name: 'formR',
			component: () => import('./views/formREX.vue'),
			meta: {
				desc: '表单'
			}
		},
		{
			path: '/formTeam',
			name: 'formTeam',
			component: () => import('./views/formTeamEX.vue'),
			meta: {
				desc: '分组表单'
			}
		},
		{
			path: '/fullScreenImgByDom',
			name: 'fullScreenImgByDom',
			component: () => import('./views/fullScreenImgByDomEX.vue'),
			meta: {
				desc: '全屏图片预览'
			}
		},
		{
			path: '/fullScreenImgPreview',
			name: 'fullScreenImgPreview',
			component: () => import('./views/fullScreenImgPreviewEX.vue'),
			meta: {
				desc: '全屏图片预览（Modal方式）'
			}
		},
		{
			path: '/fullScreenPop',
			name: 'fullScreenPop',
			component: () => import('./views/fullScreenPopEX.vue'),
			meta: {
				desc: '全屏弹框'
			}
		},
		{
			path: '/iconTxtBtn',
			name: 'iconTxtBtn',
			component: () => import('./views/iconTxtBtnEX.vue'),
			meta: {
				desc: '图标文字按钮'
			}
		},
		{
			path: '/inputMap',
			name: 'inputMap',
			component: () => import('./views/inputMapEX.vue'),
			meta: {
				desc: '地点选择'
			}
		},
		{
			path: '/loaders',
			name: 'loaders',
			component: () => import('./views/loadersEX.vue'),
			meta: {
				desc: '加载动画'
			}
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('./views/login.vue')
		},
		{
			path: '/messageBox',
			name: 'messageBox',
			component: () => import('./views/messageBoxEX.vue'),
			meta: {
				desc: '对话框'
			}
		},
		{
			path: '/monthRange',
			name: 'monthRange',
			component: () => import('./views/monthRangeEX.vue'),
			meta: {
				desc: '月份区间选择器'
			}
		},
		{
			path: '/page404',
			name: 'page404',
			component: () => import('./views/page404EX.vue'),
			meta: {
				desc: '404页面'
			}
		},
		{
			path: '/searchForm',
			name: 'searchForm',
			component: () => import('./views/searchFormEX.vue'),
			meta: {
				desc: '搜索表单'
			}
		},
		{
			path: '/selectInput',
			name: 'selectInput',
			component: () => import('./views/selectInputEX.vue'),
			meta: {
				desc: '可换label输入框'
			}
		},
		{
			path: '/selectScrollMore',
			name: 'selectScrollMore',
			component: () => import('./views/selectScrollMoreEX.vue'),
			meta: {
				desc: '下拉框-下拉加载更多选项'
			}
		},
		{
			path: '/showHidePanel',
			name: 'showHidePanel',
			component: () => import('./views/showHidePanelEX.vue'),
			meta: {
				desc: '显示隐藏面板'
			}
		},
		{
			path: '/showHidePanelB',
			name: 'showHidePanelB',
			component: () => import('./views/showHidePanelBEX.vue'),
			meta: {
				desc: '显示隐藏面板B'
			}
		},
		{
			path: '/sichuanCuisine/combo/sideMenu',
			name: 'sideMenu',
			component: () => import('./views/sideMenuEX.vue'),
			meta: {
				desc: '左侧菜单'
			}
		},
		{
			path: '/sichuanCuisine/combo/twiceCookedPork/sideMenuPro',
			name: 'sideMenuPro',
			component: () => import('./views/sideMenuProEX.vue'),
			meta: {
				desc: '左侧菜单Pro'
			}
		},
		{
			path: '/tableIconBtn',
			name: 'tableIconBtn',
			component: () => import('./views/tableIconBtnEX.vue'),
			meta: {
				desc: '表格图标按钮'
			}
		},
		{
			path: '/tableSearch',
			name: 'tableSearch',
			component: () => import('./views/tableSearchEX.vue'),
			meta: {
				desc: '表格搜索'
			}
		},
		{
			path: '/tableSetting',
			name: 'tableSetting',
			component: () => import('./views/tableSettingEX.vue'),
			meta: {
				desc: '表格列设置'
			}
		},
		{
			path: '/tableTree',
			name: 'tableTree',
			component: () => import('./views/tableTreeEX.vue'),
			meta: {
				desc: '表格树'
			}
		},
		{
			path: '/transferBox',
			name: 'transferBox',
			component: () => import('./views/transferBoxEX.vue'),
			meta: {
				desc: '穿梭框'
			}
		},
		{
			path: '/uploadGroup',
			name: 'uploadGroup',
			component: () => import('./views/uploadGroupEX.vue'),
			meta: {
				desc: '上传文件'
			}
		},
		{
			path: '/wellCard',
			name: 'wellCard',
			component: () => import('./views/wellCardEX.vue'),
			meta: {
				desc: '井卡片'
			}
		},
		{
			path: '/worldMap',
			name: 'worldMap',
			component: () => import('./views/worldMapEX.vue'),
			meta: {
				desc: '世界地图'
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	const store = useStore()
	if (from.name === 'login') {
		store.fullScreen = false
	} else if ((to.name === 'login' || to.name === 'tablePrint') && !store.fullScreen) {
		store.fullScreen = true
	}
	next()
})

export default router
