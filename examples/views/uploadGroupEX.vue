<template>
	<div class="examplePageL">
		<showReadMe />
		<NodeServeInfo />
		<div class="wellWall">
			<well-card class="upBox" fit-to-content title="本地上传">
				<div class="innerK">
					<p style="margin-bottom: 10px">
						说明：文件本地上传，组件的值为file对象的集合，需要获取file对象自行处理上传逻辑时使用，file对象不能直接在页面展示，请查看控制台
					</p>
					<uploadGroup v-model="fileId" :manual-upload="true" @on-file-id-change="printFile(fileId)" />
				</div>
			</well-card>
			<well-card class="upBox" fit-to-content title="本地上传-图片模式">
				<template #bts> 多选 <i-switch v-model="multipleB" style="margin-right: 6px" /> </template>
				<div class="innerK">
					<p style="margin-bottom: 10px">
						说明：上传格式限制为图片时，该模式可预览上传的图片，如果文件列表中有非图片文件，则自动转换为列表模式，file对象不能直接在页面展示，请查看控制台
					</p>
					<uploadGroup
						v-model="fileId2"
						:manual-upload="true"
						:show-img="true"
						:multiple="multipleB"
						@on-file-id-change="printFile(fileId2)"
					/>
				</div>
			</well-card>
			<well-card class="upBox" fit-to-content title="上传到服务器">
				<div class="innerK">
					<p style="margin-bottom: 10px">
						说明：文件直接上传到服务器，本示例调用 node-serve
						服务的上传接口。接口需返回以下格式，组件才能正确展示文件列表：
					</p>
					<p style="margin-bottom: 10px">
						<code>{ code: 0, data: [{ id: '文件ID', mimeType: '文件类型' }] }</code>
					</p>
					<p>组件值：{{ fileId3 }}</p>
					<uploadGroup v-model="fileId3" :url="url" />
				</div>
			</well-card>
			<well-card class="upBox" fit-to-content title="上传到服务器-图片模式">
				<template #bts> 多选 <i-switch v-model="multiple" style="margin-right: 6px" /> </template>
				<div class="innerK">
					<p style="margin-bottom: 10px">
						说明：上传格式限制为图片时，该模式可预览上传的图片，如果文件列表中有非图片文件，则自动转换为列表模式。接口返回格式要求同上。
					</p>
					<p>组件值：{{ fileId4 }}</p>
					<uploadGroup v-model="fileId4" :url="url" :show-img="true" :multiple="multiple" />
				</div>
			</well-card>
		</div>
	</div>
</template>

<script>
	import NodeServeInfo from '../components/NodeServeInfo.vue'

	export default {
		name: 'uploadGroupEX',
		components: { NodeServeInfo },
		data() {
			return {
				fileId: [],
				fileId2: [],
				fileId3: [],
				fileId4: [],
				url: '/node-serve/file',
				multiple: false,
				multipleB: false
			}
		},
		methods: {
			printFile(data) {
				console.log('取到文件对象了：', data)
			}
		}
	}
</script>
<style lang="less" scoped>
	.examplePageL {
		overflow-y: auto;

		.wellWall {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			align-content: space-between;
			.upBox {
				text-align: left;
				margin-bottom: 20px;
				background-color: #fff;
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

				.innerK {
					padding: 20px;
					width: 520px;
				}
			}
		}
	}
</style>
