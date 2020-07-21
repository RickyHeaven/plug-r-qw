(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("view-design"), require("sweetalert"), require("vue-amap"), require("lodash"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["view-design", "sweetalert", "vue-amap", "lodash", "axios"], factory);
	else if(typeof exports === 'object')
		exports["plugRQw"] = factory(require("view-design"), require("sweetalert"), require("vue-amap"), require("lodash"), require("axios"));
	else
		root["plugRQw"] = factory(root["ViewUI"], root["swal"], root["VueAMap"], root["_"], root["axios"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__002d__, __WEBPACK_EXTERNAL_MODULE__1e60__, __WEBPACK_EXTERNAL_MODULE__5aeb__, __WEBPACK_EXTERNAL_MODULE__60bb__, __WEBPACK_EXTERNAL_MODULE_cebe__) {
return /******/ (function(modules) { // webpackBootstrap
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

module.exports = __WEBPACK_EXTERNAL_MODULE__002d__;

/***/ }),

/***/ "1e60":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1e60__;

/***/ }),

/***/ "5aeb":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5aeb__;

/***/ }),

/***/ "60bb":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__60bb__;

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cebe__;

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

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/hello.vue?vue&type=template&id=6eb84a75&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/btTablePage/btTablePage.vue?vue&type=template&id=26038a78&
var btTablePagevue_type_template_id_26038a78_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btTablePage fullHeight"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showTopRow),expression:"showTopRow"}],staticClass:"topBtn"},[_vm._t("tableSetting"),_vm._t("topMsg"),_vm._t("topBtnGroup")],2),_c('div',{staticClass:"tableContainer fullHeight",class:{noTop: !_vm.showTopRow,noPage: _vm.noPage}},[_c('div',{staticClass:"fullHeight relativeBox"},[_c('div',{ref:"tableContainerLOI",staticClass:"fullFlowContent"},[_c('Table',{ref:"TableXXX",class:{noBorderTable:_vm.noBorderTable,fullHeightTable:!_vm.fixedTable},attrs:{"height":_vm.fixedTable&&_vm.tableContainerHeight||null,"columns":_vm.columnsT,"data":_vm.dataT,"highlight-row":_vm.radio||_vm.highlightRow},on:{"on-select":_vm.onSelect,"on-select-all":_vm.onSelectAll,"on-select-cancel":_vm.onSelectCancel,"on-select-all-cancel":_vm.onSelectAllCancel,"on-sort-change":_vm.onSortChange,"on-row-click":_vm.onRowClick}})],1)])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.noPage),expression:"!noPage"}],staticClass:"pageContainer"},[_c('Page',{attrs:{"page-size-opts":_vm.pageSizes,"total":_vm.total,"current":_vm.current,"page-size":_vm.pageSizeT,"show-sizer":"","show-total":"","size":"small"},on:{"update:current":function($event){_vm.current=$event},"on-change":_vm.changePage,"on-page-size-change":_vm.pageSizeChange}})],1)])}
var btTablePagevue_type_template_id_26038a78_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/btTablePage/btTablePage.vue?vue&type=template&id=26038a78&

// EXTERNAL MODULE: external {"root":"_","commonjs":"lodash","commonjs2":"lodash","amd":"lodash"}
var external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_ = __webpack_require__("60bb");
var external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default = /*#__PURE__*/__webpack_require__.n(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_);

// CONCATENATED MODULE: ./src/methods/functionGroup.js


//判断变量类型
function myTypeof(v) {
  let str = Object.prototype.toString.call(v)
  return str.replace(/\[object |]/g, "")
}

// 下划线转换驼峰
function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

// 驼峰转换下划线
function toLine(name) {
  return name.replace(/([A-Z])/g, "_$1")
    .toLowerCase();
}

/**
 * 去掉对象属性前后空格
 */
function trimObj(obj) {
  if (myTypeof(obj) === 'Object') {
    for (let key in obj) {
      if (myTypeof(obj[key]) == "String") {
        obj[key] = obj[key].replace(/^\s+|\s+$/m, '');
      }
      else if (myTypeof(obj[key]) == "Object") {
        trimObj(obj[key])
      }
    }
    return obj
  }
  else {
    return obj
  }
}

// 清空集合
function clearObj(val, ignoreList) {
  ignoreList = ignoreList || []
  if (myTypeof(val) === 'Array') {
    val.forEach((item, index) => {
      switch (myTypeof(item)) {
        case 'String':
        case 'Number':
        case 'Boolean':
        case 'Date':
          val[index] = null
          break
        case 'Array':
        case 'Object':
          clearObj(item)
          break
      }
    })
    return val
  }
  else if (myTypeof(val) === 'Object') {
    for (let key in val) {
      if (val.hasOwnProperty(key)) {
        let go = true
        for (let item of ignoreList) {
          if (item === key) {
            go = false
            break
          }
        }
        if (go) {
          switch (myTypeof(val[key])) {
            case 'String':
            case 'Number':
            case 'Boolean':
            case 'Date':
              val[key] = null
              break
            case 'Array':
            case 'Object':
              clearObj(val[key])
              break
          }
        }
      }
    }
    return val
  }
  else {
    return val
  }
}

/*用浏览器内部转换器实现html转码*/
function htmlEncode(html) {
  //1.首先动态创建一个容器标签元素，如DIV
  let temp = document.createElement("div");
  //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
  temp.textContent !== undefined ? (temp.textContent = html) : (temp.innerText = html);
  //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
  let output = temp.innerHTML;
  temp = null;
  return output;
}

/*用浏览器内部转换器实现html解码*/
function htmlDecode(text) {
  //1.首先动态创建一个容器标签元素，如DIV
  let temp = document.createElement("div");
  //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
  temp.innerHTML = text;
  //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
  let output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}

/*根据file文件对象获取文件地址用来预览*/
function getFileSrc(file) {
  return new Promise(resolve => {
    let reader = new FileReader()
    reader.readAsDataURL(file) // 读出 base64
    reader.onloadend = () => {
      resolve(reader.result)
    }
  })
}

/*获取后缀名*/
function getFileTypeByName(name) {
  return (name.split('.')
    .pop()
    .toLocaleLowerCase() || '')
}

/*判断是否为图片（type是否包含‘image’）*/
function isImgByFile(type) {
  return (myTypeof(type) === 'String' && type.indexOf('image') > -1)
}

/*根据文件名获取图标（上传组件用）*/
function getFileTypeIconByName(name) {
  const format = getFileTypeByName(name)
  let type = 'ios-document-outline'
  
  if ([
    'gif',
    'jpg',
    'jpeg',
    'png',
    'bmp',
    'webp'
  ].indexOf(format) > -1) {
    type = 'ios-image';
  }
  if ([
    'mp4',
    'm3u8',
    'rmvb',
    'avi',
    'swf',
    '3gp',
    'mkv',
    'flv'
  ].indexOf(format) > -1) {
    type = 'ios-film';
  }
  if ([
    'mp3',
    'wav',
    'wma',
    'ogg',
    'aac',
    'flac'
  ].indexOf(format) > -1) {
    type = 'ios-musical-notes';
  }
  if ([
    'doc',
    'txt',
    'docx',
    'pages',
    'epub',
    'pdf'
  ].indexOf(format) > -1) {
    type = 'md-document';
  }
  if ([
    'numbers',
    'csv',
    'xls',
    'xlsx'
  ].indexOf(format) > -1) {
    type = 'ios-stats';
  }
  if ([
    'keynote',
    'ppt',
    'pptx'
  ].indexOf(format) > -1) {
    type = 'ios-videocam';
  }
  
  return type;
}

/*下载一个文件（替换容易被浏览器屏蔽的window.open方法）*/
function downloadFileReaderFile(name, href) {
  let saveLink = document.createElement("a");
  saveLink.href = href;
  saveLink.download = name;
  fakeALinkClick(saveLink);
}

/*模拟被点击（比如模拟用户点击链接下载东西）*/
function fakeALinkClick(obj) {
  let ev = document.createEvent("MouseEvents");
  ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  obj.dispatchEvent(ev);
}

/*以form-data方式提交请求数据时，$fetch的config参数值*/
const formDataHeadConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

/*将普通对象转换成form-data请求参数格式*/
function toFormData(data) {
  let temp = new FormData()
  for (let key in data) {
    if (data.hasOwnProperty(key) && data[key] !== null) {
      temp.append(key, data[key])
    }
  }
  return temp
}

/**
 *按条件查找一个元素在集合中的位置（路径）
 * @param {Array/Object} group - 集合，被查找的集合
 * @param {Function} condition - 查找条件
 * @param {String} pathKey - 返回路径元素对应集合元素的key
 * @param {String} childKey - 集合子元素的key，默认值'children'
 * @param {Array} path - 递归用参数，不用传
 * @return {Array} 返回带有路径（层级）信息的数组
 * @example group: {id:1,name:'爸爸',children:[{id:2,name:'大儿子'},{id:3,name:'二儿子'}]}
 *          condition: e=>e.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
function findPath({group, condition, pathKey, childKey = 'children', path = []}) {
  if (group && external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isObject(group)) {
    if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isFunction(condition)) {
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(group)) {
        for (let key in group) {
          if (group.hasOwnProperty(key)) {
            let item = group[key]
            let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(path)
            if (condition(item)) {
              if (pathKey && item[pathKey]) {
                temp.push(item[pathKey])
              }
              else {
                temp.push(key)
              }
              return temp
            }
            else if (item[childKey] && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(item[childKey]))) {
              if (pathKey && item[pathKey]) {
                temp.push(item[pathKey])
              }
              else {
                temp.push(key)
              }
              let rr = findPath({
                group: item[childKey],
                condition: condition,
                pathKey: pathKey,
                childKey: childKey,
                path: temp
              })
              if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(rr)) {
                return rr
              }
            }
          }
        }
      }
      else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(group)) {
        for (let item of group) {
          let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(path)
          if (condition(item)) {
            if (pathKey && item[pathKey]) {
              temp.push(item[pathKey])
            }
            else {
              temp.push(group.indexOf(item))
            }
            return temp
          }
          else if (item[childKey] && item[childKey].length > 0) {
            if (pathKey && item[pathKey]) {
              temp.push(item[pathKey])
            }
            else {
              temp.push(group.indexOf(item))
            }
            let rr = findPath({
              group: item[childKey],
              condition: condition,
              pathKey: pathKey,
              childKey: childKey,
              path: temp
            })
            if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(rr)) {
              return rr
            }
          }
        }
      }
    }
    else {
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(group)) {
        for (let key in group) {
          if (group.hasOwnProperty(key)) {
            let item = group[key]
            let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(path)
            if (item === condition) {
              temp.push(key)
              return temp
            }
            else if (item[childKey] && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(item[childKey]))) {
              temp.push(key)
              let rr = findPath({
                group: item[childKey],
                condition: condition,
                pathKey: pathKey,
                childKey: childKey,
                path: temp
              })
              if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(rr)) {
                return rr
              }
            }
          }
        }
      }
      else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(group)) {
        for (let item of group) {
          let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(path)
          if (item === condition) {
            temp.push(group.indexOf(item))
            return temp
          }
          else if (item[childKey] && item[childKey].length > 0) {
            temp.push(group.indexOf(item))
            let rr = findPath({
              group: item[childKey],
              condition: condition,
              pathKey: pathKey,
              childKey: childKey,
              path: temp
            })
            if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(rr)) {
              return rr
            }
          }
        }
      }
    }
  }
  return []
}

/*判断某个值是否在集合中*/
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/*小数位数限制，超出会返回被去掉后的值*/
function decimalDigitsLimit(val, num = 2) {
  let expStr = new RegExp("(^-?\\d+.\\d{" + num + "})(\\d+$)")
  let valStr = val && String(val) || ''
  if (expStr.test(valStr)) {
    return Number(valStr
      .replace(expStr, '$1'))
  }
  else {
    return val
  }
}

