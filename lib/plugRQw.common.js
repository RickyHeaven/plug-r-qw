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

/***/ "2364":
/***/ (function(module, exports) {

module.exports = require("vue-json-viewer");

/***/ }),

/***/ "50ad":
/***/ (function(module, exports) {

module.exports = require("iview-area");

/***/ }),

/***/ "5aeb":
/***/ (function(module, exports) {

module.exports = require("vue-amap");

/***/ }),

/***/ "60bb":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8eed":
/***/ (function(module, exports) {

module.exports = require("wangeditor");

/***/ }),

/***/ "c32d":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "efde":
/***/ (function(module, exports) {

module.exports = require("xss");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __webpack_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/hello.vue?vue&type=template&id=6eb84a75&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/btTablePage/btTablePage.vue?vue&type=template&id=ab4eb6cc&
var btTablePagevue_type_template_id_ab4eb6cc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btTablePage fullHeight"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showTopRow),expression:"showTopRow"}],staticClass:"topBtn"},[_vm._t("tableSetting"),_vm._t("topMsg"),_vm._t("topBtnGroup")],2),_c('div',{staticClass:"tableContainer fullHeight",class:{noTop: !_vm.showTopRow,noPage: _vm.noPage}},[_c('div',{staticClass:"fullHeight relativeBox"},[_c('div',{ref:"tableContainerLOI",staticClass:"fullFlowContent"},[_c('Table',_vm._g(_vm._b({ref:"TableXXX",class:{noBorderTable:_vm.noBorderTable,fullHeightTable:!_vm.fixedTable,lightHeadO:_vm.lightHead},attrs:{"height":_vm.fixedTable&&_vm.tableContainerHeight||null,"columns":_vm.columnsT,"data":_vm.dataT,"highlight-row":_vm.radio||_vm.highlightRow},on:{"on-select":_vm.onSelect,"on-select-all":_vm.onSelectAll,"on-select-cancel":_vm.onSelectCancel,"on-select-all-cancel":_vm.onSelectAllCancel,"on-sort-change":_vm.onSortChange,"on-row-click":_vm.onRowClick}},'Table',_vm.$attrs,false),_vm.$listeners))],1)])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.noPage),expression:"!noPage"}],staticClass:"pageContainer"},[_c('Page',{attrs:{"page-size-opts":_vm.pageSizes,"total":_vm.total,"current":_vm.current,"page-size":_vm.pageSizeT,"show-sizer":"","show-total":"","size":"small"},on:{"update:current":function($event){_vm.current=$event},"on-change":_vm.changePage,"on-page-size-change":_vm.pageSizeChange}})],1)])}
var btTablePagevue_type_template_id_ab4eb6cc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/btTablePage/btTablePage.vue?vue&type=template&id=ab4eb6cc&

// EXTERNAL MODULE: external {"root":"_","commonjs":"lodash","commonjs2":"lodash","amd":"lodash"}
var external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_ = __webpack_require__("60bb");
var external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default = /*#__PURE__*/__webpack_require__.n(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_);

// EXTERNAL MODULE: external {"root":"swal","commonjs":"sweetalert","commonjs2":"sweetalert","amd":"sweetalert"}
var external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_ = __webpack_require__("1e60");
var external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_);

// CONCATENATED MODULE: ./src/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  r: {
    locale: 'zh-CN',
    testMsg: '测试国际化',
    confirm: '确定',
    cancel: '取消',
    clear: '清空',
    info: {
      title: '提示',
      text: '确定执行该操作？'
    },
    http: {
      403: '登录状态失效,请重新登录！',
      409: '该账号已在其他地方登录,点击确定退出。'
    },
    pSelect: '请选择',
    pInput: '请输入',
    selectDate: '选择日期',
    search: '搜索',
    level: {
      1: '一级',
      2: '二级',
      3: '三级'
    },
    unknown: '未知',
    title: '标题',
    required: '该项为必填',
    back: '返回',
    button: '按钮',
    check: '查询',
    adSearch: '高级查询',
    all: '全选',
    tabSetting: ' 列表显示设置',
    delete: '删除',
    fView: '全屏预览',
    download: '点击下载',
    file: '文件',
    selectFile: '选择文件',
    notImg: '文件不是图片，不可预览',
    wrongFileType: '文件类型不被允许',
    supportType: '支持类型：',
    none: '无',
    fileIsBig: '文件过大',
    supportSize: '支持最大：',
    uploadError: '上传出错',
    uploadFail: '上传失败',
    closePreview: '关闭预览',
    fullImg: '全屏图片',
    preview: '预览',
    searchFor: '当前搜索：',
    noMore: '没有更多数据了',
    optionLabel: '选项',
    getDataError: '拉取数据出错'
  }
});
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__("8bbf");
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./node_modules/deepmerge/dist/es.js
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ var es = (deepmerge_1);

// CONCATENATED MODULE: ./src/locale/format.js
/**
 * t('XXX',...arg)
 *  去掉XXX中双花括号，或替换%{XXX}为arg[XXX]，arg为t('XXX',...arg)中arg
 *  如果XXX没有花括号，则返回XXX本身
 */

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/* harmony default export */ var locale_format = (function (string, ...args) {
  if (args.length === 1 && typeof args[0] === 'object') {
    args = args[0]
  }
  
  if (!args || !args.hasOwnProperty) {
    args = {}
  }
  
  return string.replace(RE_NARGS, (match, prefix, i, index) => {
    let result
    
    if (string[index - 1] === '{' && string[index + match.length] === '}') {
      return i
    }
    else {
      result = hasOwn(args, i) ? args[i] : null
      if (result === null || result === undefined) {
        return ''
      }
      
      return result
    }
  })
});

// CONCATENATED MODULE: ./src/locale/index.js





let lang = zh_CN
let merged = false
let i18nHandler = function () {
  //如果vue原型上有$t方法，用该方法进行国际化翻译
  const vuei18n = Object.getPrototypeOf(this || external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a).$t
  if (typeof vuei18n === 'function' && !!external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.locale) {
    if (!merged) {
      merged = true
      external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.locale(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang, es(lang, external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.locale(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.config.lang) || {}, {clone: true}))
    }
    return vuei18n.apply(this, arguments)
  }
}

const locale_t = function (path, options) {
  let value = i18nHandler.apply(this, arguments)
  if (value !== null && value !== undefined) {
    return value
  }
  //如果没有找到国际化翻译实例，则启用以下逻辑翻译
  const array = path.split('.')
  let current = lang
  
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property]
    if (i === j - 1) {
      return locale_format(value, options)
    }
    if (!value) {
      return ''
    }
    current = value
  }
  return ''
}

const use = function (l) {
  lang = l || lang
}

const i18n = function (fn) {
  i18nHandler = fn || i18nHandler
}

/* harmony default export */ var locale = ({
  use,
  t: locale_t,
  i18n
});
// CONCATENATED MODULE: ./src/methods/swal.js
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
  const T = (...arg) => locale_t.apply(this, arg)
  
  return new Promise((r, j) => {
    switch (myTypeof(option)) {
      case 'Object':
        let okTxt = T('r.confirm')
        let cancelTxt = T('r.cancel')
        let cancelVisible = false
        let okClass = "swalConfirmBt"
        let cancelClass = "swalCancelBt"
        const reg = /^HTML.*Element$/
        option.type && (option.icon = option.type) && (delete option.type)
        option.className = option.className || 'swalBoxX'
        if (option.text && reg.test(myTypeof(option.text))) {
          option.content = option.text
          delete option.text
        }
        if (option.content && myTypeof(option.content) === 'String') {
          option.text = option.content
          delete option.content
        }
        if (option.button !== false) {
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
            if (res && myTypeof(option.onOk) === 'Function') {
              option.onOk()
            }
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
              text: T('r.confirm'),
              value: true,
              visible: true,
              className: "swalConfirmBt",
              closeModal: true
            }
          },
          className: 'swalBoxX'
        }
        if (text) {
          switch (myTypeof(text)) {
            case 'String':
              tempOption.text = text
              break
            case 'HTMLElement':
              tempOption.content = text
              break
          }
        }
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
      default:
        throw new TypeError('swal第一个参数类型有误，仅支持Object/String/false')
    }
  })
});

// CONCATENATED MODULE: ./src/methods/functionGroup.js



//判断变量类型
function myTypeof(v) {
  let str = Object.prototype.toString.call(v)
  return str.replace(/\[object |]/g, "")
}

// 下划线转换驼峰
function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}

// 驼峰转换下划线
function toLine(name) {
  return name.replace(/([A-Z])/g, "_$1")
    .toLowerCase()
}

/**
 * 去掉对象属性前后空格
 */
function trimObj(obj) {
  if (myTypeof(obj) === 'Object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (myTypeof(obj[key]) === "String") {
          obj[key] = obj[key].replace(/^\s+|\s+$/mg, '')
        }
        else if (myTypeof(obj[key]) === "Object") {
          trimObj(obj[key])
        }
      }
    }
  }
  return obj
}

// 清空集合
function clearObj(val, ignoreList = []) {
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
  let temp = document.createElement("div")
  //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
  temp.textContent !== undefined ? (temp.textContent = html) : (temp.innerText = html)
  //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
  let output = temp.innerHTML
  temp = null
  return output
}

/*用浏览器内部转换器实现html解码*/
function htmlDecode(text) {
  //1.首先动态创建一个容器标签元素，如DIV
  let temp = document.createElement("div")
  //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
  temp.innerHTML = text
  //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
  let output = temp.innerText || temp.textContent
  temp = null
  return output
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
    type = 'ios-image'
  }
  else if ([
    'mp4',
    'm3u8',
    'rmvb',
    'avi',
    'swf',
    '3gp',
    'mkv',
    'flv'
  ].indexOf(format) > -1) {
    type = 'ios-film'
  }
  else if ([
    'mp3',
    'wav',
    'wma',
    'ogg',
    'aac',
    'flac'
  ].indexOf(format) > -1) {
    type = 'ios-musical-notes'
  }
  else if ([
    'doc',
    'txt',
    'docx',
    'pages',
    'epub',
    'pdf'
  ].indexOf(format) > -1) {
    type = 'md-document'
  }
  else if ([
    'numbers',
    'csv',
    'xls',
    'xlsx'
  ].indexOf(format) > -1) {
    type = 'ios-stats'
  }
  else if ([
    'keynote',
    'ppt',
    'pptx'
  ].indexOf(format) > -1) {
    type = 'ios-videocam'
  }
  
  return type
}

/*下载一个文件（替换容易被浏览器屏蔽的window.open方法）*/
function downloadFileReaderFile(name, href) {
  let saveLink = document.createElement("a")
  saveLink.href = href
  saveLink.download = name
  fakeALinkClick(saveLink)
}

/*模拟被点击（比如模拟用户点击链接下载东西）*/
function fakeALinkClick(obj) {
  let ev = document.createEvent("MouseEvents")
  ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  obj.dispatchEvent(ev)
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
 * 按条件查找一个元素在集合中的位置（路径），返回找到的第一个符合条件的位置
 * 仅适用于[{children:[{...},...],...},...]类似树结构集合（最外层也可以是一个对象）或一维数组
 * @param {Array/Object} group - 集合，被查找的集合，必填
 * @param {Function/String/Number/Boolean} condition - 查找条件，为常量时，将常量和集合元素直接对比，必填
 * @param {String} pathKey - 查找结果（路径）元素在集合中的key，在集合为数组时，可以不填，返回index（索引）
 * @param {String} childKey - 集合子元素的key，默认值'children'
 * @param {Array} path - 递归用参数，逻辑内部参数，不用传
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
        let item = group
        let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(path)
        if (condition(item)) {
          if (pathKey && item[pathKey]) {
            temp.push(item[pathKey])
          }
          return temp
        }
        else if (item[childKey] && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(item[childKey]))) {
          if (pathKey && item[pathKey]) {
            temp.push(item[pathKey])
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
    else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(group)) {
      //条件为常量，集合为数组，这种情况只会有一种业务场景：在一维数组中查找某个常量在数组中第一次出现的index
      for (let item of group) {
        let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(path)
        if (item === condition) {
          temp.push(group.indexOf(item))
          return temp
        }
      }
    }
  }
  return []
}

/**
 * 在目标集合中按条件查找或直接查找，返回第一个满足条件的元素或路径
 * 与findPath不同，这里的路径是完整路径（findPath省略了一些标准结构中间路径），找不到返回：false
 * @param {Array/Object} group 被查找的集合
 * @param {Function/String/Number/Boolean} condition 查找的条件或值
 * @param {Boolean} getPath 是否返回路径，默认为：false，返回找到的元素
 * @returns {*}
 */
function findCollection(group, condition, getPath) {
  if (!group || !condition) {
    return false
  }
  let PATH
  let target = 'notFoundC'
  let deepSearch = function (group, condition) {
    if (myTypeof(group) === 'Array') {
      if (myTypeof(condition) === 'Function' && condition(group)) {
        target = group
        return []
      }
      for (let e of group) {
        if (target !== 'notFoundC') {
          break
        }
        if (myTypeof(condition) === 'Function' && condition(e) || e === condition) {
          target = e
          return [group.indexOf(e)]
        }
        else if (myTypeof(e) === 'Array' || myTypeof(e) === 'Object') {
          let r = deepSearch(e, condition)
          if (r !== undefined) {
            return [
              group.indexOf(e),
              ...r
            ]
          }
        }
      }
    }
    else if (myTypeof(group) === 'Object') {
      if (myTypeof(condition) === 'Function' && condition(group)) {
        target = group
        return []
      }
      for (let key in group) {
        if (target !== 'notFoundC') {
          break
        }
        if (group.hasOwnProperty(key)) {
          if (myTypeof(condition) === 'Function' && condition(key) || group[key] === condition) {
            target = group[key]
            return [key]
          }
          else if (myTypeof(group[key]) === 'Object' || myTypeof(group[key]) === 'Array') {
            let r = deepSearch(group[key], condition)
            if (r !== undefined) {
              return [
                key,
                ...r
              ]
            }
          }
        }
      }
    }
  }
  PATH = deepSearch(group, condition)
  if (getPath) {
    return PATH || false
  }
  return target === 'notFoundC' ? false : target
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
  return val
}

/*文件导出，调用后端接口以form表单提交数据下载文件*/
function downloadFileByFormSubmit(url, data = {}, method = 'get') {
  let form = document.createElement('form')
  let body = document.getElementsByTagName("body")[0]
  body.appendChild(form)
  form.setAttribute('style', 'display:none')
  form.setAttribute('target', '')
  form.setAttribute('method', method)
  let _url = url
  if (window && window.g) {
    /*所有特定缩写字母开头的地址，都会被改变加上config.js（public里的全局配置文件，在index.html引入，在打包后通过更改该文件用于不
     同环境的部署）里配置的地址变成绝对地址，如:
     config.js里配置了 window.g={mgrURL:'http://mgr.myweb.com'}
     请求地址 ‘/mgr/file’ 会被改变为 'http://mgr.myweb.com/file'
     */
    let httpEnv = Object.keys(window.g).filter(e => e.indexOf('URL') > -1).map(e => e.replace('URL', ''))
    
    for (let item of httpEnv) {
      let regExp = new RegExp('^\/' + item + '(?=\/.*$)', 'i')
      if (regExp.test(url) && window.g[item + 'URL']) {
        _url = window.g[item + 'URL'] + url.replace(regExp, '')
        break
      }
    }
  }
  form.setAttribute('action', _url)
  
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
    
    let ta = setTimeout(() => {
      body.removeChild(form)
      clearTimeout(ta)
      ta = null
    }, 8000)
  }
  else {
    console.error('请求数据格式有误，无法下载文件')
  }
}

/**
 * 文件导出功能（调用文件下载方法downloadFileByFormSubmit）
 * @param url 导出路径
 * @param data 参数
 * @param method 请求方式
 */
function fileExport(url, data = {}, method = 'get') {
  if (data.hasOwnProperty("columns") &&
    (data["columns"] === '' || data["columns"] === null || data["columns"] === undefined)) {
    swal.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    })
    return
  }
  downloadFileByFormSubmit(url, data, method)
}

/**
 * 依据列显示设置缓存获取columns的key的集合
 * @param {String} sKey - 列显示设置插件的sKey
 * @param {Array} columns - 表格table的columns
 * @param {Boolean} returnArray - 是否返回数组，默认值false,返回String
 * */
