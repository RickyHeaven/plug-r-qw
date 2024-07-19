<!--created 2019.08.20-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<ar-cascader
		v-bind="$attrs"
		v-on="$listeners"
		class="alCascaderMC"
		v-model="valueT"
		:level="level"
		:disabled="disabled"
		:placeholder="placeholder || t('r.pSelect')"
	/>
</template>

<script>
	import _ from 'lodash'
	import { oneOf } from '../../utils/functionGroup'
	import Locale from '../../mixins/locale'

	export default {
		name: 'alCascaderMC',
		mixins: [Locale],
		model: {
			prop: 'value',
			event: 'subVal'
		},
		props: {
			value: {
				/*组件绑定的值（v-model）*/
				type: [String, Number, Array],
				default() {
					return null
				}
			},
			level: {
				/*精确至几级行政区域（0：省级，1：市级，2：县级）*/
				type: [Number, String],
				validator: (val) => oneOf(String(val), ['0', '1', '2']),
				default() {
					return 2
				}
			},
			disabled: {
				/*禁用组件*/
				type: Boolean,
				default() {
					return false
				}
			},
			separator: {
				/*地址名称分隔符*/
				type: String,
				default() {
					return '/'
				}
			},
			placeholder: {
				/*占位符*/
				type: String
			}
		},
		computed: {
			valueT: {
				get() {
					if (this.value && (typeof this.value === 'string' || typeof this.value === 'number')) {
						let temp = String(this.value).trim()

						let regP = /^\d+$/
						if (regP.test(temp)) {
							let lv1 = temp.substring(0, 2) + '0000000000'
							let lv2 = temp.substring(0, 4)+'00000000'
							return [lv1, lv2, temp]
						}

						if (temp.indexOf(this.separator) !== -1) {
							/*以中文名称和分隔符拼接的String地址*/
							return temp.split(this.separator)
						}

						return [temp]
					}
					else if (Array.isArray(this.value)) {
						return _.cloneDeep(this.value)
					}
					else {
						return []
					}
				},
				set(val) {
					if (_.isEmpty(val)) {
						this.$emit('subVal', null)
						this.$emit('on-name-change', null)
					}
					else {
						let last = _.last(val)
						let code = null
						let name = null
						if (last) {
							code = last.code
						}
						if (code?.length < 12) {
							let t = [...code]
							while (t.length < 12) {
								t.push(0)
							}
							code = t.join('')
						}
						if (Array.isArray(val)) {
							name = val
								.map((item) => {
									return item?.name
								})
								.join(this.separator)
						}
						if (code) {
							if (code === this.value) {
								return
							}
							this.$emit('subVal', code)
						}
						if (name) {
							this.$emit('on-name-change', name)
						}
					}
				}
			}
		}
	}
</script>
