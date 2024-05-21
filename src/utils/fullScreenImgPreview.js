/** created 2019.07.05
 *  @author ricky email:zhangqingcq@foxmail.com
 *  @param {string}src - img src
 *  注意：不能全局调整Modal弹框尺寸，否则预览图片可能不居中，推荐使用另一个插件fullScreenImgByDom
 */

import { Modal } from '@zhangqingcq/view-design-r'
import { t } from '../locale/index'

export default function (src) {
	const T = (...arg) => t.apply(this, arg)
	const close = T('r.closePreview')
	const fullImg = T('r.fullImg')

	let id = 'previewImg' + Math.floor(Math.random() * 10000000)
	Modal?.info?.({
		closable: false,
		'transition-names': ['linear', 'fade'],
		render: (h) => {
			return h(
				'div',
				{
					class: 'previewModal',
					attrs: {
						id: id
					}
				},
				[
					h(
						'div',
						{
							class: 'previewModalInner'
						},
						[
							h('img', {
								attrs: {
									src: src,
									alt: fullImg
								}
							}),
							h('Icon', {
								props: {
									type: 'md-close'
								},
								domProps: {
									title: close
								},
								class: 'previewModalDelete',
								on: {
									click() {
										Modal?.remove?.()
									}
								}
							})
						]
					)
				]
			)
		}
	})

	let ta = setTimeout(() => {
		const hideEl = document.getElementById(id).parentNode.parentNode.parentNode.parentNode
		const hideEl2 = document.getElementById(id).parentNode.nextSibling
		hideEl.style.height = '0'
		hideEl.style.padding = '0'
		hideEl2.style.display = 'none'
		clearTimeout(ta)
		ta = null
	}, 10)
}
