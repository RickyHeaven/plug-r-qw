<template>
	<div class="setLang">
		<svg class="icon i18nBt" aria-hidden="true">
			<use xlink:href="#icon-yuyanfanyi"></use>
		</svg>
		<main class="setLangBox">
			<div class="lanLi" @click="setLan('zh')">中文</div>
			<div class="lanLi" @click="setLan('en')">English</div>
			<div class="lanLi" @click="setLan('ru')">Pусский</div>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'SetLang',
		methods: {
			setLan(l) {
				this.$i18n.locale = l
			}
		}
	}
</script>

<style lang="less" scoped>
	.setLang {
		height: 100%;
		display: flex;
		width: 40px;
		align-items: center;
		justify-content: center;
		position: relative;

		&:hover {
			.setLangBox {
				visibility: visible;
				opacity: 1;
			}
		}

		.i18nBt {
			font-size: 32px;
			cursor: pointer;
		}

		.setLangBox {
			padding: 10px 0;
			background-color: #fff;
			visibility: hidden;
			opacity: 0;
			position: absolute;
			top: 85%;
			right: 0;
			border: 1px solid #eee;
			border-radius: 4px;
			transition:
				opacity 0.25s,
				visibility 0.25s,
				transform 0.25s;
			z-index: 110;

			.lanLi {
				cursor: pointer;
				padding: 0 20px;
				height: 30px;
				line-height: 30px;

				&:hover {
					background-color: #f4f4f4;
				}
			}
		}
	}
</style>