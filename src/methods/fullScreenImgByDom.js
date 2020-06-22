export default function fullScreenImgByDom(src) {
  let bodyEl = window._.first(document.getElementsByTagName('body'))
  let child = document.createElement('div')
  child.setAttribute('class', 'fullScreenImgByDom')
  child.innerHTML = `<img src="${src}" alt="全屏图片"><span class="iconfont iconchenghao" title="关闭预览"></span>`
  child.children[1].addEventListener('click', function () {
    let bb = window._.first(document.getElementsByTagName('body'))
    if (bb) {
      bb.removeChild(child)
    }
  })
  bodyEl.appendChild(child)
}