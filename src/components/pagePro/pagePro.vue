<!--created 2024.04.02
author ricky email:zhangqingcq@foxmail.com-->
<script>
	import Locale from '../../mixins/locale'
	import { oneOf } from '../../methods/functionGroup'

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
			transfer: {
				type: Boolean,
				default: true
			},
			disabled: {
				type: Boolean,
				default: false
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
			}
		}
	}
</script>

<template>
	<div class="pagePro" :class="{ pageProDefault: size === 'default' }">
		<Page
			:current.sync="current"
			:page-size="pageSizeT"
			:total="total"
			:size="size"
			:page-size-opts="pageSizeOpts"
			:disabled="disabled"
			simple
		/>
		<div class="pageProSize">
			<Select v-model="pageSizeT" :size="size" :transfer="transfer" :disabled="disabled">
				<Option v-for="item in pageSizeOpts" :key="item" :value="item" style="text-align: center"
					>{{ item }} {{ t('r.page') }}</Option
				>
			</Select>
		</div>
	</div>
</template>
