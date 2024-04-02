import { Boot } from '@wangeditor/editor'
import { t } from '../locale'

;(() => {
	if (window.wangeditorMenuInit) {
		return
	}

	class PreviewButton {
		constructor() {
			this.title = t('r.preview')
			this.iconSvg =
				'<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>'
			this.tag = 'button'
			this.alwaysEnable = true
		}

		getValue() {
			return ''
		}

		isActive(d) {
			return false
		}

		isDisabled() {
			return false
		}

		exec(d) {
			const e = document.getElementById('editor-preview')
			let _w = localStorage.getItem('editorPreviewW') || 300
			let _h = localStorage.getItem('editorPreviewH') || 500
			const contentR = d.getHtml()

			if (e) {
				let wallE = e.children[0].children[1].children[0]
				let outWallE = e.children[0].children[1]
				wallE.innerHTML = contentR
				wallE.style.width = _w + 'px'
				outWallE.style.height = _h + 'px'
				e.style.display = 'block'
			} else {
				const body = document.body
				const p = document.createElement('div')
				p.setAttribute('id', 'editor-preview')
				p.setAttribute('class', 'editor-preview-mask')
				p.innerHTML = `<div class="editor-preview-body"><div class="editor-preview-head"><div><span>宽</span><input type="number" value="${_w}" min="200"><span>高</span><input type="number" value="${_h}" min="300"></div><i class="ivu-icon ivu-icon-md-close"></i></div><div class="editor-preview-out-wall"><div class="editor-preview-wall r-editor-view"></div></div></div>`
				let outWallE = p.children[0].children[1]
				let wallE = p.children[0].children[1].children[0]

				let inputW = p.children[0].children[0].children[0].children[1]

				const spaceW = 40
				const spaceH = 70

				const wHandler = (e) => {
					if (e?.type === 'keyup') {
						let notEnter = false
						if (e.key) {
							notEnter = e.key !== 'Enter'
						}
						if (notEnter) {
							return
						}
					}
					let val = e.target.value
					val = Number(val)
					if (wallE?.style?.width === val + 'px') {
						return
					}

					const bodyW = body.clientWidth

					if (val < 250) {
						val = 250
						e.target.value = 250
					} else if (val > bodyW - spaceW) {
						val = bodyW - spaceW
						e.target.value = bodyW - spaceW
					}
					wallE.style.width = val + 'px'
					localStorage.setItem('editorPreviewW', val)
				}

				inputW.addEventListener('blur', wHandler)
				inputW.addEventListener('keyup', wHandler)
				let inputH = p.children[0].children[0].children[0].children[3]

				const hHandler = (e) => {
					if (e?.type === 'keyup') {
						let notEnter = false
						if (e.key) {
							notEnter = e.key !== 'Enter'
						}
						if (notEnter) {
							return
						}
					}
					let val = e.target.value
					val = Number(val)

					if (outWallE?.style?.height === val + 'px') {
						return
					}

					const bodyH = body.clientHeight

					if (val < 300) {
						val = 300
						e.target.value = 300
					} else if (val > bodyH - spaceH) {
						val = bodyH - spaceH
						e.target.value = bodyH - spaceH
					}
					outWallE.style.height = val + 'px'
					localStorage.setItem('editorPreviewH', val)
				}

				inputH.addEventListener('blur', hHandler)
				inputH.addEventListener('keyup', hHandler)
				let closeE = p.children[0].children[0].children[1]
				closeE.addEventListener('click', (e) => {
					p.style.display = 'none'
				})

				wallE.innerHTML = contentR
				wallE.style.width = _w + 'px'
				outWallE.style.height = _h + 'px'
				body.append(p)
			}
		}
	}

	const configP = {
		key: 'previewX',
		factory() {
			return new PreviewButton()
		}
	}

	Boot.registerMenu(configP)
	window.wangeditorMenuInit = true
})()
