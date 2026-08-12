import Hello from './components/hello.vue'
import btTablePage from './components/btTablePage/btTablePage.vue'
import pagePro from './components/pagePro/pagePro.vue'
import wellCard from './components/wellCard/wellCard.vue'
import tableTree from './components/tableTree/tableTree.vue'
import uploadGroup from './components/uploadGroup/uploadGroup.vue'
import tableSetting from './components/tableSetting/tableSetting.vue'
import inputMap from './components/inputMap/inputMap.vue'
import tableIconBtn from './components/tableIconBtn/tableIconBtn.vue'
import iconTxtBtn from './components/iconTxtBtn/iconTxtBtn.vue'
import showHidePanel from './components/showHidePanel/showHidePanel.vue'
import selectInput from './components/selectInput/selectInput.vue'
import asyncCascader from './components/asyncCascader/asyncCascader.vue'
import editor from './components/editor/editor.vue'
import editorPro from './components/editorPro/editorPro.vue'
import alCascaderMC from './components/alCascaderMC/alCascaderMC.vue'
import checkboxTree from './components/checkboxTree/checkboxTree.vue'
import checkboxGroupTwoClass from './components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue'
import checkboxGroupThreeClass from './components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue'
import fullScreenPop from './components/fullScreenPop/fullScreenPop.vue'
import headerBt from './components/headerBt/headerBt.vue'
import formR from './components/formR/formR.vue'
import formModal from './components/formModal/formModal.vue'
import customModal from './components/customModal/customModal.vue'
import searchForm from './components/searchForm/searchForm.vue'
import formGroup from './components/formGroup/formGroup.vue'
import echart from './components/echarts/echart.vue'
import showHidePanelB from './components/showHidePanelB/showHidePanelB.vue'
import tableSearch from './components/tableSearch/tableSearch.vue'
import selectScrollMore from './components/selectScrollMore/selectScrollMore.vue'
import transferBox from './components/transferBox/transferBox.vue'
import fixedFullModal from './components/fixedFullModal/fixedFullModal.vue'
import page404 from './components/page404/page404.vue'
import sideMenu from './components/sideMenu/sideMenu.vue'
import sideMenuPro from './components/sideMenuPro/sideMenuPro.vue'
import tableTooltip from './components/tableTooltip/tableTooltip.vue'
import messageBox from './utils/messageBox.js'
import $swal from './utils/swal.js'
import fullScreenImgPreview from './utils/fullScreenImgPreview.js'
import fullScreenImgByDom from './utils/fullScreenImgByDom.js'
import $fetch from './utils/fetch.js'
import tablePrint from './utils/tablePrint'
import domPrint from './utils/domPrint'
import $swalConfirm from './utils/swalConfirm.js'
import arCascader from 'ar-cascader'
import JsonView from 'vue-json-viewer'
import loaders from './components/loaders/loaders.vue'
import echartMap from './components/echartMap/echartMap.vue'
import monthRange from './components/monthRange/monthRange.vue'
import date from './components/date/date.vue'
import {
	myTypeof,
	toHump,
	toLine,
	trimObj,
	clearObj,
	htmlEncode,
	htmlDecode,
	getFileSrc,
	getFileTypeByName,
	isImgByFile,
	getFileTypeIconByName,
	downloadFileReaderFile,
	fakeALinkClick,
	formDataHeadConfig,
	toFormData,
	findPath,
	oneOf,
	decimalDigitsLimit,
	downloadFileByFormSubmit,
	downloadFileWithSpin,
	isValidValue,
	isNumberValue,
	tooltipManual,
	getStringWidth,
	isEmptyValue,
	stringLength,
	setValByOption,
	hasPermission,
	emptyInput,
	isNaN,
	dataFilterOrToUrl,
	stopBubbling,
	fileExport,
	getColumnsKeys,
	removeEmptyValue,
	findCollection,
	htmlPrint,
	siblingElems
} from './utils/functionGroup.js'
import locale from './locale/index'
import clickOutside from './directives/clickOutside/index.js'
import hasDirective from './directives/has/index.js'
import loadmoreDirective from './directives/loadmore/index.js'
import transferDomDirective from './directives/transferDom/index.js'
import timer, { setTimeout, setInterval } from './utils/timer'
import './utils/wangeditor5init'

/*直接使用的组件（注册为全局Vue组件）*/
const components = {
	HelloR: Hello,
	btTablePage,
	pagePro,
	wellCard,
	tableTree,
	tableSetting,
	tableIconBtn,
	tableSearch,
	tableTooltip,
	uploadGroup,
	inputMap,
	iconTxtBtn,
	showHidePanel,
	selectInput,
	asyncCascader,
	editor,
	editorPro,
	alCascaderMC,
	checkboxTree,
	checkboxGroupTwoClass,
	checkboxGroupThreeClass,
	fullScreenPop,
	headerBt,
	formR,
	formModal,
	customModal,
	searchForm,
	formGroup,
	echart,
	echartMap,
	loaders,
	showHidePanelB,
	selectScrollMore,
	transferBox,
	fixedFullModal,
	page404,
	sideMenu,
	sideMenuPro,
	monthRange,
	date
}

