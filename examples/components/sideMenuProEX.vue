<template>
	<div class="sideMenuEX">
		<toHome />

		<sideMenuPro :data="data" light/>
	</div>
</template>

<script>
	export default {
		name: 'sideMenuProEX',
		data() {
			return {
				data: []
			}
		},
		created() {
			this.$fetch.get('testData/sideMenuPro.json').then((r) => {
				this.data = r
			})
		}
	}
</script>
<style lang="less" scoped>
	.sideMenuEX {
		display: flex;
		padding: 50px 0 0 0;
		height: 100vh;
	}
</style>
