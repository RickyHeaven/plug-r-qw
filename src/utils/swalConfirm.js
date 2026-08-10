/**
 * @description 提示框
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2020.07.03
 */
import $swal from './swal.js'
import { t } from '../locale/index'

export default function $swalConfirm(title, text, icon, onOk, closeOnClickOutside = false) {
	const T = (...arg) => t.apply(this, arg)
	$swal.call(this, {
		title: title === null ? T('r.info.title') : title,
		text: text === null ? T('r.info.text') : text,
		icon: icon === null ? 'warning' : icon,
		onOk: onOk,
		buttons: [T('r.cancel')],
		closeOnClickOutside: closeOnClickOutside
	})
}