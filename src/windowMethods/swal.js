/**
 * created 2019.06.27
 * @author Ricky <zhangqingcq@foxmail.com>
 */

import swal from "sweetalert"
import {myTypeof} from '../methods/functionGroup.js'

/**
 * @param option object/string object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error or
 *   warning)'}---string:'标题'
 * @param text string 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param icon string 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'or'error'or'warning'
 */
export default function (option, text, icon) {
  return new Promise((r, j) => {
    switch (myTypeof(option)) {
      case 'Object':
        let okTxt = "确定"
        let cancelTxt = "取消"
        let cancelVisible = false
        let okClass = "swalConfirmBt"
        let cancelClass = "swalCancelBt"
        option.type && (option.icon = option.type) && (delete option.type)
        option.content && (option.text = option.content) && (delete option.content)
        option.className = option.className || 'swalBoxX'
        if (option.button === false) {
          //不设置button相关参数
        }
        else {
          if (option.buttons && myTypeof(option.buttons) === 'Object') {
            if (option.buttons.cancel) {
              option.buttons.cancel.text && (cancelTxt = option.buttons.cancel.text) && (cancelVisible = true)
              option.buttons.cancel.className && (cancelClass = option.buttons.cancel.className)
              option.buttons.confirm.text && (okTxt = option.buttons.confirm.text)
              option.buttons.confirm.className && (okClass = option.buttons.confirm.className)
            }
          }
          else if (option.buttons && myTypeof(option.buttons) === 'Array') {
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
        swal(option)
          .then(res => {
            r(res)
          })
          .catch(err => {
            j(err)
          })
        break
      case 'String':
        let tempOption = {
          title: option,
          buttons: {
            confirm: {
              text: "确定",
              value: true,
              visible: true,
              className: "swalConfirmBt",
              closeModal: true
            }
          },
          className: 'swalBoxX'
        }
        text && (tempOption.text = text)
        icon && (tempOption.icon = icon)
        swal(tempOption)
          .then(res => {
            r(res)
          })
          .catch(err => {
            j(err)
          })
        break
      case 'Boolean':
        if (option === false) {
          swal.close()
        }
        break
    }
  })
}
