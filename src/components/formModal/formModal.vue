<!--created 2019.06.25-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<Modal
		class="formModal"
		:title="title || t('r.title')"
		v-model="openModal"
		:mask-closable="false"
		:footer-hide="hideFooter"
		:class="{ hideFooter: hideFooter }"
		:width="width"
		@on-visible-change="handleVisibleChange"
	>
		<form-r
			ref="formRRef"
			v-bind="$attrs"
			v-on="$listeners"
			:form-data="formData"
			:label-width="labelWidth"
			:btnLoading="btnLoading"
			@on-submit="onSubmit"
		>
			<template #[item?.slotName]="{ valGroup }" v-for="item in formDataC">
				<slot :name="item?.slotName" :val-group="valGroup" />
			</template>
		</form-r>
		<template #footer>
			<Button @click="submit" class="modal-save-btn" :loading="btnLoading && showLoading">{{
				okBtTxt || t('r.confirm')
			}}</Button>
			<Button @click="close" class="modal-cancel-btn" v-if="!hideCancelBt">{{ cancelBtTxt || t('r.cancel') }}</Button>
		</template>
	</Modal>
</template>

<script>
	import formR from '../formR/formR.vue'
	import Locale from '../../mixins/locale'
	import { setTimeout } from '../../methods/timer'
	import { myTypeof } from '../../methods/functionGroup'

	export default {
		name: 'formModal',
		mixins: [Locale],
		components: {
			formR
		},
		props: {
			title: {
				/*弹框标题*/
				type: String
			},
			formData: {
				/*弹框结构数据*/
				type: Array,
				default() {
					return []
				}
			},
			width: {
				/*弹框宽度*/
				type: [Number, String],
				default() {
					return this.formModalWidth
				}
			},
			labelWidth: {
				/*表单项标签宽度*/
				type: Number,
				default() {
					return this.formModalLabelWidth
				}
			},
			okBtTxt: {
				/*确定按钮内容*/
				type: String
			},
			cancelBtTxt: {
				/*取消按钮内容*/
				type: String
			},
			hideCancelBt: {
				/*隐藏取消按钮（只显示确定按钮，点击确定关闭弹框，如“查看”弹框）*/
				type: Boolean,
				default: false
			},
			hideFooter: {
				/*隐藏底栏*/
				type: Boolean,
				default: false
			},
			btnLoading: {
				/*提交按钮显示loading*/
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				openModal: false,
				showLoading: false
			}
		},
		computed: {
			formTeam() {
				return myTypeof(this.formData[0]) === 'Array'
			},
			formDataC() {
				if (this.formTeam) {
					let t = []
					for (let f of this.formData) {
						t = t.concat(f.filter((e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)))
					}
					return t
				}
				return this.formData.filter((e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition))
			}
		},
		methods: {
			resetForm() {
				/*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.resetForm().then(() => {
						resolve()
					})
				})
			},
			refreshFormDom() {
				/*刷新表单dom，公开*/
				return new Promise((resolve) => {
					this.$refs.formRRef.refreshFormDom().then(() => {
						resolve()
					})
				})
			},
			reRenderForm() {
				/*重新渲染表单，异步方法（公开）*/
				return new Promise((resolve) => {
					this.$refs.formRRef.reRenderForm().then(() => {
						resolve()
					})
				})
			},
			clearForm() {
				/*清空表单值(私有，不推荐直接调用，可以调用resetForm)*/
				this.$refs.formRRef.clearForm()
			},
			setItemToValGroup(data, notClearOthers) {
				/*设置表单项的值（公开，可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示）*/
				this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
			},
			updateValGroup(data, notClearOthers) {
				/*更新表单项的值（公开，只能更新已有字段）*/
				this.$refs.formRRef.updateValGroup(data, notClearOthers)
			},
			updateFormDataT(data) {
				/*更新表单结构，例如设置或取消禁用，公开*/
				this.$refs.formRRef.updateFormDataT(data)
			},
			validate() {
				/*验证表单，公开*/
				this.$refs.formRRef.validate()
			},
			reValidate(prop) {
				/*手动验证表单项（公开）*/
				this.$refs.formRRef.reValidate(prop)
			},
			changeLoading(val) {
				/*改变弹框loading状态，私有*/
				if (val === undefined) {
					return
				}
				this.showLoading = Boolean(val)
				this.$refs.formRRef.changeLoading(this.showLoading)
			},
			getValGroup() {
				/*获取用户已填数据，公开*/
				return this.$refs.formRRef.getValGroup()
			},
			onSubmit() {
				/*响应提交事件提交数据，私有*/
				this.showLoading = true
			},
			submit() {
				/*触发提交事件，公开*/
				if (this.hideCancelBt) {
					this.close()
				} else {
					this.$refs.formRRef.submit()
				}
			},
			open() {
				/*触发打开弹框事件，公开*/
				this.openModal = true
			},
			close() {
				/*触发关闭弹框事件，公开*/
				this.openModal = false
				setTimeout(() => {
					this.showLoading = false
					this.$refs.formRRef.changeLoading(false)
				}, 1000)
			},
			handleVisibleChange(show) {
				/*弹框开关状况改变处理，私有*/
				if (!show) {
					this.$emit('on-close')
				} else {
					this.$emit('on-open')
				}
			}
		}
	}
</script>
