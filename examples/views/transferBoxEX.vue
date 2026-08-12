<template>
	<div class="exBox">
		<showReadMe />
		<div class="flexColumnBox">
			<NodeServeInfo style="margin-bottom: 15px" />
			<transfer-box
				class="growFlexItem"
				ref="transferRef"
				:formDataLeft="formData"
				:formDataRight="formData"
				:left-table-columns="columns"
				:right-table-columns="columns"
				left-table-url="/node-serve/transfer-box-added"
				right-table-url="/node-serve/transfer-box-not-added"
				add-url="/node-serve/transfer-box-added"
				delete-url="/node-serve/transfer-box-not-added"
				add-all-url="/node-serve/transfer-box-added-all"
				delete-all-url="/node-serve/transfer-box-not-added-all"
				:add-params-handle="(e) => e"
				:delete-params-handle="(e) => e"
				@on-data-change-l="onChangeL"
			/>
		</div>
	</div>
</template>

<script>
	import { downloadFileReaderFile } from '../../src/utils/functionGroup'
	import imgK from '../assets/testo.png'
	import NodeServeInfo from '../components/NodeServeInfo.vue'

	export default {
		name: 'btTablePageEX',
		components: { NodeServeInfo },
		data() {
			return {
				columns: [
					{
						title: 'ID',
						key: 'id',
						width: 80
					},
					{
						title: '文件名称',
						key: 'name',
						minWidth: 150,
						render: (h, params) => {
							return h(
								'span',
								{
									class: 'linkM',
									on: {
										click: () => {
											downloadFileReaderFile('模拟文件下载', imgK)
										}
									}
								},
								params.row.name
							)
						}
					},
					{
						title: '文件类型',
						key: 'mimeType',
						minWidth: 100,
						align: 'center'
					},
					{
						title: '文件大小',
						key: 'size',
						minWidth: 90,
						align: 'center'
					},
					{
						title: '备注',
						key: 'remark',
						minWidth: 100,
						align: 'center'
					}
				],
				formData: [
					{
						type: 'input',
						key: 'name',
						label: '文件名称'
					},
					{
						type: 'input',
						key: 'mimeType',
						label: '文件类型'
					}
				]
			}
		},
		methods: {
			onChangeL(d) {
				console.log('左侧表格数据更新', d)
			}
		}
	}
</script>

<style lang="less" scoped>
	.exBox {
		height: 100%;
		padding: 15px;
		background-color: #fff;
	}
</style>