/*文件导出，调用后端接口以form表单提交数据下载文件*/
function downloadFileByFormSubmit(url, data = {}, method = 'get') {
  let form = document.createElement('form')
  let body = document.getElementsByTagName("body")[0]
  body.appendChild(form)
  form.setAttribute('style', 'display:none')
  form.setAttribute('target', '')
  form.setAttribute('method', method)
  form.setAttribute('action', url)
  
  if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(data)) {
    for (let key in data) {
      if (data.hasOwnProperty(key) && (data[key] || data[key] === 0 || data[key] === false || data[key] === '')) {
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', key)
        input.setAttribute('value', data[key])
        form.appendChild(input)
      }
    }
    
    form.submit()
    
    setTimeout(() => {
      body.removeChild(form)
    }, 8000)
  }
  else {
    console.error('请求数据格式有误，无法下载文件')
  }
}

function isValidValue(val) {
  return val !== undefined && val !== null && val !== ''
}

function isNumberValue(val) {
  let reg = /^-?\d+(.\d+)?$/
  return reg.test(val)
}

/**
 * 手动tooltip(table 的 column 的tooltip失效的情况下用)
 * @param {String/Array} contentKey - 要设置tooltip的column的key或者key组成的数组（内容按数组中key对应的内容先后拼接）
 * @param {boolean} dash - 在内容为空时是否以'--'代替显示
 * @param {String} jointMark - 在内容为多个字段拼接时，各字段间连接符，默认没有
 * @returns {function(...[*]=)}
 */
function tooltipManual(contentKey, dash = false, jointMark = '') {
  return function (h, params) {
    let content
    if (myTypeof(contentKey) === 'Array') {
      let temp = []
      for (let item of contentKey) {
        temp.push(params.row[item])
      }
      content = temp.join(jointMark)
    }
    else {
      content = params.row[contentKey]
    }
    let contentWidth = getStringWidth(content)
    let tdWidth = params.column._width
    if (content && contentWidth > tdWidth) {
      return h('Tooltip', {
        style: {
          width: '100%'
        },
        props: {
          content: content,
          maxWidth: tdWidth
        }
      }, [
        h('span', {
          style: {
            width: '100%',
            display: 'inline-block',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
            overflow: 'hidden',
            'vertical-align': 'top'
          }
        }, content)
      ])
    }
    else {
      return h('span', dash && (!isValidValue(content)) ? '--' : content)
    }
  }
}

/*获取字符串width*/
function getStringWidth(str, fontSize = 12) {
  if (myTypeof(str) === 'String' && str.length > 0) {
    let nodesH = document.createElement('span')
    nodesH.style.fontSize = fontSize + 'px'
    nodesH.style.fontFamily = 'inherit'
    nodesH.innerHTML = str
    nodesH.style.opacity = '0'
    nodesH.style.position = 'fixed'
    nodesH.style.top = '3000px'
    document.body.append(nodesH)
    const width = nodesH.clientWidth
    document.body.removeChild(nodesH)
    return width
  }
  else {
    return 0
  }
}

/*判断数组或对象每个元素或单个变量是否是有效值*/
function isEmptyValue(data) {
  if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(data)) {
    for (let key in data) {
      if (data.hasOwnProperty(key) && isValidValue(data[key])) {
        return false
      }
    }
    return true
  }
  else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(data)) {
    for (let item of data) {
      if (isValidValue(item)) {
        return false
      }
    }
    return true
  }
  else {
    return !isValidValue(data)
  }
}

/*获取字符串长度，中文2，其他1（一般用于用户输入长度限制）*/
function stringLength(str) {
  if (myTypeof(str) === 'String') {
    return str.replace(/[^\x00-\xff]/g, "01").length
  }
  else if (myTypeof(str) === 'Number') {
    str += ''
    return str.replace(/[^\x00-\xff]/g, "01").length
  }
  else {
    return 0
  }
}

/**
 * 按条件设置集合中指定字段的值
 * @param {Array} group 目标集合
 * @param {Function} condition 匹配条件
 * @param {String} key 要设置的字段键名
 * @param val 要设置的字段的值
 * @param {String} childKey 子集键名
 */
function setValByOption({group, condition, key, val, childKey = 'children'}) {
  if (myTypeof(group) !== 'Array' || myTypeof(condition) !== 'Function' || myTypeof(key) !== 'String' ||
    myTypeof(childKey) !== 'String') {
    return false
  }
  group.forEach(item => {
    if (condition(item)) {
      item[key] = val
    }
    if (myTypeof(item[childKey]) === 'Array' && item[childKey].length > 0) {
      setValByOption({
        group: item[childKey],
        condition,
        key,
        val,
        childKey
      })
    }
  })
}


// EXTERNAL MODULE: external {"root":"axios","commonjs":"axios","commonjs2":"axios","amd":"axios"}
var external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_ = __webpack_require__("cebe");
var external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default = /*#__PURE__*/__webpack_require__.n(external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_);

