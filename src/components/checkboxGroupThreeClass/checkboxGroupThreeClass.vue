<!--created 2020.08.04-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div class="boxLPB">
		<div class="headerF">
			<div class="firstT borderBoxKa">{{ firstTitle || t('r.level.1') }}</div>
			<div class="secondT borderBoxKa">{{ secondTitle || t('r.level.2') }}</div>
			<div class="thirdT borderBoxKa">{{ thirdTitle || t('r.level.3') }}</div>
		</div>
		<div class="bodyF" v-for="(item, index) in dataT" :key="'checkboxJ' + index">
			<div class="firstCol borderBoxKa">
				<Checkbox
					v-model="item.checked"
					:indeterminate="item.indeterminate"
					@on-change="checkChangeFirst(item, $event)"
					:disabled="disabled"
					>{{ item[label] }}</Checkbox
				>
			</div>
			<div class="rightBoxAL">
				<div class="rightBoxInner" v-for="(secItem, indexSec) in item.children" :key="'secItem' + indexSec">
					<div class="secondCol borderBoxKa">
						<Checkbox
							v-model="secItem.checked"
							:indeterminate="secItem.indeterminate"
							@on-change="checkChangeSecond(secItem, $event)"
							:disabled="disabled"
							>{{ secItem[label] }}</Checkbox
						>
					</div>
					<div class="thirdCol borderBoxKa">
						<div class="thirdItem" v-for="(thirdItem, indexThird) in secItem.children" :key="'thirdItem' + indexThird">
							<Checkbox v-model="thirdItem.checked" @on-change="updateDataT" :disabled="disabled">{{
								thirdItem[label]
							}}</Checkbox>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import _ from 'lodash'
	import { myTypeof } from '../../utils/functionGroup'
	import Locale from '../../mixins/locale'

	export default {
		name: 'checkboxGroupThreeClass',
		mixins: [Locale],
		model: {
			prop: 'value',
			event: 'subVal'
		},
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			},
			value: {
				type: Array,
				default() {
					return []
				}
			},
			firstTitle: {
				type: String
			},
			secondTitle: {
				type: String
			},
			thirdTitle: {
				type: String
			},
			label: {
				/*节点的标签*/
				type: String,
				default: 'name'
			},
			collectVal: {
				/*v-model收集节点的哪些字段*/
				type: [String, Array],
				default: 'id'
			},
			leaf: {
				/*叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点*/
				type: Boolean,
				default: true
			},
			disabled: {
				/*禁用整颗树的checkbox选择功能*/
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				leafChecked: []
			}
		},
		computed: {
			dataT() {
				let temp = _.cloneDeep(this.data)
				let valTemp = _.cloneDeep(this.leafChecked)
				for (let item of temp) {
					/*遍历data添加勾选信息(1级)*/
					let checkCount = 0
					let indeterminateCount = 0
					if (item?.children && !_.isEmpty(item.children)) {
						for (let secItem of item.children) {
							/*更深一层遍历children（2级）*/
							let checkCountB = 0
							if (secItem?.children && !_.isEmpty(secItem.children)) {
								for (let thirdItem of secItem.children) {
									/*更深一层遍历children（3级）*/
									for (let valIndex = 0, len = valTemp.length; valIndex < len; valIndex++) {
										/*遍历继承的value*/
										if (myTypeof(valTemp[valIndex]) === 'Object') {
											/*收集多个字段的情况*/
											let equalI = true
											for (let collectKey of this.collectVal) {
												if (valTemp[valIndex][collectKey] !== thirdItem[collectKey]) {
													/*遍历中当前节点和value的当前遍历元素不等（收集字段对应的值有不等的），判断为当前节点没有被选中，不在判断其他收集字段，跳出循环*/
													equalI = false
													break
												}
											}
											/*循环结束，如果equalI的值没被改为false,则表示当前节点被选中*/
											if (equalI) {
												/*如果当前节点被选中，当前父级中选中的子节点数加一，不在遍历value其他元素，跳出循环*/
												thirdItem.checked = true
												checkCountB++
												valTemp.splice(valIndex, 1)
												break
											}
										} else if (valTemp[valIndex] === thirdItem[this.collectVal]) {
											/*收集单个字段且当前节点的对应字段的值和value中当前遍历元素相等,判断为选中，不在遍历value其他元素，跳出循环*/
											thirdItem.checked = true
											checkCountB++
											valTemp.splice(valIndex, 1)
											break
										}
									}
									/*避免checked为Undefined*/
									!thirdItem.checked && (thirdItem.checked = false)
								}
							}
							if (checkCountB === 0) {
								secItem.checked = false
								secItem.indeterminate = false
							} else if (secItem.children && checkCountB === secItem.children.length) {
								secItem.checked = true
								secItem.indeterminate = false
								checkCount++
							} else {
								secItem.checked = false
								secItem.indeterminate = true
								indeterminateCount++
							}
						}
					}
					if (checkCount === 0 && indeterminateCount === 0) {
						item.checked = false
						item.indeterminate = false
					} else if (item?.children && checkCount === item.children.length) {
						item.checked = true
						item.indeterminate = false
					} else {
						item.checked = false
						item.indeterminate = true
					}
				}
				return temp
			}
		},
		watch: {
			value: {
				handler(after, before) {
					if (_.isEqual(this.leafChecked, after) || _.isEqual(after, before)) {
						return
					}
					this.leafChecked = after
				},
				immediate: true,
				deep: true
			}
		},
		methods: {
			checkChangeFirst(root, isCheck) {
				if (root?.children) {
					for (let item of root.children) {
						item.checked = isCheck
						if (item?.children) {
							for (let itemB of item.children) {
								itemB.checked = isCheck
							}
						}
					}
				}
				this.updateDataT()
			},
			checkChangeSecond(root, isCheck) {
				if (root.children) {
					for (let item of root.children) {
						item.checked = isCheck
					}
				}
				this.updateDataT()
			},
			updateDataT() {
				this.getLeafChecked(this.dataT, true)
			},
			getLeafChecked(val, isLeaf) {
				let temp = []
				for (let item of val) {
					if (!isLeaf && !this.leaf && item?.checked && item.indeterminate === false) {
						/*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
						if (myTypeof(this.collectVal) === 'Array') {
							let ttO = {}
							for (let keyI of this.collectVal) {
								ttO[keyI] = item[keyI]
							}
							temp.push(ttO)
						} else if (myTypeof(this.collectVal) === 'String') {
							temp.push(item[this.collectVal])
						}
					}
					if (item?.children) {
						for (let secItem of item.children) {
							if (!isLeaf && !this.leaf && secItem?.checked && secItem.indeterminate === false) {
								/*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
								if (myTypeof(this.collectVal) === 'Array') {
									let ttO = {}
									for (let keyI of this.collectVal) {
										ttO[keyI] = secItem[keyI]
									}
									temp.push(ttO)
								} else if (myTypeof(this.collectVal) === 'String') {
									temp.push(secItem[this.collectVal])
								}
							}
							if (secItem.children) {
								for (let thirdItem of secItem.children) {
									if (thirdItem.checked) {
										if (myTypeof(this.collectVal) === 'Array') {
											let ttO = {}
											for (let keyI of this.collectVal) {
												ttO[keyI] = thirdItem[keyI]
											}
											temp.push(ttO)
										} else if (myTypeof(this.collectVal) === 'String') {
											temp.push(thirdItem[this.collectVal])
										}
									}
								}
							}
						}
					}
				}
				if (isLeaf) {
					this.leafChecked = temp
					if (this.leaf) {
						this.$emit('subVal', temp)
						this.$emit('on-change', _.cloneDeep(temp))
					} else {
						this.$nextTick(function () {
							this.getLeafChecked(this.dataT)
						})
					}
				} else {
					this.$emit('subVal', temp)
					this.$emit('on-change', _.cloneDeep(temp))
				}
			}
		}
	}
</script>
