/** created at 2020.05.08
 *@author ricky email:zhangqingcq@foxmail.com
 * @param {String}src - img src
 */

import _ from 'lodash'
import { t } from '../locale/index'

let _index = 0

function domHandle(src, _i, imgEl, nameEl) {
	if (nameEl) {
		nameEl.innerHTML = src[_i]?.name ?? ''
		if (src[_i]?.name) {
			if (nameEl.classList.contains('hide')) {
				nameEl.classList.remove('hide')
			}
		} else if (!nameEl.classList.contains('hide')) {
			nameEl.classList.add('hide')
		}
	}
	if (imgEl) {
		imgEl.src = src[_i]?.src ?? src[_i]
		_index = _i
	}
}

function lastImg(arrSrc, src, imgEl, nameEl) {
	if (arrSrc) {
		let _i
		if (_index - 1 < 0) {
			_i = src.length - 1
		} else {
			_i = _index - 1
		}
		domHandle(src, _i, imgEl, nameEl)
	}
}

function nextImg(arrSrc, src, imgEl, nameEl) {
	if (arrSrc) {
		let _i
		if (_index + 1 > src.length - 1) {
			_i = 0
		} else {
			_i = _index + 1
		}
		domHandle(src, _i, imgEl, nameEl)
	}
}

/**
 * 全屏图片预览，支持单张图片预览，或多张图片轮播
 * @param {string|Array<string>|Array<Record<string,any>>} src 图片地址，或者地址组成的数组，或包含地址src和名字name的对象组成的数组
 * @param {number} index src为数组时默认展示图的索引值，默认：0
 */
export default function fullScreenImgByDom(src, index = 0) {
	const T = (...arg) => t.apply(this, arg)

	const close = T('r.closePreview')
	const fullImg = T('r.fullImg')
	const last = T('r.last')
	const next = T('r.next')
	let notice

	let _src
	let _name
	_index = index
	const arrSrc = Array.isArray(src)
	if (arrSrc) {
		_src = src[_index]?.src ?? src[_index]
		_name = src[_index]?.name
	} else {
		_src = src
	}

	if (arrSrc && src.length > 1) {
		notice = `${last} ： ←, ↑, A, W | ${next} ： →, ↓, D, S | ${close} ： Esc`
	} else {
		notice = `${close} ： Esc`
	}

	let bodyEl = _.first(document.getElementsByTagName('body'))
	let child = document.createElement('div')
	child.setAttribute('class', 'fullScreenImgByDom')
	child.innerHTML = `<div class="previewInner"><div class="pageFBt left${
		arrSrc && src.length > 1 ? '' : ' hide'
	}"><i class="ivu-icon ivu-icon-ios-arrow-back" title="${last}" ></i></div><img src="${_src}" alt="${fullImg}" ><div class="pageFBt right${
		arrSrc && src.length > 1 ? '' : ' hide'
	}"><i class="ivu-icon ivu-icon-ios-arrow-forward" title="${next}" ></i></div><i class="ivu-icon ivu-icon-md-close" title="${close}" ></i></div><p class="pNotice cannotSelect">${notice}</p><p class="pName ${
		_name ? '' : 'hide'
	}">${_name}</p>`

	function closeHandler() {
		let bb = _.first(document.getElementsByTagName('body'))
		if (bb) {
			bb.removeChild(child)
		}
		document.removeEventListener('keyup', keyupHandler)
	}

	child.querySelector('.ivu-icon-md-close').addEventListener('click', closeHandler)
	const imgEl = child.querySelector('img')
	const nameEl = child.querySelector('.pName')
	child.querySelector('.pageFBt.left').addEventListener('click', function () {
		lastImg(arrSrc, src, imgEl, nameEl)
	})
	child.querySelector('.pageFBt.right').addEventListener('click', function () {
		nextImg(arrSrc, src, imgEl, nameEl)
	})

	function keyupHandler(e) {
		if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 87 || e.keyCode === 65) {
			//上、左、w、a
			lastImg(arrSrc, src, imgEl, nameEl)
		} else if (e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 83 || e.keyCode === 68) {
			//下、右、s、d
			nextImg(arrSrc, src, imgEl, nameEl)
		} else if (e.keyCode === 27) {
			//Esc
			closeHandler()
		}
	}

	document.addEventListener('keyup', keyupHandler)
	bodyEl.appendChild(child)
	child.focus({ preventScroll: true })
}
