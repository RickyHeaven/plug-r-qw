<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<Button @click="print" style="margin-bottom: 20px">打印</Button>
		<checkboxGroupTwoClass id="printDomH" v-model="value" :data="data" />
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
		created() {
			this.$fetch.get(location.pathname + 'testData/checkboxGroupTwoClass.json').then((r) => {
				this.data = r
			})
		},
		methods: {
			print() {
				const t = document.getElementById('printDomH')
				this.domPrint(t?.outerHTML, '网页打印')
			}
		}
	}
</script>