function getColumnsKeys(sKey, columns, returnArray = false) {
  let temp
  if (sKey && myTypeof(columns) === 'Array') {
    let names = localStorage.getItem(sKey)
    if (names) {
      names = JSON.parse(decodeURI(names))
      temp = columns.filter(e => e.key && names.indexOf(e.title) !== -1).map(e => e.key)
    }
    else {
      temp = columns.map(e => e.key)
    }
  }
  else {
    temp = []
  }
  if (!returnArray) {
    temp = String(temp)
  }
  return temp
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
        if(isValidValue(params.row[item])){
          temp.push(params.row[item])
        }
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
          maxWidth: tdWidth * 2
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
  return 0
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
  return !isValidValue(data)
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
  return 0
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

/**
 * 是否有该权限，用于权限管理
 * @param {String} value 权限代码
 * @returns {boolean}
 */
function hasPermission(value) {
  let btnPermissions = sessionStorage.getItem("btnPermissions")
  if (btnPermissions) {
    return btnPermissions.indexOf(value) > -1
  }
  return false
}

/**
 * 如果值为''则将其替换为null
 * @param val 被替换的值
 * @returns {*}
 */

function emptyInput(val) {
  if (val === '') {
    return null
  }
  else {
    return val
  }
}

/**
 * 判断一个变量是否是NaN
 * @param v 变量
 * @returns {boolean}
 */
function functionGroup_isNaN(v) {
  return myTypeof(v) === 'Number' && String(v) === 'NaN'
}

/**
 *过滤对象属性或者将对象转换成url的query字符串
 * @param {Object} data 需要处理的对象
 * @param {Boolean} toUrl 是否需要转换成url，为false时可以不传
 * @param {Boolean} keepEmptyVal 是否保留空值（用于接口置空某个字段），为false时可以不传
 * @returns {*}
 * 注意：当toUrl=false且keepEmptyVal=true时，两个参数都传比较好
 */

function dataFilterOrToUrl(data, toUrl, keepEmptyVal) {
  if (myTypeof(data) !== 'Object') {
    return data
  }
  let _data = Object.assign(data, {})
  let url = ""
  for (let key in _data) {
    if (_data.hasOwnProperty(key)) {
      let val = _data[key]
      if (val === undefined || val === "" || (myTypeof(val) === 'String' && val.trim() === '') || val === null ||
        functionGroup_isNaN(val)) {
        if (keepEmptyVal) {
          if (toUrl) {
            url += key + "=&"
          }
          else {
            _data[key] = ""
          }
        }
        else {
          delete _data[key]
        }
      }
      else if (toUrl) {
        url += key + '=' + val + "&"
      }
    }
  }
  if (toUrl) {
    if (url.length > 0) {
      return url.substr(0, url.length - 1)
    }
    return ''
  }
  return _data
}

//阻止冒泡
function stopBubbling(e) {
  e = e || window.Event;
  if (e.stopPropagation) { 	//W3C阻止冒泡方法
    e.stopPropagation();
  }
  else {
    e.cancelBubble = true; 	//IE阻止冒泡方法
  }
}

/*过滤对象或数组中无效值*/
function removeEmptyValue(data) {
  let temp
  if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(data)) {
    temp = []
    for (let item of data) {
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(item) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(item)) {
        temp.push(removeEmptyValue(item))
      }
      else if (isValidValue(item)) {
        temp.push(item)
      }
    }
  }
  else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(data)) {
    temp = {}
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(data[key] || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(data[key]))) {
          temp[key] = removeEmptyValue(data[key])
        }
        else if (isValidValue(data[key])) {
          temp[key] = data[key]
        }
      }
    }
  }
  return temp
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
  const T = (...arg) => locale_t.apply(this, arg)
  
  let heightTemp = height && Number(height) - 90 > 100 ? Number(height) - 90 + 'px' : 0
  let heightT = heightTemp || '100px'
  content = content || T('r.info.text')
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
            h('span', title || T('r.info.title')),
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
              h('i', {
                class: 'ivu-icon ivu-icon-ios-close',
                style: {
                  fontSize: '30px'
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
            h('i', {
              class: stringContent && (noWarnIcon !== true) ? 'ivu-icon ivu-icon-ios-alert-outline' : 'hide',
              style: {
                fontSize: '60px',
                color: '#f8bb86'
              }
            }),
            h('div', {class: 'msgBoxConO'}, content)
          ]),
          h('div', {
            class: 'footerN',
            style: {
              textAlign: footerAlign || 'center'
            }
          }, [
            h('Button', {
              class: 'okBtN',
              on: {
                click(e) {
                  if (myTypeof(onOk) === 'Function') {
                    if (onOkPromise) {
                      let el = e && (e.currentTarget || e.target)
                      if (el) {
                        el.setAttribute('class', el.className + ' ivu-btn-loading')
                        el.nextSibling.setAttribute('disabled', ' disabled')
                      }
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
            }, [
              h('i', {
                class: 'ivu-load-loop ivu-icon ivu-icon-ios-loading'
              }),
              h('span', okText || T('r.confirm'))
            ]),
            h('Button', {
              class: [
                'cancelBtN',
                cancelBt === false && 'hide'
              ],
              on: {
                click() {
                  external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
                }
              }
            }, cancelText || T('r.cancel'))
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

function notInitYet() {
  console.info('store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})')
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
      content: locale_t('r.http.403'),
      onOk: logoutHandle
    })
  }
  else if (res && res.data && res.data.code === 409) {
    messageBox({
      content: locale_t('r.http.409'),
      onOk: logoutHandle
    })
  }
  return res
}, err => {
  if (err.response) {
    if (err.response.status === 403) {
      messageBox({
        content: locale_t('r.http.403'),
        onOk: logoutHandle
      })
    }
    else if (err.response.status === 409) {
      messageBox({
        content: locale_t('r.http.409'),
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
      if (window && window.g) {
        /*所有特定缩写字母开头的地址，都会被改变加上config.js（public里的全局配置文件，在index.html引入，在打包后通过更改该文件用于不
         同环境的部署）里配置的地址变成绝对地址，如:
         config.js里配置了 window.g={mgrURL:'http://mgr.myweb.com'}
         请求地址 ‘/mgr/file’ 会被改变为 'http://mgr.myweb.com/file'
         */
        let httpEnv = Object.keys(window.g).filter(e => e.indexOf('URL') > -1).map(e => e.replace('URL', ''))
        
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
 * @param isUrlData delete方法传参模式 true:params,false:data
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
  init(store) {
    service.store = store
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

// CONCATENATED MODULE: ./src/methods/timer.js
let timeoutBox = []
let intervalBox = []

const init = function (r) {
  if (r && r.beforeEach) {
    r.beforeEach((to, from, next) => {
      timeoutBox.map(e => {
        window.clearTimeout(e)
      })
      intervalBox.map(e => {
        window.clearInterval(e)
      })
      timeoutBox.length = 0
      intervalBox.length = 0
      next()
    })
  }
  else {
    console.warn('安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})')
  }
}

const timer_setTimeout = function (fn, time) {
  let handler = window.setTimeout(fn, time)
  timeoutBox.push(handler)
  return handler
}

const timer_setInterval = function (fn, time) {
  let handler = window.setInterval(fn, time)
  intervalBox.push(handler)
  return handler
}

/* harmony default export */ var timer = ({
  init,
  setTimeout: timer_setTimeout,
  setInterval: timer_setInterval
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
//
//






/* harmony default export */ var btTablePagevue_type_script_lang_js_ = ({
  name: "btTablePage",
  props: {
    url: {
      /*表格拉取数据的接口地址*/
      type: String,
      default: ''
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
      default: false
    },
    selectionFixed: {
      /*每列开头选择框固定*/
      validator: val => oneOf(val, [
        'left',
        'right',
        false
      ]),
      default: false
    },
    rowClickSelect: {
      /*是否点击行操作开头选择框*/
      type: Boolean,
      default: true
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
      default: 10
    },
    sortable: {
      /*排序模式*/
      validator: val => oneOf(val, [
        'custom',
        ''
      ]),
      default: ''
    },
    initData: {
      /*初始化数据，即组件创建后自动拉取第一次数据*/
      type: Boolean,
      default: true
    },
    highlightRow: {
      /*高亮当前行*/
      type: Boolean,
      default: false
    },
    rowClickNum: {
      /*自动拉取第一次数据时点击第几行，默认-1，不点击*/
      type: Number,
      default: -1
    },
    radio: {
      /*表格是否是单选表格，每次只能选中一行*/
      type: Boolean,
      default: false
    },
    tableEmptyTdHandle: {
      /*表格内容为空是否显示为‘--’*/
      type: Boolean,
      default: false
    },
    noBorderTable: {
      /*表格无边框*/
      type: Boolean,
      default: false
    },
    noPage: {
      /*表格页签*/
      type: Boolean,
      default: false
    },
    orderDefault: {
      /*排序是升是降*/
      type: String,
      default: "desc"
    },
    orderKey: {
      /*排序的key*/
      type: String,
      default: "id"
    },
    getDataLoading: {
      /*拉取表格数据时显示遮罩层*/
      type: Boolean,
      default: false
    },
    showTopRow: {
      /*展示顶行（列表设置、批量操作按钮、导出等按钮、统计信息等）,各项子内容通过slot接入*/
      type: Boolean,
      default: false
    },
    lightHead: {
      /*浅色背景表头，避免和headerBar菜单紧邻时页面局部颜色不平衡*/
      type: Boolean,
      default: false
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
      temp[this.order] = toLine(this.key)
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
        this.searchDataT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(after)
        this.current = 1
        this.getDataAndClickRow()
      },
      deep: true
    }
  },
  methods: {
    firstGetHeight() {
      if (this.tableContainerHeight < 50) {
        timer_setTimeout(this.firstGetHeight, 100)
      }
      else {
        timer_setTimeout(this.getTableContainerHeight, 10)
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
      timer_setTimeout(() => {
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
          timer_setTimeout(() => {
            this.$refs.TableXXX.clickCurrentRow(index)
          }, 10)
        }
      }
    },
    deleteRow(index) { /*根据索引数字删除行（公开）*/
      this.dataT.splice(index, 1)
      timer_setTimeout(() => {
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
              timer_setTimeout(() => {
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
    onSortChange({key, order}) {
      //表头排序
      if (order === 'normal') {
        /*恢复到默认页面排序*/
        this.key = this.orderKey
        this.order = this.orderDefault
      }
      else {
        this.key = key
        this.order = order
      }
      this.current = 1
      this.getTableData()
    },
    clearPage() {
      this.selected = []
      this.selectedIds = []
      this.currentRowId = null
      this.currentRowIndex = null
    },
    clearTable() {
      this.dataT = []
      this.total = 0
      this.current = 1
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
              if (r.data) {
                if (r.data.records || r.data.records === null) {
                  this.dataT = r.data.records || []
                }
                else if (r.data.page) {
                  if (r.data.page.records || r.data.page.records === null) {
                    this.dataT = r.data.page.records || []
                  }
                }
                else {
                  this.dataT = r.data
                }
                this.total = r.data.page && r.data.page.total || r.data.total || r.total || 0
                if (this.total === 0 && this.current > 1 && this.dataT && this.dataT.length === 0) {
                  /*如果没有数据，将当前页置为1*/
                  this.current = 1
                }
                else if (this.current > 1 && this.total <= (this.current - 1) * this.pageSizeT) {
                  /*当前页并没有数据，自动拉取前一页数据*/
                  this.current--
                  this.$nextTick(function () {
                    this.getTableData(order, orderKey)
                  })
                }
                this.$emit('on-data-change', r)
                resolve(r)
              }
              else {
                console.warn('请求返回数据有误，无法使用')
                this.clearTable()
                this.$emit('on-data-change', r)
              }
            })
            .catch(e => {
              console.warn(e)
              this.clearPage()
              this.clearTable()
              this.$emit('on-data-change', e)
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
  btTablePagevue_type_template_id_ab4eb6cc_render,
  btTablePagevue_type_template_id_ab4eb6cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var btTablePage = (btTablePage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wellCard/wellCard.vue?vue&type=template&id=1f1123df&
var wellCardvue_type_template_id_1f1123df_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexColumnBox wellCardR",style:(_vm.wellStyle)},[_c('div',{staticClass:"panelHeader notGrow"},[_c('div',{staticClass:"fl",staticStyle:{"font-weight":"bold"}},[_vm._v(_vm._s(_vm.title||_vm.t('r.title')))]),_c('div',{staticClass:"btsF"},[_vm._t("bts")],2)]),_c('div',{staticClass:"growFlexItem relativeBox"},[_c('div',{staticClass:"fullFlowContent"},[_vm._t("default")],2)])])}
var wellCardvue_type_template_id_1f1123df_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/wellCard/wellCard.vue?vue&type=template&id=1f1123df&

// CONCATENATED MODULE: ./src/mixins/locale.js


/* harmony default export */ var mixins_locale = ({
    methods: {
        t(...args) {
            return locale_t.apply(this, args)
        }
    }
});

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
//
//




/* harmony default export */ var wellCardvue_type_script_lang_js_ = ({
  name: "wellCard",
  mixins: [mixins_locale],
  props: {
    title: {
      type: String
    },
    width: {
      type: [
        Number,
        String
      ],
      default: '100%'
    },
    height: {
      type: [
        Number,
        String
      ],
      default: '100%'
    }
  },
  computed: {
    wellStyle() {
      let temp = {}
      let attrArr = [
        'width',
        'height'
      ]
      for (let e of attrArr) {
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
  wellCardvue_type_template_id_1f1123df_render,
  wellCardvue_type_template_id_1f1123df_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var wellCard = (wellCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableTree/tableTree.vue?vue&type=template&id=27e038c8&
var tableTreevue_type_template_id_27e038c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Table',{key:_vm.updateDomKey,ref:"tabXY",class:{tableTreeKM:true,lightHeadO:_vm.lightHead},attrs:{"columns":_vm.columnsX,"data":_vm.dataX,"highlight-row":_vm.highlightRow}})}
var tableTreevue_type_template_id_27e038c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tableTree/tableTree.vue?vue&type=template&id=27e038c8&

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
      default: false
    },
    radio: {
      /*表格是否是单选表格，每次只能选中一行*/
      type: Boolean,
      default: false
    },
    lightHead: {
      /*浅色背景表头，避免和headerBar菜单紧邻时页面局部颜色不平衡*/
      type: Boolean,
      default: false
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
                  e.preventDefault()
                }
              }
            }),
            h("Icon", {
              props: {
                type: params.row._hideChild ? 'ios-arrow-forward' :
                  (params.row._hideChild === false ? 'ios-arrow-down' : '')
              },
              style: {
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  this.showHideClick(params.index)
                }
              }
            }),
            h('span', {
              style: {
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  this.showHideClick(params.index)
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
      this.dataX = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp)
      this.showDefault()
    },
    showDefault() {
      for (let i = 0, l = this.dataX.length; i < l; i++) {
        let e = this.dataX[i]
        if (e.hideChild === false && e._hideChild === true) {
          this.showHideClick(i)
          break
        }
      }
    },
    showHideClick(i) {
      if (this.dataX[i]._hideChild) {//收起状态下，打开
        this.dataX[i]._hideChild = false
        let child_ = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.dataX[i].childrenXK)
        this.dataX.splice(i + 1, 0, ...child_)//向当前行下面插入直接子节点
        this.showDefault()
      }
      else if (this.dataX[i]._hideChild === false) {//打开状态，收起
        this.hideChildNode(i)
      }
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
          if (item._hideChild !== false) {
            item._hideChild = true
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
          if (item._hideChild !== false) {
            item._hideChild = true
          }
          this.addHideChildAttr(item.childrenXK, [
            item.ownKey,
            ...item.parentNoKey
          ])
        }
      }
    },
    hideChildNode(i) {//收起（从table移除）点击行在table中显示的所有子节点
      let count = this.getChildCount(this.dataX[i].ownKey)
      if (count) {
        this.dataX.splice(i + 1, count)//收起（从table中移除）点击行下所有显示在table中的子节点（子节点一定是跟在父节点后面的）
      }
      //更改收展状态
      setValByOption({
        group: [this.dataX[i]],
        condition: e => e._hideChild === false,
        key: '_hideChild',
        val: true,
        childKey: 'childrenXK'
      })
    },
    /**
     * 手动添加单个子节点
     * @param index [非负整数] 要添加子节点的节点的序列号，由上到下，从0开始，可用params.row._index
     * @param node [object] 新节点数据,格式相当于table的data的一个元素
     * @returns {Promise} 成功则返回添加的节点在组件中的数据，失败则返回失败原因
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
        if (parent._hideChild !== false) {
          parent._hideChild = false
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
                if (item._hideChild === undefined) {
                  item._hideChild = true
                }
                break
              }
              else {
                temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(temp.childrenXK, e => parenNoKeyT.indexOf(e.ownKey) !== -1)//找到下一层级（children）中的父辈数据节点，进行下一循环
                if (temp._hideChild === undefined) {
                  temp._hideChild = true
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
     * @returns {Promise} 成功则返回编辑后的节点在组件中的数据，失败则返回失败原因
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
     * @returns {Promise} 成功则返回删除后的整棵表格树数据，失败则返回失败原因
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
                    temp._hideChild = null
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
  tableTreevue_type_template_id_27e038c8_render,
  tableTreevue_type_template_id_27e038c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableTree = (tableTree_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/uploadGroup/uploadGroup.vue?vue&type=template&id=ac7d7dd2&
var uploadGroupvue_type_template_id_ac7d7dd2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Upload',{attrs:{"name":"files","action":_vm.urlT,"before-upload":_vm.handelManualUpload,"on-error":_vm.uploadError,"on-success":_vm.uploadSuccess,"on-exceeded-size":_vm.overSize,"on-preview":_vm.onPreview,"on-remove":_vm.onRemove,"on-format-error":_vm.onFormatError,"data":_vm.data,"max-size":_vm.maxSize,"show-upload-list":false,"with-credentials":_vm.withCredentials,"format":_vm.format,"multiple":_vm.multiple||false,"disabled":_vm.length > 0 && _vm.fileList.length >= _vm.length||Boolean(_vm.disabled)}},[_c('Button',{class:{disabledR:_vm.length > 0 && _vm.fileList.length >= _vm.length||Boolean(_vm.disabled)},attrs:{"icon":"ios-cloud-upload-outline"}},[_vm._v(_vm._s(_vm.t('r.selectFile')))])],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'img' && _vm.fileIdList.length>0),expression:"previewType === 'img' && fileIdList.length>0"}],staticClass:"previewBoxM"},_vm._l((_vm.fileIdList),function(item){return (!_vm.manualUpload && item !== null)?_c('div',{key:item,staticClass:"previewImg"},[_c('img',{attrs:{"src":_vm.url+'/'+item+'/download',"alt":item}}),_c('div',{staticClass:"deleteModal"},[_c('Icon',{staticClass:"previewExpand",attrs:{"type":"ios-expand","size":"40","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.fullScreenImgByDom(_vm.url+'/'+item+'/download')}}}),_c('Icon',{staticClass:"previewDelete",attrs:{"type":"ios-trash-outline","size":"40","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.deleteById($event,item)}}})],1)]):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'localImg' && _vm.fileSrcList.length>0),expression:"previewType === 'localImg' && fileSrcList.length>0"}],staticClass:"previewBoxM"},_vm._l((_vm.fileSrcList),function(item,index){return (_vm.manualUpload && item !== null)?_c('div',{key:'manualImg'+index,staticClass:"previewImg"},[_c('img',{attrs:{"src":item,"alt":'manualImg'+index}}),_c('div',{staticClass:"deleteModal"},[_c('Icon',{staticClass:"previewExpand",attrs:{"type":"ios-expand","size":"40","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.fullScreenImgByDom(item)}}}),_c('Icon',{staticClass:"previewDelete",attrs:{"type":"ios-trash-outline","size":"40","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)]):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'localList'&& _vm.fileList.length>0),expression:"previewType === 'localList'&& fileList.length>0"}],staticClass:"customFileListM"},_vm._l((_vm.fileList),function(item,index){return (_vm.manualUpload && item !== null)?_c('p',{key:'manualItem'+index,staticClass:"customFileListItem"},[_c('Icon',{attrs:{"type":_vm.getFileTypeIconByName(item.name)}}),_c('span',{staticClass:"upNameT",attrs:{"title":_vm.t('r.download')},on:{"click":function($event){return _vm.downloadManualFile(item)}}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"btBoxJ"},[_c('Icon',{staticClass:"listBtH",attrs:{"type":"md-qr-scanner","size":"14","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.listExpand(item)}}}),_c('Icon',{staticClass:"listBtH",attrs:{"type":"ios-close","size":"22","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)],1):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'list' && _vm.fileDefaultList.length>0),expression:"previewType === 'list' && fileDefaultList.length>0"}],staticClass:"customFileListM"},_vm._l((_vm.fileDefaultList),function(item,index){return (!_vm.manualUpload && item !== null)?_c('p',{key:'defaultItem'+index,staticClass:"customFileListItem"},[_c('Icon',{attrs:{"type":_vm.getFileTypeIconByName(item.name)}}),_c('span',{staticClass:"upNameT",attrs:{"title":_vm.t('r.download')},on:{"click":function($event){return _vm.downloadDefaultFile(item)}}},[_vm._v(_vm._s(item.name||_vm.t('r.file')+(index+1)))]),_c('span',{staticClass:"btBoxJ"},[_c('Icon',{staticClass:"listBtH",attrs:{"type":"md-qr-scanner","size":"14","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.listExpand(item)}}}),_c('Icon',{staticClass:"listBtH",attrs:{"type":"ios-close","size":"22","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)],1):_vm._e()}),0)],1)}
var uploadGroupvue_type_template_id_ac7d7dd2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/uploadGroup/uploadGroup.vue?vue&type=template&id=ac7d7dd2&

// CONCATENATED MODULE: ./src/methods/fullScreenImgByDom.js
/** created at 2020.05.08
 *@author ricky email:zhangqingcq@foxmail.com
 * @param {String}src - img src
 */




function fullScreenImgByDom(src) {
  const T = (...arg) => locale_t.apply(this, arg)
  
  const close = T('r.closePreview')
  const fullImg = T('r.fullImg')
  let bodyEl = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.first(document.getElementsByTagName('body'))
  let child = document.createElement('div')
  child.setAttribute('class', 'fullScreenImgByDom')
  child.innerHTML =
    `<div class="previewInner"><img src="${src}" alt="${fullImg}" ><i class="ivu-icon ivu-icon-md-close" title="${close}" ></i></div>`
  child.querySelector(".ivu-icon-md-close").addEventListener('click', function () {
    let bb = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.first(document.getElementsByTagName('body'))
    if (bb) {
      bb.removeChild(child)
    }
  })
  bodyEl.appendChild(child)
}
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
  mixins: [mixins_locale],
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
      default: false
    },
    maxSize: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 0
    },
    showUploadList: {
      type: Boolean,
      default: true
    },
    withCredentials: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    format: {
      type: Array,
      default() {
        return []
      }
    },
    showImg: {
      type: Boolean,
      default: false
    },
    disabled: {
      /*禁用，仅展示*/
      type: Boolean,
      default: false
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
                      this.t('r.file') + _.indexOf(after, item)
                    itemT.mimeType =
                      r && r.data && r.data.returnValue && r.data.returnValue[0] && r.data.returnValue[0].mimeType ||
                      'unknown'
                    temp.push(itemT)
                  })
                  .catch(() => {
                    temp.push({name: this.t('r.file') + _.indexOf(after, item)})
                  })
              }
              else {
                temp.push({name: this.t('r.unknown')})
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
              swal(this.t('r.info.title'), this.t('r.notImg'), 'info')
            }
          })
      }
      else if (file && file.response && file.response.data && file.response.data[0] && file.response.data[0].id) {
        if (isImgByFile(file.mimeType)) {
          fullScreenImgByDom(this.url + '/' + file.response.data[0].id + '/download')
        }
        else {
          swal(this.t('r.info.title'), this.t('r.notImg'), 'info')
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
            swal(this.t('r.wrongFileType'),
              this.t('r.supportType') + (this.format.length > 0 && String(this.format) || this.t('r.none')),
              "warning")
            return false
          }
          if (this.maxSize && file.size > this.maxSize * 1024) {
            swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + "kb", "warning")
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
      swal(this.t('r.uploadError'), "", "error")
    },
    uploadSuccess(response, file, fileList) {
      if (response && response.code === 0) {
        let temp = this.fileList
        temp.push(file)
        this.fileList = temp
      }
      else {
        swal(this.t('r.uploadFail'), response && response.message || '', 'error')
      }
    },
    overSize(file, fileList) {
      swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + ' kb', "warning")
    },
    onFormatError(file, fileList) {
      swal(this.t('r.wrongFileType'),
        this.t('r.supportType') + (this.format.length > 0 && String(this.format) || this.t('r.none')), "warning")
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
      if (!this.disabled && this.fileIdList.indexOf(id) !== -1) {
        const fileIdList = this.fileIdList
        let temp = this.fileList
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
  uploadGroupvue_type_template_id_ac7d7dd2_render,
  uploadGroupvue_type_template_id_ac7d7dd2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uploadGroup = (uploadGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableSetting/tableSetting.vue?vue&type=template&id=9eccc53a&
var tableSettingvue_type_template_id_9eccc53a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabSetF"},[_c('div',{staticClass:"tabSetBt",on:{"click":_vm.labelClick}},[_c('Icon',{attrs:{"type":"md-settings","size":"17"}}),_c('span',[_vm._v(_vm._s(_vm.t('r.tabSetting')))])],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"tabSetCard",style:({top:_vm.top,right:_vm.right,width:_vm.width,backgroundColor:_vm.bg})},[_c('div',{staticClass:"topCheck"},[_c('Checkbox',{attrs:{"indeterminate":_vm.indeterminate,"value":_vm.checkAll},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleCheckAll($event)}}},[_vm._v(_vm._s(_vm.t('r.all')))]),_c('span',{staticStyle:{"cursor":"pointer","float":"right"},on:{"click":_vm.save}},[_vm._v(_vm._s(_vm.t('r.confirm')))])],1),_c('CheckboxGroup',{model:{value:(_vm.checkAllGroup),callback:function ($$v) {_vm.checkAllGroup=$$v},expression:"checkAllGroup"}},_vm._l((_vm.groupX),function(itemT,index){return _c('Checkbox',{key:'tabSet_'+_vm.sKey+index,staticClass:"setItem",attrs:{"label":itemT&&itemT.label,"disabled":itemT&&itemT.disabled}})}),1)],1)])}
var tableSettingvue_type_template_id_9eccc53a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tableSetting/tableSetting.vue?vue&type=template&id=9eccc53a&

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
  mixins: [mixins_locale],
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
      default: '30px'
    },
    right: {
      type: String,
      default: '0'
    },
    width: {
      type: String,
      default: '150px'
    },
    bg: {
      type: String,
      default: '#ccc'
    },
    defaultCheck: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      show: false,
      groupT: [],
      locale: null
    }
  },
  computed: {
    groupX() {
      let unknown = this.t('r.unknown')
      if (this.value.length > this.groupT.length) {
        this.groupT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.value)
      }
      return this.groupT.map(e => {
        let temp = {'label': e && e.title || unknown}
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
        let unknown = this.t('r.unknown')
        return this.value.map(e => e && e.title || unknown)
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
  created() {
    if (this.$root && this.$root.$i18n && this.$root.$i18n.locale) {
      this.locale = this.$root.$i18n.locale
    }
    else if (this.$root && this.$root.$lang) {
      this.locale = this.$root.$lang
    }
  },
  mounted() {
    let unknown = this.t('r.unknown')
    let localStr
    if (this.locale) {
      localStr = localStorage.getItem(this.sKey + '_' + this.locale)
    }
    else {
      localStr = localStorage.getItem(this.sKey)
    }
    if (localStr) {
      this.checkAllGroup = JSON.parse(decodeURI(localStr))
    }
    else {
      if (this.defaultCheck) {
        this.checkAllGroup = this.value.filter(e => e.showSettingCheck)
          .map(e => e && e.title || unknown)
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
      if (this.locale) {
        localStorage.setItem(this.sKey + '_' + this.locale, encodeURI(JSON.stringify(this.checkAllGroup)))
      }
      else {
        localStorage.setItem(this.sKey, encodeURI(JSON.stringify(this.checkAllGroup)))
      }
      this.show = false
      // this.$Message.success('显示设置已保存！')
    },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false
      }
      else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false

      if (this.checkAll) {
        this.checkAllGroup = this.groupX.map(e => e.label)
      }
      else {
        this.checkAllGroup = this.disabledGroup.map(e => e.label)
      }
    },
    checkAllGroupChange(data) {
      if (data.length === this.groupX.length) {
        this.indeterminate = false
        this.checkAll = true
      }
      else if (data.length > this.disabledGroup.length) {
        this.indeterminate = true
        this.checkAll = false
      }
      else {
        this.indeterminate = false
        this.checkAll = false
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
  tableSettingvue_type_template_id_9eccc53a_render,
  tableSettingvue_type_template_id_9eccc53a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableSetting = (tableSetting_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/inputMap/inputMap.vue?vue&type=template&id=587d42ba&
var inputMapvue_type_template_id_587d42ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"containerIKJ",style:(_vm.containerStyle)},[_c('Input',{ref:"mapInput",class:{mapInputIKJ:_vm.showMap},attrs:{"placeholder":_vm.placeholder||_vm.t('r.search'),"disabled":_vm.disabled,"icon":"ios-search"},model:{value:(_vm.valueT.name),callback:function ($$v) {_vm.$set(_vm.valueT, "name", $$v)},expression:"valueT.name"}}),_c('div',{ref:_vm.vidT,style:(_vm.mapStyle),attrs:{"id":_vm.vidT}})],1)}
var inputMapvue_type_template_id_587d42ba_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/inputMap/inputMap.vue?vue&type=template&id=587d42ba&

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
//
//
//






/* harmony default export */ var inputMapvue_type_script_lang_js_ = ({
  name: "inputMap",
  mixins: [mixins_locale],
  model: {
    prop: 'valProp',
    event: 'update-value'
  },
  props: {
    valProp: {
      type: Object,
      default: null
    },
    width: {
      type: [
        String,
        Number
      ],
      default: '100%'
    },
    height: {
      type: [
        String,
        Number
      ],
      default: null
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showMap: {
      type: Boolean,
      default: true
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
        }
        else if (!this.valProp.name) {
          temp = {
            ...this.valProp,
            name: null
          }
        }
        else {
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
      }
      else {
        return this.width
      }
    },
    heightT() {
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(this.height)) {
        return this.height + 'px'
      }
      else if (this.height) {
        return this.height
      }
      else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(this.width)) {
        return this.width * 0.66 + 'px'
      }
      else {
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
        timer_setTimeout(this.checkHeight, 100)
      }
      else {
        /*高德地图实例初始化较慢，暂时延时1秒，后面寻找完美解决方案*/
        timer_setTimeout(this.initMap, 1000)
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
                }
                else {
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
        }
        else {
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
  inputMapvue_type_template_id_587d42ba_render,
  inputMapvue_type_template_id_587d42ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var inputMap = (inputMap_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableIconBtn/tableIconBtn.vue?vue&type=template&id=cffc559a&
var tableIconBtnvue_type_template_id_cffc559a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"has",rawName:"v-has",value:(_vm.has),expression:"has"}],staticClass:"tableBtnsG",class:{disabled:_vm.disabled},attrs:{"title":_vm.title||_vm.t('r.button')},on:{"click":_vm.onClick}},[_c('Icon',{attrs:{"type":_vm.icon,"size":_vm.size}})],1)}
var tableIconBtnvue_type_template_id_cffc559a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tableIconBtn/tableIconBtn.vue?vue&type=template&id=cffc559a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableIconBtn/tableIconBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tableIconBtnvue_type_script_lang_js_ = ({
  name: "tableIconBtn",
  mixins: [mixins_locale],
  props: {
    icon: {
      type: String,
      default() {
        return 'md-radio-button-on'
      }
    },
    title: {
      type: String
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
  tableIconBtnvue_type_template_id_cffc559a_render,
  tableIconBtnvue_type_template_id_cffc559a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableIconBtn = (tableIconBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=template&id=8a4f1806&
var iconTxtBtnvue_type_template_id_8a4f1806_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"has",rawName:"v-has",value:(_vm.has),expression:"has"}],staticClass:"tabTopBtnsT",class:{disabled:_vm.disabled},style:({'font-size': _vm.txtSize}),on:{"click":_vm.click}},[_c('Icon',{attrs:{"type":_vm.icon,"size":_vm.size}}),_vm._v(" "+_vm._s(_vm.name||_vm.t('r.button'))+" ")],1)}
var iconTxtBtnvue_type_template_id_8a4f1806_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=template&id=8a4f1806&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=script&lang=js&
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



/* harmony default export */ var iconTxtBtnvue_type_script_lang_js_ = ({
  name: "iconTxtBtn",
  mixins: [mixins_locale],
  props: {
    name: {
      type: String
    },
    icon: {
      type: String,
      default: 'md-download'
    },
    size: {
      type: Number,
      default: 17
    },
    disabled: {
      type: Boolean,
      default: false
    },
    has: {
      type: String
    }
  },
  computed: {
    txtSize() {
      return Math.floor(this.size / 17 * 12) + 'px'
    }
  },
  methods: {
    click(e) {
      if (this.disabled) {
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
  iconTxtBtnvue_type_template_id_8a4f1806_render,
  iconTxtBtnvue_type_template_id_8a4f1806_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var iconTxtBtn = (iconTxtBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/showHidePanel/showHidePanel.vue?vue&type=template&id=8eea5af4&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/selectInput/selectInput.vue?vue&type=template&id=238ec0ce&
var selectInputvue_type_template_id_238ec0ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Select',{style:(_vm.labelSelectStyle),attrs:{"disabled":Boolean(_vm.disabled),"transfer":""},model:{value:(_vm.selectVal),callback:function ($$v) {_vm.selectVal=$$v},expression:"selectVal"}},_vm._l((_vm.selectOption),function(item,index){return _c('Option',{key:'selectInputOp'+item.value+index,style:({textAlign: _vm.labelTextAlign}),attrs:{"value":item.val}},[_vm._v(_vm._s(item.label))])}),1),_c('Input',{style:(_vm.inputStyle),attrs:{"placeholder":_vm.placeholder||_vm.t('r.pInput'),"clearable":_vm.clearable,"disabled":Boolean(_vm.disabled)},on:{"on-change":_vm.inputChange},model:{value:(_vm.inputVal),callback:function ($$v) {_vm.inputVal=$$v},expression:"inputVal"}})],1)}
var selectInputvue_type_template_id_238ec0ce_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/selectInput/selectInput.vue?vue&type=template&id=238ec0ce&

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
  mixins: [mixins_locale],
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
      default: 160
    },
    labelTextAlign: {
      /*select内容对齐方式*/
      type: String,
      default: 'right'
    },
    itemWidth: {
      /*表单项内容宽度,用于行内表单*/
      type: Number,
      default: 200
    },
    selectOption: {
      /*选择框待选项*/
      type: Array,
      default() {
        return []
      }
    },
    placeholder: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      /*禁用，仅展示*/
      type: Boolean,
      default: false
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
  selectInputvue_type_template_id_238ec0ce_render,
  selectInputvue_type_template_id_238ec0ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var selectInput = (selectInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/asyncCascader/asyncCascader.vue?vue&type=template&id=0f43a8fe&
var asyncCascadervue_type_template_id_0f43a8fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Cascader',{ref:"cascaderRT",attrs:{"data":_vm.data,"change-on-select":"","transfer":"","disabled":_vm.disabled,"render-format":_vm.format,"placeholder":_vm.placeholder||_vm.t('r.pSelect'),"filterable":_vm.filterable},on:{"on-change":_vm.onChange},model:{value:(_vm.val),callback:function ($$v) {_vm.val=$$v},expression:"val"}})}
var asyncCascadervue_type_template_id_0f43a8fe_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/asyncCascader/asyncCascader.vue?vue&type=template&id=0f43a8fe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/asyncCascader/asyncCascader.vue?vue&type=script&lang=js&
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





/* harmony default export */ var asyncCascadervue_type_script_lang_js_ = ({
  name: "asyncCascader",
  mixins: [mixins_locale],
  model: {
    prop: 'valProp',
    event: 'subVal'
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
    optionVal: {
      /*v-model收集节点的哪些字段*/
      type: String,
      default:'id'
    },
    optionLabel: {
      /*选项的标签对应接口字段*/
      type: String,
      default: 'name'
    },
    separator: {
      /*选中的label分隔符（多级展示时）,valProp为String（多级）时分隔符*/
      type: String,
      default: '/'
    },
    onlyLastVal: {
      /*只取最后一级*/
      type: Boolean,
      default: true
    },
    onlyLastLabel: {
      /*只显示最后一级*/
      type: Boolean,
      default() {
        return true
      }
    },
    filterable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
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
        if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(valProp)) {
          return [].concat(valProp)
        }
        else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(valProp)) {
          return findPath({
            group: this.data,
            condition: item => item.value === valProp,
            pathKey: 'value'
          })
        }
        else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isString(valProp)) {
          return valProp.split(this.separator)
        }
        else if (valProp === null) {
          return []
        }
      },
      set(val) {
        if (this.onlyLastVal) {
          if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(val)) {
            this.$emit('subVal', null)
            this.$emit('on-label-change', null)
          }
          else {
            this.$emit('subVal', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.last(val))
          }
        }
        else {
          if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEqual(this.valProp, val)) {
            return
          }
          this.$emit('subVal', [].concat(val))
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
        console.error('没有用于拉取级联数据的有效接口地址')
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
            console.warn('级联数据错误，不能使用')
          }
        })
        .catch(() => {
          console.warn('拉取级联数据出错')
        })
    },
    dataFilter(data) {
      let temp = []
      for (let item of data) {
        let tt = {
          value: item[this.optionVal],
          label: item[this.optionLabel]
        }
        if (item.children && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(item.children))) {
          tt.children = this.dataFilter(item.children)
        }
        temp.push(tt)
      }
      return temp
    },
    format(labels, selectedData) {
      if (this.onlyLastLabel) {
        return external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.last(labels)
      }
      return labels.join(this.separator)
    },
    onChange(val, selectedDetail) {
      let label = null
      if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(selectedDetail)) {
        label = selectedDetail.map(item => {
          return item.label
        })
          .join(this.separator)
      }
      this.$emit('on-label-change', label)
    }
  }
});

// CONCATENATED MODULE: ./src/components/asyncCascader/asyncCascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var asyncCascader_asyncCascadervue_type_script_lang_js_ = (asyncCascadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/asyncCascader/asyncCascader.vue





/* normalize component */

var asyncCascader_component = normalizeComponent(
  asyncCascader_asyncCascadervue_type_script_lang_js_,
  asyncCascadervue_type_template_id_0f43a8fe_render,
  asyncCascadervue_type_template_id_0f43a8fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var asyncCascader = (asyncCascader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/editor.vue?vue&type=template&id=63528fcd&
var editorvue_type_template_id_63528fcd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.editorId}})}
var editorvue_type_template_id_63528fcd_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/editor.vue?vue&type=template&id=63528fcd&

// EXTERNAL MODULE: external {"root":"wangEditor","commonjs":"wangeditor","commonjs2":"wangeditor","amd":"wangeditor"}
var external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_ = __webpack_require__("8eed");
var external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_default = /*#__PURE__*/__webpack_require__.n(external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_);

// EXTERNAL MODULE: external {"root":"xss","commonjs":"xss","commonjs2":"xss","amd":"xss"}
var external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_ = __webpack_require__("efde");
var external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_default = /*#__PURE__*/__webpack_require__.n(external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/editor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//










const {$, BtnMenu} = external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_default.a

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: 'Editor',
  mixins: [mixins_locale],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    valueType: {
      /*绑定的值的类型*/
      type: String,
      validator: val => oneOf(val, [
        'html',
        'text'
      ]),
      default: 'html'
    },
    focus: {
      type: Boolean,
      default: false
    },
    changeInterval: {
      /*设置change事件触发时间间隔*/
      type: Number,
      default: 800
    },
    colors: {
      /*文字和背景色*/
      type: Array,
      default() {
        return [
          '#000000',
          '#eeece0',
          '#1c487f',
          '#4d80bf',
          '#c24f4a',
          '#8baa4a',
          '#7b5ba1',
          '#46acc8',
          '#f9963b',
          '#ffffff'
        ]
      }
    },
    fontNames: {
      /*可用字体*/
      type: Array,
      default() {
        return [
          '黑体',
          '仿宋',
          '楷体',
          '标楷体',
          '华文仿宋',
          '华文楷体',
          '宋体',
          '微软雅黑',
          'Arial',
          'Tahoma',
          'Verdana',
          'Times New Roman',
          'Courier New'
        ]
      }
    },
    uploadImgMaxSize: {
      /*限制上传图片大小,默认100k*/
      type: Number,
      default: 100 * 1024
    },
    uploadImgMaxLength: {
      /*限制一次最多能传几张图片，默认10张*/
      type: Number,
      default: 10
    },
    uploadImgShowBase64: {
      /*是否使用base64作为本地图片上传保存方式*/
      type: Boolean,
      default: true
    },
    uploadImgServe: {
      /*图片上传服务器配置，注意不可和base64上传同时开启*/
      type: Object
    },
    placeholder: {
      type: String,
      default: '请输入正文'
    },
    disabled: {
      /*是否禁用编辑功能*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: null,
      valueT: ''
    }
  },
  computed: {
    editorId() {
      return `editor${this._uid}`
    }
  },
  created() {
    let ops = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_default.a.whiteList)

    for (let key in ops) {
      if (ops.hasOwnProperty(key) && myTypeof(ops[key]) === 'Array') {
        ops[key].unshift('style')
      }
    }

    this.xssP = new external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_default.a.FilterXSS({whiteList: ops})
  },
  mounted() {
    this.editor = new external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_default.a(`#${this.editorId}`)

    const titleT = this.t('r.preview')
    const previewH = this.previewHandler

    //定义自定义菜单‘预览’
    class ViewMenu extends BtnMenu {
      constructor(editor) {
        const $elem = $(`<div class="w-e-menu" title="${titleT}"><i class="ivu-icon ivu-icon-ios-eye" style="font-size: 22px;"></i></div>`)

        super($elem, editor)
      }

      clickHandler() {
        previewH()
      }

      tryChangeActive() {
      }
    }

    //注册自定菜单
    this.editor.menus.extend('viewMenuKey', ViewMenu)

    this.editor.config.placeholder = this.placeholder
    this.editor.config.zIndex = 100
    this.editor.config.menus = [
      'head',// 标题
      'bold',// 粗体
      'fontSize',// 字号
      'fontName',//字体
      'italic',// 斜体
      'underline', // 下划线
      'strikeThrough',//删除线
      'indent',//缩进
      'lineHeight',//行高
      'foreColor',// 文字颜色
      'backColor',// 背景颜色
      'link',// 插入链接
      'list',//列表
      'justify',// 对齐方式
      'quote',//引用
      'emoticon',//表情符
      'image',// 插入图片
      'video',//视频
      'table',  // 表格
      'splitLine',//分割线
      'undo',  // 撤销
      'redo',// 重复
      'viewMenuKey'//自定义预览菜单
    ]

    this.editor.config.focus = this.focus
    this.editor.config.colors = this.colors
    this.editor.config.fontNames = this.fontNames
    this.editor.config.uploadImgMaxSize = this.uploadImgMaxSize
    this.editor.config.uploadImgMaxLength = this.uploadImgMaxLength
    if (myTypeof(this.uploadImgServe) === 'Object' || this.uploadImgShowBase64 === false) {
      this.editor.config.uploadImgShowBase64 = false
      let configS
      if(myTypeof(this.uploadImgServe) === 'Object'){
        configS = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.uploadImgServe)
      }else {
        configS = {}
      }

      // 配置 server 接口地址
      if (myTypeof(configS.customUploadImg) === 'Function') {
        //自定义上传逻辑
        this.editor.config.customUploadImg = configS.customUploadImg
      }
      else {
        this.editor.config.customUploadImg = (resultFiles, insertImgFn) => {
          configS = Object.assign({
            params: {},
            url: window && window.g && window.g.mgrURL + '/fsc/file' || ''
          }, configS)
          // resultFiles 是 input 中选中的文件列表
          // insertImgFn 是获取图片 url 后，插入到编辑器的方法

          let paramsF = Object.assign({
            appId: 0,
            moduleId: 0,
            typeId: 0
          }, configS.params)

          let temp = new FormData()
          for (let key in paramsF) {
            if (paramsF.hasOwnProperty(key) && paramsF[key] !== null) {
              temp.append(key, paramsF[key])
            }
          }
          for (let item of resultFiles) {
            temp.append('files', item)
          }
          fetch.post(configS.url, temp, null, [], {
            spain: true,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(r => {
            if (r && r.data && myTypeof(r.data) === 'Array') {
              for (let item of r.data) {
                if (isValidValue(item.id)) {
                  // 上传图片，返回结果，将图片插入到编辑器中
                  insertImgFn(`${configS.url}/${item.id}/download`)
                }
              }
            }
            else {
              this.$swal(this.t('r.uploadFail'), r && r.message || '', 'error')
            }
          }).catch(()=>{
            this.$swal(this.t('r.uploadError'), '', 'error')
          })
        }
      }
      this.editor.config.withCredentials = true
    }
    else {
      this.editor.config.uploadImgShowBase64 = this.uploadImgShowBase64
    }

    this.editor.config.customAlert = s => {
      swal.apply(this, [
        this.t('r.uploadFail'),
        s || '',
        'warning'
      ])
    }

    this.editor.config.onchange = (html) => {
      let text = this.editor.txt.text()
      let htmlT = this.xssP.process(html)
      this.valueT = this.valueType === 'html' ? htmlT : text
      if (this.value === this.valueT) {
        return
      }

      this.$emit('input', this.valueType === 'html' ? htmlT : text)
      this.$emit('on-change', this.valueType === 'html' ? htmlT : text)
    }
    this.editor.config.onchangeTimeout = this.changeInterval
    // create这个方法一定要在所有配置项之后调用
    this.editor.create()
    if (this.value) {
      this.editor.txt.html(this.xssP.process(this.value))
    }
    timer_setTimeout(() => {
      this.$watch(() => this.disabled, (after) => {
        if (after) {
          // 禁用编辑功能
          this.editor.$textElem.attr('contenteditable', false)
        }
        else {
          // 开启编辑功能
          this.editor.$textElem.attr('contenteditable', true)
        }
      }, {immediate: true})
      this.$watch(() => this.value, s => {
        if (s !== this.valueT) {
          this.setHtml(s)
        }
      })
    }, 10)
  },
  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy()
    this.editor = null
  },
  methods: {
    setHtml(val) {
      this.editor.txt.html(this.xssP.process(val))
    },
    previewHandler() {
      const id = this.editorId + 'preview'
      let preEl = document.getElementById(id)
      if (!preEl) {
        const body = document.getElementsByTagName('body')

        preEl = document.createElement('div')
        preEl.setAttribute('id', id)
        preEl.setAttribute('class', 'editor-preview-mask')
        preEl.innerHTML =
          `<div class="editor-preview-body"><div class="editor-preview-head"><div><span>宽</span><input type="number" value="300" min="200"><span>高</span><input type="number" value="500" min="300"></div><i class="ivu-icon ivu-icon-md-close"></i></div><div class="editor-preview-out-wall"><div class="editor-preview-wall"></div></div></div>`

        let outWallE = preEl.children[0].children[1]
        let wallE = preEl.children[0].children[1].children[0]

        let inputW = preEl.children[0].children[0].children[0].children[1]

        const spaceW = 40
        const spaceH = 70

        const wHandler = e => {
          if (e && e.type === 'keyup') {
            let notEnter = false
            if (e.key) {
              notEnter = e.key !== 'Enter'
            }
            else {
              notEnter = e.keyCode !== 13
            }
            if (notEnter) {
              return
            }
          }
          let val = e.target.value
          val = Number(val)
          if (wallE.style && wallE.style.width === val + 'px') {
            return
          }

          const bodyW = body[0].clientWidth

          if (val < 200) {
            val = 200
            e.target.value = 200
          }
          else if (val > bodyW - spaceW) {
            val = bodyW - spaceW
            e.target.value = bodyW - spaceW
          }
          wallE.style.width = val + 'px'
        }

        inputW.addEventListener('blur', wHandler)
        inputW.addEventListener('keyup', wHandler)
        let inputH = preEl.children[0].children[0].children[0].children[3]

        const hHandler = e => {
          if (e && e.type === 'keyup') {
            let notEnter = false
            if (e.key) {
              notEnter = e.key !== 'Enter'
            }
            else {
              notEnter = e.keyCode !== 13
            }
            if (notEnter) {
              return
            }
          }
          let val = e.target.value
          val = Number(val)

          if (outWallE.style && outWallE.style.height === val + 'px') {
            return
          }

          const bodyH = body[0].clientHeight

          if (val < 300) {
            val = 300
            e.target.value = 300
          }
          else if (val > bodyH - spaceH) {
            val = bodyH - spaceH
            e.target.value = bodyH - spaceH
          }
          outWallE.style.height = val + 'px'
        }

        inputH.addEventListener('blur', hHandler)
        inputH.addEventListener('keyup', hHandler)
        let closeE = preEl.children[0].children[0].children[1]
        closeE.addEventListener('click', e => {
          preEl.style.display = 'none'
        })

        wallE.innerHTML = this.value
        body[0].append(preEl)
      }
      else {
        let wallE = preEl.children[0].children[1].children[0]
        wallE.innerHTML = this.value
        preEl.style.display = 'block'
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/editor/editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var editor_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/editor/editor.vue





/* normalize component */

var editor_component = normalizeComponent(
  editor_editorvue_type_script_lang_js_,
  editorvue_type_template_id_63528fcd_render,
  editorvue_type_template_id_63528fcd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var editor = (editor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alCascaderMC/alCascaderMC.vue?vue&type=template&id=4c298b1f&
var alCascaderMCvue_type_template_id_4c298b1f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('al-cascader',{ref:"alCascaderRefLK",staticClass:"alCascaderMC",attrs:{"level":_vm.level,"disabled":_vm.disabled,"placeholder":_vm.placeholder||_vm.t('r.pSelect'),"transfer":_vm.transfer,"searchable":_vm.filterable},model:{value:(_vm.valueT),callback:function ($$v) {_vm.valueT=$$v},expression:"valueT"}})}
var alCascaderMCvue_type_template_id_4c298b1f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alCascaderMC/alCascaderMC.vue?vue&type=template&id=4c298b1f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alCascaderMC/alCascaderMC.vue?vue&type=script&lang=js&
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





/* harmony default export */ var alCascaderMCvue_type_script_lang_js_ = ({
  name: "alCascaderMC",
  mixins: [mixins_locale],
  model: {
    prop: 'value',
    event: 'subVal'
  },
  props: {
    value: {
      /*组件绑定的值（v-model）*/
      type: [
        String,
        Number,
        Array
      ],
      default() {
        return null
      }
    },
    level: {
      /*精确至几级行政区域（0：省级，1：市级，2：县级，3：街道）*/
      type: [
        Number,
        String
      ],
      validator: val => oneOf(String(val), [
        '0',
        '1',
        '2',
        '3'
      ]),
      default() {
        return 2
      }
    },
    disabled: {
      /*禁用组件*/
      type: Boolean,
      default() {
        return false
      }
    },
    transfer: {
      /*弹出框元素直接放置于body下*/
      type: Boolean,
      default() {
        return true
      }
    },
    filterable: {
      /*可搜索*/
      type: Boolean,
      default() {
        return true
      }
    },
    separator: {
      /*地址名称分隔符*/
      type: String,
      default() {
        return '/'
      }
    },
    placeholder: {
      /*占位符*/
      type: String
    }
  },
  computed: {
    valueT: {
      get() {
        if (this.value && (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(this.value) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isString(this.value))) {
          let temp = String(this.value).trim()

          let regP = /^\d*$/
          if (regP.test(temp)) {
            let reg = /000000$/
            let regCQ = /^5002/
            let lv1 = temp.substr(0, 2) + '0000'
            let lv2 = temp.substr(0, 4) + '00'
            let lv3 = temp.substr(0, 6)
            if (regCQ.test(temp)) {
              lv2 = '500100'
            }
            if (reg.test(temp)) {
              return [
                lv1,
                lv2,
                lv3
              ]
            }

            return [
              lv1,
              lv2,
              lv3,
              temp
            ]
          }

          if (temp.indexOf(this.separator) !== -1) {
            /*以中文名称和分隔符拼接的String地址*/
            return temp.split(this.separator)
          }

          return [temp]
        }
        else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(this.value)) {
          return external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.value)
        }
        else {
          let refC = this.$refs.alCascaderRefLK
          if (refC) {
            refC.select = []
          }
          return []
        }
      },
      set(val) {
        if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(val)) {
          this.$emit('subVal', null)
          this.$emit('on-name-change', null)
        }
        else {
          let last = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.last(val)
          let code = null
          let name = null
          if (last) {
            code = last.code
          }
          if (code && code.length < 12) {
            code += '000000'
          }
          if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(val)) {
            name = val.map(item => {
              return item.name
            })
              .join(this.separator)
          }
          if (code) {
            if (code === this.value) {
              return
            }
            this.$emit('subVal', code)
          }
          if (name) {
            this.$emit('on-name-change', name)
          }
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/alCascaderMC/alCascaderMC.vue?vue&type=script&lang=js&
 /* harmony default export */ var alCascaderMC_alCascaderMCvue_type_script_lang_js_ = (alCascaderMCvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/alCascaderMC/alCascaderMC.vue





/* normalize component */

var alCascaderMC_component = normalizeComponent(
  alCascaderMC_alCascaderMCvue_type_script_lang_js_,
  alCascaderMCvue_type_template_id_4c298b1f_render,
  alCascaderMCvue_type_template_id_4c298b1f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var alCascaderMC = (alCascaderMC_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkboxTree/checkboxTree.vue?vue&type=template&id=03472820&
var checkboxTreevue_type_template_id_03472820_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Tree',{staticClass:"checkboxTreeGA",attrs:{"id":_vm.id,"data":_vm.dataT,"render":_vm.renderContent,"show-checkbox":""},on:{"on-check-change":_vm.updateVal,"on-toggle-expand":_vm.changeStyle}})}
var checkboxTreevue_type_template_id_03472820_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkboxTree/checkboxTree.vue?vue&type=template&id=03472820&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkboxTree/checkboxTree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




/* harmony default export */ var checkboxTreevue_type_script_lang_js_ = ({
  name: "checkboxTree",
  model: {
    prop: 'value',
    event: 'subVal'
  },
  props: {
    value: {
      /*选中的节点的集合（内容依据collectVal中的字段）*/
      type: Array,
      default() {
        return []
      }
    },
    data: {
      /*树结构数据*/
      type: Array,
      default() {
        return []
      }
    },
    expandAll: {
      /*是否默认全部展开*/
      type: Boolean,
      default: false
    },
    label: {
      /*节点的标签*/
      type: String,
      default: 'name'
    },
    collectVal: {
      /*v-model收集节点的哪些字段*/
      type: [
        String,
        Array
      ],
      default: 'id'
    },
    leaf: {
      /*叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点*/
      type: Boolean,
      default: true
    },
    inlineLeaf: {
      /*叶子节点为行内模式，横向排列*/
      type: Boolean,
      default: false
    },
    disabled: {
      /*禁用整颗树的checkbox选择功能*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dataT: [],
      id: 'CKT' + Math.floor(Math.random() * 10000000 + 10000000),
      valueE: []
    }
  },
  computed: {
    collectValT() {
      if (myTypeof(this.collectVal) === 'Array') {
        return this.collectVal
      }
      if (myTypeof(this.collectVal) === 'String') {
        return [this.collectVal]
      }
      return []
    },
    valueT() {
      if (myTypeof(this.value) === 'Array') {
        return this.value
      }
      return []
    }
  },
  watch: {
    data: {
      handler(after) {
        let temp = []
        this.initData(after, temp)
        this.dataT = temp
        if (this.inlineLeaf) {
          this.$nextTick(this.changeStyle)
        }
      },
      immediate: true,
      deep: true
    },
    valueT(after) {
      let key
      let type = 's'
      if (myTypeof(this.collectVal) === 'Array' && this.collectVal[0]) {
        key = this.collectVal[0]
        type = 'a'
      }
      else {
        key = this.collectVal
      }
      if (!key || JSON.stringify(after) === JSON.stringify(this.valueE)) {
        return
      }
      /*清空dataT已选*/
      setValByOption({
        group: this.dataT,
        condition: e => e.checked === true,
        key: 'checked',
        val: false
      })
      /*根据value设置dataT的已选*/
      if (type === 'a') {
        setValByOption({
          group: this.dataT,
          condition: e => external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.findIndex(after, [
            key,
            e[key]
          ]) !== -1,
          key: 'checked',
          val: true
        })
      }
      else {
        setValByOption({
          group: this.dataT,
          condition: e => after.indexOf(e[key]) !== -1,
          key: 'checked',
          val: true
        })
      }
    },
    disabled: {
      handler(after) {
        setValByOption({
          group: this.dataT,
          condition: e => e.disableCheckbox !== after,
          key: 'disableCheckbox',
          val: after
        })
        if (this.inlineLeaf) {
          this.$nextTick(this.changeStyle)
        }
      },
      immediate: true
    }
  },
  methods: {
    initData(data, root = []) {
      for (let item of data) {
        let checked = false
        if (this.collectValT.length > 1) {
          /*valueT的元素为Object*/
          checked = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(this.valueT, e => e[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.head(this.collectValT)] === item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.head(this.collectValT)]) !== undefined
        }
        else {
          checked = this.valueT.indexOf(item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.head(this.collectValT)]) !== -1
        }
        let temp = {
          name: item[this.label],
          expand: Boolean(this.expandAll || item.expand),
          checked: checked,
          disableCheckbox: this.disabled
        }
        for (let keyI of this.collectValT) {
          temp[keyI] = item[keyI]
        }
        root.push(temp)
        if (item.children && item.children.length > 0) {
          temp.children = []
          this.initDataB(item.children, temp.children)
        }
      }
    },
    initDataB(data, root = []) {
      for (let item of data) {
        let checked = false
        if (this.collectValT.length > 1) {
          /*valueT的元素为Object*/
          checked = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(this.valueT, e => e[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.head(this.collectValT)] === item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.head(this.collectValT)]) !== undefined
        }
        else {
          checked = this.valueT.indexOf(item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.head(this.collectValT)]) !== -1
        }
        let temp = {
          name: item[this.label],
          expand: Boolean(this.expandAll || item.expand),
          checked: checked,
          disableCheckbox: this.disabled
        }
        for (let keyI of this.collectValT) {
          temp[keyI] = item[keyI]
        }
        root.push(temp)
        if (item.children && item.children.length > 0) {
          temp.children = []
          this.initData(item.children, temp.children)
        }
      }
    },
    renderContent(h, {root, node, data}) {
      let classA = ''
      let isLeaf = true
      if (data.children && data.children.length > 0) {
        for (let ii of data.children) {
          if (ii.children !== undefined) {
            isLeaf = false
            break
          }
        }
        if (isLeaf && this.inlineLeaf) {
          classA = 'inlineChildXA'
        }
      }
      return h('div', {
        style: {
          display: 'inline-block',
          width: '100%'
        },
        class: classA
      }, [
        h('span', {
          style: {
            fontWeight: data.children ? 'bold' : 'normal'
          }
        }, data.name)
      ])
    },
    changeStyle(data) {
      if (data) {
        if (data.expand) {
          this.$nextTick(this.changeStyle)
        }
        return
      }
      let arr = document.querySelectorAll('#' + this.id + ' .inlineChildXA')
      if (arr.length > 0) {
        for (let item of arr) {
          let parent = item.parentNode
          let tt = parent.nextElementSibling
          if (!tt) {
            return
          }
          if (tt.tagName !== 'BR') {
            let grandParent = parent.parentNode
            let br = document.createElement('br')
            grandParent.insertBefore(br, tt)
            tt = br.nextElementSibling
            if (tt.className.indexOf('inlineTreeNodeF') === -1) {
              tt.setAttribute('class', tt.className + ' inlineTreeNodeF')
            }
          }
          while (tt.nextElementSibling) {
            tt = tt.nextElementSibling
            if (tt.className.indexOf('inlineTreeNodeF') === -1) {
              tt.setAttribute('class', tt.className + ' inlineTreeNodeF')
            }
          }
        }
      }
    },
    updateVal(data) {
      let temp = []
      if (this.leaf) {
        for (let item of data) {
          if (!item.children) {
            if (myTypeof(this.collectVal) === 'Array') {
              let valT = {}
              for (let keyI of this.collectVal) {
                valT[keyI] = item[keyI]
              }
              temp.push(valT)
            }
            else {
              temp.push(item[this.collectVal])
            }
          }
        }
      }
      else {
        for (let item of data) {
          if (myTypeof(this.collectVal) === 'Array') {
            let valT = {}
            for (let keyI of this.collectVal) {
              valT[keyI] = item[keyI]
            }
            temp.push(valT)
          }
          else {
            temp.push(item[this.collectVal])
          }
        }
      }
      this.valueE = temp
      this.$emit('subVal', temp)
      this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp))
    }
  }
});

// CONCATENATED MODULE: ./src/components/checkboxTree/checkboxTree.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkboxTree_checkboxTreevue_type_script_lang_js_ = (checkboxTreevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/checkboxTree/checkboxTree.vue





/* normalize component */

var checkboxTree_component = normalizeComponent(
  checkboxTree_checkboxTreevue_type_script_lang_js_,
  checkboxTreevue_type_template_id_03472820_render,
  checkboxTreevue_type_template_id_03472820_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkboxTree = (checkboxTree_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue?vue&type=template&id=0effa23e&
var checkboxGroupTwoClassvue_type_template_id_0effa23e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"boxLPA"},[_c('div',{staticClass:"headerJ"},[_c('div',{staticClass:"firstT borderBoxAS"},[_vm._v(_vm._s(_vm.firstTitle||_vm.t('r.level.1')))]),_c('div',{staticClass:"secondT borderBoxAS"},[_vm._v(_vm._s(_vm.secondTitle||_vm.t('r.level.2')))])]),_vm._l((_vm.dataT),function(item,index){return _c('div',{key:'checkboxJ'+index,staticClass:"bodyJ"},[_c('div',{staticClass:"firstCol borderBoxAS"},[_c('Checkbox',{attrs:{"indeterminate":item.indeterminate,"disabled":_vm.disabled},on:{"on-change":function($event){return _vm.checkAll(item,$event)}},model:{value:(item.checked),callback:function ($$v) {_vm.$set(item, "checked", $$v)},expression:"item.checked"}},[_vm._v(_vm._s(item[_vm.label]))])],1),_c('div',{staticClass:"secondCol borderBoxAS"},_vm._l((item.children),function(secItem,indexSec){return _c('div',{key:'secItem'+indexSec,staticClass:"secItem"},[_c('Checkbox',{attrs:{"disabled":_vm.disabled},on:{"on-change":_vm.updateDataT},model:{value:(secItem.checked),callback:function ($$v) {_vm.$set(secItem, "checked", $$v)},expression:"secItem.checked"}},[_vm._v(_vm._s(secItem[_vm.label]))])],1)}),0)])})],2)}
var checkboxGroupTwoClassvue_type_template_id_0effa23e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue?vue&type=template&id=0effa23e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue?vue&type=script&lang=js&
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





/* harmony default export */ var checkboxGroupTwoClassvue_type_script_lang_js_ = ({
  name: "checkboxGroupTwoClass",
  mixins: [mixins_locale],
  model: {
    prop: 'value',
    event: 'subVal'
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: Array,
      default() {
        return []
      }
    },
    firstTitle: {
      type: String
    },
    secondTitle: {
      type: String
    },
    label: {
      /*节点的标签*/
      type: String,
      default: 'name'
    },
    collectVal: {
      /*v-model收集节点的哪些字段*/
      type: [
        String,
        Array
      ],
      default: 'id'
    },
    leaf: {
      /*叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点*/
      type: Boolean,
      default: true
    },
    disabled: {
      /*禁用整颗树的checkbox选择功能*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      leafChecked: []
    }
  },
  computed: {
    dataT() {
      let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.data)
      let valTemp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.leafChecked)
      for (let item of temp) {
        /*遍历data添加勾选信息*/
        let checkCount = 0
        if (item.children && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(item.children))) {
          for (let secItem of item.children) {
            /*更深一层遍历children*/
            for (let valIndex = 0, len = valTemp.length; valIndex < len; valIndex++) {
              /*遍历继承的value*/
              if (myTypeof(valTemp[valIndex]) === 'Object') {
                /*收集多个字段的情况*/
                let equalI = true
                for (let collectKey of this.collectVal) {
                  if (valTemp[valIndex][collectKey] !== secItem[collectKey]) {
                    /*遍历中当前节点和value的当前遍历元素不等（收集字段对应的值有不等的），判断为当前节点没有被选中，不在判断其他收集字段，跳出循环*/
                    equalI = false
                    break
                  }
                }
                /*循环结束，如果equalI的值没被改为false,则表示当前节点被选中*/
                if (equalI) {
                  /*如果当前节点被选中，当前父级中选中的子节点数加一，不在遍历value其他元素，跳出循环*/
                  secItem.checked = true
                  checkCount++
                  valTemp.splice(valIndex, 1)
                  break
                }
              }
              else if (valTemp[valIndex] === secItem[this.collectVal]) {
                /*收集单个字段且当前节点的对应字段的值和value中当前遍历元素相等,判断为选中，不在遍历value其他元素，跳出循环*/
                secItem.checked = true
                checkCount++
                valTemp.splice(valIndex, 1)
                break
              }
            }
            /*避免checked为Undefined*/
            (!secItem.checked) && (secItem.checked = false)
          }
        }
        if (checkCount === 0) {
          item.checked = false
          item.indeterminate = false
        }
        else if (item.children && checkCount === item.children.length) {
          item.checked = true
          item.indeterminate = false
        }
        else {
          item.checked = false
          item.indeterminate = true
        }
      }
      return temp
    }
  },
  watch: {
    value: {
      handler(after, before) {
        if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEqual(this.leafChecked, after) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEqual(after, before)) {
          return
        }
        this.leafChecked = after
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    checkAll(root, isCheck) {
      if (root.children) {
        for (let item of root.children) {
          item.checked = isCheck
        }
      }
      this.updateDataT()
    },
    updateDataT() {
      this.getLeafChecked(this.dataT, true)
    },
    getLeafChecked(val, isLeaf) {
      let temp = []
      for (let item of val) {
        if (!isLeaf && !this.leaf && item.checked && item.indeterminate === false) {
          /*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
          if (myTypeof(this.collectVal) === 'Array') {
            let ttO = {}
            for (let keyI of this.collectVal) {
              ttO[keyI] = item[keyI]
            }
            temp.push(ttO)
          }
          else if (myTypeof(this.collectVal) === 'String') {
            temp.push(item[this.collectVal])
          }
        }
        if (item.children) {
          for (let secItem of item.children) {
            if (secItem.checked) {
              if (myTypeof(this.collectVal) === 'Array') {
                let ttO = {}
                for (let keyI of this.collectVal) {
                  ttO[keyI] = secItem[keyI]
                }
                temp.push(ttO)
              }
              else if (myTypeof(this.collectVal) === 'String') {
                temp.push(secItem[this.collectVal])
              }
            }
          }
        }
      }
      if (isLeaf) {
        this.leafChecked = temp
        if (this.leaf) {
          this.$emit('subVal', temp)
          this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp))
        }
        else {
          this.$nextTick(function () {
            this.getLeafChecked(this.dataT)
          })
        }
      }
      else {
        this.$emit('subVal', temp)
        this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp))
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkboxGroupTwoClass_checkboxGroupTwoClassvue_type_script_lang_js_ = (checkboxGroupTwoClassvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue





/* normalize component */

var checkboxGroupTwoClass_component = normalizeComponent(
  checkboxGroupTwoClass_checkboxGroupTwoClassvue_type_script_lang_js_,
  checkboxGroupTwoClassvue_type_template_id_0effa23e_render,
  checkboxGroupTwoClassvue_type_template_id_0effa23e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkboxGroupTwoClass = (checkboxGroupTwoClass_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue?vue&type=template&id=b0b25d66&
var checkboxGroupThreeClassvue_type_template_id_b0b25d66_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"boxLPB"},[_c('div',{staticClass:"headerF"},[_c('div',{staticClass:"firstT borderBoxKa"},[_vm._v(_vm._s(_vm.firstTitle||_vm.t('r.level.1')))]),_c('div',{staticClass:"secondT borderBoxKa"},[_vm._v(_vm._s(_vm.secondTitle||_vm.t('r.level.2')))]),_c('div',{staticClass:"thirdT borderBoxKa"},[_vm._v(_vm._s(_vm.thirdTitle||_vm.t('r.level.3')))])]),_vm._l((_vm.dataT),function(item,index){return _c('div',{key:'checkboxJ'+index,staticClass:"bodyF"},[_c('div',{staticClass:"firstCol borderBoxKa"},[_c('Checkbox',{attrs:{"indeterminate":item.indeterminate,"disabled":_vm.disabled},on:{"on-change":function($event){return _vm.checkChangeFirst(item,$event)}},model:{value:(item.checked),callback:function ($$v) {_vm.$set(item, "checked", $$v)},expression:"item.checked"}},[_vm._v(_vm._s(item[_vm.label]))])],1),_c('div',{staticClass:"rightBoxAL"},_vm._l((item.children),function(secItem,indexSec){return _c('div',{key:'secItem'+indexSec,staticClass:"rightBoxInner"},[_c('div',{staticClass:"secondCol borderBoxKa"},[_c('Checkbox',{attrs:{"indeterminate":secItem.indeterminate,"disabled":_vm.disabled},on:{"on-change":function($event){return _vm.checkChangeSecond(secItem,$event)}},model:{value:(secItem.checked),callback:function ($$v) {_vm.$set(secItem, "checked", $$v)},expression:"secItem.checked"}},[_vm._v(_vm._s(secItem[_vm.label]))])],1),_c('div',{staticClass:"thirdCol borderBoxKa"},_vm._l((secItem.children),function(thirdItem,indexThird){return _c('div',{key:'thirdItem'+indexThird,staticClass:"thirdItem"},[_c('Checkbox',{attrs:{"disabled":_vm.disabled},on:{"on-change":_vm.updateDataT},model:{value:(thirdItem.checked),callback:function ($$v) {_vm.$set(thirdItem, "checked", $$v)},expression:"thirdItem.checked"}},[_vm._v(_vm._s(thirdItem[_vm.label]))])],1)}),0)])}),0)])})],2)}
var checkboxGroupThreeClassvue_type_template_id_b0b25d66_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue?vue&type=template&id=b0b25d66&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue?vue&type=script&lang=js&
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





/* harmony default export */ var checkboxGroupThreeClassvue_type_script_lang_js_ = ({
  name: "checkboxGroupThreeClass",
  mixins: [mixins_locale],
  model: {
    prop: 'value',
    event: 'subVal'
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: Array,
      default() {
        return []
      }
    },
    firstTitle: {
      type: String
    },
    secondTitle: {
      type: String
    },
    thirdTitle: {
      type: String
    },
    label: {
      /*节点的标签*/
      type: String,
      default: 'name'
    },
    collectVal: {
      /*v-model收集节点的哪些字段*/
      type: [
        String,
        Array
      ],
      default: 'id'
    },
    leaf: {
      /*叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点*/
      type: Boolean,
      default: true
    },
    disabled: {
      /*禁用整颗树的checkbox选择功能*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      leafChecked: []
    }
  },
  computed: {
    dataT() {
      let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.data)
      let valTemp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.leafChecked)
      for (let item of temp) {
        /*遍历data添加勾选信息(1级)*/
        let checkCount = 0
        let indeterminateCount = 0
        if (item.children && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(item.children))) {
          for (let secItem of item.children) {
            /*更深一层遍历children（2级）*/
            let checkCountB = 0
            if (secItem.children && (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(secItem.children))) {
              for (let thirdItem of secItem.children) {
                /*更深一层遍历children（3级）*/
                for (let valIndex = 0, len = valTemp.length; valIndex < len; valIndex++) {
                  /*遍历继承的value*/
                  if (myTypeof(valTemp[valIndex]) === 'Object') {
                    /*收集多个字段的情况*/
                    let equalI = true
                    for (let collectKey of this.collectVal) {
                      if (valTemp[valIndex][collectKey] !== thirdItem[collectKey]) {
                        /*遍历中当前节点和value的当前遍历元素不等（收集字段对应的值有不等的），判断为当前节点没有被选中，不在判断其他收集字段，跳出循环*/
                        equalI = false
                        break
                      }
                    }
                    /*循环结束，如果equalI的值没被改为false,则表示当前节点被选中*/
                    if (equalI) {
                      /*如果当前节点被选中，当前父级中选中的子节点数加一，不在遍历value其他元素，跳出循环*/
                      thirdItem.checked = true
                      checkCountB++
                      valTemp.splice(valIndex, 1)
                      break
                    }
                  }
                  else if (valTemp[valIndex] === thirdItem[this.collectVal]) {
                    /*收集单个字段且当前节点的对应字段的值和value中当前遍历元素相等,判断为选中，不在遍历value其他元素，跳出循环*/
                    thirdItem.checked = true
                    checkCountB++
                    valTemp.splice(valIndex, 1)
                    break
                  }
                }
                /*避免checked为Undefined*/
                (!thirdItem.checked) && (thirdItem.checked = false)
              }
            }
            if (checkCountB === 0) {
              secItem.checked = false
              secItem.indeterminate = false
            }
            else if (secItem.children && checkCountB === secItem.children.length) {
              secItem.checked = true
              secItem.indeterminate = false
              checkCount++
            }
            else {
              secItem.checked = false
              secItem.indeterminate = true
              indeterminateCount++
            }
          }
        }
        if (checkCount === 0 && indeterminateCount === 0) {
          item.checked = false
          item.indeterminate = false
        }
        else if (item.children && checkCount === item.children.length) {
          item.checked = true
          item.indeterminate = false
        }
        else {
          item.checked = false
          item.indeterminate = true
        }
      }
      return temp
    }
  },
  watch: {
    value: {
      handler(after, before) {
        if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEqual(this.leafChecked, after) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEqual(after, before)) {
          return
        }
        this.leafChecked = after
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    checkChangeFirst(root, isCheck) {
      if (root.children) {
        for (let item of root.children) {
          item.checked = isCheck
          if (item.children) {
            for (let itemB of item.children) {
              itemB.checked = isCheck
            }
          }
        }
      }
      this.updateDataT()
    },
    checkChangeSecond(root, isCheck) {
      if (root.children) {
        for (let item of root.children) {
          item.checked = isCheck
        }
      }
      this.updateDataT()
    },
    updateDataT() {
      this.getLeafChecked(this.dataT, true)
    },
    getLeafChecked(val, isLeaf) {
      let temp = []
      for (let item of val) {
        if (!isLeaf && !this.leaf && item.checked && item.indeterminate === false) {
          /*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
          if (myTypeof(this.collectVal) === 'Array') {
            let ttO = {}
            for (let keyI of this.collectVal) {
              ttO[keyI] = item[keyI]
            }
            temp.push(ttO)
          }
          else if (myTypeof(this.collectVal) === 'String') {
            temp.push(item[this.collectVal])
          }
        }
        if (item.children) {
          for (let secItem of item.children) {
            if (!isLeaf && !this.leaf && secItem.checked && secItem.indeterminate === false) {
              /*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
              if (myTypeof(this.collectVal) === 'Array') {
                let ttO = {}
                for (let keyI of this.collectVal) {
                  ttO[keyI] = secItem[keyI]
                }
                temp.push(ttO)
              }
              else if (myTypeof(this.collectVal) === 'String') {
                temp.push(secItem[this.collectVal])
              }
            }
            if (secItem.children) {
              for (let thirdItem of secItem.children) {
                if (thirdItem.checked) {
                  if (myTypeof(this.collectVal) === 'Array') {
                    let ttO = {}
                    for (let keyI of this.collectVal) {
                      ttO[keyI] = thirdItem[keyI]
                    }
                    temp.push(ttO)
                  }
                  else if (myTypeof(this.collectVal) === 'String') {
                    temp.push(thirdItem[this.collectVal])
                  }
                }
              }
            }
          }
        }
      }
      if (isLeaf) {
        this.leafChecked = temp
        if (this.leaf) {
          this.$emit('subVal', temp)
          this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp))
        }
        else {
          this.$nextTick(function () {
            this.getLeafChecked(this.dataT)
          })
        }
      }
      else {
        this.$emit('subVal', temp)
        this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(temp))
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkboxGroupThreeClass_checkboxGroupThreeClassvue_type_script_lang_js_ = (checkboxGroupThreeClassvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue





/* normalize component */

var checkboxGroupThreeClass_component = normalizeComponent(
  checkboxGroupThreeClass_checkboxGroupThreeClassvue_type_script_lang_js_,
  checkboxGroupThreeClassvue_type_template_id_b0b25d66_render,
  checkboxGroupThreeClassvue_type_template_id_b0b25d66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkboxGroupThreeClass = (checkboxGroupThreeClass_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fullScreenPop/fullScreenPop.vue?vue&type=template&id=6e10939c&
var fullScreenPopvue_type_template_id_6e10939c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPop),expression:"showPop"}],staticClass:"fullScreenPopBoxAM"},[_c('div',{staticClass:"headerAM",style:({color:_vm.headerColor,backgroundColor:_vm.headerBg,fontSize:_vm.hFontSize})},[_c('span',{staticClass:"headerTxtAM"},[_vm._v(_vm._s(_vm.title||_vm.t('r.title')))]),_c('header-bt',{attrs:{"icon":"md-return-left"},on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.t('r.back')))])],1),_c('div',{staticClass:"contentAM"},[_vm._t("default")],2)])}
var fullScreenPopvue_type_template_id_6e10939c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fullScreenPop/fullScreenPop.vue?vue&type=template&id=6e10939c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/headerBt/headerBt.vue?vue&type=template&id=7681f1e4&
var headerBtvue_type_template_id_7681f1e4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{headerBtCTM:true,withIconCTM:_vm.icon||_vm.withIcon,disabled: _vm.disabled},style:({color: _vm.color,borderLeftColor:_vm.borderColor}),on:{"click":_vm.click}},[(_vm.icon)?_c('Icon',{attrs:{"size":_vm.iconSize,"type":_vm.icon}}):_vm._e(),_vm._t("default")],2)}
var headerBtvue_type_template_id_7681f1e4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/headerBt/headerBt.vue?vue&type=template&id=7681f1e4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/headerBt/headerBt.vue?vue&type=script&lang=js&
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

/* harmony default export */ var headerBtvue_type_script_lang_js_ = ({
  name: "headerBt",
  props: {
    icon: {
      type: String
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: [
        Number,
        String
      ],
      default: 18
    },
    color: {
      type: String,
      default: 'inherit'
    },
    borderColor: {
      type: String,
      default: '#fff'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click(e) {
      if (this.disabled) {
        return
      }
      this.$emit('click', e)
    }
  }
});

// CONCATENATED MODULE: ./src/components/headerBt/headerBt.vue?vue&type=script&lang=js&
 /* harmony default export */ var headerBt_headerBtvue_type_script_lang_js_ = (headerBtvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/headerBt/headerBt.vue





/* normalize component */

var headerBt_component = normalizeComponent(
  headerBt_headerBtvue_type_script_lang_js_,
  headerBtvue_type_template_id_7681f1e4_render,
  headerBtvue_type_template_id_7681f1e4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var headerBt = (headerBt_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fullScreenPop/fullScreenPop.vue?vue&type=script&lang=js&
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





/* harmony default export */ var fullScreenPopvue_type_script_lang_js_ = ({
  name: "fullScreenPop",
  mixins: [mixins_locale],
  components: {headerBt: headerBt},
  props: {
    title: {
      type: String
    },
    headerColor: {
      type: String
    },
    headerBg: {
      type: String
    },
    headerFontSize: {
      type: [
        String,
        Number
      ],
      default: 12
    }
  },
  data() {
    return {
      showPop: false
    }
  },
  computed: {
    hFontSize() {
      if (myTypeof(this.headerFontSize) === 'Number') {
        return this.headerFontSize + 'px'
      }
      return this.headerFontSize
    }
  },
  methods: {
    open() {
      this.showPop = true
      this.$emit('on-open')
    },
    close(getData) {
      this.showPop = false
      this.$emit('on-close', getData === true)
    }
  }
});

// CONCATENATED MODULE: ./src/components/fullScreenPop/fullScreenPop.vue?vue&type=script&lang=js&
 /* harmony default export */ var fullScreenPop_fullScreenPopvue_type_script_lang_js_ = (fullScreenPopvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fullScreenPop/fullScreenPop.vue





/* normalize component */

var fullScreenPop_component = normalizeComponent(
  fullScreenPop_fullScreenPopvue_type_script_lang_js_,
  fullScreenPopvue_type_template_id_6e10939c_render,
  fullScreenPopvue_type_template_id_6e10939c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fullScreenPop = (fullScreenPop_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formR/formR.vue?vue&type=template&id=68518619&
var formRvue_type_template_id_68518619_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Form',{key:_vm.formReRenderKey,ref:"formGroupXRef",staticClass:"formXN",attrs:{"model":_vm.valGroup,"rules":_vm.formRulesT,"label-width":_vm.labelWidth,"inline":_vm.inline,"show-message":_vm.showMessage}},[_vm._l((_vm.formDataT),function(item,index){return (_vm.getFormItemIfVal(item))?_c('FormItem',{key:'formItem'+index,staticClass:"relativeBox",class:{withInfo:Boolean(item.info),withTitle:Boolean(item.title),inlineFormItemXN: _vm.inline,noLabel: item.type === 'selectInput'},style:(_vm.formStyle),attrs:{"label":item.type !== 'radio'&&item.type !== 'checkbox'?item.label:' ',"prop":item.key||''}},[(item.type === 'txt')?_c('span',{class:{likeInputX:item.likeInput}},[_vm._v(_vm._s(item.valKey?_vm.valGroup[item.valKey]||'无':item.val))]):(item.type === 'inputNumber')?_c('InputNumber',{style:(_vm.itemStyle),attrs:{"max":item.max||Infinity,"min":item.min||-Infinity,"precision":item.precision,"step":item.step||1,"placeholder":item.placeholder||_vm.t('r.pInput'),"disabled":Boolean(item.disabled) || _vm.disabled,"readonly":Boolean(item.readonly),"editable":item.editable !== false,"active-change":Boolean(item.activeChange),"clearable":item.clearable!==false},on:{"on-blur":function($event){return _vm.itemChange($event,item)}},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(item.type === 'input')?_c('Input',{style:(_vm.itemStyle),attrs:{"maxlength":item.maxLength||null,"placeholder":item.placeholder||_vm.t('r.pInput'),"disabled":Boolean(item.disabled) || _vm.disabled,"clearable":item.clearable!==false},on:{"on-blur":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(item.type === 'select')?_c('Select',{style:(_vm.itemStyle),attrs:{"filterable":(item.filterable === true || item.filterable === false)?item.filterable : false,"disabled":Boolean(item.disabled) || _vm.disabled,"multiple":Boolean(item.multiple),"placeholder":item.placeholder||_vm.t('r.pSelect'),"transfer":"","clearable":item.clearable!==false},on:{"on-clear":function($event){return _vm.clearTempKeyItem($event,item.tempKey)},"on-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}},_vm._l((item.options),function(optionItem,index){return _c('Option',{key:'option-'+item.key + index,attrs:{"value":optionItem.val,"label":optionItem.label||optionItem.val,"disabled":!!optionItem.disabled}})}),1):(item.type === 'selectInput')?_c('select-input',{attrs:{"label-width":_vm.labelWidth,"item-width":_vm.itemWidth,"select-option":item.options||[],"placeholder":item.placeholder||_vm.t('r.pInput'),"clearable":item.clearable!==false,"disabled":Boolean(item.disabled) || _vm.disabled},on:{"on-change":_vm.onSelectInputChange},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(item.type === 'alCascader')?_c('al-cascader-m-c',{staticClass:"inlineBlock",style:(_vm.itemStyle),attrs:{"level":(item.level||item.level ===0)?item.level:2,"disabled":Boolean(item.disabled) || _vm.disabled,"filterable":item.filterable!==false,"placeholder":item.placeholder||_vm.t('r.pSelect')},on:{"on-name-change":function($event){return _vm.alNameChange($event,item)}},model:{value:(_vm.valGroup[item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, item.key, $$v)},expression:"valGroup[item.key]"}}):(item.type === 'asyncCascader')?_c('async-cascader',{style:(_vm.itemStyle),attrs:{"url":item.url||_vm.mgrUrl + '/umc/orgs',"option-val":item.optionVal||'id',"option-label":item.optionLabel||'name',"only-last-val":item.onlyLastVal !== false,"only-last-label":item.onlyLastLabel !== false,"separator":item.separator || '/',"placeholder":item.placeholder || _vm.t('r.pSelect'),"filterable":Boolean(item.filterable),"disabled":Boolean(item.disabled) || _vm.disabled},on:{"on-label-change":function($event){return _vm.asyncLabelChange($event,item)}},model:{value:(_vm.valGroup[item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, item.key, $$v)},expression:"valGroup[item.key]"}}):(item.type === 'radio')?_c('Radio',{attrs:{"disabled":Boolean(item.disabled) || _vm.disabled},on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.valGroup[item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, item.key, $$v)},expression:"valGroup[item.key]"}},[_vm._v(_vm._s(item.label))]):(item.type === 'radioGroup')?_c('RadioGroup',{style:(_vm.itemStyle),attrs:{"type":item.buttonType ? 'button': null},on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}},_vm._l((item.options),function(radioItem){return _c('Radio',{key:'radioItem'+radioItem.val,attrs:{"label":radioItem.val,"border":Boolean(item.itemBorder),"disabled":Boolean(item.disabled) || _vm.disabled||radioItem.disabled}},[(radioItem.icon && (!item.buttonType))?_c('Icon',{attrs:{"type":radioItem.icon}}):_vm._e(),_c('span',[_vm._v(_vm._s(radioItem.label || radioItem.val))])],1)}),1):(item.type === 'checkbox')?_c('Checkbox',{attrs:{"disabled":!!item.disabled},on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.valGroup[item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, item.key, $$v)},expression:"valGroup[item.key]"}},[_vm._v(_vm._s(item.label))]):(item.type === 'checkboxGroup')?_c('CheckboxGroup',{style:(_vm.itemStyle),on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.valGroup[item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, item.key, $$v)},expression:"valGroup[item.key]"}},_vm._l((item.options),function(checkItem){return _c('Checkbox',{key:'checkItem'+checkItem.val,attrs:{"label":checkItem.val,"disabled":Boolean(item.disabled) || _vm.disabled ||checkItem.disabled}},[(checkItem.icon)?_c('Icon',{attrs:{"type":checkItem.icon}}):_vm._e(),_c('span',[_vm._v(_vm._s(checkItem.label||checkItem.val))])],1)}),1):(item.type === 'textarea')?_c('Input',{style:(_vm.itemStyle),attrs:{"type":"textarea","autosize":{minRows: 2},"maxlength":item.maxLength||null,"placeholder":item.placeholder || _vm.t('r.pInput'),"disabled":Boolean(item.disabled) || _vm.disabled,"clearable":item.clearable!==false},on:{"on-blur":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(item.type === 'upload')?_c('upload-group',{staticClass:"inlineBlock",style:(_vm.itemStyle),attrs:{"url":item.url||_vm.uploadUrl,"manual-upload":Boolean(item.manualUpload),"format":item.format||[],"data":item.data,"max-size":item.maxSize||0,"show-img":Boolean(item.showImg),"length":item.length||0,"disabled":Boolean(item.disabled) || _vm.disabled,"withCredentials":item.withCredentials!==false},on:{"on-file-id-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.valGroup[item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, item.key, $$v)},expression:"valGroup[item.key]"}}):(item.type === 'date')?_c('DatePicker',{style:(_vm.itemStyle),attrs:{"type":item.dateType,"disabled":Boolean(item.disabled) || _vm.disabled,"placement":"bottom-end","placeholder":item.placeholder||_vm.t('r.selectDate'),"options":item.dateOptions||null,"clearable":item.clearable!==false,"editable":false,"transfer":""},on:{"on-change":function($event){return _vm.itemChange($event,item)}},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(item.type === 'editor')?_c('editor',{staticClass:"inlineBlock",style:(_vm.itemStyle),attrs:{"placeholder":item.placeholder || _vm.t('r.pInput'),"disabled":Boolean(item.disabled) || _vm.disabled,"uploadImgMaxSize":item.uploadImgMaxSize||(100 * 1024),"uploadImgMaxLength":item.uploadImgMaxLength||10,"uploadImgShowBase64":item.uploadImgShowBase64!==false,"uploadImgServe":item.uploadImgServe},on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.valGroup[item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, item.key, $$v)},expression:"valGroup[item.key]"}}):(item.type === 'inputMap')?_c('input-map',{style:(_vm.itemStyle),attrs:{"placeholder":item.placeholder || _vm.t('r.search'),"disabled":Boolean(item.disabled) || _vm.disabled,"show-map":item.showMap!==false,"height":item.mapHeight||'250px'},on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event,item)}},model:{value:(_vm.tempKeys[item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(item.type === 'custom')?_c('div',{staticClass:"inlineBlock",style:(_vm.itemStyle)},[_vm._t(item.slotName,null,{"valGroup":_vm.valGroup})],2):_vm._e(),(Boolean(item.info))?_c('div',{staticClass:"formInfoTxtXN"},[_vm._v(_vm._s(item.info))]):_vm._e(),(Boolean(item.title))?_c('div',{staticClass:"formTitleTxtXN"},[_vm._v(_vm._s(item.title))]):_vm._e()],1):_vm._e()}),(_vm.showLongOkBt)?_c('FormItem',[_c('Button',{style:(_vm.itemStyle),attrs:{"type":"primary","loading":_vm.btnLoading&&_vm.showLoading,"disabled":_vm.disabled},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.longOkBtTxt||_vm.t('r.confirm')))])],1):_vm._e(),(_vm.showInlineOkBt)?_c('Button',{class:{inlineFormBtXN:_vm.inline,okBtnXN:true},attrs:{"type":"primary","loading":_vm.btnLoading&&_vm.showLoading,"disabled":_vm.disabled},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.inlineOkBtTxt||_vm.t('r.confirm')))]):_vm._e(),(_vm.showInlineClearBt)?_c('Button',{class:{inlineFormBtXN:_vm.inline},attrs:{"type":"dashed"},on:{"click":_vm.resetForm}},[_vm._v(_vm._s(_vm.inlineClearBtTxt||_vm.t('r.clear')))]):_vm._e()],2)}
var formRvue_type_template_id_68518619_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/formR/formR.vue?vue&type=template&id=68518619&

// EXTERNAL MODULE: external {"root":"moment","commonjs":"moment","commonjs2":"moment","amd":"moment"}
var external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_ = __webpack_require__("c32d");
var external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default = /*#__PURE__*/__webpack_require__.n(external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formR/formR.vue?vue&type=script&lang=js&
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














/* harmony default export */ var formRvue_type_script_lang_js_ = ({
  name: "formR",
  mixins: [mixins_locale],
  components: {
    selectInput: selectInput,
    alCascaderMC: alCascaderMC,
    asyncCascader: asyncCascader,
    uploadGroup: uploadGroup,
    editor: editor,
    inputMap: inputMap
  },
  props: {
    formData: {
      /*弹框结构数据*/
      type: Array,
      default() {
        return []
      }
    },
    formRules: {
      /*弹框结构规则*/
      type: Object,
      default() {
        return {}
      }
    },
    showMessage: {
      /*显示校验信息*/
      type: Boolean,
      default: true
    },
    labelWidth: {
      /*表单项标签宽度*/
      type: Number,
      default: 160
    },
    contentWidth: {
      /*表单项内容宽度，默认70%*/
      type: String,
      default: '70%'
    },
    itemWidth: {
      /*表单项内容宽度,用于行内表单*/
      type: Number,
      default: 200
    },
    inline: {
      /*行内表单*/
      type: Boolean,
      default: false
    },
    showLongOkBt: {
      /*是否展示长确定按钮*/
      type: Boolean,
      default: false
    },
    longOkBtTxt: {
      /*长确定按钮内容*/
      type: String
    },
    showInlineOkBt: {
      /*是否展示行内短确定按钮*/
      type: Boolean,
      default: false
    },
    inlineOkBtTxt: {
      /*短确定按钮内容*/
      type: String
    },
    showInlineClearBt: {
      /*是否展示行内短清空按钮*/
      type: Boolean,
      default: false
    },
    inlineClearBtTxt: {
      /*短清空按钮内容*/
      type: String
    },
    disabled: {
      /*整表禁用，仅展示*/
      type: Boolean,
      default: false
    },
    btnLoading: {
      /*提交按钮显示loading*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      valGroup: {}, /*表单项值，对外公开，提交时传递到外层*/
      formDataT: [], /*表单结构数据*/
      tempKeys: {}, /*不对外暴露表单项值*/
      unwatchGroup: [],
      mgrUrl: window.g && window.g.mgrURL || null,
      selectInputKeys: [], /*selectInput的key没有写死在formData中（因为是动态的）,为了在showingKeys中能捕捉到这类组件的key,特声明此变量*/
      showLoading: false,
      formReRenderKey: Math.floor(Math.random() * 100000000 + 1000), /*刷新表单*/
      clientHeightR: 0,
      uploadUrl: window.g && window.g.mgrURL && window.g.mgrURL + '/fsc/file' ||
        '/file', /*上传组件的文件上传地址，远程上传（直接上传到服务器）时，如果没设置，则用该地址*/
      debounceCount: false
    }
  },
  computed: {
    formStyle() {
      if (this.inline) {
        return {
          width: (this.itemWidth + this.labelWidth) + 'px'
        }
      }
      return {}
    },
    itemStyle() {
      if (this.inline) {
        return {width: '100%'}
      }
      return {
        width: this.contentWidth
      }
    },
    formRulesT() { /*计算规则*/
      let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.formRules)
      for (let key in temp) {
        if (temp.hasOwnProperty(key)) {
          if (myTypeof(temp[key]) === 'Array') {
            for (let item of temp[key]) {
              if (!(item.message || item.validator)) {
                item.message = this.t('r.required')
              }
            }
          }
          else if (myTypeof(temp[key]) === 'Object') {
            if ((!temp[key].message || temp[key].validator)) {
              temp[key].message = this.t('r.required')
            }
          }
        }
      }
      return temp
    },
    showingKeys() { /*展示的key(需要提交的)*/
      let temp = []
      for (let item of this.formDataT) {
        if (item.showing === true && item.key && item.type !== 'selectInput') {
          temp.push(item.key)
          if (item.key2) {
            temp.push(item.key2)
          }
          if (item.collectLabel) {
            if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(item.collectLabel) && item.collectLabel.key) {
              temp.push(item.collectLabel.key)
            }
            else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(item.collectLabel)) {
              for (let labelItem of item.collectLabel) {
                if (labelItem.key) {
                  temp.push(labelItem.key)
                }
              }
            }
          }
        }
      }
      temp.push(...this.selectInputKeys)
      return temp
    }
  },
  created() {
    this.initValGroup()
    this.initFormDataT()
  },
  methods: {
    resetForm() { /*重置表单，会清空表单值并刷新表单dom，异步方法（公开）*/
      return new Promise((resolve) => {
        this.clearForm()
        this.refreshFormDom().then(() => {
          this.$emit('on-reset')
          resolve()
        })
      })
    },
    reRenderForm() { /*重新渲染表单，异步方法（公开）*/
      return new Promise(resolve => {
        for (let item of this.unwatchGroup) {
          item()
        }
        this.tempKeys = {}
        this.initValGroup()
        this.initFormDataT()
        
        this.refreshFormDom().then(() => {
          this.heightChange()
          this.$emit('on-re-render')
          resolve()
        })
      })
    },
    refreshFormDom() {/*刷新表单dom，异步方法（公开）*/
      return new Promise(resolve => {
        this.formReRenderKey = Math.floor(Math.random() * 100000000 + 1000)
        /*刷新表单*/
        this.$nextTick(function () {
          resolve()
        })
      })
    },
    clearForm() { /*清空表单值（私有，不推荐直接调用，可以调用resetForm）*/
      let defaultV = this.getDefaultValues()

      for (let key in this.valGroup) {
        if (this.valGroup.hasOwnProperty(key)) {
          if (isValidValue(defaultV[key])) {
            this.$set(this.valGroup, key, defaultV[key])
          }
          else {
            if (myTypeof(this.valGroup[key]) === 'Array') {
              this.$set(this.valGroup, key, [])
            }
            else if (myTypeof(this.valGroup[key]) === 'Boolean') {
              this.$set(this.valGroup, key, false)
            }
            else {
              const formItem = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(this.formData, [
                'key',
                key
              ])
              if (formItem && formItem.type === 'editor') {
                this.$set(this.valGroup, key, '')
              }
              else {
                this.$set(this.valGroup, key, null)
              }
            }
          }
        }
      }
      this.clearTempKeys(defaultV)
    },
    clearTempKeys(defaultV) { /*清空缓存表单值（私有，不推荐直接调用，可以调用resetForm）*/
      for (let key in this.tempKeys) {
        if (this.tempKeys.hasOwnProperty(key)) {
          if (isValidValue(defaultV[key])) {
            this.$set(this.tempKeys, key, defaultV[key])
          }
          else {
            if (myTypeof(this.tempKeys[key]) === 'Array') {
              this.$set(this.tempKeys, key, [])
            }
            else if (myTypeof(this.tempKeys[key]) === 'Object' && this.tempKeys[key].hasOwnProperty('key') &&
              this.tempKeys[key].hasOwnProperty('val')) {
              /*selectInput*/
              this.$set(this.tempKeys[key], 'val', null)
            }
            else {
              this.$set(this.tempKeys, key, null)
            }
          }
        }
      }
    },
    clearTempKeyItem(key) { /*清空缓存表单项值（私有）*/
      let defaultV = this.getDefaultValues()
      if (isValidValue(defaultV[key])) {
        this.$set(this.tempKeys, key, defaultV[key])
      }
      else {
        if (myTypeof(this.tempKeys) === 'Array') {
          this.tempKeys[key] = []
        }
        else {
          this.tempKeys[key] = null
        }
      }
    },
    getDefaultValues() {
      let temp = {}
      for (let e of this.formDataT) {
        if (e.tempKey && isValidValue(e.defaultVal)) {
          temp[e.tempKey] = e.defaultVal
        }
        if (e.key && isValidValue(e.defaultVal)) {
          temp[e.key] = e.defaultVal
        }
        if (e.key2 && isValidValue(e.defaultVal2)) {
          temp[e.key2] = e.defaultVal2
        }
      }
      return temp
    },
    getFormItemIfVal(item) { /*判断是否展示表单项（私有）*/
      if (item.show) {
        if (myTypeof(item.show) === 'Object') {
          return this.returnIfVal(item, this.dealIfItem(item.show))
        }
        else if (myTypeof(item.show) === 'Array') {
          if (item.showOr) {
            for (let itemX of item.show) {
              if (this.dealIfItem(itemX) === true) {
                return this.returnIfVal(item, true)
              }
            }
            return this.returnIfVal(item, false)
          }
          else {
            for (let itemX of item.show) {
              if (this.dealIfItem(itemX) === false) {
                return this.returnIfVal(item, false)
              }
            }
            return this.returnIfVal(item, true)
          }
        }
      }
      else {
        this.$set(item, 'showing', true)
        return true
      }
    },
    dealIfItem(item) { /*处理展示表单项逻辑（私有）*/
      if (myTypeof(item.val) === 'Array') {
        for (let val of item.val) {
          if ((this.valGroup[item.key] || this.valGroup[item.key] === 0 || this.valGroup[item.key] === false) &&
            val === '.') {/*只要控制项有值及展示*/
            return true
          }
          else if (this.valGroup[item.key] === val) {
            return true
          }
        }
        return false
      }
      else {
        return false
      }
    },
    returnIfVal(root, val) { /*处理表单项展示逻辑（私有）*/
      if (val && root.key) {
        if (root.defaultVal !== undefined) {/*对之前没展示且没值的表单项赋默认值*/
          if (root.tempKey) {
            if (this.tempKeys[root.tempKey] === null ||
              ((external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(this.tempKeys[root.tempKey]) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(this.tempKeys[root.tempKey])) &&
                external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(this.tempKeys[root.tempKey]))) {
              if (root.type === 'input' || root.type === 'inputNumber' || root.type === 'textarea' || root.type ===
                'select') {
                this.tempKeys[root.tempKey] = root.defaultVal
              }
              else if (root.type === 'inputMap') {
                this.tempKeys[root.tempKey] = {
                  lng: root.defaultVal,
                  lat: root.defaultVal2
                }
              }
              else if (root.type === 'date') {
                if (root.dateType === 'date' || root.dateType === 'datetime') {
                  this.tempKeys[root.tempKey] = root.defaultVal
                }
                else if (root.dateType === 'daterange' || root.dateType === 'datetimerange') {
                  this.tempKeys[root.tempKey] = item.defaultVal && item.defaultVal2 && [
                    root.defaultVal,
                    root.defaultVal2
                  ] || []
                }
              }
            }
          }
          else if (this.valGroup[root.key] === null) {
            this.$set(this.valGroup, root.key, root.defaultVal)
          }
          if (root.key2 && root.deafultVal2 !== undefined && this.valGroup[root.key2] === null && root.type !==
            'inputMap') {
            this.valGroup[root.key2] = root.defaultVal2
          }
        }
        if (root.tempKey) { /*在隐藏表单项展示时把它的值赋给统计对象*/
          this.tempKeysWatchHandle(this.tempKeys[root.tempKey], root)
        }
      }
      this.$set(root, 'showing', val)
      return val
    },
    initFormDataT() { /*初始化表单结构（私有）*/
      let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.formData)
      for (let item of temp) {
        switch (item.type) {
          case 'selectInput':
            const tempKeyF = 'selectInput' + Math.floor(Math.random() * 100000000)
            item.tempKey = tempKeyF
            this.$set(this.tempKeys, tempKeyF, {
              key: item.key || null,
              val: item.defaultVal || null
            })
            this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyF], after => {
              this.tempKeysWatchHandle(after, item)
            }, {immediate: true}))
            break
          case 'inputMap':
            const tempKeyE = 'inputMap' + Math.floor(Math.random() * 100000000)
            if (item.key) {
              item.tempKey = tempKeyE
              this.$set(this.tempKeys, tempKeyE, item.defaultVal !== undefined && item.defaultVal2 !== undefined ? {
                lng: item.defaultVal,
                lat: item.defaultVal2
              } : {
                lng: null,
                lat: null
              })
              this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyE], after => {
                this.tempKeysWatchHandle(after, item)
              }, {immediate: true}))
            }
            break
          case 'input':
          case 'inputNumber':
          case 'textarea':
            const tempKeyD = 'inputT' + Math.floor(Math.random() * 100000000)
            if (item.key) {
              item.tempKey = tempKeyD
              this.$set(this.tempKeys, tempKeyD, item.defaultVal !== undefined ? item.defaultVal : null)
              this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyD], after => {
                this.tempKeysWatchHandle(after, item)
              }, {immediate: true}))
            }
            break
          case 'select':
          case 'radioGroup':
          case 'checkboxGroup':
            if (!item.options) {
              item.options = []
            }
            if (item.asyncOption) { /*远程待选项*/
              if (item.changeOption) { /*待选项会根据条件改变*/
                if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(item.changeOption)) {
                  if (item.changeOption.valKey && item.changeOption.key) {
                    this.unwatchGroup.push(this.$watch(() => this.valGroup[item.changeOption.valKey], after => {
                      let tempVal = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.tempKeys[item.tempKey])
                      this.tempKeys[item.tempKey] = null
                      
                      if ((after || after === 0 || after === false) && item.optionUrl) {
                        let urlTA = item.optionUrl.indexOf('?') !== -1 ? item.optionUrl : item.optionUrl + '?'
                        this.initOption((urlTA + '&' + item.changeOption.key + '=' + after).replace(/\?&/, '?'), item,
                          tempVal)
                      }
                      else {
                        item.options = []
                        if (item.localOption) {
                          item.options = [...item.localOption]
                        }
                        if (isValidValue(tempVal)) {
                          this.recoverVal(tempVal, item)
                        }
                      }
                    }, {immediate: true}))
                  }
                }
                else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(item.changeOption)) {
                  let continueInitOp = true
                  for (let itemCO of item.changeOption) { /*检验changeOption参数是否可用*/
                    if ((!itemCO.valKey) || (!itemCO.key)) {
                      continueInitOp = false
                      break
                    }
                  }
                  if (continueInitOp) {
                    this.unwatchGroup.push(this.$watch(() => {
                      let tempParamUrl = ''
                      for (let itemCOT of item.changeOption) {
                        let valKeyTT = this.valGroup[itemCOT.valKey]
                        if (valKeyTT || valKeyTT === 0 || valKeyTT === false) {
                          /*如果条件有有效值，则拉取待选项*/
                          tempParamUrl += ('&' + itemCOT.key + '=' + valKeyTT)
                        }
                        else if (!itemCOT.notRequired) {
                          /*条件为必填（notRequired!==true,默认必填），且没有有效值，则不拉取待选项*/
                          return false
                        }
                      }
                      return tempParamUrl
                    }, after => {
                      let tempVal = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.tempKeys[item.tempKey])
                      this.tempKeys[item.tempKey] = null
                      
                      if (after && item.optionUrl) {
                        let urlTA = item.optionUrl.indexOf('?') !== -1 ? item.optionUrl : item.optionUrl + '?'
                        this.initOption((urlTA + after).replace(/\?&/, '?'), item, tempVal)
                      }
                      else {
                        item.options = []
                        if (item.localOption) {
                          item.options = [...item.localOption]
                        }
                        
                        if (isValidValue(tempVal)) {
                          this.recoverVal(tempVal, item)
                        }
                      }
                    }, {
                      immediate: true
                    }))
                  }
                  else {
                    item.options = []
                    if (item.localOption) {
                      item.options = [...item.localOption]
                    }
                  }
                }
                else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isBoolean(
                  item.changeOption)) {  /*设置changeOption为true时,当待选项地址改变后重新拉取待选项，在使用该表单组件的地方改变传入的formData对应项的optionUrl*/
                  this.unwatchGroup.push(this.$watch(() => this.formData[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.indexOf(temp, item)].optionUrl, after => {
                    let tempVal = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.tempKeys[item.tempKey])
                    this.tempKeys[item.tempKey] = null
                    
                    if (after) {
                      this.initOption(after, item, tempVal)
                    }
                    else {
                      item.options = []
                      if (item.localOption) {
                        item.options = [...item.localOption]
                      }
                      
                      if (isValidValue(tempVal)) {
                        this.recoverVal(tempVal, item)
                      }
                    }
                  }, {
                    immediate: true
                  }))
                }
              }
              else {
                this.initOption(item.optionUrl, item)
              }
            }
            else if (myTypeof(item.borrowOption) === 'String') {/*借用待选项*/
              item.options = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.find(temp, {key: item.borrowOption}).options
            }
            
            if (item.type !== 'checkboxGroup') {
              const tempKeyC = 'opEle' + Math.floor(Math.random() * 100000000)
              if (item.key) {
                item.tempKey = tempKeyC
                if (item.type === 'select' && item.multiple) {
                  this.$set(this.tempKeys, tempKeyC, item.defaultVal !== undefined ? item.defaultVal : [])
                }
                else if (item.booleanVal) {
                  this.$set(this.tempKeys, tempKeyC,
                    item.defaultVal !== undefined ? (Boolean(item.defaultVal) ? 1 : 0) : null)
                }
                else {
                  this.$set(this.tempKeys, tempKeyC, item.defaultVal !== undefined ? item.defaultVal : null)
                }
                
                this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyC], after => {
                  this.tempKeysWatchHandle(after, item)
                }, {
                  immediate: true
                }))
              }
            }
            break
          case 'date':
            const tempKeyB = 'date' + Math.floor(Math.random() * 100000000)
            item.tempKey = tempKeyB
            if (item.dateType === 'date' || item.dateType === 'datetime') {
              this.$set(this.tempKeys, tempKeyB, item.defaultVal || null)
            }
            else if (item.dateType === 'daterange' || item.dateType === 'datetimerange') {
              this.$set(this.tempKeys, tempKeyB, item.defaultVal && item.defaultVal2 && [
                item.defaultVal,
                item.defaultVal2
              ] || [])
            }
            this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyB], after => {
              this.tempKeysWatchHandle(after, item)
            }))
            break
        }
      }
      this.formDataT = temp
    },
    initOption(url, item, val) { /*初始化表单项的选项，如下拉选项，多选、单选组选项（私有）*/
      fetch.get(url)
        .then(r => {
          let tempOption
          if (r && r.data && r.data.records) {
            tempOption = r.data.records || []
          }
          else if (r && r.data) {
            tempOption = r.data || []
          }
          else if (r) {
            tempOption = r || []
          }
          else {
            tempOption = []
          }
          if (myTypeof(tempOption) === 'Array') {
            if (item.optionLabel && item.optionVal) {
              let opLabelType = myTypeof(item.optionLabel)
              item.options.length = 0
              item.options.push(...tempOption.map(tItem => {
                let opItemT = {}
                if (opLabelType === 'Array') {
                  let labelTT = ''
                  item.optionLabel.forEach((lVal, lIndexZ) => {
                    let lTT = String(tItem[lVal])
                    if (lIndexZ === 1) {
                      labelTT += ('（' + lTT)
                    }
                    else if (lIndexZ > 1) {
                      labelTT += ('、' + lTT)
                    }
                    else {
                      labelTT += lTT
                    }
                  })
                  opItemT = {
                    label: labelTT + '）',
                    val: tItem[item.optionVal]
                  }
                }
                else {
                  opItemT = {
                    label: tItem[item.optionLabel],
                    val: tItem[item.optionVal]
                  }
                }
                /*除了要收集绑定值，还要一并收集其他字段,则将其他字段加入到待选列表项*/
                if (item.collectLabel) {
                  if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(item.collectLabel)) {
                    if (item.collectLabel.valKey && item.collectLabel.valKey !== 'label') {
                      opItemT[item.collectLabel.valKey] = tItem[item.collectLabel.valKey]
                    }
                  }
                  else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(item.collectLabel)) {
                    for (let labelItem of item.collectLabel) {
                      if (labelItem.valKey && labelItem.valKey !== 'label') {
                        opItemT[labelItem.valKey] = tItem[labelItem.valKey]
                      }
                    }
                  }
                }
                if (opItemT.val !== null && opItemT.val !== undefined) {
                  return opItemT
                }
              }))
            }
            else {
              item.options.length = 0
              item.options.push(...tempOption)
            }
          }
          else {
            item.options.length = 0
          }
          if (item.localOption) {
            item.options.unshift(...item.localOption)
          }
          if (isValidValue(val)) {
            this.recoverVal(val, item)
          }

          /*待选项禁用*/
          if (item.disableOptionByOthers) {
            if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isString(item.disableOptionByOthers)) {
              this.unwatchGroup.push(this.$watch(() => {
                return this.valGroup[item.disableOptionByOthers]
              }, (after) => {
                this.clearTempKeyItem(item.tempKey)
                for (let iM of item.options) {
                  if (iM.disabled) {
                    this.$set(iM, 'disabled', false)
                  }
                }
                if (after || after === 0 || after === false) {
                  for (let iM of item.options) {
                    if (iM.val === after) {
                      this.$set(iM, 'disabled', true)
                    }
                  }
                }
              }, {
                immediate: true
              }))
            }
            else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(item.disableOptionByOthers)) {
              this.unwatchGroup.push(this.$watch(() => {
                let teKI = []
                for (let ikL of item.disableOptionByOthers) {
                  if (ikL) {
                    teKI.push(this.valGroup[ikL])
                  }
                }
                return teKI
              }, (after) => {
                this.clearTempKeyItem(item.tempKey)
                for (let IKL of item.options) {
                  if (IKL.disabled) {
                    this.$set(IKL, 'disabled', false)
                  }
                }
                if (after) {
                  for (let iM of item.options) {
                    for (let OPL = 0; OPL < after.length; OPL++) {
                      if (iM.val === after[OPL]) {
                        this.$set(iM, 'disabled', true)
                        after.splice(OPL, 1)
                        break
                      }
                    }
                  }
                }
              }, {
                immediate: true
              }))
            }
          }
        })
    },
    recoverVal(val, root) {/*如果待选项options中存在val,则为组件恢复之前因待选项改变而清除的值（私有）*/
      if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(root.options)) {
        if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.findIndex(root.options, {val: val}) !== -1) {
          this.tempKeys[root.tempKey] = val
        }
      }
    },
    initValGroup() { /*初始化表单项值（私有）*/
      this.valGroup = {}
      for (let item of this.formData) {
        if (item.key) {
          if (item.type === 'checkboxGroup' || (item.type === 'select' && item.multiple)) {
            this.$set(this.valGroup, item.key,
              item.defaultVal !== undefined && item.show === undefined ? item.defaultVal : [])
          }
          else if (item.type === 'editor') {
            this.$set(this.valGroup, item.key,
              item.defaultVal !== undefined && item.show === undefined ? item.defaultVal : '')
          }
          else {
            this.$set(this.valGroup, item.key,
              item.defaultVal !== undefined && item.show === undefined ? item.defaultVal : null)
            if (item.key2) {
              this.$set(this.valGroup, item.key2,
                item.defaultVal2 !== undefined && item.show === undefined ? item.defaultVal2 : null)
            }
          }
        }
      }
    },
    tempKeysWatchHandle(after, root) { /*将缓存表单值给统计对象（私有）*/
      if (root.showing) {
        switch (root.type) {
          case 'selectInput':
            if (after) {
              if (after.beforeKey) {
                delete this.valGroup[after.beforeKey]
              }
              this.valGroup[after.key] = after.val
            }
            break
          case 'inputMap':
            if (after) {
              this.valGroup[root.key] = after.lng
              this.valGroup[root.key2] = after.lat
            }
            else {
              this.valGroup[root.key] = null
              this.valGroup[root.key2] = null
            }
            break
          case 'input':
          case 'inputNumber':
          case 'textarea':
            if (after || after === 0) {
              let reg = /^-?\d+(.\d+)?$/
              if (root.numberVal && reg.test(after)) {
                this.valGroup[root.key] = Number(after)
              }
              else {
                this.valGroup[root.key] = after
              }
            }
            else {
              this.valGroup[root.key] = null
            }
            break
          case 'select':
          case 'radioGroup':
            if (root.booleanVal && (!root.multiple)) {
              this.valGroup[root.key] =
                ((after === undefined || after === '' || after === null) ? null : Boolean(after))
            }
            else if (root.multiple) {
              this.valGroup[root.key] = Object.assign([], after)
            }
            else {
              this.valGroup[root.key] = after
            }
            /*除了要收集绑定值，还要一并收集其他字段*/
            if (root.collectLabel) {
              if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isPlainObject(root.collectLabel)) {
                if (root.collectLabel.key && root.collectLabel.valKey) {
                  if (after || after === 0 || after === false) {
                    for (let opItem of root.options) {
                      if (opItem.val === after) {
                        this.$set(this.valGroup, root.collectLabel.key, opItem[root.collectLabel.valKey])
                        break
                      }
                    }
                  }
                  else {
                    this.valGroup[root.collectLabel.key] = null
                  }
                }
              }
              else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(root.collectLabel)) {
                for (let item of root.collectLabel) {
                  if (item.key && item.valKey) {
                    if (after || after === 0 || after === false) {
                      for (let opItem of root.options) {
                        if (opItem.val === after) {
                          this.$set(this.valGroup, item.key, opItem[item.valKey])
                          break
                        }
                      }
                    }
                    else {
                      this.valGroup[item.key] = null
                    }
                  }
                }
              }
            }
            break
          case 'date':
            const format = root.format || 'YYYY-MM-DD'
            const formatB = root.format || 'YYYY-MM-DD HH:mm:ss'
            if (root.dateType === 'date') {
              if (after) {
                this.valGroup[root.key] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after)
                  .format(format)
                if (root.addTime) {
                  this.valGroup[root.key] += ' 00:00:00'
                }
              }
              else {
                this.valGroup[root.key] = null
              }
            }
            else if (root.dateType === 'daterange') {
              if (after && after[0] && after[1]) {
                this.valGroup[root.key] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[0])
                  .format(format)
                this.valGroup[root.key2] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[1])
                  .format(format)
                if (root.addTime) {
                  this.valGroup[root.key] += ' 00:00:00'
                  this.valGroup[root.key2] += ' 23:59:59'
                }
              }
              else {
                this.valGroup[root.key] = null
                this.valGroup[root.key2] = null
              }
            }
            else if (root.dateType === 'datetime') {
              if (after) {
                this.valGroup[root.key] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after)
                  .format(formatB)
              }
              else {
                this.valGroup[root.key] = null
              }
            }
            else if (root.dateType === 'datetimerange') {
              if (after && after[0] && after[1]) {
                this.valGroup[root.key] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[0])
                  .format(formatB)
                this.valGroup[root.key2] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[1])
                  .format(formatB)
              }
              else {
                this.valGroup[root.key] = null
                this.valGroup[root.key2] = null
              }
            }
            break
        }
      }
    },
    setItemToValGroup(data, notClearOthers) { /*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示，公开）*/
      let temp = {}
      for (let key in this.valGroup) {
        if (this.valGroup.hasOwnProperty(key) && data[key] !== undefined) {
          temp[key] = data[key]
          delete data[key]
        }
      }
      this.updateValGroup(temp, notClearOthers)
      for (let kk in data) {  /*用Object.assign出错，只有第一次能正常合并*/
        if (data.hasOwnProperty(kk)) {
          this.$set(this.valGroup, kk, data[kk])
        }
      }
    },
    updateValGroup(data, notClearOthers) { /*更新表单项的值（只能更新已有字段，公开）*/
      this.updateTempKeys(data, notClearOthers)
      /*先更新tempKeys再更新valGroup 避免更新同key的tempKeys元素清空valGroup元素*/
      for (let key in this.valGroup) {
        if (this.valGroup.hasOwnProperty(key) && data[key] !== undefined && data[key] !== '--') {
          if (myTypeof(data[key]) === 'Array') {
            data[key] = data[key].filter(e => e !== '--')
          }
          else if (myTypeof(data[key]) === 'Object') {
            for (let keyN in data[key]) {
              if (data[key].hasOwnProperty(keyN) && data[key][keyN] === '--') {
                data[key][keyN] = null
              }
            }
          }
          this.valGroup[key] = data[key]
        }
        else if (!notClearOthers) {
          this.valGroup[key] = (myTypeof(this.valGroup[key]) === 'Array' ? [] : null)
        }
      }
    },
    updateTempKeys(data, notClearOthers) { /*更新未暴露表单项值（私有）*/
      for (let item of this.formDataT) {
        if ((notClearOthers && (data[item.key] !== undefined || data[item.key2] !== undefined) ||
          (!notClearOthers)) && (item.tempKey)) {
          switch (item.type) {
            case 'inputMap':
              if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(data[item.key]) && external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isNumber(data[item.key2])) {
                this.tempKeys[item.tempKey] = {
                  lng: data[item.key],
                  lat: data[item.key2]
                }
              }
              else {
                this.tempKeys[item.tempKey] = {
                  lng: null,
                  lat: null
                }
              }
              break
            case 'input':
            case 'inputNumber':
            case 'textarea':
              if (data[item.key] && data[item.key] !== '--' || data[item.key] === 0) {
                this.tempKeys[item.tempKey] = data[item.key]
              }
              else {
                this.tempKeys[item.tempKey] = null
              }
              break
            case 'select':
            case 'radioGroup':
              if (data[item.key] && data[item.key] !== '--' || data[item.key] === 0 || data[item.key] === false) {
                if (item.multiple) {
                  this.$set(this.tempKeys, item.tempKey, [...data[item.key]])
                }
                else if (item.booleanVal) {
                  this.$set(this.tempKeys, item.tempKey, Boolean(data[item.key]) ? 1 : 0)
                }
                else {
                  this.$set(this.tempKeys, item.tempKey, data[item.key])
                }
              }
              else {
                if (item.multiple) {
                  this.$set(this.tempKeys, item.tempKey, [])
                }
                else {
                  this.$set(this.tempKeys, item.tempKey, null)
                  
                }
              }
              break
            case 'date':
              if (item.dateType === 'date' || item.dateType === 'datetime') {
                this.tempKeys[item.tempKey] = data[item.key] && data[item.key] !== '--' ? data[item.key] : null
              }
              else if (item.dateType === 'daterange' || item.dateType === 'datetimerange') {
                this.tempKeys[item.tempKey] =
                  data[item.key] && data[item.key] !== '--' && data[item.key2] && data[item.key2] !== '--' && [
                    data[item.key],
                    data[item.key2]
                  ] || []
              }
              break
          }
        }
      }
    },
    updateFormDataT(data) { /*更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值（公开）*/
      if (myTypeof(data) === 'Array') {
        for (let item of data) {
          if ((item.index || item.index === 0) && item.key && item.val !== undefined) {
            this.$set(this.formDataT[item.index], item.key, item.val)
          }
        }
      }
      else if (myTypeof(data) === 'Object') {
        if ((data.index || data.index === 0) && data.key && data.val !== undefined) {
          this.$set(this.formDataT[data.index], data.key, data.val)
        }
      }
      this.heightChange()
    },
    reValidate(prop) { /*手动验证表单项（公开）*/
      timer_setTimeout(() => {
        this.$refs.formGroupXRef.validateField(prop, () => {
        })
      }, 1)
    },
    asyncLabelChange(label, root) { /*更新远程数据级联名称（私有）*/
      if (root.key2) {
        this.$set(this.valGroup, root.key2, label)
      }
      this.itemChange(label, root)
    },
    onSelectInputChange(data) { /*更新选择输入框值（私有）*/
      if (data.beforeKey) {
        external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.remove(this.selectInputKeys, o => o === data.beforeKey)
      }
      if (data.key) {
        if (this.selectInputKeys.indexOf(data.key) === -1) {
          this.selectInputKeys.push(data.key)
        }
        this.itemChange(null, data)
      }
    },
    alNameChange(name, root) { /*更新行政区域名称（私有）*/
      if (root.key2) {
        this.valGroup[root.key2] = name
      }
      this.itemChange(name, root)
    },
    reValidateAndChangeHandle(val, root) {
      this.itemChange(val, root)
      this.$nextTick(function () {
        this.$refs.formGroupXRef.validateField(root.key)
      })
    },
    heightChange() {/*私有*/
      this.$nextTick(function () {
        if (this.clientHeightR !== this.$el.clientHeight) {
          this.clientHeightR = this.$el.clientHeight
          this.$emit('on-height-change', this.clientHeightR)
        }
      })
    },
    itemChange(e, root) { /*表单项值更新（私有）*/
      timer_setTimeout(() => {
        let data = {
          event: e
        }
        if (root.key) {
          data[root.key] = this.valGroup[root.key]
        }
        if (root.key2) {
          data[root.key2] = this.valGroup[root.key2]
        }
        if (root.collectLabel && root.collectLabel.key) {
          data[root.collectLabel.key] = this.valGroup[root.collectLabel.key]
        }
        else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(root.collectLabel)) {
          for (let item of root.collectLabel) {
            data[item.key] = this.valGroup[item.key]
          }
        }
        this.$emit('on-item-change', data)
      }, 500)
      this.heightChange()
    },
    validate() {/*主动验证整个表单（公开）*/
      this.$refs.formGroupXRef.validate()
    },
    changeLoading(val) {/*主动改变表单按钮loading状态（在开启btnLoading的前提下，公开）*/
      if (val === undefined) {
        return
      }
      this.showLoading = Boolean(val)
    },
    submit() {/*触发提交事件（一般不需要调用，会通过插件内部提交按钮触发，公开）*/
      if (this.disabled) {
        return
      }
      this.$refs.formGroupXRef.validate(valid => {
        if (!this.debounceCount) {
          this.debounceCount = true
          if (valid) {
            this.showLoading = true

            /*需要提交的表单值*/
            let temp = {}
            for (let item of this.showingKeys) {
              temp[item] = this.valGroup[item]
            }
            this.$emit('on-submit', temp)
          }
          timer_setTimeout(() => {
            this.debounceCount = false
          }, 2000)
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./src/components/formR/formR.vue?vue&type=script&lang=js&
 /* harmony default export */ var formR_formRvue_type_script_lang_js_ = (formRvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/formR/formR.vue





/* normalize component */

var formR_component = normalizeComponent(
  formR_formRvue_type_script_lang_js_,
  formRvue_type_template_id_68518619_render,
  formRvue_type_template_id_68518619_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formR = (formR_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formModal/formModal.vue?vue&type=template&id=1b9ef1f8&
var formModalvue_type_template_id_1b9ef1f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{staticClass:"formModal",class:{hideFooter: _vm.hideFooter},attrs:{"title":_vm.title||_vm.t('r.title'),"mask-closable":false,"styles":{height:_vm.height+'px'},"footer-hide":_vm.hideFooter,"width":_vm.width},on:{"on-visible-change":_vm.handleVisibleChange},model:{value:(_vm.openModal),callback:function ($$v) {_vm.openModal=$$v},expression:"openModal"}},[_c('form-r',{ref:"formRRef",attrs:{"form-data":_vm.formData,"form-rules":_vm.formRules,"label-width":_vm.labelWidth,"content-width":_vm.contentWidth,"disabled":_vm.disabled,"btnLoading":_vm.btnLoading},on:{"on-height-change":_vm.setHeight,"on-reset":_vm.onReset,"on-re-render":_vm.onReRender,"on-item-change":_vm.onItemChange,"on-submit":_vm.onSubmit},scopedSlots:_vm._u([_vm._l((_vm.formData),function(item){return {key:item.slotName,fn:function(ref){
var valGroup = ref.valGroup;
return (item.type === 'custom')?[_vm._t(item.slotName,null,{"valGroup":valGroup})]:undefined}}})],null,true)}),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('Button',{staticClass:"modal-save-btn",attrs:{"loading":_vm.btnLoading&&_vm.showLoading},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.okBtTxt||_vm.t('r.confirm')))]),_c('Button',{staticClass:"modal-cancel-btn",on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.cancelBtTxt||_vm.t('r.cancel')))])],1)],1)}
var formModalvue_type_template_id_1b9ef1f8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/formModal/formModal.vue?vue&type=template&id=1b9ef1f8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formModal/formModal.vue?vue&type=script&lang=js&
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






