<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<selectInput v-model="value" :selectOption="selectOption" @on-change="handleChange" />
		<p class="outJ">
			组件key： <span>{{ value.key }}</span>
		</p>
		<p class="outJ">
			组件val： <span>{{ value.val }}</span>
		</p>
		<p class="outJ">
			组件beforeKey： <span>{{ value.beforeKey }}</span>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'selectInputEX',
		data() {
			return {
				value: {
					key: 'name',
					val: null
				},
				selectOption: [
					{
						label: '名称',
						val: 'name'
					},
					{
						label: '身份证号',
						val: 'id'
					}
				]
			}
		},
		methods: {
			handleChange(val) {
				console.log(val)
			}
		}
	}
</script>

<style scoped>
	.outJ {
		margin-top: 20px;
		padding-left: 20px;
	}
</style>
