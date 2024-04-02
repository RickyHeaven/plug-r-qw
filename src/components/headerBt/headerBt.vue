<!--created 2020.08.10-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div
		:class="{
			headerBtCTM: true,
			withIconCTM: icon || withIcon,
			disabled: disabled
		}"
		:style="{ color: color, borderLeftColor: borderColor }"
		@click="click"
	>
		<Icon v-if="icon" :size="iconSize" :type="icon" />
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'headerBt',
		props: {
			icon: {
				type: String
			},
			withIcon: {
				type: Boolean,
				default: false
			},
			iconSize: {
				type: [Number, String],
				default: 18
			},
			color: {
				type: String,
				default: 'inherit'
			},
			borderColor: {
				type: String,
				default: '#fff'
			},
			disabled: {
				type: Boolean,
				default: false
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
