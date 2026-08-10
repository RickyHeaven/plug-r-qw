/**
 * @description 国际化
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2020.10.14
 */

import defaultLang from './lang/zh-CN'
import Vue from 'vue'
import deepmerge from 'deepmerge'
import Format from './format'

const format = Format()
let lang = defaultLang
const message = {
	zh: defaultLang
}
let nowLang
let merged = {}
let vueI18n
let isFormatting = false
let i18nHandler = function (path, options) {
	//如果vue原型上有$t方法，用该方法进行国际化翻译
	if (typeof this === 'object' && this.$t) {
		return this.$t(path, options)
	}
	if (vueI18n && vueI18n.global) {
		return vueI18n.global.t(path, options)
	}
	if (vueI18n && vueI18n.locale) {
		if (!merged[vueI18n.locale] || nowLang !== vueI18n.locale) {
			merged[vueI18n.locale] = true
			const localMessage = Vue.locale(Vue.config.lang) || {}
			const newLocalMessage = deepmerge(message[vueI18n.locale] || lang, localMessage, { clone: true })
			lang = newLocalMessage
			Vue.locale(Vue.config.lang, newLocalMessage)
			nowLang = vueI18n.locale
		}
		return vueI18n.hlang(path, options)
	}
}

export const t = function (path, options) {
	if (isFormatting) {
		return ''
	}
	let value = i18nHandler.apply(this, [path, options])
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
			//防止format中调用t（该方法），形成递归
			isFormatting = true
			try {
				return format(value, options)
			} finally {
				isFormatting = false
			}
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

export const i18n = function (initI18n) {
	vueI18n = initI18n
}

export default {
	use,
	t,
	i18n
}