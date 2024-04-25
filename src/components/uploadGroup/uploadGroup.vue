<!--created 2019.07.29-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div>
		<Upload
			name="files"
			:action="urlT"
			:before-upload="handelManualUpload"
			:on-error="uploadError"
			:on-success="uploadSuccess"
			:on-exceeded-size="overSize"
			:on-preview="onPreview"
			:on-remove="onRemove"
			:on-format-error="onFormatError"
			:data="data"
			:max-size="maxSize"
			:show-upload-list="false"
			:with-credentials="withCredentials"
			:format="format"
			:multiple="multiple || false"
			:disabled="(length > 0 && fileList.length >= length) || Boolean(disabled)"
		>
			<!--暂时屏蔽multiple选项-->
			<Button
				icon="ios-cloud-upload-outline"
				:class="{
					disabledR: (length > 0 && fileList.length >= length) || Boolean(disabled)
				}"
				>{{ t('r.selectFile') }}</Button
			>
		</Upload>
		<div class="previewBoxM" v-show="previewType === 'img' && fileDefaultList.length > 0">
			<div
				class="previewImg"
				:class="{ previewLoading: item?.mimeType === 'loading' }"
				v-if="!manualUpload && item?.id !== null"
				v-for="item of fileDefaultList"
				:key="item?.id"
			>
				<div class="imgLoading" v-show="item?.mimeType === 'loading'">
					<div data-loader="circle-side" class="loader-div" />
				</div>
				<img
					:src="url + '/' + item?.id + '/download?preview=true'"
					:alt="item?.name"
					v-show="item?.mimeType !== 'loading'"
				/>
				<div class="deleteModal" v-show="item?.mimeType !== 'loading'">
					<Icon
						type="ios-expand"
						size="40"
						class="previewExpand"
						:title="t('r.fView')"
						@click="fullScreenImgByDom(url + '/' + item?.id + '/download?preview=true')"
					/>
					<Icon
						type="ios-trash-outline"
						size="40"
						class="previewDelete"
						@click="deleteById($event, item?.id)"
						:title="t('r.delete')"
					/>
				</div>
			</div>
		</div>
		<div class="previewBoxM" v-show="previewType === 'localImg' && fileSrcList.length > 0">
			<div
				class="previewImg"
				v-if="manualUpload && item !== null"
				v-for="(item, index) of fileSrcList"
				:key="'manualImg' + index"
			>
				<img :src="item" :alt="'manualImg' + index" />
				<div class="deleteModal">
					<Icon
						type="ios-expand"
						size="40"
						class="previewExpand"
						@click="fullScreenImgByDom(item)"
						:title="t('r.fView')"
					/>
					<Icon
						type="ios-trash-outline"
						size="40"
						class="previewDelete"
						@click="clearManualItem(index)"
						:title="t('r.delete')"
					/>
				</div>
			</div>
		</div>
		<div class="customFileListM" v-show="previewType === 'localList' && fileList.length > 0">
			<p
				class="customFileListItem"
				v-if="manualUpload && item !== null"
				v-for="(item, index) of fileList"
				:key="'manualItem' + index"
			>
				<Icon v-if="item?.name" :type="getFileTypeIconByName(item?.name)" />
				<span class="upNameT" @click="downloadManualFile(item)" :title="t('r.download')">{{ getName(item) }}</span>
				<span class="btBoxJ">
					<Icon
						v-if="showPreview(item)"
						type="md-qr-scanner"
						size="14"
						class="listBtH"
						@click="listExpand(item)"
						:title="t('r.fView')"
					/>
					<Icon type="ios-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')" />
				</span>
			</p>
		</div>
		<div class="customFileListM" v-show="previewType === 'list' && fileDefaultList.length > 0">
			<div
				class="customFileListItem"
				v-if="!manualUpload && item !== null"
				v-for="(item, index) of fileDefaultList"
				:key="'defaultItem' + index"
			>
				<div class="listLoading" v-show="item?.mimeType === 'loading'">
					<div data-loader="circle-side" class="loader-div" />
				</div>
				<Icon :type="getFileTypeIconByName(item?.name)" v-show="item?.mimeType !== 'loading'" />
				<span
					class="upNameT"
					@click="downloadDefaultFile(item)"
					:title="t('r.download')"
					v-show="item?.mimeType !== 'loading'"
					>{{ item?.name || t('r.file') + (index + 1) }}</span
				>
				<span class="btBoxJ" v-show="item?.mimeType !== 'loading'">
					<Icon
						v-if="showPreview(item)"
						type="md-qr-scanner"
						size="14"
						class="listBtH"
						@click="listExpand(item)"
						:title="t('r.fView')"
					/>
					<Icon type="ios-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')" />
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		myTypeof,
		getFileSrc,
		getFileTypeByName,
		isImgByFile,
		getFileTypeIconByName,
		downloadFileReaderFile
	} from '../../methods/functionGroup'
	import $fetch from '../../methods/fetch'
	import fullScreenImgByDom from '../../methods/fullScreenImgByDom'
	import $swal from '../../methods/swal'
	import Locale from '../../mixins/locale'
	import _ from 'lodash'

	export default {
		name: 'uploadGroup',
		mixins: [Locale],
		model: {
			prop: 'fileIdListProp',
			event: 'on-file-id-change'
		},
		props: {
			fileIdListProp: {
				type: [Array, Number, String, File],
				default() {
					return []
				}
			},
			url: {
				/*文件上传的地址*/
				type: String,
				default() {
					if (window.g?.mgrURL) {
						return window.g.mgrURL + '/web/v1/fsc/file'
					}
					return ''
				}
			},
			data: {
				/*文件上传接口其他参数*/
				type: Object,
				default() {
					return {
						appId: 0,
						moduleId: 0,
						typeId: 0
					}
				}
			},
			manualUpload: {
				type: Boolean,
				default: false
			},
			maxSize: {
				type: Number,
				default: 0
			},
			length: {
				type: Number,
				default: 0
			},
			showUploadList: {
				type: Boolean,
				default: true
			},
			withCredentials: {
				type: Boolean,
				default: true
			},
			multiple: {
				type: Boolean,
				default: false
			},
			format: {
				type: Array,
				default() {
					return []
				}
			},
			showImg: {
				type: Boolean,
				default: false
			},
			disabled: {
				/*禁用，仅展示*/
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				getFileTypeIconByName: getFileTypeIconByName,
				fullScreenImgByDom: fullScreenImgByDom,
				fileSrcList: [],
				fileDefaultList: []
			}
		},
		computed: {
			previewType() {
				if (!this.manualUpload && this.showImg && this.fileListItemIsIMG) {
					return 'img'
				} else if (this.manualUpload && this.showImg && this.fileListItemIsIMG) {
					return 'localImg'
				} else if (this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
					return 'localList'
				} else if (!this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
					return 'list'
				}
			},
			urlT() {
				if (this.manualUpload) {
					return '//jsonplaceholder.typicode.com/posts/'
				} else {
					return this.url
				}
			},
			fileList: {
				get() {
					if (this.manualUpload) {
						return this.fileIdList
					} else {
						return this.fileIdList.map((e) => ({ id: e }))
					}
				},
				set(val) {
					if (this.manualUpload) {
						this.fileIdList = val
					} else {
						this.fileIdList = val.map((e) => e?.id)
					}
				}
			},
			fileIdList: {
				get() {
					switch (myTypeof(this.fileIdListProp)) {
						case 'Number':
							return [this.fileIdListProp]
						case 'String':
							if (this.fileIdListProp.indexOf('--') !== -1) {
								return []
							} else {
								if (/^\d*$/.test(this.fileIdListProp)) {
									return [Number(this.fileIdListProp)]
								}
								return [this.fileIdListProp]
							}
						case 'Array':
							return this.fileIdListProp.filter((e) => e !== '--')
						case 'File':
							return [this.fileIdListProp]
						default:
							return []
					}
				},
				set(val) {
					if (this.length === 1) {
						let temp = _.first(val)
						this.$emit('on-file-id-change', temp || temp === 0 ? temp : null)
					} else {
						this.$emit('on-file-id-change', _.cloneDeep(val))
					}
				}
			},
			fileListItemIsIMG() {
				let temp
				if (this.manualUpload) {
					temp = this.fileList
				} else {
					temp = this.fileDefaultList
				}
				for (let item of temp) {
					let type
					if (this.manualUpload) {
						type = item?.type
					} else {
						type = item?.mimeType
					}
					if (!type || (type && !(isImgByFile(type) || type === 'loading'))) {
						return false
					}
				}
				return true
			}
		},
		watch: {
			fileList: {
				async handler(after) {
					if (this.previewType === 'localImg') {
						if (after?.length > 0) {
							this.fileSrcList = await this.getFileSrcList(after)
						} else {
							this.fileSrcList = []
						}
					} else if (after?.length > 0 && this.previewType !== 'localList') {
						let temp = _.cloneDeep(after)
						const _fileDefaultList = _.cloneDeep(this.fileDefaultList)
						for (let item of temp) {
							if (item?.name === undefined) {
								//根据id获取文件名字
								if (item.id) {
									const fileT = _.find(_fileDefaultList, (e) => e?.id === item.id)
									if (fileT) {
										//本地有名字，在本地拿
										item.name = fileT.name
										item.mimeType = fileT.mimeType
									} else {
										//本地没有，去服务器拿
										item.mimeType = 'loading'
										$fetch
											.get(this.url + '/' + item.id)
											.then((r) => {
												item.name = r?.data?.returnValue?.[0]?.name || this.t('r.file') + _.indexOf(temp, item)
												this.$set(item, 'mimeType', r?.data?.returnValue?.[0]?.mimeType || 'unknown')
											})
											.catch(() => {
												item.name = this.t('r.file') + _.indexOf(temp, item)
											})
									}
								} else {
									item.name = this.t('r.unknown')
								}
							}
						}
						this.fileDefaultList = temp
					} else {
						this.fileDefaultList = []
					}
				},
				immediate: true,
				deep: true
			}
		},
		methods: {
			clear() {
				this.fileList = []
			},
			getName(item) {
				return item?.name || (item?.split && _.last(item.split('/'))) || item
			},
			async getFileSrcList(data) {
				let temp = []
				for (let item of data) {
					let src = await getFileSrc(item)
					temp.push(src)
				}
				return temp
			},
			clearManualItem(index) {
				if (!this.disabled) {
					let temp = this.fileList
					temp.splice(index, 1)
					this.fileList = temp
				}
			},
			downloadDefaultFile(item) {
				if (item?.id) {
					window.open(this.url + '/' + item.id + '/download')
				}
			},
			showPreview(file) {
				if (this.manualUpload) {
					return file?.type && isImgByFile(file.type)
				}
				return file?.id && file.mimeType && isImgByFile(file.mimeType)
			},
			listExpand(file) {
				//列表图片预览
				if (this.manualUpload) {
					if (!file) {
						return
					}
					getFileSrc(file).then((r) => {
						//图片的 base64 格式, 可以直接当成 img 的 src 属性值
						fullScreenImgByDom(r)
					})
				} else if (file?.id) {
					fullScreenImgByDom(this.url + '/' + file.id + '/download?preview=true')
				}
			},
			downloadManualFile(file) {
				if (myTypeof(file) === 'String' && file.indexOf('http') > -1) {
					window.open(file)
				} else if (myTypeof(file) === 'File') {
					getFileSrc(file).then((r) => {
						downloadFileReaderFile(file.name, r)
					})
				}
			},
			handelManualUpload(file) {
				if (this.manualUpload) {
					if (file) {
						let type = getFileTypeByName(file.name)
						if (this.format.length > 0 && this.format.indexOf(type) < 0) {
							$swal(
								this.t('r.wrongFileType'),
								this.t('r.supportType') + ((this.format.length > 0 && String(this.format)) || this.t('r.none')),
								'warning'
							)
							return false
						}
						if (this.maxSize && file.size > this.maxSize * 1024) {
							$swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + 'kb', 'warning')
							return false
						}
						let temp = this.fileList
						temp.push(file)
						this.fileList = temp
					}
					return false
				} else {
					return true
				}
			},
			uploadError(error, file, fileList) {
				console.warn(error)
				$swal(this.t('r.uploadError'), '', 'error')
			},
			uploadSuccess(response, file, fileList) {
				if (response?.code === 0) {
					let temp = this.fileList
					file.id = response.data?.[0]?.id
					file.name = response.data?.[0]?.name
					file.mimeType = response.data?.[0]?.mimeType
					temp.push(file)
					this.fileList = temp
				} else {
					$swal(this.t('r.uploadFail'), response?.message || '', 'error')
				}
			},
			overSize(file, fileList) {
				$swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + ' kb', 'warning')
			},
			onFormatError(file, fileList) {
				$swal(
					this.t('r.wrongFileType'),
					this.t('r.supportType') + ((this.format.length > 0 && String(this.format)) || this.t('r.none')),
					'warning'
				)
			},
			onPreview(file) {
				let id = file?.id
				let type = file?.mimeType
				if (id) {
					if (myTypeof(type) === 'String' && type.indexOf('image') > -1) {
						fullScreenImgByDom(this.url + '/' + id + '/download?preview=true')
					} else {
						window.open(this.url + '/' + id + '/download?preview=true')
					}
				}
			},
			onRemove(file, fileList) {
				let id = file?.response?.data?.[0]?.id
				this.deleteById(null, id)
			},
			deleteById(e, id) {
				if (!id && id !== 0) {
					return
				}
				if (!this.disabled && this.fileIdList.indexOf(id) !== -1) {
					const fileIdList = this.fileIdList
					let temp = this.fileList
					temp.splice(fileIdList.indexOf(id), 1)
					this.fileList = temp
				}
			}
		}
	}
</script>
