<template>
	<div class="wallM">
		<router-link class="liM" v-for="e in data" :key="e.path" :to="e.path"
			>{{ e.name }}<em>{{ e.desc }}</em></router-link
		>
	</div>
</template>

<script>
	export default {
		name: 'SideMenuE',
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../global/variables';

	@bg: #353950;
	.wallM {
		width: 220px;
		height: 100%;
		border-right: 1px solid #eee;
		overflow: auto;

		&::-webkit-scrollbar {
			width: 3px;
		}

		&::-webkit-scrollbar-track {
			background-color: lighten(@bg, 65%);
			border-radius: 3px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: lighten(@bg, 45%);
			border-radius: 5px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: lighten(#575d7e, 15%);
			cursor: pointer;
		}

		.liM {
			position: relative;
			padding: 5px 15px 5px 35px;
			display: block;

			em {
				display: block;
				font-style: normal;
				opacity: 0.5;
			}

			&:hover {
				color: #2d8cf0;
				background: #f7fcff;
			}

			&.active {
				color: #2d8cf0;
				background: #f0faff;

				&:after {
					content: '';
					display: block;
					width: 2px;
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
					background: #2d8cf0;
				}
			}
		}
	}
</style>
