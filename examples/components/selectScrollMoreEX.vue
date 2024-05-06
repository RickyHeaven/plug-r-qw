<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<div style="margin: 20px 0">
			请注意：该示例因为要请求接口，所以请执行“npm run node-serve”开启node-serve后方可正常演示
		</div>
		<well-card title="searchWordsRequired为false(默认)" width="300px" height="400px" inline>
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
		<well-card title="searchWordsRequired为true" width="300px" height="400px" inline style="margin-left: 10px">
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
		<well-card title="optionFilter：过滤掉选项‘阿上’" width="300px" height="400px" inline style="margin-left: 10px">
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
		<well-card title="multiple 多选" width="300px" height="400px" inline style="margin-left: 10px">
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
	export default {
		name: 'selectInputEX',
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
</style>
