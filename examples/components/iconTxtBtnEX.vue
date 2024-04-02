<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<div class="exBoxK">
			<wellCard title="表格图标按钮示例" :width="400" :height="200" style="margin: 0 20px">
				<p>
					说明：该图标按钮用于表格顶部（如批量操作），集成了权限v-has(自定义指令)，通过icon属性传递图标，name属性传递按钮文字内容
				</p>
				<div style="margin: 30px 0; text-align: center">
					<iconTxtBtn icon="ios-trash" name="批量删除" />
				</div>
			</wellCard>
			<wellCard title="表格图标按钮示例-禁用" :width="400" :height="200" style="margin: 0 20px">
				<p>说明：disabled属性传递是否禁用</p>
				<div style="margin: 30px 0; text-align: center">
					<iconTxtBtn icon="ios-trash" name="批量删除" :disabled="true" />
				</div>
			</wellCard>
			<wellCard title="表格图标按钮示例-size 40" :width="400" :height="200" style="margin: 0 20px">
				<p>
					说明：size属性传递大小（默认17）
					<InputNumber v-model="sizeK" size="small" style="width: 55px" />
				</p>
				<div style="margin: 30px 0; text-align: center">
					<iconTxtBtn icon="ios-trash" name="批量删除" :size="sizeK" />
				</div>
			</wellCard>
			<wellCard title="表格图标按钮示例-绑定点击事件" :width="400" :height="200" style="margin: 0 20px">
				<p>说明：@click='handler' 绑定点击事件</p>
				<div style="margin: 30px 0; text-align: center">
					<iconTxtBtn icon="ios-trash" name="批量删除" @click="handleClick" />
				</div>
			</wellCard>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'iconTxtBtnEX',
		data() {
			return {
				sizeK: 40
			}
		},
		methods: {
			handleClick() {
				this.$swalConfirm('提示', '确定执行批量删除？', 'warning', () => {
					console.log('确定按钮被点击')
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.exBoxK {
		display: flex;
	}
</style>
