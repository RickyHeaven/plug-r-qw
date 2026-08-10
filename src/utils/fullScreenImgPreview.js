/**
 * @description 全屏预览图片
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2019.07.05
 * 注意：不能全局调整Modal弹框尺寸，否则预览图片可能不居中，推荐使用另一个插件fullScreenImgByDom
 */

import { Modal } from '@zhangqingcq/view-design-r'
import { t } from '../locale/index'
import { setTimeout } from './timer'

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

	setTimeout(() => {
		const modalEl = document.getElementById(id)
		if (!modalEl) return

		let parent = modalEl.parentElement
		let depth = 0
		let hideEl = null

		while (parent && depth < 4) {
			if (parent.classList?.contains?.('ivu-modal-content')) {
				hideEl = parent
				break
			}
			parent = parent.parentElement
			depth++
		}

		if (!hideEl) {
			hideEl = modalEl.closest?.('.ivu-modal-content') || null
		}

		const hideEl2 = modalEl.parentElement?.nextSibling
		if (hideEl) {
			hideEl.style.height = '0'
			hideEl.style.padding = '0'
		}
		if (hideEl2) {
			hideEl2.style.display = 'none'
		}
	}, 10)
}