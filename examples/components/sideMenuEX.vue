<template>
	<div class="sideMenuEX">
		<toHome />

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
<style lang="scss" scoped>
	.sideMenuEX {
		display: flex;
		padding: 50px 0 0 0;
		height: 100vh;
	}
</style>
