<template>
	<div class="markdown-body myCardB">
		<div v-html="renderedHtml"></div>
	</div>
</template>

<script>
	import MarkdownIt from 'markdown-it'
	import MarkdownItAnchor from 'markdown-it-anchor'

	export default {
		name: 'Md',
		props: {
			data: {
				type: String,
				default: ''
			}
		},
		computed: {
			renderedHtml() {
				const md = new MarkdownIt().use(MarkdownItAnchor)
				return md.render(this.data)
			}
		}
	}
</script>