/**
 * created 2020.07.03
 * @author Ricky <zhangqingcq@foxmail.com>
 */

import $swal from '../windowMethods/swal.js'

export default function (title, content, icon, onOk) {
  $swal({
    title: title || '提示',
    content: content || '确定执行该操作？',
    icon: icon || 'warning',
    buttons: ['取消']
  })
    .then(r => {
      if (r) {
        onOk()
      }
    })
}