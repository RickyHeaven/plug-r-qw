<!--created 2020.09.09-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div class="tableSearchV" :style="{ position: fixed ? 'fixed' : 'absolute', right: right, top: top }">
		<slot>
			<Input
				v-model="valueX"
				:style="{ width: width }"
				search
				@on-search="onSearch"
				class="searchInputC"
				:placeholder="placeholder || t('r.pInput')"
			/>
		</slot>
		<span class="sbt" @click="openX = !openX" v-show="showBtn" :style="{ color: btnColor }"
			><icon :type="iconL" :color="btnColor" />{{ t('r.adSearch') }}</span
		>
	</div>
</template>

<script>
	/**
	 * 高级查询插件
	 * @desc 联合showHidePanelB、searchForm等插件对table进行查询
	 * @author ricky email:zhangqingcq@foxmail.com
	 * @date 2020.03.19
	 * @param {string} value - 搜索框的值（v-model）必填
	 * @param {boolean} open - 高级搜索是否开启 必填
	 * @param {string} [placeholder] - 搜索框的placeholder
	 * @param {string} [width] - 整个插件宽度
	 * @param {string} [right] - 整个插件定位-右（最近relative）
	 * @param {string} [top] - 整个插件定位-上（最近relative）
	 * @example 调用示例 <table-search v-model="areaName" :open="openSearch" placeholder="片区名称" @on-search="search" @on-toggle="openSearch=!openSearch"/>
	 */
	import Locale from '../../mixins/locale'
	import { setTimeout } from '../../utils/timer'

	export default {
		name: 'tableSearch',
		mixins: [Locale],
		model: {
			prop: 'value',
			event: 'subVal'
		},
		props: {
			value: {
				default: null
			},
			open: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String
			},
			showBtn: {
				/*是否显示高级查询按钮*/
				type: Boolean,
				default: true
			},
			fixed: {
				/*是否为固定定位，默认绝对定位*/
				type: Boolean,
				default: false
			},
			width: {
				/*输入框宽度*/
				default: '210px'
			},
			right: {
				default: '0'
			},
			top: {
				default: '0'
			},
			btnColor: {
				type: String,
				default: 'inherit'
			}
		},
		data() {
			return {
				debounceCount: false
			}
		},
		computed: {
			valueX: {
				get() {
					return this.value
				},
				set(val) {
					this.$emit('subVal', val)
				}
			},
			iconL() {
				return this.openX ? 'ios-arrow-up' : 'ios-arrow-down'
			},
			openX: {
				get() {
					return this.open
				},
				set(val) {
					this.$emit('on-toggle', val)
				}
			}
		},
		methods: {
			onSearch() {
				/*私有*/
				if (!this.debounceCount) {
					this.debounceCount = true
					this.$emit('on-search', this.valueX)
					setTimeout(() => {
						this.debounceCount = false
					}, 2000)
				}
			}
		}
	}
</script>
