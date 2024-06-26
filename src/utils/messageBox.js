/** created 2019.05.24
 *  @author ricky email:zhangqingcq@foxmail.com
 */

import { Modal } from '@zhangqingcq/view-design-r'
import { myTypeof } from './functionGroup.js'
import { t } from '../locale/index'

let loading = false

/**
 * 对话框
 * @param {object} options 对话框配置
 * @param {string|function} options.content 弹框内容，1.string,直接将文字插入对应位置；2.function,如：(h)=>h('div',{class:'my-class'},'123')
 * @param {number} [options.height] 弹框高度,默认值130,最小值130
 * @param {number} [options.width] 弹框宽度，默认值416,最小值416
 * @param {string} [options.title] 弹框标题内容，默认值“提示”
 * @param {callback} [options.onOk] 确定按钮回调函数
 * @param {callback} [options.onCancel] 取消按钮回调函数
 * @param {callback} [options.onClose] 关闭（右上角叉叉）按钮回调函数
 * @param {string} [options.okText] 确定按钮文字，默认值“确定”
 * @param {string} [options.cancelText] 取消按钮文字，默认值“取消”
 * @param {boolean} [options.noWarnIcon] 不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} [options.footerAlign] 底部对齐方式，string，默认值“center”
 * @param {boolean} [options.cancelBt] 展示取消按钮，boolean，默认值“true”
 * @example this.messageBox({
 *                      content:'校验中，返回结果前，请勿关闭或刷新页面'
 *                    })
 */
export default function messageBox({
	height,
	width = 416,
	title,
	content,
	onOk,
	onCancel,
	onClose,
	okText,
	cancelText,
	noWarnIcon,
	footerAlign,
	cancelBt
}) {
	const T = (...arg) => t.apply(this, arg)

	const heightTemp = height && Number(height) - 90 > 100 ? Number(height) - 90 + 'px' : 0
	const heightT = heightTemp || '100px'
	content = content || T('r.info.text')
	const stringContent = myTypeof(content) === 'String'
	const functionContent = myTypeof(content) === 'Function'
	Modal.warning({
		width: width,
		render: (h) => {
			return h(
				'div',
				{
					class: 'customMessageBox',
					style: {
						height: heightT
					}
				},
				[
					h(
						'div',
						{
							class: 'containerN'
						},
						[
							h(
								'div',
								{
									class: 'titleN'
								},
								[
									h('span', title || T('r.info.title')),
									h(
										'Button',
										{
											class: 'fr closeN ivu-btn ivu-btn-text',
											props: {
												type: 'text'
											},
											on: {
												click() {
													Modal.remove()
													if (onClose && myTypeof(onClose) === 'Function') {
														onClose()
													}
												}
											}
										},
										[
											h('i', {
												class: 'ivu-icon ivu-icon-ios-close',
												style: {
													fontSize: '30px'
												}
											})
										]
									)
								]
							),
							h(
								'div',
								{
									class: 'contentN',
									style: {
										textAlign: stringContent ? 'center' : 'left'
									}
								},
								[
									h('i', {
										class: stringContent && noWarnIcon !== true ? 'ivu-icon ivu-icon-ios-alert-outline' : 'hide',
										style: {
											fontSize: '60px',
											color: '#f8bb86'
										}
									}),
									h('div', { class: 'msgBoxConO' }, functionContent ? [content(h)] : content)
								]
							),
							h(
								'div',
								{
									class: 'footerN',
									style: {
										textAlign: footerAlign || 'center'
									}
								},
								[
									h(
										'Button',
										{
											class: 'okBtN ivu-btn ivu-btn-default',
											on: {
												click(e) {
													if (onOk && typeof onOk === 'function') {
														const p = onOk()
														if (p && myTypeof(p) === 'Promise') {
															loading = true
															const el = e?.currentTarget || e?.target
															if (el) {
																el.classList.add('ivu-btn-loading')
																el.nextSibling.setAttribute('disabled', 'disabled')
																const c = el.parentElement?.parentElement.querySelector('.titleN .closeN')
																c.classList.add('disabled')
															}
															Promise.resolve(p)
																.then(() => {
																	loading = false
																	Modal.remove()
																})
																.catch(() => {
																	loading = false
																	Modal.remove()
																})
														} else {
															Modal.remove()
														}
													}
												}
											}
										},
										[
											h('i', {
												class: 'ivu-load-loop ivu-icon ivu-icon-ios-loading'
											}),
											h('span', okText || T('r.confirm'))
										]
									),
									h(
										'Button',
										{
											class: ['cancelBtN ivu-btn ivu-btn-default', cancelBt === false && 'hide'],
											on: {
												click() {
													Modal.remove()
													if (myTypeof(onCancel) === 'Function') {
														onCancel()
													}
												}
											}
										},
										cancelText || T('r.cancel')
									)
								]
							)
						]
					)
				]
			)
		}
	})
}
