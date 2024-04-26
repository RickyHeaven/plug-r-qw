<!--created 2020.03.23-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div class="tabSetF" v-click-outside="clickOutsideHandle">
		<div ref="buttonRef" class="tabSetBt" @click="labelClick">
			<Icon type="md-settings" size="17" />
			<span class="cannotSelect">{{ t('r.tabSetting') }}</span>
		</div>
		<div
			ref="popperRef"
			v-show="show"
			v-transfer-dom
			:data-transfer="transfer"
			class="tabSetCard"
			:style="{ width: width, backgroundColor: bg }"
		>
			<div class="topCheck">
				<Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">{{
					t('r.all')
				}}</Checkbox>
				<span class="btnR" style="float: right" @click="save">{{ t('r.save') }}</span>
			</div>
			<CheckboxGroup v-model="checkAllGroup">
				<Checkbox
					v-for="(itemT, index) in groupX"
					class="setItem"
					:label="itemT?.label"
					:key="'tabSet_' + sKey + index"
					:disabled="itemT?.disabled"
				/>
			</CheckboxGroup>
		</div>
	</div>
</template>

<script>
	/**
	 * 列表显示设置插件
	 * @desc 利用table的columns和localstorage对table进行列的显示设置
	 * @author ricky email:zhangqingcq@foxmail.com
	 * @date 2020.03.23
	 * @param {array} value - 插件的值（v-model,对应table的columns）必填
	 * @param {string} sKey - 插件数据在localstorage的唯一标识，命名规则：插件所在单文件名称_取名时间，如areaNew_202003231639 必填
	 * @param {string} [width] - 设置面板宽度
	 * @param {string} [bg] - 设置面板背景色
	 * @param {string} [placement] - 设置面板呼出位置，默认：'bottom-end'
	 * @param {boolean} [defaultCheck] - 是否设置默认勾选（默认false，用于默认展示所有列），如果设为true（用于默认展示部分列）,则在v-model绑定的columns项里设置showSettingCheck:true
	 * @param {string} [storage] - 指定使用浏览器缓存类型，可选值`'localStorage'`、`'sessionStorage'`，默认：`localStorage`
	 * @param {boolean} [transfer] - 是否将面板放置于 body 内，在 Tabs、带有 overflow:hidden 的 上级容器内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果，默认：`true`
	 * @example 调用示例 <table-setting v-model="columns" sKey="tableSettingEx_202007030903"/>
	 */
	import Popper from 'popper.js'
	import _ from 'lodash'
	import TransferDom from '../../directives/transfer-dom'
	import ClickOutside from '../../directives/clickoutside'
	import Locale from '../../mixins/locale'
	import { setTimeout } from '../../utils/timer'
	import { oneOf } from '../../utils/functionGroup'
	import SwalConfirm from '../../utils/swalConfirm'

	export default {
		name: 'tableSetting',
		mixins: [Locale],
		directives: {
			TransferDom,
			ClickOutside
		},
		model: {
			prop: 'value',
			event: 'subVal'
		},
		props: {
			value: {
				type: Array,
				default() {
					return []
				}
			},
			sKey: {
				type: String,
				required: true
			},
			width: {
				type: String,
				default: '150px'
			},
			bg: {
				type: String,
				default() {
					return this.tableSettingBg
				}
			},
			placement: {
				type: String,
				default: 'bottom-end'
			},
			defaultCheck: {
				type: Boolean,
				default: false
			},
			storage: {
				validator: (val) => oneOf(val, ['localStorage', 'sessionStorage']),
				default: 'localStorage'
			},
			transfer: {
				type: Boolean,
				default() {
					return this.tableSettingTransfer
				}
			}
		},
		data() {
			return {
				indeterminate: true,
				checkAll: false,
				show: true,
				groupT: [],
				locale: null,
				popper: null
			}
		},
		computed: {
			groupX() {
				let unknown = this.t('r.unknown')
				if (this.value.length > this.groupT.length) {
					this.groupT = _.cloneDeep(this.value)
				}
				return this.groupT.map((e) => {
					let temp = { label: e?.title || unknown }
					if (e?.disableShowSetting) {
						temp.disabled = true
					}
					return temp
				})
			},
			disabledGroup() {
				return this.groupX.filter((e) => e?.disabled)
			},
			checkAllGroup: {
				get() {
					let unknown = this.t('r.unknown')
					return this.value.map((e) => e?.title || unknown)
				},
				set(val) {
					let subV = this.groupT.filter((e) => {
						for (let item of val) {
							if (item === e?.title) {
								return true
							}
						}
						return false
					})
					this.$emit('subVal', subV)
				}
			}
		},
		created() {
			if (this.$root?.$i18n?.locale) {
				this.locale = this.$root.$i18n.locale
			} else if (this.$root?.$lang) {
				this.locale = this.$root.$lang
			}
		},
		mounted() {
			let unknown = this.t('r.unknown')
			const localStr = this.getStorage()
			if (localStr) {
				this.checkAllGroup = JSON.parse(decodeURI(localStr))
			} else {
				if (this.defaultCheck) {
					this.checkAllGroup = this.value.filter((e) => e?.showSettingCheck).map((e) => e?.title || unknown)
				}
			}
			this.$nextTick(function () {
				this.popper = new Popper(this.$refs.buttonRef, this.$refs.popperRef, { placement: this.placement })
			})

			setTimeout(() => {
				this.popper.update()
				this.show = false
			}, 0)
		},
		beforeDestroy() {
			if (this.popper) {
				this.popper.destroy()
			}
		},
		watch: {
			checkAllGroup: {
				handler(after) {
					this.checkAllGroupChange(after)
				},
				immediate: true
			}
		},
		methods: {
			close() {
				if (this.show) {
					if (this.getChange()) {
						SwalConfirm(this.t('r.notSave'),'','warning',this.save)
					}
					this.show = false
				}
			},
			labelClick() {
				if (!this.show) {
					this.show = true
					this.$nextTick(function () {
						this.popper.update()
					})
				} else {
					this.close()
				}
			},
			save() {
				if (this.locale) {
					window[this.storage].setItem(this.sKey + '_' + this.locale, encodeURI(JSON.stringify(this.checkAllGroup)))
				} else {
					window[this.storage].setItem(this.sKey, encodeURI(JSON.stringify(this.checkAllGroup)))
				}
				this.close()
			},
			clickOutsideHandle(event) {
				if (this.show) {
					if (this.transfer) {
						const $el = this.$refs.popperRef
						if ($el === event.target || $el.contains(event.target)) {
							return
						}
					}

					event.preventDefault()
					this.close()
				}
			},
			handleCheckAll() {
				if (this.indeterminate) {
					this.checkAll = false
				} else {
					this.checkAll = !this.checkAll
				}
				this.indeterminate = false

				if (this.checkAll) {
					this.checkAllGroup = this.groupX.map((e) => e?.label)
				} else {
					this.checkAllGroup = this.disabledGroup.map((e) => e?.label)
				}
			},
			checkAllGroupChange(data) {
				if (data.length === this.groupX.length) {
					this.indeterminate = false
					this.checkAll = true
				} else if (data.length > this.disabledGroup.length) {
					this.indeterminate = true
					this.checkAll = false
				} else {
					this.indeterminate = false
					this.checkAll = false
				}
			},
			getStorage() {
				let localStr
				if (this.locale) {
					localStr = window[this.storage].getItem(this.sKey + '_' + this.locale)
				} else {
					localStr = window[this.storage].getItem(this.sKey)
				}
				return localStr
			},
			getChange() {
				let t = this.getStorage()
				if (t) {
					t = JSON.parse(decodeURI(t))
					if (t?.length !== this.checkAllGroup?.length) {
						return true
					} else {
						for (let e of t) {
							if (this.checkAllGroup.indexOf(e) === -1) {
								return true
							}
						}
					}
				}else {
					return true
				}
				return false
			}
		}
	}
</script>
