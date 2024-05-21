<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<header class="headerKH">
			<tableSearch
				v-model="val"
				:open="open"
				placeholder="名称"
				@on-search="search"
				@on-toggle="open = !open"
				top="5px"
				btn-color="#fff"
			/>
			<!--<tableSearch top="5px" :show-btn="false">-->
			<!--<DatePicker type="date" placeholder="Select date" style="width: 210px"></DatePicker>-->
			<!--</tableSearch>-->
		</header>
		<showHidePanelB v-model="open">
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
			<p>我是内容~~~~~</p>
		</showHidePanelB>
		<p>搜索内容：{{ val }}</p>
	</div>
</template>

<script>
	export default {
		name: 'tableSearchEX',
		data() {
			return {
				open: true,
				val: null
			}
		},
		methods: {
			search(val) {
				this.$swal('搜索内容', val, 'info')
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../global/variables';

	.headerKH {
		height: 40px;
		background-color: @vueColor;
		position: relative;
	}
</style>
