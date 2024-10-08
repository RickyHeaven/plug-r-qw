import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	},
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
			path: '/ajax',
			name: 'AJAX',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/fetch',
					name: '$fetch',
					component: () => import('./components/fetchEX.vue'),
					meta: {
						title: '方法：网络请求',
						bg: 'linear-gradient(to right, #7d3e97, #9b66b1, #5d2574)',
						icon: 'icon-aJax',
						cls: 'clockwise both'
					}
				}
			]
		},
		{
			path: '/chart',
			name: 'CHART',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/echart-line',
					name: 'echart-line',
					component: () => import('./components/echartLineEX.vue'),
					meta: {
						title: '组件：折线图',
						bg: 'linear-gradient(to right, #A5FECB, #20BDFF, #5433FF)',
						cls: 'clockwise horizontal',
						icon: 'icon-echart-line'
					}
				},
				{
					path: '/echart-bar',
					name: 'echart-bar',
					component: () => import('./components/echartBarEX.vue'),
					meta: {
						title: '组件：柱状图',
						bg: 'linear-gradient(to right, #A5FECB, #20BDFF, #5433FF)',
						cls: 'clockwise horizontal',
						icon: 'icon-echart-bar'
					}
				},
				{
					path: '/echart-pie',
					name: 'echart-pie',
					component: () => import('./components/echartPieEX.vue'),
					meta: {
						title: '组件：饼状图',
						bg: 'linear-gradient(to right, #A5FECB, #20BDFF, #5433FF)',
						cls: 'clockwise horizontal',
						icon: 'icon-pie'
					}
				}
			]
		},
		{
			path: '/css',
			name: 'CSS',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/loaders',
					name: 'loaders',
					component: () => import('./components/loadersEX.vue'),
					meta: {
						title: '组件：各种加载动画',
						bg: 'linear-gradient(to right, #8E54E9, #4776E6)',
						icon: 'icon-loader',
						cls: 'counterclockwise horizontal'
					}
				},
				{
					path: '/figure',
					name: 'figure',
					component: () => import('./components/figureEX.vue'),
					meta: {
						title: '样式：各种图形动画实例',
						bg: 'linear-gradient(to right, #8E54E9, #4776E6)',
						icon: 'icon-css3',
						cls: 'counterclockwise horizontal'
					}
				}
			]
		},
		{
			path: '/editor',
			name: 'EDITOR',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/editor',
					name: 'editor',
					component: () => import('./components/editorEX.vue'),
					meta: {
						title: '组件：富文本编辑器',
						bg: 'linear-gradient(to right, #32ab89, #1e542f)',
						icon: 'icon-editor',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/editorPro',
					name: 'editorPro',
					component: () => import('./components/editorProEX.vue'),
					meta: {
						title: '组件：富文本编辑器Pro',
						bg: 'linear-gradient(to right, #698544, #4b6811)',
						icon: 'icon-editor',
						cls: 'counterclockwise both'
					}
				}
			]
		},
		{
			path: '/form',
			name: 'FORM',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/formR',
					name: 'formR',
					component: () => import('./components/formREX.vue'),
					meta: {
						title: '组件：表单核心组件',
						bg: 'linear-gradient(to right, #4b4ec1, #24278d, #0F2027)',
						icon: 'icon-formR',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/searchForm',
					name: 'searchForm',
					component: () => import('./components/searchFormEX.vue'),
					meta: {
						title: '组件：搜索表单',
						bg: 'linear-gradient(to right, #41829f, #36a0eb, #176b7e)',
						icon: 'icon-searchForm',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/formModal',
					name: 'formModal',
					component: () => import('./components/formModalEX.vue'),
					meta: {
						title: '组件：表单弹框',
						bg: 'linear-gradient(to right, #227ea7, #203A43, #0F2027)',
						icon: 'icon-formModal',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/formGroup',
					name: 'formGroup',
					component: () => import('./components/formGroupEX.vue'),
					meta: {
						title: '组件：表单组',
						bg: 'linear-gradient(to right, #15c170, #1f4037)',
						icon: 'icon-wpforms',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/formTeam',
					name: 'formTeam',
					component: () => import('./components/formTeamEX.vue'),
					meta: {
						title: '组件：单个表单内部带分组（便于布局和样式控制）',
						bg: 'linear-gradient(to right, #89f7c2, #268557)',
						icon: 'icon-a-icon_CatalogueClassification',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/monthRange',
					name: 'monthRange',
					component: () => import('./components/monthRangeEX.vue'),
					meta: {
						title: '组件：月份区间选择',
						bg: 'linear-gradient(to right, #ff7858, #f857e6)',
						icon: 'icon-monthRange',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/uploadGroup',
					name: 'uploadGroup',
					component: () => import('./components/uploadGroupEX.vue'),
					meta: {
						title: '组件：上传组件',
						bg: 'linear-gradient(to right, #2a0845, #6441A5)',
						icon: 'icon-uploadGroup',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/iconTxtBtn',
					name: 'iconTxtBtn',
					component: () => import('./components/iconTxtBtnEX.vue'),
					meta: {
						title: '组件：带文字图标按钮',
						bg: 'linear-gradient(to right, #182848, #4b6cb7)',
						icon: 'icon-delete',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/selectInput',
					name: 'selectInput',
					component: () => import('./components/selectInputEX.vue'),
					meta: {
						title: '组件：可选title输入框',
						bg: 'linear-gradient(to right, #2d4574, #4b6cb7)',
						icon: 'icon-selectInput',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/asyncCascader',
					name: 'asyncCascader',
					component: () => import('./components/asyncCascaderEX.vue'),
					meta: {
						title: '组件：远程级联',
						bg: 'linear-gradient(to right, #63b128, #41cd0b)',
						icon: 'icon-sync',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/alCascaderMC',
					name: 'alCascaderMC',
					component: () => import('./components/alCascaderMCEX.vue'),
					meta: {
						title: '组件：行政区域级联',
						bg: 'linear-gradient(to right, #727a17, #414d0b)',
						icon: 'icon-alCascaderMC',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/selectScrollMore',
					name: 'selectScrollMore',
					component: () => import('./components/selectScrollMoreEX.vue'),
					meta: {
						title: '组件：带下拉加载更多的选择框',
						bg: 'linear-gradient(to right, #7a2828, #a73737)',
						icon: 'icon-selectScrollMore',
						cls: 'counterclockwise both'
					}
				}
			]
		},
		{
			path: '/layout',
			name: 'LAYOUT',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/sichuanCuisine/combo/sideMenu',
					name: 'sideMenu',
					component: () => import('./components/sideMenuEX.vue'),
					meta: {
						title: '组件：侧边菜单',
						bg: 'linear-gradient(to right, #252566, #5136a7, #170f56)',
						icon: 'icon-leftMenu',
						cls: 'counterclockwise horizontal'
					}
				},
				{
					path: '/sichuanCuisine/combo/twiceCookedPork/sideMenuPro',
					name: 'sideMenuPro',
					component: () => import('./components/sideMenuProEX.vue'),
					meta: {
						title: '组件：侧边菜单',
						bg: 'linear-gradient(to right, #252566, #5136a7, #170f56)',
						icon: 'icon-menu',
						cls: 'counterclockwise horizontal'
					}
				},
				{
					path: '/showHidePanel',
					name: 'showHidePanel',
					component: () => import('./components/showHidePanelEX.vue'),
					meta: {
						title: '组件：收展卡',
						bg: 'linear-gradient(to right, #24243e, #302b63, #391a85)',
						icon: 'icon-fold',
						cls: 'counterclockwise horizontal'
					}
				},
				{
					path: '/showHidePanelB',
					name: 'showHidePanelB',
					component: () => import('./components/showHidePanelBEX.vue'),
					meta: {
						title: '组件：收展卡B',
						bg: 'linear-gradient(to right, #382a62, #644bb1, #0f0c29)',
						icon: 'icon-fold',
						cls: 'counterclockwise horizontal'
					}
				},
				{
					path: '/wellCard',
					name: 'wellCard',
					component: () => import('./components/wellCardEX.vue'),
					meta: {
						title: '组件：选项卡',
						bg: 'linear-gradient(to right, #7a2828, #a73737)',
						icon: 'icon-wellCard',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/fullScreenPop',
					name: 'fullScreenPop',
					component: () => import('./components/fullScreenPopEX.vue'),
					meta: {
						title: '组件：弹框（撑满父元素）',
						bg: 'linear-gradient(to right, #50507e, #302b63, #0f0c29)',
						icon: 'icon-mainMenu',
						cls: 'counterclockwise horizontal'
					}
				},
				{
					path: '/page404',
					name: 'page404',
					component: () => import('./components/page404EX.vue'),
					meta: {
						title: '组件：404页面',
						bg: 'linear-gradient(to right, #454589, #302b63, #0f0c29)',
						icon: 'icon-notPage',
						cls: 'counterclockwise horizontal'
					}
				}
			]
		},
		{
			path: '/map',
			name: 'MAP',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/inputMap',
					name: 'inputMap',
					component: () => import('./components/inputMapEX.vue'),
					meta: {
						title: '组件：带输入框的地图',
						bg: 'linear-gradient(to right, #dc2430, #7b4397)',
						icon: 'icon-iconfind',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/echartMap',
					name: 'echartMap',
					component: () => import('./components/echartMapEX.vue'),
					meta: {
						title: '组件：基于echarts技术支持的地图',
						bg: 'linear-gradient(to right, #dc2430, #7b4397)',
						icon: 'icon-map',
						cls: 'clockwise horizontal'
					}
				}
			]
		},
		{
			path: '/methods',
			name: 'METHODS',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/findCollection',
					name: 'findCollection',
					component: () => import('./components/findCollectionEX.vue'),
					meta: {
						title: '方法：查找并返回集合',
						bg: 'linear-gradient(to right, #eea849, #f46b45)',
						icon: 'icon-findCollection',
						cls: 'clockwise both'
					}
				},
				{
					path: '/domPrint',
					name: 'domPrint',
					component: () => import('./components/domPrintEX.vue'),
					meta: {
						title: '方法：网页打印',
						bg: 'linear-gradient(to right, #eea849, #f46b45)',
						icon: 'icon-print',
						cls: 'clockwise both'
					}
				}
			]
		},
		{
			path: '/modal',
			name: 'MODAL',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/swal',
					name: '$swal',
					component: () => import('./components/swalEX.vue'),
					meta: {
						title: '方法：提示框',
						icon: 'icon-swal',
						bg: 'linear-gradient(to right, #6dd5ed, #00bacd)',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/messageBox',
					name: 'messageBox',
					component: () => import('./components/messageBoxEX.vue'),
					meta: {
						title: '方法：对话框',
						icon: 'icon-shejiao-duihuakuang',
						bg: 'linear-gradient(to right, #55c0ff, #2193b0)',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/fullScreenImgByDom',
					name: 'fullScreenImgByDom',
					component: () => import('./components/fullScreenImgByDomEX.vue'),
					meta: {
						title: '方法：全屏预览，原生实现',
						icon: 'icon-quanping',
						bg: 'linear-gradient(to right, #09b3db, #2193b0)',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/fullScreenImgPreview',
					name: 'fullScreenImgPreview',
					component: () => import('./components/fullScreenImgPreviewEX.vue'),
					meta: {
						title: '方法：全屏预览，Modal实现',
						icon: 'icon-quanping2',
						bg: 'linear-gradient(to right, #6deddb, #2193b0)',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/fixedFullModal',
					name: 'fixedFullModal',
					component: () => import('./components/fixedFullModalEX.vue'),
					meta: {
						title: '组件：全屏弹框，顶部露出下层（如菜单）',
						bg: 'linear-gradient(to right, #47bfdb, #137187)',
						icon: 'icon-fullScreenEnter',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/customModal',
					name: 'customModal',
					component: () => import('./components/customModalEX.vue'),
					meta: {
						title: '组件：表单弹框',
						bg: 'linear-gradient(to right, #5493af, #357a99, #0F2027)',
						icon: 'icon-formModal',
						cls: 'counterclockwise both'
					}
				}
			]
		},
		{
			path: '/table',
			name: 'TABLE',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/btTablePage',
					name: 'btTablePage',
					component: () => import('./components/btTablePageEX.vue'),
					meta: {
						title: '组件：顶部按钮、表格、页签集合',
						bg: 'linear-gradient(to right, #445dbb, #233989, #0F2027)',
						icon: 'icon-table',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/tableSetting',
					name: 'tableSetting',
					component: () => import('./components/tableSettingEX.vue'),
					meta: {
						title: '组件：表格列设置',
						bg: 'linear-gradient(to right, #ff5858, #f857a6)',
						icon: 'icon-setting',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/tableSearch',
					name: 'tableSearch',
					component: () => import('./components/tableSearchEX.vue'),
					meta: {
						title: '组件：带高级查询按钮的快捷搜索组件',
						bg: 'linear-gradient(to right, #43cf8d, #1b7048)',
						icon: 'icon-searchForm',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/tableIconBtn',
					name: 'tableIconBtn',
					component: () => import('./components/tableIconBtnEX.vue'),
					meta: {
						title: '组件：表格内图标按钮',
						bg: 'linear-gradient(to right, #f05858, #f8a7a6)',
						icon: 'icon-si-glyph-document-edit',
						cls: 'counterclockwise both'
					}
				},
				{
					path: '/transferBox',
					name: 'transferBox',
					component: () => import('./components/transferBoxEX.vue'),
					meta: {
						title: '组件：穿梭框',
						bg: 'linear-gradient(to right, #eea849, #f46b45)',
						icon: 'icon-transfer',
						cls: 'counterclockwise both'
					}
				}
			]
		},
		{
			path: '/tree',
			name: 'TREE',
			component: () => import('./views/routerViewComponent.vue'),
			children: [
				{
					path: '/checkboxTree',
					name: 'checkboxTree',
					component: () => import('./components/checkboxTreeEX.vue'),
					meta: {
						title: '组件：复选树形组件',
						bg: 'linear-gradient(to right, #348AC7, #7474BF)',
						icon: 'icon-tree2',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/checkboxGroupTwoClass',
					name: 'checkboxGroupTwoClass',
					component: () => import('./components/checkboxGroupTwoClassEX.vue'),
					meta: {
						title: '组件：两级复选组',
						bg: 'linear-gradient(to right, #348AC7, #7474BF)',
						icon: 'icon-tree',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/checkboxGroupThreeClass',
					name: 'checkboxGroupThreeClass',
					component: () => import('./components/checkboxGroupThreeClassEX.vue'),
					meta: {
						title: '组件：三级复选组',
						bg: 'linear-gradient(to right, #2a0845, #6441A5)',
						icon: 'icon-tree',
						cls: 'clockwise horizontal'
					}
				},
				{
					path: '/tableTree',
					name: 'tableTree',
					component: () => import('./components/tableTreeEX.vue'),
					meta: {
						title: '组件：树形表格',
						bg: 'linear-gradient(to right, #4c1776, #6441A5)',
						icon: 'icon-tree3',
						cls: 'clockwise horizontal'
					}
				}
			]
		}
	]
})
