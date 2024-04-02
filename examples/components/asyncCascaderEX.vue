<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<div class="wellsL">
			<wellCard title="最后一级模式">
				<div class="wellInnerK">
					<span>机构： </span>
					<div class="boxC">
						<asyncCascader v-model="value" :url="url" />
					</div>
					<div class="outBoxS">
						<p>组件值(机构ID)： {{ value }}</p>
					</div>
				</div>
			</wellCard>
		</div>
		<div class="wellsL longO">
			<wellCard title="标签多级模式">
				<div class="wellInnerK">
					<span>机构： </span>
					<div class="boxC">
						<asyncCascader v-model="value2" :only-last-label="false" :url="url" />
					</div>
					<div class="outBoxS">
						<p>组件值(机构ID)： {{ value2 }}</p>
					</div>
				</div>
			</wellCard>
		</div>
		<div class="wellsL">
			<wellCard title="值多级模式">
				<div class="wellInnerK">
					<span>机构： </span>
					<div class="boxC">
						<asyncCascader v-model="value3" :only-last-val="false" @on-name-change="handleChange" :url="url" />
					</div>
					<div class="outBoxS">
						<p>组件值(机构ID)： {{ value3 }}</p>
					</div>
				</div>
			</wellCard>
		</div>
		<div class="wellsL">
			<wellCard title="外部逻辑清空">
				<div class="wellInnerK">
					<p>说明：比如高级查询时统一清空查询条件</p>
					<span>机构： </span>
					<div class="boxC">
						<asyncCascader v-model="value4" :url="url" />
					</div>
					<Button @click="value4 = null">清空</Button>

					<div class="outBoxS">
						<p>组件值(机构ID)： {{ value4 }}</p>
					</div>
				</div>
			</wellCard>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'asyncCascaderEX',
		data() {
			return {
				url: location.pathname + 'testData/asyncCascader.json',
				value: null,
				value2: null,
				value3: [2, 118],
				value4: 118
			}
		},
		methods: {
			handleChange(val) {
				console.log(val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.outBoxS {
		margin-top: 20px;
		padding-left: 30px;
	}

	.wellsL {
		width: 320px;
		display: inline-block;
		margin-right: 10px;
		margin-bottom: 10px;
		height: 300px;

		.wellInnerK {
			padding-top: 10px;
			padding-left: 10px;
		}

		.boxC {
			width: 200px;
			display: inline-block;
		}
		&.longO {
			width: 600px;

			.boxC {
				width: 450px;
			}
		}
	}
</style>
