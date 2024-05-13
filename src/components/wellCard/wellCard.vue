<!--created 2019.08.06-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div :style="wellStyle">
		<div :class="['wellCardR', { flexColumnBox: !fitToContent }]">
			<div :class="['panelHeader', { notGrow: !fitToContent }]">
				<div class="fl" style="font-weight: bold">
					{{ title || t('r.title') }}
				</div>
				<div class="btsF">
					<slot name="bts" />
				</div>
			</div>
			<div v-if="fitToContent">
				<slot />
			</div>
			<div v-else class="growFlexItem relativeBox">
				<div class="fullFlowContent">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { myTypeof } from '../../utils/functionGroup.js'
	import Locale from '../../mixins/locale'

	export default {
		name: 'wellCard',
		mixins: [Locale],
		props: {
			title: {
				type: String
			},
			fitToContent: {
				/*卡片组件尺寸会根据内容改变，该模式下`width`和`height`不再生效，无需再传*/
				type: Boolean,
				default: false
			},
			width: {
				type: [Number, String],
				default: '100%'
			},
			height: {
				type: [Number, String],
				default: '100%'
			},
			inline: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			wellStyle() {
				let temp = {}
				if (this.inline) {
					temp.display = 'inline-block'
				}
				let attrArr = ['width', 'height']
				for (let e of attrArr) {
					if (myTypeof(this[e]) === 'String') {
						temp[e] = this.fitToContent ? 'fit-content' : this[e]
					} else if (myTypeof(this[e]) === 'Number' && this[e] > 0) {
						temp[e] = this.fitToContent ? 'fit-content' : this[e] + 'px'
					}
				}
				return temp
			}
		}
	}
</script>
