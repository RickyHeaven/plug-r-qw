import Hello from "./components/hello.vue"
import btTablePage from "./components/btTablePage/btTablePage.vue"
import wellCard from "./components/wellCard/wellCard.vue"
import tableTree from "./components/tableTree/tableTree.vue"
import uploadGroup from "./components/uploadGroup/uploadGroup.vue"
import tableSetting from "./components/tableSetting/tableSetting.vue"
import inputMap from "./components/inputMap/inputMap.vue"
import tableIconBtn from "./components/tableIconBtn/tableIconBtn.vue"
import iconTxtBtn from "./components/iconTxtBtn/iconTxtBtn.vue"
import showHidePanel from "./components/showHidePanel/showHidePanel.vue"
import selectInput from "./components/selectInput/selectInput.vue"
import asyncCascader from "./components/asyncCascader/asyncCascader.vue"
import editor from "./components/editor/editor.vue"
import alCascaderMC from "./components/alCascaderMC/alCascaderMC.vue"
import checkboxTree from "./components/checkboxTree/checkboxTree.vue"
import checkboxGroupTwoClass from "./components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue"
import checkboxGroupThreeClass from "./components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue"
import fullScreenPop from "./components/fullScreenPop/fullScreenPop.vue"
import headerBt from "./components/headerBt/headerBt.vue"
import formR from "./components/formR/formR.vue"
import formModal from "./components/formModal/formModal.vue"
import searchForm from "./components/searchForm/searchForm.vue"
import formGroup from "./components/formGroup/formGroup.vue"
import echart from "./components/echarts/echart.vue"
import showHidePanelB from "./components/showHidePanelB/showHidePanelB.vue"
import tableSearch from "./components/tableSearch/tableSearch.vue"
import selectScrollMore from "./components/selectScrollMore/selectScrollMore.vue"
import transferBox from "./components/transferBox/transferBox.vue"
import fixedFullModal from "./components/fixedFullModal/fixedFullModal.vue"
import messageBox from './methods/messageBox.js'
import $swal from './methods/swal.js'
import fullScreenImgPreview from './methods/fullScreenImgPreview.js'
import fullScreenImgByDom from './methods/fullScreenImgByDom.js'
import $fetch from "./methods/fetch.js"
import $swalConfirm from "./methods/swalConfirm.js"
import iviewArea from 'iview-area'
import JsonView from 'vue-json-viewer'
import {
  myTypeof, toHump, toLine, trimObj, clearObj, htmlEncode, htmlDecode, getFileSrc, getFileTypeByName, isImgByFile,
  getFileTypeIconByName, downloadFileReaderFile, fakeALinkClick, formDataHeadConfig, toFormData, findPath, oneOf,
  decimalDigitsLimit, downloadFileByFormSubmit, isValidValue, isNumberValue, tooltipManual, getStringWidth,
  isEmptyValue, stringLength, setValByOption, hasPermission, emptyInput, isNaN, dataFilterOrToUrl, stopBubbling,
  fileExport, getColumnsKeys, removeEmptyValue, findCollection
} from "./methods/functionGroup.js"
import locale from './locale/index'
import timer, {setTimeout, setInterval} from './methods/timer'

/*直接使用的组件（注册为全局Vue组件）*/
const components = {
  HelloR: Hello,
  btTablePage,
  wellCard,
  tableTree,
  uploadGroup,
  tableSetting,
  inputMap,
  tableIconBtn,
  iconTxtBtn,
  showHidePanel,
  selectInput,
  asyncCascader,
  editor,
  alCascaderMC,
  checkboxTree,
  checkboxGroupTwoClass,
  checkboxGroupThreeClass,
  fullScreenPop,
  headerBt,
  formR,
  formModal,
  searchForm,
  formGroup,
  echart,
  showHidePanelB,
  tableSearch,
  selectScrollMore,
  transferBox,
  fixedFullModal
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
  findCollection
}

const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }
  locale.i18n(opts.i18n)
  $fetch.init(opts.store)
  timer.init(opts.router)
  
  if (!Vue) {
    console.error('库安装失败，未获取到Vue对象')
    return
  }
  
  Vue.use(iviewArea)
  Vue.use(JsonView)
  
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  
  Object.keys(methodsR).forEach(key => {
    if (!Vue.prototype.hasOwnProperty(key)) {
      Object.defineProperty(Vue.prototype, key, {
        get() {
          return methodsR[key]
        }
      })
    }
  })
  
  if (Vue.directive('has') === undefined) {
    Vue.directive("has", {
      /*权限指令*/
      bind(el, binding) {
        if (binding.value && (!Vue.prototype.hasPermission(binding.value))) {
          el.style.display = 'none'
        }
      }
    })
  }
  if (Vue.directive('loadmore') === undefined) {
    //select下拉滚动监听事件
    Vue.directive("loadmore", {
      bind(el, binding) {
        // 获取定义好的scroll盒子
        const SELECT_DOM = el.querySelector(".ivu-select-dropdown")
        SELECT_DOM.addEventListener("scroll", function () {
          /*
           * scrollHeight 获取元素内容高度(只读)
           * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
           * clientHeight 读取元素的可见高度(只读)
           * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
           * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
           */
          if (this.scrollTop > 0 && this.scrollHeight - this.scrollTop <= this.clientHeight) {
            binding.value()
          }
        })
      }
    })
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: process.env.VERSION,
  install: install, ...components, ...methodsR, ...plugMethods
}