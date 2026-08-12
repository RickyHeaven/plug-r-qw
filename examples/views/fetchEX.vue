<template>
	<div class="examplePageL tc">
		<showReadMe />
		<NodeServeInfo />
		<div style="margin-top: 12px">
			<Button @click="confirmHandle">点击模拟请求</Button>
			<Button @click="confirmHandleB">请求遮罩spin</Button>
			<Button @click="confirmHandleC('')">请求拦截器403</Button>
			<Button @click="confirmHandleC('-b')">请求拦截器403-b</Button>
		</div>
	</div>
</template>

<script>
	import NodeServeInfo from '../components/NodeServeInfo.vue'

	export default {
		name: 'fetchEX',
		components: { NodeServeInfo },
		methods: {
			confirmHandle() {
				this.$fetch.get('/testData/fetch.json').then((r) => {
					if (r?.code === 0) {
						this.$swal('请求成功', '名称：' + r.data.name + '；邮箱：' + r.data.email, 'success')
					}
				})
			},
			confirmHandleB() {
				this.$fetch.get('/node-serve/fetch-spin', {}, null, [], { spin: true }).then((r) => {
					if (r) {
						this.$swal('请求成功', r.message || '', 'success')
					}
				})
			},
			confirmHandleC(d) {
				this.$fetch
					.get('/node-serve/fetch-403' + d)
					.then((r) => {
						console.log(r.message)
					})
					.catch(() => {})
			}
		}
	}
</script>
<style lang="less" scoped>
	.examplePageL {
		button + button {
			margin-left: 10px;
		}
	}
</style>