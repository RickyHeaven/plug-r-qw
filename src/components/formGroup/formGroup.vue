<!--created 2019.07.05-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div :style="formGroupStyle" class="formGroupBoxVM">
		<form-r
			ref="formRRef"
			v-bind="$attrs"
			v-on="$listeners"
			:form-data="formData"
			:label-width="labelWidth"
			:content-width="contentWidth"
			:item-width="itemWidth"
			:btnLoading="btnLoading"
			:disabled="disabled"
			@on-submit="onSubmit"
		>
			<template #[item?.slotName]="{ valGroup }" v-for="item in formDataC">
				<slot :name="item?.slotName" :val-group="valGroup" />
			</template>
		</form-r>
		<div class="formFooterVM" v-show="showOkBt || showCancelBt" :style="{ marginLeft: labelWidth + 'px' }">
			<div :style="{ width: contentWidth }" class="btnBoxKAL">
				<Button @click="submit" class="form-save-btn" v-if="showOkBt" :loading="btnLoading && showLoading" :disabled="disabled">{{
					okBtTxt || t('r.confirm')
				}}</Button>
				<Button @click="close" class="form-cancel-btn" v-if="showCancelBt">{{ cancelBtTxt || t('r.cancel') }}</Button>
			</div>
		</div>
	</div>
</template>

<script>
	import formR from '../formR/formR.vue'
	import Locale from '../../mixins/locale'
	import { setTimeout } from '../../utils/timer'
	import { myTypeof } from '../../utils/functionGroup'

	export default {
		name: 'formGroup',
		mixins: [Locale],
		components: {
			formR
		},
		props: {
			formData: {
				/*弹框结构数据*/
				type: Array,
				default() {
					return []
				}
			},
			width: {
				/*表单组宽度*/
				type: String,
				default() {
					return this.formGroupWidth
				}
			},
			labelWidth: {
				/*表单项标签宽度*/
				type: Number,
				default() {
					return this.formGroupLabelWidth
				}
			},
			contentWidth: {
				/*表单项内容宽度，默认70%*/
				type: String,
				default: '70%'
			},
			itemWidth: {
				/*表单项内容宽度,用于行内表单*/
				type: Number,
				default: 200
			},
			showOkBt: {
				/*是否展示确定按钮*/
				type: Boolean,
				default: true
			},
			showCancelBt: {
				/*是否展示取消按钮*/
				type: Boolean,
				default: true
			},
			okBtTxt: {
				/*确定按钮内容*/
				type: String
			},
			cancelBtTxt: {
				/*取消按钮内容*/
				type: String
			},
			btnLoading: {
				/*提交按钮显示loading*/
				type: Boolean,
				default: false
			},
			disabled: {
				/*组件禁用（只展示信息）*/
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				formGroupStyle: {
					width: this.width
				},
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
				return this.formData.filter(
					(e) => e?.type === 'custom' || (e?.type === 'input' && e.slotName && e.slotPosition)
				)
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
				/*私有，可用resetForm代替*/
				this.$refs.formRRef.clearForm()
			},
			setItemToValGroup(data, notClearOthers) {
				/*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
				this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
			},
			updateValGroup(data, notClearOthers) {
				/*更新表单项的值（只能更新已有字段），公开*/
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
				/*改变确定按钮loading状态，私有*/
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
				this.$refs.formRRef.submit()
			},
			close() {
				/*触发取消按钮点击事件，公开*/
				this.$emit('on-cancel')
				setTimeout(() => {
					this.showLoading = false
					this.$refs.formRRef.changeLoading(false)
				}, 1000)
			}
		}
	}
</script>
