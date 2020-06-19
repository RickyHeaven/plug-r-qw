module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "002d":
/***/ (function(module, exports) {

module.exports = require("view-design");

/***/ }),

/***/ "1e60":
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"759f9ddd-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/hello.vue?vue&type=template&id=6eb84a75&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._v("hello by ricky")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/hello.vue?vue&type=template&id=6eb84a75&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/hello.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var hellovue_type_script_lang_js_ = ({
  name:'Hello'
});

// CONCATENATED MODULE: ./src/components/hello.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_hellovue_type_script_lang_js_ = (hellovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/hello.vue





/* normalize component */

var component = normalizeComponent(
  components_hellovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var hello = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"759f9ddd-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/test-view-design.vue?vue&type=template&id=3cba718e&
var test_view_designvue_type_template_id_3cba718e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"txt-i-o"},[_vm._v("我是测试样式的")])}
var test_view_designvue_type_template_id_3cba718e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/test-view-design.vue?vue&type=template&id=3cba718e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/test-view-design.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var test_view_designvue_type_script_lang_js_ = ({
  name: "TestViewDesign"
});

// CONCATENATED MODULE: ./src/components/test-view-design.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_test_view_designvue_type_script_lang_js_ = (test_view_designvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/test-view-design.vue





/* normalize component */

var test_view_design_component = normalizeComponent(
  components_test_view_designvue_type_script_lang_js_,
  test_view_designvue_type_template_id_3cba718e_render,
  test_view_designvue_type_template_id_3cba718e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var test_view_design = (test_view_design_component.exports);
// EXTERNAL MODULE: external {"root":"ViewUI","commonjs":"view-design","commonjs2":"view-design","amd":"view-design"}
var external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_ = __webpack_require__("002d");

// CONCATENATED MODULE: ./src/methods/functionGroup.js
//判断变量类型
function myTypeof(v) {
  let str = Object.prototype.toString.call(v)
  return str.replace(/\[object |]/g, "")
}
// CONCATENATED MODULE: ./src/methods/messageBox.js
/** created 2019.05.24
 *  @author ricky email:zhangqingcq@foxmail.com
 */





/**
 * config为一个对象，支持：
 * @param {string/html} content:弹框内容，同iView的content,
 * @param {number} height:弹框高度,默认值130,最小值130
 * @param {number} width:弹框宽度，默认值416,最小值416
 * @param {string/html} title:弹框标题内容，默认值“提示”
 * @param {callback} onOk:确定按钮回调函数
 * @param {boolean} onOkPromise:确定按钮回调函数是否为promise
 * @param {string/html} okText:确定按钮文字，默认值“确定”
 * @param {string/html} cancelText:取消按钮文字，默认值“取消”
 * @param {boolean} noWarnIcon:不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} footerAlign:底部对齐方式，string，默认值“center”
 * @param {boolean} cancelBt:展示取消按钮，boolean，默认值“true”
 * 组件中调用示例：this.messageBox({
 *                      content:'校验中，返回结果前，请勿关闭或刷新页面'
 *                    })
 */
function messageBox({height, width = 416, title, content, onOk, onOkPromise, okText, cancelText, noWarnIcon, footerAlign, cancelBt}) {
  let heightTemp = height && Number(height) - 90 > 40 ? Number(height) - 90 + 'px' : 0
  let heightT = heightTemp || '40px'
  let stringContent = myTypeof(content) === 'String'
  external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].warning({
    width: width,
    render: (h) => {
      return h('div', {
        class: 'customMessageBox',
        style: {
          height: heightT
        }
      }, [
        h('div', {
          class: 'containerN'
        }, [
          h('div', {
            class: 'titleN'
          }, [
            h('span', title || '提示'),
            h('Button', {
              class: 'fr closeN',
              props: {
                type: 'text'
              },
              on: {
                click() {
                  external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                }
              }
            }, [
              h('Icon', {
                props: {
                  type: 'ios-close',
                  size: 30
                }
              })
            ])
          ]),
          h('div', {
            class: 'contentN',
            style: {
              textAlign: stringContent ? 'center' : 'left'
            }
          }, [
            h('Icon', {
              props: {
                type: 'md-warning',
                size: 40,
                color: '#669'
              },
              class: stringContent && (noWarnIcon !== true) ? '' : 'hide'
            }),
            h('div', {
              style: {
                display: stringContent ? 'inline-block' : 'block',
                position: stringContent ? 'relative' : 'unset',
                top: stringContent ? '-8px' : 'unset'
              }
            }, content)
          ]),
          h('div', {
            class: 'footerN',
            style: {
              textAlign: footerAlign || 'center'
            }
          }, [
            h('Button', {
              class: 'okBtN',
              props: {},
              on: {
                click() {
                  if (myTypeof(onOk) === 'Function') {
                    if (onOkPromise) {
                      onOk()
                        .then(() => {
                          external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                        })
                        .catch(() => {
                          external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                        })
                    }
                    else {
                      onOk()
                      external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                    }
                  }
                  else {
                    external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                  }
                }
              }
            }, okText || '确定'),
            h('Button', {
              class: [
                'cancelBtN',
                cancelBt === false && 'hide'
              ],
              props: {},
              on: {
                click() {
                  external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                }
              }
            }, cancelText || '取消')
          ])
        ])
      ])
    }
  })
}

