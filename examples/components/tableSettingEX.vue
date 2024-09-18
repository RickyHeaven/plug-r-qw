<template>
	<div class="exBox">
		<showReadMe />
		<toHome />
		<div class="headBR relativeBox">
			<tableSetting class="fr" v-model="columns" sKey="tableSettingEx_202007030903" defaultCheck transfer />
			<Checkbox v-model="nodeServer" class="fr" style="margin-right: 25px" @on-change="getData"
				>切换为node-serve数据(需开启项目nodeJs服务器)</Checkbox
			>
		</div>
		<div class="tableLK">
			<bt-table-page ref="btTab" :columns="columns" :url="url" table-empty-td-handle />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tableSettingEX',
		data() {
			return {
				nodeServer: false,
				columns: [
					{
						title: '文件名称',
						key: 'name',
						minWidth: 150,
						showSettingCheck: true,
						tooltip: true
					},
					{
						title: '文件类型',
						key: 'mimeType',
						minWidth: 150,
						showSettingCheck: true,
						align: 'center'
					},
					{
						title: '文件大小',
						key: 'size',
						minWidth: 150,
						showSettingCheck: true,
						align: 'center'
					},
					{
						title: '存储路径',
						key: 'storagePath',
						minWidth: 150,
						align: 'center'
					},
					{
						title: '存储组',
						key: 'storageGroup',
						width: 150,
						align: 'center'
					},
					{
						title: '创建时间',
						key: 'createdAt',
						width: 190,
						align: 'center'
					},
					{
						title: '操作',
						width: 240,
						showSettingCheck: true,
						disableShowSetting: true,
						render: (h, params) => {
							return h('div', [
								h(
									'Button',
									{
										style: {},
										on: {
											click: () => {
												this.messageBox({
													content: '确定模拟执行删除操作？',
													onOk: () => {
														/*在这里调接口删除数据并给成功失败提示，然后主动拉取table数据*/
														this.setTimeout(() => {
															this.$swal('成功', '假装删除成功', 'success')
														}, 500)
													}
												})
											}
										}
									},
									'删除'
								)
							])
						}
					}
				]
			}
		},
		computed: {
			url() {
				return this.nodeServer ? '/node-serve/bt-table-page' : location.pathname + 'testData/btTablePage.json'
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
		height: 100vh;
		padding: 50px 20px 20px 20px;
	}

	.tableLK {
		height: calc(100vh - 50px - @headerH);
		position: relative;
	}

	.headBR {
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
