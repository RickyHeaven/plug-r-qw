<!--created 2023.03.14-->
<!--author Ricky email:zhangqingcq@foxmail.com-->

<template>
	<div class="monthRangeBoxR">
		<DatePicker
			:open="openB"
			:value="valueB"
			transfer
			type="month"
			:placement="placement"
			:options="options2"
			@on-change="changeB"
			@on-clickoutside="close"
		>
			<div class="bRoot"></div>
		</DatePicker>
		<DatePicker
			:open="openA"
			:value="valueA"
			transfer
			type="month"
			:placement="placement"
			:options="options1"
			@on-change="changeA"
			@on-clickoutside="close"
		>
			<div @click="focus">
				<Input
					class="aRoot"
					v-model="valueT"
					readonly
					:placeholder="placeholder || t('r.selectDate')"
					:disabled="disabled"
				>
					<template #suffix>
						<Icon :type="mouseOver && (valueA || valueB) && !disabled ? 'ios-close-circle' : 'ios-calendar-outline'" />
					</template>
				</Input>
			</div>
		</DatePicker>
	</div>
</template>

<script>
	import Locale from '../../mixins/locale'

	export default {
		name: 'monthRange',
		mixins: [Locale],
		model: {
			prop: 'value',
			event: 'on-change'
		},
		props: {
			value: {
				type: Array,
				default() {
					return [null, null]
				}
			},
			placement: {
				type: String,
				default: 'bottom-start'
			},
			placeholder: {
				type: String
			},
			options1: {
				type: Object
			},
			options2: {
				type: Object
			},
			disabled: {
				/*整张表禁用，仅展示*/
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				openA: false,
				openB: false,
				mouseOver: false
			}
		},
		computed: {
			valueA: {
				get() {
					return this.value?.[0] || null
				},
				set(v) {
					this.$emit('on-change', [v, this.valueB])
				}
			},
			valueB: {
				get() {
					return this.value?.[1] || null
				},
				set(v) {
					this.$emit('on-change', [this.valueA, v])
				}
			},
			valueT() {
				return (this.valueA || '') + (((this.valueA || this.valueB) && ' - ') || '') + (this.valueB || '')
			}
		},
		mounted() {
			this.bindEvents()
		},
		beforeDestroy() {
			this.unbindEvents()
		},
		methods: {
			getSuffixEl() {
				return document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix')
			},
			bindEvents() {
				const suffixEl = this.getSuffixEl()
				if (!suffixEl) return

				this._mouseoverHandler = () => {
					this.mouseOver = true
				}
				this._mouseoutHandler = () => {
					this.mouseOver = false
				}
				this._clickHandler = (e) => {
					if (!this.disabled && (this.valueA || this.valueB)) {
						e?.stopPropagation?.()
						this.clear()
					}
				}

				suffixEl.addEventListener('mouseover', this._mouseoverHandler)
				suffixEl.addEventListener('mouseout', this._mouseoutHandler)
				suffixEl.addEventListener('click', this._clickHandler)
			},
			unbindEvents() {
				const suffixEl = this.getSuffixEl()
				if (!suffixEl) return

				suffixEl.removeEventListener('mouseover', this._mouseoverHandler)
				suffixEl.removeEventListener('mouseout', this._mouseoutHandler)
				suffixEl.removeEventListener('click', this._clickHandler)
			},
			focus() {
				if (!this.disabled) {
					this.openA = true
				}
			},
			changeA(d) {
				this.valueA = d
				this.openA = false
				this.openB = true
			},
			changeB(d) {
				this.valueB = d
				this.openB = false
			},
			clear() {
				this.$emit('on-change', [null, null])
			},
			close() {
				this.openA = false
				this.openB = false
				if (this.valueA && this.valueB === null) {
					this.valueA = null
				}
			}
		}
	}
</script>