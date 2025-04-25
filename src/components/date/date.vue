<script>
	import Locale from '../../mixins/locale'
	import { oneOf, myTypeof } from '../../utils/functionGroup'

	const typeList = ['date', 'daterange', 'datetime', 'datetimerange', 'year', 'month']

	export default {
		name: 'date',
		mixins: [Locale],
		model: {
			prop: 'value',
			event: 'on-change'
		},
		props: {
			value: {
				type: [Date, String, Array]
			},
			type: {
				type: String,
				validator: (val) => oneOf(String(val), typeList),
				default: 'date'
			},
			options: {
				type: Object,
				default() {
					return {}
				}
			},
			placement: {
				type: String,
				default: 'bottom-end'
			},
			placeholder: {
				type: String
			},
			clearable: {
				type: Boolean,
				default: true
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				transferId: 'date-c-r-' + Math.floor(Math.random() * 10000000 + 10000000),
				optionsT: {}
			}
		},
		computed: {
			valueT: {
				get() {
					return this.value
				},
				set(v) {
					this.$emit('on-change', v)
				}
			},
			disabledDate() {
				return this.options?.disabledDate
			},
			otherOptions() {
				if (myTypeof(this.options) === 'Object') {
					const { disabledDate, ...others } = this.options
					return others
				}
				return {}
			}
		},
		watch: {
			options: {
				handler() {
					this.optionsT = this.options
				},
				immediate: true
			}
		},
		methods: {
			getOptions(d) {
				const t = d.target
				if (t.classList?.contains?.('ivu-date-picker-cells-cell') || t.tagName === 'EM') {
					this.setTimeout(() => {
						const r = this.$refs.dateC?.$refs.pickerPanel?.rangeState
						if (r) {
							const from = r.from
							const selecting = r.selecting
							this.optionsT = {
								...this.otherOptions,
								disabledDate: (d) => {
									if (typeof this.disabledDate === 'function') {
										return this.disabledDate(d, from, selecting)
									}
									return false
								}
							}
						}
					}, 1)
				}
			}
		},
		mounted() {
			const el = document.getElementsByClassName(this.transferId)[0]
			el?.addEventListener?.('click', this.getOptions, true)
		}
	}
</script>

<template>
	<DatePicker
		v-bind="$attrs"
		v-on="$listeners"
		ref="dateC"
		v-model="valueT"
		:type="type"
		:options="optionsT"
		:placement="placement"
		:placeholder="placeholder"
		:clearable="clearable"
		:disabled="disabled"
		:editable="false"
		:transferClassName="transferId"
		transfer
		@on-change="(d) => {}"
	/>
</template>