// EXTERNAL MODULE: external {"root":"swal","commonjs":"sweetalert","commonjs2":"sweetalert","amd":"sweetalert"}
var external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_ = __webpack_require__("1e60");
var external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_);

// CONCATENATED MODULE: ./src/windowMethods/swal.js
/**
 * created 2019.06.27
 * @author Ricky <zhangqingcq@foxmail.com>
 */




/**
 * @param option object/string object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error or warning)'}---string:'标题'
 * @param text string 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param icon string 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'or'error'or'warning'
 */
/* harmony default export */ var swal = (function (option, text, icon) {
  return new Promise((r, j) => {
    switch (myTypeof(option)) {
      case 'Object':
        let okTxt = "确定"
        let cancelTxt = "取消"
        let cancelVisible = false
        let okClass = "swalConfirmBt"
        let cancelClass = "swalCancelBt"
        option.type && (option.icon = option.type) && (delete option.type)
        option.content && (option.text = option.content) && (delete option.content)
        option.className = option.className || 'swalBoxX'
        if (option.button === false) {
          //不设置button相关参数
        } else {
          if (option.buttons && myTypeof(option.buttons) === 'Object') {
            if (option.buttons.cancel) {
              option.buttons.cancel.text && (cancelTxt = option.buttons.cancel.text) && (cancelVisible = true)
              option.buttons.cancel.className && (cancelClass = option.buttons.cancel.className)
              option.buttons.confirm.text && (okTxt = option.buttons.confirm.text)
              option.buttons.confirm.className && (okClass = option.buttons.confirm.className)
            }
          } else if (option.buttons && myTypeof(option.buttons) === 'Array') {
            if (option.buttons[0]) {
              if (option.buttons[0] !== true) {
                cancelTxt = option.buttons[0]
              }
              cancelVisible = true
            }
            if (option.buttons[1] && option.buttons[1] !== true) {
              okTxt = option.buttons[1]
            }
          }
          option.buttons = {
            cancel: {
              text: cancelTxt,
              value: null,
              visible: cancelVisible,
              className: cancelClass,
              closeModal: true,
            },
            confirm: {
              text: okTxt,
              value: true,
              visible: true,
              className: okClass,
              closeModal: true
            }
          }
        }
        external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default()(option)
          .then(res => {
            r(res)
          })
          .catch(err => {
            j(err)
          })
        break
      case 'String':
        let tempOption = {
          title: option,
          buttons: {
            confirm: {
              text: "确定",
              value: true,
              visible: true,
              className: "swalConfirmBt",
              closeModal: true
            }
          },
          className: 'swalBoxX'
        }
        text && (tempOption.text = text)
        icon && (tempOption.icon = icon)
        external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default()(tempOption)
          .then(res => {
            r(res)
          })
          .catch(err => {
            j(err)
          })
        break
      case 'Boolean':
        if (option === false) {
          external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default.a.close()
        }
        break
    }
  })
});

// EXTERNAL MODULE: external {"root":"axios","commonjs":"axios","commonjs2":"axios","amd":"axios"}
var external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_ = __webpack_require__("cebe");
var external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default = /*#__PURE__*/__webpack_require__.n(external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_);

// CONCATENATED MODULE: ./src/methods/fetch.js
/**
 * created 2019.04.01
 * @author Ricky <zhangqingcq@foxmail.com>
 */



const host = window.location.origin

// 创建自定义对象
let service = external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default.a.create({
  baseURL: host,
  withCredentials: true // 允许携带cookie
})

service.changeUrl = false

function notInitYet() {
  console.info('未初始化,store为空，请在引入plug-r-qw后进行初始化操作（init({store:XXX,...})）')
}

/**
 * 拦截器，在发起请求前调用
 */
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

function logoutHandle() {
  if (service.store) {
    service.store.dispatch("logout");
  }
  else {
    notInitYet()
  }
}

/**
 * 拦截器，在请求返回时调用
 */
