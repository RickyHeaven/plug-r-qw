(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@wangeditor/editor"), require("@wangeditor/editor-for-vue"), require("vue-json-viewer"), require("@zhangqingcq/view-design-r"), require("vue"), require("vue-amap"), require("lodash"), require("ar-cascader"), require("axios"), require("echarts"), require("moment"), require("sweetalert"), require("wangeditor"), require("xss"));
	else if(typeof define === 'function' && define.amd)
		define(["@wangeditor/editor", "@wangeditor/editor-for-vue", "vue-json-viewer", "@zhangqingcq/view-design-r", "vue", "vue-amap", "lodash", "ar-cascader", "axios", "echarts", "moment", "sweetalert", "wangeditor", "xss"], factory);
	else if(typeof exports === 'object')
		exports["plugRQw"] = factory(require("@wangeditor/editor"), require("@wangeditor/editor-for-vue"), require("vue-json-viewer"), require("@zhangqingcq/view-design-r"), require("vue"), require("vue-amap"), require("lodash"), require("ar-cascader"), require("axios"), require("echarts"), require("moment"), require("sweetalert"), require("wangeditor"), require("xss"));
	else
		root["plugRQw"] = factory(root["@wangeditor/editor"], root["@wangeditor/editor-for-vue"], root["JsonView"], root["ViewUI"], root["Vue"], root["VueAMap"], root["_"], root["ar-cascader"], root["axios"], root["echarts"], root["moment"], root["swal"], root["wangEditor"], root["xss"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__466__, __WEBPACK_EXTERNAL_MODULE__308__, __WEBPACK_EXTERNAL_MODULE__909__, __WEBPACK_EXTERNAL_MODULE__650__, __WEBPACK_EXTERNAL_MODULE__154__, __WEBPACK_EXTERNAL_MODULE__113__, __WEBPACK_EXTERNAL_MODULE__450__, __WEBPACK_EXTERNAL_MODULE__518__, __WEBPACK_EXTERNAL_MODULE__490__, __WEBPACK_EXTERNAL_MODULE__574__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__177__, __WEBPACK_EXTERNAL_MODULE__470__, __WEBPACK_EXTERNAL_MODULE__298__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 466:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__466__;

/***/ }),

/***/ 308:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__308__;

/***/ }),

/***/ 909:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__909__;

/***/ }),

/***/ 650:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__650__;

/***/ }),

/***/ 154:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__154__;

/***/ }),

/***/ 113:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__113__;

/***/ }),

/***/ 450:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__450__;

/***/ }),

/***/ 518:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__518__;

/***/ }),

/***/ 490:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__490__;

/***/ }),

/***/ 574:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__574__;

/***/ }),

/***/ 6:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),

/***/ 177:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__177__;

/***/ }),

/***/ 470:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__470__;

/***/ }),

/***/ 298:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__298__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_less-loader@8.1.1_lodash@4._v73htomlhwfmnahgffiu7lhdt4/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/hello.vue?vue&type=template&id=4e2556e8
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('span',[_vm._v("Greetings from Ricky.")])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/hello.vue?vue&type=script&lang=js

	/* harmony default export */ var hellovue_type_script_lang_js = ({
		name: 'Hello'
	});

;// CONCATENATED MODULE: ./src/components/hello.vue?vue&type=script&lang=js
 /* harmony default export */ var components_hellovue_type_script_lang_js = (hellovue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/hello.vue





/* normalize component */
;
var component = normalizeComponent(
  components_hellovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var hello = (component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/btTablePage/btTablePage.vue?vue&type=template&id=0edab8bc
var btTablePagevue_type_template_id_0edab8bc_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"tableBox",staticClass:"btTablePage fullHeight flexColumnBox"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showTopRow),expression:"showTopRow"}],staticClass:"topBtn"},[_vm._t("tableSetting"),_vm._t("topMsg"),_vm._t("topBtnGroup")],2),_c('div',{staticClass:"tableContainer growFlexItem"},[_c('div',{staticClass:"fullHeight relativeBox"},[_c('div',{ref:"tableContainerLOI",staticClass:"fullFlowContent"},[_c('Table',_vm._g(_vm._b({ref:"TableXXX",class:{
						noBorderTable: _vm.noBorderTable,
						fullHeightTable: !_vm.fixedTable,
						lightHeadO: _vm.lightHead
					},attrs:{"height":(_vm.fixedTable && _vm.tableContainerHeight) || null,"columns":_vm.columnsT,"data":_vm.dataS,"highlight-row":_vm.radio || _vm.highlightRow},on:{"on-select":_vm.onSelect,"on-selection-change":_vm.selectionHandle,"on-sort-change":_vm.onSortChange,"on-row-click":_vm.onRowClick}},'Table',_vm.$attrs,false),_vm.$listeners))],1)])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.noPage),expression:"!noPage"}],staticClass:"pageContainer"},[(_vm.usePagePro)?_c('page-pro',{attrs:{"modelValue":_vm.current,"total":_vm.total,"page-size":_vm.pageSizeT,"page-size-opts":_vm.pageSizes,"size":_vm.pageComponentSize},on:{"on-change":_vm.changePage,"on-page-size-change":_vm.pageSizeChange}}):_c('Page',{attrs:{"current":_vm.current,"total":_vm.total,"page-size":_vm.pageSizeT,"page-size-opts":_vm.pageSizes,"show-sizer":"","show-total":"","showElevator":!_vm.noElevator,"size":_vm.pageComponentSize},on:{"update:current":function($event){_vm.current=$event},"on-change":_vm.changePage,"on-page-size-change":_vm.pageSizeChange}})],1)])
}
var btTablePagevue_type_template_id_0edab8bc_staticRenderFns = []


// EXTERNAL MODULE: external {"root":"_","commonjs":"lodash","commonjs2":"lodash","amd":"lodash"}
var external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_ = __webpack_require__(450);
var external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default = /*#__PURE__*/__webpack_require__.n(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_);
// EXTERNAL MODULE: external {"root":"swal","commonjs":"sweetalert","commonjs2":"sweetalert","amd":"sweetalert"}
var external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_ = __webpack_require__(177);
var external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_);
;// CONCATENATED MODULE: ./src/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
	r: {
		locale: 'zh-CN',
		testMsg: '测试国际化',
		confirm: '确定',
		save: '保存',
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
		selectTime: '选择时间',
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
		getDataError: '拉取数据出错',
		add: '添加',
		remove: '移除',
		addAll: '全部添加',
		removeAll: '全部移除',
		added: '已添加',
		notAdded: '未添加',
		success: '成功',
		failed: '失败',
		error: '出错',
		pageNotFound: '页面没找到',
		notFoundMsg: '您访问的页面不存在，点击下面按钮返回上一个页面。',
		hideMenu: '隐藏菜单',
		showMenu: '显示菜单',
		print: '打印',
		close: '关闭',
		help: '帮助',
		printGuide: {
			1: '鼠标停留在表头列右边框，出现拖动图标，按下鼠标拖动可设置列宽。',
			2: '点击“列表显示设置”，可选择需要打印的列，选择完需点击“确定”按钮。',
			3: '页面有A4灰色参考线，将打印内容右边缘调至参考线区间，打印机默认设置时可将表格内容铺满A4纸，表格越宽字体将越小。',
			4: '将此页面地址复制到浏览器地址栏，打开的页面将不可用。',
			5: '未到此线内容将无法铺满纸张',
			6: '超过此线打印内容将不完整',
			7: 'A4 纵向参考线',
			8: 'A4 横向参考线',
			9: '复制的页面无法使用该打印功能。',
			10: '鼠标停留在打印内容顶部矩形条右边框，出现拖动图标，按下鼠标拖动可设置打印内容宽度。'
		},
		page: '条/页',
		notSave:'您未保存，是否保存？'
	}
});

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(154);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);
;// CONCATENATED MODULE: ./node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
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

;// CONCATENATED MODULE: ./src/locale/format.js
/**
 * t('XXX',...arg)
 *  去掉XXX中双花括号，或替换%{XXX}为arg[XXX]，arg为t('XXX',...arg)中arg
 *  如果XXX没有花括号，则返回XXX本身
 */

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

function hasOwn(obj, key) {
	return Object.prototype.hasOwnProperty.call(obj, key)
}

/* harmony default export */ function format(string, ...args) {
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
		} else {
			result = hasOwn(args, i) ? args[i] : null
			if (result === null || result === undefined) {
				return ''
			}

			return result
		}
	})
}

;// CONCATENATED MODULE: ./src/locale/index.js
/**
 * @description 国际化
 * @author ricky zhangqingcq@foxmail.com
 * @created 2020.10.14
 */






let lang = zh_CN
let merged = false
let i18nHandler = function () {
	//如果vue原型上有$t方法，用该方法进行国际化翻译
	const vuei18n = Object.getPrototypeOf(this || (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default())).$t
	if (typeof vuei18n === 'function' && !!(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default()).locale) {
		if (!merged) {
			merged = true
			external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default().locale((external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default()).config.lang, es(lang, external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default().locale((external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default()).config.lang) || {}, { clone: true }))
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
			return format(value, options)
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

;// CONCATENATED MODULE: ./src/utils/swal.js
/**
 * created 2019.06.27
 * @author Ricky <zhangqingcq@foxmail.com>
 */





/**
 * @param {object|string} option  1.object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error or
 *   warning)'};2.string:'标题'
 * @param {string} [text] 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param {string} [icon] 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'|'error'|'warning'
 * @param {boolean} closeOnClickOutside 点击外部关闭，默认：true
 */
/* harmony default export */ function swal(option, text, icon, closeOnClickOutside = true) {
	const T = (...arg) => locale_t.apply(this, arg)

	return new Promise((r, j) => {
		switch (myTypeof(option)) {
			case 'Object':
				let okTxt = T('r.confirm')
				let cancelTxt = T('r.cancel')
				let cancelVisible = false
				let okClass = 'swalConfirmBt'
				let cancelClass = 'swalCancelBt'
				const reg = /^HTML.*Element$/
				option.type && (option.icon = option.type) && delete option.type
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
				option.closeOnClickOutside = option.closeOnClickOutside ?? true
				external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default()(option)
					.then((res) => {
						if (res && myTypeof(option.onOk) === 'Function') {
							option.onOk()
						}
						r(res)
					})
					.catch((err) => {
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
							className: 'swalConfirmBt',
							closeModal: true
						}
					},
					className: 'swalBoxX',
					closeOnClickOutside: closeOnClickOutside
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
					.then((res) => {
						r(res)
					})
					.catch((err) => {
						j(err)
					})
				break
			case 'Boolean':
				if (option === false) {
					external_root_swal_commonjs_sweetalert_commonjs2_sweetalert_amd_sweetalert_default().close()
				}
				break
			default:
				throw new TypeError('swal第一个参数类型有误，仅支持Object/String/false')
		}
	})
}

;// CONCATENATED MODULE: ./src/utils/functionGroup.js
/**
 * @description 公共方法集合
 * @author ricky zhangqingcq@foxmail.com
 * @created 2020.06.16
 */




//判断变量类型
function myTypeof(v) {
	let str = Object.prototype.toString.call(v)
	return str.replace(/\[object |]/g, '')
}

// 下划线转换驼峰
function toHump(name) {
	return name.replace(/_(\w)/g, function (all, letter) {
		return letter.toUpperCase()
	})
}

// 驼峰转换下划线
function toLine(name) {
	return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}

/**
 * 去掉对象属性前后空格
 */
function trimObj(obj) {
	let p = myTypeof(obj)
	if (p === 'Object') {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let o = myTypeof(obj[key])
				if (o === 'String') {
					obj[key] = obj[key].trim()
				} else if (o === 'Object' || o === 'Array') {
					trimObj(obj[key])
				}
			}
		}
	} else if (p === 'Array') {
		for (let i = 0, l = obj.length; i < l; i++) {
			let t = myTypeof(obj[i])
			if (t === 'String') {
				obj[i] = obj[i].trim()
			} else if (t === 'Array' || t === 'Object') {
				trimObj(obj[i])
			}
		}
	}
	return obj
}

/**
 * 清空集合
 * @param {T} val 被清空的集合
 * @param {Array.<string>} ignoreList 不需要清理的字段集合
 * @return {T}
 */
function clearObj(val, ignoreList = []) {
	if (myTypeof(val) === 'Array') {
		val.forEach((item, index) => {
			switch (myTypeof(item)) {
				case 'Array':
				case 'Object':
					clearObj(item)
					break
				default:
					val[index] = null
			}
		})
		return val
	} else if (myTypeof(val) === 'Object') {
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
						case 'Array':
						case 'Object':
							clearObj(val[key])
							break
						default:
							val[key] = null
					}
				}
			}
		}
		return val
	} else {
		return val
	}
}

/*用浏览器内部转换器实现html转码*/
function htmlEncode(text) {
	//1.首先动态创建一个容器标签元素，如DIV
	let temp = document.createElement('div')
	//2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
	temp.textContent !== undefined ? (temp.textContent = text) : (temp.innerText = text)
	//3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
	let output = temp.innerHTML
	temp = null
	return output
}

/*用浏览器内部转换器实现html解码*/
function htmlDecode(html) {
	//1.首先动态创建一个容器标签元素，如DIV
	let temp = document.createElement('div')
	//2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
	temp.innerHTML = html
	//3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
	let output = temp.innerText || temp.textContent
	temp = null
	return output
}

/*根据file文件对象获取文件地址用来预览*/
function getFileSrc(file) {
	return new Promise((resolve) => {
		let reader = new FileReader()
		reader.readAsDataURL(file) // 读出 base64
		reader.onloadend = () => {
			resolve(reader.result)
		}
	})
}

/*获取后缀名*/
function getFileTypeByName(name) {
	return name?.split('.').pop().toLocaleLowerCase() || ''
}

/*判断是否为图片（type是否包含‘image’）*/
function isImgByFile(type) {
	return myTypeof(type) === 'String' && type.indexOf('image') > -1
}

/*根据文件名获取图标（上传组件用）*/
function getFileTypeIconByName(name) {
	const format = getFileTypeByName(name)
	let type = 'ios-document-outline'

	if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
		type = 'ios-image'
	} else if (['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'].indexOf(format) > -1) {
		type = 'ios-film'
	} else if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
		type = 'ios-musical-notes'
	} else if (['doc', 'txt', 'docx', 'pages', 'epub', 'pdf'].indexOf(format) > -1) {
		type = 'md-document'
	} else if (['numbers', 'csv', 'xls', 'xlsx'].indexOf(format) > -1) {
		type = 'ios-stats'
	} else if (['keynote', 'ppt', 'pptx'].indexOf(format) > -1) {
		type = 'ios-videocam'
	}

	return type
}

/*下载一个文件（替换容易被浏览器屏蔽的window.open方法）*/
function downloadFileReaderFile(name, href) {
	let saveLink = document.createElement('a')
	saveLink.href = href
	saveLink.download = name
	fakeALinkClick(saveLink)
}

