/**
 * created 2020.07.03
 * @author Ricky <zhangqingcq@foxmail.com>
 */
import $swal from './swal.js'
import {t} from '../locale/index'

export default function (title, text, icon, onOk) {
  const T = (...arg) => t.apply(this, arg)
  $swal.call(this, {
    title: title || T('r.info.title'),
    text: text || T('r.info.text'),
    icon: icon || 'warning',
    onOk: onOk,
    buttons: [T('r.cancel')]
  })
}