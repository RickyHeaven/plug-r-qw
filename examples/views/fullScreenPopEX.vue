<template>
	<div>
		<showReadMe />
		<Button @click="handleClick">全屏弹框</Button>
		<fullScreenPop title="全屏弹框" ref="fullPop">
			<div style="padding: 12px">
				<div>我是内容巴拉巴拉巴拉~</div>
			</div>
		</fullScreenPop>
	</div>
</template>

<script>
	export default {
		name: 'fullScreenPopEX',
		methods: {
			handleClick() {
				this.$refs.fullPop.open()
			}
		}
	}
</script>