<!--created 2020.04.14-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div class="tabTopBtnsT" @click="click" v-has="has" :class="{ disabled: disabled }" :style="{ 'font-size': txtSize }">
		<Icon :type="icon" :size="size" />
		{{ name || t('r.button') }}
	</div>
</template>

<script>
	import Locale from '../../mixins/locale'

	export default {
		name: 'iconTxtBtn',
		mixins: [Locale],
		props: {
			name: {
				type: String
			},
			icon: {
				type: String,
				default: 'md-download'
			},
			size: {
				type: Number,
				default() {
					return this.iconTxtBtnIconSize
				}
			},
			disabled: {
				type: Boolean,
				default: false
			},
			has: {
				type: String
			}
		},
		computed: {
			txtSize() {
				return Math.floor((this.size / 17) * 12) + 'px'
			}
		},
		methods: {
			click(e) {
				if (this.disabled) {
					return
				}
				this.$emit('click', e)
			}
		}
	}
</script>
