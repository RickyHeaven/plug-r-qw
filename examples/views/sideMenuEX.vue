<template>
	<div class="sideMenuEX">
		<showReadMe />

		<sideMenu :data="data" />
	</div>
</template>

<script>
	export default {
		name: 'sideMenuEX',
		data() {
			return {
				data: []
			}
		},
		created() {
			this.$fetch.get('testData/sideMenu.json').then((r) => {
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
