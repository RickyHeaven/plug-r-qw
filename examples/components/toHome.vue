<template>
	<div @click="goBack" :style="{ color: color }" class="backLink">
		<Icon type="md-rewind" />
		返回
	</div>
</template>

<script>
	export default {
		name: 'toHome',
		props: {
			color: {
				type: String,
				default() {
					return '#46be87'
				}
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="less" scoped>
	.backLink {
		position: fixed;
		z-index: 10;
		top: 20px;
		right: 40px;
		cursor: pointer;

		&:hover {
			opacity: 0.85;
		}
	}
</style>
