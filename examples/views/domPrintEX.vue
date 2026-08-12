<template>
	<div class="examplePageL">
		<showReadMe />
		<Button @click="print" style="margin-bottom: 20px">打印</Button>
		<checkboxGroupTwoClass id="printDomH" v-model="value" :data="data" class="whiteBg" />
	</div>
</template>
<script>
	export default {
		name: 'domPrintEX',
		data() {
			return {
				value: [77],
				data: []
			}
		},
		mounted() {
			this.$fetch.get('/testData/checkboxGroupTwoClass.json').then((r) => {
				this.data = r
			})
		},
		methods: {
			print() {
				const t = document.getElementById('printDomH')
				this.domPrint(t?.outerHTML, '网页打印', { autoPrint: true })
			}
		}
	}
</script>
<style lang="less" scoped>
	.whiteBg {
		background-color: #fff;
	}
</style>