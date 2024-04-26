<template>
	<div class="exBox">
		<span class="infoMD">请注意：该示例因为要请求接口，所以请执行“npm run node-serve”开启node-serve后方可正常演示</span>
		<showReadMe />
		<toHome />
		<transfer-box
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
</template>

<script>
	import { downloadFileReaderFile } from '../../src/utils/functionGroup'
	import imgK from '../assets/testo.png'

	export default {
		name: 'btTablePageEX',
		data() {
			return {
				columns: [
					{
						title: 'ID',
						key: 'id',
						align: 'center',
						width: 80
					},
					{
						title: '文件名称',
						key: 'name',
						align: 'center',
						minWidth: 250,
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
						align: 'center'
					},
					{
						title: '文件大小',
						key: 'size',
						align: 'center'
					},
					{
						title: '备注',
						key: 'remark',
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

<style lang="scss" scoped>
	.exBox {
		height: 100vh;
		padding: 50px 20px 20px 20px;
		.infoMD {
			position: absolute;
			right: 250px;
			top: 21px;
			color: #666;
		}
	}
</style>
