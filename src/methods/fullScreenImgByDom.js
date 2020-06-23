export default function fullScreenImgByDom(src) {
  let bodyEl = window._.first(document.getElementsByTagName('body'))
  let child = document.createElement('div')
  child.setAttribute('class', 'fullScreenImgByDom')
  child.innerHTML = `<div class="previewInner"><img src="${src}" alt="全屏图片"><span class="ivu-icon ivu-icon-md-close" title="关闭预览"></span></div>`
  child.querySelector(".ivu-icon-md-close").addEventListener('click', function () {
    let bb = window._.first(document.getElementsByTagName('body'))
    if (bb) {
      bb.removeChild(child)
    }
  })
  bodyEl.appendChild(child)
}