/* harmony default export */ var formModalvue_type_script_lang_js_ = ({
  name: "formModal",
  mixins: [mixins_locale],
  components: {
    formR: formR
  },
  props: {
    title: {
      /*弹框标题*/
      type: String
    },
    formData: {
      /*弹框结构数据*/
      type: Array,
      default() {
        return []
      }
    },
    formRules: {
      /*弹框结构规则*/
      type: Object,
      default() {
        return {}
      }
    },
    width: {
      /*弹框宽度*/
      type: [
        Number,
        String
      ],
      default: 520
    },
    labelWidth: {
      /*表单项标签宽度*/
      type: Number,
      default: 140
    },
    contentWidth: {
      /*表单项内容宽度，默认70%*/
      type: String,
      default: '70%'
    },
    okBtTxt: {
      /*确定按钮内容*/
      type: String
    },
    cancelBtTxt: {
      /*取消按钮内容*/
      type: String
    },
    disabled: {
      /*整表禁用，仅展示*/
      type: Boolean,
      default: false
    },
    hideFooter: {
      /*隐藏底栏*/
      type: Boolean,
      default: false
    },
    btnLoading: {
      /*提交按钮显示loading*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openModal: false,
      formHeight: 200,
      showLoading: false,
      windowInnerH: window.innerHeight
    }
  },
  computed: {
    height() {
      let temp
      if (this.hideFooter) {
        temp = this.formHeight + 110
      }
      else {
        temp = this.formHeight + 170
      }
      if (this.windowInnerH && temp > this.windowInnerH - 200) {
        temp = this.windowInnerH - 200
      }
      return temp
    }
  },
  created() {
    let me = this

    /*给窗口绑定窗口尺寸改变获取尺寸的事件*/
    if (!window.onresizeGetHeight) {
      if (window.onresize) {
        let temp = window.onresize
        window.onresize = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.debounce(() => {
          temp()
          me.setInnerHeight()
          window.onresizeGetHeight = true
        }, 100)
      }
      else {
        window.onresize = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.debounce(() => {
          me.setInnerHeight()
          window.onresizeGetHeight = true
        }, 100)
      }
    }
  },
  mounted() {
    this.$nextTick(this.setInnerHeight)
  },
  methods: {
    setInnerHeight() {/*私有*/
      this.windowInnerH = window.innerHeight
    },
    getFormHeight() { /*获取表单高度，公开*/
      if (this.$refs.formRRef.$el.clientHeight < 30) {
        timer_setTimeout(() => {
          this.getFormHeight()
        }, 100)
      }
      else {
        timer_setTimeout(this.setHeight, 100)
      }
    },
    setHeight(height) {/*设置弹框内容区高度，公开*/
      let cHeight = this.$refs.formRRef.$el.clientHeight
      let temp = height && (height > cHeight ? height : cHeight) || cHeight
      this.formHeight = temp || 200
    },
    resetForm() { /*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
      return new Promise(resolve => {
        this.$refs.formRRef.resetForm()
          .then(() => {
            resolve()
          })
      })
    },
    refreshFormDom() {/*刷新表单dom，公开*/
      return new Promise(resolve => {
        this.$refs.formRRef.refreshFormDom()
          .then(() => {
            resolve()
          })
      })
    },
    reRenderForm() {/*重新渲染表单，异步方法（公开）*/
      return new Promise(resolve => {
        this.$refs.formRRef.reRenderForm()
          .then(() => {
            resolve()
          })
      })
    },
    clearForm() {/*清空表单值(私有，不推荐直接调用，可以调用resetForm)*/
      this.$refs.formRRef.clearForm()
    },
    setItemToValGroup(data, notClearOthers) { /*设置表单项的值（公开，可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示）*/
      this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
    },
    updateValGroup(data, notClearOthers) { /*更新表单项的值（公开，只能更新已有字段）*/
      this.$refs.formRRef.updateValGroup(data, notClearOthers)
    },
    updateFormDataT(data) { /*更新表单结构，例如设置或取消禁用，公开*/
      this.$refs.formRRef.updateFormDataT(data)
    },
    onItemChange(data) { /*表单项值改变，私有*/
      this.$emit('on-item-change', data)
    },
    onReset() {/*表单被重置，私有*/
      this.$emit('on-reset')
    },
    onReRender() {/*表单被重新渲染，私有*/
      this.$emit('on-re-render')
    },
    validate() {/*验证表单，公开*/
      this.$refs.formRRef.validate()
    },
    changeLoading(val) {/*改变弹框loading状态，私有*/
      if (val === undefined) {
        return
      }
      this.showLoading = Boolean(val)
      this.$refs.formRRef.changeLoading(this.showLoading)
    },
    onSubmit(data) { /*响应提交事件提交数据，私有*/
      this.showLoading = true

      this.$emit('on-submit', data)
    },
    submit() { /*触发提交事件，公开*/
      this.$refs.formRRef.submit()
    },
    open() { /*触发打开弹框事件，公开*/
      this.openModal = true
    },
    close() { /*触发关闭弹框事件，公开*/
      this.openModal = false
      timer_setTimeout(() => {
        this.showLoading = false
        this.$refs.formRRef.changeLoading(false)
      }, 1000)
    },
    handleVisibleChange(show) {/*弹框开关状况改变处理，私有*/
      if (!show) {
        this.$emit('on-close')
      }
      else {
        this.getFormHeight()
        this.$emit('on-open')
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/formModal/formModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var formModal_formModalvue_type_script_lang_js_ = (formModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/formModal/formModal.vue





/* normalize component */

var formModal_component = normalizeComponent(
  formModal_formModalvue_type_script_lang_js_,
  formModalvue_type_template_id_1b9ef1f8_render,
  formModalvue_type_template_id_1b9ef1f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formModal = (formModal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchForm/searchForm.vue?vue&type=template&id=16659556&
var searchFormvue_type_template_id_16659556_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('form-r',{ref:"formRRef",attrs:{"form-data":_vm.data,"form-rules":_vm.formRules,"label-width":84,"item-width":202,"inline":true,"show-long-ok-bt":false,"show-inline-ok-bt":true,"inline-ok-bt-txt":_vm.t('r.check'),"show-inline-clear-bt":_vm.showInlineClearBt,"show-message":false,"btnLoading":_vm.btnLoading},on:{"on-item-change":_vm.onItemChange,"on-reset":_vm.onReset,"on-re-render":_vm.onReRender,"on-submit":_vm.onSubmit},scopedSlots:_vm._u([_vm._l((_vm.data),function(item){return {key:item.slotName,fn:function(ref){
var valGroup = ref.valGroup;
return (item.type === 'custom')?[_vm._t(item.slotName,null,{"valGroup":valGroup})]:undefined}}})],null,true)})],1)}
var searchFormvue_type_template_id_16659556_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchForm/searchForm.vue?vue&type=template&id=16659556&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchForm/searchForm.vue?vue&type=script&lang=js&
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




/* harmony default export */ var searchFormvue_type_script_lang_js_ = ({
  name: "searchForm",
  mixins: [mixins_locale],
  components: {
    formR: formR
  },
  props: {
    data: {
      /*搜索表单结构数据*/
      type: Array,
      default() {
        return []
      }
    },
    formRules: {
      /*弹框结构规则*/
      type: Object,
      default() {
        return {}
      }
    },
    showInlineClearBt: {
      /*显示清空按钮*/
      type: Boolean,
      default: true
    },
    btnLoading: {
      /*提交按钮显示loading*/
      type: Boolean,
      default: false
    }
  },
  methods: {
    resetForm() { /*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
      return new Promise(resolve => {
        this.$refs.formRRef.resetForm()
          .then(() => {
            resolve()
          })
      })
    },
    refreshFormDom() {/*刷新表单dom，公开*/
      return new Promise(resolve => {
        this.$refs.formRRef.refreshFormDom()
          .then(() => {
            resolve()
          })
      })
    },
    reRenderForm() {/*重新渲染表单，异步方法（公开）*/
      return new Promise(resolve => {
        this.$refs.formRRef.reRenderForm()
          .then(() => {
            resolve()
          })
      })
    },
    clear() {/*私有，可使用resetForm代替*/
      this.$refs.formRRef.clearForm()
    },
    setItemToValGroup(data, notClearOthers) { /*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
      this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
    },
    updateValGroup(data, notClearOthers) { /*更新表单项的值（只能更新已有字段），公开*/
      this.$refs.formRRef.updateValGroup(data, notClearOthers)
    },
    updateFormDataT(data) { /*更新表单结构，例如设置或取消禁用，公开*/
      this.$refs.formRRef.updateFormDataT(data)
    },
    onItemChange(data) { /*表单项值改变，私有*/
      this.$emit('on-item-change', data)
    },
    onReset() {/*表单被重置，私有*/
      this.$emit('on-reset')
    },
    onReRender() {/*表单被重新渲染，私有*/
      this.$emit('on-re-render')
    },
    validate() {/*验证表单，公开*/
      this.$refs.formRRef.validate()
    },
    changeLoading(val) {/*改变弹框loading状态，私有*/
      this.$refs.formRRef.changeLoading(val === undefined ? false : val)
    },
    onSubmit(data) { /*响应提交事件提交数据，私有*/
      this.$emit('on-search', data)
    },
    submit() {/*触发提交事件，公开*/
      this.$refs.formRRef.submit()
    }
  }
});

// CONCATENATED MODULE: ./src/components/searchForm/searchForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var searchForm_searchFormvue_type_script_lang_js_ = (searchFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/searchForm/searchForm.vue





/* normalize component */

var searchForm_component = normalizeComponent(
  searchForm_searchFormvue_type_script_lang_js_,
  searchFormvue_type_template_id_16659556_render,
  searchFormvue_type_template_id_16659556_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var searchForm = (searchForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formGroup/formGroup.vue?vue&type=template&id=240d880f&
var formGroupvue_type_template_id_240d880f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"formGroupBoxVM",style:(_vm.formGroupStyle)},[_c('form-r',{ref:"formRRef",attrs:{"form-data":_vm.formData,"form-rules":_vm.formRules,"show-long-ok-bt":_vm.showLongOkBt,"long-ok-bt-txt":_vm.longOkBtTxt||_vm.t('r.confirm'),"disabled":_vm.disabled,"inline":_vm.inline,"label-width":_vm.labelWidth,"content-width":_vm.contentWidth,"item-width":_vm.itemWidth,"btnLoading":_vm.btnLoading},on:{"on-reset":_vm.onReset,"on-re-render":_vm.onReRender,"on-item-change":_vm.onItemChange,"on-submit":_vm.onSubmit},scopedSlots:_vm._u([_vm._l((_vm.formData),function(item){return {key:item.slotName,fn:function(ref){
var valGroup = ref.valGroup;
return (item.type === 'custom')?[_vm._t(item.slotName,null,{"valGroup":valGroup})]:undefined}}})],null,true)}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showOkBt||_vm.showCancelBt),expression:"showOkBt||showCancelBt"}],staticClass:"formFooterVM",style:({marginLeft:_vm.labelWidth+'px' })},[_c('div',{staticClass:"btnBoxKAL",style:({width:_vm.contentWidth})},[(_vm.showOkBt)?_c('Button',{staticClass:"form-save-btn",attrs:{"loading":_vm.btnLoading&&_vm.showLoading},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.okBtTxt||_vm.t('r.confirm')))]):_vm._e(),(_vm.showCancelBt)?_c('Button',{staticClass:"form-cancel-btn",on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.cancelBtTxt||_vm.t('r.cancel')))]):_vm._e()],1)])],1)}
var formGroupvue_type_template_id_240d880f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/formGroup/formGroup.vue?vue&type=template&id=240d880f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formGroup/formGroup.vue?vue&type=script&lang=js&
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





