import hello from "./components/hello"
const components = {
  helloR:hello
}

const install = function (Vue, opts={}) {
  if(install.installed){
    return
  }
  Object.keys(components).forEach(key=>{
    Vue.component(key,components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install
}

export default API