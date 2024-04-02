<template>
	<div class="examplePageL vh100">
		<showReadMe />
		<toHome />
		<editor-pro v-model="value" />
		<p>组件值： {{ value }}</p>
	</div>
</template>

<script>
	export default {
		name: 'editorEX',
		data() {
			return {
				value: null
			}
		}
	}
</script>

<style scoped></style>
