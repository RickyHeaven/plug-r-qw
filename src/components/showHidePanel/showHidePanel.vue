<!--created 2019.04.03-->
<!--author ricky email:zhangqingcq@foxmail.com-->
<!--参数：bg 例如：bg = '#fff' 或 bg = 'white' 不传为透明背景 (bg为自定义属性，控制该组件背景色) <show-hide-panel bg="#fff">需要包装的代码</show-hide-panel>  -->

<template>
	<div :style="getBg">
		<div v-show="showT" class="contentX">
			<slot />
		</div>
		<div class="arrowA">
			<div class="btA" @click="showT = !showT">
				<Icon :type="showT ? 'ios-arrow-up' : 'ios-arrow-down'" size="20" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'showHidePanel',
		props: {
			show: {
				type: Boolean,
				default: true
			},
			bg: {
				type: String,
				default: 'transparent'
			}
		},
		data() {
			return {
				showT: this.show
			}
		},
		computed: {
			getBg() {
				if (this.showT) {
					return 'background:' + this.bg
				} else {
					return ''
				}
			}
		},
		watch: {
			show(d) {
				this.showT = d
			}
		}
	}
</script>
