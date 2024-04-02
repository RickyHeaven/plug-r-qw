<template>
	<div class="c404K">
		<div class="t404">404</div>
		<div class="ct404">UH OH! {{ t('r.pageNotFound') }}</div>
		<div class="p404">{{ t('r.notFoundMsg') }}</div>

		<Button class="bt404" @click="back">{{ t('r.back') }}</Button>
	</div>
</template>

<script>
	import Locale from '../../mixins/locale'

	export default {
		name: 'page404',
		mixins: [Locale],
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>
