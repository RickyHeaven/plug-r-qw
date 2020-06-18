/** created 2019.05.24
 *  @author ricky email:zhangqingcq@foxmail.com
 */

import {Modal} from 'view-design'
import {myTypeof} from './functionGroup.js'


/**
 * config为一个对象，支持：
 * @param {string/html} content:弹框内容，同iView的content,
 * @param {number} height:弹框高度,默认值130,最小值130
 * @param {number} width:弹框宽度，默认值416,最小值416
 * @param {string/html} title:弹框标题内容，默认值“提示”
 * @param {callback} onOk:确定按钮回调函数
 * @param {boolean} onOkPromise:确定按钮回调函数是否为promise
 * @param {string/html} okText:确定按钮文字，默认值“确定”
 * @param {string/html} cancelText:取消按钮文字，默认值“取消”
 * @param {boolean} noWarnIcon:不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} footerAlign:底部对齐方式，string，默认值“center”
 * @param {boolean} cancelBt:展示取消按钮，boolean，默认值“true”
 * 组件中调用示例：this.messageBox({
 *                      content:'校验中，返回结果前，请勿关闭或刷新页面'
 *                    })
 */
export default function messageBox({height, width = 416, title, content, onOk, onOkPromise, okText, cancelText, noWarnIcon, footerAlign, cancelBt}) {
  let heightTemp = height && Number(height) - 90 > 40 ? Number(height) - 90 + 'px' : 0
  let heightT = heightTemp || '40px'
  let stringContent = myTypeof(content) === 'String'
  Modal.warning({
    width: width,
    render: (h) => {
      return h('div', {
        class: 'customMessageBox',
        style: {
          height: heightT
        }
      }, [
        h('div', {
          class: 'containerN'
        }, [
          h('div', {
            class: 'titleN'
          }, [
            h('span', title || '提示'),
            h('Button', {
              class: 'fr closeN',
              props: {
                type: 'text'
              },
              on: {
                click() {
                  Modal.remove()
                }
              }
            }, [
              h('Icon', {
                props: {
                  type: 'ios-close',
                  size: 30
                }
              })
            ])
          ]),
          h('div', {
            class: 'contentN',
            style: {
              textAlign: stringContent ? 'center' : 'left'
            }
          }, [
            h('Icon', {
              props: {
                type: 'md-warning',
                size: 40,
                color: '#669'
              },
              class: stringContent && (noWarnIcon !== true) ? '' : 'hide'
            }),
            h('div', {
              style: {
                display: stringContent ? 'inline-block' : 'block',
                position: stringContent ? 'relative' : 'unset',
                top: stringContent ? '-8px' : 'unset'
              }
            }, content)
          ]),
          h('div', {
            class: 'footerN',
            style: {
              textAlign: footerAlign || 'center'
            }
          }, [
            h('Button', {
              class: 'okBtN',
              props: {},
              on: {
                click() {
                  if (myTypeof(onOk) === 'Function') {
                    if (onOkPromise) {
                      onOk()
                        .then(() => {
                          Modal.remove()
                        })
                        .catch(() => {
                          Modal.remove()
                        })
                    }
                    else {
                      onOk()
                      Modal.remove()
                    }
                  }
                  else {
                    Modal.remove()
                  }
                }
              }
            }, okText || '确定'),
            h('Button', {
              class: [
                'cancelBtN',
                cancelBt === false && 'hide'
              ],
              props: {},
              on: {
                click() {
                  Modal.remove()
                }
              }
            }, cancelText || '取消')
          ])
        ])
      ])
    }
  })
}
