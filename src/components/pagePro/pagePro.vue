<!--created 2024.04.02
author ricky email:zhangqingcq@foxmail.com-->
<script>
	import Locale from '../../mixins/locale'
	import { oneOf, getStringWidth } from '../../utils/functionGroup'

	export default {
		name: 'pagePro',
		model: {
			prop: 'modelValue',
			event: 'on-change'
		},
		mixins: [Locale],
		props: {
			modelValue: {
				/*当前页数*/
				type: Number,
				default: ''
			},
			total: {
				/*总条数*/
				type: Number,
				default: 0
			},
			pageSize: {
				/*每页条数*/
				type: Number,
				default: 10
			},
			size: {
				/*页签尺寸*/
				type: String,
				validator: (val) => oneOf(String(val), ['small', 'default']),
				default: 'default'
			},
			pageSizeOpts: {
				/*每页可选条数配置*/
				type: Array,
				default() {
					return this.pageSizes || [10, 20, 30, 40]
				}
			},
			showTotal: {
				/*是否展示total*/
				type: Boolean,
				default() {
					return this.pageShowTotal
				}
			},
			showSizer: {
				/*是否展示sizer*/
				type: Boolean,
				default() {
					return this.pageShowSizer
				}
			},
			transfer: {
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
				currentPadding: 16
			}
		},
		computed: {
			current: {
				get() {
					return this.modelValue
				},
				set(v) {
					this.$emit('on-change', v)
				}
			},
			pageSizeT: {
				get() {
					return this.pageSize
				},
				set(v) {
					this.$emit('on-page-size-change', v)
					if (this.current !== 1) {
						this.$nextTick(function () {
							this.current = 1
						})
					}
				}
			},
			currentSize() {
				const t = getStringWidth(String(this.total || 0), this.fontSizeBase || 14) + this.currentPadding + 2
				return t < 32 ? 32 : t
			}
		},
		watch: {
			currentSize: {
				handler(val) {
					this.$nextTick(function () {
						this.changeCurrentSize(val)
					})
				},
				immediate: true
			}
		},
		mounted() {
			this.currentPadding = this.getPadding()
		},
		methods: {
			getPadding() {
				const $inputEl = this.$refs.pageRef?.$el?.querySelector?.('input')
				if (!$inputEl) {
					return 16
				}
				const inputStyle = window.getComputedStyle($inputEl)
				const paddingL = inputStyle?.paddingLeft
				const paddingR = inputStyle?.paddingRight
				if (!paddingL || !paddingR) {
					return 16
				}
				return Number(paddingL.replace('px', '')) + Number(paddingR.replace('px', ''))
			},
			changeCurrentSize(val) {
				const $inputEl = this.$refs.pageRef?.$el?.querySelector?.('input')
				if ($inputEl?.style) {
					$inputEl.style.width = `${val}px`
				}
			}
		}
	}
</script>

<template>
	<div class="pagePro" :class="{ pageProDefault: size === 'default' }">
		<span v-if="showTotal" class="pageTotal">{{ t('r.total') + ' ' }}{{ total }}{{ ' ' + t('r.items') }}</span>
		<Page
			ref="pageRef"
			:current.sync="current"
			:page-size="pageSizeT"
			:total="total"
			:size="size"
			:page-size-opts="pageSizeOpts"
			:disabled="disabled"
			simple
		/>
		<div class="pageProSize" v-if="showSizer">
			<Select v-model="pageSizeT" :size="size" :transfer="transfer" :disabled="disabled">
				<Option v-for="item in pageSizeOpts" :key="item" :value="item" style="text-align: center"
					>{{ item }} {{ t('r.page') }}</Option
				>
			</Select>
		</div>
	</div>
</template>
