/**
 * created 2019.06.27
 * @author Ricky <zhangqingcq@foxmail.com>
 */

import swal from 'sweetalert'
import { myTypeof } from './functionGroup.js'
import { t } from '../locale/index'

/**
 * @param {object|string} option  1.object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error or
 *   warning)'};2.string:'标题'
 * @param {string} [text] 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param {string} [icon] 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'|'error'|'warning'
 * @param {boolean} closeOnClickOutside 点击外部关闭，默认：true
 */
export default function (option, text, icon, closeOnClickOutside = true) {
	const T = (...arg) => t.apply(this, arg)

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
				swal(option)
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
				swal(tempOption)
					.then((res) => {
						r(res)
					})
					.catch((err) => {
						j(err)
					})
				break
			case 'Boolean':
				if (option === false) {
					swal.close()
				}
				break
			default:
				throw new TypeError('swal第一个参数类型有误，仅支持Object/String/false')
		}
	})
}