/*模拟被点击（比如模拟用户点击链接下载东西）*/
function fakeALinkClick(obj) {
	let ev = document.createEvent('MouseEvents')
	ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
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
 *          condition: e=>e?.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
function findPath({ group, condition, pathKey, childKey = 'children', path = [] }) {
	if (group && external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isObject(group)) {
		if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isFunction(condition)) {
			if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(group)) {
				let item = group
				let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(path)
				if (condition(item)) {
					if (pathKey && item[pathKey]) {
						temp.push(item[pathKey])
					}
					return temp
				} else if (item[childKey] && !external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(item[childKey])) {
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
					if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(rr)) {
						return rr
					}
				}
			} else if (Array.isArray(group)) {
				for (let item of group) {
					let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(path)
					if (condition(item)) {
						if (pathKey && item[pathKey]) {
							temp.push(item[pathKey])
						} else {
							temp.push(group.indexOf(item))
						}
						return temp
					} else if (item[childKey] && item[childKey].length > 0) {
						if (pathKey && item[pathKey]) {
							temp.push(item[pathKey])
						} else {
							temp.push(group.indexOf(item))
						}
						let rr = findPath({
							group: item[childKey],
							condition: condition,
							pathKey: pathKey,
							childKey: childKey,
							path: temp
						})
						if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(rr)) {
							return rr
						}
					}
				}
			}
		} else if (Array.isArray(group)) {
			//条件为常量，集合为数组，这种情况只会有一种业务场景：在一维数组中查找某个常量在数组中第一次出现的index
			for (let item of group) {
				let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(path)
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
 * @param {Array|Object} group 被查找的集合
 * @param {Function|String|Number|Boolean|null|undefined} condition 查找的条件或值
 * @param {Boolean} getPath 是否返回路径，默认为：false，返回找到的元素
 * @returns {*}
 */
function findCollection(group, condition, getPath = false) {
	if (!group || !condition) {
		return false
	}
	const isFunc = myTypeof(condition) === 'Function'
	let PATH
	let target = 'notFoundC'
	let deepSearch = function (group, condition) {
		if (myTypeof(group) === 'Array') {
			if (isFunc && condition(group)) {
				target = group
				return []
			}
			for (let e of group) {
				if (target !== 'notFoundC') {
					break
				}
				if ((isFunc && condition(e)) || e === condition) {
					target = e
					return [group.indexOf(e)]
				} else if (myTypeof(e) === 'Array' || myTypeof(e) === 'Object') {
					let r = deepSearch(e, condition)
					if (r !== undefined) {
						return [group.indexOf(e), ...r]
					}
				}
			}
		} else if (myTypeof(group) === 'Object') {
			if (isFunc && condition(group)) {
				target = group
				return []
			}
			for (let key in group) {
				if (target !== 'notFoundC') {
					break
				}
				if (group.hasOwnProperty(key)) {
					if ((isFunc && condition(key)) || group[key] === condition) {
						target = group[key]
						return [key]
					} else if (myTypeof(group[key]) === 'Object' || myTypeof(group[key]) === 'Array') {
						let r = deepSearch(group[key], condition)
						if (r !== undefined) {
							return [key, ...r]
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
	for (let i = 0, l = validList.length; i < l; i++) {
		if (value === validList[i]) {
			return true
		}
	}
	return false
}

/**
 * 小数位数限制，超出会返回被去掉后的值
 * @param val 原来的值
 * @param num 小数点后的位数，默认：2
 * @return {number|*}
 */
function decimalDigitsLimit(val, num = 2) {
	let expStr = new RegExp(`(^-?\\d+\\.\\d{${num}})(\\d+$)`)
	let valStr = (val && String(val)) || ''
	if (expStr.test(valStr)) {
		return Number(valStr.replace(expStr, '$1'))
	}
	return val
}

/*文件导出，调用后端接口以form表单提交数据下载文件*/
function downloadFileByFormSubmit(url, data = {}, method = 'get') {
	let form = document.createElement('form')
	let body = document.getElementsByTagName('body')[0]
	body.appendChild(form)
	form.setAttribute('style', 'display:none')
	form.setAttribute('target', '')
	form.setAttribute('method', method)
	let _url = url
	if (window?.g) {
		/*所有特定缩写字母开头的地址，都会被改变加上config.js（public里的全局配置文件，在index.html引入，在打包后通过更改该文件用于不
     同环境的部署）里配置的地址变成绝对地址，如:
     config.js里配置了 window.g={mgrURL:'http://mgr.myweb.com'}
     请求地址 ‘/mgr/file’ 会被改变为 'http://mgr.myweb.com/file'
     */
		let httpEnv = Object.keys(window.g)
			.filter((e) => e?.indexOf('URL') > -1)
			.map((e) => e?.replace('URL', ''))

		for (let item of httpEnv) {
			let regExp = new RegExp('^/' + item + '(?=/.*$)', 'i')
			if (regExp.test(url) && window.g[item + 'URL']) {
				_url = window.g[item + 'URL'] + url.replace(regExp, '')
				break
			}
		}
	}
	form.setAttribute('action', _url)

	if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(data)) {
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
	} else {
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
	if (
		data.hasOwnProperty('columns') &&
		(data['columns'] === '' || data['columns'] === null || data['columns'] === undefined)
	) {
		swal.call(this, {
			title: '需要导出的列不能为空',
			type: 'warning'
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
			temp = columns.filter((e) => e?.key && names.indexOf(e?.title) !== -1).map((e) => e?.key)
		} else {
			temp = columns.map((e) => e?.key)
		}
	} else {
		temp = []
	}
	if (!returnArray) {
		temp = String(temp)
	}
	return temp
}

/**
 * 判断一个值是否为有效值，有效值：不为空即为有效
 * @param val 需要判断的值
 * @returns {boolean}
 */
function isValidValue(val) {
	return val !== undefined && val !== null && val !== ''
}

function isNumberValue(val) {
	const reg = /^-?\d+(.\d+)?$/
	return reg.test(val)
}

/**
 * 手动tooltip(table 的 column 的tooltip失效的情况下用)
 * @param {String/Array/Function} contentKey 要设置tooltip的column的key或者key组成的数组（内容按数组中key对应的内容先后拼接），
 * 或获取值的自定义逻辑（Function回调，会传入params）
 * @param {boolean} dash 在内容为空时是否以'--'代替显示
 * @param {String} jointMark 在内容为多个字段拼接时，各字段间连接符，默认没有
 * @returns {function(...[*]=)}
 */
function tooltipManual(contentKey, dash = false, jointMark = '') {
	return function (h, params) {
		let content
		if (myTypeof(contentKey) === 'Array') {
			let temp = []
			for (let item of contentKey) {
				if (isValidValue(params.row[item])) {
					temp.push(params.row[item])
				}
			}
			content = temp.join(jointMark)
		} else if (myTypeof(contentKey) === 'Function') {
			content = contentKey(params)
		} else {
			content = params.row[contentKey]
		}
		let contentWidth = getStringWidth(content)
		let tdWidth = params.column._width
		if (content && contentWidth > tdWidth) {
			return h(
				'Tooltip',
				{
					style: {
						width: '100%'
					},
					props: {
						content: content,
						maxWidth: tdWidth * 2
					}
				},
				[
					h(
						'span',
						{
							style: {
								width: '100%',
								display: 'inline-block',
								'text-overflow': 'ellipsis',
								'white-space': 'nowrap',
								overflow: 'hidden',
								'vertical-align': 'top'
							}
						},
						content
					)
				]
			)
		}
		return h('span', dash && !isValidValue(content) ? '--' : content)
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

/*判断集合（数组或对象）每个元素或单个变量是否是有效值*/
function isEmptyValue(data) {
	if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(data)) {
		for (let key in data) {
			if (data.hasOwnProperty(key) && isValidValue(data[key])) {
				return false
			}
		}
		return true
	} else if (Array.isArray(data)) {
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
		return str.replace(/[^\x00-\xff]/g, '01').length
	} else if (myTypeof(str) === 'Number') {
		str += ''
		return str.replace(/[^\x00-\xff]/g, '01').length
	}
	return 0
}

/**
 * 按条件设置集合中指定字段的值
 * @param {Array} group 目标集合
 * @param {Function} condition 匹配条件
 * @param {String} key 要设置的字段键名
 * @param val 要设置的字段的值，或处理逻辑
 * @param {String} childKey 子集键名
 */
function setValByOption({ group, condition, key, val, childKey = 'children' }) {
	if (
		myTypeof(group) !== 'Array' ||
		myTypeof(condition) !== 'Function' ||
		myTypeof(key) !== 'String' ||
		myTypeof(childKey) !== 'String'
	) {
		return false
	}
	group.forEach((item) => {
		if (condition(item)) {
			if (myTypeof(val) === 'Function') {
				item[key] = val(item[key])
			} else {
				item[key] = val
			}
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
	let btnPermissions = sessionStorage.getItem('btnPermissions')
	if (btnPermissions) {
		return btnPermissions.split(',').indexOf(value) > -1
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
	return val
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
	let url = ''
	for (let key in _data) {
		if (_data.hasOwnProperty(key)) {
			let val = _data[key]
			if (
				val === undefined ||
				val === '' ||
				(myTypeof(val) === 'String' && val.trim() === '') ||
				val === null ||
				functionGroup_isNaN(val)
			) {
				if (keepEmptyVal) {
					if (toUrl) {
						url += key + '=&'
					} else {
						_data[key] = ''
					}
				} else {
					delete _data[key]
				}
			} else if (toUrl) {
				url += key + '=' + val + '&'
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
	e = e || window.Event
	if (e?.stopPropagation) {
		//W3C阻止冒泡方法
		e.stopPropagation()
	} else {
		e.cancelBubble = true //IE阻止冒泡方法
	}
}

/*过滤对象或数组中无效值*/
function removeEmptyValue(data) {
	let temp
	if (Array.isArray(data)) {
		temp = []
		for (let item of data) {
			if (Array.isArray(item) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(item)) {
				temp.push(removeEmptyValue(item))
			} else if (isValidValue(item)) {
				temp.push(item)
			}
		}
	} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(data)) {
		temp = {}
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				if (Array.isArray(data[key] || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(data[key]))) {
					temp[key] = removeEmptyValue(data[key])
				} else if (isValidValue(data[key])) {
					temp[key] = data[key]
				}
			}
		}
	}
	return temp
}

/**
 *打印页面，根据后端所传递的数据生成
 * @param data
 * @return {Promise<any>}
 */
function htmlPrint(data) {
	const pwin = window.open()
	pwin.document.write(data)
	const tc = setTimeout(() => {
		pwin.print()
		window.clearTimeout(tc)
	}, 10)
}

/**
 * 查找dom元素所有兄弟
 * @param {node} elem - 被查找的元素
 */
function siblingElems(elem) {
	let nodes = []
	let _elem = elem
	while ((elem = elem.previousSibling)) {
		if (elem.nodeType === 1) {
			nodes.push(elem)
		}
	}

	while ((_elem = _elem.nextSibling)) {
		if (_elem.nodeType === 1) {
			nodes.push(_elem)
		}
	}
	return nodes
}

// EXTERNAL MODULE: external {"root":"axios","commonjs":"axios","commonjs2":"axios","amd":"axios"}
var external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_ = __webpack_require__(490);
var external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default = /*#__PURE__*/__webpack_require__.n(external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_);
// EXTERNAL MODULE: external {"root":"ViewUI","commonjs":"@zhangqingcq/view-design-r","commonjs2":"@zhangqingcq/view-design-r","amd":"@zhangqingcq/view-design-r"}
var view_design_r_ = __webpack_require__(650);
;// CONCATENATED MODULE: ./src/utils/messageBox.js
/** created 2019.05.24
 *  @author ricky email:zhangqingcq@foxmail.com
 */





let loading = false

/**
 * 对话框
 * @param {object} options 对话框配置
 * @param {string|function} options.content 弹框内容，1.string,直接将文字插入对应位置；2.function,如：(h)=>h('div',{class:'my-class'},'123')
 * @param {number} options.height 弹框高度,默认值130,最小值130
 * @param {number} options.width 弹框宽度，默认值416,最小值416
 * @param {string} options.title 弹框标题内容，默认值“提示”
 * @param {callback} options.onOk 确定按钮回调函数
 * @param {callback} options.onCancel 取消按钮回调函数
 * @param {callback} options.onClose 关闭（右上角叉叉）按钮回调函数
 * @param {string} options.okText 确定按钮文字，默认值“确定”
 * @param {string} options.cancelText 取消按钮文字，默认值“取消”
 * @param {boolean} options.noWarnIcon 不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} options.footerAlign 底部对齐方式，string，默认值“center”
 * @param {boolean} options.cancelBt 展示取消按钮，boolean，默认值“true”
 * @example this.messageBox({
 *                      content:'校验中，返回结果前，请勿关闭或刷新页面'
 *                    })
 */
function messageBox({
	height,
	width = 416,
	title,
	content,
	onOk,
	onCancel,
	onClose,
	okText,
	cancelText,
	noWarnIcon,
	footerAlign,
	cancelBt
}) {
	const T = (...arg) => locale_t.apply(this, arg)

	const heightTemp = height && Number(height) - 90 > 100 ? Number(height) - 90 + 'px' : 0
	const heightT = heightTemp || '100px'
	content = content || T('r.info.text')
	const stringContent = myTypeof(content) === 'String'
	const functionContent = myTypeof(content) === 'Function'
	view_design_r_.Modal.warning({
		width: width,
		render: (h) => {
			return h(
				'div',
				{
					class: 'customMessageBox',
					style: {
						height: heightT
					}
				},
				[
					h(
						'div',
						{
							class: 'containerN'
						},
						[
							h(
								'div',
								{
									class: 'titleN'
								},
								[
									h('span', title || T('r.info.title')),
									h(
										'Button',
										{
											class: 'fr closeN ivu-btn ivu-btn-text',
											props: {
												type: 'text'
											},
											on: {
												click() {
													view_design_r_.Modal.remove()
													if (onClose && myTypeof(onClose) === 'Function') {
														onClose()
													}
												}
											}
										},
										[
											h('i', {
												class: 'ivu-icon ivu-icon-ios-close',
												style: {
													fontSize: '30px'
												}
											})
										]
									)
								]
							),
							h(
								'div',
								{
									class: 'contentN',
									style: {
										textAlign: stringContent ? 'center' : 'left'
									}
								},
								[
									h('i', {
										class: stringContent && noWarnIcon !== true ? 'ivu-icon ivu-icon-ios-alert-outline' : 'hide',
										style: {
											fontSize: '60px',
											color: '#f8bb86'
										}
									}),
									h('div', { class: 'msgBoxConO' }, functionContent ? [content(h)] : content)
								]
							),
							h(
								'div',
								{
									class: 'footerN',
									style: {
										textAlign: footerAlign || 'center'
									}
								},
								[
									h(
										'Button',
										{
											class: 'okBtN ivu-btn ivu-btn-default',
											on: {
												click(e) {
													if (onOk && typeof onOk === 'function') {
														const p = onOk()
														if (p && myTypeof(p) === 'Promise') {
															loading = true
															const el = e?.currentTarget || e?.target
															if (el) {
																el.classList.add('ivu-btn-loading')
																el.nextSibling.setAttribute('disabled', 'disabled')
																const c = el.parentElement?.parentElement.querySelector('.titleN .closeN')
																c.classList.add('disabled')
															}
															Promise.resolve(p)
																.then(() => {
																	loading = false
																	view_design_r_.Modal.remove()
																})
																.catch(() => {
																	loading = false
																	view_design_r_.Modal.remove()
																})
														} else {
															view_design_r_.Modal.remove()
														}
													}
												}
											}
										},
										[
											h('i', {
												class: 'ivu-load-loop ivu-icon ivu-icon-ios-loading'
											}),
											h('span', okText || T('r.confirm'))
										]
									),
									h(
										'Button',
										{
											class: ['cancelBtN ivu-btn ivu-btn-default', cancelBt === false && 'hide'],
											on: {
												click() {
													view_design_r_.Modal.remove()
													if (myTypeof(onCancel) === 'Function') {
														onCancel()
													}
												}
											}
										},
										cancelText || T('r.cancel')
									)
								]
							)
						]
					)
				]
			)
		}
	})
}

;// CONCATENATED MODULE: ./src/utils/spin.js
let count = 0
let loader = document.createElement('div')
loader.setAttribute('class', 'spinModal')

loader.innerHTML =
	'<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>'

window.onload = function () {
	document.getElementsByTagName('body')[0].append(loader)
}

function toggleSpin(d) {
	if (d) {
		loader.classList.add('show')
	} else {
		loader.classList.remove('show')
	}
}

function counts(d) {
	let t = count
	if (d) {
		count++
	} else if (count > 0) {
		count--
	}

	if (t !== count) {
		if (count === 0) {
			toggleSpin(false)
		} else if (t === 0) {
			toggleSpin(true)
		}
	}
}

;// CONCATENATED MODULE: ./src/utils/fetch.js
/**
 * created 2019.04.01
 * @author Ricky <zhangqingcq@foxmail.com>
 */







const host = window.location.origin

// 创建自定义对象
let service = external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default().create({
	baseURL: host,
	withCredentials: true // 允许携带cookie
})

function notInitYet() {
	console.info('store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}')
}

/**
 * 拦截器，在发起请求前调用
 */
service.interceptors.request.use(
	(q) => {
		return q
	},
	(e) => {
		return Promise.reject(e)
	}
)

function logoutHandle() {
	if (service.store) {
		if (typeof service.store === 'function') {
			const store = service.store()
			if (store.logout) {
				store.logout()
			}
		} else {
			service.store.dispatch('logout')
		}
	} else {
		notInitYet()
	}
}

/**
 * 拦截器，在请求返回时调用
 */
service.interceptors.response.use(
	(r) => {
		if (r?.data?.code === 403 || r?.data?.code === 409) {
			messageBox({
				content: locale_t('r.http.' + r.data.code),
				onOk: logoutHandle
			})
		}
		return r
	},
	(e) => {
		if (e?.response?.status === 403 || e?.response?.status === 409) {
			messageBox({
				content: locale_t('r.http.' + e.response.status),
				onOk: logoutHandle
			})
		}
		console.warn('请求出错：', e)
		return Promise.reject(e)
	}
)

/**
 * 封装请求结果和错误处理
 */
function checkResult(r, msg, rPath, config) {
	if (config?.spin) {
		counts(false)
	}
	let y = true
	let d = r?.data
	if (d) {
		rPath = rPath ? rPath : []
		for (let e of rPath) {
			d = d[e]
			y = y && d
		}
		if (y) {
			return d
		}
		msg && console.warn(msg)
		return false
	}
	msg && console.warn(msg)
	return false
}

function handleRequest(method, url, data, msg, rPath, config, isUrlData) {
	return new Promise((s, j) => {
		switch (method) {
			case 'get':
				service
					.get(url, { params: data })
					.then((r) => {
						let d = checkResult(r, msg, rPath, config)
						if (d) {
							s(d)
						} else {
							j(r)
						}
					})
					.catch((e) => {
						checkResult({}, msg, rPath, config)
						j(e)
					})
				break
			case 'delete':
				let keyT = isUrlData ? 'params' : 'data'
				service
					.delete(url, { [keyT]: data })
					.then((r) => {
						let d = checkResult(r, msg, rPath, config)
						if (d) {
							s(d)
						} else {
							j(r)
						}
					})
					.catch((e) => {
						checkResult({}, msg, rPath, config)
						j(e)
					})
				break
			case 'post':
				service
					.post(url, data, config)
					.then((r) => {
						let d = checkResult(r, msg, rPath, config)
						if (d) {
							s(d)
						} else {
							j(r)
						}
					})
					.catch((e) => {
						checkResult({}, msg, rPath, config)
						j(e)
					})
				break
			case 'put':
				service
					.put(url, data, config)
					.then((r) => {
						let d = checkResult(r, msg, rPath, config)
						if (d) {
							s(d)
						} else {
							j(r)
						}
					})
					.catch((e) => {
						checkResult({}, msg, rPath, config)
						j(e)
					})
				break
			default:
		}
	})
}

/**
 * 检查请求传入的各个参数
 * @param method 请求方法
 * @param url 地址
 * @param data 餐宿
 * @param msg 错误信息
 * @param rPath 返回数据路径（提取）
 * @param config 请求配置
 * @param isUrlData delete方法传参模式 true:params,false:data
 * @returns {Promise<*>}
 */
function checkRequest(method, url, data, msg, rPath, config = {}, isUrlData) {
	return new Promise((s, j) => {
		if (url) {
			if (config?.spin) {
				counts(true)
			}
			let url_ = url
			if (window?.g) {
				/*所有特定缩写字母开头的地址，都会被改变加上config.js（public里的全局配置文件，在index.html引入，在打包后通过更改该文件用于不
         同环境的部署）里配置的地址变成绝对地址，如:
         config.js里配置了 window.g={mgrURL:'http://mgr.myweb.com'}
         请求地址 ‘/mgr/file’ 会被改变为 'http://mgr.myweb.com/file'
         */
				let httpEnv = Object.keys(window.g)
					.filter((e) => e?.indexOf?.('URL') > -1)
					.map((e) => e?.replace?.('URL', ''))

				for (let e of httpEnv) {
					let regExp = new RegExp('^/' + e + '(?=/.*$)', 'i')
					if (regExp.test(url) && window.g[e + 'URL']) {
						url_ = window.g[e + 'URL'] + url.replace(regExp, '')
						break
					}
				}
			}
			let data_
			if (config?.headers?.['Content-Type'] === 'multipart/form-data') {
				data_ = data
			} else {
				if (Array.isArray(data)) {
					data_ = []
				} else {
					data_ = {}
				}
				if (data && !external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(data)) {
					if (Array.isArray(data)) {
						for (let e of data) {
							if (e || e === 0 || e === false || (e === '' && !config.noEmptyStr)) {
								data_.push(e)
							}
						}
					} else {
						for (let key in data) {
							if (
								data.hasOwnProperty(key) &&
								(data[key] || data[key] === 0 || data[key] === false || (data[key] === '' && !config.noEmptyStr))
							) {
								data_[key] = data[key]
							}
						}
					}
				}
			}
			let method_ = method.toLowerCase()
			handleRequest(method_, url_, data_, msg, rPath, config, isUrlData)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		} else {
			console.error('没有请求地址:url')
			j('没有请求地址:url')
		}
	})
}

/**
 * @description 基于axios封装的请求插件，引入库时使用this.$fetch时直接调用以下方法，例如：this.$fetch.get("/getData",{id:1})，
 * 单独引入时遵循Es Modules规范即可
 * @class
 */
/* harmony default export */ var fetch = ({
	/**
	 * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
	 * @function
	 * @param {object} store 项目中vuex的store
	 */
	init(store) {
		service.store = store
	},
	/**
	 * post 请求
	 * @function
	 * @param {string} url 请求地址
	 * @param {object} data 请求数据
	 * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传，例如：
	 * @example this.$fetch.post("/getDataB",{name:'ricky'},"获取数据B失败")
	 * @param {Array.<string>} rPath 请求结果提取路径，如：[data,list]表示data.list,如不需过滤可不传
	 * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
	 * @return {Promise<object>}
	 * @example this.$fetch.post("/getData",{id:1},null,['result','list'])
	 *  .then(r=>{
	 *      console.log(r)
	 *      r相当于:data.result.list,data是网络请求结果
	 *  })
	 *
	 * 注意：
	 *  请求最多支持5个入参，最少一个(url)，依次为：url,data,msg,rPath,config。如果要传靠后的入参，但不想传前面的，应该这样传：
	 *  this.$fetch.post("/setData",{},null,[],{
	 *     headers: {
	 *         'Content-Type': 'multipart/form-data'
	 *       },
	 *       spin:true
	 *   }
	 *  )
	 */
	post(url, data = {}, msg, rPath, config) {
		return new Promise((s, j) => {
			checkRequest('post', url, data, msg, rPath, config)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
	/**
	 * put请求
	 * @param {string} url 请求地址
	 * @param {object} data 请求数据
	 * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
	 * @param {Array.<string>} rPath 请求结果提取路径
	 * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
	 * @return {Promise<unknown>}
	 */
	put(url, data = {}, msg, rPath, config) {
		return new Promise((s, j) => {
			checkRequest('put', url, data, msg, rPath, config)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
	/**
	 * get请求
	 * @param {string} url 请求地址
	 * @param {object} data 请求数据
	 * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
	 * @param {Array.<string>} rPath 请求结果提取路径
	 * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
	 * @return {Promise<unknown>}
	 * PS: get请求时(delete请求同理)，可以把请求参数写在url里，也可以写在data里，注意写在data里时，data是对象
	 * 以请求'/devices',找到id=2,name='meter'举例：
	 *  只传url时，url = '/devices?id=2&name=meter'
	 *  url和data都传时,url = '/devices',data={id:2,name:'meter'}
	 */
	get(url, data = {}, msg, rPath, config) {
		return new Promise((s, j) => {
			checkRequest('get', url, data, msg, rPath, config)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
	/**
	 * delete 请求
	 * @param {string} url 请求地址
	 * @param {object} data 请求数据
	 * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
	 * @param {Array.<string>} rPath 请求结果提取路径
	 * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
	 * @param isUrlData 传参模式 true:params,false:data
	 * @return {Promise<unknown>}
	 */
	delete(url, data = {}, msg, rPath, config, isUrlData = true) {
		return new Promise((s, j) => {
			checkRequest('delete', url, data, msg, rPath, config, isUrlData)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
	/**
	 * 并发请求   例如：
	 * @example this.$fetch.all(
	 *  [
	 *    this.$fetch.get("/getData"),
	 *    this.$fetch.post("/getDataB",{name:'ricky'})
	 *  ]
	 * )
	 */
	all: (external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default()).all,
	/**
	 * 并发请求结果分离 例如：
	 * @example this.$fetch.all(
	 *  [
	 *    this.$fetch.get("/getData"),
	 *    this.$fetch.post("/getDataB",{name:'ricky'})
	 *  ]
	 * )
	 *  .then(
	 *    this.$fetch.spread((result1,result2)=>{
	 *        console.log(result1,result2)
	 *    })
	 *   )
	 */
	spread: (external_root_axios_commonjs_axios_commonjs2_axios_amd_axios_default()).spread,
	/**
	 * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
	 */
	config: service
});

;// CONCATENATED MODULE: ./src/utils/timer.js
/**
 * @description 可自动销毁的定时器和计时器
 * @author ricky zhangqingcq@foxmail.com
 * @created 2020.10.30
 */

let timeoutBox = []
let intervalBox = []

const init = function (r) {
	if (r?.beforeEach) {
		r.beforeEach((to, from, next) => {
			timeoutBox.map((e) => {
				window.clearTimeout(e)
			})
			intervalBox.map((e) => {
				window.clearInterval(e)
			})
			timeoutBox.length = 0
			intervalBox.length = 0
			next()
		})
	} else {
		console.warn(
			'安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})'
		)
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/pagePro/pagePro.vue?vue&type=template&id=3d19a29a
var pageProvue_type_template_id_3d19a29a_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"pagePro",class:{ pageProDefault: _vm.size === 'default' }},[_c('Page',{attrs:{"current":_vm.current,"page-size":_vm.pageSizeT,"total":_vm.total,"size":_vm.size,"page-size-opts":_vm.pageSizeOpts,"disabled":_vm.disabled,"simple":""},on:{"update:current":function($event){_vm.current=$event}}}),_c('div',{staticClass:"pageProSize"},[_c('Select',{attrs:{"size":_vm.size,"transfer":_vm.transfer,"disabled":_vm.disabled},model:{value:(_vm.pageSizeT),callback:function ($$v) {_vm.pageSizeT=$$v},expression:"pageSizeT"}},_vm._l((_vm.pageSizeOpts),function(item){return _c('Option',{key:item,staticStyle:{"text-align":"center"},attrs:{"value":item}},[_vm._v(_vm._s(item)+" "+_vm._s(_vm.t('r.page')))])}),1)],1)],1)
}
var pageProvue_type_template_id_3d19a29a_staticRenderFns = []


;// CONCATENATED MODULE: ./src/mixins/locale.js


/* harmony default export */ var mixins_locale = ({
	methods: {
		t(...args) {
			return locale_t.apply(this, args)
		}
	}
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/pagePro/pagePro.vue?vue&type=script&lang=js

	
	

	/* harmony default export */ var pageProvue_type_script_lang_js = ({
		name: 'pagePro',
		model: {
			prop: 'modelValue',
			event: 'on-change'
		},
		mixins: [mixins_locale],
		props: {
			modelValue: {
				/*当前页数*/
				type: Number,
				default: ''
			},
			total: {
				/*总条数*/
				type: Number,
				default: 0
			},
			pageSize: {
				/*每页条数*/
				type: Number,
				default: 10
			},
			size: {
				/*页签尺寸*/
				type: String,
				validator: (val) => oneOf(String(val), ['small', 'default']),
				default: 'default'
			},
			pageSizeOpts: {
				/*每页可选条数配置*/
				type: Array,
				default() {
					return this.pageSizes || [10, 20, 30, 40]
				}
			},
			transfer: {
				type: Boolean,
				default: true
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			current: {
				get() {
					return this.modelValue
				},
				set(v) {
					this.$emit('on-change', v)
				}
			},
			pageSizeT: {
				get() {
					return this.pageSize
				},
				set(v) {
					this.$emit('on-page-size-change', v)
					if (this.current !== 1) {
						this.$nextTick(function () {
							this.current = 1
						})
					}
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/pagePro/pagePro.vue?vue&type=script&lang=js
 /* harmony default export */ var pagePro_pageProvue_type_script_lang_js = (pageProvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/pagePro/pagePro.vue





/* normalize component */
;
var pagePro_component = normalizeComponent(
  pagePro_pageProvue_type_script_lang_js,
  pageProvue_type_template_id_3d19a29a_render,
  pageProvue_type_template_id_3d19a29a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pagePro = (pagePro_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/btTablePage/btTablePage.vue?vue&type=script&lang=js

	
	
	
	
	
	

	/* harmony default export */ var btTablePagevue_type_script_lang_js = ({
		name: 'btTablePage',
		components: {
			pagePro: pagePro
		},
		props: {
			url: {
				/*表格拉取数据的接口地址*/
				type: String,
				default: ''
			},
			method: {
				/*表格拉取数据的接口的请求类型,get、post*/
				type: String,
				default: 'get'
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
			dataHandler: {
				/*接口数据处理方法，处理后格式须为{data:[...],total:xx}*/
				type: Function
			},
			selection: {
				/*是否展示每列开头选择框*/
				type: Boolean,
				default: false
			},
			radio: {
				/*表格是否是单选表格，每次只能选中一行*/
				type: Boolean,
				default: false
			},
			selectionFixed: {
				/*每列开头选择框固定*/
				validator: (val) => oneOf(val, ['left', 'right', false]),
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
				validator: (val) => oneOf(val, ['custom', '']),
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
				default: 'desc'
			},
			orderKey: {
				/*排序的key*/
				type: String,
				default: 'id'
			},
			orderKeyFormat: {
				validator: (val) => oneOf(val, ['underline', 'camelcase']),
				default: 'underline'
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
			},
			pageComponentSize: {
				type: String,
				default: 'default'
			},
			noElevator: {
				type: Boolean,
				default: false
			},
			usePagePro: {
				/*是否使用pagePro组件作为页签*/
				type: Boolean,
				default() {
					return this.btTablePageUsePagePro
				}
			}
		},
		data() {
			return {
				pageSizes: this.pageSizes || [10, 20, 30, 40],
				dataT: this.data,
				pageSizeT: (localStorage.getItem('btPageSize') && Number(localStorage.getItem('btPageSize'))) || this.pageSize,
				current: 1,
				total: 0,
				selected: [],
				currentKey: null,
				currentIndex: null,
				key: this.orderKey,
				order: this.orderDefault,
				tableContainerHeight: 300
			}
		},
		computed: {
			columnsFixed() {
				for (let item of this.columns) {
					if (item?.fixed) {
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
					...this.searchData,
					current: this.current,
					size: this.pageSizeT
				}
				if (this.sortable === 'custom') {
					if (this.orderKeyFormat === 'underline') {
						temp[this.order] = toLine(this.key)
					} else if (this.orderKeyFormat === 'camelcase') {
						temp[this.order] = toHump(this.key)
					}
				}
				return temp
			},
			columnsT() {
				let temp = this.columns.filter((item) => {
					return item.type !== 'selection'
				})
				if (this.selection || this.radio) {
					let TTK
					if (this.radio) {
						TTK = {
							title: ' ',
							width: 65,
							render: (h, params) => {
								return h('Radio', {
									props: {
										value: params.row.btChecked
									}
								})
							}
						}
					} else {
						TTK = {
							type: 'selection',
							width: 60
						}
					}

					if (this.selectionFixed) {
						TTK.fixed = this.selectionFixed
					}
					temp.unshift(TTK)
				}
				temp.forEach((item) => {
					if (this.sortable === 'custom') {
						if (item?.key && item.sortable !== true && item.sortable !== false) {
							item.sortable = 'custom'
						}
					} else {
						item.sortable = false
					}
					if (!item?.align) {
						item.align = 'center'
					}
				})
				if (this.tableEmptyTdHandle) {
					temp.forEach((item) => {
						if (item?.key && item.render === undefined) {
							if (item.tooltip) {
								item.render = tooltipManual(item.key, true)
							} else {
								item.render = (h, params) => {
									let td = params.row[item.key]
									return h('span', td === '' || td === null || td === undefined ? '--' : td)
								}
							}
						}
					})
				}
				return temp
			},
			dataS: {
				get() {
					return this.dataT.map((e, i) => {
						return {
							btKey: 'bt-' + i,
							btChecked: false,
							...e
						}
					})
				},
				set(v) {
					this.dataT = v
				}
			},
			selectedIds() {
				return this.selected.map((e) => e?.id)
			},
			selectedKeys() {
				return this.selected.map((e) => e?.btKey)
			}
		},
		created() {
			this.initTable()
		},
		watch: {
			searchData: {
				handler() {
					this.search()
				},
				deep: true
			},
			orderKey(after) {
				this.key = after
			},
			orderDefault(after) {
				this.order = after
			}
		},
		methods: {
			initTable() {
				/*私有*/
				if (this.initData) {
					this.getDataAndClickRow()
				}
			},
			addRow(row) {
				/*添加行（公开），分页时不推荐使用，详细见说明文档*/
				this.dataT.unshift(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(row))
				timer_setTimeout(() => {
					this.$refs.TableXXX.clickCurrentRow(0)
				}, 100)
			},
			/**
			 * 更新行数据（公开）
			 * @param {object} row 新的行数据（只更新旧数据和新数据都有的字段，如想更新的其中一个字段为row.name，那么旧row数据需要有name这个字段）
			 * @param {number|boolean} setCurrentRow 1.数字，行在表数据中的index；2.布尔值，更新当前行
			 * @param {boolean} clickCurrentRow 更新完数据点击更新的行
			 */
			setRowData(row, setCurrentRow, clickCurrentRow) {
				let index = null
				if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isBoolean(setCurrentRow) && setCurrentRow) {
					index = this.currentIndex
				} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isNumber(setCurrentRow)) {
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
			deleteRow(index) {
				/*根据索引数字删除行（公开），分页时不推荐使用，详细见说明文档*/
				this.dataT.splice(index, 1)
				timer_setTimeout(() => {
					this.$refs.TableXXX.clickCurrentRow(0)
				}, 100)
			},
			/**
			 * 主动选中行（公开）多选、单选模式皆可用
			 * @param {Number|Array|Function} predicate 断言,选中的条件：
			 * 1. Number:根据索引index选中行
			 * 2. Array:根据索引index数组选中行(仅多选)
			 * 3. Function:根据断言函数返回true的行选中，如：(row)=>row.id === 1
			 */
			selectRow(predicate) {
				const _p = predicate
				if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isNumber(_p)) {
					this.clearSelect()
					this.currentIndex = _p
					this.currentKey = this.dataS[_p].btKey
					this.$refs.TableXXX.clickCurrentRow(_p)
				} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isArray(_p)) {
					if (this.radio || !this.selection) {
						return
					}
					this.clearSelect()
					for (let i of _p) {
						this.$refs.TableXXX.clickCurrentRow(i)
					}
				} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isFunction(_p)) {
					for (let i = 0; i < this.dataS.length; i++) {
						const e = this.dataS[i]
						if (_p(e)) {
							this.$refs.TableXXX.clickCurrentRow(i)
						}
					}
				}
			},
			clearSelect() {
				/*清空选择（公开）*/
				if (this.radio) {
					if (this.selectedKeys.length > 0 && this.dataS.length > 0) {
						let i = this.selectedKeys[0].split('-')[1]
						this.$set(this.dataS[i], 'btChecked', false)
					}
				} else {
					this.$refs.TableXXX.selectAll(false)
				}
				if (this.selected.length > 0) {
					this.selected = []
					this.$emit('on-selection-change', [])
				}
				this.currentKey = null
				this.currentIndex = null
			},
			clearTableData() {
				/*清空选择（公开）,用于特殊场景下重置表格，不拉取数据，如需刷新数据直接调用getTableData*/
				this.$set(this, 'dataT', [])
				this.clearSelect()
				this.current = 1
				this.total = 0
			},
			search() {
				/*私有*/
				this.current = 1
				this.getDataAndClickRow()
			},
			getDataAndClickRow(clickCurrentRow, order, orderKey) {
				/*单选模式时（非单选模式只拉数据不点击），拉取表格数据并且点击行，如果传true，则点击当前行，不传则点击 rowClickNum 指定行（公开）*/
				if (this.radio && (clickCurrentRow || this.rowClickNum !== -1)) {
					this.getTableData(order, orderKey, clickCurrentRow).then(() => {
						//点击对应行
						if (this.dataT.length > 0) {
							timer_setTimeout(() => {
								if (clickCurrentRow) {
									this.$refs.TableXXX.clickCurrentRow(this.currentIndex || 0)
								} else {
									this.$refs.TableXXX.clickCurrentRow(this.rowClickNum)
								}
							}, 10)
						}
					})
				} else {
					this.getTableData()
				}
			},
			onRowClick(row, i) {
				/*私有*/
				if (row.btChecked && this.radio) {
					return
				}
				if ((this.selection || this.radio) && this.rowClickSelect) {
					this.$refs.TableXXX.toggleSelect(i)
				}
			},
			onSelect(s, row) {
				/*私有*/
				this.currentKey = row.btKey
				this.currentIndex = Number(row.btKey.split('-')[1])
				if (this.radio) {
					this.$set(this.dataT[this.currentIndex], 'btChecked', true)
				}
			},
			selectionHandle(selection) {
				/*私有*/
				if (this.radio) {
					for (let e of this.dataS) {
						if (e?.btKey !== this.currentKey) {
							this.$set(this.dataT[Number(e?.btKey.split('-')[1])], 'btChecked', false)
						}
					}
				}
				this.selected = selection
			},
			getSelected() {
				/*获取已选行数据（公开）*/
				return external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.selected)
			},
			changePage(v) {
				/*私有*/
				this.current = v
				this.getDataAndClickRow()
			},
			pageSizeChange(v) {
				/*私有*/
				this.pageSizeT = v
				localStorage.setItem('btPageSize', v)
				if (this.current === 1) {
					this.getDataAndClickRow()
				}
			},
			onSortChange({ key, order }) {
				/*私有*/
				//表头排序
				if (order === 'normal') {
					/*恢复到默认页面排序*/
					this.key = this.orderKey
					this.order = this.orderDefault
				} else {
					this.key = key
					this.order = order
				}
				this.current = 1
				this.getTableData()
			},
			getTableData(order, orderKey, keepSelect) {
				/*拉取表格数据（公开）*/
				return new Promise((resolve) => {
					if (order) {
						this.order = order
					}
					if (orderKey) {
						this.key = orderKey
					}
					if (this.url && this.url !== '') {
						fetch[this.method](this.url, this.queryData, null, [], {
							spin: this.getDataLoading
						})
							.then((d) => {
								let r
								if (!keepSelect) {
									this.clearSelect()
								}
								if (myTypeof(this.dataHandler) === 'Function') {
									r = this.dataHandler(d)
								} else {
									r = d
								}
								if (r?.data) {
									/*接口返回数据为空时可能是用null表示，所以有下面逻辑*/
									if (r.data?.records || r.data?.records === null) {
										this.dataT = r.data.records || []
									} else if (r.data?.page) {
										if (r.data.page?.records || r.data.page?.records === null) {
											this.dataT = r.data.page.records || []
										}
									} else if (r.data?.data) {
										if (r.data.data?.records || r.data.data?.records === null) {
											this.dataT = r.data.data.records || []
										}
									} else {
										this.dataT = r.data
									}
									this.total = r.data?.page?.total || r.data?.data?.total || r.data?.total || r.total || 0
									if (this.total === 0 && this.current > 1 && this.dataT?.length === 0) {
										/*如果没有数据，将当前页置为1*/
										this.current = 1
									} else if (this.current > 1 && this.total <= (this.current - 1) * this.pageSizeT) {
										/*当前页并没有数据，自动拉取前一页数据*/
										this.current--
										this.$nextTick(function () {
											this.getTableData(order, orderKey)
										})
									}
									this.$emit('on-data-change', r)
									resolve(r)
								} else {
									console.warn('请求返回数据有误，无法使用')
									this.clearTableData()
									this.$emit('on-data-change', r)
								}
							})
							.catch((e) => {
								console.warn(e)
								this.clearSelect()
								this.clearTableData()
								this.$emit('on-data-change', e)
							})
					} else {
						console.warn('没有有效的请求地址，无法获取表格数据')
					}
				})
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/btTablePage/btTablePage.vue?vue&type=script&lang=js
 /* harmony default export */ var btTablePage_btTablePagevue_type_script_lang_js = (btTablePagevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/btTablePage/btTablePage.vue





/* normalize component */
;
var btTablePage_component = normalizeComponent(
  btTablePage_btTablePagevue_type_script_lang_js,
  btTablePagevue_type_template_id_0edab8bc_render,
  btTablePagevue_type_template_id_0edab8bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var btTablePage = (btTablePage_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/wellCard/wellCard.vue?vue&type=template&id=f69549bc
var wellCardvue_type_template_id_f69549bc_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{style:(_vm.wellStyle)},[_c('div',{staticClass:"flexColumnBox wellCardR"},[_c('div',{staticClass:"panelHeader notGrow"},[_c('div',{staticClass:"fl",staticStyle:{"font-weight":"bold"}},[_vm._v(" "+_vm._s(_vm.title || _vm.t('r.title'))+" ")]),_c('div',{staticClass:"btsF"},[_vm._t("bts")],2)]),_c('div',{staticClass:"growFlexItem relativeBox"},[_c('div',{staticClass:"fullFlowContent"},[_vm._t("default")],2)])])])
}
var wellCardvue_type_template_id_f69549bc_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/wellCard/wellCard.vue?vue&type=script&lang=js

	
	

	/* harmony default export */ var wellCardvue_type_script_lang_js = ({
		name: 'wellCard',
		mixins: [mixins_locale],
		props: {
			title: {
				type: String
			},
			width: {
				type: [Number, String],
				default: '100%'
			},
			height: {
				type: [Number, String],
				default: '100%'
			},
			inline: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			wellStyle() {
				let temp = {}
				if (this.inline) {
					temp.display = 'inline-block'
				}
				let attrArr = ['width', 'height']
				for (let e of attrArr) {
					if (myTypeof(this[e]) === 'String') {
						temp[e] = this[e]
					} else if (myTypeof(this[e]) === 'Number' && this[e] > 0) {
						temp[e] = this[e] + 'px'
					}
				}
				return temp
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/wellCard/wellCard.vue?vue&type=script&lang=js
 /* harmony default export */ var wellCard_wellCardvue_type_script_lang_js = (wellCardvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/wellCard/wellCard.vue





/* normalize component */
;
var wellCard_component = normalizeComponent(
  wellCard_wellCardvue_type_script_lang_js,
  wellCardvue_type_template_id_f69549bc_render,
  wellCardvue_type_template_id_f69549bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var wellCard = (wellCard_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableTree/tableTree.vue?vue&type=template&id=5bd4936b
var tableTreevue_type_template_id_5bd4936b_render = function render(){var _vm=this,_c=_vm._self._c;return _c('Table',{key:_vm.updateDomKey,ref:"tabXY",class:{ tableTreeKM: true, lightHeadO: _vm.lightHead },attrs:{"columns":_vm.columnsX,"data":_vm.dataX,"highlight-row":_vm.highlightRow}})
}
var tableTreevue_type_template_id_5bd4936b_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableTree/tableTree.vue?vue&type=script&lang=js

	
	

	/* harmony default export */ var tableTreevue_type_script_lang_js = ({
		name: 'tableTree',
		props: {
			columns: {
				//表格结构数据
				type: Array,
				default() {
					return []
				}
			},
			data: {
				//表格内容
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
			columnsX() {
				//计算过后的表格结构数据
				let temp = this.columns.filter((item) => {
					return item?.type !== 'selection'
				})

				if (temp[0]) {
					let key = temp[0].key
					temp[0].renderHeader = (h, params) => {
						return h('div', { style: { paddingLeft: '20px' } }, params.column.title)
					}
					temp[0].render = (h, params) => {
						return h(
							'div',
							{
								class: 'tableTxtBt',
								style: {
									paddingLeft: (params.row.parentNoKey.length + 1) * 20 + 'px',
									textAlign: 'left'
								}
							},
							[
								h('Checkbox', {
									props: {
										value: params.row.checkBox
									},
									directives: [
										{
											name: 'show',
											value: this.radio
										}
									],
									on: {
										'on-change': (e) => {
											if (e === true) {
												this.setCollectionVal(this.dataX, { checkBox: false })
												this.setCollectionVal(this.dataX, {
													checkBox: e,
													ownKey: this.dataX[params.index].ownKey
												})
												this.$emit('on-select', params.row)
											} else {
												this.setCollectionVal(this.dataX, {
													checkBox: e,
													ownKey: this.dataX[params.index].ownKey
												})
											}
										},
										click: (e) => {
											e?.preventDefault?.()
										}
									}
								}),
								h('Icon', {
									props: {
										type: params.row._hideChild
											? 'ios-arrow-forward'
											: params.row._hideChild === false
												? 'ios-arrow-down'
												: ''
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
								h(
									'span',
									{
										style: {
											cursor: 'pointer'
										},
										on: {
											click: () => {
												this.showHideClick(params.index)
											}
										}
									},
									' ' + params.row[key]
								)
							]
						)
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
							if (item?.ownKey === option.ownKey) {
								item.checkBox = option.checkBox
							}
							if (myTypeof(item?.childrenXK) === 'Array' && item?.childrenXK.length > 0) {
								this.setCollectionValB(item?.childrenXK, option)
							}
						}
					} else {
						for (let item of arr) {
							item.checkBox = option.checkBox
							if (myTypeof(item?.childrenXK) === 'Array' && item?.childrenXK.length > 0) {
								this.setCollectionValB(item?.childrenXK, option)
							}
						}
					}
				}
			},
			setCollectionValB(arr, option) {
				if (option && isValidValue(option.checkBox) && myTypeof(arr) === 'Array') {
					if (option.ownKey) {
						for (let item of arr) {
							if (item?.ownKey === option.ownKey) {
								item.checkBox = option.checkBox
							}
							if (myTypeof(item?.childrenXK) === 'Array' && item?.childrenXK.length > 0) {
								this.setCollectionVal(item?.childrenXK, option)
							}
						}
					} else {
						for (let item of arr) {
							item.checkBox = option.checkBox
							if (myTypeof(item?.childrenXK) === 'Array' && item?.childrenXK.length > 0) {
								this.setCollectionVal(item?.childrenXK, option)
							}
						}
					}
				}
			},
			handleResize() {
				this.$refs.tabXY.handleResize()
			},
			updateTab() {
				let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.data)
				this.addHideChildAttr(temp)
				this.dataX = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(temp)
				this.showDefault()
			},
			showDefault() {
				for (let i = 0, l = this.dataX.length; i < l; i++) {
					let e = this.dataX[i]
					if (e?.hideChild === false && e?._hideChild === true) {
						this.showHideClick(i)
						break
					}
				}
			},
			showHideClick(i) {
				if (this.dataX[i]._hideChild) {
					//收起状态下，打开
					this.dataX[i]._hideChild = false
					let child_ = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.dataX[i].childrenXK)
					this.dataX.splice(i + 1, 0, ...child_) //向当前行下面插入直接子节点
					this.showDefault()
				} else if (this.dataX[i]._hideChild === false) {
					//打开状态，收起
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
					if (item?.children) {
						item.childrenXK = item.children
						delete item.children
					}
					if (this.myTypeof(item?.childrenXK) === 'Array' && item?.childrenXK.length > 0) {
						if (item._hideChild !== false) {
							item._hideChild = true
						}
						this.addHideChildAttrB(item.childrenXK, [item.ownKey, ...item.parentNoKey])
					}
				}
			},
			addHideChildAttrB(data, parentNoKey) {
				//为了代替递归（递归效率太低），写了两个相似的方法
				for (let item of data) {
					item.ownKey = this.noKey
					this.noKey++
					item.parentNoKey = item.parentNoKey || []
					if (parentNoKey !== undefined) {
						item.parentNoKey.push(...parentNoKey)
					}
					if (item?.children) {
						item.childrenXK = item.children
						delete item.children
					}
					if (this.myTypeof(item?.childrenXK) === 'Array' && item?.childrenXK?.length > 0) {
						if (item._hideChild !== false) {
							item._hideChild = true
						}
						this.addHideChildAttr(item.childrenXK, [item.ownKey, ...item.parentNoKey])
					}
				}
			},
			hideChildNode(i) {
				//收起（从table移除）点击行在table中显示的所有子节点
				let count = this.getChildCount(this.dataX[i].ownKey)
				if (count) {
					this.dataX.splice(i + 1, count) //收起（从table中移除）点击行下所有显示在table中的子节点（子节点一定是跟在父节点后面的）
				}
				//更改收展状态
				setValByOption({
					group: [this.dataX[i]],
					condition: (e) => e?._hideChild === false,
					key: '_hideChild',
					val: true,
					childKey: 'childrenXK'
				})
			},
			/**
			 * 手动添加单个子节点
			 * @param {'非负整数'} index 要添加子节点的节点的序列号，由上到下，从0开始，可用params.row._index
			 * @param {object} node 新节点数据,格式相当于table的data的一个元素
			 * @returns {Promise} 成功则返回添加的节点在组件中的数据，失败则返回失败原因
			 */
			addLocalNode(index, node) {
				return new Promise((resolve, reject) => {
					if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isInteger(index) || index < 0) {
						reject('索引序号index必须是正整数或0!')
					} else if (index > this.dataX.length - 1) {
						reject('无效的索引序号index!')
					}
					if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(node) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(node)) {
						reject('节点数据异常，无法添加节点！')
					}
					let parent = this.dataX[index]
					if (parent._hideChild !== false) {
						parent._hideChild = false
					}
					let parenNoKeyT = [
						//新节点的parentNoKey
						parent.ownKey,
						...parent.parentNoKey
					]
					let nodeT = {
						//新节点数据
						...node,
						ownKey: ++this.noKey,
						parentNoKey: parenNoKeyT
					}
					for (let item of this.dataX) {
						//在table内容数据dataX中的节点（新节点的所有上辈）的对应位置（层级,即第几层children）上添加新节点数据
						let level = parenNoKeyT.indexOf(item?.ownKey) //父辈等级（父辈ownKey在新节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
						if (level > -1) {
							//如果是新节点父辈
							if (item?.childrenXK === undefined) {
								item.childrenXK = []
							}
							let childrenXK = item?.childrenXK
							let temp = item
							for (let i = 0; i < level + 1; i++) {
								//找到正确的位置(层级)添加新节点数据
								if (i === level) {
									childrenXK.push(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(nodeT))
									if (item?._hideChild === undefined) {
										item._hideChild = true
									}
									break
								} else {
									temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().find(temp.childrenXK, (e) => parenNoKeyT.indexOf(e?.ownKey) !== -1) //找到下一层级（children）中的父辈数据节点，进行下一循环
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
					this.dataX.splice(index + 1 + this.getChildCount(parent.ownKey), 0, external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(nodeT)) //在tableX中直接父节点下添加新节点（直接展示出来）
					this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
					resolve(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(nodeT))
				})
			},
			/**
			 * 手动编辑单个子节点
			 * @param {'非负整数'} index 要编辑节点的节点的序列号，由上到下，从0开始，可用params.row._index
			 * @param {object} node 节点的新数据,格式相当于table的data的一个元素
			 * @returns {Promise} 成功则返回编辑后的节点在组件中的数据，失败则返回失败原因
			 */
			editLocalNode(index, node) {
				return new Promise((resolve, reject) => {
					if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isInteger(index) || index < 0) {
						reject('索引序号index必须是正整数或0!')
					} else if (index > this.dataX.length - 1) {
						reject('无效的索引序号index!')
					}
					if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isPlainObject(node) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(node)) {
						reject('节点数据异常，无法添加节点！')
					}
					let thisNode = this.dataX[index]
					//节点新数据
					let nodeT = Object.assign(thisNode, node)
					this.dataX[index] = nodeT //更新当前节点
					for (let item of this.dataX) {
						//在table内容数据dataX中的节点（当前节点的所有上辈）的对应位置（层级,即第几层children）上修改节点数据
						let level = nodeT.parentNoKey.indexOf(item?.ownKey) //父辈等级（父辈ownKey在当前节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
						if (level > -1) {
							//如果是当前节点父辈
							let childrenXK = item?.childrenXK
							for (let i = 0; i < level + 1; i++) {
								//找到正确的位置(层级)修改节点新数据
								if (i === level) {
									let tIndex = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().findIndex(childrenXK, (e) => e?.ownKey === nodeT?.ownKey)
									if (tIndex > -1) {
										childrenXK[tIndex] = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(nodeT)
									}
									break
								} else {
									let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().find(childrenXK, (e) => nodeT.parentNoKey.indexOf(e?.ownKey) !== -1) //找到下一层级（children）中的父辈数据节点，进行下一循环
									childrenXK = temp.childrenXK
								}
							}
						}
					}
					this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
					resolve(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(nodeT))
				})
			},
			/**
			 * 手动删除单个子节点
			 * @param {'非负整数'} index 要删除节点的节点的序列号，由上到下，从0开始，可用params.row._index
			 * @returns {Promise} 成功则返回删除后的整棵表格树数据，失败则返回失败原因
			 */
			deleteLocalNode(index) {
				return new Promise((resolve, reject) => {
					if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isInteger(index) || index < 0) {
						reject('索引序号index必须是正整数或0!')
					} else if (index > this.dataX.length - 1) {
						reject('无效的索引序号index!')
					}
					let thisNode = this.dataX[index]
					this.dataX.splice(index, 1) //删除当前节点
					this.deleteLocalChildNode(thisNode.ownKey, index)
					for (let item of this.dataX) {
						//在table内容数据dataX中的节点（当前节点的所有上辈）的对应位置（层级,即第几层children）上删除节点数据
						let level = thisNode.parentNoKey.indexOf(item?.ownKey) //父辈等级（父辈ownKey在当前节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
						if (level > -1) {
							//如果是当前节点父辈
							let childrenXK = item?.childrenXK
							let temp = item
							for (let i = 0; i < level + 1; i++) {
								//找到正确的位置(层级)删除节点新数据
								if (i === level) {
									let tIndex = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().findIndex(childrenXK, (e) => e?.ownKey === thisNode?.ownKey)
									if (tIndex > -1) {
										childrenXK.splice(tIndex, 1)
										if (childrenXK.length === 0) {
											temp._hideChild = null
										}
									}
									break
								} else {
									temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().find(childrenXK, (e) => thisNode.parentNoKey.indexOf(e?.ownKey) !== -1) //找到下一层级（children）中的父辈数据节点，进行下一循环
									childrenXK = temp.childrenXK
								}
							}
						}
					}
					this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
					resolve(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.dataX))
				})
			},
			deleteLocalChildNode(ownKey, index) {
				//删除tableX中所有展示的后辈节点
				let count = this.getChildCount(ownKey)
				if (count) {
					this.dataX.splice(index, count) //收起（从table中移除）点击行下所有显示在table中的子节点（子节点一定是跟在父节点后面的）
				}
			},
			getChildCount(ownKey) {
				let count = 0
				for (let item of this.dataX) {
					if (item?.parentNoKey?.indexOf?.(ownKey) !== -1) {
						//如果当前行的parentNoKey里有删除行的ownKey,则表示当前行是删除行的子节点
						count++
					}
				}
				return count
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/tableTree/tableTree.vue?vue&type=script&lang=js
 /* harmony default export */ var tableTree_tableTreevue_type_script_lang_js = (tableTreevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/tableTree/tableTree.vue





/* normalize component */
;
var tableTree_component = normalizeComponent(
  tableTree_tableTreevue_type_script_lang_js,
  tableTreevue_type_template_id_5bd4936b_render,
  tableTreevue_type_template_id_5bd4936b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableTree = (tableTree_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/uploadGroup/uploadGroup.vue?vue&type=template&id=25214b81
var uploadGroupvue_type_template_id_25214b81_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('Upload',{attrs:{"name":"files","action":_vm.urlT,"before-upload":_vm.handelManualUpload,"on-error":_vm.uploadError,"on-success":_vm.uploadSuccess,"on-exceeded-size":_vm.overSize,"on-preview":_vm.onPreview,"on-remove":_vm.onRemove,"on-format-error":_vm.onFormatError,"data":_vm.data,"max-size":_vm.maxSize,"show-upload-list":false,"with-credentials":_vm.withCredentials,"format":_vm.format,"multiple":_vm.multiple || false,"disabled":(_vm.length > 0 && _vm.fileList.length >= _vm.length) || Boolean(_vm.disabled)}},[_c('Button',{class:{
				disabledR: (_vm.length > 0 && _vm.fileList.length >= _vm.length) || Boolean(_vm.disabled)
			},attrs:{"icon":"ios-cloud-upload-outline"}},[_vm._v(_vm._s(_vm.t('r.selectFile')))])],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'img' && _vm.fileDefaultList.length > 0),expression:"previewType === 'img' && fileDefaultList.length > 0"}],staticClass:"previewBoxM"},_vm._l((_vm.fileDefaultList),function(item){return (!_vm.manualUpload && item?.id !== null)?_c('div',{key:item?.id,staticClass:"previewImg",class:{ previewLoading: item?.mimeType === 'loading' }},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(item?.mimeType === 'loading'),expression:"item?.mimeType === 'loading'"}],staticClass:"imgLoading"},[_c('div',{staticClass:"loader-div",attrs:{"data-loader":"circle-side"}})]),_c('img',{directives:[{name:"show",rawName:"v-show",value:(item?.mimeType !== 'loading'),expression:"item?.mimeType !== 'loading'"}],attrs:{"src":_vm.url + '/' + item?.id + '/download?preview=true',"alt":item?.name}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(item?.mimeType !== 'loading'),expression:"item?.mimeType !== 'loading'"}],staticClass:"deleteModal"},[_c('Icon',{staticClass:"previewExpand",attrs:{"type":"ios-expand","size":"40","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.fullScreenImgByDom(_vm.url + '/' + item?.id + '/download?preview=true')}}}),_c('Icon',{staticClass:"previewDelete",attrs:{"type":"ios-trash-outline","size":"40","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.deleteById($event, item?.id)}}})],1)]):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'localImg' && _vm.fileSrcList.length > 0),expression:"previewType === 'localImg' && fileSrcList.length > 0"}],staticClass:"previewBoxM"},_vm._l((_vm.fileSrcList),function(item,index){return (_vm.manualUpload && item !== null)?_c('div',{key:'manualImg' + index,staticClass:"previewImg"},[_c('img',{attrs:{"src":item,"alt":'manualImg' + index}}),_c('div',{staticClass:"deleteModal"},[_c('Icon',{staticClass:"previewExpand",attrs:{"type":"ios-expand","size":"40","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.fullScreenImgByDom(item)}}}),_c('Icon',{staticClass:"previewDelete",attrs:{"type":"ios-trash-outline","size":"40","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)]):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'localList' && _vm.fileList.length > 0),expression:"previewType === 'localList' && fileList.length > 0"}],staticClass:"customFileListM"},_vm._l((_vm.fileList),function(item,index){return (_vm.manualUpload && item !== null)?_c('p',{key:'manualItem' + index,staticClass:"customFileListItem"},[(item?.name)?_c('Icon',{attrs:{"type":_vm.getFileTypeIconByName(item?.name)}}):_vm._e(),_c('span',{staticClass:"upNameT",attrs:{"title":_vm.t('r.download')},on:{"click":function($event){return _vm.downloadManualFile(item)}}},[_vm._v(_vm._s(_vm.getName(item)))]),_c('span',{staticClass:"btBoxJ"},[(_vm.showPreview(item))?_c('Icon',{staticClass:"listBtH",attrs:{"type":"md-qr-scanner","size":"14","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.listExpand(item)}}}):_vm._e(),_c('Icon',{staticClass:"listBtH",attrs:{"type":"ios-close","size":"22","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)],1):_vm._e()}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewType === 'list' && _vm.fileDefaultList.length > 0),expression:"previewType === 'list' && fileDefaultList.length > 0"}],staticClass:"customFileListM"},_vm._l((_vm.fileDefaultList),function(item,index){return (!_vm.manualUpload && item !== null)?_c('div',{key:'defaultItem' + index,staticClass:"customFileListItem"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(item?.mimeType === 'loading'),expression:"item?.mimeType === 'loading'"}],staticClass:"listLoading"},[_c('div',{staticClass:"loader-div",attrs:{"data-loader":"circle-side"}})]),_c('Icon',{directives:[{name:"show",rawName:"v-show",value:(item?.mimeType !== 'loading'),expression:"item?.mimeType !== 'loading'"}],attrs:{"type":_vm.getFileTypeIconByName(item?.name)}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(item?.mimeType !== 'loading'),expression:"item?.mimeType !== 'loading'"}],staticClass:"upNameT",attrs:{"title":_vm.t('r.download')},on:{"click":function($event){return _vm.downloadDefaultFile(item)}}},[_vm._v(_vm._s(item?.name || _vm.t('r.file') + (index + 1)))]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(item?.mimeType !== 'loading'),expression:"item?.mimeType !== 'loading'"}],staticClass:"btBoxJ"},[(_vm.showPreview(item))?_c('Icon',{staticClass:"listBtH",attrs:{"type":"md-qr-scanner","size":"14","title":_vm.t('r.fView')},on:{"click":function($event){return _vm.listExpand(item)}}}):_vm._e(),_c('Icon',{staticClass:"listBtH",attrs:{"type":"ios-close","size":"22","title":_vm.t('r.delete')},on:{"click":function($event){return _vm.clearManualItem(index)}}})],1)],1):_vm._e()}),0)],1)
}
var uploadGroupvue_type_template_id_25214b81_staticRenderFns = []


;// CONCATENATED MODULE: ./src/utils/fullScreenImgByDom.js
/** created at 2020.05.08
 *@author ricky email:zhangqingcq@foxmail.com
 * @param {String}src - img src
 */




function fullScreenImgByDom(src) {
	const T = (...arg) => locale_t.apply(this, arg)

	const close = T('r.closePreview')
	const fullImg = T('r.fullImg')
	let bodyEl = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().first(document.getElementsByTagName('body'))
	let child = document.createElement('div')
	child.setAttribute('class', 'fullScreenImgByDom')
	child.innerHTML = `<div class="previewInner"><img src="${src}" alt="${fullImg}" ><i class="ivu-icon ivu-icon-md-close" title="${close}" ></i></div>`
	child.querySelector('.ivu-icon-md-close').addEventListener('click', function () {
		let bb = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().first(document.getElementsByTagName('body'))
		if (bb) {
			bb.removeChild(child)
		}
	})
	bodyEl.appendChild(child)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/uploadGroup/uploadGroup.vue?vue&type=script&lang=js

	
	
	
	
	
	

	/* harmony default export */ var uploadGroupvue_type_script_lang_js = ({
		name: 'uploadGroup',
		mixins: [mixins_locale],
		model: {
			prop: 'fileIdListProp',
			event: 'on-file-id-change'
		},
		props: {
			fileIdListProp: {
				type: [Array, Number, String, File],
				default() {
					return []
				}
			},
			url: {
				/*文件上传的地址*/
				type: String,
				default() {
					if (window.g?.mgrURL) {
						return window.g.mgrURL + '/web/v1/fsc/file'
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
				} else if (this.manualUpload && this.showImg && this.fileListItemIsIMG) {
					return 'localImg'
				} else if (this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
					return 'localList'
				} else if (!this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
					return 'list'
				}
			},
			urlT() {
				if (this.manualUpload) {
					return '//jsonplaceholder.typicode.com/posts/'
				} else {
					return this.url
				}
			},
			fileList: {
				get() {
					if (this.manualUpload) {
						return this.fileIdList
					} else {
						return this.fileIdList.map((e) => ({ id: e }))
					}
				},
				set(val) {
					if (this.manualUpload) {
						this.fileIdList = val
					} else {
						this.fileIdList = val.map((e) => e?.id)
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
							} else {
								if (/^\d*$/.test(this.fileIdListProp)) {
									return [Number(this.fileIdListProp)]
								}
								return [this.fileIdListProp]
							}
						case 'Array':
							return this.fileIdListProp.filter((e) => e !== '--')
						case 'File':
							return [this.fileIdListProp]
						default:
							return []
					}
				},
				set(val) {
					if (this.length === 1) {
						let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().first(val)
						this.$emit('on-file-id-change', temp || temp === 0 ? temp : null)
					} else {
						this.$emit('on-file-id-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(val))
					}
				}
			},
			fileListItemIsIMG() {
				let temp
				if (this.manualUpload) {
					temp = this.fileList
				} else {
					temp = this.fileDefaultList
				}
				for (let item of temp) {
					let type
					if (this.manualUpload) {
						type = item?.type
					} else {
						type = item?.mimeType
					}
					if (!type || (type && !(isImgByFile(type) || type === 'loading'))) {
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
						if (after?.length > 0) {
							this.fileSrcList = await this.getFileSrcList(after)
						} else {
							this.fileSrcList = []
						}
					} else if (after?.length > 0 && this.previewType !== 'localList') {
						let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(after)
						const _fileDefaultList = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.fileDefaultList)
						for (let item of temp) {
							if (item?.name === undefined) {
								//根据id获取文件名字
								if (item.id) {
									const fileT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().find(_fileDefaultList, (e) => e?.id === item.id)
									if (fileT) {
										//本地有名字，在本地拿
										item.name = fileT.name
										item.mimeType = fileT.mimeType
									} else {
										//本地没有，去服务器拿
										item.mimeType = 'loading'
										fetch
											.get(this.url + '/' + item.id)
											.then((r) => {
												item.name = r?.data?.returnValue?.[0]?.name || this.t('r.file') + external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().indexOf(temp, item)
												this.$set(item, 'mimeType', r?.data?.returnValue?.[0]?.mimeType || 'unknown')
											})
											.catch(() => {
												item.name = this.t('r.file') + external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().indexOf(temp, item)
											})
									}
								} else {
									item.name = this.t('r.unknown')
								}
							}
						}
						this.fileDefaultList = temp
					} else {
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
			getName(item) {
				return item?.name || (item?.split && external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().last(item.split('/'))) || item
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
				if (item?.id) {
					window.open(this.url + '/' + item.id + '/download')
				}
			},
			showPreview(file) {
				if (this.manualUpload) {
					return file?.type && isImgByFile(file.type)
				}
				return file?.id && file.mimeType && isImgByFile(file.mimeType)
			},
			listExpand(file) {
				//列表图片预览
				if (this.manualUpload) {
					if (!file) {
						return
					}
					getFileSrc(file).then((r) => {
						//图片的 base64 格式, 可以直接当成 img 的 src 属性值
						fullScreenImgByDom(r)
					})
				} else if (file?.id) {
					fullScreenImgByDom(this.url + '/' + file.id + '/download?preview=true')
				}
			},
			downloadManualFile(file) {
				if (myTypeof(file) === 'String' && file.indexOf('http') > -1) {
					window.open(file)
				} else if (myTypeof(file) === 'File') {
					getFileSrc(file).then((r) => {
						downloadFileReaderFile(file.name, r)
					})
				}
			},
			handelManualUpload(file) {
				if (this.manualUpload) {
					if (file) {
						let type = getFileTypeByName(file.name)
						if (this.format.length > 0 && this.format.indexOf(type) < 0) {
							swal(
								this.t('r.wrongFileType'),
								this.t('r.supportType') + ((this.format.length > 0 && String(this.format)) || this.t('r.none')),
								'warning'
							)
							return false
						}
						if (this.maxSize && file.size > this.maxSize * 1024) {
							swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + 'kb', 'warning')
							return false
						}
						let temp = this.fileList
						temp.push(file)
						this.fileList = temp
					}
					return false
				} else {
					return true
				}
			},
			uploadError(error, file, fileList) {
				console.warn(error)
				swal(this.t('r.uploadError'), '', 'error')
			},
			uploadSuccess(response, file, fileList) {
				if (response?.code === 0) {
					let temp = this.fileList
					file.id = response.data?.[0]?.id
					file.name = response.data?.[0]?.name
					file.mimeType = response.data?.[0]?.mimeType
					temp.push(file)
					this.fileList = temp
				} else {
					swal(this.t('r.uploadFail'), response?.message || '', 'error')
				}
			},
			overSize(file, fileList) {
				swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + ' kb', 'warning')
			},
			onFormatError(file, fileList) {
				swal(
					this.t('r.wrongFileType'),
					this.t('r.supportType') + ((this.format.length > 0 && String(this.format)) || this.t('r.none')),
					'warning'
				)
			},
			onPreview(file) {
				let id = file?.id
				let type = file?.mimeType
				if (id) {
					if (myTypeof(type) === 'String' && type.indexOf('image') > -1) {
						fullScreenImgByDom(this.url + '/' + id + '/download?preview=true')
					} else {
						window.open(this.url + '/' + id + '/download?preview=true')
					}
				}
			},
			onRemove(file, fileList) {
				let id = file?.response?.data?.[0]?.id
				this.deleteById(null, id)
			},
			deleteById(e, id) {
				if (!id && id !== 0) {
					return
				}
				if (!this.disabled && this.fileIdList.indexOf(id) !== -1) {
					const fileIdList = this.fileIdList
					let temp = this.fileList
					temp.splice(fileIdList.indexOf(id), 1)
					this.fileList = temp
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/uploadGroup/uploadGroup.vue?vue&type=script&lang=js
 /* harmony default export */ var uploadGroup_uploadGroupvue_type_script_lang_js = (uploadGroupvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/uploadGroup/uploadGroup.vue





/* normalize component */
;
var uploadGroup_component = normalizeComponent(
  uploadGroup_uploadGroupvue_type_script_lang_js,
  uploadGroupvue_type_template_id_25214b81_render,
  uploadGroupvue_type_template_id_25214b81_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uploadGroup = (uploadGroup_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableSetting/tableSetting.vue?vue&type=template&id=6c6a60ff
var tableSettingvue_type_template_id_6c6a60ff_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.clickOutsideHandle),expression:"clickOutsideHandle"}],staticClass:"tabSetF"},[_c('div',{ref:"buttonRef",staticClass:"tabSetBt",on:{"click":_vm.labelClick}},[_c('Icon',{attrs:{"type":"md-settings","size":"17"}}),_c('span',{staticClass:"cannotSelect"},[_vm._v(_vm._s(_vm.t('r.tabSetting')))])],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"popperRef",staticClass:"tabSetCard",style:({ width: _vm.width, backgroundColor: _vm.bg }),attrs:{"data-transfer":_vm.transfer}},[_c('div',{staticClass:"topCheck"},[_c('Checkbox',{attrs:{"indeterminate":_vm.indeterminate,"value":_vm.checkAll},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleCheckAll.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.t('r.all')))]),_c('div',{staticClass:"btnR",staticStyle:{"float":"right","display":"inline-block"},on:{"click":_vm.save}},[_c('span',{staticClass:"iconfont icon-r-save"}),_c('span',[_vm._v(_vm._s(_vm.t('r.save')))])])],1),_c('CheckboxGroup',{model:{value:(_vm.checkAllGroup),callback:function ($$v) {_vm.checkAllGroup=$$v},expression:"checkAllGroup"}},_vm._l((_vm.groupX),function(itemT,index){return _c('Checkbox',{key:'tabSet_' + _vm.sKey + index,staticClass:"setItem",attrs:{"label":itemT?.label,"disabled":itemT?.disabled}})}),1)],1)])
}
var tableSettingvue_type_template_id_6c6a60ff_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/popper.js@1.16.1-lts/node_modules/popper.js/dist/esm/popper.js
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1-lts
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : __webpack_require__.g).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ var popper = (Popper);
//# sourceMappingURL=popper.js.map

;// CONCATENATED MODULE: ./src/directives/transfer-dom.js
// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
	if (node === void 0) {
		node = document.body
	}
	if (node === true) {
		return document.body
	}
	return node instanceof window.Node ? node : document.querySelector(node)
}

const directive = {
	inserted(el, { value }) {
		if (el.dataset && el.dataset.transfer !== 'true') {
			return false
		}
		el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom'
		const parentNode = el.parentNode
		if (!parentNode) {
			return
		}
		const home = document.createComment('')
		let hasMovedOut = false

		if (value !== false) {
			parentNode.replaceChild(home, el) // moving out, el is no longer in the document
			getTarget(value).appendChild(el) // moving into new place
			hasMovedOut = true
		}
		if (!el.__transferDomData) {
			el.__transferDomData = {
				parentNode: parentNode,
				home: home,
				target: getTarget(value),
				hasMovedOut: hasMovedOut
			}
		}
	},
	componentUpdated(el, { value }) {
		if (el.dataset && el.dataset.transfer !== 'true') {
			return false
		}
		// need to make sure children are done updating (vs. `update`)
		const ref$1 = el.__transferDomData
		if (!ref$1) {
			return
		}
		// homes.get(el)
		const parentNode = ref$1.parentNode
		const home = ref$1.home
		const hasMovedOut = ref$1.hasMovedOut // recall where home is

		if (!hasMovedOut && value) {
			// remove from document and leave placeholder
			parentNode.replaceChild(home, el)
			// append to target
			getTarget(value).appendChild(el)
			el.__transferDomData = Object.assign({}, el.__transferDomData, {
				hasMovedOut: true,
				target: getTarget(value)
			})
		} else if (hasMovedOut && value === false) {
			// previously moved, coming back home
			parentNode.replaceChild(el, home)
			el.__transferDomData = Object.assign({}, el.__transferDomData, {
				hasMovedOut: false,
				target: getTarget(value)
			})
		} else if (value) {
			// already moved, going somewhere else
			getTarget(value).appendChild(el)
		}
	},
	unbind(el) {
		if (el.dataset && el.dataset.transfer !== 'true') {
			return false
		}
		el.className = el.className.replace('v-transfer-dom', '')
		const ref$1 = el.__transferDomData
		if (!ref$1) {
			return
		}
		if (el.__transferDomData.hasMovedOut === true) {
			el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el)
		}
		el.__transferDomData = null
	}
}

/* harmony default export */ var transfer_dom = (directive);

;// CONCATENATED MODULE: ./src/directives/clickoutside.js
/* harmony default export */ var clickoutside = ({
	bind(el, binding) {
		function documentHandler(e) {
			if (el.contains(e.target)) {
				return false
			}
			if (binding.expression) {
				binding.value(e)
			}
		}

		el.__vueClickOutside__ = documentHandler
		document.addEventListener('click', documentHandler)
	},
	update() {},
	unbind(el, binding) {
		document.removeEventListener('click', el.__vueClickOutside__)
		delete el.__vueClickOutside__
	}
});

;// CONCATENATED MODULE: ./src/utils/swalConfirm.js
/**
 * created 2020.07.03
 * @author Ricky <zhangqingcq@foxmail.com>
 */



/* harmony default export */ function swalConfirm(title, text, icon, onOk, closeOnClickOutside = false) {
	const T = (...arg) => locale_t.apply(this, arg)
	swal.call(this, {
		title: title === null ? T('r.info.title') : title,
		text: text === null ? T('r.info.text') : text,
		icon: icon === null ? 'warning' : icon,
		onOk: onOk,
		buttons: [T('r.cancel')],
		closeOnClickOutside: closeOnClickOutside
	})
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableSetting/tableSetting.vue?vue&type=script&lang=js

	/**
	 * 列表显示设置插件
	 * @desc 利用table的columns和localstorage对table进行列的显示设置
	 * @author ricky email:zhangqingcq@foxmail.com
	 * @date 2020.03.23
	 * @param {array} value - 插件的值（v-model,对应table的columns）必填
	 * @param {string} sKey - 插件数据在localstorage的唯一标识，命名规则：插件所在单文件名称_取名时间，如areaNew_202003231639 必填
	 * @param {string} [width] - 设置面板宽度
	 * @param {string} [bg] - 设置面板背景色，默认值可通过全局属性tableSettingBg改变，默认：`'#fff'`
	 * @param {string} [placement] - 设置面板呼出位置，默认：'bottom-end'
	 * @param {boolean} [defaultCheck] - 是否设置默认勾选（默认false，用于默认展示所有列），如果设为true（用于默认展示部分列）,则在v-model绑定的columns项里设置showSettingCheck:true
	 * @param {string} [storage] - 指定使用浏览器缓存类型，可选值`'localStorage'`、`'sessionStorage'`，默认：`localStorage`
	 * @param {boolean} [transfer] - 是否将面板放置于 body 内，在 Tabs、带有 overflow:hidden 的 上级容器内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果，默认值可通过全局属性tableSettingTransfer改变，默认：`true`
	 * @param {boolean} [eventsEnabled] - 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能，但可以让弹出面板根据页面环境动态改变位置和自身尺寸，提升体验，默认值可通过全局属性tableSettingEventsEnabled改变，默认：`true`
	 * @example 调用示例 <table-setting v-model="columns" sKey="tableSettingEx_202007030903"/>
	 */
	
	
	
	
	
	
	
	

	/* harmony default export */ var tableSettingvue_type_script_lang_js = ({
		name: 'tableSetting',
		mixins: [mixins_locale],
		directives: {
			TransferDom: transfer_dom,
			ClickOutside: clickoutside
		},
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
			width: {
				type: String,
				default: '240px'
			},
			bg: {
				type: String,
				default() {
					return this.tableSettingBg
				}
			},
			placement: {
				type: String,
				default: 'bottom-end'
			},
			defaultCheck: {
				type: Boolean,
				default: false
			},
			storage: {
				validator: (val) => oneOf(val, ['localStorage', 'sessionStorage']),
				default: 'localStorage'
			},
			transfer: {
				type: Boolean,
				default() {
					return this.tableSettingTransfer
				}
			},
			eventsEnabled: {
				/*是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能，但可以让弹出面板根据页面环境动态改变位置和自身尺寸，提升体验*/
				type: Boolean,
				default() {
					return this.tableSettingEventsEnabled
				}
			}
		},
		data() {
			return {
				indeterminate: true,
				checkAll: false,
				show: false,
				groupT: [],
				locale: null,
				popper: null
			}
		},
		computed: {
			groupX() {
				let unknown = this.t('r.unknown')
				if (this.value.length > this.groupT.length) {
					this.groupT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.value)
				}
				return this.groupT.map((e) => {
					let temp = { label: e?.title || unknown }
					if (e?.disableShowSetting) {
						temp.disabled = true
					}
					return temp
				})
			},
			disabledGroup() {
				return this.groupX.filter((e) => e?.disabled)
			},
			checkAllGroup: {
				get() {
					let unknown = this.t('r.unknown')
					return this.value.map((e) => e?.title || unknown)
				},
				set(val) {
					let subV = this.groupT.filter((e) => {
						for (let item of val) {
							if (item === e?.title) {
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
			if (this.$root?.$i18n?.locale) {
				this.locale = this.$root.$i18n.locale
			} else if (this.$root?.$lang) {
				this.locale = this.$root.$lang
			}
		},
		mounted() {
			let unknown = this.t('r.unknown')
			const localStr = this.getStorage()
			if (localStr) {
				this.checkAllGroup = JSON.parse(decodeURI(localStr))
			} else {
				if (this.defaultCheck) {
					this.checkAllGroup = this.value.filter((e) => e?.showSettingCheck).map((e) => e?.title || unknown)
				}
			}
			this.$nextTick(function () {
				this.popper = new popper(this.$refs.buttonRef, this.$refs.popperRef, {
					placement: this.placement,
					eventsEnabled: this.eventsEnabled,
					modifiers: {
						computeStyle: {
							gpuAcceleration: false
						},
						preventOverflow: {
							boundariesElement: 'window'
						}
					},
					onUpdate: (d) => {
						if (d?.popper && d.instance?.popper) {
							const c = this.calcPopperHeight(d)
							const { needChange } = c
							if (needChange) {
								const { height } = c
								const el = d.instance.popper
								if (el.style) {
									el.style.height = `${height}px`
								}
							}
						}
					}
				})
			})

			timer_setTimeout(() => {
				this.show = true
				this.popper.update()
				this.$nextTick(function () {
					this.show = false
				})
			}, 0)
		},
		beforeDestroy() {
			if (this.popper) {
				this.popper.destroy()
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
			close() {
				if (this.show) {
					if (this.getChange()) {
						swalConfirm(this.t('r.notSave'), '', 'warning', this.save)
					}
					this.show = false
				}
			},
			labelClick() {
				if (!this.show) {
					this.show = true
					this.$nextTick(function () {
						this.popper.update()
					})
				} else {
					this.close()
				}
			},
			save() {
				if (this.locale) {
					window[this.storage].setItem(this.sKey + '_' + this.locale, encodeURI(JSON.stringify(this.checkAllGroup)))
				} else {
					window[this.storage].setItem(this.sKey, encodeURI(JSON.stringify(this.checkAllGroup)))
				}
				this.close()
			},
			clickOutsideHandle(event) {
				if (this.show) {
					if (this.transfer) {
						const $el = this.$refs.popperRef
						if ($el === event.target || $el.contains(event.target)) {
							return
						}
					}

					event.preventDefault()
					this.close()
				}
			},
			handleCheckAll() {
				if (this.indeterminate) {
					this.checkAll = false
				} else {
					this.checkAll = !this.checkAll
				}
				this.indeterminate = false

				if (this.checkAll) {
					this.checkAllGroup = this.groupX.map((e) => e?.label)
				} else {
					this.checkAllGroup = this.disabledGroup.map((e) => e?.label)
				}
			},
			checkAllGroupChange(data) {
				if (data.length === this.groupX.length) {
					this.indeterminate = false
					this.checkAll = true
				} else if (data.length > this.disabledGroup.length) {
					this.indeterminate = true
					this.checkAll = false
				} else {
					this.indeterminate = false
					this.checkAll = false
				}
			},
			getStorage() {
				let localStr
				if (this.locale) {
					localStr = window[this.storage].getItem(this.sKey + '_' + this.locale)
				} else {
					localStr = window[this.storage].getItem(this.sKey)
				}
				return localStr
			},
			getChange() {
				let t = this.getStorage()
				if (t) {
					t = JSON.parse(decodeURI(t))
					if (t?.length !== this.checkAllGroup?.length) {
						return true
					} else {
						for (let e of t) {
							if (this.checkAllGroup.indexOf(e) === -1) {
								return true
							}
						}
					}
				} else {
					return true
				}
				return false
			},
			calcPopperHeight(d) {
				const { height } = d.popper
				const el = d.instance.popper
				//浏览器窗口高度
				const h = window.innerHeight
				let _h = 0
				if (el.childNodes?.length) {
					for (let i = 0; i < el.childNodes.length; i++) {
						_h += el.childNodes[i]?.offsetHeight
					}
				}
				if (h < height - 10 || height < _h) {
					return {
						needChange: true,
						height: h - 10 < _h ? h - 10 : _h
					}
				} else {
					return { needChange: false }
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/tableSetting/tableSetting.vue?vue&type=script&lang=js
 /* harmony default export */ var tableSetting_tableSettingvue_type_script_lang_js = (tableSettingvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/tableSetting/tableSetting.vue





/* normalize component */
;
var tableSetting_component = normalizeComponent(
  tableSetting_tableSettingvue_type_script_lang_js,
  tableSettingvue_type_template_id_6c6a60ff_render,
  tableSettingvue_type_template_id_6c6a60ff_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableSetting = (tableSetting_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/inputMap/inputMap.vue?vue&type=template&id=01e8061e
var inputMapvue_type_template_id_01e8061e_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"containerIKJ",style:(_vm.containerStyle)},[_c('Input',{ref:"mapInput",class:{ mapInputIKJ: _vm.showMap },attrs:{"placeholder":_vm.placeholder || _vm.t('r.search'),"disabled":_vm.disabled,"icon":"ios-search"},model:{value:(_vm.valueT.name),callback:function ($$v) {_vm.$set(_vm.valueT, "name", $$v)},expression:"valueT.name"}}),_c('div',{ref:_vm.vidT,style:(_vm.mapStyle),attrs:{"id":_vm.vidT}})],1)
}
var inputMapvue_type_template_id_01e8061e_staticRenderFns = []


// EXTERNAL MODULE: external {"root":"VueAMap","commonjs":"vue-amap","commonjs2":"vue-amap","amd":"vue-amap"}
var external_root_VueAMap_commonjs_vue_amap_commonjs2_vue_amap_amd_vue_amap_ = __webpack_require__(113);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/inputMap/inputMap.vue?vue&type=script&lang=js

	
	
	
	

	/* harmony default export */ var inputMapvue_type_script_lang_js = ({
		name: 'inputMap',
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
				type: [String, Number],
				default: '100%'
			},
			height: {
				type: [String, Number],
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
					} else if (!this.valProp.name) {
						temp = {
							...this.valProp,
							name: null
						}
					} else {
						temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.valProp)
					}
					return temp
				},
				set(val) {
					this.$emit('update-value', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(val))
				}
			},
			vidT() {
				return 'vidT' + Math.floor(Math.random() * 1000000000)
			},
			widthT() {
				if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isNumber(this.width)) {
					return this.width + 'px'
				} else {
					return this.width
				}
			},
			heightT() {
				if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isNumber(this.height)) {
					return this.height + 'px'
				} else if (this.height) {
					return this.height
				} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isNumber(this.width)) {
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
		beforeDestroy() {
			if (!this.mapX) {
				return
			}
			this.mapX.destroy()
			this.mapX = null
			this.geoCoder = null
			this.autoCompleteX = null
			this.infoWindow = null
		},
		watch: {
			valProp(after) {
				//更新地图mark
				if (after?.lng && after?.lat) {
					this.createMarker({
						lng: after.lng,
						lat: after.lat,
						name: after.name
					})
				}
			}
		},
		methods: {
			checkHeight() {
				if (this.$refs?.[this.vidT]?.clientHeight < 10 || !this.$refs[this.vidT]) {
					timer_setTimeout(this.checkHeight, 100)
				} else {
					/*高德地图实例初始化较慢，暂时延时1秒，后面寻找完美解决方案*/
					timer_setTimeout(this.initMap, 1000)
				}
			},
			initMap() {
				external_root_VueAMap_commonjs_vue_amap_commonjs2_vue_amap_amd_vue_amap_.lazyAMapApiLoaderInstance.load().then(() => {
					this.mapX = new AMap.Map(this.vidT, {}).on('complete', () => {
						this.geoCoder = new AMap.Geocoder()

						if (this.valProp?.lng && this.valProp?.lat) {
							this.createMarker({
								lng: this.valProp.lng,
								lat: this.valProp.lat,
								name: this.valProp.name
							})
						}
						this.autoCompleteX = new AMap.Autocomplete({
							input: this.$refs.mapInput.$el.children[1]
						}).on('select', (val) => {
							if (val?.poi?.name) {
								if (val.poi.location?.lng && val.poi.location?.lat) {
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

						this.mapX.on('hotspotclick', (d) => {
							this.createMarker({
								name: d.name,
								lng: d.lnglat.lng,
								lat: d.lnglat.lat
							})
							this.valueT = {
								name: d.name,
								lng: d.lnglat.lng,
								lat: d.lnglat.lat
							}
						})
					})
				})
			},
			createMarker({ lng, lat, name }) {
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
						this.infoWindow.open(this.mapX, e?.target?.getPosition?.())
					}
				})
				this.mapX.setFitView()
			},
			getAddress(lng, lat) {
				this.geoCoder.getAddress([lng, lat], (status, result) => {
					if (status === 'complete' && result.info === 'OK' && result.regeocode && result.regeocode.formattedAddress) {
						this.infoWindow = new AMap.InfoWindow({
							//创建信息窗体
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

;// CONCATENATED MODULE: ./src/components/inputMap/inputMap.vue?vue&type=script&lang=js
 /* harmony default export */ var inputMap_inputMapvue_type_script_lang_js = (inputMapvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/inputMap/inputMap.vue





/* normalize component */
;
var inputMap_component = normalizeComponent(
  inputMap_inputMapvue_type_script_lang_js,
  inputMapvue_type_template_id_01e8061e_render,
  inputMapvue_type_template_id_01e8061e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var inputMap = (inputMap_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableIconBtn/tableIconBtn.vue?vue&type=template&id=e1cee090
var tableIconBtnvue_type_template_id_e1cee090_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"has",rawName:"v-has",value:(_vm.has),expression:"has"}],staticClass:"tableBtnsG",class:{ disabled: _vm.disabled },attrs:{"title":_vm.title || _vm.t('r.button')},on:{"click":_vm.onClick}},[_c('Icon',{attrs:{"type":_vm.icon,"size":_vm.size}})],1)
}
var tableIconBtnvue_type_template_id_e1cee090_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableIconBtn/tableIconBtn.vue?vue&type=script&lang=js

	

	/* harmony default export */ var tableIconBtnvue_type_script_lang_js = ({
		name: 'tableIconBtn',
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

;// CONCATENATED MODULE: ./src/components/tableIconBtn/tableIconBtn.vue?vue&type=script&lang=js
 /* harmony default export */ var tableIconBtn_tableIconBtnvue_type_script_lang_js = (tableIconBtnvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/tableIconBtn/tableIconBtn.vue





/* normalize component */
;
var tableIconBtn_component = normalizeComponent(
  tableIconBtn_tableIconBtnvue_type_script_lang_js,
  tableIconBtnvue_type_template_id_e1cee090_render,
  tableIconBtnvue_type_template_id_e1cee090_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableIconBtn = (tableIconBtn_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=template&id=5c4282e8
var iconTxtBtnvue_type_template_id_5c4282e8_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"has",rawName:"v-has",value:(_vm.has),expression:"has"}],staticClass:"tabTopBtnsT",class:{ disabled: _vm.disabled },style:({ 'font-size': _vm.txtSize }),on:{"click":_vm.click}},[_c('Icon',{attrs:{"type":_vm.icon,"size":_vm.size}}),_vm._v(" "+_vm._s(_vm.name || _vm.t('r.button'))+" ")],1)
}
var iconTxtBtnvue_type_template_id_5c4282e8_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=script&lang=js

	

	/* harmony default export */ var iconTxtBtnvue_type_script_lang_js = ({
		name: 'iconTxtBtn',
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
				default() {
					return this.iconTxtBtnIconSize
				}
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
				return Math.floor((this.size / 17) * 12) + 'px'
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

;// CONCATENATED MODULE: ./src/components/iconTxtBtn/iconTxtBtn.vue?vue&type=script&lang=js
 /* harmony default export */ var iconTxtBtn_iconTxtBtnvue_type_script_lang_js = (iconTxtBtnvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/iconTxtBtn/iconTxtBtn.vue





/* normalize component */
;
var iconTxtBtn_component = normalizeComponent(
  iconTxtBtn_iconTxtBtnvue_type_script_lang_js,
  iconTxtBtnvue_type_template_id_5c4282e8_render,
  iconTxtBtnvue_type_template_id_5c4282e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var iconTxtBtn = (iconTxtBtn_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/showHidePanel/showHidePanel.vue?vue&type=template&id=1955b17d
var showHidePanelvue_type_template_id_1955b17d_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{style:(_vm.getBg)},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"contentX"},[_vm._t("default")],2),_c('div',{staticClass:"arrowA"},[_c('div',{staticClass:"btA",on:{"click":function($event){_vm.show = !_vm.show}}},[_c('Icon',{attrs:{"type":_vm.show ? 'ios-arrow-up' : 'ios-arrow-down',"size":"20"}})],1)])])
}
var showHidePanelvue_type_template_id_1955b17d_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/showHidePanel/showHidePanel.vue?vue&type=script&lang=js

	/* harmony default export */ var showHidePanelvue_type_script_lang_js = ({
		name: 'showHidePanel',
		props: ['bg'],
		data() {
			return {
				show: true
			}
		},
		computed: {
			getBg() {
				if (this.show) {
					return 'background:' + this.bg || 0
				} else {
					return ''
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/showHidePanel/showHidePanel.vue?vue&type=script&lang=js
 /* harmony default export */ var showHidePanel_showHidePanelvue_type_script_lang_js = (showHidePanelvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/showHidePanel/showHidePanel.vue





/* normalize component */
;
var showHidePanel_component = normalizeComponent(
  showHidePanel_showHidePanelvue_type_script_lang_js,
  showHidePanelvue_type_template_id_1955b17d_render,
  showHidePanelvue_type_template_id_1955b17d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var showHidePanel = (showHidePanel_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/selectInput/selectInput.vue?vue&type=template&id=2a62d766
var selectInputvue_type_template_id_2a62d766_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('Select',{style:(_vm.labelSelectStyle),attrs:{"disabled":Boolean(_vm.disabled),"transfer":""},model:{value:(_vm.selectVal),callback:function ($$v) {_vm.selectVal=$$v},expression:"selectVal"}},_vm._l((_vm.selectOption),function(item,index){return _c('Option',{key:'selectInputOp' + item?.value + index,style:({ textAlign: _vm.labelTextAlign }),attrs:{"value":item?.val}},[_vm._v(_vm._s(item?.label))])}),1),_c('Input',{style:(_vm.inputStyle),attrs:{"placeholder":_vm.placeholder || _vm.t('r.pInput'),"clearable":_vm.clearable,"disabled":Boolean(_vm.disabled)},on:{"on-change":_vm.inputChange},model:{value:(_vm.inputVal),callback:function ($$v) {_vm.inputVal=$$v},expression:"inputVal"}})],1)
}
var selectInputvue_type_template_id_2a62d766_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/selectInput/selectInput.vue?vue&type=script&lang=js

	
	

	/* harmony default export */ var selectInputvue_type_script_lang_js = ({
		name: 'selectInput',
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
					return this.value?.key || null
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
					return this.value?.val || null
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
				return { width: this.itemWidth + 'px' }
			}
		},
		methods: {
			inputChange(e) {
				if (e?.target?.value !== undefined) {
					this.handleChange(
						{
							key: this.selectVal,
							val: e?.target?.value
						},
						this
					)
				}
			},
			handleChange: external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().debounce((data, root) => {
				root.$emit('on-change', data)
			}, 500)
		}
	});

;// CONCATENATED MODULE: ./src/components/selectInput/selectInput.vue?vue&type=script&lang=js
 /* harmony default export */ var selectInput_selectInputvue_type_script_lang_js = (selectInputvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/selectInput/selectInput.vue





/* normalize component */
;
var selectInput_component = normalizeComponent(
  selectInput_selectInputvue_type_script_lang_js,
  selectInputvue_type_template_id_2a62d766_render,
  selectInputvue_type_template_id_2a62d766_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var selectInput = (selectInput_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/asyncCascader/asyncCascader.vue?vue&type=template&id=e90e2318
var asyncCascadervue_type_template_id_e90e2318_render = function render(){var _vm=this,_c=_vm._self._c;return _c('Cascader',{ref:"cascaderRT",attrs:{"data":_vm.data,"change-on-select":"","transfer":"","disabled":_vm.disabled,"render-format":_vm.format,"placeholder":_vm.placeholder || _vm.t('r.pSelect'),"filterable":_vm.filterable},on:{"on-change":_vm.onChange},model:{value:(_vm.val),callback:function ($$v) {_vm.val=$$v},expression:"val"}})
}
var asyncCascadervue_type_template_id_e90e2318_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/asyncCascader/asyncCascader.vue?vue&type=script&lang=js

	
	
	

	/* harmony default export */ var asyncCascadervue_type_script_lang_js = ({
		name: 'asyncCascader',
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
					if (window?.g?.mgrURL) {
						return window.g.mgrURL + '/web/v1/umc/orgs'
					}
					return ''
				}
			},
			valProp: {
				/*级联绑定值(v-model)*/
				type: [Array, Number, String]
			},
			optionVal: {
				/*v-model收集节点的哪些字段*/
				type: String,
				default: 'id'
			},
			optionLabel: {
				/*选项的标签对应接口字段*/
				type: String,
				default: 'name'
			},
			optionFilter: {
				/*筛选待选项的方法，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理）*/
				type: Function
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
					if (Array.isArray(valProp)) {
						return [].concat(valProp)
					} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isNumber(valProp)) {
						return findPath({
							group: this.data,
							condition: (item) => item?.value === valProp,
							pathKey: 'value'
						})
					} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isString(valProp)) {
						return valProp.split(this.separator)
					} else if (valProp === null) {
						return []
					}
				},
				set(val) {
					if (this.onlyLastVal) {
						if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(val)) {
							this.$emit('subVal', null)
							this.$emit('on-label-change', null)
						} else {
							this.$emit('subVal', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().last(val))
						}
					} else {
						if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEqual(this.valProp, val)) {
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
				this.$fetch
					.get(this.url)
					.then((r) => {
						let data = r?.data?.records || r?.data || r
						if (data) {
							if (myTypeof(this.optionFilter) === 'Function') {
								data = this.optionFilter(data)
							}
							this.data = this.dataFilter(data)
						} else {
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
					if (item?.children && !external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(item.children)) {
						tt.children = this.dataFilter(item.children)
					}
					temp.push(tt)
				}
				return temp
			},
			format(labels, selectedData) {
				if (this.onlyLastLabel) {
					return external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().last(labels)
				}
				return labels.join(this.separator)
			},
			onChange(val, selectedDetail) {
				let label = null
				if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(selectedDetail)) {
					label = selectedDetail
						.map((item) => {
							return item?.label
						})
						.join(this.separator)
				}
				this.$emit('on-label-change', label)
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/asyncCascader/asyncCascader.vue?vue&type=script&lang=js
 /* harmony default export */ var asyncCascader_asyncCascadervue_type_script_lang_js = (asyncCascadervue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/asyncCascader/asyncCascader.vue





/* normalize component */
;
var asyncCascader_component = normalizeComponent(
  asyncCascader_asyncCascadervue_type_script_lang_js,
  asyncCascadervue_type_template_id_e90e2318_render,
  asyncCascadervue_type_template_id_e90e2318_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var asyncCascader = (asyncCascader_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/editor/editor.vue?vue&type=template&id=43d14a14
var editorvue_type_template_id_43d14a14_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{attrs:{"id":_vm.editorId}})
}
var editorvue_type_template_id_43d14a14_staticRenderFns = []


// EXTERNAL MODULE: external {"root":"wangEditor","commonjs":"wangeditor","commonjs2":"wangeditor","amd":"wangeditor"}
var external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_ = __webpack_require__(470);
var external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_default = /*#__PURE__*/__webpack_require__.n(external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_);
// EXTERNAL MODULE: external {"root":"xss","commonjs":"xss","commonjs2":"xss","amd":"xss"}
var external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_ = __webpack_require__(298);
var external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_default = /*#__PURE__*/__webpack_require__.n(external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/editor/editor.vue?vue&type=script&lang=js

	
	
	
	
	
	
	
	

	const { $, BtnMenu } = (external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_default())

	/* harmony default export */ var editorvue_type_script_lang_js = ({
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
				validator: (val) => oneOf(val, ['html', 'text']),
				default: 'html'
			},
			focus: {
				type: Boolean,
				default: true
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
				/*限制上传图片大小,默认0.1MB*/
				type: Number,
				default: 102.4 * 1024
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
			showLinkImg: {
				/*是否使用插入网络图片功能*/
				type: Boolean,
				default: true
			},
			placeholder: {
				type: String,
				default: '请输入正文'
			},
			previewClass: {
				/*预览容器类名，用于自定义预览界面table、code、blockquote等标签样式，将你的全局样式class传给该属性，你自定义的全局样式将在编辑预览界面生效*/
				type: String,
				default: 'r-editor-view'
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
			let ops = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep((external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_default()).whiteList)

			for (let key in ops) {
				if (ops.hasOwnProperty(key) && myTypeof(ops[key]) === 'Array') {
					ops[key].unshift('style')
				}
			}

			this.xssP = new (external_root_xss_commonjs_xss_commonjs2_xss_amd_xss_default()).FilterXSS({ whiteList: ops })
		},
		mounted() {
			this.editor = new (external_root_wangEditor_commonjs_wangeditor_commonjs2_wangeditor_amd_wangeditor_default())(`#${this.editorId}`)

			const titleT = this.t('r.preview')
			const previewH = this.previewHandler

			//定义自定义菜单‘预览’
			class ViewMenu extends BtnMenu {
				constructor(editor) {
					const $elem = $(
						`<div class="w-e-menu" title="${titleT}"><i class="ivu-icon ivu-icon-ios-eye" style="font-size: 22px;"></i></div>`
					)

					super($elem, editor)
				}

				clickHandler() {
					previewH()
				}

				tryChangeActive() {}
			}

			//注册自定菜单
			this.editor.menus.extend('viewMenuKey', ViewMenu)

			this.editor.config.placeholder = this.placeholder
			this.editor.config.zIndex = 100
			this.editor.config.menus = [
				'head', // 标题
				'bold', // 粗体
				'fontSize', // 字号
				'fontName', //字体
				'italic', // 斜体
				'underline', // 下划线
				// 'strikeThrough',//删除线 暂时禁用
				'indent', //缩进
				'lineHeight', //行高
				'foreColor', // 文字颜色
				'backColor', // 背景颜色
				'link', // 插入链接
				'list', //列表
				'justify', // 对齐方式
				'quote', //引用
				'emoticon', //表情符
				'image', // 插入图片
				// 'video',//视频 暂时禁用
				'table', // 表格
				'splitLine', //分割线
				'undo', // 撤销
				'redo', // 重复
				'viewMenuKey' //自定义预览菜单
			]

			this.editor.config.focus = this.focus
			this.editor.config.colors = this.colors
			this.editor.config.fontNames = this.fontNames
			this.editor.config.uploadImgMaxSize = this.uploadImgMaxSize
			this.editor.config.uploadImgMaxLength = this.uploadImgMaxLength
			this.editor.config.showLinkImg = this.showLinkImg
			this.editor.config.menuTooltipPosition = 'down'
			if (myTypeof(this.uploadImgServe) === 'Object' || this.uploadImgShowBase64 === false) {
				this.editor.config.uploadImgShowBase64 = false
				let configS
				if (myTypeof(this.uploadImgServe) === 'Object') {
					configS = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.uploadImgServe)
				} else {
					configS = {}
				}

				// 配置 server 接口地址
				if (myTypeof(configS.customUploadImg) === 'Function') {
					//自定义上传逻辑
					this.editor.config.customUploadImg = configS.customUploadImg
				} else {
					this.editor.config.customUploadImg = (resultFiles, insertImgFn) => {
						configS = Object.assign(
							{
								params: {},
								url: window?.g?.mgrURL ? window.g.mgrURL + '/web/v1/fsc/file' : ''
							},
							configS
						)
						// resultFiles 是 input 中选中的文件列表
						// insertImgFn 是获取图片 url 后，插入到编辑器的方法

						let paramsF = Object.assign(
							{
								appId: 0,
								moduleId: 0,
								typeId: 0
							},
							configS.params
						)

						let temp = new FormData()
						for (let key in paramsF) {
							if (paramsF.hasOwnProperty(key) && paramsF[key] !== null) {
								temp.append(key, paramsF[key])
							}
						}
						for (let item of resultFiles) {
							temp.append('files', item)
						}
						fetch
							.post(configS.url, temp, null, [], {
								spin: true,
								headers: {
									'Content-Type': 'multipart/form-data'
								}
							})
							.then((r) => {
								if (r?.data && myTypeof(r.data) === 'Array') {
									for (let item of r.data) {
										if (isValidValue(item?.id)) {
											// 上传图片，返回结果，将图片插入到编辑器中
											insertImgFn(`${configS.url}/${item?.id}/download`)
										}
									}
								} else {
									this.$swal(this.t('r.uploadFail'), r?.message || '', 'error')
								}
							})
							.catch(() => {
								this.$swal(this.t('r.uploadError'), '', 'error')
							})
					}
				}
				this.editor.config.withCredentials = true
			} else {
				this.editor.config.uploadImgShowBase64 = this.uploadImgShowBase64
			}

			this.editor.config.customAlert = (s) => {
				swal.apply(this, [this.t('r.uploadFail'), s || '', 'warning'])
			}

			this.editor.config.onchange = (html) => {
				let text = this.editor?.txt?.text?.() || ''
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
				this.$watch(
					() => this.disabled,
					(after) => {
						if (after) {
							// 禁用编辑功能
							this.editor.$textElem.attr('contenteditable', false)
						} else {
							// 开启编辑功能
							this.editor.$textElem.attr('contenteditable', true)
						}
					},
					{ immediate: true }
				)
				this.$watch(
					() => this.value,
					(s) => {
						if (s !== this.valueT) {
							this.setHtml(s)
						}
					}
				)
			}, 10)
		},
		beforeDestroy() {
			let l = document.getElementById(this.editorId + 'preview')
			if (l) {
				document.getElementsByTagName('body')[0].removeChild(l)
			}
			if (!this.editor) {
				return
			}
			// 销毁编辑器
			this.editor.destroy()
			this.editor = null
			this.xssP = null
		},
		methods: {
			setHtml(val) {
				this.editor.txt.html(this.xssP.process(val))
			},
			previewHandler() {
				const id = this.editorId + 'preview'
				let preEl = document.getElementById(id)
				let _w = localStorage.getItem('editorPreviewW') || 300
				let _h = localStorage.getItem('editorPreviewH') || 500
				if (!preEl) {
					const body = document.getElementsByTagName('body')

					preEl = document.createElement('div')
					preEl.setAttribute('id', id)
					preEl.setAttribute('class', 'editor-preview-mask')
					preEl.innerHTML = `<div class="editor-preview-body"><div class="editor-preview-head"><div><span>宽</span><input type="number" value="${_w}" min="200"><span>高</span><input type="number" value="${_h}" min="300"></div><i class="ivu-icon ivu-icon-md-close"></i></div><div class="editor-preview-out-wall"><div class="editor-preview-wall ${this.previewClass}"></div></div></div>`

					let outWallE = preEl.children[0].children[1]
					let wallE = preEl.children[0].children[1].children[0]

					let inputW = preEl.children[0].children[0].children[0].children[1]

					const spaceW = 40
					const spaceH = 70

					const wHandler = (e) => {
						if (e?.type === 'keyup') {
							let notEnter = false
							if (e.key) {
								notEnter = e.key !== 'Enter'
							}
							if (notEnter) {
								return
							}
						}
						let val = e?.target?.value
						val = Number(val)
						if (wallE?.style?.width === val + 'px') {
							return
						}

						const bodyW = body[0].clientWidth

						if (val < 250) {
							val = 250
							e.target.value = 250
						} else if (val > bodyW - spaceW) {
							val = bodyW - spaceW
							e.target.value = bodyW - spaceW
						}
						wallE.style.width = val + 'px'
						localStorage.setItem('editorPreviewW', val)
					}

					inputW.addEventListener('blur', wHandler)
					inputW.addEventListener('keyup', wHandler)
					let inputH = preEl.children[0].children[0].children[0].children[3]

					const hHandler = (e) => {
						if (e?.type === 'keyup') {
							let notEnter = false
							if (e.key) {
								notEnter = e.key !== 'Enter'
							}
							if (notEnter) {
								return
							}
						}
						let val = e?.target?.value
						val = Number(val)

						if (outWallE?.style?.height === val + 'px') {
							return
						}

						const bodyH = body[0].clientHeight

						if (val < 300) {
							val = 300
							e.target.value = 300
						} else if (val > bodyH - spaceH) {
							val = bodyH - spaceH
							e.target.value = bodyH - spaceH
						}
						outWallE.style.height = val + 'px'
						localStorage.setItem('editorPreviewH', val)
					}

					inputH.addEventListener('blur', hHandler)
					inputH.addEventListener('keyup', hHandler)
					let closeE = preEl.children[0].children[0].children[1]
					closeE.addEventListener('click', (e) => {
						preEl.style.display = 'none'
					})

					wallE.innerHTML = this.value
					wallE.style.width = _w + 'px'
					outWallE.style.height = _h + 'px'
					body[0].append(preEl)
				} else {
					let wallE = preEl.children[0].children[1].children[0]
					let outWallE = preEl.children[0].children[1]
					wallE.innerHTML = this.value
					wallE.style.width = _w + 'px'
					outWallE.style.height = _h + 'px'
					preEl.style.display = 'block'
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/editor/editor.vue?vue&type=script&lang=js
 /* harmony default export */ var editor_editorvue_type_script_lang_js = (editorvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/editor/editor.vue





/* normalize component */
;
var editor_component = normalizeComponent(
  editor_editorvue_type_script_lang_js,
  editorvue_type_template_id_43d14a14_render,
  editorvue_type_template_id_43d14a14_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var editor = (editor_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/editorPro/editorPro.vue?vue&type=template&id=349a7844
var editorProvue_type_template_id_349a7844_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"editor-pro-root"},[_c('Toolbar',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"editor-pro-toolbar",attrs:{"editor":_vm.editor,"defaultConfig":_vm.toolbarConfigT,"mode":_vm.mode}}),_c('Editor',{staticClass:"editor-pro-editor",style:(_vm.editorTextareaStyle),attrs:{"defaultConfig":_vm.editorConfigT,"mode":_vm.mode},on:{"onCreated":_vm.onCreated},model:{value:(_vm.valueT),callback:function ($$v) {_vm.valueT=$$v},expression:"valueT"}})],1)
}
var editorProvue_type_template_id_349a7844_staticRenderFns = []


// EXTERNAL MODULE: external {"root":"@wangeditor/editor-for-vue","commonjs":"@wangeditor/editor-for-vue","commonjs2":"@wangeditor/editor-for-vue","amd":"@wangeditor/editor-for-vue"}
var editor_for_vue_ = __webpack_require__(308);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/editorPro/editorPro.vue?vue&type=script&lang=js

	
	
	

	/* harmony default export */ var editorProvue_type_script_lang_js = ({
		name: 'editorPro',
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
			toolbarConfig: {
				type: Object,
				default() {
					return {}
				}
			},
			editorConfig: {
				type: Object,
				default() {
					return {}
				}
			},
			mode: {
				type: String,
				validator: (v) => oneOf(v, ['default', 'simple']),
				default: 'default'
			},
			height: {
				type: String | Number,
				default: 300
			},
			placeholder: {
				type: String,
				default: ''
			},
			disabled: {
				/*是否禁用编辑功能*/
				type: Boolean,
				default: false
			}
		},
		components: {
			Editor: editor_for_vue_.Editor,
			Toolbar: editor_for_vue_.Toolbar
		},
		data() {
			return {
				editor: null
			}
		},
		computed: {
			valueT: {
				get() {
					return this.value
				},
				set(v) {
					this.$emit('input', v)
				}
			},
			toolbarConfigT() {
				return Object.assign(
					{
						placeholder: this.placeholder || this.t('r.pInput'),
						insertKeys: {
							index: 31,
							keys: ['previewX']
						}
					},
					this.toolbarConfig
				)
			},
			editorConfigT() {
				return Object.assign(
					{
						readOnly: this.disabled
					},
					this.editorConfig
				)
			},
			editorTextareaStyle() {
				return {
					height: typeof this.height === 'string' ? this.height : this.height + 'px'
				}
			}
		},
		beforeDestroy() {
			if (!this.editor) {
				return
			}
			this.editor.destroy()
			this.editor = null
		},
		watch: {
			disabled: {
				handler(a) {
					if (a) {
						this.editor.disable()
					} else {
						this.editor.enable()
					}
				}
			}
		},
		methods: {
			onCreated(d) {
				this.editor = Object.seal(d)
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/editorPro/editorPro.vue?vue&type=script&lang=js
 /* harmony default export */ var editorPro_editorProvue_type_script_lang_js = (editorProvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/editorPro/editorPro.vue





/* normalize component */
;
var editorPro_component = normalizeComponent(
  editorPro_editorProvue_type_script_lang_js,
  editorProvue_type_template_id_349a7844_render,
  editorProvue_type_template_id_349a7844_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var editorPro = (editorPro_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/alCascaderMC/alCascaderMC.vue?vue&type=template&id=30601b0f
var alCascaderMCvue_type_template_id_30601b0f_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ar-cascader',_vm._g(_vm._b({ref:"alCascaderRefLK",staticClass:"alCascaderMC",attrs:{"level":_vm.level,"disabled":_vm.disabled,"placeholder":_vm.placeholder || _vm.t('r.pSelect'),"transfer":_vm.transfer,"searchable":_vm.filterable},model:{value:(_vm.valueT),callback:function ($$v) {_vm.valueT=$$v},expression:"valueT"}},'ar-cascader',_vm.$attrs,false),_vm.$listeners))
}
var alCascaderMCvue_type_template_id_30601b0f_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/alCascaderMC/alCascaderMC.vue?vue&type=script&lang=js

	
	
	

	/* harmony default export */ var alCascaderMCvue_type_script_lang_js = ({
		name: 'alCascaderMC',
		mixins: [mixins_locale],
		model: {
			prop: 'value',
			event: 'subVal'
		},
		props: {
			value: {
				/*组件绑定的值（v-model）*/
				type: [String, Number, Array],
				default() {
					return null
				}
			},
			level: {
				/*精确至几级行政区域（0：省级，1：市级，2：县级）*/
				type: [Number, String],
				validator: (val) => oneOf(String(val), ['0', '1', '2']),
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
					if (this.value && (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isNumber(this.value) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isString(this.value))) {
						let temp = String(this.value).trim()

						let regP = /^\d*$/
						if (regP.test(temp)) {
							let lv1 = temp.substr(0, 2) + '0000'
							let lv2
							let lv3 = this.getLastCode(temp)
							if (lv3.length < 7) {
								lv2 = temp.substr(0, 4) + '00'
							} else {
								lv2 = temp.substr(0, 6)
							}
							if (/^8\d+$/.test(temp)) {
								return [lv1, lv3]
							}
							return [lv1, lv2, lv3]
						}

						if (temp.indexOf(this.separator) !== -1) {
							/*以中文名称和分隔符拼接的String地址*/
							return temp.split(this.separator)
						}

						return [temp]
					} else if (Array.isArray(this.value)) {
						return external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.value)
					} else {
						let refC = this.$refs.alCascaderRefLK
						if (refC) {
							refC.select = []
						}
						return []
					}
				},
				set(val) {
					if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(val)) {
						this.$emit('subVal', null)
						this.$emit('on-name-change', null)
					} else {
						let last = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().last(val)
						let code = null
						let name = null
						if (last) {
							code = last.code
						}
						if (code?.length < 12) {
							let t = [...code]
							while (t.length < 12) {
								t.push(0)
							}
							code = t.join('')
						}
						if (Array.isArray(val)) {
							name = val
								.map((item) => {
									return item?.name
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
		},
		methods: {
			getLastCode(d) {
				let t = [...d]
				while (t[t.length - 1] === '0') {
					t.pop()
				}
				return t.join('')
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/alCascaderMC/alCascaderMC.vue?vue&type=script&lang=js
 /* harmony default export */ var alCascaderMC_alCascaderMCvue_type_script_lang_js = (alCascaderMCvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/alCascaderMC/alCascaderMC.vue





/* normalize component */
;
var alCascaderMC_component = normalizeComponent(
  alCascaderMC_alCascaderMCvue_type_script_lang_js,
  alCascaderMCvue_type_template_id_30601b0f_render,
  alCascaderMCvue_type_template_id_30601b0f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var alCascaderMC = (alCascaderMC_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/checkboxTree/checkboxTree.vue?vue&type=template&id=1cff71a3
var checkboxTreevue_type_template_id_1cff71a3_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.initTree)?_c('Tree',{staticClass:"checkboxTreeGA",attrs:{"id":_vm.id,"data":_vm.dataT,"render":_vm.renderContent,"show-checkbox":""},on:{"on-check-change":_vm.updateVal,"on-toggle-expand":_vm.changeStyle}}):_vm._e()
}
var checkboxTreevue_type_template_id_1cff71a3_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/checkboxTree/checkboxTree.vue?vue&type=script&lang=js

	
	

	/* harmony default export */ var checkboxTreevue_type_script_lang_js = ({
		name: 'checkboxTree',
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
				type: [String, Array],
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
				initTree: true,
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
					this.initTree = false
					let temp = []
					this.initData(after, temp)
					this.dataT = temp
					this.$nextTick(function () {
						this.initTree = true

						if (this.inlineLeaf) {
							this.$nextTick(this.changeStyle)
						}
					})
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
				} else {
					key = this.collectVal
				}
				if (!key || JSON.stringify(after) === JSON.stringify(this.valueE)) {
					this.valueE = []
					return
				}
				/*清空dataT已选*/
				setValByOption({
					group: this.dataT,
					condition: (e) => e?.checked === true,
					key: 'checked',
					val: false
				})
				/*根据value设置dataT的已选*/
				if (type === 'a') {
					setValByOption({
						group: this.dataT,
						condition: (e) => external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().findIndex(after, [key, e[key]]) !== -1,
						key: 'checked',
						val: true
					})
				} else {
					setValByOption({
						group: this.dataT,
						condition: (e) => after.indexOf(e[key]) !== -1,
						key: 'checked',
						val: true
					})
				}
			},
			disabled: {
				handler(after) {
					setValByOption({
						group: this.dataT,
						condition: (e) => e?.disableCheckbox !== after,
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
						checked =
							external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().find(this.valueT, (e) => e[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().head(this.collectValT)] === item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().head(this.collectValT)]) !== undefined
					} else {
						checked = this.valueT.indexOf(item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().head(this.collectValT)]) !== -1
					}
					let temp = {
						name: item[this.label],
						expand: Boolean(this.expandAll || item?.expand),
						checked: checked,
						disableCheckbox: this.disabled
					}
					for (let keyI of this.collectValT) {
						temp[keyI] = item?.[keyI]
					}
					root.push(temp)
					if (item?.children?.length > 0) {
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
						checked =
							external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().find(this.valueT, (e) => e[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().head(this.collectValT)] === item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().head(this.collectValT)]) !== undefined
					} else {
						checked = this.valueT.indexOf(item[external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().head(this.collectValT)]) !== -1
					}
					let temp = {
						name: item[this.label],
						expand: Boolean(this.expandAll || item?.expand),
						checked: checked,
						disableCheckbox: this.disabled
					}
					for (let keyI of this.collectValT) {
						temp[keyI] = item[keyI]
					}
					root.push(temp)
					if (item?.children?.length > 0) {
						temp.children = []
						this.initData(item.children, temp.children)
					}
				}
			},
			renderContent(h, { root, node, data }) {
				let classA = ''
				let isLeaf = true
				if (data.children?.length > 0) {
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
				return h(
					'div',
					{
						style: {
							display: 'inline-block',
							width: '100%'
						},
						class: classA
					},
					[
						h(
							'span',
							{
								style: {
									fontWeight: data.children ? 'bold' : 'normal'
								}
							},
							data.name
						)
					]
				)
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
						let parent = item?.parentNode
						let tt = parent?.nextElementSibling
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
						if (!item?.children) {
							if (myTypeof(this.collectVal) === 'Array') {
								let valT = {}
								for (let keyI of this.collectVal) {
									valT[keyI] = item[keyI]
								}
								temp.push(valT)
							} else {
								temp.push(item?.[this.collectVal])
							}
						}
					}
				} else {
					for (let item of data) {
						if (myTypeof(this.collectVal) === 'Array') {
							let valT = {}
							for (let keyI of this.collectVal) {
								valT[keyI] = item?.[keyI]
							}
							temp.push(valT)
						} else {
							temp.push(item?.[this.collectVal])
						}
					}
				}
				this.valueE = temp
				this.$emit('subVal', temp)
				this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(temp))
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/checkboxTree/checkboxTree.vue?vue&type=script&lang=js
 /* harmony default export */ var checkboxTree_checkboxTreevue_type_script_lang_js = (checkboxTreevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/checkboxTree/checkboxTree.vue





/* normalize component */
;
var checkboxTree_component = normalizeComponent(
  checkboxTree_checkboxTreevue_type_script_lang_js,
  checkboxTreevue_type_template_id_1cff71a3_render,
  checkboxTreevue_type_template_id_1cff71a3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkboxTree = (checkboxTree_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue?vue&type=template&id=15893ea6
var checkboxGroupTwoClassvue_type_template_id_15893ea6_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"boxLPA"},[_c('div',{staticClass:"headerJ"},[_c('div',{staticClass:"firstT borderBoxAS"},[_vm._v(_vm._s(_vm.firstTitle || _vm.t('r.level.1')))]),_c('div',{staticClass:"secondT borderBoxAS"},[_vm._v(_vm._s(_vm.secondTitle || _vm.t('r.level.2')))])]),_vm._l((_vm.dataT),function(item,index){return _c('div',{key:'checkboxJ' + index,staticClass:"bodyJ"},[_c('div',{staticClass:"firstCol borderBoxAS"},[_c('Checkbox',{attrs:{"indeterminate":item.indeterminate,"disabled":_vm.disabled},on:{"on-change":function($event){return _vm.checkAll(item, $event)}},model:{value:(item.checked),callback:function ($$v) {_vm.$set(item, "checked", $$v)},expression:"item.checked"}},[_vm._v(_vm._s(item[_vm.label]))])],1),_c('div',{staticClass:"secondCol borderBoxAS"},_vm._l((item.children),function(secItem,indexSec){return _c('div',{key:'secItem' + indexSec,staticClass:"secItem"},[_c('Checkbox',{attrs:{"disabled":_vm.disabled},on:{"on-change":_vm.updateDataT},model:{value:(secItem.checked),callback:function ($$v) {_vm.$set(secItem, "checked", $$v)},expression:"secItem.checked"}},[_vm._v(_vm._s(secItem[_vm.label]))])],1)}),0)])})],2)
}
var checkboxGroupTwoClassvue_type_template_id_15893ea6_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue?vue&type=script&lang=js

	
	
	

	/* harmony default export */ var checkboxGroupTwoClassvue_type_script_lang_js = ({
		name: 'checkboxGroupTwoClass',
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
				type: [String, Array],
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
				let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.data)
				let valTemp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.leafChecked)
				for (let item of temp) {
					/*遍历data添加勾选信息*/
					let checkCount = 0
					if (item?.children && !external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(item.children)) {
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
								} else if (valTemp[valIndex] === secItem[this.collectVal]) {
									/*收集单个字段且当前节点的对应字段的值和value中当前遍历元素相等,判断为选中，不在遍历value其他元素，跳出循环*/
									secItem.checked = true
									checkCount++
									valTemp.splice(valIndex, 1)
									break
								}
							}
							/*避免checked为Undefined*/
							!secItem.checked && (secItem.checked = false)
						}
					}
					if (checkCount === 0) {
						item.checked = false
						item.indeterminate = false
					} else if (item?.children && checkCount === item.children.length) {
						item.checked = true
						item.indeterminate = false
					} else {
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
					if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEqual(this.leafChecked, after) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEqual(after, before)) {
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
					if (!isLeaf && !this.leaf && item?.checked && item.indeterminate === false) {
						/*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
						if (myTypeof(this.collectVal) === 'Array') {
							let ttO = {}
							for (let keyI of this.collectVal) {
								ttO[keyI] = item[keyI]
							}
							temp.push(ttO)
						} else if (myTypeof(this.collectVal) === 'String') {
							temp.push(item[this.collectVal])
						}
					}
					if (item?.children) {
						for (let secItem of item.children) {
							if (secItem?.checked) {
								if (myTypeof(this.collectVal) === 'Array') {
									let ttO = {}
									for (let keyI of this.collectVal) {
										ttO[keyI] = secItem[keyI]
									}
									temp.push(ttO)
								} else if (myTypeof(this.collectVal) === 'String') {
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
						this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(temp))
					} else {
						this.$nextTick(function () {
							this.getLeafChecked(this.dataT)
						})
					}
				} else {
					this.$emit('subVal', temp)
					this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(temp))
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue?vue&type=script&lang=js
 /* harmony default export */ var checkboxGroupTwoClass_checkboxGroupTwoClassvue_type_script_lang_js = (checkboxGroupTwoClassvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/checkboxGroupTwoClass/checkboxGroupTwoClass.vue





/* normalize component */
;
var checkboxGroupTwoClass_component = normalizeComponent(
  checkboxGroupTwoClass_checkboxGroupTwoClassvue_type_script_lang_js,
  checkboxGroupTwoClassvue_type_template_id_15893ea6_render,
  checkboxGroupTwoClassvue_type_template_id_15893ea6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkboxGroupTwoClass = (checkboxGroupTwoClass_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue?vue&type=template&id=c1294186
var checkboxGroupThreeClassvue_type_template_id_c1294186_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"boxLPB"},[_c('div',{staticClass:"headerF"},[_c('div',{staticClass:"firstT borderBoxKa"},[_vm._v(_vm._s(_vm.firstTitle || _vm.t('r.level.1')))]),_c('div',{staticClass:"secondT borderBoxKa"},[_vm._v(_vm._s(_vm.secondTitle || _vm.t('r.level.2')))]),_c('div',{staticClass:"thirdT borderBoxKa"},[_vm._v(_vm._s(_vm.thirdTitle || _vm.t('r.level.3')))])]),_vm._l((_vm.dataT),function(item,index){return _c('div',{key:'checkboxJ' + index,staticClass:"bodyF"},[_c('div',{staticClass:"firstCol borderBoxKa"},[_c('Checkbox',{attrs:{"indeterminate":item.indeterminate,"disabled":_vm.disabled},on:{"on-change":function($event){return _vm.checkChangeFirst(item, $event)}},model:{value:(item.checked),callback:function ($$v) {_vm.$set(item, "checked", $$v)},expression:"item.checked"}},[_vm._v(_vm._s(item[_vm.label]))])],1),_c('div',{staticClass:"rightBoxAL"},_vm._l((item.children),function(secItem,indexSec){return _c('div',{key:'secItem' + indexSec,staticClass:"rightBoxInner"},[_c('div',{staticClass:"secondCol borderBoxKa"},[_c('Checkbox',{attrs:{"indeterminate":secItem.indeterminate,"disabled":_vm.disabled},on:{"on-change":function($event){return _vm.checkChangeSecond(secItem, $event)}},model:{value:(secItem.checked),callback:function ($$v) {_vm.$set(secItem, "checked", $$v)},expression:"secItem.checked"}},[_vm._v(_vm._s(secItem[_vm.label]))])],1),_c('div',{staticClass:"thirdCol borderBoxKa"},_vm._l((secItem.children),function(thirdItem,indexThird){return _c('div',{key:'thirdItem' + indexThird,staticClass:"thirdItem"},[_c('Checkbox',{attrs:{"disabled":_vm.disabled},on:{"on-change":_vm.updateDataT},model:{value:(thirdItem.checked),callback:function ($$v) {_vm.$set(thirdItem, "checked", $$v)},expression:"thirdItem.checked"}},[_vm._v(_vm._s(thirdItem[_vm.label]))])],1)}),0)])}),0)])})],2)
}
var checkboxGroupThreeClassvue_type_template_id_c1294186_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue?vue&type=script&lang=js

	
	
	

	/* harmony default export */ var checkboxGroupThreeClassvue_type_script_lang_js = ({
		name: 'checkboxGroupThreeClass',
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
				type: [String, Array],
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
				let temp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.data)
				let valTemp = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.leafChecked)
				for (let item of temp) {
					/*遍历data添加勾选信息(1级)*/
					let checkCount = 0
					let indeterminateCount = 0
					if (item?.children && !external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(item.children)) {
						for (let secItem of item.children) {
							/*更深一层遍历children（2级）*/
							let checkCountB = 0
							if (secItem?.children && !external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(secItem.children)) {
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
										} else if (valTemp[valIndex] === thirdItem[this.collectVal]) {
											/*收集单个字段且当前节点的对应字段的值和value中当前遍历元素相等,判断为选中，不在遍历value其他元素，跳出循环*/
											thirdItem.checked = true
											checkCountB++
											valTemp.splice(valIndex, 1)
											break
										}
									}
									/*避免checked为Undefined*/
									!thirdItem.checked && (thirdItem.checked = false)
								}
							}
							if (checkCountB === 0) {
								secItem.checked = false
								secItem.indeterminate = false
							} else if (secItem.children && checkCountB === secItem.children.length) {
								secItem.checked = true
								secItem.indeterminate = false
								checkCount++
							} else {
								secItem.checked = false
								secItem.indeterminate = true
								indeterminateCount++
							}
						}
					}
					if (checkCount === 0 && indeterminateCount === 0) {
						item.checked = false
						item.indeterminate = false
					} else if (item?.children && checkCount === item.children.length) {
						item.checked = true
						item.indeterminate = false
					} else {
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
					if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEqual(this.leafChecked, after) || external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEqual(after, before)) {
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
				if (root?.children) {
					for (let item of root.children) {
						item.checked = isCheck
						if (item?.children) {
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
					if (!isLeaf && !this.leaf && item?.checked && item.indeterminate === false) {
						/*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
						if (myTypeof(this.collectVal) === 'Array') {
							let ttO = {}
							for (let keyI of this.collectVal) {
								ttO[keyI] = item[keyI]
							}
							temp.push(ttO)
						} else if (myTypeof(this.collectVal) === 'String') {
							temp.push(item[this.collectVal])
						}
					}
					if (item?.children) {
						for (let secItem of item.children) {
							if (!isLeaf && !this.leaf && secItem?.checked && secItem.indeterminate === false) {
								/*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
								if (myTypeof(this.collectVal) === 'Array') {
									let ttO = {}
									for (let keyI of this.collectVal) {
										ttO[keyI] = secItem[keyI]
									}
									temp.push(ttO)
								} else if (myTypeof(this.collectVal) === 'String') {
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
										} else if (myTypeof(this.collectVal) === 'String') {
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
						this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(temp))
					} else {
						this.$nextTick(function () {
							this.getLeafChecked(this.dataT)
						})
					}
				} else {
					this.$emit('subVal', temp)
					this.$emit('on-change', external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(temp))
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue?vue&type=script&lang=js
 /* harmony default export */ var checkboxGroupThreeClass_checkboxGroupThreeClassvue_type_script_lang_js = (checkboxGroupThreeClassvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/checkboxGroupThreeClass/checkboxGroupThreeClass.vue





/* normalize component */
;
var checkboxGroupThreeClass_component = normalizeComponent(
  checkboxGroupThreeClass_checkboxGroupThreeClassvue_type_script_lang_js,
  checkboxGroupThreeClassvue_type_template_id_c1294186_render,
  checkboxGroupThreeClassvue_type_template_id_c1294186_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkboxGroupThreeClass = (checkboxGroupThreeClass_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/fullScreenPop/fullScreenPop.vue?vue&type=template&id=470439f6
var fullScreenPopvue_type_template_id_470439f6_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPop),expression:"showPop"}],staticClass:"fullScreenPopBoxAM"},[_c('div',{staticClass:"headerAM",style:({
			color: _vm.headerColor,
			backgroundColor: _vm.headerBg,
			fontSize: _vm.hFontSize
		})},[_c('span',{staticClass:"headerTxtAM"},[_vm._v(_vm._s(_vm.title || _vm.t('r.title')))]),_c('header-bt',{attrs:{"icon":"md-return-left"},on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.t('r.back')))])],1),_c('div',{staticClass:"contentAM"},[_vm._t("default")],2)])
}
var fullScreenPopvue_type_template_id_470439f6_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/headerBt/headerBt.vue?vue&type=template&id=175c46a6
var headerBtvue_type_template_id_175c46a6_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{class:{
		headerBtCTM: true,
		withIconCTM: _vm.icon || _vm.withIcon,
		disabled: _vm.disabled
	},style:({ color: _vm.color, borderLeftColor: _vm.borderColor }),on:{"click":_vm.click}},[(_vm.icon)?_c('Icon',{attrs:{"size":_vm.iconSize,"type":_vm.icon}}):_vm._e(),_vm._t("default")],2)
}
var headerBtvue_type_template_id_175c46a6_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/headerBt/headerBt.vue?vue&type=script&lang=js

	/* harmony default export */ var headerBtvue_type_script_lang_js = ({
		name: 'headerBt',
		props: {
			icon: {
				type: String
			},
			withIcon: {
				type: Boolean,
				default: false
			},
			iconSize: {
				type: [Number, String],
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

;// CONCATENATED MODULE: ./src/components/headerBt/headerBt.vue?vue&type=script&lang=js
 /* harmony default export */ var headerBt_headerBtvue_type_script_lang_js = (headerBtvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/headerBt/headerBt.vue





/* normalize component */
;
var headerBt_component = normalizeComponent(
  headerBt_headerBtvue_type_script_lang_js,
  headerBtvue_type_template_id_175c46a6_render,
  headerBtvue_type_template_id_175c46a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var headerBt = (headerBt_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/fullScreenPop/fullScreenPop.vue?vue&type=script&lang=js

	
	
	

	/* harmony default export */ var fullScreenPopvue_type_script_lang_js = ({
		name: 'fullScreenPop',
		mixins: [mixins_locale],
		components: { headerBt: headerBt },
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
				type: [String, Number],
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

;// CONCATENATED MODULE: ./src/components/fullScreenPop/fullScreenPop.vue?vue&type=script&lang=js
 /* harmony default export */ var fullScreenPop_fullScreenPopvue_type_script_lang_js = (fullScreenPopvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/fullScreenPop/fullScreenPop.vue





/* normalize component */
;
var fullScreenPop_component = normalizeComponent(
  fullScreenPop_fullScreenPopvue_type_script_lang_js,
  fullScreenPopvue_type_template_id_470439f6_render,
  fullScreenPopvue_type_template_id_470439f6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fullScreenPop = (fullScreenPop_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formR/formR.vue?vue&type=template&id=561ea883
var formRvue_type_template_id_561ea883_render = function render(){var _vm=this,_c=_vm._self._c;return _c('Form',{key:_vm.formReRenderKey,ref:"formGroupXRef",staticClass:"formXN",attrs:{"model":_vm.valGroup,"rules":_vm.formRulesT,"label-width":_vm.labelWidth,"inline":_vm.inline,"show-message":_vm.showMessage}},[_c('FormItem',{staticStyle:{"display":"none"}},[_c('input',{attrs:{"type":"text"}})]),_vm._l((_vm.formDataT),function(box,n){return (_vm.formTeam)?_c('div',{key:'formTeamBox' + n,class:[_vm.teamClass, 'formTeamBox' + n]},_vm._l((box),function(item,i){return (_vm.getFormItemIfVal(item))?_c('item-r',{key:'formItem' + i,style:(_vm.formStyle),attrs:{"item":item,"item-style":_vm.itemStyle,"val-group":_vm.valGroup,"temp-keys":_vm.tempKeys,"inline":_vm.inline,"disabled":_vm.disabled,"label-width":_vm.labelWidth,"item-width":_vm.itemWidth,"mgr-url":_vm.mgrUrl,"upload-url":_vm.uploadUrl},on:{"item-change":_vm.itemChange,"re-validate":_vm.reValidateAndChangeHandle,"clear-temp-key-item":_vm.clearTempKeyItem,"select-input-change":_vm.onSelectInputChange,"al-name-change":_vm.alNameChange,"async-label-change":_vm.asyncLabelChange},scopedSlots:_vm._u([_vm._l((_vm.getSlotFormData(box)),function(s){return {key:s.slotName,fn:function(slotProps){return [_vm._t(s.slotName,null,{"valGroup":slotProps.valGroup})]}}})],null,true)}):_vm._e()}),1):_vm._e()}),_vm._l((_vm.formDataT),function(item,i){return (!_vm.formTeam && _vm.getFormItemIfVal(item))?_c('item-r',{key:'formItem' + i,style:(_vm.formStyle),attrs:{"item":item,"item-style":_vm.itemStyle,"val-group":_vm.valGroup,"temp-keys":_vm.tempKeys,"inline":_vm.inline,"disabled":_vm.disabled,"label-width":_vm.labelWidth,"item-width":_vm.itemWidth,"mgr-url":_vm.mgrUrl,"upload-url":_vm.uploadUrl},on:{"item-change":_vm.itemChange,"re-validate":_vm.reValidateAndChangeHandle,"clear-temp-key-item":_vm.clearTempKeyItem,"select-input-change":_vm.onSelectInputChange,"al-name-change":_vm.alNameChange,"async-label-change":_vm.asyncLabelChange},scopedSlots:_vm._u([_vm._l((_vm.getSlotFormData(_vm.formData)),function(s){return {key:s.slotName,fn:function(slotProps){return [_vm._t(s.slotName,null,{"valGroup":slotProps.valGroup})]}}})],null,true)}):_vm._e()}),(_vm.showLongOkBt)?_c('FormItem',[_c('Button',{style:(_vm.itemStyle),attrs:{"type":"primary","loading":_vm.btnLoading && _vm.showLoading,"disabled":_vm.disabled},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.longOkBtTxt || _vm.t('r.confirm')))])],1):_vm._e(),_c('div',{staticClass:"inlineBlock"},[(_vm.showInlineOkBt)?_c('Button',{class:{ inlineFormBtXN: _vm.inline, okBtnXN: true },attrs:{"type":"primary","loading":_vm.btnLoading && _vm.showLoading,"disabled":_vm.disabled},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.inlineOkBtTxt || _vm.t('r.confirm')))]):_vm._e(),(_vm.showInlineClearBt)?_c('Button',{class:{ inlineFormBtXN: _vm.inline },attrs:{"type":"dashed"},on:{"click":_vm.resetForm}},[_vm._v(_vm._s(_vm.inlineClearBtTxt || _vm.t('r.clear')))]):_vm._e()],1)],2)
}
var formRvue_type_template_id_561ea883_staticRenderFns = []


// EXTERNAL MODULE: external {"root":"moment","commonjs":"moment","commonjs2":"moment","amd":"moment"}
var external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_ = __webpack_require__(6);
var external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default = /*#__PURE__*/__webpack_require__.n(external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formR/itemR.vue?vue&type=template&id=7d616af7
var itemRvue_type_template_id_7d616af7_render = function render(){var _vm=this,_c=_vm._self._c;return _c('FormItem',{staticClass:"relativeBox",class:_vm.itemClass(_vm.item),attrs:{"label":_vm.item?.type !== 'radio' && _vm.item?.type !== 'checkbox' ? _vm.item?.label : ' ',"prop":_vm.item?.key || ''}},[(_vm.item?.type === 'txt')?_c('div',{class:{
			likeInputX: _vm.item?.likeInput,
			disabled: Boolean(_vm.item?.disabled) || _vm.disabled
		},staticStyle:{"display":"inline-block"},style:(_vm.itemStyle)},[_vm._v(" "+_vm._s(_vm.item?.valKey ? _vm.valGroup?.[_vm.item?.valKey] || '无' : _vm.item?.val)+" ")]):(_vm.item?.type === 'inputNumber')?_c('InputNumber',{style:(_vm.itemStyle),attrs:{"max":_vm.item?.max || _vm.item?.max === 0 ? _vm.item.max : Infinity,"min":_vm.item?.min || _vm.item?.min === 0 ? _vm.item.min : -Infinity,"precision":_vm.item?.precision,"step":_vm.item?.step || 1,"placeholder":_vm.item?.placeholder || _vm.t('r.pInput'),"disabled":Boolean(_vm.item?.disabled) || _vm.disabled,"readonly":Boolean(_vm.item?.readonly),"editable":_vm.item?.editable !== false,"active-change":Boolean(_vm.item?.activeChange),"clearable":_vm.item?.clearable !== false},on:{"on-blur":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item?.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item?.tempKey, $$v)},expression:"tempKeys[item?.tempKey]"}}):(_vm.item?.type === 'input')?_c('Input',{style:(_vm.itemStyle),attrs:{"type":_vm.item?.inputType ? _vm.item.inputType : _vm.item?.password ? 'password' : 'text',"maxlength":_vm.item?.maxLength || null,"password":Boolean(_vm.item?.password),"icon":_vm.item?.icon,"prefix":_vm.item?.prefix,"suffix":_vm.item?.suffix,"placeholder":_vm.item?.placeholder || _vm.t('r.pInput'),"disabled":Boolean(_vm.item?.disabled) || _vm.disabled,"clearable":!_vm.item?.password && _vm.item?.inputType === 'text' && _vm.item?.clearable !== false},on:{"on-blur":function($event){return _vm.itemChange($event, _vm.item)}},scopedSlots:_vm._u([(_vm.item?.slotPosition && _vm.item?.slotName)?{key:_vm.item.slotPosition,fn:function(){return [_vm._t(_vm.item.slotName,null,{"valGroup":_vm.valGroup})]},proxy:true}:null,(_vm.item?.slotPosition !== 'prepend' && _vm.item?.prepend)?{key:"prepend",fn:function(){return [_c('span',[_vm._v(_vm._s(_vm.item.prepend))])]},proxy:true}:null,(_vm.item?.slotPosition !== 'append' && _vm.item?.append)?{key:"append",fn:function(){return [_c('span',[_vm._v(_vm._s(_vm.item.append))])]},proxy:true}:null],null,true),model:{value:(_vm.tempKeys[_vm.item?.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item?.tempKey, $$v)},expression:"tempKeys[item?.tempKey]"}}):(_vm.item?.type === 'select')?_c('Select',{style:(_vm.itemStyle),attrs:{"filterable":_vm.item?.filterable === true || _vm.item?.filterable === false ? _vm.item?.filterable : false,"disabled":Boolean(_vm.item?.disabled) || _vm.disabled,"multiple":Boolean(_vm.item?.multiple),"placeholder":_vm.item?.placeholder || _vm.t('r.pSelect'),"transfer":"","clearable":_vm.item?.clearable !== false},on:{"on-change":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item?.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item?.tempKey, $$v)},expression:"tempKeys[item?.tempKey]"}},_vm._l((_vm.item?.options),function(optionItem,i){return _c('Option',{key:'option-' + _vm.item?.key + i,attrs:{"value":optionItem?.val,"label":optionItem?.label || optionItem?.val,"disabled":!!optionItem?.disabled}})}),1):(_vm.item?.type === 'selectInput')?_c('select-input',{attrs:{"label-width":_vm.labelWidth,"item-width":_vm.itemWidth,"select-option":_vm.item?.options || [],"placeholder":_vm.item?.placeholder || _vm.t('r.pInput'),"clearable":_vm.item?.clearable !== false,"disabled":Boolean(_vm.item?.disabled) || _vm.disabled},on:{"on-change":_vm.onSelectInputChange},model:{value:(_vm.tempKeys[_vm.item?.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item?.tempKey, $$v)},expression:"tempKeys[item?.tempKey]"}}):(_vm.item?.type === 'alCascader')?_c('al-cascader-m-c',{staticClass:"inlineBlock",style:(_vm.itemStyle),attrs:{"level":_vm.item?.level || _vm.item?.level === 0 ? _vm.item?.level : 2,"disabled":Boolean(_vm.item?.disabled) || _vm.disabled,"filterable":_vm.item?.filterable !== false,"placeholder":_vm.item?.placeholder || _vm.t('r.pSelect'),"change-on-select":Boolean(_vm.item?.changeOnSelect)},on:{"on-name-change":function($event){return _vm.alNameChange($event, _vm.item)}},model:{value:(_vm.valGroup[_vm.item?.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, _vm.item?.key, $$v)},expression:"valGroup[item?.key]"}}):(_vm.item?.type === 'asyncCascader')?_c('async-cascader',{style:(_vm.itemStyle),attrs:{"url":_vm.item.url || _vm.mgrUrl + '/web/v1/umc/orgs',"option-val":_vm.item.optionVal || 'id',"option-label":_vm.item.optionLabel || 'name',"option-filter":_vm.item.optionFilter || null,"only-last-val":_vm.item.onlyLastVal !== false,"only-last-label":_vm.item.onlyLastLabel !== false,"separator":_vm.item.separator || '/',"placeholder":_vm.item.placeholder || _vm.t('r.pSelect'),"filterable":Boolean(_vm.item.filterable),"disabled":Boolean(_vm.item.disabled) || _vm.disabled},on:{"on-label-change":function($event){return _vm.asyncLabelChange($event, _vm.item)}},model:{value:(_vm.valGroup[_vm.item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, _vm.item.key, $$v)},expression:"valGroup[item.key]"}}):(_vm.item?.type === 'radio')?_c('Radio',{attrs:{"disabled":Boolean(_vm.item.disabled) || _vm.disabled},on:{"on-change":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.valGroup[_vm.item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, _vm.item.key, $$v)},expression:"valGroup[item.key]"}},[_vm._v(_vm._s(_vm.item.label))]):(_vm.item?.type === 'radioGroup')?_c('RadioGroup',{style:(_vm.itemStyle),attrs:{"type":_vm.item.buttonType ? 'button' : null},on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}},_vm._l((_vm.item.options),function(radioItem){return _c('Radio',{key:'radioItem' + radioItem?.val,attrs:{"label":radioItem?.val,"border":Boolean(_vm.item.itemBorder),"disabled":Boolean(_vm.item.disabled) || _vm.disabled || radioItem?.disabled}},[(radioItem?.icon && !_vm.item.buttonType)?_c('Icon',{attrs:{"type":radioItem?.icon}}):_vm._e(),_c('span',[_vm._v(_vm._s(radioItem?.label || radioItem?.val))])],1)}),1):(_vm.item?.type === 'checkbox')?_c('Checkbox',{attrs:{"disabled":!!_vm.item.disabled},on:{"on-change":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.valGroup[_vm.item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, _vm.item.key, $$v)},expression:"valGroup[item.key]"}},[_vm._v(_vm._s(_vm.item.label))]):(_vm.item?.type === 'checkboxGroup')?_c('CheckboxGroup',{style:(_vm.itemStyle),on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}},_vm._l((_vm.item.options),function(checkItem){return _c('Checkbox',{key:'checkItem' + checkItem?.val,attrs:{"label":checkItem?.val,"disabled":Boolean(_vm.item.disabled) || _vm.disabled || checkItem?.disabled}},[(checkItem?.icon)?_c('Icon',{attrs:{"type":checkItem?.icon}}):_vm._e(),_c('span',[_vm._v(_vm._s(checkItem?.label || checkItem?.val))])],1)}),1):(_vm.item?.type === 'textarea')?_c('Input',{style:(_vm.itemStyle),attrs:{"type":"textarea","autosize":_vm.item.autosize || { minRows: 2 },"maxlength":_vm.item.maxLength || null,"show-word-limit":Boolean(_vm.item.showWordLimit),"placeholder":_vm.item.placeholder || _vm.t('r.pInput'),"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"clearable":_vm.item.clearable !== false},on:{"on-blur":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(_vm.item?.type === 'upload')?_c('upload-group',{staticClass:"inlineBlock",style:(_vm.itemStyle),attrs:{"url":_vm.item.url || _vm.uploadUrl,"manual-upload":Boolean(_vm.item.manualUpload),"format":_vm.item.format || [],"data":_vm.item.data,"max-size":_vm.item.maxSize || 0,"show-img":Boolean(_vm.item.showImg),"length":_vm.item.length || 0,"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"with-credentials":_vm.item.withCredentials !== false},on:{"on-file-id-change":function($event){return _vm.reValidateAndChangeHandle($event, _vm.item)}},model:{value:(_vm.valGroup[_vm.item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, _vm.item.key, $$v)},expression:"valGroup[item.key]"}}):(_vm.item?.type === 'date')?_c('DatePicker',{style:(_vm.itemStyle),attrs:{"type":_vm.item.dateType,"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"placement":"bottom-end","placeholder":_vm.item.placeholder || _vm.t('r.selectDate'),"options":_vm.item.dateOptions || null,"clearable":_vm.item.clearable !== false,"editable":false,"transfer":""},on:{"on-change":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(_vm.item?.type === 'time')?_c('TimePicker',{style:(_vm.itemStyle),attrs:{"type":_vm.item.dateType,"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"placement":"bottom-end","placeholder":_vm.item.placeholder || _vm.t('r.selectTime'),"steps":_vm.item.steps || [],"clearable":_vm.item.clearable !== false,"editable":false,"format":_vm.item.format || 'HH:mm:ss',"transfer":""},on:{"on-change":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(_vm.item?.type === 'monthRange')?_c('month-range',{style:(_vm.itemStyle),attrs:{"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"placement":"bottom-end","placeholder":_vm.item.placeholder || _vm.t('r.selectDate'),"options1":_vm.item.dateOptions1 || null,"options2":_vm.item.dateOptions2 || null},on:{"on-change":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(_vm.item?.type === 'editor')?_c('editor',{staticClass:"inlineBlock",style:(_vm.itemStyle),attrs:{"placeholder":_vm.item.placeholder || _vm.t('r.pInput'),"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"upload-img-max-size":_vm.item.uploadImgMaxSize || 100 * 1024,"upload-img-max-length":_vm.item.uploadImgMaxLength || 10,"upload-img-show-base64":_vm.item.uploadImgShowBase64 !== false,"show-link-img":_vm.item.showLinkImg !== false,"upload-img-serve":_vm.item.uploadImgServe,"preview-class":_vm.item.previewClass || 'r-editor-view'},on:{"on-change":function($event){return _vm.reValidateAndChangeHandle($event, _vm.item)}},model:{value:(_vm.valGroup[_vm.item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, _vm.item.key, $$v)},expression:"valGroup[item.key]"}}):(_vm.item?.type === 'editorPro')?_c('editor-pro',{staticClass:"inlineBlock",style:(_vm.itemStyle),attrs:{"placeholder":_vm.item.placeholder || _vm.t('r.pInput'),"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"toolbar-config":_vm.item.toolbarConfig || {},"editor-config":_vm.item.editorConfig || {},"mode":_vm.item.mode || 'simple',"height":_vm.item.height || 300},on:{"input":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.valGroup[_vm.item.key]),callback:function ($$v) {_vm.$set(_vm.valGroup, _vm.item.key, $$v)},expression:"valGroup[item.key]"}}):(_vm.item?.type === 'inputMap')?_c('input-map',{style:(_vm.itemStyle),attrs:{"placeholder":_vm.item.placeholder || _vm.t('r.search'),"disabled":Boolean(_vm.item.disabled) || _vm.disabled,"show-map":_vm.item.showMap !== false,"height":_vm.item.mapHeight || '250px'},on:{"on-change":function($event){return _vm.itemChange($event, _vm.item)}},model:{value:(_vm.tempKeys[_vm.item.tempKey]),callback:function ($$v) {_vm.$set(_vm.tempKeys, _vm.item.tempKey, $$v)},expression:"tempKeys[item.tempKey]"}}):(_vm.item?.type === 'custom')?_c('div',{staticClass:"inlineBlock",style:(_vm.itemStyle)},[_vm._t(_vm.item.slotName,null,{"valGroup":_vm.valGroup})],2):_vm._e(),(Boolean(_vm.item?.info))?_c('div',{staticClass:"formInfoTxtXN"},[_vm._v(_vm._s(_vm.item?.info))]):_vm._e(),(Boolean(_vm.item?.title))?_c('div',{staticClass:"formTitleTxtXN"},[_vm._v(" "+_vm._s(_vm.item?.title)+" ")]):_vm._e()],1)
}
var itemRvue_type_template_id_7d616af7_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/monthRange/monthRange.vue?vue&type=template&id=65d4283e
var monthRangevue_type_template_id_65d4283e_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"monthRangeBoxR"},[_c('DatePicker',{attrs:{"open":_vm.openB,"value":_vm.valueB,"transfer":"","type":"month","placement":_vm.placement,"options":_vm.options2},on:{"on-change":_vm.changeB,"on-clickoutside":_vm.close}},[_c('div',{staticClass:"bRoot"})]),_c('DatePicker',{attrs:{"open":_vm.openA,"value":_vm.valueA,"transfer":"","type":"month","placement":_vm.placement,"options":_vm.options1},on:{"on-change":_vm.changeA,"on-clickoutside":_vm.close}},[_c('div',{on:{"click":_vm.focus}},[_c('Input',{staticClass:"aRoot",attrs:{"readonly":"","placeholder":_vm.placeholder || _vm.t('r.selectDate'),"disabled":_vm.disabled},scopedSlots:_vm._u([{key:"suffix",fn:function(){return [_c('Icon',{attrs:{"type":_vm.mouseOver && (_vm.valueA || _vm.valueB) && !_vm.disabled ? 'ios-close-circle' : 'ios-calendar-outline'}})]},proxy:true}]),model:{value:(_vm.valueT),callback:function ($$v) {_vm.valueT=$$v},expression:"valueT"}})],1)])],1)
}
var monthRangevue_type_template_id_65d4283e_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/monthRange/monthRange.vue?vue&type=script&lang=js

	

	/* harmony default export */ var monthRangevue_type_script_lang_js = ({
		name: 'monthRange',
		mixins: [mixins_locale],
		model: {
			prop: 'value',
			event: 'on-change'
		},
		props: {
			value: {
				type: Array,
				default() {
					return [null, null]
				}
			},
			placement: {
				type: String,
				default: 'bottom-start'
			},
			placeholder: {
				type: String
			},
			options1: {
				type: Object
			},
			options2: {
				type: Object
			},
			disabled: {
				/*整张表禁用，仅展示*/
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				openA: false,
				openB: false,
				mouseOver: false
			}
		},
		computed: {
			valueA: {
				get() {
					return this.value?.[0] || null
				},
				set(v) {
					this.$emit('on-change', [v, this.valueB])
				}
			},
			valueB: {
				get() {
					return this.value?.[1] || null
				},
				set(v) {
					this.$emit('on-change', [this.valueA, v])
				}
			},
			valueT() {
				return (this.valueA || '') + (((this.valueA || this.valueB) && ' - ') || '') + (this.valueB || '')
			}
		},
		mounted() {
			document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix').addEventListener('mouseover', () => {
				this.mouseOver = true
			})
			document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix').addEventListener('mouseout', () => {
				this.mouseOver = false
			})
			document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix').addEventListener('click', (e) => {
				if (!this.disabled && (this.valueA || this.valueB)) {
					e?.stopPropagation?.()
					this.clear()
				}
			})
		},
		methods: {
			focus() {
				if (!this.disabled) {
					this.openA = true
				}
			},
			changeA(d) {
				this.valueA = d
				this.openA = false
				this.openB = true
			},
			changeB(d) {
				this.valueB = d
				this.openB = false
			},
			clear() {
				this.$emit('on-change', [null, null])
			},
			close() {
				this.openA = false
				this.openB = false
				if (this.valueA && this.valueB === null) {
					this.valueA = null
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/monthRange/monthRange.vue?vue&type=script&lang=js
 /* harmony default export */ var monthRange_monthRangevue_type_script_lang_js = (monthRangevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/monthRange/monthRange.vue





/* normalize component */
;
var monthRange_component = normalizeComponent(
  monthRange_monthRangevue_type_script_lang_js,
  monthRangevue_type_template_id_65d4283e_render,
  monthRangevue_type_template_id_65d4283e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var monthRange = (monthRange_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formR/itemR.vue?vue&type=script&lang=js

	
	
	
	
	
	
	
	
	

	/* harmony default export */ var itemRvue_type_script_lang_js = ({
		name: 'itemR',
		mixins: [mixins_locale],
		components: {
			selectInput: selectInput,
			alCascaderMC: alCascaderMC,
			asyncCascader: asyncCascader,
			uploadGroup: uploadGroup,
			editor: editor,
			editorPro: editorPro,
			inputMap: inputMap,
			monthRange: monthRange
		},
		props: {
			item: Object,
			itemStyle: Object,
			valGroup: Object,
			tempKeys: Object,
			inline: Boolean,
			disabled: Boolean,
			labelWidth: Number,
			itemWidth: Number,
			mgrUrl: String,
			uploadUrl: String
		},
		methods: {
			itemClass(root) {
				return {
					withInfo: Boolean(root.info),
					withTitle: Boolean(root.title),
					inlineFormItemXN: this.inline,
					noLabel: root.type === 'selectInput',
					[root.class]: root.class,
					slotInput: root.slotPosition
				}
			},
			itemChange(e, root) {
				this.$emit('item-change', {
					e,
					root
				})
			},
			reValidateAndChangeHandle(e, root) {
				this.$emit('re-validate', {
					e,
					root
				})
			},
			onSelectInputChange(d) {
				this.$emit('select-input-change', d)
			},
			alNameChange(name, root) {
				this.$emit('al-name-change', {
					name,
					root
				})
			},
			asyncLabelChange(label, root) {
				this.$emit('async-label-change', {
					label,
					root
				})
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/formR/itemR.vue?vue&type=script&lang=js
 /* harmony default export */ var formR_itemRvue_type_script_lang_js = (itemRvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/formR/itemR.vue





/* normalize component */
;
var itemR_component = normalizeComponent(
  formR_itemRvue_type_script_lang_js,
  itemRvue_type_template_id_7d616af7_render,
  itemRvue_type_template_id_7d616af7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var itemR = (itemR_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formR/formR.vue?vue&type=script&lang=js

	
	
	
	
	
	
	

	/* harmony default export */ var formRvue_type_script_lang_js = ({
		name: 'formR',
		mixins: [mixins_locale],
		components: {
			ItemR: itemR
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
			},
			trim: {
				/*是否去除提交数据中的字符串首尾空格*/
				type: Boolean,
				default: true
			},
			teamClass: {
				/*分组表单-组容器class*/
				type: String,
				default: 'formTeamBox'
			}
		},
		data() {
			return {
				valGroup: {} /*表单项值，对外公开，提交时传递到外层*/,
				formDataT: [] /*表单结构数据*/,
				tempKeys: {} /*不对外暴露表单项值*/,
				watchGroup: [] /*需要监听的事件集合*/,
				mgrUrl: window?.g?.mgrURL || null,
				selectInputKeys:
					[] /*selectInput的key没有写死在formData中（因为是动态的）,为了在showingKeys中能捕捉到这类组件的key,特声明此变量*/,
				hiddenKeys: [] /*通过 setItemToValGroup 直接存入valGroup的字段*/,
				showLoading: false,
				formReRenderKey: Math.floor(Math.random() * 100000000 + 1000) /*刷新表单*/,
				uploadUrl: window?.g?.mgrURL
					? window.g.mgrURL + '/web/v1/fsc/file'
					: '/file' /*上传组件的文件上传地址，远程上传（直接上传到服务器）时，如果没设置，则用该地址*/,
				debounceCount: false
			}
		},
		computed: {
			formTeam() {
				return Array.isArray(external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().head(this.formData))
			},
			formStyle() {
				if (this.inline) {
					return {
						width: this.itemWidth + this.labelWidth + 'px'
					}
				}
				return {}
			},
			itemStyle() {
				if (this.inline) {
					return { width: '100%' }
				}
				return {
					width: this.contentWidth
				}
			},
			formRulesT() {
				/*计算规则*/
				let t = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.formRules)
				for (let k in t) {
					if (t.hasOwnProperty(k)) {
						if (Array.isArray(t[k])) {
							for (let e of t[k]) {
								if (!(e?.message || e?.validator)) {
									e.message = this.t('r.required')
								}
							}
						} else if (myTypeof(t[k]) === 'Object') {
							if (!(t[k].message || t[k].validator)) {
								t[k].message = this.t('r.required')
							}
						}
					}
				}
				return t
			},
			submitKeys() {
				/*展示的key(需要提交的)*/
				let t = []
				if (this.formTeam) {
					for (let e of this.formDataT) {
						this.submitItems(e, t)
					}
				} else {
					this.submitItems(this.formDataT, t)
				}
				return t.concat(this.selectInputKeys, this.hiddenKeys)
			},
			showingKeys() {
				let t = []
				if (this.formTeam) {
					for (let e of this.formDataT) {
						this.showingItems(e, t)
					}
				} else {
					this.showingItems(this.formDataT, t)
				}
				return t
			}
		},
		created() {
			this.initValGroup()
			this.initFormDataT()
		},
		methods: {
			getSlotFormData(d) {
				/*私有，获取插槽数据*/
				return d.filter((e) => e?.slotName)
			},
			/**
			 * 计算需要提交的key
			 * @param d 表单结构数据
			 * @param t 储存需要提交的key的对象
			 */
			submitItems(d, t) {
				for (let root of d) {
					if (root.showing === true && root.key && root.type !== 'selectInput') {
						t.push(root.key)
						if (root.key2) {
							t.push(root.key2)
						}
						if (root.collectLabel) {
							if (myTypeof(root.collectLabel) === 'Object' && root.collectLabel.key) {
								t.push(root.collectLabel.key)
							} else if (Array.isArray(root.collectLabel)) {
								for (let l of root.collectLabel) {
									if (l.key) {
										t.push(l.key)
									}
								}
							}
						}
					}
				}
			},
			/**
			 * 计算需要展示的key
			 * @param d 表单结构数据
			 * @param t 储存需要展示的key的对象
			 */
			showingItems(d, t) {
				for (let root of d) {
					if (root.showing === true && root.key && root.type !== 'selectInput') {
						t.push(root.key)
					}
				}
			},
			resetForm() {
				/*重置表单，会清空表单值并刷新表单dom，异步方法（公开）*/
				return new Promise((r) => {
					this.clearForm()
					this.refreshFormDom().then(() => {
						this.$emit('on-reset')
						r()
					})
				})
			},
			reRenderForm() {
				/*重新渲染表单，异步方法（公开）*/
				return new Promise((r) => {
					for (let f of this.watchGroup) {
						f()
					}
					this.watchGroup = []
					this.tempKeys = {}
					this.initValGroup()
					this.initFormDataT()

					this.refreshFormDom().then(() => {
						this.$emit('on-re-render')
						r()
					})
				})
			},
			refreshFormDom() {
				/*刷新表单dom，异步方法（公开）*/
				return new Promise((r) => {
					this.formReRenderKey = Math.floor(Math.random() * 100000000 + 1000)
					/*刷新表单*/
					this.$nextTick(function () {
						r()
					})
				})
			},
			clearForm() {
				/*清空表单值（私有，不推荐直接调用，可以调用resetForm）*/
				let defaultV = this.getDefaultValues()

				for (let k in this.valGroup) {
					if (this.valGroup.hasOwnProperty(k)) {
						if (isValidValue(defaultV[k])) {
							this.$set(this.valGroup, k, defaultV[k])
						} else {
							if (Array.isArray(this.valGroup[k])) {
								this.$set(this.valGroup, k, [])
							} else if (myTypeof(this.valGroup[k]) === 'Boolean') {
								this.$set(this.valGroup, k, false)
							} else {
								const formItem = findCollection(this.formData, (e) => e?.key === k)
								if (formItem && (formItem.type === 'editor' || formItem.type === 'editorPro')) {
									this.$set(this.valGroup, k, '')
								} else {
									this.$set(this.valGroup, k, null)
								}
							}
						}
					}
				}
				this.clearTempKeys(defaultV)
			},
			clearTempKeys(defaultV) {
				/*清空缓存表单值（私有，不推荐直接调用，可以调用resetForm）*/
				for (let k in this.tempKeys) {
					if (this.tempKeys.hasOwnProperty(k)) {
						if (isValidValue(defaultV[k])) {
							this.$set(this.tempKeys, k, defaultV[k])
						} else {
							if (Array.isArray(this.tempKeys[k])) {
								this.$set(this.tempKeys, k, [])
							} else if (
								myTypeof(this.tempKeys[k]) === 'Object' &&
								this.tempKeys[k].hasOwnProperty('key') &&
								this.tempKeys[k].hasOwnProperty('val')
							) {
								/*selectInput*/
								this.$set(this.tempKeys[k], 'val', null)
							} else {
								this.$set(this.tempKeys, k, null)
							}
						}
					}
				}
			},
			clearTempKeyItem(k) {
				/*清空缓存表单项值（私有）*/
				let defaultV = this.getDefaultValues()
				if (isValidValue(defaultV[k])) {
					this.$set(this.tempKeys, k, defaultV[k])
				} else {
					if (Array.isArray(this.tempKeys[k])) {
						this.tempKeys[k] = []
					} else {
						this.tempKeys[k] = null
					}
				}
			},
			getDefaultValues() {
				/*获取默认值（私有）*/
				let t = {}
				if (this.formTeam) {
					for (let e of this.formDataT) {
						this.defaultValItems(e, t)
					}
				} else {
					this.defaultValItems(this.formDataT, t)
				}
				return t
			},
			/**
			 * 从表单结构数据获取默认值
			 * @param d 表单结构数据
			 * @param a 储存默认值的对象
			 */
			defaultValItems(d, a) {
				for (let root of d) {
					if (root.tempKey && isValidValue(root.defaultVal)) {
						/*将默认值转换为表单项绑定值对应的格式*/
						this.getTempKeyDefaultVal(root, a)
					}
					if (root.key && isValidValue(root.defaultVal)) {
						a[root.key] = root.defaultVal
					}
					if (root.key2 && isValidValue(root.defaultVal2)) {
						a[root.key2] = root.defaultVal2
					}
				}
			},
			/**
			 * 判断是否展示表单项（私有，高频被调用方法，每次表单中有任何值更改，都会被调用formDataT的长度<formDataT.length>次，而且还可能触发连锁反应）
			 * @param root 表单项结构数据
			 */
			getFormItemIfVal(root) {
				if (root.show) {
					if (myTypeof(root.show) === 'Object') {
						return this.returnIfVal(root, this.dealIfItem(root.show))
					} else if (Array.isArray(root.show)) {
						if (root.showOr) {
							for (let x of root.show) {
								if (this.dealIfItem(x) === true) {
									return this.returnIfVal(root, true)
								}
							}
							return this.returnIfVal(root, false)
						} else {
							for (let x of root.show) {
								if (this.dealIfItem(x) === false) {
									return this.returnIfVal(root, false)
								}
							}
							return this.returnIfVal(root, true)
						}
					} else if (myTypeof(root.show) === 'Function') {
						return this.returnIfVal(root, root.show(this.valGroup))
					}
				} else if (!root.showing) {
					this.$set(root, 'showing', true)
				}
				return true
			},
			/**
			 * 判断表单项是否展示（私有）
			 * @param show 表单项的展示配置数据
			 * @returns {boolean}
			 */
			dealIfItem(show) {
				if (show.reg && typeof show.reg.test === 'function') {
					return show.reg.test(this.valGroup[show.key])
				} else if (Array.isArray(show.val)) {
					for (let v of show.val) {
						if (
							(this.valGroup[show.key] || this.valGroup[show.key] === 0 || this.valGroup[show.key] === false) &&
							v === '.'
						) {
							/*只要控制项有值及展示*/
							return true
						} else if (this.valGroup[show.key] === v) {
							return true
						}
					}
					return false
				} else {
					return false
				}
			},
			/**
			 * 将是否展示的结果写入表单结构对象，同时处理默认值相关逻辑（私有）
			 * @param root 表单项结构数据
			 * @param {boolean}val 是否展示的结果
			 */
			returnIfVal(root, val) {
				if (!root.showing && val && root.key) {
					this.$set(root, 'showing', val)

					if (root.defaultVal !== undefined) {
						/*对之前没展示且没值的表单项赋默认值*/
						if (root.tempKey) {
							if (
								this.tempKeys[root.tempKey] === null ||
								this.tempKeys[root.tempKey] === undefined ||
								((myTypeof(this.tempKeys[root.tempKey]) === 'Object' || Array.isArray(this.tempKeys[root.tempKey])) &&
									external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(this.tempKeys[root.tempKey]))
							) {
								this.getTempKeyDefaultVal(root, this.tempKeys)
							}
						} else if (this.valGroup[root.key] === null || this.valGroup[root.key] === undefined) {
							this.$set(this.valGroup, root.key, root.defaultVal)
						}
						if (
							root.key2 &&
							root.deafultVal2 !== undefined &&
							(this.valGroup[root.key2] === null || this.valGroup[root.key2] === undefined) &&
							root.type !== 'inputMap'
						) {
							this.valGroup[root.key2] = root.defaultVal2
						}
					}
					if (root.tempKey) {
						/*在隐藏表单项展示时把它的值赋给统计对象*/
						this.tempKeysWatchHandle(this.tempKeys[root.tempKey], root)
					}
				} else {
					this.$set(root, 'showing', val)
				}
				return val
			},
			/**
			 * 将使用tempKey的表单项的默认值赋转换成对应格式并储存(私有)
			 * @param root 表单项结构数据
			 * @param a 储存默认值的容器
			 */
			getTempKeyDefaultVal(root, a) {
				switch (root.type) {
					case 'selectInput':
						a[root.tempKey] = {
							key: root.key,
							val: root.defaultVal
						}
						break
					case 'inputMap':
						if (root.key3) {
							a[root.tempKey] = {
								lng: root.defaultVal || 0,
								lat: root.defaultVal2 || 0,
								name: root.defaultVal3 || ''
							}
						} else {
							a[root.tempKey] = {
								lng: root.defaultVal || 0,
								lat: root.defaultVal2 || 0
							}
						}
						break
					case 'input':
					case 'inputNumber':
					case 'textarea':
						a[root.tempKey] = root.defaultVal
						break
					case 'radioGroup':
					case 'select':
					case 'checkboxGroup':
						if (root.booleanVal) {
							a[root.tempKey] = Boolean(root.defaultVal) ? 1 : 0
						} else {
							a[root.tempKey] = root.defaultVal
						}
						break
					case 'date':
					case 'time':
					case 'monthRange':
						if (
							root.dateType === 'date' ||
							root.dateType === 'datetime' ||
							root.dateType === 'time' ||
							root.dateType === 'year' ||
							root.dateType === 'month'
						) {
							a[root.tempKey] = root.defaultVal
						} else if (
							root.dateType === 'daterange' ||
							root.dateType === 'datetimerange' ||
							root.dateType === 'timerange' ||
							root.type === 'monthRange'
						) {
							a[root.tempKey] = (root.defaultVal && root.defaultVal2 && [root.defaultVal, root.defaultVal2]) || []
						}
						break
				}
			},
			initFormDataT() {
				/*初始化表单结构（私有）*/
				let t = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.formData)
				if (this.formTeam) {
					for (let box of t) {
						this.initItems(box)
					}
				} else {
					this.initItems(t)
				}
				this.formDataT = t
			},
			initItems(d) {
				for (let root of d) {
					switch (root.type) {
						case 'selectInput':
							const tempKeyF = 'selectInput' + Math.floor(Math.random() * 100000000)
							root.tempKey = tempKeyF
							this.$set(this.tempKeys, tempKeyF, {
								key: root.key || null,
								val: root.defaultVal || null
							})
							this.watchGroup.push(
								this.$watch(
									() => this.tempKeys[tempKeyF],
									(after) => {
										this.tempKeysWatchHandle(after, root)
									},
									{ immediate: true }
								)
							)
							break
						case 'inputMap':
							const tempKeyE = 'inputMap' + Math.floor(Math.random() * 100000000)
							if (root.key) {
								root.tempKey = tempKeyE
								if (root.key3) {
									this.$set(
										this.tempKeys,
										tempKeyE,
										root.defaultVal !== undefined && root.defaultVal2 !== undefined
											? {
													lng: root.defaultVal,
													lat: root.defaultVal2,
													name: root.defaultVal3 || ''
												}
											: {
													lng: null,
													lat: null,
													name: null
												}
									)
								} else {
									this.$set(
										this.tempKeys,
										tempKeyE,
										root.defaultVal !== undefined && root.defaultVal2 !== undefined
											? {
													lng: root.defaultVal,
													lat: root.defaultVal2
												}
											: {
													lng: null,
													lat: null
												}
									)
								}
								this.watchGroup.push(
									this.$watch(
										() => this.tempKeys[tempKeyE],
										(after) => {
											this.tempKeysWatchHandle(after, root)
										},
										{ immediate: true }
									)
								)
							}
							break
						case 'input':
						case 'inputNumber':
						case 'textarea':
							const tempKeyD = 'inputT' + Math.floor(Math.random() * 100000000)
							if (root.key) {
								root.tempKey = tempKeyD
								this.$set(this.tempKeys, tempKeyD, root.defaultVal !== undefined ? root.defaultVal : null)
								this.watchGroup.push(
									this.$watch(
										() => this.tempKeys[tempKeyD],
										(after) => {
											this.tempKeysWatchHandle(after, root)
										},
										{ immediate: true }
									)
								)
							}
							break
						case 'select':
						case 'radioGroup':
						case 'checkboxGroup':
							if (!root.options) {
								root.options = []
							}
							if (root.asyncOption) {
								/*远程待选项*/
								if (root.changeOption) {
									/*待选项会根据条件改变*/
									if (myTypeof(root.changeOption) === 'Object') {
										if (root.changeOption.valKey && root.changeOption.key) {
											this.watchGroup.push(
												this.$watch(
													() => this.valGroup[root.changeOption.valKey],
													(after) => {
														let tV = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.tempKeys[root.tempKey])
														this.tempKeys[root.tempKey] = null

														if ((after || after === 0 || after === false) && root.optionUrl) {
															let urlT = root.optionUrl.indexOf('?') !== -1 ? root.optionUrl : root.optionUrl + '?'
															this.initOption(
																(urlT + '&' + root.changeOption.key + '=' + after).replace(/\?&/, '?'),
																root,
																tV
															)
														} else {
															root.options = []
															if (root.localOption) {
																root.options = [...root.localOption]
															}
															if (isValidValue(tV)) {
																this.recoverVal(tV, root)
															}
														}
													},
													{ immediate: true }
												)
											)
										}
									} else if (Array.isArray(root.changeOption)) {
										let go = true
										for (let cp of root.changeOption) {
											/*检验changeOption参数是否可用*/
											if (!cp.valKey || !cp.key) {
												go = false
												break
											}
										}
										if (go) {
											this.watchGroup.push(
												this.$watch(
													() => {
														let tUrl = ''
														for (let cp of root.changeOption) {
															let vT = this.valGroup[cp.valKey]
															if (vT || vT === 0 || vT === false) {
																/*如果条件有有效值，则拉取待选项*/
																tUrl += '&' + cp.key + '=' + vT
															} else if (!cp.notRequired) {
																/*条件为必填（notRequired!==true,默认必填），且没有有效值，则不拉取待选项*/
																return false
															}
														}
														return tUrl
													},
													(after) => {
														let tV = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.tempKeys[root.tempKey])
														this.tempKeys[root.tempKey] = null

														if (after && root.optionUrl) {
															let urlT = root.optionUrl.indexOf('?') !== -1 ? root.optionUrl : root.optionUrl + '?'
															this.initOption((urlT + after).replace(/\?&/, '?'), root, tV)
														} else {
															root.options = []
															if (root.localOption) {
																root.options = [...root.localOption]
															}

															if (isValidValue(tV)) {
																this.recoverVal(tV, root)
															}
														}
													},
													{
														immediate: true
													}
												)
											)
										} else {
											root.options = []
											if (root.localOption) {
												root.options = [...root.localOption]
											}
										}
									} else if (myTypeof(root.changeOption) === 'Boolean') {
										/*设置changeOption为true时,当待选项地址改变后重新拉取待选项，在使用该表单组件的地方改变传入的formData对应项的optionUrl*/
										this.watchGroup.push(
											this.$watch(
												() => findCollection(this.formData, (e) => e?.key === root.key).optionUrl,
												(after) => {
													let tV = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.tempKeys[root.tempKey])
													this.tempKeys[root.tempKey] = null

													if (after) {
														this.initOption(after, root, tV)
													} else {
														root.options = []
														if (root.localOption) {
															root.options = [...root.localOption]
														}

														if (isValidValue(tV)) {
															this.recoverVal(tV, root)
														}
													}
												},
												{
													immediate: true
												}
											)
										)
									}
								} else {
									this.initOption(root.optionUrl, root)
								}
							} else if (myTypeof(root.borrowOption) === 'String') {
								/*借用待选项*/
								root.options = findCollection(this.formDataT, (e) => e?.key === root.borrowOption).options
							}

							const tempKeyC = 'opEle' + Math.floor(Math.random() * 100000000)
							if (root.key) {
								root.tempKey = tempKeyC
								if ((root.type === 'select' && root.multiple) || root.type === 'checkboxGroup') {
									this.$set(this.tempKeys, tempKeyC, root.defaultVal !== undefined ? root.defaultVal : [])
								} else if (root.booleanVal) {
									this.$set(
										this.tempKeys,
										tempKeyC,
										root.defaultVal !== undefined ? (Boolean(root.defaultVal) ? 1 : 0) : null
									)
								} else {
									this.$set(this.tempKeys, tempKeyC, root.defaultVal !== undefined ? root.defaultVal : null)
								}

								this.watchGroup.push(
									this.$watch(
										() => this.tempKeys[tempKeyC],
										(after) => {
											this.tempKeysWatchHandle(after, root)
										},
										{
											immediate: true
										}
									)
								)
							}
							break
						case 'date':
						case 'time':
						case 'monthRange':
							const tempKeyB = 'date' + Math.floor(Math.random() * 100000000)
							root.tempKey = tempKeyB
							if (
								root.dateType === 'date' ||
								root.dateType === 'datetime' ||
								root.dateType === 'time' ||
								root.dateType === 'year' ||
								root.dateType === 'month'
							) {
								this.$set(this.tempKeys, tempKeyB, root.defaultVal || null)
							} else if (
								root.dateType === 'daterange' ||
								root.dateType === 'datetimerange' ||
								root.dateType === 'timerange' ||
								root.type === 'monthRange'
							) {
								this.$set(
									this.tempKeys,
									tempKeyB,
									(root.defaultVal && root.defaultVal2 && [root.defaultVal, root.defaultVal2]) || []
								)
							}
							this.watchGroup.push(
								this.$watch(
									() => this.tempKeys[tempKeyB],
									(after) => {
										this.tempKeysWatchHandle(after, root)
									}
								)
							)
							break
					}
				}
			},
			/**
			 * 初始化表单项的选项，如下拉选项，多选、单选组选项（私有）
			 * @param url 远程选项接口地址
			 * @param root 表单项结构数据对象
			 * @param itemVal 缓存的表单项旧值
			 */
			initOption(url, root, itemVal) {
				fetch
					.get(url)
					.then((r) => {
						let tOption = r?.data?.records || r?.data || r || []
						if (Array.isArray(tOption)) {
							if (myTypeof(root.optionFilter) === 'Function') {
								tOption = root.optionFilter(tOption)
							}
							if (root.optionLabel && root.optionVal) {
								/*label由多个字段组合成*/
								const arrLabel = Array.isArray(root.optionLabel)
								root.options.length = 0
								root.options.push(
									...tOption.map((eP) => {
										let rP = {}
										if (arrLabel) {
											/*组合成的label*/
											let rL = ''
											root.optionLabel.forEach((v, i) => {
												/*需要在label中显示的字段的值*/
												let lVal = String(eP[v])
												if (i === 1) {
													rL += '（' + lVal
												} else if (i > 1) {
													rL += '、' + lVal
												} else {
													rL += lVal
												}
											})
											rP = {
												label: rL + '）',
												val: eP[root.optionVal]
											}
										} else {
											rP = {
												label: eP[root.optionLabel],
												val: eP[root.optionVal]
											}
										}
										/*除了要收集绑定值，还要一并收集其他字段,则将其他字段加入到待选列表项*/
										if (root.collectLabel) {
											if (myTypeof(root.collectLabel) === 'Object') {
												if (root.collectLabel.valKey && root.collectLabel.valKey !== 'label') {
													rP[root.collectLabel.valKey] = eP[root.collectLabel.valKey]
												}
											} else if (Array.isArray(root.collectLabel)) {
												for (let tC of root.collectLabel) {
													if (tC.valKey && tC.valKey !== 'label') {
														rP[tC.valKey] = eP[tC.valKey]
													}
												}
											}
										}
										if (rP.val !== null && rP.val !== undefined) {
											return rP
										}
									})
								)
							} else {
								root.options.length = 0
								root.options.push(...tOption)
							}
						} else {
							root.options.length = 0
						}
						if (root.localOption) {
							root.options.unshift(...root.localOption)
						}
						if (isValidValue(itemVal)) {
							this.recoverVal(itemVal, root)
						}

						/*待选项禁用*/
						if (root.disableOptionByOthers) {
							if (myTypeof(root.disableOptionByOthers) === 'String') {
								this.watchGroup.push(
									this.$watch(
										() => this.valGroup[root.disableOptionByOthers],
										(after) => {
											this.clearTempKeyItem(root.tempKey)
											for (let iP of root.options) {
												if (iP.disabled) {
													this.$set(iP, 'disabled', false)
												}
											}
											if (after || after === 0 || after === false) {
												for (let iP of root.options) {
													if (iP.val === after) {
														this.$set(iP, 'disabled', true)
													}
												}
											}
										},
										{
											immediate: true
										}
									)
								)
							} else if (Array.isArray(root.disableOptionByOthers)) {
								this.watchGroup.push(
									this.$watch(
										() => {
											return root.disableOptionByOthers.filter((e) => e).map((e) => this.valGroup[e])
										},
										(after) => {
											this.clearTempKeyItem(root.tempKey)
											for (let iP of root.options) {
												if (iP.disabled) {
													this.$set(iP, 'disabled', false)
												}
											}
											if (after) {
												for (let iP of root.options) {
													for (let i = 0; i < after.length; i++) {
														if (iP.val === after[i]) {
															this.$set(iP, 'disabled', true)
															after.splice(i, 1)
															break
														}
													}
												}
											}
										},
										{
											immediate: true
										}
									)
								)
							}
						}
					})
					.catch((e) => {
						console.warn('拉取选项出错')
					})
			},
			/**
			 * 如果options中选项的值和缓存的表单项旧值相等,则为表单项恢复之前因待选项改变而清除的值（私有）
			 * @param itemVal 缓存的旧值
			 * @param root 表单项结构数据对象
			 */
			recoverVal(itemVal, root) {
				if (Array.isArray(root.options)) {
					if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().findIndex(root.options, { val: itemVal }) !== -1) {
						this.tempKeys[root.tempKey] = itemVal
					}
				}
			},
			initValGroup() {
				/*初始化表单项值（私有）*/
				this.valGroup = {}
				if (this.formTeam) {
					for (let e of this.formData) {
						this.initValItems(e)
					}
				} else {
					this.initValItems(this.formData)
				}
			},
			/**
			 * 根据表单结构数据，初始化valGroup
			 * @param d 表单结构数据
			 */
			initValItems(d) {
				for (let root of d) {
					if (root.key) {
						if (root.type === 'checkboxGroup' || (root.type === 'select' && root.multiple)) {
							this.$set(
								this.valGroup,
								root.key,
								root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : []
							)
						} else if (root.type === 'editor' || root.type === 'editorPro') {
							this.$set(
								this.valGroup,
								root.key,
								root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : ''
							)
						} else {
							this.$set(
								this.valGroup,
								root.key,
								root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : null
							)
							if (root.key2) {
								this.$set(
									this.valGroup,
									root.key2,
									root.defaultVal2 !== undefined && root.show === undefined ? root.defaultVal2 : null
								)
							}
						}
					}
				}
			},
			tempKeysWatchHandle(after, root) {
				/*将缓存表单值给统计对象（私有）*/
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
								if (root.key3) {
									this.valGroup[root.key3] = after.name
								}
							} else {
								this.valGroup[root.key] = null
								this.valGroup[root.key2] = null
								if (root.key3) {
									this.valGroup[root.key3] = null
								}
							}
							break
						case 'input':
						case 'inputNumber':
						case 'textarea':
							if (after || after === 0) {
								let reg = /^-?\d+(.\d+)?$/
								if (root.numberVal && reg.test(after)) {
									this.valGroup[root.key] = Number(after)
								} else {
									this.valGroup[root.key] = after
								}
							} else {
								this.valGroup[root.key] = null
							}
							break
						case 'select':
						case 'radioGroup':
						case 'checkboxGroup':
							if (root.booleanVal && !root.multiple) {
								this.valGroup[root.key] = after === undefined || after === '' || after === null ? null : Boolean(after)
							} else if (root.multiple || root.type === 'checkboxGroup') {
								this.valGroup[root.key] = Object.assign([], after)
							} else {
								this.valGroup[root.key] = after
							}
							/*除了要收集绑定值，还要一并收集其他字段*/
							if (root.collectLabel) {
								const targetOption = this.findOptions(root, after)

								if (myTypeof(root.collectLabel) === 'Object') {
									if (root.collectLabel.key && root.collectLabel.valKey) {
										const collectTempKey = this.findTempKey(root.collectLabel.key)
										let t = null
										if (Array.isArray(targetOption)) {
											t = targetOption.map((e) => e[root.collectLabel.valKey])
											this.$set(this.valGroup, root.collectLabel.key, t)
											if (collectTempKey) {
												this.$set(this.tempKeys, collectTempKey, t)
											}
										} else {
											if (targetOption && isValidValue(targetOption[root.collectLabel.valKey])) {
												t = targetOption[root.collectLabel.valKey]
											}
											this.$set(this.valGroup, root.collectLabel.key, t)
											if (collectTempKey) {
												this.$set(this.tempKeys, collectTempKey, t)
											}
										}

										let sameKeyCom = findCollection(this.formDataT, (e) => e?.key === root.collectLabel.key)
										if (sameKeyCom && sameKeyCom.tempKey) {
											this.tempKeys[sameKeyCom.tempKey] = this.valGroup[root.collectLabel.key]
										}
									}
								} else if (Array.isArray(root.collectLabel)) {
									for (let l of root.collectLabel) {
										if (l?.key && l.valKey) {
											const collectTempKey = this.findTempKey(l.key)
											let t = null

											if (Array.isArray(targetOption)) {
												t = targetOption.map((e) => e[l.valKey])
												this.$set(this.valGroup, l.key, t)
												if (collectTempKey) {
													this.$set(this.tempKeys, collectTempKey, t)
												}
											} else {
												if (targetOption && isValidValue(targetOption[l.valKey])) {
													t = targetOption[l.valKey]
												}
												this.$set(this.valGroup, l.key, t)
												if (collectTempKey) {
													this.$set(this.tempKeys, collectTempKey, t)
												}
											}

											let sameKeyCom = findCollection(this.formDataT, (e) => e?.key === l.key)
											if (sameKeyCom && sameKeyCom.tempKey) {
												this.tempKeys[sameKeyCom.tempKey] = this.valGroup[l.key]
											}
										}
									}
								}
							}
							break
						case 'date':
						case 'time':
						case 'monthRange':
							let tp = root.dateType

							const fm = {
								date: 'YYYY-MM-DD',
								daterange: 'YYYY-MM-DD',
								datetime: 'YYYY-MM-DD HH:mm:ss',
								datetimerange: 'YYYY-MM-DD HH:mm:ss',
								year: 'YYYY',
								month: 'YYYY-MM'
							}

							if (tp === 'date' || tp === 'datetime' || tp === 'time' || tp === 'year' || tp === 'month') {
								if (after) {
									if (tp === 'time') {
										this.valGroup[root.key] = after
									} else {
										this.valGroup[root.key] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after).format(root.format || fm[tp])
									}
									if (tp === 'date' && root.addTime) {
										this.valGroup[root.key] += ' 00:00:00'
									}
								} else {
									this.valGroup[root.key] = null
								}
							} else if (
								root.type === 'monthRange' ||
								tp === 'daterange' ||
								tp === 'datetimerange' ||
								tp === 'timerange'
							) {
								if (after?.[0] && after?.[1]) {
									if (tp === 'timerange') {
										this.valGroup[root.key] = after[0]
										this.valGroup[root.key2] = after[1]
									} else if (root.type === 'monthRange') {
										this.valGroup[root.key] = (root.format && external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[0]).format(root.format)) || after[0]
										this.valGroup[root.key2] = (root.format && external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[1]).format(root.format)) || after[1]
									} else {
										this.valGroup[root.key] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[0]).format(root.format || fm[tp])
										this.valGroup[root.key2] = external_root_moment_commonjs_moment_commonjs2_moment_amd_moment_default()(after[1]).format(root.format || fm[tp])
									}
									if (tp === 'daterange' && root.addTime) {
										this.valGroup[root.key] += ' 00:00:00'
										this.valGroup[root.key2] += ' 23:59:59'
									}
								} else {
									this.valGroup[root.key] = null
									this.valGroup[root.key2] = null
								}
							}
							break
					}
				}
			},
			findOptions(root, after) {
				/*collectLabel时找出选中的选项（私有）*/
				if (root.multiple || root.type === 'checkboxGroup') {
					if (after) {
						let t = []
						for (let e of root.options) {
							if (after.indexOf(e?.val) !== -1) {
								t.push(e)
							}
						}
						return t
					}
					return false
				} else {
					if (after || after === 0 || after === false) {
						for (let e of root.options) {
							if (e?.val === after) {
								return e
							}
						}
					}
					return false
				}
			},
			findTempKey(k) {
				if (this.formTeam) {
					for (let e of this.formDataT) {
						const t = this.findTempKeyItem(e, k)
						if (t) {
							return t
						}
					}
					return false
				}
				return this.findTempKeyItem(this.formDataT, k)
			},
			findTempKeyItem(d, k) {
				for (let root of d) {
					if (root.key === k) {
						return root.tempKey
					}
				}
				return false
			},
			setItemToValGroup(data, notClearOthers) {
				/*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示，公开）*/
				let t = {}
				for (let k in this.valGroup) {
					if (this.valGroup.hasOwnProperty(k) && data[k] !== undefined) {
						t[k] = data[k]
						delete data[k]
					}
				}
				this.updateValGroup(t, notClearOthers)
				for (let kk in data) {
					/*用Object.assign出错，只有第一次能正常合并*/
					if (data.hasOwnProperty(kk)) {
						if (this.hiddenKeys.indexOf(kk) < 0) {
							this.hiddenKeys.push(kk)
						}
						this.$set(this.valGroup, kk, data[kk])
					}
				}
			},
			/**
			 * 获取需要校验的表单项的key（私有）
			 * @param d 更新的数据对象
			 */
			getValidateKeys(d) {
				let t = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(d)
				if (this.formTeam) {
					let r = []
					for (let e of this.formData) {
						r.push(...this.getValidateItems(e, t))
					}
					return r
				}
				return this.getValidateItems(this.formData, t)
			},
			/**
			 * 获取需要校验的表单项的key（私有）
			 * @param a 表单结构数据
			 * @param d 更新的数据对象
			 */
			getValidateItems(a, d) {
				return a
					.filter((e) => {
						for (let k of Object.keys(d)) {
							/*需要校验的表单项满足条件：1.在更新队列；2.没有处于隐藏状态；3.不能是手动置空的表单项；*/
							if (
								e?.key === k &&
								this.showingKeys.indexOf(k) > -1 &&
								!(d[k] === null || ((Array.isArray(d[k]) || myTypeof(d[k]) === 'Object') && external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(d[k])))
							) {
								delete d[k]
								return true
							}
						}
						return false
					})
					.map((e) => e?.key)
			},
			/**
			 * 更新表单项的值（只能更新已有字段，公开）
			 * @param data 新数据
			 * @param notClearOthers 是否清空其他表单项，默认清空
			 */
			updateValGroup(data, notClearOthers = false) {
				let t = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(data)
				this.updateTempKeys(data, notClearOthers)
				/*先更新tempKeys再更新valGroup 避免更新同key的tempKeys元素清空valGroup元素*/
				for (let k in this.valGroup) {
					if (this.valGroup.hasOwnProperty(k) && data[k] !== undefined && data[k] !== '--') {
						if (Array.isArray(data[k])) {
							data[k] = data[k].filter((e) => e !== '--')
						} else if (myTypeof(data[k]) === 'Object') {
							for (let n in data[k]) {
								if (data[k].hasOwnProperty(n) && data[k][n] === '--') {
									data[k][n] = null
								}
							}
						}
						this.valGroup[k] = data[k]
					} else if (!notClearOthers) {
						this.valGroup[k] = Array.isArray(this.valGroup[k]) ? [] : null
					}
				}
				this.$nextTick(function () {
					this.validateFields(this.getValidateKeys(t))
				})
			},
			/**
			 * 更新未暴露表单项值（私有）
			 * @param data 新数据
			 * @param notClearOthers 是否清空其他表单项，默认清空
			 */
			updateTempKeys(data, notClearOthers = false) {
				if (this.formTeam) {
					for (let t of this.formDataT) {
						this.updateTempKeyItem(t, data, notClearOthers)
					}
				} else {
					this.updateTempKeyItem(this.formDataT, data, notClearOthers)
				}
			},
			/**
			 * 更新tampKey
			 * @param a 表单结构数据
			 * @param d 新数据
			 * @param notClearOthers 是否清空其他表单项，默认清空
			 */
			updateTempKeyItem(a, d, notClearOthers = false) {
				for (let root of a) {
					if (
						((notClearOthers && (d[root.key] !== undefined || d[root.key2] !== undefined)) || !notClearOthers) &&
						root.tempKey
					) {
						switch (root.type) {
							case 'inputMap':
								if (myTypeof(d[root.key]) === 'Number' && myTypeof(d[root.key2] === 'Number')) {
									if (root.key3) {
										this.tempKeys[root.tempKey] = {
											lng: d[root.key],
											lat: d[root.key2],
											name: d[root.key3]
										}
									} else {
										this.tempKeys[root.tempKey] = {
											lng: d[root.key],
											lat: d[root.key2]
										}
									}
								} else {
									if (root.key3) {
										this.tempKeys[root.tempKey] = {
											lng: null,
											lat: null,
											name: null
										}
									} else {
										this.tempKeys[root.tempKey] = {
											lng: null,
											lat: null
										}
									}
								}
								break
							case 'input':
							case 'inputNumber':
							case 'textarea':
								if ((d[root.key] && d[root.key] !== '--') || d[root.key] === 0) {
									this.tempKeys[root.tempKey] = d[root.key]
								} else {
									this.tempKeys[root.tempKey] = null
								}
								break
							case 'select':
							case 'radioGroup':
							case 'checkboxGroup':
								if ((d[root.key] && d[root.key] !== '--') || d[root.key] === 0 || d[root.key] === false) {
									if (root.multiple || root.type === 'checkboxGroup') {
										this.$set(this.tempKeys, root.tempKey, [...d[root.key]])
									} else if (root.booleanVal) {
										this.$set(this.tempKeys, root.tempKey, Boolean(d[root.key]) ? 1 : 0)
									} else {
										this.$set(this.tempKeys, root.tempKey, d[root.key])
									}
								} else {
									if (root.multiple || root.type === 'checkboxGroup') {
										/*当notClearOthers为false时用来清空*/
										this.$set(this.tempKeys, root.tempKey, [])
									} else {
										this.$set(this.tempKeys, root.tempKey, null)
									}
								}
								break
							case 'date':
							case 'time':
								if (
									root.dateType === 'date' ||
									root.dateType === 'datetime' ||
									root.dateType === 'year' ||
									root.dateType === 'month' ||
									root.dateType === 'time'
								) {
									this.tempKeys[root.tempKey] = d[root.key] && d[root.key] !== '--' ? d[root.key] : null
								} else if (
									root.dateType === 'daterange' ||
									root.dateType === 'datetimerange' ||
									root.dateType === 'timerange'
								) {
									this.tempKeys[root.tempKey] =
										(d[root.key] &&
											d[root.key] !== '--' &&
											d[root.key2] &&
											d[root.key2] !== '--' && [d[root.key], d[root.key2]]) ||
										[]
								}
								break
						}
					}
				}
			},
			/**
			 * 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值（公开）；
			 * @param {Object|Array} d 为对象（改变单个）或数组（改变多个），支持的属性：index（必填）-需要改变的formData项的索引值、
			 * indexB-当表单为`分组表单`时必填（表示表单项的二位数组索引第二位）、需要改变的属性，如要改变第二个表单组件的label和title,
			 * 则为:{index:1,label:XXX,title:XXX}
			 */
			updateFormDataT(d) {
				if (Array.isArray(d)) {
					for (let e of d) {
						this.changeDataHandle(e)
					}
				} else if (myTypeof(d) === 'Object') {
					this.changeDataHandle(d)
				}
			},
			/**
			 * 改变表单结构（私有）
			 * @param d 同updateFormDataT的 d
			 */
			changeDataHandle(d) {
				const { index, indexB, key, val } = d
				if (this.formTeam) {
					if ((index || index === 0) && (indexB || indexB === 0)) {
						if (key && d.hasOwnProperty('val')) {
							this.$set(this.formDataT[index][indexB], key, val)
						} else {
							for (let k of Object.keys(d)) {
								if (k !== 'index' && key !== 'indexB') {
									this.$set(this.formDataT[index][indexB], k, d[k])
								}
							}
						}
					}
				} else {
					if (index || index === 0) {
						if (key && d.hasOwnProperty('val')) {
							this.$set(this.formDataT[index], key, val)
						} else {
							for (let k of Object.keys(d)) {
								if (k !== 'index') {
									this.$set(this.formDataT[index], k, d[k])
								}
							}
						}
					}
				}
			},
			asyncLabelChange({ label, root }) {
				/*更新远程数据级联名称（私有）*/
				if (root.key2) {
					this.$set(this.valGroup, root.key2, label)
				}
				this.itemChange({
					e: label,
					root
				})
			},
			onSelectInputChange(d) {
				/*更新选择输入框值（私有）*/
				if (d.beforeKey) {
					external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().remove(this.selectInputKeys, (o) => o === d.beforeKey)
				}
				if (d.key) {
					if (this.selectInputKeys.indexOf(d.key) === -1) {
						this.selectInputKeys.push(d.key)
					}
					this.itemChange({
						e: null,
						root: d
					})
				}
			},
			alNameChange({ name, root }) {
				/*更新行政区域名称（私有）*/
				if (root.key2) {
					this.valGroup[root.key2] = name
				}
				this.itemChange({
					e: name,
					root
				})
			},
			/**
			 * 重新校验（私有）
			 * @param e 事件的$event对象，一般是组件change事件的值
			 * @param root 表单项结构数据
			 */
			reValidateAndChangeHandle({ e, root }) {
				this.itemChange({
					e: e,
					root
				})
				this.$nextTick(function () {
					this.$refs.formGroupXRef.validateField(root.key)
				})
			},
			/**
			 * 表单项值更新（私有）
			 * @param e 事件的$event对象，一般是组件change事件的值
			 * @param root 表单项结构数据
			 */
			itemChange({ e, root }) {
				timer_setTimeout(() => {
					let d = {
						event: e
					}
					if (root.key) {
						d[root.key] = this.valGroup[root.key]
					}
					if (root.key2) {
						d[root.key2] = this.valGroup[root.key2]
					}
					if (root.collectLabel && root.collectLabel.key) {
						d[root.collectLabel.key] = this.valGroup[root.collectLabel.key]
					} else if (Array.isArray(root.collectLabel)) {
						for (let l of root.collectLabel) {
							d[l.key] = this.valGroup[l.key]
						}
					}
					this.$emit('on-item-change', d)
				}, 500)
			},
			/**
			 * 获取需要提交的数据(私有)
			 * @return {{}}submit的值
			 */
			getValGroup() {
				let t = {}
				for (let e of this.submitKeys) {
					t[e] = this.valGroup[e]
				}
				if (this.trim) {
					t = trimObj(t)
				}
				return t
			},
			validate() {
				/*主动验证整个表单（公开）*/
				this.$refs.formGroupXRef.validate()
			},
			/**
			 * 手动验证表单项（公开）
			 * @param prop 需要校验的表单项(rules中对应的key)
			 */
			reValidate(prop) {
				timer_setTimeout(() => {
					this.$refs.formGroupXRef.validateField(prop, () => {})
				}, 10)
			},
			/**
			 * 批量校验部分表单
			 * @param {Array}props 需要校验的表单prop集合
			 */
			validateFields(props) {
				timer_setTimeout(() => {
					if (Array.isArray(props)) {
						for (let e of props) {
							this.$refs.formGroupXRef.validateField(e, () => {})
						}
					}
				}, 10)
			},
			changeLoading(v) {
				/*主动改变表单按钮loading状态（在开启btnLoading的前提下，公开）*/
				if (v === undefined) {
					return
				}
				this.showLoading = Boolean(v)
			},
			submit() {
				/*触发提交事件（一般不需要调用，会通过插件内部提交按钮触发，公开）*/
				if (this.disabled) {
					return
				}
				this.$refs.formGroupXRef.validate((valid) => {
					if (!this.debounceCount) {
						this.debounceCount = true
						if (valid) {
							this.showLoading = true

							this.$emit('on-submit', this.getValGroup())
						}
						timer_setTimeout(() => {
							this.debounceCount = false
						}, 2000)
					}
				})
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/formR/formR.vue?vue&type=script&lang=js
 /* harmony default export */ var formR_formRvue_type_script_lang_js = (formRvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/formR/formR.vue





/* normalize component */
;
var formR_component = normalizeComponent(
  formR_formRvue_type_script_lang_js,
  formRvue_type_template_id_561ea883_render,
  formRvue_type_template_id_561ea883_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formR = (formR_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formModal/formModal.vue?vue&type=template&id=28f039ba
var formModalvue_type_template_id_28f039ba_render = function render(){var _vm=this,_c=_vm._self._c;return _c('Modal',{staticClass:"formModal",class:{ hideFooter: _vm.hideFooter },attrs:{"title":_vm.title || _vm.t('r.title'),"mask-closable":false,"footer-hide":_vm.hideFooter,"width":_vm.width},on:{"on-visible-change":_vm.handleVisibleChange},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('Button',{staticClass:"modal-save-btn",attrs:{"loading":_vm.btnLoading && _vm.showLoading},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.okBtTxt || _vm.t('r.confirm')))]),(!_vm.hideCancelBt)?_c('Button',{staticClass:"modal-cancel-btn",on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.cancelBtTxt || _vm.t('r.cancel')))]):_vm._e()]},proxy:true}]),model:{value:(_vm.openModal),callback:function ($$v) {_vm.openModal=$$v},expression:"openModal"}},[_c('form-r',_vm._g(_vm._b({ref:"formRRef",attrs:{"form-data":_vm.formData,"label-width":_vm.labelWidth,"btnLoading":_vm.btnLoading},on:{"on-submit":_vm.onSubmit},scopedSlots:_vm._u([_vm._l((_vm.formDataC),function(item){return {key:item?.slotName,fn:function({ valGroup }){return [_vm._t(item?.slotName,null,{"valGroup":valGroup})]}}})],null,true)},'form-r',_vm.$attrs,false),_vm.$listeners))],1)
}
var formModalvue_type_template_id_28f039ba_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formModal/formModal.vue?vue&type=script&lang=js

	
	
	
	

	/* harmony default export */ var formModalvue_type_script_lang_js = ({
		name: 'formModal',
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
			width: {
				/*弹框宽度*/
				type: [Number, String],
				default() {
					return this.formModalWidth
				}
			},
			labelWidth: {
				/*表单项标签宽度*/
				type: Number,
				default() {
					return this.formModalLabelWidth
				}
			},
			okBtTxt: {
				/*确定按钮内容*/
				type: String
			},
			cancelBtTxt: {
				/*取消按钮内容*/
				type: String
			},
			hideCancelBt: {
				/*隐藏取消按钮（只显示确定按钮，点击确定关闭弹框，如“查看”弹框）*/
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
				showLoading: false
			}
		},
		computed: {
			formTeam() {
				return myTypeof(this.formData[0]) === 'Array'
			},
			formDataC() {
				if (this.formTeam) {
					let t = []
					for (let f of this.formData) {
						t = t.concat(f.filter((e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)))
					}
					return t
				}
				return this.formData.filter(
					(e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)
				)
			}
		},
		methods: {
			resetForm() {
				/*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.resetForm().then(() => {
						resolve()
					})
				})
			},
			refreshFormDom() {
				/*刷新表单dom，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.refreshFormDom().then(() => {
						resolve()
					})
				})
			},
			reRenderForm() {
				/*重新渲染表单，异步方法（公开）*/
				return new Promise((resolve) => {
					this.$refs.formRRef.reRenderForm().then(() => {
						resolve()
					})
				})
			},
			clearForm() {
				/*清空表单值(私有，不推荐直接调用，可以调用resetForm)*/
				this.$refs.formRRef.clearForm()
			},
			setItemToValGroup(data, notClearOthers) {
				/*设置表单项的值（公开，可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示）*/
				this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
			},
			updateValGroup(data, notClearOthers) {
				/*更新表单项的值（公开，只能更新已有字段）*/
				this.$refs.formRRef.updateValGroup(data, notClearOthers)
			},
			updateFormDataT(data) {
				/*更新表单结构，例如设置或取消禁用，公开*/
				this.$refs.formRRef.updateFormDataT(data)
			},
			validate() {
				/*验证表单，公开*/
				this.$refs.formRRef.validate()
			},
			reValidate(prop) {
				/*手动验证表单项（公开）*/
				this.$refs.formRRef.reValidate(prop)
			},
			changeLoading(val) {
				/*改变弹框loading状态，私有*/
				if (val === undefined) {
					return
				}
				this.showLoading = Boolean(val)
				this.$refs.formRRef.changeLoading(this.showLoading)
			},
			getValGroup() {
				/*获取用户已填数据，公开*/
				return this.$refs.formRRef.getValGroup()
			},
			onSubmit() {
				/*响应提交事件提交数据，私有*/
				this.showLoading = true
			},
			submit() {
				/*触发提交事件，公开*/
				if (this.hideCancelBt) {
					this.close()
				} else {
					this.$refs.formRRef.submit()
				}
			},
			open() {
				/*触发打开弹框事件，公开*/
				this.openModal = true
			},
			close() {
				/*触发关闭弹框事件，公开*/
				this.openModal = false
				timer_setTimeout(() => {
					this.showLoading = false
					this.$refs.formRRef.changeLoading(false)
				}, 1000)
			},
			handleVisibleChange(show) {
				/*弹框开关状况改变处理，私有*/
				if (!show) {
					this.$emit('on-close')
				} else {
					this.$emit('on-open')
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/formModal/formModal.vue?vue&type=script&lang=js
 /* harmony default export */ var formModal_formModalvue_type_script_lang_js = (formModalvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/formModal/formModal.vue





/* normalize component */
;
var formModal_component = normalizeComponent(
  formModal_formModalvue_type_script_lang_js,
  formModalvue_type_template_id_28f039ba_render,
  formModalvue_type_template_id_28f039ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formModal = (formModal_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/customModal/customModal.vue?vue&type=template&id=f0ca66f2
var customModalvue_type_template_id_f0ca66f2_render = function render(){var _vm=this,_c=_vm._self._c;return _c('Modal',_vm._g(_vm._b({staticClass:"formModal",attrs:{"title":_vm.title,"width":_vm.width,"mask-closable":false},on:{"on-visible-change":_vm.showHide},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_vm._t("footer",function(){return [_c('Button',{staticClass:"modal-save-btn",attrs:{"loading":_vm.btnLoading && _vm.loading},on:{"click":_vm.handleSub}},[(_vm.btnLoading && _vm.loading)?_c('span',[_vm._v("Loading...")]):_c('span',[_vm._v(_vm._s(_vm.t('r.confirm')))])]),(!_vm.hideCancelBt)?_c('Button',{staticClass:"modal-cancel-btn",on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.t('r.cancel')))]):_vm._e()]})]},proxy:true}],null,true),model:{value:(_vm.isOpen),callback:function ($$v) {_vm.isOpen=$$v},expression:"isOpen"}},'Modal',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)
}
var customModalvue_type_template_id_f0ca66f2_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/customModal/customModal.vue?vue&type=script&lang=js

	

	/* harmony default export */ var customModalvue_type_script_lang_js = ({
		name: 'customModal',
		mixins: [mixins_locale],
		props: {
			title: {
				type: String,
				default: '标题'
			},
			hideCancelBt: {
				type: Boolean,
				default: false
			},
			btnLoading: {
				type: Boolean,
				default: false
			},
			width: {
				type: [Number, String],
				default: 520
			}
		},
		data() {
			return {
				isOpen: false,
				loading: false
			}
		},
		methods: {
			open() {
				/*打开弹框，公开*/
				this.isOpen = true
			},
			close() {
				/*关闭弹框，一般用于在点击确定按钮进行网络请求返回结果后关闭弹框，公开*/
				this.isOpen = false
			},
			changeLoading(d) {
				/*改变确定按钮loading状态，公开*/
				this.loading = Boolean(d)
			},
			showHide(d) {
				/*私有*/
				if (!d) {
					this.$emit('on-close')
				}
			},
			handleSub() {
				/*私有*/
				if (this.hideCancelBt) {
					this.close()
				} else {
					this.loading = true
					this.$emit('on-submit')
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/customModal/customModal.vue?vue&type=script&lang=js
 /* harmony default export */ var customModal_customModalvue_type_script_lang_js = (customModalvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/customModal/customModal.vue





/* normalize component */
;
var customModal_component = normalizeComponent(
  customModal_customModalvue_type_script_lang_js,
  customModalvue_type_template_id_f0ca66f2_render,
  customModalvue_type_template_id_f0ca66f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var customModal = (customModal_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/searchForm/searchForm.vue?vue&type=template&id=50d7af3a
var searchFormvue_type_template_id_50d7af3a_render = function render(){var _vm=this,_c=_vm._self._c;return _c('form-r',_vm._g(_vm._b({ref:"formRRef",attrs:{"form-data":_vm.formData,"label-width":_vm.labelWidth,"item-width":_vm.itemWidth,"inline":true,"show-long-ok-bt":false,"show-inline-ok-bt":_vm.showInlineOkBt,"inline-ok-bt-txt":_vm.t('r.check'),"show-inline-clear-bt":_vm.showInlineClearBt,"show-message":false},on:{"on-submit":_vm.onSubmit},scopedSlots:_vm._u([_vm._l((_vm.formDataC),function(item){return {key:item?.slotName,fn:function({ valGroup }){return [_vm._t(item?.slotName,null,{"valGroup":valGroup})]}}})],null,true)},'form-r',_vm.$attrs,false),_vm.$listeners))
}
var searchFormvue_type_template_id_50d7af3a_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/searchForm/searchForm.vue?vue&type=script&lang=js

	
	
	

	/* harmony default export */ var searchFormvue_type_script_lang_js = ({
		name: 'searchForm',
		mixins: [mixins_locale],
		components: {
			formR: formR
		},
		props: {
			formData: {
				/*搜索表单结构数据*/
				type: Array,
				default() {
					return []
				}
			},
			labelWidth: {
				/*表单项标签宽度*/
				type: Number,
				default() {
					return this.searchFormLabelWidth
				}
			},
			itemWidth: {
				/*表单项内容宽度,用于行内表单*/
				type: Number,
				default() {
					return this.searchFormItemWidth
				}
			},
			showInlineOkBt: {
				/*显示搜索按钮*/
				type: Boolean,
				default: true
			},
			showInlineClearBt: {
				/*显示清空按钮*/
				type: Boolean,
				default: true
			}
		},
		computed: {
			formTeam() {
				return myTypeof(this.formData[0]) === 'Array'
			},
			formDataC() {
				if (this.formTeam) {
					let t = []
					for (let f of this.formData) {
						t = t.concat(f.filter((e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)))
					}
					return t
				}
				return this.formData.filter(
					(e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)
				)
			}
		},
		mounted() {
			this.$refs.formRRef.$el.parentNode.addEventListener('keyup', (e) => {
				if (e?.keyCode === 13) {
					//回车
					this.submit()
				}
			})
		},
		methods: {
			resetForm() {
				/*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.resetForm().then(() => {
						resolve()
					})
				})
			},
			refreshFormDom() {
				/*刷新表单dom，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.refreshFormDom().then(() => {
						resolve()
					})
				})
			},
			reRenderForm() {
				/*重新渲染表单，异步方法（公开）*/
				return new Promise((resolve) => {
					this.$refs.formRRef.reRenderForm().then(() => {
						resolve()
					})
				})
			},
			clear() {
				/*私有，可使用resetForm代替*/
				this.$refs.formRRef.clearForm()
			},
			setItemToValGroup(data, notClearOthers) {
				/*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
				this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
			},
			updateValGroup(data, notClearOthers) {
				/*更新表单项的值（只能更新已有字段），公开*/
				this.$refs.formRRef.updateValGroup(data, notClearOthers)
			},
			updateFormDataT(data) {
				/*更新表单结构，例如设置或取消禁用，公开*/
				this.$refs.formRRef.updateFormDataT(data)
			},
			validate() {
				/*验证表单，公开*/
				this.$refs.formRRef.validate()
			},
			reValidate(prop) {
				/*手动验证表单项（公开）*/
				this.$refs.formRRef.reValidate(prop)
			},
			changeLoading(val) {
				/*改变弹框loading状态，私有*/
				this.$refs.formRRef.changeLoading(val === undefined ? false : val)
			},
			getValGroup() {
				/*获取用户已填数据，公开*/
				return this.$refs.formRRef.getValGroup()
			},
			onSubmit(data) {
				/*响应提交事件提交数据，私有*/
				this.$emit('on-search', data)
			},
			submit() {
				/*触发提交事件，公开*/
				this.$refs.formRRef.submit()
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/searchForm/searchForm.vue?vue&type=script&lang=js
 /* harmony default export */ var searchForm_searchFormvue_type_script_lang_js = (searchFormvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/searchForm/searchForm.vue





/* normalize component */
;
var searchForm_component = normalizeComponent(
  searchForm_searchFormvue_type_script_lang_js,
  searchFormvue_type_template_id_50d7af3a_render,
  searchFormvue_type_template_id_50d7af3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var searchForm = (searchForm_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formGroup/formGroup.vue?vue&type=template&id=0a2b5534
var formGroupvue_type_template_id_0a2b5534_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"formGroupBoxVM",style:(_vm.formGroupStyle)},[_c('form-r',_vm._g(_vm._b({ref:"formRRef",attrs:{"form-data":_vm.formData,"label-width":_vm.labelWidth,"content-width":_vm.contentWidth,"item-width":_vm.itemWidth,"btnLoading":_vm.btnLoading},on:{"on-submit":_vm.onSubmit},scopedSlots:_vm._u([_vm._l((_vm.formDataC),function(item){return {key:item?.slotName,fn:function({ valGroup }){return [_vm._t(item?.slotName,null,{"valGroup":valGroup})]}}})],null,true)},'form-r',_vm.$attrs,false),_vm.$listeners)),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showOkBt || _vm.showCancelBt),expression:"showOkBt || showCancelBt"}],staticClass:"formFooterVM",style:({ marginLeft: _vm.labelWidth + 'px' })},[_c('div',{staticClass:"btnBoxKAL",style:({ width: _vm.contentWidth })},[(_vm.showOkBt)?_c('Button',{staticClass:"form-save-btn",attrs:{"loading":_vm.btnLoading && _vm.showLoading},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.okBtTxt || _vm.t('r.confirm')))]):_vm._e(),(_vm.showCancelBt)?_c('Button',{staticClass:"form-cancel-btn",on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.cancelBtTxt || _vm.t('r.cancel')))]):_vm._e()],1)])],1)
}
var formGroupvue_type_template_id_0a2b5534_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/formGroup/formGroup.vue?vue&type=script&lang=js

	
	
	
	

	/* harmony default export */ var formGroupvue_type_script_lang_js = ({
		name: 'formGroup',
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
			width: {
				/*表单组宽度*/
				type: String,
				default() {
					return this.formGroupWidth
				}
			},
			labelWidth: {
				/*表单项标签宽度*/
				type: Number,
				default() {
					return this.formGroupLabelWidth
				}
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
			okBtTxt: {
				/*确定按钮内容*/
				type: String
			},
			cancelBtTxt: {
				/*取消按钮内容*/
				type: String
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
		computed: {
			formTeam() {
				return myTypeof(this.formData[0]) === 'Array'
			},
			formDataC() {
				if (this.formTeam) {
					let t = []
					for (let f of this.formData) {
						t = t.concat(f.filter((e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)))
					}
					return t
				}
				return this.formData.filter(
					(e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)
				)
			}
		},
		methods: {
			resetForm() {
				/*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.resetForm().then(() => {
						resolve()
					})
				})
			},
			refreshFormDom() {
				/*刷新表单dom，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.refreshFormDom().then(() => {
						resolve()
					})
				})
			},
			reRenderForm() {
				/*重新渲染表单，异步方法（公开）*/
				return new Promise((resolve) => {
					this.$refs.formRRef.reRenderForm().then(() => {
						resolve()
					})
				})
			},
			clearForm() {
				/*私有，可用resetForm代替*/
				this.$refs.formRRef.clearForm()
			},
			setItemToValGroup(data, notClearOthers) {
				/*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
				this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
			},
			updateValGroup(data, notClearOthers) {
				/*更新表单项的值（只能更新已有字段），公开*/
				this.$refs.formRRef.updateValGroup(data, notClearOthers)
			},
			updateFormDataT(data) {
				/*更新表单结构，例如设置或取消禁用，公开*/
				this.$refs.formRRef.updateFormDataT(data)
			},
			validate() {
				/*验证表单，公开*/
				this.$refs.formRRef.validate()
			},
			reValidate(prop) {
				/*手动验证表单项（公开）*/
				this.$refs.formRRef.reValidate(prop)
			},
			changeLoading(val) {
				/*改变确定按钮loading状态，私有*/
				if (val === undefined) {
					return
				}
				this.showLoading = Boolean(val)
				this.$refs.formRRef.changeLoading(this.showLoading)
			},
			getValGroup() {
				/*获取用户已填数据，公开*/
				return this.$refs.formRRef.getValGroup()
			},
			onSubmit() {
				/*响应提交事件提交数据，私有*/
				this.showLoading = true
			},
			submit() {
				/*触发提交事件，公开*/
				this.$refs.formRRef.submit()
			},
			close() {
				/*触发取消按钮点击事件，公开*/
				this.$emit('on-cancel')
				timer_setTimeout(() => {
					this.showLoading = false
					this.$refs.formRRef.changeLoading(false)
				}, 1000)
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/formGroup/formGroup.vue?vue&type=script&lang=js
 /* harmony default export */ var formGroup_formGroupvue_type_script_lang_js = (formGroupvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/formGroup/formGroup.vue





/* normalize component */
;
var formGroup_component = normalizeComponent(
  formGroup_formGroupvue_type_script_lang_js,
  formGroupvue_type_template_id_0a2b5534_render,
  formGroupvue_type_template_id_0a2b5534_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formGroup = (formGroup_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/echarts/echart.vue?vue&type=template&id=62db085d
var echartvue_type_template_id_62db085d_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"echart-cont",style:({ width: _vm.widthT, height: _vm.heightT }),attrs:{"id":_vm.name}})
}
var echartvue_type_template_id_62db085d_staticRenderFns = []


// EXTERNAL MODULE: external {"root":"echarts","commonjs":"echarts","commonjs2":"echarts","amd":"echarts"}
var external_root_echarts_commonjs_echarts_commonjs2_echarts_amd_echarts_ = __webpack_require__(574);
;// CONCATENATED MODULE: ./src/components/echarts/westeros.json
var westeros_namespaceObject = /*#__PURE__*/JSON.parse('{"color":["#516b91","#59c4e6","#edafda","#93b7e3","#a5e7f0","#cbb0e3"],"backgroundColor":"rgba(0,0,0,0)","textStyle":{},"title":{"textStyle":{"color":"#333333"},"subtextStyle":{"color":"#666666"}},"line":{"itemStyle":{"normal":{"borderWidth":"2"}},"lineStyle":{"normal":{"width":"2"}},"symbolSize":"6","symbol":"emptyCircle","smooth":true},"radar":{"itemStyle":{"normal":{"borderWidth":"2"}},"lineStyle":{"normal":{"width":"2"}},"symbolSize":"6","symbol":"emptyCircle","smooth":true},"bar":{"itemStyle":{"normal":{"barBorderWidth":0,"barBorderColor":"#ccc"},"emphasis":{"barBorderWidth":0,"barBorderColor":"#ccc"}}},"pie":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"scatter":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"boxplot":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"parallel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"sankey":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"funnel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"gauge":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"candlestick":{"itemStyle":{"normal":{"color":"#edafda","color0":"transparent","borderColor":"#d680bc","borderColor0":"#8fd3e8","borderWidth":"2"}}},"graph":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"}},"lineStyle":{"normal":{"width":1,"color":"#aaa"}},"symbolSize":"6","symbol":"emptyCircle","smooth":true,"color":["#516b91","#59c4e6","#edafda","#93b7e3","#a5e7f0","#cbb0e3"],"label":{"normal":{"textStyle":{"color":"#eeeeee"}}}},"map":{"itemStyle":{"normal":{"areaColor":"#f3f3f3","borderColor":"#516b91","borderWidth":0.5},"emphasis":{"areaColor":"rgba(165,231,240,1)","borderColor":"#516b91","borderWidth":1}},"label":{"normal":{"textStyle":{"color":"#000"}},"emphasis":{"textStyle":{"color":"rgb(81,107,145)"}}}},"geo":{"itemStyle":{"normal":{"areaColor":"#f3f3f3","borderColor":"#516b91","borderWidth":0.5},"emphasis":{"areaColor":"rgba(165,231,240,1)","borderColor":"#516b91","borderWidth":1}},"label":{"normal":{"textStyle":{"color":"#000"}},"emphasis":{"textStyle":{"color":"rgb(81,107,145)"}}}},"categoryAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"red"}},"axisLabel":{"show":true,"textStyle":{"color":"#333333"}},"splitLine":{"show":true,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"valueAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"red"}},"axisLabel":{"show":true,"textStyle":{"color":"#333333"}},"splitLine":{"show":true,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"logAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"red"}},"axisLabel":{"show":true,"textStyle":{"color":"#333333"}},"splitLine":{"show":true,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"timeAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#cccccc"}},"axisTick":{"show":false,"lineStyle":{"color":"red"}},"axisLabel":{"show":true,"textStyle":{"color":"#333333"}},"splitLine":{"show":true,"lineStyle":{"color":["#eeeeee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"toolbox":{"iconStyle":{"normal":{"borderColor":"#999"},"emphasis":{"borderColor":"#666"}}},"legend":{"textStyle":{"color":"#333333"}},"tooltip":{"axisPointer":{"lineStyle":{"color":"#cccccc","width":1},"crossStyle":{"color":"#cccccc","width":1}}},"timeline":{"lineStyle":{"color":"#8fd3e8","width":1},"itemStyle":{"normal":{"color":"#8fd3e8","borderWidth":1},"emphasis":{"color":"#8fd3e8"}},"controlStyle":{"normal":{"color":"#8fd3e8","borderColor":"#8fd3e8","borderWidth":0.5},"emphasis":{"color":"#8fd3e8","borderColor":"#8fd3e8","borderWidth":0.5}},"checkpointStyle":{"color":"#8fd3e8","borderColor":"rgba(138,124,168,0.37)"},"label":{"normal":{"textStyle":{"color":"#8fd3e8"}},"emphasis":{"textStyle":{"color":"#8fd3e8"}}}},"visualMap":{"color":["#516b91","#59c4e6","#a5e7f0"]},"dataZoom":{"backgroundColor":"rgba(0,0,0,0)","dataBackgroundColor":"rgba(255,255,255,0.3)","fillerColor":"rgba(167,183,204,0.4)","handleColor":"#a7b7cc","handleSize":"100%","textStyle":{"color":"#333"}},"markPoint":{"label":{"normal":{"textStyle":{"color":"#eeeeee"}},"emphasis":{"textStyle":{"color":"#eeeeee"}}}}}');
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/echarts/echart.vue?vue&type=script&lang=js

	
	

	//引入echarts对象
	
	//默认主题款式 westeros - 通心粉款式，其他主题可以通过自定义引入echarts依赖后主题但名称theme一定要对应上
	
	external_root_echarts_commonjs_echarts_commonjs2_echarts_amd_echarts_.registerTheme('westeros', westeros_namespaceObject)

	/* harmony default export */ var echartvue_type_script_lang_js = ({
		//图表样式
		name: 'echart',
		mixins: [mixins_locale],
		props: {
			config: Object, //图表配置，可以覆盖整个图表,
			theme: {
				//图表主题名称，不传默认为 westeros - 通心粉款式
				type: String,
				default: 'westeros'
			},
			params: Object, //图表参数
			url: String, //拉取数据的接口地址
			data: Object, //图表默认数据，没有url请求可以展示静态数据
			initData: {
				//初始化数据，即组件创建后自动拉取第一次数据,默认不会
				type: Boolean,
				default: false
			},
			yAxis: {
				//Y轴数据
				type: Object,
				default() {
					return {
						type: 'value'
					}
				}
			},
			xAxis: {
				//X轴数据
				type: Object,
				default() {
					return {
						type: 'category'
					}
				}
			},
			tooltip: {
				//提示框，鼠标悬浮交互时的信息提示
				type: Object,
				default() {
					return {}
				}
			},
			series: {
				//you know
				type: Array,
				default() {
					return []
				}
			},
			name: {
				//图表名称，必传
				type: String,
				default: ''
			},
			title: {
				//图表标题
				type: String
			},
			titleColor: String, //标题颜色
			titleFontSize: Number, //标题字体大小
			titleFontWeight: [
				//标题字体粗细
				String,
				Number
			],
			titleX: String, //标题的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
			titleY: String, //标题的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
			subTitle: {
				//图表副标题
				type: String,
				default: ''
			},
			subTitleColor: String, //副标题颜色
			subTitleFontSize: Number, //副标题字体大小
			legendShow: {
				//是否显示图例，默认为显示
				type: Boolean,
				default: true
			},
			legendType: String, //图例类型，'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用。
			legendColor: String, //图例颜色
			legendFontSize: Number, //图例字体大小
			legendX: String, //图例的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
			legendY: String, //图例的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
			legendOrient: String, //图例朝向, horizontal -- 水平对齐，vertical -- 垂直对齐
			widthT: {
				//you know
				type: String,
				default: '870px'
			},
			heightT: {
				//you know
				type: String,
				default: '384px'
			}
		},
		data() {
			return {
				myChart: null, //图表对象
				dataT: this.data,
				yAxisT: this.yAxis,
				xAxisT: this.xAxis,
				seriesT: this.series
			}
		},
		created() {
			//拉取数据
			if (this.initData) {
				this.getData()
					.then((res) => {
						this.init(res)
					})
					.catch((error) => {
						console.warn('代码报错啦~')
						console.warn(error)
					})
			}
		},
		watch: {
			config: {
				handler(after) {
					//静态对象变更
					if (after) {
						this.init()
					}
				},
				deep: true
			},
			data: {
				handler(after) {
					//静态数据变更
					if (after) {
						this.dataT = after
						this.init()
					}
				},
				deep: true
			},
			series: {
				handler(after) {
					//静态数据变更
					if (after) {
						this.seriesT = after
						this.init()
					}
				},
				deep: true
			},
			params: {
				handler(after) {
					//接口参数变更
					if (after) {
						//拉取数据
						this.getData()
							.then((res) => {
								this.init(res)
							})
							.catch((error) => {
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
					if (this.url) {
						fetch
							.get(this.url, this.params)
							.then((r) => {
								if (r.data || r.data === null) {
									if (r.data.charts || r.data.charts === null) {
										this.dataT = r.data.charts || []
									} else {
										this.dataT = r.data || []
									}
									//执行回调
									resolve(r)
								} else {
									console.warn('请求返回数据有误，无法使用')
								}
							})
							.catch((e) => {
								console.warn(e)
							})
					} else if (this?.dataT?.series || this?.seriesT?.length > 0) {
						//没有url且有静态数据也可以执行回调
						resolve()
					} else {
						console.warn('没有有效的请求地址，无法获取图表数据')
					}
				})
			}, //视图渲染
			init() {
				//事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
				let me = this
				//实例化DOM元素（ID,主题）
				me.myChart = external_root_echarts_commonjs_echarts_commonjs2_echarts_amd_echarts_.init(document.getElementById(this.name), this.theme)
				//时间轴中的时间点改变后的事件，返回给父组件
				me.myChart.on('timelinechanged', (res) => {
					me.$emit('time-line-change', res.currentIndex)
				})

				me.myChart.on('click', (res) => {
					me.$emit('series-click', res)
				})

				/**
        document.getElementById(this.name).onclick = (e)=>{
          me.$emit('series-bar-click', e)
        }
         */

				// 指定图表的配置项和数据
				let option = {}
				if (this.config) {
					option = this.config
				} else {
					option = {
						//标题
						title: {
							text: this.dataT.title ? this.dataT.title : this.title || t('r.unknown'),
							textStyle: {
								color: this.dataT.titleColor || this.titleColor,
								fontSize: this.dataT.titleFontSize || this.titleFontSize,
								fontWeight: this.dataT.titleFontWeight || this.titleFontWeight
							},
							x: this.dataT.titleX || this.titleX,
							y: this.dataT.titleY || this.titleY,
							subtext: this.dataT.subTitle ? this.dataT.subTitle : this.subTitle,
							subtextStyle: {
								color: this.dataT.subTitleColor || this.subTitleColor,
								fontSize: this.dataT.subTitleFontSize || this.subTitleFontSize
							}
						}, // 图例
						legend: {
							show: this.dataT.legendShow ? this.dataT.legendShow : this.legendShow,
							type: this.dataT.legendType || this.legendType,
							textStyle: {
								color: this.dataT.legendColor || this.legendColor,
								fontSize: this.dataT.legendFontSize || this.legendFontSize
							},
							x: this.dataT.legendX || this.legendX,
							y: this.dataT.legendY || this.legendY,
							orient: this.dataT.legendOrient || this.legendOrient
						}, // 提示框，鼠标悬浮交互时的信息提示
						tooltip: this.dataT.tooltip ? this.dataT.tooltip : this.tooltip, // 横轴坐标轴
						xAxis: this.dataT.xAxis ? this.dataT.xAxis : this.xAxisT, // 纵轴坐标轴
						yAxis: this.dataT.yAxis ? this.dataT.yAxis : this.yAxisT, //you know
						series: this.dataT.series ? this.dataT.series : this.seriesT
					}
				}

				// 使用刚指定的配置项和数据显示图表。
				me.myChart.setOption(option)

				//自适应样式
				if (window.echartResizeMJ === undefined) {
					window.echartResizeMJ = {}
				}
				if (!window.echartResizeMJ[me.name]) {
					let temp = window.onresize
					if (temp) {
						window.onresize = () => {
							if (me.myChart) {
								temp()
								me.myChart.resize()
								window.echartResizeMJ[me.name] = true
							}
						}
					} else {
						window.onresize = () => {
							if (me.myChart) {
								me.myChart.resize()
								window.echartResizeMJ[me.name] = true
							}
						}
					}
				}
			}
		},
		//生命周期结束前
		beforeDestroy() {
			//销组件毁时也一并销毁图表实例、resize监听，释放内存
			if (this.myChart) {
				this.myChart.clear()
				this.myChart.dispose()
				this.myChart = null
				window.echartResizeMJ = {}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/echarts/echart.vue?vue&type=script&lang=js
 /* harmony default export */ var echarts_echartvue_type_script_lang_js = (echartvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/echarts/echart.vue





/* normalize component */
;
var echart_component = normalizeComponent(
  echarts_echartvue_type_script_lang_js,
  echartvue_type_template_id_62db085d_render,
  echartvue_type_template_id_62db085d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var echart = (echart_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/showHidePanelB/showHidePanelB.vue?vue&type=template&id=53ccd6c6
var showHidePanelBvue_type_template_id_53ccd6c6_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{style:(_vm.getBg)},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showX),expression:"showX"}],staticClass:"contentZ"},[_vm._t("default")],2)])
}
var showHidePanelBvue_type_template_id_53ccd6c6_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/showHidePanelB/showHidePanelB.vue?vue&type=script&lang=js

	/* harmony default export */ var showHidePanelBvue_type_script_lang_js = ({
		name: 'showHidePanelB',
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
				} else {
					return ''
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/showHidePanelB/showHidePanelB.vue?vue&type=script&lang=js
 /* harmony default export */ var showHidePanelB_showHidePanelBvue_type_script_lang_js = (showHidePanelBvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/showHidePanelB/showHidePanelB.vue





/* normalize component */
;
var showHidePanelB_component = normalizeComponent(
  showHidePanelB_showHidePanelBvue_type_script_lang_js,
  showHidePanelBvue_type_template_id_53ccd6c6_render,
  showHidePanelBvue_type_template_id_53ccd6c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var showHidePanelB = (showHidePanelB_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableSearch/tableSearch.vue?vue&type=template&id=4f7e5a34
var tableSearchvue_type_template_id_4f7e5a34_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tableSearchV",style:({ position: _vm.fixed ? 'fixed' : 'absolute', right: _vm.right, top: _vm.top })},[_vm._t("default",function(){return [_c('Input',{staticClass:"searchInputC",style:({ width: _vm.width }),attrs:{"search":"","placeholder":_vm.placeholder || _vm.t('r.pInput')},on:{"on-search":_vm.onSearch},model:{value:(_vm.valueX),callback:function ($$v) {_vm.valueX=$$v},expression:"valueX"}})]}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.showBtn),expression:"showBtn"}],staticClass:"sbt",style:({ color: _vm.btnColor }),on:{"click":function($event){_vm.openX = !_vm.openX}}},[_c('icon',{attrs:{"type":_vm.iconL,"color":_vm.btnColor}}),_vm._v(_vm._s(_vm.t('r.adSearch')))],1)],2)
}
var tableSearchvue_type_template_id_4f7e5a34_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/tableSearch/tableSearch.vue?vue&type=script&lang=js

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
	
	

	/* harmony default export */ var tableSearchvue_type_script_lang_js = ({
		name: 'tableSearch',
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
			fixed: {
				/*是否为固定定位，默认绝对定位*/
				type: Boolean,
				default: false
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
			}
		},
		methods: {
			onSearch() {
				/*私有*/
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

;// CONCATENATED MODULE: ./src/components/tableSearch/tableSearch.vue?vue&type=script&lang=js
 /* harmony default export */ var tableSearch_tableSearchvue_type_script_lang_js = (tableSearchvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/tableSearch/tableSearch.vue





/* normalize component */
;
var tableSearch_component = normalizeComponent(
  tableSearch_tableSearchvue_type_script_lang_js,
  tableSearchvue_type_template_id_4f7e5a34_render,
  tableSearchvue_type_template_id_4f7e5a34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableSearch = (tableSearch_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/selectScrollMore/selectScrollMore.vue?vue&type=template&id=c69deac0
var selectScrollMorevue_type_template_id_c69deac0_render = function render(){var _vm=this,_c=_vm._self._c;return _c('Select',_vm._b({directives:[{name:"loadmore",rawName:"v-loadmore",value:(_vm.loadMore),expression:"loadMore"}],ref:"selectScrollSourceRef",attrs:{"transfer":"","filterable":"","placeholder":_vm.placeholderT,"disabled":_vm.disabled},model:{value:(_vm.valueT),callback:function ($$v) {_vm.valueT=$$v},expression:"valueT"}},'Select',_vm.$attrs,false),_vm._l((_vm.options),function(item,index){return _c('Option',{key:'op' + index,attrs:{"value":item?.value,"disabled":item?.disabled}},[_vm._v(_vm._s(item?.label))])}),1)
}
var selectScrollMorevue_type_template_id_c69deac0_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/selectScrollMore/selectScrollMore.vue?vue&type=script&lang=js

	
	
	
	

	/* harmony default export */ var selectScrollMorevue_type_script_lang_js = ({
		name: 'selectScrollMore',
		mixins: [mixins_locale],
		model: {
			prop: 'value',
			event: 'sub-val'
		},
		props: {
			value: {
				/*插件值，支持双向绑定v-model*/
				type: [String, Number, Array],
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
			optionFilter: {
				/*接口返回数据处理函数，传入接口返回的数据，返回处理后的数据*/
				type: Function
			},
			optionsLabelKey: {
				/*待选项label取接口数据中哪个字段*/
				type: [String, Array],
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
			searchWordsRequired: {
				/*只有在searchKey对应字段有值时（用户输入内容搜索时）拉取数据*/
				type: Boolean,
				default: false
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
				return this.searchStr ? this.t('r.searchFor') + this.searchStr : this.placeholder || this.t('r.pInput')
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
				return this.searchKey
					? {
							...this.searchData,
							current: this.current,
							[this.searchKey]: this.searchStr
						}
					: {
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
					} else {
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
				/*私有，不可调用*/
				const inputEl = this.$refs.selectScrollSourceRef.$children[0].$refs.input
				inputEl.addEventListener('keyup', this.getOption)
			},
			setQuery(val) {
				/*私有，不可调用*/
				this.$refs.selectScrollSourceRef.$children[0].query = val
			},
			reset() {
				/*私有，不可调用*/
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
				/*私有，不可调用*/
				for (let item of this.options) {
					if (item?.label === val) {
						return true
					}
				}
				return false
			},
			getOption: external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().debounce(function (e) {
				/*私有，不可调用*/
				const val = e?.target?.value
				if (!this.isSelect(val)) {
					if (isValidValue(val)) {
						if (this.urlChanged) {
							this.reset()
						} else {
							if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(this.historyData)) {
								this.historyData.current = this.current
								this.historyData.pages = this.pages
								this.historyData.options = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.options)
							}
							if (isValidValue(this.valueT)) {
								this.valueT = null
							}
						}
						this.searchStr = val
						this.options = []
						this.current = 1
						this.isFresh = true
						this.getData()
							.then(() => {
								this.$nextTick(function () {
									this.setQuery(val)
								})
							})
							.catch(() => {
								this.$nextTick(function () {
									this.setQuery(val)
								})
							})
					} else {
						if (this.urlChanged) {
							this.reset()
							this.getData()
						} else {
							this.valueT = null
							this.searchStr = null
							if (this.historyData.current) {
								this.current = this.historyData.current
								this.pages = this.historyData.pages
								this.options = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(this.historyData.options)
								this.historyData = {}
							} else {
								this.getData()
							}
						}
					}
				}
			}, 600),
			loadMore() {
				/*私有，不可调用*/
				if (this.urlChanged) {
					this.reset()
				}
				if (this.current < this.pages) {
					++this.current
					this.$nextTick(function () {
						this.getData()
					})
				} else {
					this.$Message.warning({
						background: true,
						content: this.t('r.noMore')
					})
				}
			},
			getData() {
				/*私有，不可调用*/
				return new Promise((resolve, reject) => {
					if (this.getOptions) {
						if (this.searchWordsRequired && !isValidValue(this.searchStr)) {
							resolve()
							return
						}
						fetch
							.get(this.url, this.searchDataT)
							.then((r) => {
								this.isFresh = false
								let temp = []
								if (r?.data?.records) {
									temp = r.data.records
									this.pages = r.data.pages
								} else if (r?.data && myTypeof(r.data) === 'Array') {
									temp = r.data
									this.pages = r.pages
								} else if (r?.data && myTypeof(r.data) === 'Object') {
									temp = [r.data]
									this.pages = 1
								}
								if (myTypeof(this.optionFilter) === 'Function') {
									temp = this.optionFilter(temp)
								}
								if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(temp)) {
									temp = temp.map((e, i) => {
										let label = this.t('r.optionLabel') + i
										if (Array.isArray(this.optionsLabelKey)) {
											let labelT = []
											for (let j = 1, len = this.optionsLabelKey.length; j < len; j++) {
												labelT.push(e[this.optionsLabelKey[j]])
											}
											label = `${e[this.optionsLabelKey[0]]}(${String(labelT)})`
										} else if (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isString(this.optionsLabelKey)) {
											label = e[this.optionsLabelKey]
										}
										if (this.collectLabel) {
											let eT = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(e)
											delete eT.value
											delete eT.label
											return {
												value: e[this.optionsValKey],
												label: label,
												...eT
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
								this.options = this.options.filter((e) => {
									if (!hash[e?.value]) {
										hash[e.value] = true
										return e
									}
								})
								this.$nextTick(function () {
									this.$emit('update-option-finish')
								})
								resolve(true)
							})
							.catch(() => {
								this.$Message.error(this.t('r.getDataError'))
								reject(this.t('r.getDataError'))
							})
					} else {
						resolve()
					}
				})
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/selectScrollMore/selectScrollMore.vue?vue&type=script&lang=js
 /* harmony default export */ var selectScrollMore_selectScrollMorevue_type_script_lang_js = (selectScrollMorevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/selectScrollMore/selectScrollMore.vue





/* normalize component */
;
var selectScrollMore_component = normalizeComponent(
  selectScrollMore_selectScrollMorevue_type_script_lang_js,
  selectScrollMorevue_type_template_id_c69deac0_render,
  selectScrollMorevue_type_template_id_c69deac0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var selectScrollMore = (selectScrollMore_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/transferBox/transferBox.vue?vue&type=template&id=0a6eb193
var transferBoxvue_type_template_id_0a6eb193_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"transferBoxRL"},[_c('div',{staticClass:"leftBoxLLL"},[_c('div',{staticClass:"fullHeight flexColumnBox"},[_c('div',{staticClass:"notGrow"},[_c('div',{staticClass:"titleLLL"},[_vm._v(_vm._s(_vm.titleLeft || _vm.t('r.added')))]),_c('show-hide-panel',[_c('search-form',{ref:"leftFormRef",attrs:{"form-data":_vm.formDataLeft,"form-rules":_vm.formRulesLeft,"label-width":_vm.searchFormLabelWith},on:{"on-search":_vm.searchLeft}})],1)],1),_c('div',{staticClass:"growFlexItem"},[_c('bt-table-page',{ref:"lTabRef",attrs:{"columns":_vm.leftTableColumns,"url":_vm.leftTableUrl,"search-data":_vm.leftTableSearchData,"init-data":Boolean(_vm.isEmpty(_vm.constSearchDataLeft) && _vm.leftTableUrl),"get-data-loading":"","selection":""},on:{"on-selection-change":_vm.lSelectionChange,"on-data-change":_vm.dataChangeL}})],1)])]),_c('div',{staticClass:"middleBoxLLL"},[_c('Button',{staticClass:"middleBtLLL",attrs:{"size":"large","type":"default","disabled":_vm.delAllDis},on:{"click":_vm.removeAll}},[_vm._v(_vm._s(_vm.t('r.removeAll'))+" "),_c('Icon',{attrs:{"type":"ios-arrow-forward"}})],1),_c('Button',{staticClass:"middleBtLLL",attrs:{"size":"large","type":"default","disabled":_vm.deleteDis},on:{"click":_vm.remove}},[_vm._v(_vm._s(_vm.t('r.remove'))+" "),_c('Icon',{attrs:{"type":"ios-arrow-forward"}})],1),_c('Button',{staticClass:"middleBtLLL",attrs:{"size":"large","type":"primary","disabled":_vm.addDis},on:{"click":_vm.add}},[_c('Icon',{attrs:{"type":"ios-arrow-back"}}),_vm._v(" "+_vm._s(_vm.t('r.add')))],1),_c('Button',{staticClass:"middleBtLLL",attrs:{"size":"large","type":"primary","disabled":_vm.addAllDis},on:{"click":_vm.addAll}},[_c('Icon',{attrs:{"type":"ios-arrow-back"}}),_vm._v(" "+_vm._s(_vm.t('r.addAll')))],1)],1),_c('div',{staticClass:"rightBoxLLL"},[_c('div',{staticClass:"fullHeight flexColumnBox"},[_c('div',{staticClass:"notGrow"},[_c('div',{staticClass:"titleLLL"},[_vm._v(_vm._s(_vm.titleRight || _vm.t('r.notAdded')))]),_c('show-hide-panel',[_c('search-form',{ref:"rightFormRef",attrs:{"form-data":_vm.formDataRight,"form-rules":_vm.formRulesRight,"label-width":_vm.searchFormLabelWith},on:{"on-search":_vm.searchRight}})],1)],1),_c('div',{staticClass:"growFlexItem"},[_c('bt-table-page',{ref:"rTabRef",attrs:{"columns":_vm.rightTableColumns,"url":_vm.rightTableUrl,"search-data":_vm.rightTableSearchData,"init-data":Boolean(_vm.isEmpty(_vm.constSearchDataRight) && _vm.rightTableUrl),"get-data-loading":"","selection":""},on:{"on-selection-change":_vm.rSelectionChange,"on-data-change":_vm.dataChangeR}})],1)])])])
}
var transferBoxvue_type_template_id_0a6eb193_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/transferBox/transferBox.vue?vue&type=script&lang=js

	
	

	/* harmony default export */ var transferBoxvue_type_script_lang_js = ({
		name: 'transferBox',
		mixins: [mixins_locale],
		props: {
			titleLeft: {
				type: String
			},
			titleRight: {
				type: String
			},
			formDataLeft: {
				type: Array,
				default() {
					return []
				}
			},
			formDataRight: {
				type: Array,
				default() {
					return []
				}
			},
			formRulesLeft: {
				type: Object,
				default() {
					return {}
				}
			},
			formRulesRight: {
				type: Object,
				default() {
					return {}
				}
			},
			constSearchDataLeft: {
				type: Object,
				default() {
					return {}
				}
			},
			constSearchDataRight: {
				type: Object,
				default() {
					return {}
				}
			},
			leftTableColumns: {
				type: Array,
				default() {
					return []
				}
			},
			rightTableColumns: {
				type: Array,
				default() {
					return []
				}
			},
			leftTableUrl: {
				type: String,
				default: null
			},
			rightTableUrl: {
				type: String,
				default: null
			},
			addUrl: {
				type: String,
				default: null
			},
			deleteUrl: {
				type: String,
				default: null
			},
			addAllUrl: {
				type: String,
				default: null
			},
			deleteAllUrl: {
				type: String,
				default: null
			},
			addParamsHandle: {
				type: Function,
				default: (selection) => {
					return selection.map((e) => e?.id)
				}
			},
			deleteParamsHandle: {
				type: Function,
				default: (selection) => {
					return selection?.map?.((e) => e?.id)
				}
			},
			addAllParamsHandle: {
				type: Function,
				default: (searchData) => {
					return searchData
				}
			},
			deleteAllParamsHandle: {
				type: Function,
				default: (searchData) => {
					return searchData
				}
			},
			addMethod: {
				type: String,
				default: 'post'
			},
			addAllMethod: {
				type: String,
				default: 'post'
			},
			deleteMethod: {
				type: String,
				default: 'delete'
			},
			deleteAllMethod: {
				type: String,
				default: 'delete'
			},
			searchFormLabelWith: {
				type: Number
			}
		},
		data() {
			return {
				searchDataLeft: {},
				searchDataRight: {},
				lSelection: [],
				rSelection: [],
				leftTotal: 0,
				rightTotal: 0
			}
		},
		computed: {
			leftTableSearchData() {
				return { ...this.constSearchDataLeft, ...this.searchDataLeft }
			},
			rightTableSearchData() {
				return { ...this.constSearchDataRight, ...this.searchDataRight }
			},
			delAllDis() {
				return this.leftTotal < 1
			},
			deleteDis() {
				return this.lSelection.length < 1
			},
			addDis() {
				return this.rSelection.length < 1
			},
			addAllDis() {
				return this.rightTotal < 1
			}
		},
		methods: {
			isEmpty: (external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default()).isEmpty,
			reset() {
				/*重置穿梭框（公开）*/
				this.$refs.leftFormRef.resetForm()
				this.$refs.rightFormRef.resetForm()
				if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(this.searchDataLeft)) {
					this.searchDataLeft = {}
				}
				if (!external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().isEmpty(this.searchDataRight)) {
					this.searchDataRight = {}
				}
				this.$refs.lTabRef.clearSelect()
				this.$refs.rTabRef.clearSelect()
			},
			search() {
				/*主动触发筛选/刷新数据（公开）*/
				this.$refs.lTabRef.search()
				this.$refs.rTabRef.search()
			},
			lSelectionChange(s) {
				/*私有*/
				this.lSelection = s
			},
			rSelectionChange(s) {
				/*私有*/
				this.rSelection = s
			},
			dataChangeL(d) {
				/*私有*/
				this.leftTotal = d?.data?.page?.total || d?.data?.data?.total || d?.data?.total || d?.total || 0
				this.$emit('on-data-change-l', d)
			},
			dataChangeR(d) {
				/*私有*/
				this.rightTotal = d?.data?.page?.total || d?.data?.data?.total || d?.data?.total || d?.total || 0
				this.$emit('on-data-change-r', d)
			},
			searchLeft(d) {
				/*私有*/
				this.searchDataLeft = d
			},
			searchRight(d) {
				/*私有*/
				this.searchDataRight = d
			},
			add() {
				/*私有*/
				if (this.addUrl) {
					this.fetchX('add')
				}
			},
			remove() {
				/*私有*/
				if (this.deleteUrl) {
					this.fetchX('delete')
				}
			},
			addAll() {
				/*私有*/
				if (this.addAllUrl && this.addUrl) {
					this.fetchX('addAll')
				}
			},
			removeAll() {
				/*私有*/
				if (this.deleteAllUrl) {
					this.fetchX('deleteAll')
				}
			},
			fetchX(action) {
				/*私有*/
				let method = this[action + 'Method']
				let url = this[action + 'Url']
				let data = {}
				let msg = ''
				switch (action) {
					case 'add':
						data = this.addParamsHandle(this.rSelection)
						msg = this.t('r.add')
						break
					case 'delete':
						data = this.deleteParamsHandle(this.lSelection)
						msg = this.t('r.remove')
						break
					case 'addAll':
						data = this.addAllParamsHandle(this.rightTableSearchData)
						msg = this.t('r.addAll')
						break
					case 'deleteAll':
						data = this.deleteAllParamsHandle(this.leftTableSearchData)
						msg = this.t('r.removeAll')
						break
				}
				if (url) {
					this.$fetch[method](url, data, null, [], { spin: true }, false)
						.then((r) => {
							if (r?.code === 0) {
								this.$swal(msg + this.t('r.success'), r?.message || '', 'success')
								if (this.$refs.lTabRef) {
									this.$refs.lTabRef.getTableData()
								}
								if (this.$refs.rTabRef) {
									this.$refs.rTabRef.getTableData()
								}
								this.$emit('transferred')
							} else {
								this.$swal(msg + this.t('r.failed'), r?.message || '', 'error')
							}
						})
						.catch(() => {
							this.$swal(msg + this.t('r.error'), '', 'error')
						})
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/transferBox/transferBox.vue?vue&type=script&lang=js
 /* harmony default export */ var transferBox_transferBoxvue_type_script_lang_js = (transferBoxvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/transferBox/transferBox.vue





/* normalize component */
;
var transferBox_component = normalizeComponent(
  transferBox_transferBoxvue_type_script_lang_js,
  transferBoxvue_type_template_id_0a6eb193_render,
  transferBoxvue_type_template_id_0a6eb193_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var transferBox = (transferBox_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/fixedFullModal/fixedFullModal.vue?vue&type=template&id=38785a29
var fixedFullModalvue_type_template_id_38785a29_render = function render(){var _vm=this,_c=_vm._self._c;return _c('Modal',_vm._g(_vm._b({staticClass:"fixedFullModalR",attrs:{"mask-closable":false,"styles":{ top: _vm.top },"fullscreen":"","footer-hide":"","closable":false},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('div',{staticClass:"headerR"},[_c('span',[_vm._v(_vm._s(_vm.title))]),_c('Icon',{staticClass:"closeIcoR",attrs:{"type":"ios-close","size":"40","title":"close"},on:{"click":_vm.close}})],1)]},proxy:true}]),model:{value:(_vm.isOpen),callback:function ($$v) {_vm.isOpen=$$v},expression:"isOpen"}},'Modal',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)
}
var fixedFullModalvue_type_template_id_38785a29_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/fixedFullModal/fixedFullModal.vue?vue&type=script&lang=js

	/* harmony default export */ var fixedFullModalvue_type_script_lang_js = ({
		name: 'fixedFullModal',
		props: {
			title: {
				type: String,
				default: '标题'
			},
			top: {
				type: String,
				default: '55px'
			}
		},
		data() {
			return {
				isOpen: false
			}
		},
		methods: {
			open() {
				this.isOpen = true
			},
			close() {
				this.isOpen = false
				this.$emit('on-cancel')
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/fixedFullModal/fixedFullModal.vue?vue&type=script&lang=js
 /* harmony default export */ var fixedFullModal_fixedFullModalvue_type_script_lang_js = (fixedFullModalvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/fixedFullModal/fixedFullModal.vue





/* normalize component */
;
var fixedFullModal_component = normalizeComponent(
  fixedFullModal_fixedFullModalvue_type_script_lang_js,
  fixedFullModalvue_type_template_id_38785a29_render,
  fixedFullModalvue_type_template_id_38785a29_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fixedFullModal = (fixedFullModal_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/page404/page404.vue?vue&type=template&id=c056fc1a
var page404vue_type_template_id_c056fc1a_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"c404K"},[_c('div',{staticClass:"t404"},[_vm._v("404")]),_c('div',{staticClass:"ct404"},[_vm._v("UH OH! "+_vm._s(_vm.t('r.pageNotFound')))]),_c('div',{staticClass:"p404"},[_vm._v(_vm._s(_vm.t('r.notFoundMsg')))]),_c('Button',{staticClass:"bt404",on:{"click":_vm.back}},[_vm._v(_vm._s(_vm.t('r.back')))])],1)
}
var page404vue_type_template_id_c056fc1a_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/page404/page404.vue?vue&type=script&lang=js

	

	/* harmony default export */ var page404vue_type_script_lang_js = ({
		name: 'page404',
		mixins: [mixins_locale],
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/page404/page404.vue?vue&type=script&lang=js
 /* harmony default export */ var page404_page404vue_type_script_lang_js = (page404vue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/page404/page404.vue





/* normalize component */
;
var page404_component = normalizeComponent(
  page404_page404vue_type_script_lang_js,
  page404vue_type_template_id_c056fc1a_render,
  page404vue_type_template_id_c056fc1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page404 = (page404_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/sideMenu/sideMenu.vue?vue&type=template&id=7d49ac08
var sideMenuvue_type_template_id_7d49ac08_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"menuRefRJ",staticClass:"menuBoxRP"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menuDisplay),expression:"menuDisplay"}],staticClass:"menuListR"},[_c('side-menu-group',{attrs:{"data":_vm.data,"pathName":_vm.pathName}})],1),_c('Icon',{staticClass:"menuShowHideIco",class:{ showIco: !_vm.menuDisplay },attrs:{"type":_vm.typeIco,"size":25,"title":_vm.titleC,"color":_vm.menuDisplay ? '#fff' : '#333'},on:{"click":_vm.showHideMenu}})],1)
}
var sideMenuvue_type_template_id_7d49ac08_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/sideMenu/sideMenuGroup.vue?vue&type=template&id=e9615104
var sideMenuGroupvue_type_template_id_e9615104_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"groupBoxRP"},_vm._l((_vm.data),function(item,i){return _c('li',{key:item?.path + i,class:{ dropItemRP: item?.children }},[_c('div',{staticClass:"menuTxtR",class:_vm.getClass(item),style:({ paddingLeft: item?.level * 20 + 'px' }),on:{"click":function($event){return _vm.handleClick($event, item)}}},[_vm._v(" "+_vm._s(item?.name || '-- no name --')+" ")]),(item?.children)?_c('sideMenuGroup',{attrs:{"data":item?.children,"path-name":_vm.pathName}}):_vm._e()],1)}),0)
}
var sideMenuGroupvue_type_template_id_e9615104_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/sideMenu/sideMenuGroup.vue?vue&type=script&lang=js

	/* harmony default export */ var sideMenuGroupvue_type_script_lang_js = ({
		name: 'sideMenuGroup',
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			},
			pathName: {
				type: String,
				default: ''
			}
		},
		methods: {
			getClass(item) {
				return item?.path === this.pathName ? 'active' : ''
			},
			handleClick(e, item) {
				e?.preventDefault?.()
				let target = e?.target

				if (!item?.children && !target.classList.contains('active')) {
					this.$router.push(item?.path)
					return
				}
				let parent = target.parentNode
				let siblings = this.siblingElems(parent)
				for (let item of siblings) {
					item?.classList?.remove?.('open') //手风琴效果
					const child = item?.querySelectorAll?.('.open')
					for (let e of child) {
						e?.classList?.remove?.('open')
					}
				}
				parent?.classList?.toggle?.('open')
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/sideMenu/sideMenuGroup.vue?vue&type=script&lang=js
 /* harmony default export */ var sideMenu_sideMenuGroupvue_type_script_lang_js = (sideMenuGroupvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/sideMenu/sideMenuGroup.vue





/* normalize component */
;
var sideMenuGroup_component = normalizeComponent(
  sideMenu_sideMenuGroupvue_type_script_lang_js,
  sideMenuGroupvue_type_template_id_e9615104_render,
  sideMenuGroupvue_type_template_id_e9615104_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sideMenuGroup = (sideMenuGroup_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/sideMenu/sideMenu.vue?vue&type=script&lang=js

	
	

	/* harmony default export */ var sideMenuvue_type_script_lang_js = ({
		name: 'sideMenu',
		mixins: [mixins_locale],
		components: { SideMenuGroup: sideMenuGroup },
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			}
		},
		computed: {
			titleC() {
				return this.menuDisplay ? this.t('r.hideMenu') : this.t('r.showMenu')
			},
			typeIco() {
				return this.menuDisplay ? 'ios-arrow-back' : 'ios-arrow-forward'
			}
		},
		data() {
			return {
				menuDisplay: true,
				pathName: null
			}
		},
		created() {
			let menuDisplay = localStorage.getItem('menuDisplayR')
			if (menuDisplay !== undefined && menuDisplay !== null && menuDisplay !== '') {
				menuDisplay = JSON.parse(menuDisplay)
			} else {
				menuDisplay = true
				localStorage.setItem('menuDisplayR', JSON.stringify(true))
			}
			this.menuDisplay = menuDisplay
		},
		watch: {
			$route: {
				handler(after) {
					this.pathName = after.path
					this.$nextTick(function () {
						this.addOpen()
					})
				},
				immediate: true
			}
		},
		methods: {
			showHideMenu() {
				this.menuDisplay = !this.menuDisplay
				localStorage.setItem('menuDisplayR', JSON.stringify(this.menuDisplay))
				this.$emit('on-change', this.menuDisplay)
			},
			addOpen() {
				let t = this.$refs.menuRefRJ.querySelectorAll('.dropItemRP')
				for (let e of t) {
					if (e?.querySelector?.('.active') && !e?.classList?.contains?.('open')) {
						e.classList.add?.('open')
					}
				}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/sideMenu/sideMenu.vue?vue&type=script&lang=js
 /* harmony default export */ var sideMenu_sideMenuvue_type_script_lang_js = (sideMenuvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/sideMenu/sideMenu.vue





/* normalize component */
;
var sideMenu_component = normalizeComponent(
  sideMenu_sideMenuvue_type_script_lang_js,
  sideMenuvue_type_template_id_7d49ac08_render,
  sideMenuvue_type_template_id_7d49ac08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sideMenu = (sideMenu_component.exports);
;// CONCATENATED MODULE: ./src/utils/fullScreenImgPreview.js
/** created 2019.07.05
 *  @author ricky email:zhangqingcq@foxmail.com
 *  @param {string}src - img src
 *  注意：不能全局调整Modal弹框尺寸，否则预览图片可能不居中，推荐使用另一个插件fullScreenImgByDom
 */




/* harmony default export */ function fullScreenImgPreview(src) {
	const T = (...arg) => locale_t.apply(this, arg)
	const close = T('r.closePreview')
	const fullImg = T('r.fullImg')

	let id = 'previewImg' + Math.floor(Math.random() * 10000000)
	view_design_r_.Modal.info({
		closable: false,
		'transition-names': ['linear', 'fade'],
		render: (h) => {
			return h(
				'div',
				{
					class: 'previewModal',
					attrs: {
						id: id
					}
				},
				[
					h(
						'div',
						{
							class: 'previewModalInner'
						},
						[
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
								domProps: {
									title: close
								},
								class: 'previewModalDelete',
								on: {
									click() {
										view_design_r_.Modal.remove()
									}
								}
							})
						]
					)
				]
			)
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
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/utils/tablePrint/printModal.vue?vue&type=template&id=7f69d23e
var printModalvue_type_template_id_7f69d23e_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tablePrintModal",class:[_vm.customClass]},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.disabled),expression:"disabled"}],staticClass:"msgL notPrint"},[_vm._v(_vm._s(_vm.t('r.printGuide.9')))]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"a4Line aL notPrint"},[_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.7')))]),_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.5')))])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"a4Line aR notPrint"},[_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.7')))]),_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.6')))])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"a4Line bL notPrint"},[_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.8')))]),_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.5')))])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"a4Line bR notPrint"},[_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.8')))]),_c('p',[_vm._v(_vm._s(_vm.t('r.printGuide.6')))])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"topsL notPrint"},[_c('div',{staticClass:"topsLTitle"},[_vm._v(_vm._s(_vm.title || _vm.t('r.print')))]),_c('div',{staticClass:"topsLBtn"},[_c('icon-txt-btn',{attrs:{"icon":"md-help-circle","name":_vm.t('r.help')},on:{"click":function($event){$event.stopPropagation();_vm.help = !_vm.help}}}),_c('icon-txt-btn',{attrs:{"icon":"md-print","name":_vm.t('r.preview')},on:{"click":_vm.print}}),(!_vm.domPrint)?_c('table-setting',{attrs:{"s-key":_vm.sKey,"storage":"sessionStorage"},model:{value:(_vm.columns),callback:function ($$v) {_vm.columns=$$v},expression:"columns"}}):_vm._e(),_c('tableIconBtn',{attrs:{"icon":"md-close","title":_vm.t('r.close')},on:{"click":_vm.close}})],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.help),expression:"help"}],staticClass:"topsLHelp"},[(!_vm.domPrint)?_c('p',[_c('span',[_vm._v("1. ")]),_c('span',[_vm._v(_vm._s(_vm.t('r.printGuide.1')))])]):_vm._e(),(!_vm.domPrint)?_c('p',[_c('span',[_vm._v("2. ")]),_c('span',[_vm._v(_vm._s(_vm.t('r.printGuide.2')))])]):_vm._e(),(_vm.domPrint)?_c('p',[_c('span',[_vm._v("1. ")]),_c('span',[_vm._v(_vm._s(_vm.t('r.printGuide.10')))])]):_vm._e(),_c('p',[_c('span',[_vm._v(_vm._s(_vm.domPrint ? '2. ' : '3. '))]),_c('span',[_vm._v(_vm._s(_vm.t('r.printGuide.3')))])]),_c('p',[_c('span',[_vm._v(_vm._s(_vm.domPrint ? '3. ' : '4. '))]),_c('span',[_vm._v(_vm._s(_vm.t('r.printGuide.4')))])])])]),(_vm.domPrint)?_c('div',{staticClass:"domPrintSetting notPrint",style:(_vm.domContainerStyle)},[_c('div',{staticClass:"settingLine",on:{"mousedown":function($event){$event.stopPropagation();return _vm.dragStart.apply(null, arguments)}}})]):_vm._e(),(_vm.domPrint)?_c('div',{staticClass:"domPrintContent",style:(_vm.domContainerStyle),domProps:{"innerHTML":_vm._s(_vm.data)}}):_vm._e(),(!_vm.domPrint)?_c('Table',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"tablePW",attrs:{"columns":_vm.columns,"data":_vm.data,"border":""}}):_vm._e()],1)
}
var printModalvue_type_template_id_7f69d23e_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/utils/tablePrint/printModal.vue?vue&type=script&lang=js

	
	
	
	

	/* harmony default export */ var printModalvue_type_script_lang_js = ({
		name: 'printModal',
		mixins: [mixins_locale],
		components: {
			iconTxtBtn: iconTxtBtn,
			tableIconBtn: tableIconBtn,
			tableSetting: tableSetting
		},
		data() {
			return {
				title: '',
				disabled: false,
				domPrint: false,
				autoPrint: false,
				width: 715,
				help: false,
				isFrom: '',
				sKey: 'tablePrint_' + Date.now().toString(),
				customClass: '',
				columns: [],
				data: [],
				isDrag: false
			}
		},
		computed: {
			domContainerStyle() {
				return {
					width: this.width + 'px'
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.$data.isFrom = vm?.$route?.params?.isFrom
				if (!vm.$data.isFrom) {
					return
				}
				const k = 'print_' + vm.$data.isFrom
				let d = window.sessionStorage.getItem(k)
				if (!d) {
					vm.$data.disabled = true
					return
				}
				const { columns, data, title, config } = JSON.parse(d)
				vm.$data.columns = columns
				vm.$data.data = data
				vm.$data.title = title
				vm.$data.customClass = config?.customClass
				vm.$data.domPrint = config?.domPrint || false
				vm.$data.autoPrint = config?.autoPrint || false
				vm.$data.width = config?.width || 715
				document.title = (title || vm.$t('r.print')) + '_' + new Date().toLocaleString()
			})
		},
		mounted() {
			if (this.autoPrint) {
				let tc = window.setTimeout(() => {
					window.clearTimeout(tc)
					this.print()
				}, 100)
			}
			document.addEventListener('click', this.wallClick)
			document.addEventListener('mousemove', this.handleDrag)
			document.addEventListener('mouseup', this.dragEnd)
		},
		methods: {
			close() {
				if (this.isFrom) {
					window.sessionStorage.removeItem('print_' + this.isFrom)
				}
				window.sessionStorage.removeItem(this.sKey)
				window.close()
			},
			wallClick() {
				if (this.help) {
					this.help = false
				}
			},
			dragStart() {
				this.isDrag = true
			},
			handleDrag(e) {
				if (this.isDrag) {
					this.width = e?.layerX - 20
				}
			},
			dragEnd() {
				if (this.isDrag) {
					this.isDrag = false
				}
			},
			print() {
				this.help = false
				let ta = window.setTimeout(() => {
					window.clearTimeout(ta)
					window.print()
				}, 100)
			}
		}
	});

;// CONCATENATED MODULE: ./src/utils/tablePrint/printModal.vue?vue&type=script&lang=js
 /* harmony default export */ var tablePrint_printModalvue_type_script_lang_js = (printModalvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/utils/tablePrint/printModal.vue





/* normalize component */
;
var printModal_component = normalizeComponent(
  tablePrint_printModalvue_type_script_lang_js,
  printModalvue_type_template_id_7f69d23e_render,
  printModalvue_type_template_id_7f69d23e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var printModal = (printModal_component.exports);
;// CONCATENATED MODULE: ./src/utils/tablePrint/index.js
/**
 * created 2024.03.13
 * @author Ricky <zhangqingcq@foxmail.com>
 * @description 表格打印，可以在预览页面调整每列宽度以及可以选择打印的列
 * 注意：1.该插件依赖于vue-router，需要在安装库时传入router，详见该库使用说明文档；
 * 2.打印时会新开一个浏览器窗口，路由为'/tablePrint'，该路由页面需要铺满浏览器窗口，即该路由所在的router-view外部
 * 不应有任何dom元素渲染在页面上（隐藏的多余dom元素不影响打印）;
 * 3.由于内容较多时需要分页打印，所以需要在打印页面的html、body、#app上添加样式，该插件会自动添加这些样式，
 * 如果页面这些dom节点已经存在类似样式，该插件会覆盖已存在的样式（只会影响打印页面，无需担心其他页面被污染）;
 * ps:#app为vue项目根节点，因为vue2项目根节点没有特殊标识，不好识别，所以尽量使用'#app'作为根节点，
 * 或者自行设置根节点样式，根节点不能限制高度，设成height:100%即可;
 * 4.虽然插件有调节列宽的功能，但为了用户使用方便，开发人员应该在columns里设置好适合的列宽（minWidth或width）,
 * 让打印页面打开时就具备较好的打印布局效果。
 */





let _router = null

function addStyle() {
	const root = document.documentElement
	root.style.setProperty('overflow', 'auto')
	const style = document.createElement('style')
	style.innerHTML = `body,#app{height:100% !important}`
	document.head.appendChild(style)
}

function tablePrint_init(router) {
	if (router?.addRoute) {
		const t = router.getRoutes()
		let add = true
		for (let e of t) {
			if (e?.name === 'tablePrint') {
				add = false
				break
			}
		}
		if (add) {
			router.addRoute({
				path: '/tablePrint/:isFrom',
				name: 'tablePrint',
				component: printModal
			})
		}

		_router = router
		//新打开的浏览器窗口，进入时，该打印插件还未完成初始化，所以打印路由还没加上去，无法直接进入打印页面，在这里路由添加后重新进入打印页面
		if (location.pathname.indexOf('tablePrint') > -1) {
			//vue-router history模式
			_router.push(location.pathname)
			addStyle()
		} else if (location.hash.indexOf('tablePrint') > -1) {
			//vue-router hash模式
			_router.push(location.hash.replace(/^#/, ''))
			addStyle()
		}
	}
}

function columnsHandle(item) {
	if (myTypeof(item) === 'Object') {
		item.width = item.minWidth || 100
		item.sortable = false
		delete item.minWidth
		delete item.__id
		item.resizable = true
		if (item.children && myTypeof(item.children) === 'Array') {
			item.children = item.children.map(columnsHandle)
		}
	}
	return item
}

/**
 * 供外部使用的打印API
 * @param {Array} columns Table的列设置，同view-design
 * @param {Array|String} data Table的数据
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：1.customClass,用于定制打印页面样式；2.autoPrint,是否直接打印
 */
function print(columns, data, title, config) {
	if (!_router) {
		return
	}

	let columnsB
	if (!config?.domPrint) {
		let _columns = external_root_commonjs_lodash_commonjs2_lodash_amd_lodash_default().cloneDeep(
			columns.filter((e) => {
				return e?.key || e?.children
			})
		)
		if (_columns[0].type === 'selection') {
			_columns.shift()
		}
		if (!_columns.length) {
			columnsB = []
		} else {
			columnsB = _columns.map(columnsHandle)
		}
	}

	let _p = _router?.currentRoute?.fullPath
	if (_p) {
		_p = _p.replace(/\//g, '_')
	}
	let _d = {
		data,
		title,
		config
	}
	if (!config?.domPrint) {
		_d.columns = columnsB
	}
	window.sessionStorage.setItem('print_' + _p, JSON.stringify(_d))
	const r = _router.resolve({
		name: 'tablePrint',
		params: { isFrom: _p }
	})
	window.open(r?.href, '_blank')
}

/* harmony default export */ var tablePrint = ({
	init: tablePrint_init,
	print
});

;// CONCATENATED MODULE: ./src/utils/domPrint.js


/**
 * @description 打印Dom(网页指定的内容)
 * @param {String} data 要打印的dom数据，一般使用dom操作获取dom，然后将其outerHTML作为data传进去就行
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：1.customClass,用于定制打印页面样式；2.autoPrint,是否直接打印；3.width,dom容器宽度（打印内容将放在这个容器进行打印）
 * 注意：
 * 1.data只是dom,要打印出带样式的dom，需要将要打印的dom相关样式设置成全局样式，而且这些样式无需进入调用打印的页面即可生效。
 * 2.不要限制要打印的dom的高度（实在需要限制可在原来的页面写成局部样式，不要影响打印页面高度），否则无法正常分页打印出全部内容。
 */
function _p(data, title, config = {}) {
	config.domPrint = true
	if (!config.width) {
		config.width = 715
	}
	tablePrint.print([], data, title, config)
}

/* harmony default export */ var domPrint = (_p);

// EXTERNAL MODULE: external {"root":"ar-cascader","commonjs":"ar-cascader","commonjs2":"ar-cascader","amd":"ar-cascader"}
var external_root_ar_cascader_commonjs_ar_cascader_commonjs2_ar_cascader_amd_ar_cascader_ = __webpack_require__(518);
var external_root_ar_cascader_commonjs_ar_cascader_commonjs2_ar_cascader_amd_ar_cascader_default = /*#__PURE__*/__webpack_require__.n(external_root_ar_cascader_commonjs_ar_cascader_commonjs2_ar_cascader_amd_ar_cascader_);
// EXTERNAL MODULE: external {"root":"JsonView","commonjs":"vue-json-viewer","commonjs2":"vue-json-viewer","amd":"vue-json-viewer"}
var external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_ = __webpack_require__(909);
var external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_default = /*#__PURE__*/__webpack_require__.n(external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/loaders/loaders.vue?vue&type=template&id=462f82d7
var loadersvue_type_template_id_462f82d7_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"loader-div",attrs:{"data-loader":_vm.dataLoader}})
}
var loadersvue_type_template_id_462f82d7_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/loaders/loaders.vue?vue&type=script&lang=js

	/* harmony default export */ var loadersvue_type_script_lang_js = ({
		name: 'loaders',
		props: {
			dataLoader: {
				//加载动画类型，不传默认为circle
				type: String,
				default: 'circle'
			},
			show: {
				//是否显示加载，默认为true
				type: Boolean,
				default: true
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/loaders/loaders.vue?vue&type=script&lang=js
 /* harmony default export */ var loaders_loadersvue_type_script_lang_js = (loadersvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/loaders/loaders.vue





/* normalize component */
;
var loaders_component = normalizeComponent(
  loaders_loadersvue_type_script_lang_js,
  loadersvue_type_template_id_462f82d7_render,
  loadersvue_type_template_id_462f82d7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loaders = (loaders_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/echartMap/echartMap.vue?vue&type=template&id=1018009e
var echartMapvue_type_template_id_1018009e_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"echart-main",style:({ width: _vm.widthT, height: _vm.heightT })},[_c('Button',{directives:[{name:"show",rawName:"v-show",value:(_vm.back),expression:"back"}],staticClass:"hidden",style:(_vm.btnStyle),attrs:{"id":"back","type":"primary"},on:{"click":_vm.oback}},[_vm._v("返回全国")]),_c('div',{staticClass:"echart-map",attrs:{"id":_vm.name}})],1)
}
var echartMapvue_type_template_id_1018009e_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_lodash@4.17.21_prettier@3.2.5_vue-template-compiler@2.7.16_webpack@5.91.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/echartMap/echartMap.vue?vue&type=script&lang=js

	let provinces = [
		'shanghai',
		'hebei',
		'shanxi',
		'neimenggu',
		'liaoning',
		'jilin',
		'heilongjiang',
		'jiangsu',
		'zhejiang',
		'anhui',
		'fujian',
		'jiangxi',
		'shandong',
		'henan',
		'hubei',
		'hunan',
		'guangdong',
		'guangxi',
		'hainan',
		'sichuan',
		'guizhou',
		'yunnan',
		'xizang',
		'shanxi1',
		'gansu',
		'qinghai',
		'ningxia',
		'xinjiang',
		'beijing',
		'tianjin',
		'chongqing',
		'xianggang',
		'aomen'
	]
	let provincesText = [
		'上海',
		'河北',
		'山西',
		'内蒙古',
		'辽宁',
		'吉林',
		'黑龙江',
		'江苏',
		'浙江',
		'安徽',
		'福建',
		'江西',
		'山东',
		'河南',
		'湖北',
		'湖南',
		'广东',
		'广西',
		'海南',
		'四川',
		'贵州',
		'云南',
		'西藏',
		'陕西',
		'甘肃',
		'青海',
		'宁夏',
		'新疆',
		'北京',
		'天津',
		'重庆',
		'香港',
		'澳门'
	]

	//引入echarts对象
	;

	/* harmony default export */ var echartMapvue_type_script_lang_js = ({
		name: 'echartMap',
		props: {
			name: {
				//地图名称，必传
				type: String,
				default: ''
			},
			roam: {
				//迁徒图缩放功能，默认为true
				type: Boolean,
				default: true
			},
			setSeries: {
				//自定义series内容配置，定义后会覆盖组件自带的series配置
				type: Array,
				default: () => {
					return []
				}
			},
			setGeo: {
				//地图地理配置
				type: Function,
				default: (pName, me) => {
					return {
						show: true,
						map: pName,
						roam: me.roam,
						label: {
							normal: {
								show: false
							},
							emphasis: {
								show: false
							}
						},
						itemStyle: me.geoItemStyle() //地理全局颜色，因定制化的可能性较多，由回调函数执行
					}
				}
			},
			mapType: {
				//地图类型，默认为数据展示型地图，其他类型有：migration(迁徒图)
				type: String,
				default: 'normal'
			},
			migrationData: {
				//迁徒图数据
				type: Array,
				default: () => {
					//默认数据例子
					return [
						[
							{ name: '重庆', lngLat: [106.553263, 29.564724] },
							{ name: '北京', lngLat: [116.399014, 39.924869], value: 666 }
						]
					]
				}
			},
			setLine: {
				//配置线条，没有的话默认使用组件内的配置
				type: Array,
				default: () => {
					return []
				}
			},
			setScatter: {
				//配置散点（气泡），没有的话默认使用组件内的配置
				type: Array,
				default: () => {
					return []
				}
			},
			migrationRippleEffect: {
				type: Function,
				default: () => {
					return {
						brushType: 'stroke' //波纹的绘制方式，可选 'stroke' 和 'fill'。。
					}
				}
			},
			migrationEffect: {
				// 迁徒图第一层配置
				type: Function,
				default: () => {
					return {
						show: true,
						period: 6, // 特效动画的时间，单位为 s
						trailLength: 0.1, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
						color: '#46bee9', // 移动箭头颜色
						symbol: 'pin', // 箭头的svg，有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
						symbolSize: 6 // 特效标记的大小
					}
				}
			},
			migrationLineStyle: {
				// 迁徒图第一层线条样式
				type: Function,
				default: () => {
					return {
						normal: {
							color: '#fff',
							width: 0,
							curveness: 0.2 // 幅度
						}
					}
				}
			},
			migrationEffect2: {
				// 迁徒图第二层线条配置
				type: Function,
				default: () => {
					return {
						show: true,
						period: 6, // 特效动画的时间，单位为 s
						trailLength: 0, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
						symbol: 'pin', // 箭头的svg，有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
						symbolSize: 6 // 特效标记的大小
					}
				}
			},
			migrationLineStyle2: {
				// 迁徒图第二层线条样式
				type: Function,
				default: () => {
					return {
						normal: {
							color: new external_root_echarts_commonjs_echarts_commonjs2_echarts_amd_echarts_.graphic.LinearGradient(
								0,
								0,
								0,
								1,
								[
									{
										offset: 0,
										color: '#FFFFA8' // 出发
									},
									{
										offset: 1,
										color: '#58B3CC' // 结束 颜色
									}
								],
								false
							),
							width: 1.5,
							opacity: 0.4,
							curveness: 0.2
						}
					}
				}
			},
			btnStyle: Object, //返回按钮样式
			scatterLabel: {
				//标点回调函数
				type: Function,
				default: (params) => {
					//params返回数组形式，内容分别是经度、维度、值
					return params.data.value[2]
				}
			},
			tooltip: {
				//工具提示框回调函数
				type: Function,
				default: () => {
					return '随便定义任何内容也是可以的，通过回调函数取'
				}
			},
			scatterLabelPosition: {
				//标记文字位置，top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight
				type: String,
				default: 'inside'
			},
			scatterGeoShow: {
				//是否显示标点，默认显示
				type: Boolean,
				default: true
			},
			scatterGeoItemStyle: {
				//标点样式回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							color: '#F62157'
						}
					}
				}
			},
			scatterGeoLabelTextStyle: {
				//气泡标签回调函数
				type: Function,
				default: () => {
					return {
						color: '#fff',
						fontSize: 9
					}
				}
			},
			geoItemStyle: {
				//地理全局颜色回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							areaColor: '#3c8dbc', // 没有值得时候颜色
							borderColor: '#097bba'
						},
						emphasis: {
							areaColor: '#fbd456' // 鼠标滑过选中的颜色
						}
					}
				}
			},
			title: {
				//标题回调函数
				type: Function,
				default: () => {
					return {
						show: false
					}
				}
			},
			mapLabel: {
				//地图区域标签颜色回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							show: true, //显示省份标签
							textStyle: {
								color: '#895139'
							} //省份标签字体颜色
						},
						emphasis: {
							//对应的鼠标悬浮效果
							show: true,
							textStyle: {
								color: '#323232'
							}
						}
					}
				}
			},
			mapItemStyle: {
				//地图区域颜色回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							borderWidth: 0.5, //区域边框宽度
							borderColor: '#0550c3', //区域边框颜色
							areaColor: '#0b7e9e' //区域颜色
						},
						emphasis: {
							borderWidth: 0.5,
							borderColor: '#4b0082',
							areaColor: '#ece39e'
						}
					}
				}
			},
			scatterSymbol: {
				//标点类型，还可以自定义图片地址
				type: String,
				default: 'pin'
			},
			maxSize4Pin: {
				//侧边最大值
				type: Number,
				default: 40
			},
			minSize4Pin: {
				//侧边最小值
				type: Number,
				default: 30
			},
			seriesData: {
				//省级数据
				type: Array,
				default: () => {
					return []
				}
			},
			seriesDataPro: {
				//市区县数据
				type: Array,
				default: () => {
					return []
				}
			},
			inRangeColor: {
				//范围区域颜色，从最大值到最小值的颜色区分
				type: Array,
				default: () => {
					return []
				}
			},
			visualMap: {
				type: Function,
				default: (me, min, max) => {
					return {
						show: me.visualMapShow,
						min: min, //侧边滑动的最小值，从数据中获取
						max: max, //侧边滑动的最大值，从数据中获取
						left: me.visualMapLeft, //组件位置
						top: me.visualMapTop, //组件位置
						inverse: me.visualMapInverse, //是否反转 visualMap 组件
						itemHeight: me.visualMapHeight, //图形的高度，即长条的高度
						itemWidth: me.visualMapWidth, //图形的宽度，即长条的高度
						text: me.visualMapText, //文本，默认为数值文本
						textStyle: me.visualMapTextStyle(), //字体样式
						calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
						seriesIndex: me.visualMapSeriesIndex, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
						orient: me.visualMapOrient, //如何放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）
						inRange: {
							color: me.inRangeColor //范围区域颜色
						}
					}
				}
			},
			visualMapText: {
				type: Array,
				default: () => {
					return ['高', '低']
				}
			},
			visualMapTextStyle: {
				//视觉映射字体样式
				type: Function,
				default: () => {
					return {}
				}
			},
			visualMapShow: {
				//视觉映射组件，默认不显示
				type: Boolean,
				default: false
			},
			visualMapOrient: {
				//如何放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）。
				type: String,
				default: 'horizontal'
			},
			visualMapSeriesIndex: {
				//指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
				type: Number,
				default: 1
			},
			visualMapHeight: {
				//视觉映射组件高度
				type: Number,
				default: null
			},
			visualMapWidth: {
				//视觉映射组件宽度
				type: Number,
				default: null
			},
			visualMapInverse: {
				//是否反转 visualMap 组件。默认false
				type: Boolean,
				default: false
			},
			visualMapLeft: {
				//视觉映射组件距离左边位置，默认5%
				type: String,
				default: '5%'
			},
			visualMapTop: {
				//视觉映射组件距离头部位置，默认95%
				type: String,
				default: '95%'
			},
			scatterGeoZlevel: {
				type: Number,
				default: 6
			},
			widthT: {
				//you know
				type: String,
				default: '870px'
			},
			heightT: {
				//you know
				type: String,
				default: '384px'
			}
		},
		data() {
			return {
				mapName: 'china', //地域名称
				myChart: null, //地图对象
				back: false //返回按钮是否显示的状态
			}
		},
		mounted() {
			//实例化DOM元素（ID,国家JSON文件）
			this.myChart = external_root_echarts_commonjs_echarts_commonjs2_echarts_amd_echarts_.init(document.getElementById(this.name))
			// 全国时，添加click 进入省级
			let me = this
			me.myChart.on('click', (param) => {
				if (param?.data?.provinceKey) {
					if (me.seriesDataPro.length) {
						//显示返回按钮
						me.back = true
						// 遍历取到provincesText 中的下标  去拿到对应的省js
						for (let i = 0; i < provincesText.length; i++) {
							if (param.name === provincesText[i]) {
								me.mapName = provinces[i]
								//显示对应省份的方法
								me.$emit('on-click-map', provinces[i], provincesText[i])
								me.initEcharts(provinces[i], provincesText[i])
								break
							}
						}
					}
				}
			})
			//自适应样式
			if (window.echartResizeMJ === undefined) {
				window.echartResizeMJ = {}
			}
			if (!window.echartResizeMJ[me.name]) {
				let temp = window.onresize
				if (temp) {
					window.onresize = () => {
						if (me.myChart) {
							temp()
							me.myChart.resize()
							window.echartResizeMJ[me.name] = true
						}
					}
				} else {
					window.onresize = () => {
						if (me.myChart) {
							me.myChart.resize()
							window.echartResizeMJ[me.name] = true
						}
					}
				}
			}
		},
		methods: {
			/**
			 * 加载地图实例化内容结构，canvas渲染基于echarts技术，数据结构基于高德地图技术
			 * 目前没有找到更好的引入方式实现，import动态加载不行，require形式也不行
			 * 欢迎其他开发者提供更好的懒加载方式，提升代码优雅性
			 * **/
			initEcharts(pName, Chinese_) {
				let max = 0,
					min = 0
				//地图类型
				switch (this.mapType) {
					case 'normal':
						let tmpSeriesData = pName === 'china' ? this.seriesData : this.seriesDataPro
						//定义侧边滑动的最大值和最小值，根据返回的数据来，没有值默认都为0
						if (tmpSeriesData?.length > 0) {
							max = Math.max.apply(
								Math,
								tmpSeriesData.map((o) => {
									return o.value
								})
							)
						}
						this.loadNormalMap(pName, Chinese_, min, max, tmpSeriesData) //渲染普通数据型地图
						break
					case 'migration':
						//定义标点大小，根据数据自动变化,maxSize4Pin和minSize4Pin设置最大图标和最小图标范围
						if (this.migrationData) {
							max = Math.max.apply(
								Math,
								this.migrationData.map((item) => {
									return item[1].value
								})
							)
						}
						this.loadMigrationMap(pName, min, max) //渲染迁徒型地图实例化对象
						break
				}
			},
			//迁徒型地图实例化对象
			loadMigrationMap(pName, min, max) {
				//事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
				let me = this
				let series = []

				// 没有配置线条的话默认使用组件内的线条配置
				if (me.setLine.length <= 0) {
					series = series.concat(me.normalLine())
				} else {
					series = series.concat(me.setLine)
				}

				//如果有设置scatterGeoShow，增加地图上出现标点的series配置，属于echart散点（气泡）图
				if (me.scatterGeoShow) {
					// 没有配置散点的话默认使用组件内的散点（气泡）配置
					if (me.setScatter.length <= 0) {
						series = series.concat(me.normalScatter(min, max))
					} else {
						series = series.concat(me.setScatter)
					}
				}

				// 指定地图的配置项和数据
				let option = {
					//标题
					title: me.title(),
					//工具提示
					tooltip: {
						trigger: 'item',
						// 鼠标滑过显示的数据
						formatter: (params) => {
							//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
							return me.tooltip(params)
						}
					},
					//地理位置
					geo: me.setGeo(pName, me),
					series: []
				}

				//如果有自定义series配置，覆盖所有之前的配置
				if (me.setSeries.length > 0) {
					series = this.setSeries
				}

				// 使用刚指定的配置项和数据显示图表
				option.series = series
				me.myChart.setOption(option)
			},
			//数据型地图实例化对象
			loadNormalMap(pName, Chinese_, min, max, data) {
				let tmpSeriesData = data
				//事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
				let me = this,
					series = []
				// 指定地图的配置项和数据
				let option = {
					//标题
					title: me.title(),
					//工具提示
					tooltip: {
						trigger: 'item',
						// 鼠标滑过显示的数据
						formatter: (params) => {
							//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
							return me.tooltip(params)
						}
					},
					//视觉映射组件
					visualMap: this.visualMap(me, min, max),
					//地理位置
					geo: me.setGeo(pName, me),
					series: []
				}

				//配置底图
				series.push({
					name: Chinese_ || pName,
					type: 'map',
					mapType: pName,
					roam: me.roam, //是否开启鼠标缩放和平移漫游
					data: tmpSeriesData,
					selectedMode: 'single',
					label: me.mapLabel(),
					itemStyle: me.mapItemStyle()
				})

				//如果有设置scatterGeoShow，增加地图上出现标点的series配置，属于echart散点（气泡）图
				if (me.scatterGeoShow) {
					if (this.setScatter.length <= 0) {
						series = series.concat(this.setMark(tmpSeriesData, max, min))
					} else {
						series = series.concat(this.setScatter)
					}
				}

				//如果有设置inRangeColor来增加城市颜色从最小数据到最大数据的强调色配置，属于echart散点（气泡）图，在series数组中优先级最高
				if (me.inRangeColor.length > 0) {
					series.unshift(this.setRegionColor(tmpSeriesData))
				}

				//如果有自定义series配置，覆盖所有之前的配置
				if (me.setSeries.length > 0) {
					series = this.setSeries
				}

				// 使用刚指定的配置项和数据显示图表
				option.series = series
				me.myChart.setOption(option)
			},
			convertCitysData(data) {
				let res = []
				for (let i = 0; i < data.length; i++) {
					let dataItem = data[i]
					let fromCoord = dataItem[0].lngLat
					let toCoord = dataItem[1].lngLat
					if (fromCoord && toCoord) {
						res.push([
							{
								coord: fromCoord
							},
							{
								coord: toCoord
							}
						])
					}
				}
				return res
			},
			// 转换数据用于标记，有值的情况下才可以标记
			convertData(data) {
				let geoCoordMap = this.getGeoCoordMap(this.mapName)
				let res = []
				for (let i = 0; i < data.length; i++) {
					// 数据的名字对应的经纬度
					let geoCoord = geoCoordMap[data[i].name]
					// 如果数据data对应上
					if (geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						})
					}
				}
				return res
			},
			// 用名称获取经纬度
			getGeoCoordMap(name) {
				name = name ? name : 'china'
				// 获取地图数据对象
				let geoCoordMap = {}
				// loading start
				this.myChart.showLoading()
				let mapFeatures = external_root_echarts_commonjs_echarts_commonjs2_echarts_amd_echarts_.getMap(name).geoJson.features
				// loading end
				this.myChart.hideLoading()
				mapFeatures.forEach(function (v) {
					// 地区名称
					let name = v.properties.name
					// 地区经纬度
					geoCoordMap[name] = v.properties.cp
				})
				return geoCoordMap
			},
			//返回地域事件，目前只有省级到中国两级，此处可以升级
			oback() {
				//隐藏返回按钮
				this.back = false
				this.mapName = 'china'
				this.$emit('on-click-map', this.mapName, '中国')
			},
			//设置地图默认散点（气泡）配置
			normalScatter(min, max) {
				return [
					{
						//标记
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: this.migrationRippleEffect(),
						symbol: this.scatterSymbol, //标点类型
						label: {
							normal: {
								show: this.scatterGeoShow,
								position: this.scatterLabelPosition,
								formatter: (params) => {
									//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
									return this.scatterLabel(params)
								},
								textStyle: this.scatterGeoLabelTextStyle()
							}
						},
						symbolSize: (val) => {
							let a = (this.maxSize4Pin - this.minSize4Pin) / (max - min)
							let b = this.maxSize4Pin - a * max
							return a * val[2] + b
						},
						itemStyle: this.scatterGeoItemStyle(),
						data: this.migrationData.map((dataItem) => {
							return {
								name: dataItem[1].name,
								value: dataItem[1].lngLat.concat([dataItem[1].value])
							}
						})
					}
				]
			},
			//设置地图默认线条配置
			normalLine() {
				return [
					{
						// 光影特效用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
						// effect出发到目的地的白色尾巴线条特效的配置
						type: 'lines',
						zlevel: 1,
						effect: this.migrationEffect(),
						// lineStyle出发到目的地的线条颜色
						lineStyle: this.migrationLineStyle(),
						data: this.convertCitysData(this.migrationData) //开始到结束数据
					},
					{
						// 线条+第二层光影
						type: 'lines',
						zlevel: 2,
						effect: this.migrationEffect2(),
						lineStyle: this.migrationLineStyle2(),
						data: this.convertCitysData(this.migrationData)
					}
				]
			},
			/**
       地图区域颜色，属于echart散点（气泡）图。直角坐标系上的散点图可以用来展现数据的 x，y 之间的关系，
       如果数据项有多个维度，其它维度的值可以通过不同大小的 symbol 展现成气泡图，也可以用颜色来表现。
       这些可以配合 visualMap 组件完成
       注意scatter有先后优先级顺序！
       **/
			setRegionColor(data) {
				return {
					type: 'scatter',
					coordinateSystem: 'geo',
					data: data
				}
			},
			/**
       地图标点，属于echart散点（气泡）图。直角坐标系上的散点图可以用来展现数据的 x，y 之间的关系，
       如果数据项有多个维度，其它维度的值可以通过不同大小的 symbol 展现成气泡图，也可以用颜色来表现。
       这些可以配合 visualMap 组件完成
       **/
			setMark(data, max, min) {
				return [
					{
						type: 'scatter',
						coordinateSystem: 'geo',
						symbol: this.scatterSymbol, //标点类型
						symbolSize: (val) => {
							let a = (this.maxSize4Pin - this.minSize4Pin) / (max - min)
							let b = this.maxSize4Pin - a * max
							return a * val[2] + b
						},
						label: {
							normal: {
								show: this.scatterGeoShow,
								position: this.scatterLabelPosition,
								formatter: (params) => {
									//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
									return this.scatterLabel(params)
								},
								textStyle: this.scatterGeoLabelTextStyle()
							}
						},
						itemStyle: this.scatterGeoItemStyle(),
						zlevel: this.scatterGeoZlevel,
						data: this.convertData(data)
					}
				]
			}
		},
		//生命周期结束前
		beforeDestroy() {
			//销组件毁时也一并销毁地图实例，释放内存
			if (this.myChart) {
				this.myChart.clear()
				this.myChart.dispose()
				this.myChart = null
				window.echartResizeMJ = {}
			}
		}
	});

;// CONCATENATED MODULE: ./src/components/echartMap/echartMap.vue?vue&type=script&lang=js
 /* harmony default export */ var echartMap_echartMapvue_type_script_lang_js = (echartMapvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/echartMap/echartMap.vue





/* normalize component */
;
var echartMap_component = normalizeComponent(
  echartMap_echartMapvue_type_script_lang_js,
  echartMapvue_type_template_id_1018009e_render,
  echartMapvue_type_template_id_1018009e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var echartMap = (echartMap_component.exports);
// EXTERNAL MODULE: external {"root":"@wangeditor/editor","commonjs":"@wangeditor/editor","commonjs2":"@wangeditor/editor","amd":"@wangeditor/editor"}
var editor_ = __webpack_require__(466);
;// CONCATENATED MODULE: ./src/utils/wangeditor5init.js

(() => {
	if (window.wangeditorMenuInit) {
		return
	}

	class PreviewButton {
		constructor() {
			this.title = locale_t('r.preview')
			this.iconSvg =
				'<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>'
			this.tag = 'button'
			this.alwaysEnable = true
		}

		getValue() {
			return ''
		}

		isActive(d) {
			return false
		}

		isDisabled() {
			return false
		}

		exec(d) {
			const e = document.getElementById('editor-preview')
			let _w = localStorage.getItem('editorPreviewW') || 300
			let _h = localStorage.getItem('editorPreviewH') || 500
			const contentR = d.getHtml()

			if (e) {
				let wallE = e.children?.[0]?.children?.[1]?.children?.[0]
				let outWallE = e.children?.[0]?.children?.[1]
				wallE.innerHTML = contentR
				wallE.style.width = _w + 'px'
				outWallE.style.height = _h + 'px'
				e.style.display = 'block'
			} else {
				const body = document.body
				const p = document.createElement('div')
				p.setAttribute('id', 'editor-preview')
				p.setAttribute('class', 'editor-preview-mask')
				p.innerHTML = `<div class="editor-preview-body"><div class="editor-preview-head"><div><span>宽</span><input type="number" value="${_w}" min="200"><span>高</span><input type="number" value="${_h}" min="300"></div><i class="ivu-icon ivu-icon-md-close"></i></div><div class="editor-preview-out-wall"><div class="editor-preview-wall r-editor-view"></div></div></div>`
				let outWallE = p.children[0].children[1]
				let wallE = p.children[0].children[1].children[0]

				let inputW = p.children[0].children[0].children[0].children[1]

				const spaceW = 40
				const spaceH = 70

				const wHandler = (e) => {
					if (e?.type === 'keyup') {
						let notEnter = false
						if (e.key) {
							notEnter = e.key !== 'Enter'
						}
						if (notEnter) {
							return
						}
					}
					let val = e?.target?.value
					val = Number(val)
					if (wallE?.style?.width === val + 'px') {
						return
					}

					const bodyW = body.clientWidth

					if (val < 250) {
						val = 250
						e.target.value = 250
					} else if (val > bodyW - spaceW) {
						val = bodyW - spaceW
						e.target.value = bodyW - spaceW
					}
					wallE.style.width = val + 'px'
					localStorage.setItem('editorPreviewW', val)
				}

				inputW.addEventListener('blur', wHandler)
				inputW.addEventListener('keyup', wHandler)
				let inputH = p.children[0].children[0].children[0].children[3]

				const hHandler = (e) => {
					if (e?.type === 'keyup') {
						let notEnter = false
						if (e.key) {
							notEnter = e.key !== 'Enter'
						}
						if (notEnter) {
							return
						}
					}
					let val = e?.target?.value
					val = Number(val)

					if (outWallE?.style?.height === val + 'px') {
						return
					}

					const bodyH = body.clientHeight

					if (val < 300) {
						val = 300
						e.target.value = 300
					} else if (val > bodyH - spaceH) {
						val = bodyH - spaceH
						e.target.value = bodyH - spaceH
					}
					outWallE.style.height = val + 'px'
					localStorage.setItem('editorPreviewH', val)
				}

				inputH.addEventListener('blur', hHandler)
				inputH.addEventListener('keyup', hHandler)
				let closeE = p.children[0].children[0].children[1]
				closeE.addEventListener('click', (e) => {
					p.style.display = 'none'
				})

				wallE.innerHTML = contentR
				wallE.style.width = _w + 'px'
				outWallE.style.height = _h + 'px'
				body.append(p)
			}
		}
	}

	const configP = {
		key: 'previewX',
		factory() {
			return new PreviewButton()
		}
	}

	editor_.Boot.registerMenu(configP)
	window.wangeditorMenuInit = true
})()

;// CONCATENATED MODULE: ./src/index.js




















































/*直接使用的组件（注册为全局Vue组件）*/
const components = {
	HelloR: hello,
	btTablePage: btTablePage,
	pagePro: pagePro,
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
	editorPro: editorPro,
	alCascaderMC: alCascaderMC,
	checkboxTree: checkboxTree,
	checkboxGroupTwoClass: checkboxGroupTwoClass,
	checkboxGroupThreeClass: checkboxGroupThreeClass,
	fullScreenPop: fullScreenPop,
	headerBt: headerBt,
	formR: formR,
	formModal: formModal,
	customModal: customModal,
	searchForm: searchForm,
	formGroup: formGroup,
	echart: echart,
	echartMap: echartMap,
	loaders: loaders,
	showHidePanelB: showHidePanelB,
	tableSearch: tableSearch,
	selectScrollMore: selectScrollMore,
	transferBox: transferBox,
	fixedFullModal: fixedFullModal,
	page404: page404,
	sideMenu: sideMenu,
	monthRange: monthRange
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
	findCollection: findCollection,
	htmlPrint: htmlPrint,
	siblingElems: siblingElems,
	tablePrint: tablePrint,
	domPrint: domPrint
}

const install = function (Vue, opts = {}) {
	if (install.installed) {
		return
	}
	locale.i18n(opts.i18n)
	fetch.init(opts.useStore || opts.store)
	timer.init(opts.router)
	tablePrint.init(opts.router)

	if (!Vue) {
		console.error('库安装失败，未获取到Vue对象')
		return
	}

	Vue.use((external_root_ar_cascader_commonjs_ar_cascader_commonjs2_ar_cascader_amd_ar_cascader_default()))
	Vue.use((external_root_JsonView_commonjs_vue_json_viewer_commonjs2_vue_json_viewer_amd_vue_json_viewer_default()))

	Object.keys(components).forEach((key) => {
		Vue.component(key, components[key])
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
		Vue.directive('has', {
			/*权限指令*/
			bind(el, binding) {
				if (binding.value && !Vue.prototype.hasPermission(binding.value)) {
					el.style.display = 'none'
				}
			}
		})
	}
	if (Vue.directive('loadmore') === undefined) {
		//select下拉滚动监听事件 可通过指令参数传递class来指定容器
		Vue.directive('loadmore', {
			bind(el, binding) {
				// 获取定义好的scroll盒子
				let SELECT_DOM

				if (binding.arg) {
					SELECT_DOM = el.querySelector('.' + binding.arg)
				} else {
					SELECT_DOM = el.querySelector('.ivu-select-dropdown') || el
				}
				SELECT_DOM.addEventListener('scroll', function () {
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

	// 页签每页可选条数默认配置
	Vue.prototype.pageSizes = [10, 20, 50, 100]
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
	// btTablePage是否使用pagePro组件作为页签
	Vue.prototype.btTablePageUsePagePro = false
	// tableSetting默认背景色
	Vue.prototype.tableSettingBg = '#fff'
	// tableSetting默认transfer
	Vue.prototype.tableSettingTransfer = false
	// tableSetting默认eventsEnabled
	Vue.prototype.tableSettingEventsEnabled = true
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

/* harmony default export */ var src_0 = ({
	version: ({"NODE_ENV":"production","BASE_URL":""}).VERSION,
	install: install,
	...components,
	...methodsR,
	...plugMethods
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_less-loader@8.1.1_lodash@4._v73htomlhwfmnahgffiu7lhdt4/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});