<template>
	<p class="info"
		>请注意：本示例需要开启该项目内的nodeJS服务器方可正常演示，开启方法为新开一个命令窗口，在项目根目录(<span>
			your path\plug-r-qw> </span
		>)运行�?span> npm run node-serve </span>
	</p>
</template>

<script>
	export default {
		name: 'NodeServeInfo'
	}
</script>

<style lang="less" scoped>
	@import '../global/variables';

	.info {
		margin-top: 10px;
		color: @info-color;

		span {
			color: @code-color;
		}
	}
</style>