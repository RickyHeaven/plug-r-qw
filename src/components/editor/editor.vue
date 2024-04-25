<!--created 2019.08.12-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div :id="editorId"></div>
</template>

<script>
	import E from 'wangeditor'
	import { isValidValue, myTypeof, oneOf } from '../../methods/functionGroup'
	import xss from 'xss'
	import $swal from '../../methods/swal'
	import Locale from '../../mixins/locale'
	import { setTimeout } from '../../methods/timer'
	import $fetch from '../../methods/fetch.js'
	import _ from 'lodash'

	const { $, BtnMenu } = E

	export default {
		name: 'Editor',
		mixins: [Locale],
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				type: String,
				default: ''
			},
			valueType: {
				/*绑定的值的类型*/
				type: String,
				validator: (val) => oneOf(val, ['html', 'text']),
				default: 'html'
			},
			focus: {
				type: Boolean,
				default: true
			},
			changeInterval: {
				/*设置change事件触发时间间隔*/
				type: Number,
				default: 800
			},
			colors: {
				/*文字和背景色*/
				type: Array,
				default() {
					return [
						'#000000',
						'#eeece0',
						'#1c487f',
						'#4d80bf',
						'#c24f4a',
						'#8baa4a',
						'#7b5ba1',
						'#46acc8',
						'#f9963b',
						'#ffffff'
					]
				}
			},
			fontNames: {
				/*可用字体*/
				type: Array,
				default() {
					return [
						'黑体',
						'仿宋',
						'楷体',
						'标楷体',
						'华文仿宋',
						'华文楷体',
						'宋体',
						'微软雅黑',
						'Arial',
						'Tahoma',
						'Verdana',
						'Times New Roman',
						'Courier New'
					]
				}
			},
			uploadImgMaxSize: {
				/*限制上传图片大小,默认0.1MB*/
				type: Number,
				default: 102.4 * 1024
			},
			uploadImgMaxLength: {
				/*限制一次最多能传几张图片，默认10张*/
				type: Number,
				default: 10
			},
			uploadImgShowBase64: {
				/*是否使用base64作为本地图片上传保存方式*/
				type: Boolean,
				default: true
			},
			uploadImgServe: {
				/*图片上传服务器配置，注意不可和base64上传同时开启*/
				type: Object
			},
			showLinkImg: {
				/*是否使用插入网络图片功能*/
				type: Boolean,
				default: true
			},
			placeholder: {
				type: String,
				default: '请输入正文'
			},
			previewClass: {
				/*预览容器类名，用于自定义预览界面table、code、blockquote等标签样式，将你的全局样式class传给该属性，你自定义的全局样式将在编辑预览界面生效*/
				type: String,
				default: 'r-editor-view'
			},
			disabled: {
				/*是否禁用编辑功能*/
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				editor: null,
				valueT: ''
			}
		},
		computed: {
			editorId() {
				return `editor${this._uid}`
			}
		},
		created() {
			let ops = _.cloneDeep(xss.whiteList)

			for (let key in ops) {
				if (ops.hasOwnProperty(key) && myTypeof(ops[key]) === 'Array') {
					ops[key].unshift('style')
				}
			}

			this.xssP = new xss.FilterXSS({ whiteList: ops })
		},
		mounted() {
			this.editor = new E(`#${this.editorId}`)

			const titleT = this.t('r.preview')
			const previewH = this.previewHandler

			//定义自定义菜单‘预览’
			class ViewMenu extends BtnMenu {
				constructor(editor) {
					const $elem = $(
						`<div class="w-e-menu" title="${titleT}"><i class="ivu-icon ivu-icon-ios-eye" style="font-size: 22px;"></i></div>`
					)

					super($elem, editor)
				}

				clickHandler() {
					previewH()
				}

				tryChangeActive() {}
			}

			//注册自定菜单
			this.editor.menus.extend('viewMenuKey', ViewMenu)

			this.editor.config.placeholder = this.placeholder
			this.editor.config.zIndex = 100
			this.editor.config.menus = [
				'head', // 标题
				'bold', // 粗体
				'fontSize', // 字号
				'fontName', //字体
				'italic', // 斜体
				'underline', // 下划线
				// 'strikeThrough',//删除线 暂时禁用
				'indent', //缩进
				'lineHeight', //行高
				'foreColor', // 文字颜色
				'backColor', // 背景颜色
				'link', // 插入链接
				'list', //列表
				'justify', // 对齐方式
				'quote', //引用
				'emoticon', //表情符
				'image', // 插入图片
				// 'video',//视频 暂时禁用
				'table', // 表格
				'splitLine', //分割线
				'undo', // 撤销
				'redo', // 重复
				'viewMenuKey' //自定义预览菜单
			]

			this.editor.config.focus = this.focus
			this.editor.config.colors = this.colors
			this.editor.config.fontNames = this.fontNames
			this.editor.config.uploadImgMaxSize = this.uploadImgMaxSize
			this.editor.config.uploadImgMaxLength = this.uploadImgMaxLength
			this.editor.config.showLinkImg = this.showLinkImg
			this.editor.config.menuTooltipPosition = 'down'
			if (myTypeof(this.uploadImgServe) === 'Object' || this.uploadImgShowBase64 === false) {
				this.editor.config.uploadImgShowBase64 = false
				let configS
				if (myTypeof(this.uploadImgServe) === 'Object') {
					configS = _.cloneDeep(this.uploadImgServe)
				} else {
					configS = {}
				}

				// 配置 server 接口地址
				if (myTypeof(configS.customUploadImg) === 'Function') {
					//自定义上传逻辑
					this.editor.config.customUploadImg = configS.customUploadImg
				} else {
					this.editor.config.customUploadImg = (resultFiles, insertImgFn) => {
						configS = Object.assign(
							{
								params: {},
								url: window?.g?.mgrURL ? window.g.mgrURL + '/web/v1/fsc/file' : ''
							},
							configS
						)
						// resultFiles 是 input 中选中的文件列表
						// insertImgFn 是获取图片 url 后，插入到编辑器的方法

						let paramsF = Object.assign(
							{
								appId: 0,
								moduleId: 0,
								typeId: 0
							},
							configS.params
						)

						let temp = new FormData()
						for (let key in paramsF) {
							if (paramsF.hasOwnProperty(key) && paramsF[key] !== null) {
								temp.append(key, paramsF[key])
							}
						}
						for (let item of resultFiles) {
							temp.append('files', item)
						}
						$fetch
							.post(configS.url, temp, null, [], {
								spin: true,
								headers: {
									'Content-Type': 'multipart/form-data'
								}
							})
							.then((r) => {
								if (r?.data && myTypeof(r.data) === 'Array') {
									for (let item of r.data) {
										if (isValidValue(item?.id)) {
											// 上传图片，返回结果，将图片插入到编辑器中
											insertImgFn(`${configS.url}/${item?.id}/download`)
										}
									}
								} else {
									this.$swal(this.t('r.uploadFail'), r?.message || '', 'error')
								}
							})
							.catch(() => {
								this.$swal(this.t('r.uploadError'), '', 'error')
							})
					}
				}
				this.editor.config.withCredentials = true
			} else {
				this.editor.config.uploadImgShowBase64 = this.uploadImgShowBase64
			}

			this.editor.config.customAlert = (s) => {
				$swal.apply(this, [this.t('r.uploadFail'), s || '', 'warning'])
			}

			this.editor.config.onchange = (html) => {
				let text = this.editor?.txt?.text?.() || ''
				let htmlT = this.xssP.process(html)
				this.valueT = this.valueType === 'html' ? htmlT : text
				if (this.value === this.valueT) {
					return
				}

				this.$emit('input', this.valueType === 'html' ? htmlT : text)
				this.$emit('on-change', this.valueType === 'html' ? htmlT : text)
			}
			this.editor.config.onchangeTimeout = this.changeInterval
			// create这个方法一定要在所有配置项之后调用
			this.editor.create()
			if (this.value) {
				this.editor.txt.html(this.xssP.process(this.value))
			}
			setTimeout(() => {
				this.$watch(
					() => this.disabled,
					(after) => {
						if (after) {
							// 禁用编辑功能
							this.editor.$textElem.attr('contenteditable', false)
						} else {
							// 开启编辑功能
							this.editor.$textElem.attr('contenteditable', true)
						}
					},
					{ immediate: true }
				)
				this.$watch(
					() => this.value,
					(s) => {
						if (s !== this.valueT) {
							this.setHtml(s)
						}
					}
				)
			}, 10)
		},
		beforeDestroy() {
			let l = document.getElementById(this.editorId + 'preview')
			if (l) {
				document.getElementsByTagName('body')[0].removeChild(l)
			}
			if (!this.editor) {
				return
			}
			// 销毁编辑器
			this.editor.destroy()
			this.editor = null
			this.xssP = null
		},
		methods: {
			setHtml(val) {
				this.editor.txt.html(this.xssP.process(val))
			},
			previewHandler() {
				const id = this.editorId + 'preview'
				let preEl = document.getElementById(id)
				let _w = localStorage.getItem('editorPreviewW') || 300
				let _h = localStorage.getItem('editorPreviewH') || 500
				if (!preEl) {
					const body = document.getElementsByTagName('body')

					preEl = document.createElement('div')
					preEl.setAttribute('id', id)
					preEl.setAttribute('class', 'editor-preview-mask')
					preEl.innerHTML = `<div class="editor-preview-body"><div class="editor-preview-head"><div><span>宽</span><input type="number" value="${_w}" min="200"><span>高</span><input type="number" value="${_h}" min="300"></div><i class="ivu-icon ivu-icon-md-close"></i></div><div class="editor-preview-out-wall"><div class="editor-preview-wall ${this.previewClass}"></div></div></div>`

					let outWallE = preEl.children[0].children[1]
					let wallE = preEl.children[0].children[1].children[0]

					let inputW = preEl.children[0].children[0].children[0].children[1]

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
						let val = e?.target?.value
						val = Number(val)
						if (wallE?.style?.width === val + 'px') {
							return
						}

						const bodyW = body[0].clientWidth

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
					let inputH = preEl.children[0].children[0].children[0].children[3]

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
						let val = e?.target?.value
						val = Number(val)

						if (outWallE?.style?.height === val + 'px') {
							return
						}

						const bodyH = body[0].clientHeight

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
					let closeE = preEl.children[0].children[0].children[1]
					closeE.addEventListener('click', (e) => {
						preEl.style.display = 'none'
					})

					wallE.innerHTML = this.value
					wallE.style.width = _w + 'px'
					outWallE.style.height = _h + 'px'
					body[0].append(preEl)
				} else {
					let wallE = preEl.children[0].children[1].children[0]
					let outWallE = preEl.children[0].children[1]
					wallE.innerHTML = this.value
					wallE.style.width = _w + 'px'
					outWallE.style.height = _h + 'px'
					preEl.style.display = 'block'
				}
			}
		}
	}
</script>
