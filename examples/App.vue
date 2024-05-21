<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
	export default {
		name: 'App'
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

	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