/* harmony default export */ var formGroupvue_type_script_lang_js_ = ({
  name: "formGroup",
  mixins: [mixins_locale],
  components: {
    formR: formR
  },
  props: {
    formData: {
      /*弹框结构数据*/
      type: Array,
      default() {
        return []
      }
    },
    formRules: {
      /*弹框结构规则*/
      type: Object,
      default() {
        return {}
      }
    },
    width: {
      /*表单组宽度*/
      type: String,
      default: '100%'
    },
    labelWidth: {
      /*表单项标签宽度*/
      type: Number,
      default: 160
    },
    contentWidth: {
      /*表单项内容宽度，默认70%*/
      type: String,
      default: '70%'
    },
    itemWidth: {
      /*表单项内容宽度,用于行内表单*/
      type: Number,
      default: 200
    },
    showOkBt: {
      /*是否展示确定按钮*/
      type: Boolean,
      default: true
    },
    showCancelBt: {
      /*是否展示取消按钮*/
      type: Boolean,
      default: true
    },
    showLongOkBt: {
      /*是否展示长确定按钮*/
      type: Boolean,
      default: false
    },
    longOkBtTxt: {
      /*长确定按钮内容*/
      type: String
    },
    okBtTxt: {
      /*确定按钮内容*/
      type: String
    },
    cancelBtTxt: {
      /*取消按钮内容*/
      type: String
    },
    disabled: {
      /*整表禁用，仅展示*/
      type: Boolean,
      default: false
    },
    inline: {
      /*行内表单，表单项横向排列（不单独成行）*/
      type: Boolean,
      default: false
    },
    btnLoading: {
      /*提交按钮显示loading*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formGroupStyle: {
        width: this.width
      },
      showLoading: false
    }
  },
  methods: {
    resetForm() { /*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
      return new Promise(resolve => {
        this.$refs.formRRef.resetForm()
          .then(() => {
            resolve()
          })
      })
    },
    refreshFormDom() {/*刷新表单dom，公开*/
      return new Promise(resolve => {
        this.$refs.formRRef.refreshFormDom()
          .then(() => {
            resolve()
          })
      })
    },
    reRenderForm() {/*重新渲染表单，异步方法（公开）*/
      return new Promise(resolve => {
        this.$refs.formRRef.reRenderForm()
          .then(() => {
            resolve()
          })
      })
    },
    clearForm() {/*私有，可用resetForm代替*/
      this.$refs.formRRef.clearForm()
    },
    setItemToValGroup(data, notClearOthers) { /*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
      this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
    },
    updateValGroup(data, notClearOthers) { /*更新表单项的值（只能更新已有字段），公开*/
      this.$refs.formRRef.updateValGroup(data, notClearOthers)
    },
    updateFormDataT(data) { /*更新表单结构，例如设置或取消禁用，公开*/
      this.$refs.formRRef.updateFormDataT(data)
    },
    onItemChange(data) { /*表单项值改变，私有*/
      this.$emit('on-item-change', data)
    },
    onReset() {/*表单被重置，私有*/
      this.$emit('on-reset')
    },
    onReRender() {/*表单被重新渲染，私有*/
      this.$emit('on-re-render')
    },
    validate() {/*验证表单，公开*/
      this.$refs.formRRef.validate()
    },
    changeLoading(val) {/*改变确定按钮loading状态，私有*/
      if (val === undefined) {
        return
      }
      this.showLoading = Boolean(val)
      this.$refs.formRRef.changeLoading(this.showLoading)
    },
    onSubmit(data) { /*响应提交事件提交数据，私有*/
      this.showLoading = true

      this.$emit('on-submit', data)
    },
    submit() { /*触发提交事件，公开*/
      this.$refs.formRRef.submit()
    },
    close() { /*触发取消按钮点击事件，公开*/
      this.$emit('on-cancel')
      timer_setTimeout(() => {
        this.showLoading = false
        this.$refs.formRRef.changeLoading(false)
      }, 1000)
    }
  }
});