// EXTERNAL MODULE: external {"root":"ViewUI","commonjs":"view-design","commonjs2":"view-design","amd":"view-design"}
var external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_ = __webpack_require__("002d");

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
  let heightTemp = height && Number(height) - 90 > 100 ? Number(height) - 90 + 'px' : 0
  let heightT = heightTemp || '100px'
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
                type: 'ios-alert-outline',
                size: 60,
                color: '#f8bb86'
              },
              class: stringContent && (noWarnIcon !== true) ? '' : 'hide'
            }),
            h('div', {class:'msgBoxConO'},content)
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
        if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(data)) {
          data_ = []
        }
        else {
          data_ = {}
        }
        if (data && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(data))) {
          if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(data)) {
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/btTablePage/btTablePage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var btTablePagevue_type_script_lang_js_ = ({
  name: "btTablePage",
  props: {
    url: {
      /*表格拉取数据的接口地址*/
      type: String,
      default() {
        return ''
      }
    },
    searchData: {
      /*表格条件查询数据*/
      type: Object,
      default() {
        return {}
      }
    },
    columns: {
      /*表格表头结构数据，同iView*/
      type: Array,
      default() {
        return []
      }
    },
    selection: {
      /*是否展示每列开头选择框*/
      type: Boolean,
      default() {
        return false
      }
    },
    selectionFixed: {
      /*每列开头选择框固定*/
      validator: val => oneOf(val, [
        'left',
        'right',
        false
      ]),
      default() {
        return false
      }
    },
    rowClickSelect: {
      /*是否点击行操作开头选择框*/
      type: Boolean,
      default() {
        return true
      }
    },
    data: {
      /*表格默认数据，没有url的本地静态表格使用*/
      type: Array,
      default() {
        return []
      }
    },
    pageSize: {
      /*每页条数*/
      type: Number,
      default() {
        return 10
      }
    },
    sortable: {
      /*排序模式*/
      validator: val => oneOf(val, [
        'custom',
        ''
      ]),
      default() {
        return ''
      }
    },
    initData: {
      /*初始化数据，即组件创建后自动拉取第一次数据*/
      type: Boolean,
      default() {
        return true
      }
    },
    highlightRow: {
      /*高亮当前行*/
      type: Boolean,
      default() {
        return false
      }
    },
    rowClickNum: {
      /*自动拉取第一次数据时点击第几行，默认-1，不点击*/
      type: Number,
      default() {
        return -1
      }
    },
    radio: {
      /*表格是否是单选表格，每次只能选中一行*/
      type: Boolean,
      default() {
        return false
      }
    },
    tableEmptyTdHandle: {
      /*表格内容为空是否显示为‘--’*/
      type: Boolean,
      default() {
        return false
      }
    },
    noBorderTable: {
      /*表格无边框*/
      type: Boolean,
      default() {
        return false
      }
    },
    noPage: {
      /*表格页签*/
      type: Boolean,
      default() {
        return false
      }
    },
    orderDefault: {
      /*排序是升是降*/
      type: String,
      default() {
        return "desc"
      }
    },
    orderKey: {
      /*排序的key*/
      type: String,
      default() {
        return "id"
      }
    },
    getDataLoading: {
      /*拉取表格数据时显示遮罩层*/
      type: Boolean,
      default() {
        return false
      }
    },
    showTopRow: {
      /*展示顶行（列表设置、批量操作按钮、导出等按钮、统计信息等）,各项子内容通过slot接入*/
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      dataT: this.data,
      searchDataT: external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.searchData),
      pageSizeT: this.pageSize,
      current: 1,
      total: 0,
      selected: [],
      selectedIds: [],
      currentRowId: null,
      currentRowIndex: null,
      key: this.orderKey,
      order: this.orderDefault,
      tableContainerHeight: 300
    }
  },
  computed: {
    columnsFixed() {
      for (let item of this.columns) {
        if (item.fixed) {
          return true
        }
      }
      return false
    },
    fixedTable() {
      return this.selectionFixed || this.columnsFixed
    },
    queryData() {
      let temp = {
        ...this.searchDataT,
        current: this.current,
        size: this.pageSizeT
      }
      temp[this.order] = toLine(this.key);
      return temp
    },
    columnsT() {
      let temp = this.columns.filter(item => {
        return item.type !== 'selection'
      })
      if (this.selection && !this.radio) {
        let TTK = {
          type: "selection",
          align: "center",
          width: 60
        }
        if (this.selectionFixed) {
          TTK.fixed = this.selectionFixed
        }
        temp.unshift(TTK)
      }
      if (this.sortable === 'custom') {
        temp.forEach(item => {
          if (item.key && item.sortable !== true && item.sortable !== false) {
            item.sortable = 'custom'
          }
        })
      }
      if (this.tableEmptyTdHandle) {
        temp.forEach(item => {
          if (item.key && item.render === undefined) {
            if (item.tooltip) {
              item.render = tooltipManual(item.key, true)
            }
            else {
              item.render = (h, params) => {
                let td = params.row[item.key]
                return h('span', (td === '' || td === null || td === undefined) ? '--' : td)
              }
            }
          }
        })
      }
      return temp
    },
  },
  created() {
    this.initTable()
  },
  mounted() {
    // if (this.radio) {
    //屏蔽全选框
    // this.$refs.TableXXX.$refs.header.querySelector('thead .ivu-table-cell-with-selection').classList.add('modalHide')
    // }
    this.firstGetHeight()
    if (window.onresize) {
      let temp = window.onresize
      window.onresize = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.debounce(() => {
        temp()
        this.handleResize()
      })
    }
    else {
      window.onresize = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.debounce(this.handleResize)
    }
  },
  watch: {
    searchData: {
      handler(after) {
        for (let key in after) {
          if (after.hasOwnProperty(key)) {
            if (this.searchDataT[key] === undefined || after[key] !== this.searchDataT[key]) {
              this.searchDataT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(after)
              this.current = 1
              this.getDataAndClickRow()
              break
            }
          }
        }
      },
      deep: true
    }
  },
  methods: {
    firstGetHeight() {
      if (this.tableContainerHeight < 50) {
        setTimeout(this.firstGetHeight, 100)
      }
      else {
        setTimeout(this.getTableContainerHeight, 10)
      }
    },
    getTableContainerHeight() {
      this.tableContainerHeight = this.$refs.tableContainerLOI && this.$refs.tableContainerLOI.clientHeight || 0
    },
    handleResize() { /*table重新计算尺寸布局*/
      this.getTableContainerHeight()
      if (this.$refs.TableXXX) {
        this.$refs.TableXXX.handleResize()
      }
    },
    initTable() {
      if (this.initData) {
        this.getDataAndClickRow()
      }
    },
    addRow(row) {
      this.dataT.unshift(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(row))
      setTimeout(() => {
        this.$refs.TableXXX.clickCurrentRow(0)
      }, 100)
    },
    setRowData(row, setCurrentRow, clickCurrentRow) { /*更新行数据（公开）*/
      let index = null
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isBoolean(setCurrentRow) && setCurrentRow) {
        index = this.currentRowIndex
      }
      else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(setCurrentRow)) {
        index = setCurrentRow
      }
      if (index !== null) {
        let temp = this.dataT[index]
        for (let key in row) {
          if (row.hasOwnProperty(key)) {
            temp[key] = row[key]
          }
        }
        if (clickCurrentRow) {
          setTimeout(() => {
            this.$refs.TableXXX.clickCurrentRow(index)
          }, 10)
        }
      }
    },
    deleteRow(index) { /*根据索引数字删除行（公开）*/
      this.dataT.splice(index, 1)
      setTimeout(() => {
        this.$refs.TableXXX.clickCurrentRow(0)
      }, 100)
    },
    clearSelect() {/*清空选择*/
      this.$refs.TableXXX.selectAll(false)
    },
    clearTableData() {
      this.$set(this, 'dataT', [])
      this.clearPage()
      this.current = 1
      this.total = 0
    },
    clearSearchDataT() { /*searchData每次变动都会存个备份到searchDataT,但有时候我们在外面清空searchData时，
     并不希望空的searchData触发表格数据拉取（比如我们希望并手动清空table数据，同时清空查询条件form数据），于是没把空的值传递给searchData(searchData不变，
     但外面的form进行过一次清空),这样就需要手动清空备份，否则外面再次给searchData附与上一次同样的值，不会触发表格数据拉取*/
      this.searchDataT = {}
    },
    getDataAndClickRow(clickCurrentRow, order, orderKey) { /*拉取表格数据并且点击行，如果传true，则点击当前行，不传则点击 rowClickNum 指定行（公开）*/
      if (clickCurrentRow || this.rowClickNum !== -1) {
        this.getTableData(order, orderKey)
          .then(r => {
            //点击对应行
            if (this.dataT.length > 0) {
              setTimeout(() => {
                if (clickCurrentRow) {
                  this.$refs.TableXXX.clickCurrentRow(this.currentRowIndex)
                }
                else {
                  this.$refs.TableXXX.clickCurrentRow(this.rowClickNum)
                }
              }, 10)
            }
          })
      }
      else {
        this.getTableData()
      }
    },
    onSelect(selection, row) {
      let tempCurrentRowId = row.id
      this.selectedIds.push(tempCurrentRowId)
      this.selected.push(row)
      for (let i = 0; i < this.dataT.length; i++) {
        let tempRow = this.dataT[i]
        if (this.radio && tempRow.id !== tempCurrentRowId && this.selectedIds.some(val => val === tempRow.id)) {
          for (let key in this.selectedIds) {
            if (this.selectedIds[key] === tempRow.id) {
              this.selectedIds.splice(key, 1)
              this.selected.splice(key, 1)
              break
            }
          }
          this.$refs.TableXXX.toggleSelect(i)
        }
      }
    },
    onSelectAll(selection) {
      if (!this.radio) {
        this.selectedIds = []
        this.selected = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(selection)
        for (let item of selection) {
          this.selectedIds.push(item.id)
        }
      }
    },
    onSelectCancel(selection, row) {
      if (this.radio) {
        this.$refs.TableXXX.toggleSelect(row)
      }
      else {
        for (let keyB in this.selectedIds) {
          if (this.selectedIds[keyB] === row.id) {
            this.selectedIds.splice(keyB, 1)
            this.selected.splice(keyB, 1)
          }
        }
      }
    },
    onSelectAllCancel(selection) {
      if (!this.radio) {
        this.selectedIds = []
        this.selected = []
      }
    },
    getSelected() {/*获取已选行数据*/
      return external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.selected)
    },
    onRowClick(row, index) {
      if (row.id === this.currentRowId) {
        return
      }
      if (this.selection && this.rowClickSelect) {
        this.$refs.TableXXX.toggleSelect(index)
      }
      this.$emit('on-row-click', row)
      this.currentRowId = row.id
      this.currentRowIndex = index
    },
    changePage(val) {
      this.current = val
      this.getDataAndClickRow()
    },
    pageSizeChange(val) {
      this.pageSizeT = val
      if (this.current === 1) {
        this.getDataAndClickRow()
      }
    },
    onSortChange({column, key, order}) {
      //表头排序
      this.key = key
      this.order = order
      this.current = 1
      this.getTableData();
    },
    clearPage() {
      this.selected = []
      this.selectedIds = []
      this.currentRowId = null
      this.currentRowIndex = null
    },
    getTableData(order, orderKey) { /*拉取表格数据（公开）*/
      return new Promise((resolve, reject) => {
        if (order) {
          this.order = order
        }
        if (orderKey) {
          this.key = orderKey
        }
        if (this.url && this.url !== '') {
          fetch.get(this.url, this.queryData, null, [], {spin: this.getDataLoading})
            .then(r => {
              this.clearPage()
              if (r.data || r.data === null) {
                if (r.data.records || r.data.records === null) {
                  this.dataT = r.data.records || []
                }
                else if (r.data.page) {
                  if (r.data.page.records || r.data.page.records === null) {
                    this.dataT = r.data.page.records || []
                  }
                }
                else {
                  this.dataT = r.data || []
                }
                this.total = r.data.page && r.data.page.total || r.data.total || r.total || 0
                this.$emit('on-data-change')
                resolve(r)
              }
              else {
                console.warn('请求返回数据有误，无法使用')
              }
            })
            .catch(e => {
              console.warn(e)
              this.clearPage()
            })
        }
        else {
          console.warn('没有有效的请求地址，无法获取表格数据')
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./src/components/btTablePage/btTablePage.vue?vue&type=script&lang=js&
 /* harmony default export */ var btTablePage_btTablePagevue_type_script_lang_js_ = (btTablePagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/btTablePage/btTablePage.vue





/* normalize component */

var btTablePage_component = normalizeComponent(
  btTablePage_btTablePagevue_type_script_lang_js_,
  btTablePagevue_type_template_id_26038a78_render,
  btTablePagevue_type_template_id_26038a78_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var btTablePage = (btTablePage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wellCard/wellCard.vue?vue&type=template&id=6cec915e&
var wellCardvue_type_template_id_6cec915e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexColumnBox wellCardR",style:(_vm.wellStyle)},[_c('div',{staticClass:"panelHeader notGrow"},[_c('div',{staticClass:"fl",staticStyle:{"font-weight":"bold"}},[_vm._v(_vm._s(_vm.title))]),_vm._t("bts")],2),_c('div',{staticClass:"growFlexItem relativeBox"},[_c('div',{staticClass:"fullFlowContent"},[_vm._t("default")],2)])])}
var wellCardvue_type_template_id_6cec915e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/wellCard/wellCard.vue?vue&type=template&id=6cec915e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wellCard/wellCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var wellCardvue_type_script_lang_js_ = ({
  name: "wellCard",
  props: {
    title: {
      type: String,
      default() {
        return '标题'
      }
    },
    width: {
      type: [
        Number,
        String
      ],
      default() {
        return '100%'
      }
    },
    height: {
      type: [
        Number,
        String
      ],
      default() {
        return '100%'
      }
    }
  },
  computed: {
    wellStyle() {
      let temp = {}
      let attrArr = [
        'width',
        'height'
      ]
      for(let e of attrArr){
        if (myTypeof(this[e]) === 'String') {
          temp[e] = this[e]
        }
        else if (myTypeof(this[e]) === 'Number' && this[e] > 0) {
          temp[e] = this[e] + 'px'
        }
      }
      return temp
    }
  }
});

// CONCATENATED MODULE: ./src/components/wellCard/wellCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var wellCard_wellCardvue_type_script_lang_js_ = (wellCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/wellCard/wellCard.vue





/* normalize component */

var wellCard_component = normalizeComponent(
  wellCard_wellCardvue_type_script_lang_js_,
  wellCardvue_type_template_id_6cec915e_render,
  wellCardvue_type_template_id_6cec915e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var wellCard = (wellCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableTree/tableTree.vue?vue&type=template&id=6afb9273&
var tableTreevue_type_template_id_6afb9273_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Table',{key:_vm.updateDomKey,ref:"tabXY",attrs:{"columns":_vm.columnsX,"data":_vm.dataX,"highlight-row":_vm.highlightRow}})}
var tableTreevue_type_template_id_6afb9273_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tableTree/tableTree.vue?vue&type=template&id=6afb9273&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableTree/tableTree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var tableTreevue_type_script_lang_js_ = ({
  name: "tableTree",
  props: {
    columns: { //表格结构数据
      type: Array,
      default() {
        return []
      }
    },
    data: { //表格内容
      type: Array,
      default() {
        return []
      }
    },
    highlightRow: {
      /*高亮当前行*/
      type: Boolean,
      default() {
        return false
      }
    },
    radio: {
      /*表格是否是单选表格，每次只能选中一行*/
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      dataX: [], //处理过后的表格内容数据
      noKey: 1, //每行row的唯一标识
      updateDomKey: Math.floor(Math.random() * 100000000 + 10000) //组件的key,决定是否刷新该组件（key变化则刷新）
    }
  },
  computed: {
    columnsX() {//计算过后的表格结构数据
      let temp = this.columns.filter(item => {
        return item.type !== 'selection'
      })

      if (temp[0]) {
        let key = temp[0].key
        temp[0].renderHeader = (h, params) => {
          return h('div', {style: {paddingLeft: '20px'}}, params.column.title)
        }
        temp[0].render = (h, params) => {
          return h('div', {
            class: 'tableTxtBt',
            style: {
              paddingLeft: (params.row.parentNoKey.length + 1) * 20 + 'px',
              textAlign: 'left'
            }
          }, [
            h("Checkbox", {
              props: {
                value: params.row.checkBox
              },
              directives: [
                {
                  name: "show",
                  value: this.radio
                }
              ],
              on: {
                "on-change": e => {
                  if (e === true) {
                    this.setCollectionVal(this.dataX, {checkBox: false})
                    this.setCollectionVal(this.dataX, {
                      checkBox: e,
                      ownKey: this.dataX[params.index].ownKey
                    })
                    this.$emit('on-select', params.row)
                  }
                  else {
                    this.setCollectionVal(this.dataX, {
                      checkBox: e,
                      ownKey: this.dataX[params.index].ownKey
                    })
                  }
                },
                click: e => {
                  console.log(e)
                  e.stopPort
                }
              }
            }),
            h("Icon", {
              props: {
                type: params.row.hideChild ? 'ios-arrow-forward' :
                  (params.row.hideChild === false ? 'ios-arrow-down' : '')
              },
              style: {
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  this.showHideClick(params)
                }
              }
            }),
            h('span', {
              style: {
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  this.showHideClick(params)
                }
              }
            }, ' ' + params.row[key])
          ])
        }
      }
      return temp
    }
  },
  mounted() {
    this.updateTab()
  },
  watch: {
    data() {
      this.updateTab()
    }
  },
  methods: {
    setCollectionVal(arr, option) {
      if (option && isValidValue(option.checkBox) && myTypeof(arr) === 'Array') {
        if (option.ownKey) {
          for (let item of arr) {
            if (item.ownKey === option.ownKey) {
              item.checkBox = option.checkBox
            }
            if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
              this.setCollectionValB(item.childrenXK, option)
            }
          }
        }
        else {
          for (let item of arr) {
            item.checkBox = option.checkBox
            if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
              this.setCollectionValB(item.childrenXK, option)
            }
          }
        }
      }
    },
    setCollectionValB(arr, option) {
      if (option && isValidValue(option.checkBox) && myTypeof(arr) === 'Array') {
        if (option.ownKey) {
          for (let item of arr) {
            if (item.ownKey === option.ownKey) {
              item.checkBox = option.checkBox
            }
            if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
              this.setCollectionVal(item.childrenXK, option)
            }
          }
        }
        else {
          for (let item of arr) {
            item.checkBox = option.checkBox
            if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
              this.setCollectionVal(item.childrenXK, option)
            }
          }
        }
      }
    },
    handleResize() {
      this.$refs.tabXY.handleResize()
    },
    updateTab() {
      let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.data)
      this.addHideChildAttr(temp)
      this.showDefault(temp, external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp))
      this.dataX = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp)
    },
    showDefault(root, data) {
      data.forEach((e, i) => {
        if (e.hideChild === false) {
          let child_ = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(e.childrenXK)
          root.splice(i + 1, 0, ...child_)//向当前行下面插入直接子节点
          this.showDefaultB(root, external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(child_))
        }
      })
    },
    showDefaultB(root, data) {
      data.forEach((e, i) => {
        if (e.hideChild === false) {
          let child_ = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(e.childrenXK)
          root.splice(i + 1, 0, ...child_)//向当前行下面插入直接子节点
          this.showDefault(root, external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(child_))
        }
      })
    },
    showHideClick(params) {
      if (params.row.hideChild) {//收起状态下，打开
        this.dataX[params.index].hideChild = false
        let child_ = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(params.row.childrenXK)
        this.dataX.splice(params.index + 1, 0, ...child_)//向当前行下面插入直接子节点
        //如果子节点中有默认打开的，则插入孙子节点
        this.openChild(params.row.childrenXK, params.index + 1)
      }
      else if (params.row.hideChild === false) {//打开状态，收起
        this.hideChildNode(params)
      }
    },
    openChild(data, index) {
      data.forEach((e, i) => {
        if (e.hideChild === false) {
          let childB = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(e.childrenXK)
          this.dataX.splice(index + i + 1, 0, ...childB)
          this.openChild(e.childrenXK, index + i + 1)
        }
      })
    },
    addHideChildAttr(data, parentNoKey) {
      for (let item of data) {
        item.ownKey = this.noKey
        this.noKey++
        item.parentNoKey = item.parentNoKey || []
        if (parentNoKey !== undefined) {
          item.parentNoKey.push(...parentNoKey)
        }
        if (item.children) {
          item.childrenXK = item.children
          delete item.children
        }
        if (this.myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
          if (item.hideChild !== false) {
            item.hideChild = true
          }
          this.addHideChildAttrB(item.childrenXK, [
            item.ownKey,
            ...item.parentNoKey
          ])
        }
      }
    },
    addHideChildAttrB(data, parentNoKey) {//为了代替递归（递归效率太低），写了两个相似的方法
      for (let item of data) {
        item.ownKey = this.noKey
        this.noKey++
        item.parentNoKey = item.parentNoKey || []
        if (parentNoKey !== undefined) {
          item.parentNoKey.push(...parentNoKey)
        }
        if (item.children) {
          item.childrenXK = item.children
          delete item.children
        }
        if (this.myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
          if (item.hideChild !== false) {
            item.hideChild = true
          }
          this.addHideChildAttr(item.childrenXK, [
            item.ownKey,
            ...item.parentNoKey
          ])
        }
      }
    },
    hideChildNode(params) {//收起（从table移除）点击行在table中显示的所有子节点
      let count = this.getChildCount(params.row.ownKey)
      if (count) {
        this.dataX.splice(params.index + 1, count)//收起（从table中移除）点击行下所有显示在table中的子节点（子节点一定是跟在父节点后面的）
      }
      //更改收展状态
      setValByOption({
        group: [this.dataX[params.index]],
        condition: e => e.hideChild === false,
        key: 'hideChild',
        val: true,
        childKey:'childrenXK'
      })
    },
    /**
     * 手动添加单个子节点
     * @param index [非负整数] 要添加子节点的节点的序列号，由上到下，从0开始，可用params.row._index
     * @param node [object] 新节点数据,格式相当于table的data的一个元素
     * @returns {Promise<unknown>} 成功则返回添加的节点在组件中的数据，失败则返回失败原因
     */
    addLocalNode(index, node) {
      return new Promise((resolve, reject) => {
        if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isInteger(index) || index < 0) {
          reject('索引序号index必须是正整数或0!')
        }
        else if (index > this.dataX.length - 1) {
          reject('无效的索引序号index!')
        }
        if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(node) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(node)) {
          reject('节点数据异常，无法添加节点！')
        }
        let parent = this.dataX[index]
        if (parent.hideChild !== false) {
          parent.hideChild = false
        }
        let parenNoKeyT = [//新节点的parentNoKey
          parent.ownKey,
          ...parent.parentNoKey
        ]
        let nodeT = {//新节点数据
          ...node,
          ownKey: ++this.noKey,
          parentNoKey: parenNoKeyT
        }
        for (let item of this.dataX) {//在table内容数据dataX中的节点（新节点的所有上辈）的对应位置（层级,即第几层children）上添加新节点数据
          let level = parenNoKeyT.indexOf(item.ownKey)//父辈等级（父辈ownKey在新节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
          if (level > -1) {//如果是新节点父辈
            if (item.childrenXK === undefined) {
              item.childrenXK = []
            }
            let childrenXK = item.childrenXK
            let temp = item
            for (let i = 0; i < level + 1; i++) {//找到正确的位置(层级)添加新节点数据
              if (i === level) {
                childrenXK.push(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(nodeT))
                if (item.hideChild === undefined) {
                  item.hideChild = true
                }
                break
              }
              else {
                temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(temp.childrenXK, e => parenNoKeyT.indexOf(e.ownKey) !== -1)//找到下一层级（children）中的父辈数据节点，进行下一循环
                if (temp.hideChild === undefined) {
                  temp.hideChild = true
                }
                if (temp.childrenXK === undefined) {
                  temp.childrenXK = []
                }
                childrenXK = temp.childrenXK
              }
            }
          }
        }
        this.dataX.splice(index + 1 + this.getChildCount(parent.ownKey), 0, external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(nodeT))//在tableX中直接父节点下添加新节点（直接展示出来）
        this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
        resolve(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(nodeT))
      })
    },
    /**
     * 手动编辑单个子节点
     * @param index [非负整数] 要编辑节点的节点的序列号，由上到下，从0开始，可用params.row._index
     * @param node [object] 节点的新数据,格式相当于table的data的一个元素
     * @returns {Promise<unknown>} 成功则返回编辑后的节点在组件中的数据，失败则返回失败原因
     */
    editLocalNode(index, node) {
      return new Promise((resolve, reject) => {
        if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isInteger(index) || index < 0) {
          reject('索引序号index必须是正整数或0!')
        }
        else if (index > this.dataX.length - 1) {
          reject('无效的索引序号index!')
        }
        if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(node) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(node)) {
          reject('节点数据异常，无法添加节点！')
        }
        let thisNode = this.dataX[index]
        //节点新数据
        let nodeT = Object.assign(thisNode, node)
        this.dataX[index] = nodeT//更新当前节点
        for (let item of this.dataX) {//在table内容数据dataX中的节点（当前节点的所有上辈）的对应位置（层级,即第几层children）上修改节点数据
          let level = nodeT.parentNoKey.indexOf(item.ownKey)//父辈等级（父辈ownKey在当前节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
          if (level > -1) {//如果是当前节点父辈
            let childrenXK = item.childrenXK
            for (let i = 0; i < level + 1; i++) {//找到正确的位置(层级)修改节点新数据
              if (i === level) {
                let tIndex = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.findIndex(childrenXK, e => e.ownKey === nodeT.ownKey)
                if (tIndex > -1) {
                  childrenXK[tIndex] = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(nodeT)
                }
                break
              }
              else {
                let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(childrenXK, e => nodeT.parentNoKey.indexOf(e.ownKey) !== -1)//找到下一层级（children）中的父辈数据节点，进行下一循环
                childrenXK = temp.childrenXK
              }
            }
          }
        }
        this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
        resolve(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(nodeT))
      })
    },
    /**
     * 手动删除单个子节点
     * @param index [非负整数] 要删除节点的节点的序列号，由上到下，从0开始，可用params.row._index
     * @returns {Promise<unknown>} 成功则返回删除后的整棵表格树数据，失败则返回失败原因
     */
    deleteLocalNode(index) {
      return new Promise((resolve, reject) => {
        if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isInteger(index) || index < 0) {
          reject('索引序号index必须是正整数或0!')
        }
        else if (index > this.dataX.length - 1) {
          reject('无效的索引序号index!')
        }
        let thisNode = this.dataX[index]
        this.dataX.splice(index, 1)//删除当前节点
        this.deleteLocalChildNode(thisNode.ownKey, index)
        for (let item of this.dataX) {//在table内容数据dataX中的节点（当前节点的所有上辈）的对应位置（层级,即第几层children）上删除节点数据
          let level = thisNode.parentNoKey.indexOf(item.ownKey)//父辈等级（父辈ownKey在当前节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
          if (level > -1) {//如果是当前节点父辈
            let childrenXK = item.childrenXK
            let temp = item
            for (let i = 0; i < level + 1; i++) {//找到正确的位置(层级)删除节点新数据
              if (i === level) {
                let tIndex = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.findIndex(childrenXK, e => e.ownKey === thisNode.ownKey)
                if (tIndex > -1) {
                  childrenXK.splice(tIndex, 1)
                  if (childrenXK.length === 0) {
                    temp.hideChild = null
                  }
                }
                break
              }
              else {
                temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(childrenXK, e => thisNode.parentNoKey.indexOf(e.ownKey) !== -1)//找到下一层级（children）中的父辈数据节点，进行下一循环
                childrenXK = temp.childrenXK
              }
            }
          }
        }
        this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
        resolve(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.dataX))
      })
    },
    deleteLocalChildNode(ownKey, index) {//删除tableX中所有展示的后辈节点
      let count = this.getChildCount(ownKey)
      if (count) {
        this.dataX.splice(index, count)//收起（从table中移除）点击行下所有显示在table中的子节点（子节点一定是跟在父节点后面的）
      }
    },
    getChildCount(ownKey) {
      let count = 0
      for (let item of this.dataX) {
        if (item.parentNoKey.indexOf(ownKey) !== -1) {//如果当前行的parentNoKey里有删除行的ownKey,则表示当前行是删除行的子节点
          count++
        }
      }
      return count
    }
  }
});

