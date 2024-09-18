<template>
	<div class="sideMenuEX">
		<toHome />
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
		padding: 50px 0 0 0;
		height: 100vh;
	}
</style>
