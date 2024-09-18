<template>
	<div class="examplePageL tc">
		<toHome />
		<div class="linkM" @click="clickHandle">
			<img src="../assets/testo.png" alt="testo" />
			<div>单张图全屏预览</div>
		</div>
		<div class="linkM">
			<img src="../assets/testo.png" alt="testo" @click="imagesPreview(0)" />
			<img src="../assets/logo.png" alt="logo" @click="imagesPreview(1)" />
			<div @click="imagesPreview(0)">多张图全屏预览</div>
		</div>
	</div>
</template>

<script>
	import testo from '../assets/testo.png'
	import logo from '../assets/logo.png'

	export default {
		name: 'fullScreenImgByDomEX',
		methods: {
			clickHandle() {
				this.fullScreenImgByDom(testo)
			},
			imagesPreview(i) {
				this.fullScreenImgByDom([testo, logo], i)
			}
		}
	}
</script>
<style lang="less" scoped>
	.linkM {
		width: 300px;
		display: inline-block;
		img {
			display: inline-block;
			height: 80px;
			& + img {
				margin-left: 20px;
			}
		}
	}
</style>
