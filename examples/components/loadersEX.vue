<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<h2>纯CSS3超酷Loading加载指示器特效</h2>
		<div class="main">
			<div class="slice">
				<loaders data-loader="circle" :show="true" />
				<div>data-loader="circle"</div>
			</div>
			<div class="slice">
				<loaders data-loader="circle-side" />
				<div>data-loader="circle-side"</div>
			</div>
			<div class="slice">
				<loaders data-loader="arrow-circle" />
				<div>data-loader="arrow-circle"</div>
			</div>
			<div class="slice">
				<loaders data-loader="ball-scale" />
				<div>data-loader="ball-scale"</div>
			</div>
			<div class="slice">
				<loaders data-loader="ball-circle" />
				<div>data-loader="ball-circle"</div>
			</div>
			<div class="slice">
				<loaders data-loader="rectangle" />
				<div>data-loader="rectangle"</div>
			</div>
			<div class="slice">
				<loaders data-loader="heart" />
				<div>data-loader="heart"</div>
			</div>
			<div class="slice">
				<loaders data-loader="ball-rotate" />
				<div>data-loader="ball-rotate"</div>
			</div>
			<div class="slice">
				<loaders data-loader="ball-pulse" />
				<div>data-loader="ball-pulse"</div>
			</div>
			<div class="slice">
				<loaders data-loader="jumping" />
				<div>data-loader="jumping"</div>
			</div>
			<div class="slice">
				<loaders data-loader="satellite" />
				<div>data-loader="satellite"</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loadersEX',
		data() {
			return {}
		}
	}
</script>

<style scoped lang="less">
	.examplePageL {
		background-color: #40479a;
		h2 {
			text-align: center;
			color: aliceblue;
			font-size: 26px;
		}
		.main {
			width: 1200px;
			margin: 0 auto;
		}
		.slice {
			position: relative;
			float: left;
			width: 280px;
			height: 150px;
			margin: 10px;
			padding-top: 40px;
			text-align: center;
			border: 1px solid rgba(0, 0, 0, 0.5);
		}
		.slice > .loader-div {
			margin: 0 auto;
		}
		.slice > div:nth-child(2) {
			font-family: cursive;
			position: absolute;
			bottom: 10px;
			width: 100%;
			text-align: center;
			left: 0;
			color: #fff;
			font-size: 14px;
		}
	}
</style>
