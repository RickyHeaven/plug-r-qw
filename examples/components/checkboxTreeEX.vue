<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<div class="boxKJ">
			<wellCard title="leaf模式(收集选中叶子节点)">
				<div class="inF">
					<p>组件值：{{ value }}</p>
					<checkboxTree v-model="value" :data="data" @on-change="handleChange" />
				</div>
			</wellCard>
		</div>
		<div class="boxKJ">
			<wellCard title="收集全部选中节点模式">
				<div class="inF">
					<p>组件值：{{ value2 }}</p>
					<checkboxTree v-model="value2" :data="data" :leaf="false" />
				</div>
			</wellCard>
		</div>

		<div class="boxKJ">
			<wellCard title="leaf模式，节点多字段收集">
				<div class="inF">
					<p>组件值：{{ value3 }}</p>
					<checkboxTree v-model="value3" :data="data" :collect-val="['id', 'name']" />
				</div>
			</wellCard>
		</div>

		<div class="boxKJ">
			<wellCard title="leaf模式，全部禁用">
				<template #bts>
					<headerBt :icon="disabled ? 'md-unlock' : 'md-lock'" @click="disabled = !disabled"
						>{{ disabled ? '解禁' : '禁用' }}
					</headerBt>
				</template>
				<div class="inF">
					<p>组件值：{{ value4 }}</p>
					<checkboxTree v-model="value4" :data="data" :disabled="disabled" />
				</div>
			</wellCard>
		</div>

		<div class="boxKJ long">
			<wellCard title="leaf模式，行内叶子节点">
				<div class="inF">
					<p>组件值：{{ value5 }}</p>
					<checkboxTree v-model="value5" :data="data" :inline-leaf="true" />
				</div>
			</wellCard>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'checkboxTreeEX',
		data() {
			return {
				disabled: true,
				value: [111, 112],
				value2: [11, 111, 112],
				value3: [
					{
						id: 112,
						name: 'leaf 1-1-2'
					}
				],
				value4: [112],
				value5: [112],
				data: [
					{
						name: 'parent 1',
						id: 1,
						expand: true,
						children: [
							{
								name: 'child 1-1',
								id: 11,
								expand: true,
								children: [
									{
										name: 'leaf 1-1-1',
										id: 111
									},
									{
										name: 'leaf 1-1-2',
										id: 112
									}
								]
							},
							{
								name: 'child 1-2',
								id: 12,
								expand: true,
								children: [
									{
										name: 'leaf 1-2-1',
										id: 121
									},
									{
										name: 'leaf 1-2-2',
										id: 122
									}
								]
							}
						]
					}
				]
			}
		},
		mounted() {
			this.setTimeout(() => {
				this.value.push(121)
			}, 5000)
		},
		methods: {
			handleChange(val) {}
		}
	}
</script>

<style lang="less" scoped>
	.boxKJ {
		width: 300px;
		height: 300px;
		display: inline-block;
		margin: 0 10px 10px 0;
		&.long {
			width: 600px;
		}

		.inF {
			padding: 10px 0 0 10px;
		}
	}
</style>
