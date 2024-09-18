<template>
	<div class="examplePageL vh100">
		<toHome />
		<div class="flexBb">
			<div class="wellsL" v-for="(e, i) in exKey" :key="'ex' + i">
				<span style="font-size: 18px">{{ e }}</span>
				<json-viewer :value="exData[e]" theme="my-awesome-json-theme" copyable :expand-depth="8" />
			</div>
		</div>
		<div class="flexBb">
			<div class="wellsL" v-for="n in 8" :key="'useE' + n">
				<wellCard
					:title="
						'多维' +
						exName[Math.ceil(n / 2) - 1] +
						(n % 2 === 1 ? '直接' : '按条件') +
						'查找，返回' +
						(switchV[n - 1] ? '路径' : '元素')
					"
				>
					<template #bts>
						<i-switch v-model="switchV[n - 1]" size="large" style="margin-right: 6px">
							<template #open><span>路径</span></template>
							<template #close><span>元素</span></template>
						</i-switch>
					</template>
					<div class="wellInnerK">
						<span>用法： </span>
						<span v-if="n % 2 === 1"
							>this.findCollection(this.exData.<b>{{ exKey[Math.ceil(n / 2) - 1] }}</b
							>, <mark>XXX</mark>{{ switchV[n - 1] ? ', true' : '' }})</span
						>
						<span v-if="n % 2 === 0"
							>this.findCollection(this.exData.<b>{{ exKey[Math.ceil(n / 2) - 1] }}</b
							>, <mark>e=>e[YYY]===XXX</mark>{{ switchV[n - 1] ? ', true' : '' }})</span
						>
						<p v-if="n % 2 === 0"> 注意：这只是有效条件的一种，实际使用中自行发挥 </p>
						<div class="outBoxS">
							<Input v-model.number="valA[n]" placeholder="YYY" style="width: 39%" v-if="n % 2 === 0" />
							<Input v-model.number="valV[n - 1]" placeholder="XXX" :style="{ width: n % 2 === 0 ? '60%' : '100%' }">
								<template #append>
									<Button @click="find(n)">测试</Button>
								</template>
							</Input>
						</div>
						<div class="rsB">
							<span>查找结果</span>
							<json-viewer :value="rVB[n]" theme="my-awesome-json-theme" copyable :expand-depth="8" />
						</div>
					</div>
				</wellCard>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'findCollectionEX',
		data() {
			return {
				switchV: [true, false, true, false, true, false, true, false],
				valV: [9, 9, 'ok', 'ok', 8, 8, 99, 99],
				valA: {
					2: 1,
					4: 'n',
					6: 'a',
					8: 1
				},
				rVB: {
					1: false,
					2: false,
					3: false,
					4: false,
					5: false,
					6: false,
					7: false,
					8: false
				},
				exName: ['纯属组', '纯对象', '标准树结构结合', '杂乱集合'],
				exKey: ['arrTree', 'objTree', 'standardTree', 'monster'],
				exData: {
					arrTree: [1, 'km', [5, 7, [8, 9, 'ai']], 4, ['c4', 32]],
					objTree: {
						a: 1,
						b: {
							a: 3,
							b: {
								d: 4,
								b: {
									h: 4
								},
								c: {
									j: 6,
									n: 'ok',
									m: {
										s: 67
									}
								}
							}
						},
						k: 'nb',
						i: {
							l: 'q'
						}
					},
					standardTree: [
						{
							a: 2,
							b: 1
						},
						{
							a: 4,
							b: 5,
							children: [
								{
									a: 8,
									b: 3,
									children: [
										{
											a: 0,
											b: 1
										}
									]
								}
							]
						}
					],
					monster: [
						1,
						{
							a: 1,
							n: [
								2,
								3,
								{
									d: 3,
									p: [
										4,
										99,
										{
											m: 8
										}
									]
								}
							]
						},
						[
							2,
							{
								u: 7
							}
						]
					]
				}
			}
		},
		methods: {
			find(action) {
				if (action % 2 === 1) {
					this.rVB[action] = this.findCollection(
						this.exData[this.exKey[Math.ceil(action / 2) - 1]],
						this.valV[action - 1],
						this.switchV[action - 1]
					)
				} else {
					this.rVB[action] = this.findCollection(
						this.exData[this.exKey[Math.ceil(action / 2) - 1]],
						(e) => e[this.valA[action]] === this.valV[action - 1],
						this.switchV[action - 1]
					)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.flexBb {
		display: flex;
		flex-wrap: wrap;

		.wellsL {
			width: 320px;
			margin-right: 10px;
			margin-bottom: 10px;
			min-height: 300px;

			.wellInnerK {
				padding-top: 10px;
				padding-left: 10px;

				.outBoxS {
					margin-top: 10px;
					padding: 0 30px;
					display: flex;
				}

				.rsB {
					padding: 10px 10px 10px 0;
				}
			}
		}
	}
</style>
