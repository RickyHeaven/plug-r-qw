<template>
	<div class="examplePageL">
		<showReadMe />
		<NodeServeInfo style="margin-bottom: 10px" />
		<well-card class="wCard" title="searchWordsRequired为false(默认)" width="300px" height="400px" inline>
			<div class="inBox">
				<select-scroll-more
					v-model="value"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 7 }"
					@on-change="handleChange"
					style="width: 250px"
				/>
				<p class="outJ">
					值： <span>{{ value }}</span>
				</p>
			</div>
		</well-card>
		<well-card
			class="wCard"
			title="searchWordsRequired为true"
			width="300px"
			height="400px"
			inline
			style="margin-left: 10px"
		>
			<div class="inBox">
				<select-scroll-more
					v-model="value1"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 7 }"
					@on-change="handleChange"
					style="width: 250px"
					searchWordsRequired
				/>
				<p class="outJ">
					值： <span>{{ value1 }}</span>
				</p>
			</div>
		</well-card>
		<well-card
			class="wCard"
			title="optionFilter：过滤掉选项'阿上'"
			width="300px"
			height="400px"
			inline
			style="margin-left: 10px"
		>
			<div class="inBox">
				<select-scroll-more
					v-model="value2"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 7 }"
					@on-change="handleChange"
					style="width: 250px"
					:option-filter="filterB"
				/>
				<p class="outJ">
					值： <span>{{ value2 }}</span>
				</p>
			</div>
		</well-card>
		<well-card class="wCard" title="multiple 多选" width="300px" height="400px" inline style="margin-left: 10px">
			<div class="inBox">
				<select-scroll-more
					v-model="value3"
					url="/node-serve/select-scroll-more"
					:searchData="{ size: 7 }"
					@on-change="handleChange"
					style="width: 250px"
					multiple
					allow-create
				/>
				<p class="outJ">
					值： <span>{{ value3 }}</span>
				</p>
			</div>
		</well-card>
	</div>
</template>

<script>
	import NodeServeInfo from '../components/NodeServeInfo.vue'

	export default {
		name: 'selectInputEX',
		components: { NodeServeInfo },
		data() {
			return {
				value: null,
				value1: null,
				value2: null,
				value3: null
			}
		},
		methods: {
			handleChange(val) {
				console.log(val)
			},
			filterB(d) {
				return d.filter((e) => e && e.name !== '阿上')
			}
		}
	}
</script>

<style scoped>
	.inBox {
		padding: 15px;
	}

	.outJ {
		margin-top: 20px;
		padding-left: 20px;
	}

	.examplePageL .wCard {
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
</style>
