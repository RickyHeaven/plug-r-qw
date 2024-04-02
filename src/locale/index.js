/**
 * @description 国际化
 * @author ricky zhangqingcq@foxmail.com
 * @created 2020.10.14
 */

import defaultLang from './lang/zh-CN'
import Vue from 'vue'
import deepmerge from 'deepmerge'
import Format from './format'

let lang = defaultLang
let merged = false
let i18nHandler = function () {
	//如果vue原型上有$t方法，用该方法进行国际化翻译
	const vuei18n = Object.getPrototypeOf(this || Vue).$t
	if (typeof vuei18n === 'function' && !!Vue.locale) {
		if (!merged) {
			merged = true
			Vue.locale(Vue.config.lang, deepmerge(lang, Vue.locale(Vue.config.lang) || {}, { clone: true }))
		}
		return vuei18n.apply(this, arguments)
	}
}

export const t = function (path, options) {
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
			return Format(value, options)
		}
		if (!value) {
			return ''
		}
		current = value
	}
	return ''
}

export const use = function (l) {
	lang = l || lang
}

export const i18n = function (fn) {
	i18nHandler = fn || i18nHandler
}

export default {
	use,
	t,
	i18n
}