// CONCATENATED MODULE: ./src/components/formGroup/formGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var formGroup_formGroupvue_type_script_lang_js_ = (formGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/formGroup/formGroup.vue





/* normalize component */

var formGroup_component = normalizeComponent(
  formGroup_formGroupvue_type_script_lang_js_,
  formGroupvue_type_template_id_240d880f_render,
  formGroupvue_type_template_id_240d880f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formGroup = (formGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/echarts/echart.vue?vue&type=template&id=70f6b74a&
var echartvue_type_template_id_70f6b74a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"echart-cont",style:({width:_vm.widthT,height:_vm.heightT}),attrs:{"id":_vm.name}})}
var echartvue_type_template_id_70f6b74a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/echarts/echart.vue?vue&type=template&id=70f6b74a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/echarts/echart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//




/* harmony default export */ var echartvue_type_script_lang_js_ = ({ //图表样式
  name: 'echart',
  mixins: [mixins_locale],
  props: {
    config: Object,   //图表配置，可以覆盖整个图表,
    theme: String,   //图表主题，不传默认为设计稿款式
    params: Object, //图表参数
    url: String,   //拉取数据的接口地址
    data: Object,     //图表默认数据，没有url请求可以展示静态数据
    initData: { //初始化数据，即组件创建后自动拉取第一次数据,默认不会
      type: Boolean,
      default: false
    },
    yAxis: {    //Y轴数据
      type: Object,
      default() {
        return {
          type: 'value'
        }
      }
    },
    xAxis: {     //X轴数据
      type: Object,
      default() {
        return {
          type: 'category'
        }
      }
    },
    tooltip: {   //提示框，鼠标悬浮交互时的信息提示
      type: Object,
      default() {
        return {}
      }
    },
    series: {    //you know
      type: Array,
      default() {
        return []
      }
    },
    name: {     //图表名称，必传
      type: String,
      default: ''
    },
    title: {     //图表标题
      type: String
    },
    titleColor: String,    //标题颜色
    titleFontSize: Number,  //标题字体大小
    titleFontWeight: [
      String,
      Number
    ], //标题字体粗细
    titleX: String, //标题的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
    titleY: String,    //标题的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
    subTitle: {  //图表副标题
      type: String,
      default: ''
    },
    subTitleColor: String, //副标题颜色
    subTitleFontSize: Number,  //副标题字体大小
    legendShow: {  //是否显示图例，默认为显示
      type: Boolean,
      default: true
    },
    legendType: String, //图例类型，'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用。
    legendColor: String,   //图例颜色
    legendFontSize: Number,   //图例字体大小
    legendX: String,  //图例的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
    legendY: String,   //图例的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
    legendOrient: String,   //图例朝向, horizontal -- 水平对齐，vertical -- 垂直对齐
    widthT: {     //you know
      type: String,
      default: '870px'
    },
    heightT: {    //you know
      type: String,
      default: '384px'
    }
  },

  data() {
    return {
      dataT: this.data || window.echartConfig && window.echartConfig.data,
      yAxisT: this.yAxis,
      xAxisT: this.xAxis,
      seriesT: this.series
    }
  },
  created() {
    //拉取数据
    if (this.initData) {
      this.getData()
        .then(res => {
          this.init(res)
        })
        .catch(error => {
          console.warn('代码报错啦~')
          console.warn(error)
        })
    }
  },
  watch: {
    config: {
      handler(after) {   //静态对象变更
        if (after) {
          this.init()
        }
      },
      deep: true,
    },
    data: {
      handler(after) {     //静态数据变更
        if (after) {
          this.dataT = after
          this.init()
        }
      },
      deep: true
    },
    series: {
      handler(after) {   //静态数据变更
        if (after) {
          this.seriesT = after
          this.init()
        }
      },
      deep: true
    },
    params: {
      handler(after) {   //接口参数变更
        if (after) {
          //拉取数据
          this.getData()
            .then(res => {
              this.init(res)
            })
            .catch(error => {
              console.warn('代码报错啦~')
              console.warn(error)
            })
        }
      },
      deep: true
    }
  },
  methods: {
    //数据拉取
    getData() {
      return new Promise((resolve, reject) => {
        if (this.url || window.echartConfig && window.echartConfig.url) {
          fetch.get(this.url || window.echartConfig && window.echartConfig.url,
            this.params || window.echartConfig && window.echartConfig.params)
            .then(r => {
              if (r.data || r.data === null) {
                if (r.data.charts || r.data.charts === null) {
                  this.dataT = r.data.charts || []
                }
                else {
                  this.dataT = r.data || []
                }
                //执行回调
                resolve(r)
              }
              else {
                console.warn('请求返回数据有误，无法使用')
              }
            })
            .catch(e => {
              console.warn(e)
            })
        }
        else if ((this.dataT && this.dataT.series) || (this.seriesT && this.seriesT.length > 0)) {
          //没有url，且没有window.echartConfig.url，且有静态数据也可以执行回调
          resolve()
        }
        else {
          console.warn('没有有效的请求地址，无法获取图表数据')
        }
      })
    }, //视图渲染
    init() {
      //实例化DOM元素
      let myChart = window.$echarts.init(document.getElementById(this.name),
        this.theme || window.echartConfig && window.echartConfig.theme)

      //事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
      let me = this
      //时间轴中的时间点改变后的事件，返回给父组件
      myChart.on('timelinechanged', function (res) {
        me.$emit('time-line-change', res.currentIndex)
      })
      myChart.on('click', 'series.bar', function (res) {
        me.$emit('series-bar-click', res)
      })

      // 指定图表的配置项和数据
      let option = {}
      if (this.config) {
        option = this.config
      }
      else {
        let settingT = window.echartConfig || {}
        option = {
          //标题
          title: {
            text: this.dataT.title ? this.dataT.title : (this.title || t('r.unknown')),
            textStyle: {
              color: this.dataT.titleColor || this.titleColor || settingT.titleColor,
              fontSize: this.dataT.titleFontSize || this.titleFontSize || settingT.titleFontSize,
              fontWeight: this.dataT.titleFontWeight || this.titleFontWeight || settingT.titleFontWeight
            },
            x: this.dataT.titleX || this.titleX || settingT.titleX,
            y: this.dataT.titleY || this.titleY || settingT.titleY,
            subtext: this.dataT.subTitle ? this.dataT.subTitle : this.subTitle,
            subtextStyle: {
              color: this.dataT.subTitleColor || this.subTitleColor || settingT.subTitleColor,
              fontSize: this.dataT.subTitleFontSize || this.subTitleFontSize || settingT.subTitleFontSize,
            }
          }, // 图例
          legend: {
            show: this.dataT.legendShow ? this.dataT.legendShow : this.legendShow,
            type: this.dataT.legendType || this.legendType || settingT.legendType,
            textStyle: {
              color: this.dataT.legendColor || this.legendColor || settingT.legendColor,
              fontSize: this.dataT.legendFontSize || this.legendFontSize || settingT.legendFontSize
            },
            x: this.dataT.legendX || this.legendX || settingT.legendX,
            y: this.dataT.legendY || this.legendY || settingT.legendY,
            orient: this.dataT.legendOrient || this.legendOrient || settingT.legendOrient
          }, // 提示框，鼠标悬浮交互时的信息提示
          tooltip: this.dataT.tooltip ? this.dataT.tooltip : this.tooltip, // 横轴坐标轴
          xAxis: this.dataT.xAxis ? this.dataT.xAxis : this.xAxisT, // 纵轴坐标轴
          yAxis: this.dataT.yAxis ? this.dataT.yAxis : this.yAxisT, //you know
          series: this.dataT.series ? this.dataT.series : this.seriesT
        }
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      //自适应样式
      if (window.echartResizeMJ === undefined) {
        window.echartResizeMJ = {}
      }
      if (!window.echartResizeMJ[me.name]) {
        let temp = window.onresize
        if (temp) {
          window.onresize = function () {
            temp()
            myChart.resize()
            window.echartResizeMJ[me.name] = true
          }
        }
        else {
          window.onresize = function () {
            myChart.resize()
            window.echartResizeMJ[me.name] = true
          }
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/echarts/echart.vue?vue&type=script&lang=js&
 /* harmony default export */ var echarts_echartvue_type_script_lang_js_ = (echartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/echarts/echart.vue





/* normalize component */

var echart_component = normalizeComponent(
  echarts_echartvue_type_script_lang_js_,
  echartvue_type_template_id_70f6b74a_render,
  echartvue_type_template_id_70f6b74a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var echart = (echart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/showHidePanelB/showHidePanelB.vue?vue&type=template&id=a1226430&
var showHidePanelBvue_type_template_id_a1226430_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.getBg)},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showX),expression:"showX"}],staticClass:"contentZ"},[_vm._t("default")],2)])}
var showHidePanelBvue_type_template_id_a1226430_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/showHidePanelB/showHidePanelB.vue?vue&type=template&id=a1226430&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/showHidePanelB/showHidePanelB.vue?vue&type=script&lang=js&
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