service.interceptors.response.use(res => {
  if (res && res.data && res.data.code === 403) {
    messageBox({
      content: '登录状态失效,请重新登录！',
      onOk: logoutHandle
    })
  }
  else if (res && res.data && res.data.code === 409) {
    messageBox({
      content: '该账号已在其他地方登录,点击确定退出。',
      onOk: logoutHandle
    })
  }
  return res
}, err => {
  if (err.response) {
    if (err.response.status === 403) {
      messageBox({
        content: '登录状态失效,请重新登录！',
        onOk: logoutHandle
      })
    }
    else if (err.response.status === 409) {
      messageBox({
        content: '该账号已在其他地方登录,点击确定退出。',
        onOk: logoutHandle
      })
    }
    if (err.response.data) {
      return Promise.reject(err.response.data)
    }
    else {
      return Promise.reject(err.response)
    }
  }
  else {
    return Promise.reject(err)
  }
})

/**
 * 封装请求结果和错误处理
 */
function checkResult(res, msg, rPath, config) {
  if (config && config.spin) {
    if (service.store) {
      service.store.commit('MINUS_FETCH_COUNT')
    }
    else {
      notInitYet()
    }
  }
  let yes = true
  let temp = res && res.data
  if (temp) {
    rPath = rPath ? rPath : []
    for (let item of rPath) {
      temp = temp[item]
      yes = yes && temp
    }
    if (yes) {
      return temp
    }
    else {
      console.warn(msg ? msg : '请求失败')
      return false
    }
  }
  else {
    console.warn(msg ? msg : '请求失败')
    return false
  }
}

