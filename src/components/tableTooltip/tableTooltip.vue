<script>
	import _ from 'lodash'

	export default {
		name: 'tableTooltip',
		props: {
			content: [String, Number, Boolean, null, undefined]
		},
		data() {
			return {
				tooltipDisabled: true,
				debounceS: false,
				maxWidth: 200
			}
		},
		mounted() {
			this.getSize()

			this.debounceS = _.debounce(() => {
				this.$nextTick(function () {
					this.getSize()
				})
			}, 200)

			window.addEventListener('resize', this.debounceS)
		},
		updated() {
			this.getSize()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.debounceS)
		},
		methods: {
			getSize() {
				const $span = this.tooltipDisabled ? this.$refs.spanRef : this.$refs.contentRef
				if (!$span) {
					return
				}
				let range = document.createRange()
				range.setStart($span, 0)
				range.setEnd($span, $span.childNodes.length)
				const rangeWidth = range.getBoundingClientRect().width
				this.maxWidth = $span.offsetWidth * 2
				this.tooltipDisabled = rangeWidth < $span.offsetWidth

				range = null
			}
		}
	}
</script>

<template>
	<div class="tableTooltip">
		<span ref="spanRef" v-if="tooltipDisabled" class="contentText">{{ content }}</span>
		<Tooltip v-else :content="content" :max-width="maxWidth" transfer>
			<span ref="contentRef" class="contentText">{{ content }}</span>
		</Tooltip>
	</div>
</template>
