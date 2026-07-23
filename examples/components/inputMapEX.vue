<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<div class="mapBox">
			<h3>沉浸式（默认，inputInMap=true）</h3>
			<inputMap v-model="value" />
		</div>
		<div class="mapBox">
			<h3>分离式（inputInMap=false）</h3>
			<inputMap v-model="value2" :inputInMap="false" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'inputMapEX',
		data() {
			return {
				value: {
					name: '光电园(地铁站)',
					lng: 106.499401,
					lat: 29.616077
				},
				value2: {
					name: '光电园(地铁站)',
					lng: 106.499401,
					lat: 29.616077
				}
			}
		},
		mounted() {
			this.setTimeout(() => {
				this.value = {
					lat: 39.99211,
					lng: 116.315801,
					name: '北京大学东门'
				}
			}, 8000)
		}
	}
</script>

<style scoped>
	.mapBox {
		width: 600px;
		margin: 0 auto 30px;
	}
	h3 {
		margin-bottom: 10px;
	}
</style>
