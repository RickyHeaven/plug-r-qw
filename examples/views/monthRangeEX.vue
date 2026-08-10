<template>
	<div class="examplePageL">
		<showReadMe />
		<div style="width: 250px">
			<month-range v-model="value" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'monthRangeEX',
		data() {
			return {
				value: ['2022-02', '2023-04']
			}
		}
	}
</script>
