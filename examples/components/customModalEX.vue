<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<Button @click="open('modalRef')">打开弹框</Button>
		<Button @click="open('modalRef2')">只有确定按钮</Button>
		<Button @click="open('modalRef3')">没有底部</Button>
		<custom-modal ref="modalRef">
			<p>23523463</p>
			<p class="colorP">ashd</p>
		</custom-modal>
		<custom-modal ref="modalRef2" title="查看" hide-cancel-bt>
			我是内容HHH
			<p class="colorP">lu la la</p>
		</custom-modal>
		<custom-modal ref="modalRef3" footer-hide>
			法律快速打开链接附件是两块
			<p class="colorP">yo yo yo.</p>
		</custom-modal>
	</div>
</template>

<script>
	export default {
		name: 'customModalEX',
		methods: {
			open(d) {
				this.$refs[d].open()
			}
		}
	}
</script>

<style lang="less" scoped>
	.examplePageL {
		button + button {
			margin-left: 20px;
		}
	}

	.colorP {
		height: 100px;
		background-color: #24abf2;
		color: #fff;
		font-size: 24px;
	}
</style>
