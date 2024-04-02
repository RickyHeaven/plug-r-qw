<!--created 2019.08.20-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<ar-cascader
		v-bind="$attrs"
		v-on="$listeners"
		class="alCascaderMC"
		ref="alCascaderRefLK"
		v-model="valueT"
		:level="level"
		:disabled="disabled"
		:placeholder="placeholder || t('r.pSelect')"
		:transfer="transfer"
		:searchable="filterable"
	/>
</template>

<script>
	import _ from 'lodash'
	import { oneOf } from '../../methods/functionGroup'
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
			transfer: {
				/*弹出框元素直接放置于body下*/
				type: Boolean,
				default() {
					return true
				}
			},
			filterable: {
				/*可搜索*/
				type: Boolean,
				default() {
					return true
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
					if (this.value && (_.isNumber(this.value) || _.isString(this.value))) {
						let temp = String(this.value).trim()

						let regP = /^\d*$/
						if (regP.test(temp)) {
							let lv1 = temp.substr(0, 2) + '0000'
							let lv2
							let lv3 = this.getLastCode(temp)
							if (lv3.length < 7) {
								lv2 = temp.substr(0, 4) + '00'
							} else {
								lv2 = temp.substr(0, 6)
							}
							if (/^8\d+$/.test(temp)) {
								return [lv1, lv3]
							}
							return [lv1, lv2, lv3]
						}

						if (temp.indexOf(this.separator) !== -1) {
							/*以中文名称和分隔符拼接的String地址*/
							return temp.split(this.separator)
						}

						return [temp]
					} else if (Array.isArray(this.value)) {
						return _.cloneDeep(this.value)
					} else {
						let refC = this.$refs.alCascaderRefLK
						if (refC) {
							refC.select = []
						}
						return []
					}
				},
				set(val) {
					if (_.isEmpty(val)) {
						this.$emit('subVal', null)
						this.$emit('on-name-change', null)
					} else {
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
									return item.name
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
		},
		methods: {
			getLastCode(d) {
				let t = [...d]
				while (t[t.length - 1] === '0') {
					t.pop()
				}
				return t.join('')
			}
		}
	}
</script>
