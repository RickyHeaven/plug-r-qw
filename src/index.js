import hello from "./components/hello.vue"
import testViewDesign from "./components/testViewDesign.vue"
import messageBox from './methods/messageBox.js'
import $swal from './windowMethods/swal.js'
// import $fetch from "./components/fetch.js"


const components = {
  helloR: hello,
  testStyle: testViewDesign
}

const methodsR = {
  messageBox, // $fetch
}

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

export default {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  components: components
}