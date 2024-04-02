<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<header class="headerKH">
			<span style="margin-right: 14px; color: #fff">面 板：</span>
			<i-switch v-model="open">
				<template #open><span>开</span></template>
				<template #close><span>关</span></template>
			</i-switch>
		</header>
		<showHidePanelB v-model="open">
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
		</showHidePanelB>
	</div>
</template>

<script>
	export default {
		name: 'showHidePanelBEX',
		data() {
			return {
				open: true
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../global/variables';

	.headerKH {
		height: 40px;
		background-color: $vueColor;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 25px;
	}
</style>
