/** created at 2020.05.08
 *@author ricky email:zhangqingcq@foxmail.com
 * @param {String}src - img src
 */

import _ from 'lodash'
import {t} from '../locale/index'

export default function fullScreenImgByDom(src) {
  const T = (...arg) => t.apply(this, arg)
  
  const close = T('r.closePreview')
  const fullImg = T('r.fullImg')
  let bodyEl = _.first(document.getElementsByTagName('body'))
  let child = document.createElement('div')
  child.setAttribute('class', 'fullScreenImgByDom')
  child.innerHTML =
    `<div class="previewInner"><img src="${src}" alt="${fullImg}" ><i class="ivu-icon ivu-icon-md-close" title="${close}" ></i></div>`
  child.querySelector(".ivu-icon-md-close").addEventListener('click', function () {
    let bb = _.first(document.getElementsByTagName('body'))
    if (bb) {
      bb.removeChild(child)
    }
  })
  bodyEl.appendChild(child)
}