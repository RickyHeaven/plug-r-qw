<template>
	<div class="examplePageL tc">
		<showReadMe />
		<toHome />
		<Button @click="swalHandle('success')">成功</Button>
		<Button @click="swalHandle('error')">失败</Button>
		<Button @click="swalHandle('warning')">警告</Button>
		<Button @click="swalHandle('info')">提示</Button>
		<Button @click="swalConfirm">$swalConfirm对话框</Button>
		<Button @click="swalHandleB">DOM node</Button>
		<Button @click="swalHandleC">swal对话框</Button>
	</div>
</template>

<script>
	export default {
		name: 'swalEX',
		methods: {
			swalHandle(type) {
				this.$swal('哈喽', '同志，你好！', type)
			},
			swalHandleB() {
				let content = document.createElement('div')
				content.innerHTML = `<p style="padding: 15px 0;">我是文字说明</p><i class="ivu-icon ivu-icon-ios-finger-print" style="font-size: 50px;color: deepskyblue"></i>`
				this.$swal({
					text: content
				})
			},
			swalHandleC() {
				/*这种用法和swalConfirm效果一样，就是略繁琐*/
				this.$swal({
					title: '提示',
					text: '确定执行该操作？',
					icon: 'warning',
					buttons: ['取消', '确定'],
					onOk() {
						console.log('确定按钮被点击')
					}
				})
			},
			swalConfirm() {
				// this.$swalConfirm('提示','确认执行该操作？','warning',()=>{

				this.$swalConfirm(null, null, 'warning', () => {
					console.log('确定被点击')
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	.examplePageL {
		.ivu-btn.ivu-btn-default {
			margin-right: 20px;
		}
	}
</style>
