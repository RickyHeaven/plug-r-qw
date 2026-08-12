<template>
	<div class="exBox">
		<showReadMe />
		<div class="flexColumnBox">
			<NodeServeInfo />
			<div class="headBR relativeBox">
				<tableSetting class="fr" v-model="columns" sKey="tableSettingEx_202007030903" defaultCheck transfer />
				<Checkbox v-model="nodeServer" class="fr" style="margin-right: 25px" @on-change="getData"
					>切换为node-serve数据(需开启项目nodeJs服务器)</Checkbox
				>
			</div>
			<bt-table-page class="growFlexItem" ref="btTab" :columns="columns" :url="url" table-empty-td-handle />
		</div>
	</div>
</template>

<script>
	import NodeServeInfo from '../components/NodeServeInfo.vue'

	export default {
		name: 'tableSettingEX',
		components: { NodeServeInfo },
		data() {
			return {
				nodeServer: false,
				columns: [
					{
						title: 'ID',
						key: 'id',
						width: 80
					},
					{
						title: '文件名称',
						key: 'name',
						minWidth: 550,
						showSettingCheck: true,
						tooltip: true
					},
					{
						title: '文件类型',
						key: 'mimeType',
						minWidth: 120,
						showSettingCheck: true,
						align: 'center'
					},
					{
						title: '文件大小',
						key: 'size',
						minWidth: 100,
						showSettingCheck: true,
						align: 'center'
					},
					{
						title: '备注',
						key: 'remark',
						minWidth: 200
					}
				]
			}
		},
		computed: {
			url() {
				return this.nodeServer ? '/node-serve/bt-table-page' : '/testData/btTablePage.json'
			}
		},
		methods: {
			getData() {
				this.$nextTick(function () {
					this.$refs.btTab.getTableData()
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../global/variables';

	.exBox {
		height: 100%;
		padding: 15px;
		background-color: #fff;
	}

	.headBR {
		margin-top: 20px;
		height: @headerH;
		line-height: @headerH;
		background-color: @headerBg;
		overflow: hidden;

		&:after {
			content: '';
			display: block;
			clear: both;
		}
	}
</style>
