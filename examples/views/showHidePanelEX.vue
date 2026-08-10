<template>
	<div class="examplePageL">
		<showReadMe />
		<header class="headerKH"></header>
		<showHidePanel style="background-color: #fff">
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
<style lang="less" scoped>
	@import '../global/variables';

	.headerKH {
		height: 40px;
		background-color: @vueColor;
	}
</style>
