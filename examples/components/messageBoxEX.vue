<template>
	<div class="examplePageL tc">
		<showReadMe />
		<toHome />
		<Button @click="confirmHandle">对话框</Button>
		<Button @click="confirmHandleB">promise对话框</Button>
		<Button @click="confirmHandleC">render函数对话框</Button>
	</div>
</template>

<script>
	export default {
		name: 'messageBoxEX',
		data() {
			return {
				msg: ''
			}
		},
		methods: {
			confirmHandle() {
				this.messageBox({
					// title: '提示',
					// content: '确定执行该操作？',
					onOk: () => {
						console.log('ok 按钮被点击')
					}
				})
			},
			confirmHandleB() {
				this.messageBox({
					onOk: () => {
						return new Promise((r) => {
							console.log('确定按钮被点击')
							this.setTimeout(() => {
								console.log('模拟网络请求完成')
								r()
							}, 4000)
						})
					}
				})
			},
			confirmHandleC() {
				this.messageBox({
					title: 'render函数示例',
					content: (h) =>
						h('Input', { props: { value: this.msg, placeholder: '请输入内容' }, on: { input: (e) => (this.msg = e) } }),
					onOk: () => {
						this.$swal('您输入了下面内容', this.msg)
					}
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	.examplePageL {
		.ivu-btn + .ivu-btn {
			margin-left: 10px;
		}
	}
</style>