// CONCATENATED MODULE: ./src/components/tableTree/tableTree.vue?vue&type=script&lang=js&
 /* harmony default export */ var tableTree_tableTreevue_type_script_lang_js_ = (tableTreevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tableTree/tableTree.vue





/* normalize component */

var tableTree_component = normalizeComponent(
  tableTree_tableTreevue_type_script_lang_js_,
  tableTreevue_type_template_id_6afb9273_render,
  tableTreevue_type_template_id_6afb9273_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableTree = (tableTree_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/uploadGroup/uploadGroup.vue?vue&type=template&id=b1d45278&
var uploadGroupvue_type_template_id_b1d45278_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Upload',{attrs:{"name":"files","action":_vm.urlT,"before-upload":_vm.handelManualUpload,"on-error":_vm.uploadError,"on-success":_vm.uploadSuccess,"on-exceeded-size":_vm.overSize,"on-preview":_vm.onPreview,"on-remove":_vm.onRemove,"on-format-error":_vm.onFormatError,"data":_vm.data,"max-size":_vm.maxSize,"show-upload-list":false,"with-credentials":_vm.withCredentials,"format":_vm.format,"multiple":_vm.multiple||false,"disabled":_vm.length > 0 && _vm.fileList.length >= _vm.length||Boolean(_vm.disabled)}},[_c('Button',{class:{disabledR:_vm.length > 0 && _vm.fileList.length >= _vm.length||Boolean(_vm.disabled)},attrs:{"icon":"ios-cloud-upload-outline"}},[_vm._v("选择文件")])],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'img' && _vm.fileIdList.length>0),expression:"previewType === 'img' && fileIdList.length>0"}],staticClass:"previewBoxM"},_vm._l((_vm.fileIdList),function(item){return (!_vm.manualUpload && item !== null)?_c('div',{key:item,staticClass:"previewImg"},[_c('img',{attrs:{"src":_vm.url+'/'+item+'/download',"alt":item}}),_c('div',{staticClass:"deleteModal"},[_c('Icon',{staticClass:"previewExpand",attrs:{"type":"ios-expand","size":"40","title":"全屏预览"},on:{"click":function($event){return _vm.fullScreenImgByDom(_vm.url+'/'+item+'/download')}}}),_c('Icon',{staticClass:"previewDelete",attrs:{"type":"ios-trash-outline","size":"40","title":"删除"},on:{"click":function($event){return _vm.deleteById($event,item)}}})],1)]):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'localImg' && _vm.fileSrcList.length>0),expression:"previewType === 'localImg' && fileSrcList.length>0"}],staticClass:"previewBoxM"},_vm._l((_vm.fileSrcList),function(item,index){return (_vm.manualUpload && item !== null)?_c('div',{key:'manualImg'+index,staticClass:"previewImg"},[_c('img',{attrs:{"src":item,"alt":'manualImg'+index}}),_c('div',{staticClass:"deleteModal"},[_c('Icon',{staticClass:"previewExpand",attrs:{"type":"ios-expand","size":"40","title":"全屏预览"},on:{"click":function($event){return _vm.fullScreenImgByDom(item)}}}),_c('Icon',{staticClass:"previewDelete",attrs:{"type":"ios-trash-outline","size":"40","title":"删除"},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)]):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'localList'&& _vm.fileList.length>0),expression:"previewType === 'localList'&& fileList.length>0"}],staticClass:"customFileListM"},_vm._l((_vm.fileList),function(item,index){return (_vm.manualUpload && item !== null)?_c('p',{key:'manualItem'+index,staticClass:"customFileListItem"},[_c('Icon',{attrs:{"type":_vm.getFileTypeIconByName(item.name)}}),_c('span',{staticClass:"upNameT",attrs:{"title":"点击下载"},on:{"click":function($event){return _vm.downloadManualFile(item)}}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"btBoxJ"},[_c('Icon',{staticClass:"listBtH",attrs:{"type":"md-qr-scanner","size":"14","title":"全屏预览"},on:{"click":function($event){return _vm.listExpand(item)}}}),_c('Icon',{staticClass:"listBtH",attrs:{"type":"ios-close","size":"22","title":"删除"},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)],1):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'list' && _vm.fileDefaultList.length>0),expression:"previewType === 'list' && fileDefaultList.length>0"}],staticClass:"customFileListM"},_vm._l((_vm.fileDefaultList),function(item,index){return (!_vm.manualUpload && item !== null)?_c('p',{key:'defaultItem'+index,staticClass:"customFileListItem"},[_c('Icon',{attrs:{"type":_vm.getFileTypeIconByName(item.name)}}),_c('span',{staticClass:"upNameT",attrs:{"title":"点击下载"},on:{"click":function($event){return _vm.downloadDefaultFile(item)}}},[_vm._v(_vm._s(item.name||'文件'+(index+1)))]),_c('span',{staticClass:"btBoxJ"},[_c('Icon',{staticClass:"listBtH",attrs:{"type":"md-qr-scanner","size":"14","title":"全屏预览"},on:{"click":function($event){return _vm.listExpand(item)}}}),_c('Icon',{staticClass:"listBtH",attrs:{"type":"ios-close","size":"22","title":"删除"},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)],1):_vm._e()}),0)],1)}
var uploadGroupvue_type_template_id_b1d45278_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/uploadGroup/uploadGroup.vue?vue&type=template&id=b1d45278&

// CONCATENATED MODULE: ./src/methods/fullScreenImgByDom.js


function fullScreenImgByDom(src) {
  let bodyEl = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.first(document.getElementsByTagName('body'))
  let child = document.createElement('div')
  child.setAttribute('class', 'fullScreenImgByDom')
  child.innerHTML = `<div class="previewInner"><img src="${src}" alt="全屏图片"><span class="ivu-icon ivu-icon-md-close" title="关闭预览"></span></div>`
  child.querySelector(".ivu-icon-md-close").addEventListener('click', function () {
    let bb = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.first(document.getElementsByTagName('body'))
    if (bb) {
      bb.removeChild(child)
    }
  })
  bodyEl.appendChild(child)
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
 * @param option object/string object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error or
 *   warning)'}---string:'标题'
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
        }
        else {
          if (option.buttons && myTypeof(option.buttons) === 'Object') {
            if (option.buttons.cancel) {
              option.buttons.cancel.text && (cancelTxt = option.buttons.cancel.text) && (cancelVisible = true)
              option.buttons.cancel.className && (cancelClass = option.buttons.cancel.className)
              option.buttons.confirm.text && (okTxt = option.buttons.confirm.text)
              option.buttons.confirm.className && (okClass = option.buttons.confirm.className)
            }
          }
          else if (option.buttons && myTypeof(option.buttons) === 'Array') {
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
            confirm: {
              text: okTxt,
              value: true,
              visible: true,
              className: okClass
            },
            cancel: {
              text: cancelTxt,
              value: null,
              visible: cancelVisible,
              className: cancelClass
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/uploadGroup/uploadGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var uploadGroupvue_type_script_lang_js_ = ({
  name: "uploadGroup",
  model: {
    prop: 'fileIdListProp',
    event: 'on-file-id-change'
  },
  props: {
    fileIdListProp: {
      type: [
        Array,
        Number,
        String,
        File
      ],
      default() {
        return []
      }
    },
    url: {
      /*文件上传的地址*/
      type: String,
      default() {
        if (window.g && window.g.mgrURL) {
          return window.g.mgrURL + '/fsc/file'
        }
        return ''
      }
    },
    data: {
      /*文件上传接口其他参数*/
      type: Object,
      default() {
        return {
          appId: 0,
          moduleId: 0,
          typeId: 0
        }
      }
    },
    manualUpload: {
      type: Boolean,
      default() {
        return false
      }
    },
    maxSize: {
      type: Number,
      default() {
        return 0
      }
    },
    length: {
      type: Number,
      default() {
        return 0
      }
    },
    showUploadList: {
      type: Boolean,
      default() {
        return true
      }
    },
    withCredentials: {
      type: Boolean,
      default() {
        return true
      }
    },
    multiple: {
      type: Boolean,
      default() {
        return false
      }
    },
    format: {
      type: Array,
      default() {
        return []
      }
    },
    showImg: {
      type: Boolean,
      default() {
        return false
      }
    },
    disabled: {
      /*禁用，仅展示*/
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      getFileTypeIconByName: getFileTypeIconByName,
      fullScreenImgByDom: fullScreenImgByDom,
      fileSrcList: [],
      fileDefaultList: []
    }
  },
  computed: {
    previewType() {
      if (!this.manualUpload && this.showImg && this.fileListItemIsIMG) {
        return 'img'
      }
      else if (this.manualUpload && this.showImg && this.fileListItemIsIMG) {
        return 'localImg'
      }
      else if (this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
        return 'localList'
      }
      else if (!this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
        return 'list'
      }
    },
    urlT() {
      if (this.manualUpload) {
        return '//jsonplaceholder.typicode.com/posts/'
      }
      else {
        return this.url
      }
    },
    fileList: {
      get() {
        if (this.manualUpload) {
          return this.fileIdList
        }
        else {
          let temp = []
          for (let item of this.fileIdList) {
            temp.push({
              response: {
                data: [
                  {
                    id: item
                  }
                ]
              }
            })
          }
          return temp
        }
      },
      set(val) {
        if (this.manualUpload) {
          this.fileIdList = val
        }
        else {
          let temp = []
          for (let item of val) {
            if (item.response && item.response.data && item.response.data[0] &&
              (item.response.data[0].id || item.response.data[0].id === 0)) {
              temp.push(item.response.data[0].id)
            }
          }
          this.fileIdList = temp
        }
      }
    },
    fileIdList: {
      get() {
        switch (myTypeof(this.fileIdListProp)) {
          case 'Number':
            return [this.fileIdListProp]
          case 'String':
            if (this.fileIdListProp.indexOf('--') !== -1) {
              return []
            }
            else {
              return [Number(this.fileIdListProp)]
            }
          case 'Array':
            return this.fileIdListProp.filter(e => e !== '--')
          case 'File':
            return [this.fileIdListProp]
          default:
            return []
        }
      },
      set(val) {
        if (this.length === 1) {
          let temp = _.first(val)
          this.$emit('on-file-id-change', temp || temp === 0 ? temp : null)
        }
        else {
          this.$emit('on-file-id-change', _.cloneDeep(val))
        }
      }
    },
    fileListItemIsIMG() {
      let temp
      if (this.manualUpload) {
        temp = this.fileList
      }
      else {
        temp = this.fileDefaultList
      }
      for (let item of temp) {
        let type
        if (this.manualUpload) {
          type = item && item.type
        }
        else {
          type = item && item.mimeType
        }
        if (!type || type && !isImgByFile(type)) {
          return false
        }
      }
      return true
    }
  },
  watch: {
    fileList: {
      async handler(after) {
        if (this.previewType === 'localImg') {
          if (after && after.length > 0) {
            this.fileSrcList = await this.getFileSrcList(after)
          }
          else {
            this.fileSrcList = []
          }
        }
        else if (after && after.length > 0 && this.previewType !== 'localList') {
          let temp = []
          for (let item of after) {
            if (item.name === undefined) {
              if (item.response && item.response.data && item.response.data[0] && item.response.data[0].id) {
                fetch.get(this.url + '/' + item.response.data[0].id)
                  .then(r => {
                    let itemT = _.cloneDeep(item)
                    itemT.name =
                      r && r.data && r.data.returnValue && r.data.returnValue[0] && r.data.returnValue[0].name ||
                      '文件' + _.indexOf(after, item)
                    itemT.mimeType =
                      r && r.data && r.data.returnValue && r.data.returnValue[0] && r.data.returnValue[0].mimeType ||
                      'unknown'
                    temp.push(itemT)
                  })
                  .catch(() => {
                    temp.push({name: '文件' + _.indexOf(after, item)})
                  })
              }
              else {
                temp.push({name: '未知文件'})
              }
            }
            else {
              temp.push(item)
            }
          }
          this.fileDefaultList = temp
        }
        else {
          this.fileDefaultList = []
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    clear() {
      this.fileList = []
    },
    async getFileSrcList(data) {
      let temp = []
      for (let item of data) {
        let src = await getFileSrc(item)
        temp.push(src)
      }
      return temp
    },
    clearManualItem(index) {
      if (!this.disabled) {
        let temp = this.fileList
        temp.splice(index, 1)
        this.fileList = temp
      }
    },
    downloadDefaultFile(item) {
      if (item && item.response && item.response.data && item.response.data[0] && item.response.data[0].id) {
        window.open(this.url + '/' + item.response.data[0].id + '/download')
      }
    },
    listExpand(file) {//列表图片预览
      if (this.manualUpload) {
        getFileSrc(file)
          .then(r => {
            if (isImgByFile(file.type)) {
              //图片的 base64 格式, 可以直接当成 img 的 src 属性值
              fullScreenImgByDom(r)
            }
            else {
              swal('提示', '文件不是图片，不可预览', 'info')
            }
          })
      }
      else if (file && file.response && file.response.data && file.response.data[0] && file.response.data[0].id) {
        if (isImgByFile(file.mimeType)) {
          fullScreenImgByDom(this.url + '/' + file.response.data[0].id + '/download')
        }
        else {
          swal('提示', '文件不是图片，不可预览', 'info')
        }
      }
    },
    downloadManualFile(file) {
      getFileSrc(file)
        .then(r => {
          downloadFileReaderFile(file.name, r)
        })
    },
    handelManualUpload(file) {
      if (this.manualUpload) {
        if (file) {
          let type = getFileTypeByName(file.name)
          if (this.format.length > 0 && this.format.indexOf(type) < 0) {
            swal("文件类型不被允许", "支持类型：" + (this.format.length > 0 && String(this.format) || '无'), "warning")
            return false
          }
          if (this.maxSize && file.size > this.maxSize * 1024) {
            swal("文件过大", "支持最大：" + this.maxSize + "kb", "warning")
            return false
          }
          let temp = this.fileList
          temp.push(file)
          this.fileList = temp
        }
        return false
      }
      else {
        return true
      }
    },
    uploadError(error, file, fileList) {
      console.warn(error)
      swal("上传出错", "", "error")
    },
    uploadSuccess(response, file, fileList) {
      if (response && response.code === 0) {
        let temp = this.fileList
        temp.push(file)
        this.fileList = temp
      }
      else {
        swal('上传失败', response && response.message || '', 'error')
      }
    },
    overSize(file, fileList) {
      swal("文件过大", "支持最大：" + this.maxSize + ' kb', "warning")
    },
    onFormatError(file, fileList) {
      swal("文件类型不被允许", "支持类型：" + (this.format.length > 0 && String(this.format) || '无'), "warning")
    },
    onPreview(file) {
      let id = file && file.response && file.response.data && file.response.data[0] && file.response.data[0].id
      let type = file && file.response && file.response.data && file.response.data[0] &&
        file.response.data[0].mimeType
      if (id) {
        if (myTypeof(type) === 'String' && type.indexOf('image') > -1) {
          fullScreenImgByDom(this.url + '/' + id + '/download')
        }
        else {
          window.open(this.url + '/' + id + '/download')
        }
      }
    },
    onRemove(file, fileList) {
      let id = file && file.response && file.response.data && file.response.data[0] && file.response.data[0].id
      this.deleteById(null, id)
    },
    deleteById(e, id) {
      if (!this.disabled) {
        const fileIdList = this.fileIdList
        let temp = fileIdList
        temp.splice(fileIdList.indexOf(id), 1)
        this.fileList = temp
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/uploadGroup/uploadGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var uploadGroup_uploadGroupvue_type_script_lang_js_ = (uploadGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/uploadGroup/uploadGroup.vue





/* normalize component */

var uploadGroup_component = normalizeComponent(
  uploadGroup_uploadGroupvue_type_script_lang_js_,
  uploadGroupvue_type_template_id_b1d45278_render,
  uploadGroupvue_type_template_id_b1d45278_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uploadGroup = (uploadGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableSetting/tableSetting.vue?vue&type=template&id=5b76dc7a&
var tableSettingvue_type_template_id_5b76dc7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabSetF"},[_c('div',{staticClass:"tabSetBt",on:{"click":_vm.labelClick}},[_c('Icon',{attrs:{"type":"md-settings","size":"17"}}),_c('span',[_vm._v("列表显示设置")])],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"tabSetCard",style:({top:_vm.top,right:_vm.right,width:_vm.width,backgroundColor:_vm.bg})},[_c('div',{staticClass:"topCheck"},[_c('Checkbox',{attrs:{"indeterminate":_vm.indeterminate,"value":_vm.checkAll},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleCheckAll($event)}}},[_vm._v("全选")]),_c('span',{staticStyle:{"cursor":"pointer","float":"right"},on:{"click":_vm.save}},[_vm._v("确定")])],1),_c('CheckboxGroup',{model:{value:(_vm.checkAllGroup),callback:function ($$v) {_vm.checkAllGroup=$$v},expression:"checkAllGroup"}},_vm._l((_vm.groupX),function(itemT,index){return _c('Checkbox',{key:'tabSet_'+_vm.sKey+index,staticClass:"setItem",attrs:{"label":itemT&&itemT.label,"disabled":itemT&&itemT.disabled}})}),1)],1)])}
var tableSettingvue_type_template_id_5b76dc7a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tableSetting/tableSetting.vue?vue&type=template&id=5b76dc7a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableSetting/tableSetting.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 列表显示设置插件
 * @desc 利用table的columns和localstorage对table进行列的显示设置
 * @author ricky email:zhangqingcq@foxmail.com
 * @date 2020.03.23
 * @param {array} value - 插件的值（v-model,对应table的columns）必填
 * @param {string} sKey - 插件数据在localstorage的唯一标识，命名规则：插件所在单文件名称_取名时间，如areaNew_202003231639 必填
 * @param {string} [top] - 设置面板定位-上（相对于按钮）
 * @param {string} [right] - 设置面板定位-右（相对于按钮）
 * @param {string} [width] - 设置面板宽度
 * @param {string} [bg] - 设置面板背景色
 * @param {boolean} [defaultCheck] - 是否设置默认勾选（默认false），如果设为true,则在v-model绑定的columns项里设置showSettingCheck为true
 * @example 调用示例 <table-search v-model="areaName" :open="openSearch" placeholder="片区名称" @on-search="search" @on-toggle="openSearch=!openSearch"/>
 */


/* harmony default export */ var tableSettingvue_type_script_lang_js_ = ({
  name: "tableSetting",
  model: {
    prop: 'value',
    event: 'subVal'
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    sKey: {
      type: String,
      required: true
    },
    top: {
      type: String,
      default() {
        return '30px'
      }
    },
    right: {
      type: String,
      default() {
        return '0'
      }
    },
    width: {
      type: String,
      default() {
        return '150px'
      }
    },
    bg: {
      type: String,
      default() {
        return '#ccc'
      }
    },
    defaultCheck: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      show: false,
      groupT: []
    }
  },
  computed: {
    groupX() {
      if (this.value.length > this.groupT.length) {
        this.groupT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.value)
      }
      return this.groupT.map(e => {
        let temp = {'label': e && e.title || '未知列'}
        if (e && e.disableShowSetting) {
          temp.disabled = true
        }
        return temp
      })
    },
    disabledGroup() {
      return this.groupX.filter(e => e.disabled)
    },
    checkAllGroup: {
      get() {
        return this.value.map(e => e && e.title || '未知列')
      },
      set(val) {
        let subV = this.groupT.filter(e => {
          for (let item of val) {
            if (item === e.title) {
              return true
            }
          }
          return false
        })
        this.$emit('subVal', subV)
      }
    }
  },
  mounted() {
    let localStr = localStorage.getItem(this.sKey)
    if (localStr) {
      this.checkAllGroup = JSON.parse(decodeURI(localStr))
    } else {
      if (this.defaultCheck) {
        this.checkAllGroup = this.value.filter(e => e.showSettingCheck)
          .map(e => e && e.title || '未知列')
      }
    }
  },
  watch: {
    checkAllGroup: {
      handler(after) {
        this.checkAllGroupChange(after)
      },
      immediate: true
    }
  },
  methods: {
    labelClick() {
      if (!this.show) {
        this.show = true
      }
    },
    save() {
      localStorage.setItem(this.sKey, encodeURI(JSON.stringify(this.checkAllGroup)))
      this.show = false
      // this.$Message.success('显示设置已保存！')
    },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = this.groupX.map(e => e.label);
      } else {
        this.checkAllGroup = this.disabledGroup.map(e => e.label);
      }
    },
    checkAllGroupChange(data) {
      if (data.length === this.groupX.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > this.disabledGroup.length) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/tableSetting/tableSetting.vue?vue&type=script&lang=js&
 /* harmony default export */ var tableSetting_tableSettingvue_type_script_lang_js_ = (tableSettingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tableSetting/tableSetting.vue





/* normalize component */

var tableSetting_component = normalizeComponent(
  tableSetting_tableSettingvue_type_script_lang_js_,
  tableSettingvue_type_template_id_5b76dc7a_render,
  tableSettingvue_type_template_id_5b76dc7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableSetting = (tableSetting_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/inputMap/inputMap.vue?vue&type=template&id=f027c146&
var inputMapvue_type_template_id_f027c146_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"containerIKJ",style:(_vm.containerStyle)},[_c('Input',{ref:"mapInput",class:{mapInputIKJ:_vm.showMap},attrs:{"placeholder":_vm.placeholder,"disabled":_vm.disabled,"icon":"ios-search"},model:{value:(_vm.valueT.name),callback:function ($$v) {_vm.$set(_vm.valueT, "name", $$v)},expression:"valueT.name"}}),_c('div',{ref:_vm.vidT,style:(_vm.mapStyle),attrs:{"id":_vm.vidT}})],1)}
var inputMapvue_type_template_id_f027c146_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/inputMap/inputMap.vue?vue&type=template&id=f027c146&

// EXTERNAL MODULE: external {"root":"VueAMap","commonjs":"vue-amap","commonjs2":"vue-amap","amd":"vue-amap"}
var external_root_VueAMap_commonjs_vue_amap_commonjs2_vue_amap_amd_vue_amap_ = __webpack_require__("5aeb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/inputMap/inputMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var inputMapvue_type_script_lang_js_ = ({
  name: "inputMap",
  model: {
    prop: 'valProp',
    event: 'update-value'
  },
  props: {
    valProp: {
      type: Object,
      default() {
        return null
      }
    },
    width: {
      type: [
        String,
        Number
      ],
      default() {
        return '100%'
      }
    },
    height: {
      type: [
        String,
        Number
      ],
      default() {
        return null
      }
    },
    placeholder: {
      type: String,
      default() {
        return '搜索'
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    },
    showMap: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      infoWindow: null
    }
  },
  computed: {
    valueT: {
      get() {
        let temp
        if (!this.valProp) {
          temp = {
            name: null
          }
        } else if (!this.valProp.name) {
          temp = {
            ...this.valProp,
            name: null
          }
        } else {
          temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.valProp)
        }
        return temp
      },
      set(val) {
        this.$emit('update-value', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(val))
      }
    },
    vidT() {
      return 'vidT' + Math.floor(Math.random() * 1000000000)
    },
    widthT() {
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(this.width)) {
        return this.width + 'px'
      } else {
        return this.width
      }
    },
    heightT() {
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(this.height)) {
        return this.height + 'px'
      } else if (this.height) {
        return this.height
      } else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(this.width)) {
        return this.width * 0.66 + 'px'
      } else {
        return '200px'
      }
    },
    containerStyle() {
      return {
        width: this.widthT,
        position: 'relative'
      }
    },
    mapStyle() {
      return {
        width: this.widthT,
        height: this.heightT,
        marginTop: '6px',
        opacity: this.showMap ? 1 : 0,
        position: this.showMap ? 'relative' : 'absolute',
        top: this.showMap ? 0 : '-10000px'
      }
    }
  },
  mounted() {
    this.checkHeight()
  },
  methods: {
    checkHeight() {
      if (this.$refs[this.vidT] && this.$refs[this.vidT].clientHeight < 10 || (!this.$refs[this.vidT])) {
        setTimeout(this.checkHeight, 100)
      } else {
        /*高德地图实例初始化较慢，暂时延时1秒，后面寻找完美解决方案*/
        setTimeout(this.initMap, 1000)
      }
    },
    initMap() {
      external_root_VueAMap_commonjs_vue_amap_commonjs2_vue_amap_amd_vue_amap_["lazyAMapApiLoaderInstance"].load()
        .then(() => {
          this.mapX = new AMap.Map(this.vidT, {}).on('complete', () => {
            this.geoCoder = new AMap.Geocoder()

            if (this.valProp && this.valProp.lng && this.valProp.lat) {
              this.createMarker({
                lng: this.valProp.lng,
                lat: this.valProp.lat,
                name: this.valProp.name
              })
            }
            new AMap.Autocomplete({
              input: this.$refs.mapInput.$el.children[1]
            }).on('select', (val) => {
              if (val && val.poi && val.poi.name) {
                if (val.poi.location && val.poi.location.lng && val.poi.location.lat) {
                  this.createMarker({
                    name: val.poi.name,
                    lng: val.poi.location.lng,
                    lat: val.poi.location.lat
                  })
                  this.valueT = {
                    name: val.poi.name,
                    lng: val.poi.location.lng,
                    lat: val.poi.location.lat
                  }
                } else {
                  this.mapX.setCity(val.poi.name, () => {
                    let center = this.mapX.getCenter()
                    this.createMarker({
                      name: val.poi.name,
                      lng: center.lng,
                      lat: center.lat
                    })
                    this.valueT = {
                      name: val.poi.name,
                      lng: center.lng,
                      lat: center.lat
                    }
                  })
                }
              }
              this.$emit('on-change', this.valueT)
            })
          })
        })
    },
    createMarker({lng, lat, name}) {
      this.mapX.clearMap()
      let point = new AMap.LngLat(lng, lat)
      let marker = new AMap.Marker({
        map: this.mapX,
        position: point,
        draggable: true
      })
      this.mapX.add(marker)
      this.getAddress(lng, lat)
      marker.on('dragend', () => {
        let dragPoint = marker.getPosition()
        this.valueT = {
          name: name || null,
          lng: dragPoint.lng,
          lat: dragPoint.lat
        }
        this.getAddress(lng, lat)
      })
      marker.on('click', (e) => {
        if (this.infoWindow) {
          this.infoWindow.open(this.mapX, e.target.getPosition())
        }
      })
      this.mapX.setFitView()
    },
    getAddress(lng, lat) {
      this.geoCoder.getAddress([
        lng,
        lat
      ], (status, result) => {
        if (status === 'complete' && result.info === 'OK' && result.regeocode && result.regeocode.formattedAddress) {
          this.infoWindow = new AMap.InfoWindow({ //创建信息窗体
            isCustom: true,
            content: '<div class="mapInfoWindowIKJ">' + result.regeocode.formattedAddress + '</div>',
            offset: new AMap.Pixel(16, -45),
            closeWhenClickMap: true
          })
        } else {
          this.infoWindow = null
          console.warn('地图获取位置信息失败', result)
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./src/components/inputMap/inputMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var inputMap_inputMapvue_type_script_lang_js_ = (inputMapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/inputMap/inputMap.vue





/* normalize component */

var inputMap_component = normalizeComponent(
  inputMap_inputMapvue_type_script_lang_js_,
  inputMapvue_type_template_id_f027c146_render,
  inputMapvue_type_template_id_f027c146_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var inputMap = (inputMap_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableIconBtn/tableIconBtn.vue?vue&type=template&id=71ca3bf8&
var tableIconBtnvue_type_template_id_71ca3bf8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"has",rawName:"v-has",value:(_vm.has),expression:"has"}],staticClass:"tableBtnsG",class:{disabled:_vm.disabled},attrs:{"title":_vm.title},on:{"click":_vm.onClick}},[_c('Icon',{attrs:{"type":_vm.icon,"size":_vm.size}})],1)}
var tableIconBtnvue_type_template_id_71ca3bf8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tableIconBtn/tableIconBtn.vue?vue&type=template&id=71ca3bf8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableIconBtn/tableIconBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var tableIconBtnvue_type_script_lang_js_ = ({
  name: "tableIconBtn",
  props: {
    icon: {
      type: String,
      default() {
        return 'md-radio-button-on'
      }
    },
    title: {
      type: String,
      default() {
        return '按钮'
      }
    },
    has: {
      type: String
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    },
    size: {
      type: Number,
      default() {
        return 24
      }
    }
  },
  methods: {
    onClick(e) {
      if (this.disabled) {
        return
      }
      this.$emit('click', e)
    }
  }
});

// CONCATENATED MODULE: ./src/components/tableIconBtn/tableIconBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var tableIconBtn_tableIconBtnvue_type_script_lang_js_ = (tableIconBtnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tableIconBtn/tableIconBtn.vue





/* normalize component */

var tableIconBtn_component = normalizeComponent(
  tableIconBtn_tableIconBtnvue_type_script_lang_js_,
  tableIconBtnvue_type_template_id_71ca3bf8_render,
  tableIconBtnvue_type_template_id_71ca3bf8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableIconBtn = (tableIconBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=template&id=40d6fb0f&
var iconTxtBtnvue_type_template_id_40d6fb0f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"has",rawName:"v-has",value:(_vm.has),expression:"has"}],staticClass:"tabTopBtnsT",class:{disabled:_vm.disabled},style:({'font-size': _vm.txtSize}),on:{"click":_vm.click}},[_c('Icon',{attrs:{"type":_vm.icon,"size":_vm.size}}),_vm._v("\n  "+_vm._s(_vm.name)+"\n")],1)}
var iconTxtBtnvue_type_template_id_40d6fb0f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=template&id=40d6fb0f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var iconTxtBtnvue_type_script_lang_js_ = ({
  name: "iconTxtBtn",
  props: {
    name: {
      type: String,
      default() {
        return '按钮'
      }
    },
    icon: {
      type: String,
      default() {
        return 'md-download'
      }
    },
    size: {
      type: Number,
      default() {
        return 17
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    },
    has: {
      type: String
    }
  },
  computed:{
    txtSize(){
      return Math.floor(this.size/17*12) + 'px'
    }
  },
  methods: {
    click(e) {
      if(this.disabled){
        return
      }
      this.$emit('click', e)
    }
  }
});

// CONCATENATED MODULE: ./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var iconTxtBtn_iconTxtBtnvue_type_script_lang_js_ = (iconTxtBtnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/iconTxtBtn/iconTxtBtn.vue





/* normalize component */

var iconTxtBtn_component = normalizeComponent(
  iconTxtBtn_iconTxtBtnvue_type_script_lang_js_,
  iconTxtBtnvue_type_template_id_40d6fb0f_render,
  iconTxtBtnvue_type_template_id_40d6fb0f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var iconTxtBtn = (iconTxtBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/showHidePanel/showHidePanel.vue?vue&type=template&id=8eea5af4&
var showHidePanelvue_type_template_id_8eea5af4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.getBg)},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"contentX"},[_vm._t("default")],2),_c('div',{staticClass:"arrowA"},[_c('div',{staticClass:"btA",on:{"click":function($event){_vm.show=!_vm.show}}},[_c('Icon',{attrs:{"type":_vm.show?'ios-arrow-up':'ios-arrow-down',"size":"20"}})],1)])])}
var showHidePanelvue_type_template_id_8eea5af4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/showHidePanel/showHidePanel.vue?vue&type=template&id=8eea5af4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/showHidePanel/showHidePanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var showHidePanelvue_type_script_lang_js_ = ({
  name: "showHidePanel",
  props: [
    'bg'
  ],
  data() {
    return {
      show: true
    }
  },
  computed: {
    getBg() {
      if (this.show) {
        return 'background:' + this.bg || false
      } else {
        return ''
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/showHidePanel/showHidePanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var showHidePanel_showHidePanelvue_type_script_lang_js_ = (showHidePanelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/showHidePanel/showHidePanel.vue





/* normalize component */

var showHidePanel_component = normalizeComponent(
  showHidePanel_showHidePanelvue_type_script_lang_js_,
  showHidePanelvue_type_template_id_8eea5af4_render,
  showHidePanelvue_type_template_id_8eea5af4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var showHidePanel = (showHidePanel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/selectInput/selectInput.vue?vue&type=template&id=592e073e&
var selectInputvue_type_template_id_592e073e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Select',{style:(_vm.labelSelectStyle),attrs:{"disabled":Boolean(_vm.disabled),"transfer":""},model:{value:(_vm.selectVal),callback:function ($$v) {_vm.selectVal=$$v},expression:"selectVal"}},_vm._l((_vm.selectOption),function(item,index){return _c('Option',{key:'selectInputOp'+item.value+index,style:({textAlign: _vm.labelTextAlign}),attrs:{"value":item.val}},[_vm._v(_vm._s(item.label))])}),1),_c('Input',{style:(_vm.inputStyle),attrs:{"placeholder":_vm.placeholder,"clearable":_vm.clearable,"disabled":Boolean(_vm.disabled)},on:{"on-change":_vm.inputChange},model:{value:(_vm.inputVal),callback:function ($$v) {_vm.inputVal=$$v},expression:"inputVal"}})],1)}
var selectInputvue_type_template_id_592e073e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/selectInput/selectInput.vue?vue&type=template&id=592e073e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/selectInput/selectInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var selectInputvue_type_script_lang_js_ = ({
  name: "selectInput",
  model: {
    prop: 'value',
    event: 'subVal'
  },
  props: {
    value: {
      /*组件的值，建议使用v-model绑定，key对应select值，val对应input值*/
      type: Object,
      default() {
        return {
          key: null,
          val: null
        }
      }
    },
    labelWidth: {
      /*表单项标签宽度*/
      type: Number,
      default() {
        return 160
      }
    },
    labelTextAlign: {
      /*select内容对齐方式*/
      type: String,
      default() {
        return 'right'
      }
    },
    itemWidth: {
      /*表单项内容宽度,用于行内表单*/
      type: Number,
      default() {
        return 200
      }
    },
    selectOption: {
      /*选择框待选项*/
      type: Array,
      default() {
        return []
      }
    },
    placeholder: {
      type: String,
      default() {
        return '请输入'
      }
    },
    clearable: {
      type: Boolean,
      default() {
        return false
      }
    },
    disabled: {
      /*禁用，仅展示*/
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    selectVal: {
      get() {
        return this.value && this.value.key || null
      },
      set(val) {
        let temp = {
          key: val,
          val: null
        }
        if (this.selectVal && this.selectVal !== val) {
          temp.beforeKey = this.selectVal
        }
        this.$emit('subVal', temp)
        this.$emit('on-change', temp)
      }
    },
    inputVal: {
      get() {
        return this.value && this.value.val || null
      },
      set(val) {
        let temp = {
          key: this.selectVal,
          val: val
        }
        this.$emit('subVal', temp)
      }
    },
    labelSelectStyle() {
      return {
        width: this.labelWidth + 'px',
        textAlign: this.labelTextAlign
      }
    },
    inputStyle() {
      return {width: this.itemWidth + 'px'}
    }
  },
  methods: {
    inputChange(e) {
      if (e && e.target && e.target.value !== undefined) {
        this.handleChange({
          key: this.selectVal,
          val: e.target.value
        }, this)
      }
    },
    handleChange: external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.debounce((data, root) => {
      root.$emit('on-change', data)
    }, 500)
  }
});

// CONCATENATED MODULE: ./src/components/selectInput/selectInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var selectInput_selectInputvue_type_script_lang_js_ = (selectInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/selectInput/selectInput.vue





/* normalize component */

var selectInput_component = normalizeComponent(
  selectInput_selectInputvue_type_script_lang_js_,
  selectInputvue_type_template_id_592e073e_render,
  selectInputvue_type_template_id_592e073e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var selectInput = (selectInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f73261da-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/orgCascader/orgCascader.vue?vue&type=template&id=3c11fb26&
var orgCascadervue_type_template_id_3c11fb26_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Cascader',{ref:"cascaderRT",attrs:{"data":_vm.data,"change-on-select":"","transfer":"","disabled":_vm.disabled,"render-format":_vm.format,"placeholder":_vm.placeholder},on:{"on-change":_vm.onChange},model:{value:(_vm.val),callback:function ($$v) {_vm.val=$$v},expression:"val"}})}
var orgCascadervue_type_template_id_3c11fb26_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/orgCascader/orgCascader.vue?vue&type=template&id=3c11fb26&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/orgCascader/orgCascader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var orgCascadervue_type_script_lang_js_ = ({
  name: "orgCascader",
  model: {
    prop: 'valProp',
    event: 'submitVal'
  },
  props: {
    url: {
      /*级联数据接口地址*/
      type: String,
      default() {
        if (window.g && window.g.mgrURL) {
          return window.g.mgrURL + '/umc/orgs'
        }
        return ''
      }
    },
    valProp: {
      /*级联绑定值(v-model)*/
      type: [
        Array,
        Number,
        String
      ]
    },
    separator: {
      /*选中的label分隔符（多级展示时）,valProp为String（多级）时分隔符*/
      type: String,
      default() {
        return '/'
      }
    },
    onlyLastVal: {
      /*只取最后一级*/
      type: Boolean,
      default() {
        return true
      }
    },
    onlyLastLabel: {
      /*只显示最后一级*/
      type: Boolean,
      default() {
        return true
      }
    },
    placeholder: {
      type: String,
      default() {
        return '请选择'
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      data: []
    }
  },
  computed: {
    val: {
      get() {
        let valProp = this.valProp
        if (window._.isArray(valProp)) {
          return [].concat(valProp)
        }
        else if (window._.isNumber(valProp)) {
          return findPath({
            group: this.data,
            condition: item => item.value === valProp,
            pathKey: 'value'
          })
        }
        else if (window._.isString(valProp)) {
          return valProp.split(this.separator)
        }
        else if (valProp === null) {
          return []
        }
      },
      set(val) {
        if (this.onlyLastVal) {
          if (window._.isEmpty(val)) {
            this.$emit('submitVal', null)
          }
          else {
            this.$emit('submitVal', window._.last(val))
          }
        }
        else {
          if(_.isEqual(this.valProp,val)){
            return
          }
          this.$emit('submitVal', [].concat(val))
        }
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      if (!this.url) {
        console.error('没有用于拉取机构数据的有效接口地址')
        return
      }
      this.$fetch.get(this.url)
        .then(r => {
          let data = null
          if (r && r.data && r.data.records) {
            data = r.data.records
          }
          else if (r && r.data) {
            data = r.data
          }
          else if (r) {
            data = r
          }
          if (data) {
            this.data = this.dataFilter(data)
          }
          else {
            console.warn('机构数据错误，不能使用')
          }
        })
        .catch(() => {
          console.warn('拉取机构数据出错')
        })
    },
    dataFilter(data) {
      let temp = []
      for (let item of data) {
        let tt = {
          value: item.id,
          label: item.name,
          level: item.level
        }
        if (item.children && (!window._.isEmpty(item.children))) {
          tt.children = this.dataFilter(item.children)
        }
        temp.push(tt)
      }
      return temp
    },
    format(labels, selectedData) {
      if (this.onlyLastLabel) {
        return window._.last(labels)
      }
      return labels.join(this.separator)
    },
    onChange(val, selectedDetail) {
      let name = null
      if (!window._.isEmpty(selectedDetail)) {
        name = selectedDetail.map(item => {
          return item.label
        })
          .join(this.separator)
      }
      this.$emit('on-name-change', name)
    }
  }
});

// CONCATENATED MODULE: ./src/components/orgCascader/orgCascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var orgCascader_orgCascadervue_type_script_lang_js_ = (orgCascadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/orgCascader/orgCascader.vue





/* normalize component */

var orgCascader_component = normalizeComponent(
  orgCascader_orgCascadervue_type_script_lang_js_,
  orgCascadervue_type_template_id_3c11fb26_render,
  orgCascadervue_type_template_id_3c11fb26_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var orgCascader = (orgCascader_component.exports);
// CONCATENATED MODULE: ./src/methods/fullScreenImgPreview.js
/** created 2019.07.05
 *  @author ricky email:zhangqingcq@foxmail.com
 *  注意：不能全局调整Modal弹框尺寸，否则预览图片可能不居中，推荐使用另一个插件fullScreenImgByDom
 */



/* harmony default export */ var fullScreenImgPreview = (function (src) {
  let id = 'previewImg'+Math.floor(Math.random()*10000000)
  external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].info({
    closable:false,
    'transition-names':['linear', 'fade'],
    render: (h) => {
      return h(
        'div',
        {
          class: 'previewModal',
          attrs: {
            id:id
          }
        },
        [
          h(
            'div',
            {
              class:'previewModalInner'
            },
            [
              h(
                'img',
                {
                  attrs:{
                    src: src
                  }
                }
              ),
              h(
                'Icon',
                {
                  props:{
                    type:'md-close',
                    size:20
                  },
                  class:'previewModalDelete',
                  on:{
                    click(){
                      external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                    }
                  }
                }
              )
            ]
          )
        ]
      )
    }
  })

  setTimeout(()=>{
    const hideEl = document.getElementById(id).parentNode.parentNode.parentNode.parentNode
    const hideEl2 = document.getElementById(id).parentNode.nextSibling
    hideEl.style.height = '0'
    hideEl.style.padding = '0'
    hideEl2.style.display = 'none'
  },10)
});

// CONCATENATED MODULE: ./src/methods/swalConfirm.js
/**
 * created 2020.07.03
 * @author Ricky <zhangqingcq@foxmail.com>
 */



/* harmony default export */ var swalConfirm = (function (title, content, icon, onOk) {
  swal({
    title: title || '提示',
    content: content || '确定执行该操作？',
    icon: icon || 'warning',
    buttons: ['取消']
  })
    .then(r => {
      if (r) {
        onOk()
      }
    })
});
// CONCATENATED MODULE: ./src/index.js




















/*直接使用的组件（注册为全局Vue组件）*/
const components = {
  HelloR: hello,
  btTablePage: btTablePage,
  wellCard: wellCard,
  tableTree: tableTree,
  uploadGroup: uploadGroup,
  tableSetting: tableSetting,
  inputMap: inputMap,
  tableIconBtn: tableIconBtn,
  iconTxtBtn: iconTxtBtn,
  showHidePanel: showHidePanel,
  selectInput: selectInput,
  orgCascader: orgCascader,
}

/*需要从插件中单独引入的方法（使用频率低）*/
const plugMethods = {
  fullScreenImgPreview: fullScreenImgPreview,
  toHump: toHump,
  toLine: toLine,
  htmlEncode: htmlEncode,
  htmlDecode: htmlDecode,
  getFileSrc: getFileSrc,
  getFileTypeByName: getFileTypeByName,
  isImgByFile: isImgByFile,
  getFileTypeIconByName: getFileTypeIconByName,
  downloadFileReaderFile: downloadFileReaderFile,
  fakeALinkClick: fakeALinkClick,
  findPath: findPath,
  getStringWidth: getStringWidth
}

/*挂在Vue原型对象上的方法*/
const methodsR = {
  messageBox: messageBox,
  myTypeof: myTypeof,
  $fetch: fetch,
  trimObj: trimObj,
  clearObj: clearObj,
  formDataHeadConfig: formDataHeadConfig,
  toFormData: toFormData,
  oneOf: oneOf,
  fullScreenImgByDom: fullScreenImgByDom,
  isValidValue: isValidValue,
  isNumberValue: isNumberValue,
  isEmptyValue: isEmptyValue,
  tooltipManual: tooltipManual,
  stringLength: stringLength,
  decimalDigitsLimit: decimalDigitsLimit,
  downloadFileByFormSubmit: downloadFileByFormSubmit,
  $swalConfirm: swalConfirm,
  setValByOption: setValByOption
}

/*挂在window对象上的方法*/
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
  
  console.log()
  
  if (Vue.directive('has') === undefined) {
    /**权限指令**/
    Vue.directive("has", {
      bind: function (el, binding) {
        if (binding.value && (!Vue.prototype.$_has(binding.value))) {
          el.style.display = 'none'
        }
      }
    })
    
    /*权限检查方法*/
    Vue.prototype.$_has = function (value) {
      let isExist = false
      let btnPermissions = sessionStorage.getItem("btnPermissions")
      if (btnPermissions === undefined || btnPermissions === null) {
        return false
      }
      let buttonPerms = btnPermissions.split(',')
      if (buttonPerms.indexOf(value) > -1) {
        isExist = true
      }
      return isExist
    }
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
  fetch.init(fetchConfig)
}

/* harmony default export */ var src_0 = ({
  version: Object({"NODE_ENV":"production","BASE_URL":""}).VERSION,
  install,
  init, ...components, ...methodsR, ...windowMethods, ...plugMethods
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=plugRQw.umd.js.map