/* harmony default export */ var showHidePanelBvue_type_script_lang_js_ = ({
  name: "showHidePanelB",
  model: {
    prop: 'show',
    event: 'subVal'
  },
  props: {
    bg: {
      default: 'transparent'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showX: {
      get() {
        return this.show
      },
      set(val) {
        this.$emit('subVal', val)
      }
    },
    getBg() {
      if (this.showX) {
        return 'background:' + this.bg
      }
      else {
        return ''
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/showHidePanelB/showHidePanelB.vue?vue&type=script&lang=js&
 /* harmony default export */ var showHidePanelB_showHidePanelBvue_type_script_lang_js_ = (showHidePanelBvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/showHidePanelB/showHidePanelB.vue





/* normalize component */

var showHidePanelB_component = normalizeComponent(
  showHidePanelB_showHidePanelBvue_type_script_lang_js_,
  showHidePanelBvue_type_template_id_a1226430_render,
  showHidePanelBvue_type_template_id_a1226430_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var showHidePanelB = (showHidePanelB_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableSearch/tableSearch.vue?vue&type=template&id=7776d6b6&
var tableSearchvue_type_template_id_7776d6b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tableSearchV",style:({right:_vm.right,top:_vm.top})},[_vm._t("default",[_c('Input',{staticClass:"searchInputC",style:({width:_vm.width}),attrs:{"search":"","placeholder":_vm.placeholder||_vm.t('r.pInput')},on:{"on-search":_vm.onSearch},model:{value:(_vm.valueX),callback:function ($$v) {_vm.valueX=$$v},expression:"valueX"}})]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.showBtn),expression:"showBtn"}],staticClass:"sbt",style:({color:_vm.btnColor}),on:{"click":function($event){_vm.openX=!_vm.openX}}},[_c('icon',{attrs:{"type":_vm.iconL,"color":_vm.btnColor}}),_vm._v(_vm._s(_vm.t('r.adSearch')))],1)],2)}
var tableSearchvue_type_template_id_7776d6b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tableSearch/tableSearch.vue?vue&type=template&id=7776d6b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tableSearch/tableSearch.vue?vue&type=script&lang=js&
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
 * 高级查询插件
 * @desc 联合showHidePanelB、searchForm等插件对table进行查询
 * @author ricky email:zhangqingcq@foxmail.com
 * @date 2020.03.19
 * @param {string} value - 搜索框的值（v-model）必填
 * @param {boolean} open - 高级搜索是否开启 必填
 * @param {string} [placeholder] - 搜索框的placeholder
 * @param {string} [width] - 整个插件宽度
 * @param {string} [right] - 整个插件定位-右（最近relative）
 * @param {string} [top] - 整个插件定位-上（最近relative）
 * @example 调用示例 <table-search v-model="areaName" :open="openSearch" placeholder="片区名称" @on-search="search" @on-toggle="openSearch=!openSearch"/>
 */



/* harmony default export */ var tableSearchvue_type_script_lang_js_ = ({
  name: "tableSearch",
  mixins: [mixins_locale],
  model: {
    prop: 'value',
    event: 'subVal'
  },
  props: {
    value: {
      default: null
    },
    open: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    showBtn: {
      /*是否显示高级查询按钮*/
      type: Boolean,
      default: true
    },
    width: {
      /*输入框宽度*/
      default: '210px'
    },
    right: {
      default: '0'
    },
    top: {
      default: '0'
    },
    btnColor: {
      type: String,
      default: 'inherit'
    }
  },
  data() {
    return {
      debounceCount: false
    }
  },
  computed: {
    valueX: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('subVal', val)
      }
    },
    iconL() {
      return this.openX ? 'ios-arrow-up' : 'ios-arrow-down'
    },
    openX: {
      get() {
        return this.open
      },
      set(val) {
        this.$emit('on-toggle', val)
      }
    },
  },
  methods: {
    onSearch() {/*私有*/
      if (!this.debounceCount) {
        this.debounceCount = true
        this.$emit('on-search', this.valueX)
        timer_setTimeout(() => {
          this.debounceCount = false
        }, 2000)
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/tableSearch/tableSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var tableSearch_tableSearchvue_type_script_lang_js_ = (tableSearchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tableSearch/tableSearch.vue





/* normalize component */

var tableSearch_component = normalizeComponent(
  tableSearch_tableSearchvue_type_script_lang_js_,
  tableSearchvue_type_template_id_7776d6b6_render,
  tableSearchvue_type_template_id_7776d6b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableSearch = (tableSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c40e1a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/selectScrollMore/selectScrollMore.vue?vue&type=template&id=8d6e60f2&
var selectScrollMorevue_type_template_id_8d6e60f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Select',_vm._g(_vm._b({directives:[{name:"loadmore",rawName:"v-loadmore",value:(_vm.loadMore),expression:"loadMore"}],ref:"selectScrollSourceRef",attrs:{"transfer":"","filterable":"","placeholder":_vm.placeholderT,"disabled":_vm.disabled},model:{value:(_vm.valueT),callback:function ($$v) {_vm.valueT=$$v},expression:"valueT"}},'Select',_vm.$attrs,false),_vm.$listeners),_vm._l((_vm.options),function(item,index){return _c('Option',{key:'op'+index,attrs:{"value":item.value,"disabled":item.disabled}},[_vm._v(_vm._s(item.label))])}),1)}
var selectScrollMorevue_type_template_id_8d6e60f2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/selectScrollMore/selectScrollMore.vue?vue&type=template&id=8d6e60f2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/selectScrollMore/selectScrollMore.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//






/* harmony default export */ var selectScrollMorevue_type_script_lang_js_ = ({
  name: "selectScrollMore",
  mixins: [mixins_locale],
  model: {
    prop: 'value',
    event: 'sub-val'
  },
  props: {
    value: {
      /*插件值，支持双向绑定v-model*/
      type: [
        String,
        Number,
        Array
      ],
      default: null
    },
    url: {
      /*待选项接口地址，不带条件*/
      type: String,
      required: true
    },
    searchData: {
      /*待选项接口条件*/
      type: Object,
      default() {
        return {
          size: 10
        }
      }
    },
    getOptions: {
      /*是否拉取待选项,false:不拉取，并清空待选项和值*/
      type: Boolean,
      default: true
    },
    optionsLabelKey: {
      /*待选项label取接口数据中哪个字段*/
      type: [
        String,
        Array
      ],
      default: 'name'
    },
    optionsValKey: {
      /*待选项value取接口数据中哪个字段*/
      type: String,
      default: 'id'
    },
    searchKey: {
      /*搜索框的值在拉取待选项数据的条件中对应的key*/
      type: String,
      default: 'name'
    },
    collectLabel: {
      /*需要在选中时返回出value以外其他字段*/
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    disabled: {
      /*禁用*/
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current: 1,
      pages: 1,
      searchStr: null,
      options: [],
      historyData: {},
      isFresh: true,
      urlChanged: false
    }
  },
  computed: {
    placeholderT() {
      return this.searchStr ? this.t('r.searchFor') + this.searchStr : (this.placeholder || this.t('r.pInput'))
    },
    valueT: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('sub-val', val)
        if (this.collectLabel) {
          let temp = {}
          for (let e of this.options) {
            if (e[this.optionsValKey] === val) {
              temp = JSON.parse(JSON.stringify(e))
              break
            }
          }
          this.$emit('on-change', temp)
        }
      }
    },
    searchDataT() {
      return this.searchKey ? {
        ...this.searchData,
        current: this.current,
        [this.searchKey]: this.searchStr
      } : {
        ...this.searchData,
        current: this.current
      }
    }
  },
  mounted() {
    this.addInputEventListener()
  },
  watch: {
    getOptions: {
      handler(after) {
        if (after) {
          if (this.isFresh) {
            this.getData()
          }
        }
        else {
          this.reset()
        }
      },
      immediate: true
    },
    url(after) {
      if (after) {
        this.urlChanged = true
      }
    }
  },
  methods: {
    addInputEventListener() {
      const inputEl = this.$refs.selectScrollSourceRef.$children[0].$refs.input
      inputEl.addEventListener('keyup', this.getOption)
    },
    setQuery(val) {
      this.$refs.selectScrollSourceRef.$children[0].query = val
    },
    reset() {
      if (!this.isFresh) {
        this.valueT = null
        this.isFresh = true
        this.searchStr = null
        this.options = []
        this.current = 1
        this.pages = 1
        this.historyData = {}
        this.urlChanged = false
      }
    },
    isSelect(val) {
      for (let item of this.options) {
        if (item.label === val) {
          return true
        }
      }
      return false
    },
    getOption: external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.debounce(function (e) {
      const val = e.target.value
      if (!this.isSelect(val)) {
        if (isValidValue(val)) {
          if (this.urlChanged) {
            this.reset()
          }
          else {
            if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(this.historyData)) {
              this.historyData.current = this.current
              this.historyData.pages = this.pages
              this.historyData.options = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.options)
            }
            if (isValidValue(this.valueT)) {
              this.valueT = null
            }
          }
          this.searchStr = val
          this.options = []
          this.current = 1
          this.isFresh = true
          this.getData().then(() => {
            this.$nextTick(function () {
              this.setQuery(val)
            })
          }).catch(() => {
            this.$nextTick(function () {
              this.setQuery(val)
            })
          })
        }
        else {
          if (this.urlChanged) {
            this.reset()
            this.getData()
          }
          else {
            this.valueT = null
            this.searchStr = null
            if (this.historyData.current) {
              this.current = this.historyData.current
              this.pages = this.historyData.pages
              this.options = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(this.historyData.options)
              this.historyData = {}
            }
            else {
              this.getData()
            }
          }
        }
      }
    }, 600),
    loadMore() {
      if (this.urlChanged) {
        this.reset()
      }
      if (this.current < this.pages) {
        ++this.current
        this.$nextTick(function () {
          this.getData()
        })
      }
      else {
        this.$Message.warning({
          background: true,
          content: this.t('r.noMore')
        })
      }
    },
    getData() {
      return new Promise((resolve, reject) => {
        if (this.getOptions) {
          fetch.get(this.url, this.searchDataT)
            .then(r => {
              this.isFresh = false
              let temp = []
              if (r && r.data && r.data.records) {
                temp = r.data.records
                this.pages = r.data.pages
              }
              else if (r && r.data && myTypeof(r.data) === 'Array') {
                temp = r.data
                this.pages = r.pages
              }
              else if (r && r.data && myTypeof(r.data) === 'Object') {
                temp = [r.data]
                this.pages = 1
              }
              if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isEmpty(temp)) {
                temp = temp.map((e, i) => {
                  let label = this.t('r.optionLabel') + i
                  if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isArray(this.optionsLabelKey)) {
                    let labelT = []
                    for (let j = 1, len = this.optionsLabelKey.length; j < len; j++) {
                      labelT.push(e[this.optionsLabelKey[j]])
                    }
                    label = `${e[this.optionsLabelKey[0]]}(${String(labelT)})`
                  }
                  else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.isString(this.optionsLabelKey)) {
                    label = e[this.optionsLabelKey]
                  }
                  if (this.collectLabel) {
                    let eT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default.a.cloneDeep(e)
                    delete eT.value
                    delete eT.label
                    return {
                      value: e[this.optionsValKey],
                      label: label, ...eT
                    }
                  }
                  return {
                    value: e[this.optionsValKey],
                    label: label
                  }
                })
              }
              this.options.push(...temp)
              /*去重*/
              let hash = {}
              this.options = this.options.filter(e => {
                if (!hash[e.value]) {
                  hash[e.value] = true
                  return e
                }
              })
              this.$nextTick(function () {
                this.$emit('update-option-finish')
              })
              resolve(true)
            }).catch(() => {
            this.$Message.error(this.t('r.getDataError'))
            reject(this.t('r.getDataError'))
          })
        }
        else {
          resolve()
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./src/components/selectScrollMore/selectScrollMore.vue?vue&type=script&lang=js&
 /* harmony default export */ var selectScrollMore_selectScrollMorevue_type_script_lang_js_ = (selectScrollMorevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/selectScrollMore/selectScrollMore.vue





/* normalize component */

var selectScrollMore_component = normalizeComponent(
  selectScrollMore_selectScrollMorevue_type_script_lang_js_,
  selectScrollMorevue_type_template_id_8d6e60f2_render,
  selectScrollMorevue_type_template_id_8d6e60f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var selectScrollMore = (selectScrollMore_component.exports);
// CONCATENATED MODULE: ./src/methods/fullScreenImgPreview.js
/** created 2019.07.05
 *  @author ricky email:zhangqingcq@foxmail.com
 *  @param src - img src
 *  注意：不能全局调整Modal弹框尺寸，否则预览图片可能不居中，推荐使用另一个插件fullScreenImgByDom
 */




/* harmony default export */ var fullScreenImgPreview = (function (src) {
  const T = (...arg) => locale_t.apply(this, arg)
  const close = T('r.closePreview')
  const fullImg = T('r.fullImg')
  
  let id = 'previewImg' + Math.floor(Math.random() * 10000000)
  external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].info({
    closable: false,
    'transition-names': [
      'linear',
      'fade'
    ],
    render: (h) => {
      return h('div', {
        class: 'previewModal',
        attrs: {
          id: id
        }
      }, [
        h('div', {
          class: 'previewModalInner'
        }, [
          h('img', {
            attrs: {
              src: src,
              alt: fullImg
            }
          }),
          h('Icon', {
            props: {
              type: 'md-close',
              size: 20
            },
            domProps:{
              title: close
            },
            class: 'previewModalDelete',
            on: {
              click() {
                external_root_ViewUI_commonjs_view_design_commonjs2_view_design_amd_view_design_["Modal"].remove()
              }
            }
          })
        ])
      ])
    }
  })
  
  let ta = setTimeout(() => {
    const hideEl = document.getElementById(id).parentNode.parentNode.parentNode.parentNode
    const hideEl2 = document.getElementById(id).parentNode.nextSibling
    hideEl.style.height = '0'
    hideEl.style.padding = '0'
    hideEl2.style.display = 'none'
    clearTimeout(ta)
    ta = null
  }, 10)
});

// CONCATENATED MODULE: ./src/methods/swalConfirm.js
/**
 * created 2020.07.03
 * @author Ricky <zhangqingcq@foxmail.com>
 */



/* harmony default export */ var swalConfirm = (function (title, text, icon, onOk) {
  const T = (...arg) => locale_t.apply(this, arg)
  swal.call(this, {
    title: title || T('r.info.title'),
    text: text || T('r.info.text'),
    icon: icon || 'warning',
    onOk: onOk,
    buttons: [T('r.cancel')]
  })
});
// EXTERNAL MODULE: external {"root":"iviewArea","commonjs":"iview-area","commonjs2":"iview-area","amd":"iview-area"}
var external_root_iviewArea_commonjs_iview_area_commonjs2_iview_area_amd_iview_area_ = __webpack_require__("50ad");
var external_root_iviewArea_commonjs_iview_area_commonjs2_iview_area_amd_iview_area_default = /*#__PURE__*/__webpack_require__.n(external_root_iviewArea_commonjs_iview_area_commonjs2_iview_area_amd_iview_area_);

// EXTERNAL MODULE: external {"root":"JsonView","commonjs":"vue-json-viewer","commonjs2":"vue-json-viewer","amd":"vue-json-viewer"}
var external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_ = __webpack_require__("2364");
var external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_default = /*#__PURE__*/__webpack_require__.n(external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_);

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
  asyncCascader: asyncCascader,
  editor: editor,
  alCascaderMC: alCascaderMC,
  checkboxTree: checkboxTree,
  checkboxGroupTwoClass: checkboxGroupTwoClass,
  checkboxGroupThreeClass: checkboxGroupThreeClass,
  fullScreenPop: fullScreenPop,
  headerBt: headerBt,
  formR: formR,
  formModal: formModal,
  searchForm: searchForm,
  formGroup: formGroup,
  echart: echart,
  showHidePanelB: showHidePanelB,
  tableSearch: tableSearch,
  selectScrollMore: selectScrollMore
}

/*需要从插件中单独引入的方法（使用频率低）*/
const plugMethods = {
  fullScreenImgPreview: fullScreenImgPreview,
  toHump: toHump,
  htmlEncode: htmlEncode,
  htmlDecode: htmlDecode,
  getFileSrc: getFileSrc,
  getFileTypeByName: getFileTypeByName,
  isImgByFile: isImgByFile,
  getFileTypeIconByName: getFileTypeIconByName,
  downloadFileReaderFile: downloadFileReaderFile,
  fakeALinkClick: fakeALinkClick,
  findPath: findPath,
  getStringWidth: getStringWidth,
  emptyInput: emptyInput,
  stopBubbling: stopBubbling
}

/*挂在Vue原型对象上的方法*/
const methodsR = {
  $swal: swal,
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
  setValByOption: setValByOption,
  hasPermission: hasPermission,
  isNaN: functionGroup_isNaN,
  dataFilterOrToUrl: dataFilterOrToUrl,
  setTimeout: timer_setTimeout,
  setInterval: timer_setInterval,
  toLine: toLine,
  fileExport: fileExport,
  getColumnsKeys: getColumnsKeys,
  removeEmptyValue: removeEmptyValue,
  findCollection: findCollection
}

const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }
  locale.i18n(opts.i18n)
  fetch.init(opts.store)
  timer.init(opts.router)
  
  if (!Vue) {
    console.error('库安装失败，未获取到Vue对象')
    return
  }
  
  Vue.use(external_root_iviewArea_commonjs_iview_area_commonjs2_iview_area_amd_iview_area_default.a)
  Vue.use(external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_default.a)
  
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

/* harmony default export */ var src_0 = ({
  version: Object({"NODE_ENV":"production","BASE_URL":""}).VERSION,
  install: install, ...components, ...methodsR, ...plugMethods
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ })["default"];