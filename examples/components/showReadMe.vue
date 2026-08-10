<template>
	<div :class="{ conMA: true, fullKA: open }">
		<span class="btnAR" @click="click" :style="{ color: color }"
			><Icon type="ios-paper" style="position: relative; bottom: 1px" /> 查看说明</span
		>
		<full-screen-pop :title="$route.name" ref="popA" @on-close="open = false">
			<div class="wallK">
				<div class="markdown-body myCardB">
					<component :is="comps[routeNow] || comps[$route.name] || mec[$route.name.replace('$', '').toLowerCase()]" />
				</div>
			</div>
		</full-screen-pop>
	</div>
</template>

<script>
	import comps from '../../src/components'
	import mec from '../../src/utils'

	export default {
		name: 'showReadMe',
		props: {
			routeNow: {
				type: String,
				default: null
			},
			color: {
				type: String,
				default: '#2d8cf0'
			}
		},
		data() {
			return {
				comps: comps,
				mec: mec,
				open: false
			}
		},
		methods: {
			click() {
				this.$refs.popA.open()
				this.open = true
			}
		}
	}
</script>

<style lang="less" scoped>
	.conMA {
		position: absolute;
		z-index: 10;
		top: -30px;
		right: 300px;
		text-align: left;

		&.fullKA {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1700;
		}
	}

	.btnAR {
		cursor: pointer;

		&:hover {
			opacity: 0.85;
		}
	}

	.wallK {
		padding: 30px 0;
		background-color: #fbfbfb;
		min-height: 100%;
	}

	.myCardB {
		width: 980px;
		margin: 0 auto;
		padding: 45px;
		background-color: #fff;
		box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		text-align: left;
	}
</style>
