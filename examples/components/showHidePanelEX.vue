<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<header class="headerKH"></header>
		<showHidePanel>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
		</showHidePanel>
	</div>
</template>

<script>
	export default {
		name: 'showHidePanelEX'
	}
</script>
<style lang="scss" scoped>
	@import '../global/variables';

	.headerKH {
		height: 40px;
		background-color: $vueColor;
	}
</style>
