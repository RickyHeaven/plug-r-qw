<template>
	<div class="sideMenuEX">
		<showReadMe />

		<sideMenuPro :data="data" light />
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
		height: calc(100vh - 60px);
	}
</style>
