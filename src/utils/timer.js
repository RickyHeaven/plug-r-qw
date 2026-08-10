/**
 * @description 可自动销毁的定时器和计时器
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2020.10.30
 */

let timeoutBox = []
let intervalBox = []
let isInitialized = false

/**
 * 初始化
 * @param {object} r router实例
 */
export const init = function (r) {
	if (isInitialized) {
		console.warn('定时器模块已经初始化过，请勿重复调用 init')
		return
	}

	if (r && typeof r.beforeEach === 'function') {
		r.beforeEach((to, from, next) => {
			timeoutBox.forEach((e) => {
				window.clearTimeout(e)
			})
			intervalBox.forEach((e) => {
				window.clearInterval(e)
			})
			timeoutBox.length = 0
			intervalBox.length = 0
			next()
		})
		isInitialized = true
	} else {
		console.warn(
			'安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})'
		)
	}
}

export const setTimeout = function (fn, time) {
	if (typeof fn !== 'function') {
		throw new TypeError('第一个参数必须是函数')
	}
	if (typeof time !== 'number' || time < 0) {
		throw new TypeError('第二个参数必须是非负数')
	}

	let handler = window.setTimeout(fn, time)
	timeoutBox.push(handler)
	return handler
}

export const setInterval = function (fn, time) {
	if (typeof fn !== 'function') {
		throw new TypeError('第一个参数必须是函数')
	}
	if (typeof time !== 'number' || time <= 0) {
		throw new TypeError('第二个参数必须是正数')
	}

	let handler = window.setInterval(fn, time)
	intervalBox.push(handler)
	return handler
}

export const clearTimeout = function (handler) {
	window.clearTimeout(handler)
	const index = timeoutBox.indexOf(handler)
	if (index > -1) {
		timeoutBox.splice(index, 1)
	}
}

export const clearInterval = function (handler) {
	window.clearInterval(handler)
	const index = intervalBox.indexOf(handler)
	if (index > -1) {
		intervalBox.splice(index, 1)
	}
}

export const clearAll = function () {
	timeoutBox.forEach((e) => window.clearTimeout(e))
	intervalBox.forEach((e) => window.clearInterval(e))
	timeoutBox.length = 0
	intervalBox.length = 0
}

export default {
	init,
	setTimeout,
	setInterval,
	clearTimeout,
	clearInterval,
	clearAll
}