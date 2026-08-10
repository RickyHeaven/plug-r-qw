/**
 * @description 提示框
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2019.06.27
 */

import swal from 'sweetalert'
import { myTypeof } from './functionGroup.js'
import { t } from '../locale/index'

/**
 * @param {object|string|boolean} option  1.object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error or
 *   warning)'};2.string:'标题'
 * @param {string|HTMLElement} [text] 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param {string} [icon] 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'|'error'|'warning'
 * @param {boolean} closeOnClickOutside 点击外部关闭，默认：true
 */
export default function (option, text, icon, closeOnClickOutside = true) {
	const T = (...arg) => t.apply(this, arg)

	return new Promise((r, j) => {
		if (typeof option === 'object' && !Array.isArray(option)) {
			let okTxt = T('r.confirm')
			let cancelTxt = T('r.cancel')
			let cancelVisible = false
			let okClass = 'swalConfirmBt'
			let cancelClass = 'swalCancelBt'
			const reg = /^HTML.*Element$/

			option.type && (option.icon = option.type) && delete option.type
			option.className = option.className || 'swalBoxX'

			let t = ''
			if (option.text && reg.test(myTypeof(option.text))) {
				t = 'content'
			} else if (option.text && myTypeof(option.text) === 'String') {
				t = 'text'
			}

			if (option.buttons) {
				if (typeof option.buttons === 'object' && !Array.isArray(option.buttons)) {
					if (option.buttons.cancel) {
						option.buttons.cancel.text && (cancelTxt = option.buttons.cancel.text) && (cancelVisible = true)
						option.buttons.cancel.className && (cancelClass = option.buttons.cancel.className)

						option.buttons.confirm.text && (okTxt = option.buttons.confirm.text)
						option.buttons.confirm.className && (okClass = option.buttons.confirm.className)
					}
				} else if (Array.isArray(option.buttons)) {
					if (option.buttons[0]) {
						cancelTxt = option.buttons[0]
						cancelVisible = true
					}
					if (option.buttons[1]) {
						okTxt = option.buttons[1]
					}
				}
			}

			swal({
				title: option.title,
				icon: option.icon,
				className: option.className,
				[t]: option.text,
				buttons: {
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
				},
				closeOnClickOutside: option.closeOnClickOutside ?? true
			})
				.then((res) => {
					if (res && typeof option.onOk === 'function') {
						option.onOk()
					}
					r(res)
				})
				.catch((err) => {
					j(err)
				})
		} else if (typeof option === 'string') {
			let t = ''
			if (text) {
				switch (typeof text) {
					case 'string':
						t = 'text'
						break
					case 'object':
						t = 'content'
						break
				}
			}
			swal({
				title: option,
				[t]: text || '',
				icon: icon || '',
				className: 'swalBoxX',
				closeOnClickOutside: closeOnClickOutside,
				buttons: {
					confirm: {
						text: T('r.confirm'),
						value: true,
						visible: true,
						className: 'swalConfirmBt',
						closeModal: true
					}
				}
			})
				.then((res) => {
					r(res)
				})
				.catch((err) => {
					j(err)
				})
		} else if (typeof option === 'boolean') {
			if (!option && swal.close) {
				swal.close()
			}
		} else {
			throw new TypeError('swal第一个参数类型有误，仅支持Object/String/false')
		}
	})
}