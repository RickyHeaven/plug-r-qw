<!--created 2023.03.14-->
<!--author ricky email:zhangqingcq@foxmail.com-->

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
			document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix').addEventListener('mouseover', () => {
				this.mouseOver = true
			})
			document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix').addEventListener('mouseout', () => {
				this.mouseOver = false
			})
			document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix').addEventListener('click', (e) => {
				if (!this.disabled && (this.valueA || this.valueB)) {
					e?.stopPropagation?.()
					this.clear()
				}
			})
		},
		methods: {
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