/*需要从插件中单独引入的方法（使用频率低）*/
const plugMethods = {
	fullScreenImgPreview,
	toHump,
	htmlEncode,
	htmlDecode,
	getFileSrc,
	getFileTypeByName,
	isImgByFile,
	getFileTypeIconByName,
	downloadFileReaderFile,
	fakeALinkClick,
	findPath,
	getStringWidth,
	emptyInput,
	stopBubbling
}

/*挂在Vue原型对象上的方法*/
const methodsR = {
	$swal,
	messageBox,
	myTypeof,
	$fetch,
	trimObj,
	clearObj,
	formDataHeadConfig,
	toFormData,
	oneOf,
	fullScreenImgByDom,
	isValidValue,
	isNumberValue,
	isEmptyValue,
	tooltipManual,
	stringLength,
	decimalDigitsLimit,
	downloadFileByFormSubmit,
	downloadFileWithSpin,
	$swalConfirm,
	setValByOption,
	hasPermission,
	isNaN,
	dataFilterOrToUrl,
	setTimeout,
	setInterval,
	toLine,
	fileExport,
	getColumnsKeys,
	removeEmptyValue,
	findCollection,
	htmlPrint,
	siblingElems,
	tablePrint,
	domPrint
}

const install = function (Vue, opts = {}) {
	if (install.installed) {
		console.warn('plug-r-qw 已经安装过，请勿重复调用 install')
		return
	}
	install.installed = true
	
	if (!Vue) {
		console.error('库安装失败，未获取到Vue对象')
		return
	}

	locale.i18n(opts.i18n)
	$fetch.init(opts.useStore || opts.store, Vue)
	timer.init(opts.router)
	tablePrint.init(opts.router)

	Vue.use(arCascader)
	Vue.use(JsonView)

	if (opts.locale) {
		locale.use(opts.locale)
	}

	Object.keys(components).forEach((key) => {
		if (!Vue.component(key)) {
			Vue.component(key, components[key])
		}
	})

	Object.keys(methodsR).forEach((key) => {
		if (!Vue.prototype.hasOwnProperty(key)) {
			Object.defineProperty(Vue.prototype, key, {
				get() {
					return methodsR[key]
				}
			})
		}
	})

	if (Vue.directive('has') === undefined) {
		Vue.directive('has', hasDirective)
	}
	if (Vue.directive('loadmore') === undefined) {
		Vue.directive('loadmore', loadmoreDirective)
	}
	if (Vue.directive('clickOutside') === undefined) {
		Vue.directive('clickOutside', clickOutside)
	}
	if (Vue.directive('transferDom') === undefined) {
		Vue.directive('transferDom', transferDomDirective)
	}

	//库基础字号(应跟你项目设置的view-design基础字号一样)，影响范围：iconTxtBtn的txt与icon的尺寸比例、fullScreenPop的headerFontSize默认值、pagePro的current输入框尺寸。
	Vue.prototype.fontSizeBase = 14
	// 搜索表单默认label宽度
	Vue.prototype.searchFormLabelWidth = 84
	// 搜索表单默认表单项内容宽度
	Vue.prototype.searchFormItemWidth = 202
	// 弹框表单默认label宽度
	Vue.prototype.formModalLabelWidth = 140
	// 弹框表单默认宽度
	Vue.prototype.formModalWidth = 520
	// 页内表单默认label宽度
	Vue.prototype.formGroupLabelWidth = 160
	// 页内表单默认宽度
	Vue.prototype.formGroupWidth = '100%'
	// iconTxtBtn默认图标大小
	Vue.prototype.iconTxtBtnIconSize = 17
	// 页签每页可选条数默认配置
	Vue.prototype.pageSizes = [10, 20, 50, 100]
	// btTablePage是否默认使用pagePro组件作为页签，还会影响transferBox
	Vue.prototype.btTablePageUsePagePro = true
	// btTablePage表格内容默认对齐方式
	Vue.prototype.btTablePageAlign = 'center'
	// pagePro和page是否默认展示total，还会影响btTablePage、transferBox
	Vue.prototype.pageShowTotal = true
	// pagePro和page是否默认展示sizer，还会影响btTablePage、transferBox
	Vue.prototype.pageShowSizer = true
	// tableSetting默认背景色
	Vue.prototype.tableSettingBg = '#fff'
	// tableSetting默认transfer
	Vue.prototype.tableSettingTransfer = true
	// tableSetting默认eventsEnabled
	Vue.prototype.tableSettingEventsEnabled = true
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	version: process.env.VERSION,
	install: install,
	...components,
	...methodsR,
	...plugMethods
}