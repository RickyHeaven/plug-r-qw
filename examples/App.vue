<template>
	<div id="app">
		<header class="appHead" v-show="!fullScreen">
			<svg class="icon brandR" aria-hidden="true">
				<use xlink:href="#icon-letter-R"></use>
			</svg>
			<hello-r />
			<SetLang class="fr" />
			<span class="fr">{{ $t('e.testTxt') }}</span>
		</header>
		<main class="appMain" :class="{ fullHeight: fullScreen }">
			<SideMenuE class="notShrink" :data="menu" v-show="!fullScreen" />
			<div class="viewR relative" :class="{ fullHeight: fullScreen }">
				<router-view />
			</div>
		</main>
	</div>
</template>

<script>
	import SetLang from './components/SetLang.vue'
	import SideMenuE from './components/SideMenuE.vue'
	import { useStore } from './store'
	import { mapState } from 'pinia'

	export default {
		name: 'App',
		components: { SetLang, SideMenuE },
		computed: {
			...mapState(useStore, ['fullScreen']),
			menu() {
				const routes = this.$router.options.routes
				return routes
					.map((e) => ({
						name: e.name,
						path: e.path,
						desc: e.meta?.desc
					}))
					.filter((e) => e.name !== 'login' && e.name !== 'tablePrint' && e.name)
					.sort((a, b) => String(a.name).localeCompare(String(b.name), undefined, { sensitivity: 'base' }))
			}
		}
	}
</script>

<style>
	@import '~github-markdown-css';
</style>
<style lang="less">
	@import './global/common.less';

	#app {
		font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial,
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	.appHead {
		height: 45px;
		border-bottom: 1px solid #eee;
		line-height: 45px;
		padding: 0 15px;

		.brandR {
			font-size: 28px;
			position: relative;
			top: 5px;
			margin-right: 25px;
		}

		.setLang {
			margin-left: 30px;
		}

		.fr {
			float: right;
			margin-right: 15px;
		}
	}

	.appMain {
		height: calc(~'100vh - 45px');
		display: flex;
		align-items: center;

		.viewR {
			flex-grow: 1;
			height: 100%;
			padding: 12px;
			background-color: #f5f5f5;
			position: relative;

			&.fullHeight {
				padding: 0;
				background-color: #fff;
			}
		}
	}
</style>
