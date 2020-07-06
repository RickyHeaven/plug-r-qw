import Hello from "./components/hello.vue"
import btTablePage from "./components/btTablePage/btTablePage.vue"
import wellCard from "./components/wellCard/wellCard.vue"
import tableTree from "./components/tableTree/tableTree.vue"
import uploadGroup from "./components/uploadGroup/uploadGroup.vue"
import tableSetting from "./components/tableSetting/tableSetting.vue"
import inputMap from "./components/inputMap/inputMap.vue"
import messageBox from './methods/messageBox.js'
import $swal from './windowMethods/swal.js'
import fullScreenImgPreview from './methods/fullScreenImgPreview.js'
import fullScreenImgByDom from './methods/fullScreenImgByDom.js'
import $fetch from "./methods/fetch.js"
import $swalConfirm from "./methods/swalConfirm.js"
import {
  myTypeof, toHump, toLine, trimObj, clearObj, htmlEncode, htmlDecode, getFileSrc, getFileTypeByName, isImgByFile,
  getFileTypeIconByName, downloadFileReaderFile, fakeALinkClick, formDataHeadConfig, toFormData, findPath, oneOf,
  decimalDigitsLimit, downloadFileByFormSubmit, isValidValue, isNumberValue, tooltipManual, getStringWidth,
  isEmptyValue, stringLength, setValByOption
} from "./methods/functionGroup.js"

/*直接使用的组件（注册为全局Vue组件）*/
const components = {
  HelloR: Hello,
  btTablePage,
  wellCard,
  tableTree,
  uploadGroup,
  tableSetting,
  inputMap,
}

/*需要从插件中单独引入的方法（使用频率低）*/
const plugMethods = {
  fullScreenImgPreview,
  toHump,
  toLine,
  htmlEncode,
  htmlDecode,
  getFileSrc,
  getFileTypeByName,
  isImgByFile,
  getFileTypeIconByName,
  downloadFileReaderFile,
  fakeALinkClick,
  findPath,
  getStringWidth
}

/*挂在Vue原型对象上的方法*/
const methodsR = {
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
  setValByOption
}

/*挂在window对象上的方法*/
const windowMethods = {
  $swal
}

const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }
  
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
  
  if (typeof window !== 'undefined') {
    Object.keys(windowMethods).forEach(key => {
      if (!window.hasOwnProperty(key)) {
        Object.defineProperty(window, key, {
          get() {
            return windowMethods[key]
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

const init = function (data) {
  let fetchConfig = {}
  let fetchItem = [
    'store',
    'changeFetchUrl'
  ]
  fetchItem.forEach(e => {
    if (data.hasOwnProperty(e)) {
      fetchConfig[e] = data[e]
    }
  })
  $fetch.init(fetchConfig)
}

export default {
  version: process.env.VERSION,
  install,
  init, ...components, ...methodsR, ...windowMethods, ...plugMethods
}