function handleRequest(method, url, data, msg, rPath, config, isUrlData) {
  return new Promise((resolve, reject) => {
    switch (method) {
      case 'get':
        service.get(url, {params: data}).then(r => {
          let temp = checkResult(r, msg, rPath, config)
          if (temp) {
            resolve(temp)
          }
          else {
            console.warn(msg || '请求失败')
            reject(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          console.warn('请求出错：', e)
          reject(e)
        })
        break
      case 'delete':
        let keyT = isUrlData ? 'params' : 'data'
        service.delete(url, {[keyT]: data}).then(r => {
          let temp = checkResult(r, msg, rPath, config)
          if (temp) {
            resolve(temp)
          }
          else {
            console.warn(msg || '请求失败')
            reject(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          console.warn('请求出错：', e)
          reject(e)
        })
        break
      case 'post':
        service.post(url, data, config).then(r => {
          let temp = checkResult(r, msg, rPath, config)
          if (temp) {
            resolve(temp)
          }
          else {
            console.warn(msg || '请求失败')
            reject(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          console.warn('请求出错：', e)
          reject(e)
        })
        break
      case 'put':
        service.put(url, data, config).then(r => {
          let temp = checkResult(r, msg, rPath, config)
          if (temp) {
            resolve(temp)
          }
          else {
            console.warn(msg || '请求失败')
            reject(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          console.warn('请求出错：', e)
          reject(e)
        })
        break
    }
  })
}

/**
 * 请求主体
 * @param method
 * @param url
 * @param data
 * @param msg 提示信息
 * @param rPath 返回数据路径（提取）
 * @param config 请求配置
 * @param isUrlData delete方法传参模式 true:params,false:data
 * @returns {Promise<*>}
 */
function checkRequest(method, url, data, msg, rPath, config, isUrlData) {
  return new Promise((resolve, reject) => {
    if (url) {
      config = config || {}
      if (config && config.spin) {
        if (service.store) {
          service.store.commit('ADD_FETCH_COUNT')
        }
        else {
          notInitYet()
        }
      }
      let url_ = url
      if (service.changeUrl && window && window.g) {
        //所有请求地址都按接口类型，加上config.js里配置的地址域名变成绝对地址
        const httpEnv = [
          'mgr',
          'dcc',
          'crm',
          'umc',
          'wmc',
          'amc',
          'pmc',
          'oa',
          'mmc'
        ]
        
        for (let item of httpEnv) {
          let regExp = new RegExp('^\/' + item + '(?=\/.*$)', 'i')
          if (regExp.test(url) && window.g[item + 'URL']) {
            url_ = window.g[item + 'URL'] + url.replace(regExp, '')
            break
          }
        }
      }
      let data_
      if (config && config.headers && config.headers['Content-Type'] === 'multipart/form-data') {
        data_ = data
      }
      else {
        if (window._.isArray(data)) {
          data_ = []
        }
        else {
          data_ = {}
        }
        if (data && (!window._.isEmpty(data))) {
          if (window._.isArray(data)) {
            for (let item of data) {
              if (item || item === 0 || item === false || item === '') {
                data_.push(item)
              }
            }
          }
          else {
            for (let key in data) {
              if (data.hasOwnProperty(key) &&
                (data[key] || data[key] === 0 || data[key] === false || data[key] === '')) {
                data_[key] = data[key]
              }
            }
          }
        }
      }
      let method_ = method.toLowerCase()
      handleRequest(method_, url_, data_, msg, rPath, config, isUrlData).then(r => {
        resolve(r)
      }).catch(e => {
        reject(e)
      })
    }
    else {
      console.error('没有请求地址:url')
      reject('没有请求地址:url')
    }
  })
}

/**
 * 使用this.$fetch时直接调用以下方法，例如：this.$fetch.get("/getData",{id:1})
 * @param url 请求地址
 * @param data 请求数据
 * @param msg 错误处理信息，如不需在控制台输出特定错误信息可不传，错误处理可根据返回结果false以及其他预定数据进行,例如：
 * this.$fetch.post("/getDataB",{name:'ricky'},"获取数据B失败")
 * @param rPath 请求结果按路径过滤，如：[data,list]表示data.list,如不需过滤可不传，例如：
 * this.$fetch.get("/getData",{id:1},null,['result','list'])
 *  .then(r=>{
 *      console.log(r)
 *      r相当于:data.result.list,data是网络请求结果
 *  })
 *  注意：
 *      请求最多支持5个入参，最少一个(url)，依次为：url,data,msg,rPath,config。如果要传靠后的入参，但不想传前面的，应该这样传：
 *      this.$fetch.post("/setData",{},null,[],{
 *               headers: {
 *                   'Content-Type': 'multipart/form-data'
 *                 },
 *                 spin:true
 *             }
 *        )
 * @param config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
 * @returns {Promise<*>}
 * @returns all 并发请求 例如：
 * this.$fetch.all(
 *  [
 *    this.$fetch.get("/getData"),
 *    this.$fetch.post("/getDataB",{name:'ricky'})
 *  ]
 * )
 * @returns spread 并发请求结果分离 例如：
 * this.$fetch.all(
 *  [
 *    this.$fetch.get("/getData"),
 *    this.$fetch.post("/getDataB",{name:'ricky'})
 *  ]
 * )
 *  .then(
 *    this.$fetch.spread(result1,result2){
 *        console.log(result1,result2)
 *    }
 *   )
 */
/* harmony default export */ var fetch = ({
  init(data) {
    if (data.hasOwnProperty('store')) {
      service.store = data.store
    }
    if (data.hasOwnProperty('changeFetchUrl')) {
      service.changeUrl = data.changeFetchUrl
    }
  },
  
  post(url, data = {}, msg, rPath, config) {
    return new Promise((resolve, reject) => {
      checkRequest('post', url, data, msg, rPath, config).then(r => {
        resolve(r)
      }).catch(e => {
        reject(e)
      })
    })
  },
  
  put(url, data = {}, msg, rPath, config) {
    return new Promise((resolve, reject) => {
      checkRequest('put', url, data, msg, rPath, config).then(r => {
        resolve(r)
      }).catch(e => {
        reject(e)
      })
    })
  },
  /**
   * get请求时(delete请求同理)，可以把请求写在url里，也可以写在data里，注意写在data里时，data是对象
   * 以请求devices,找到id=2,name='meter'举例：
   *  只传url时，url = '/devices?id=2&name=meter'
   *  url和data都传时,url = '/devices',data={id:2,name:'meter'}
   */
  get(url, data = {}, msg, rPath, config) {
    return new Promise((resolve, reject) => {
      checkRequest('get', url, data, msg, rPath, config).then(r => {
        resolve(r)
      }).catch(e => {
        reject(e)
      })
    })
  },
  
  delete(url, data = {}, msg, rPath, config, isUrlData = true) {
    return new Promise((resolve, reject) => {
      checkRequest('delete', url, data, msg, rPath, config, isUrlData).then(r => {
        resolve(r)
      }).catch(e => {
        reject(e)
      })
    })
  },
  
  all: external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default.a.all,
  
  spread: external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default.a.spread
});

// CONCATENATED MODULE: ./src/index.js







const components = {
  HelloR: hello,
  TestStyle: test_view_design
}

const methodsR = {
  messageBox: messageBox,
  $fetch: fetch
}

const windowMethods = {
  $swal: swal
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
  let fetchItem = ['store','changeFetchUrl']
  fetchItem.forEach(e=>{
    if(data.hasOwnProperty(e)){
      fetchConfig[e] = data[e]
    }
  })
  fetch.init(fetchConfig)
}

/* harmony default export */ var src = ({
  version: Object({"NODE_ENV":"production","BASE_URL":"/"}).VERSION,
  install,
  init, ...components, ...methodsR, ...windowMethods
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ })["default"];
//# sourceMappingURL=plugRQw.common.js.map