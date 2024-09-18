<template>
	<div ref="menuRefRX" :class="['menuBoxRPro','cannotSelect',{light:light}]">
		<div class="menuListR" v-show="menuDisplay">
			<sideMenuTwoLevel :data="data" :pathName="pathName" />
		</div>
		<sideIcoMenu class="icoMenuR" v-show="!menuDisplay" :data="data" :pathName="pathName" />
		<Icon
			:custom="typeIco"
			:size="14"
			:class="{ showIco: !menuDisplay }"
			class="menuShowHideIco"
			:title="titleC"
			@click="showHideMenu"
		/>
	</div>
</template>

<script>
	import Locale from '../../mixins/locale'
	import sideMenuTwoLevel from './sideMenuTwoLevel.vue'
	import sideIcoMenu from './sideIcoMenu.vue'
	import { setTimeout } from '../../utils/timer'

	export default {
		name: 'sideMenuPro',
		mixins: [Locale],
		components: { sideMenuTwoLevel,sideIcoMenu },
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			},
			light: {
				type: Boolean
			}
		},
		computed: {
			titleC() {
				return this.menuDisplay ? this.t('r.hideMenu') : this.t('r.showMenu')
			},
			typeIco() {
				return this.menuDisplay ? 'iconfont icon-r-menu-hide' : 'iconfont icon-r-menu-open'
			}
		},
		data() {
			return {
				menuDisplay: true,
				pathName: null
			}
		},
		created() {
			let menuDisplay = localStorage.getItem('menuDisplayRPro')
			if (menuDisplay !== undefined && menuDisplay !== null && menuDisplay !== '') {
				menuDisplay = JSON.parse(menuDisplay)
			}
			else {
				menuDisplay = true
				localStorage.setItem('menuDisplayRPro', JSON.stringify(true))
			}
			this.menuDisplay = menuDisplay
		},
		watch: {
			$route: {
				handler(after) {
					this.pathName = after.path
					this.$nextTick(function() {
						setTimeout(this.addOpen, 10)
					})
				},
				immediate: true
			}
		},
		methods: {
			showHideMenu() {
				this.menuDisplay = !this.menuDisplay
				localStorage.setItem('menuDisplayRPro', JSON.stringify(this.menuDisplay))
				this.$emit('on-change', this.menuDisplay)
			},
			addOpen() {
				let t = this.$refs.menuRefRX.querySelectorAll('.dropItemRX')
				for (let e of t) {
					const ico = e?.childNodes[0]?.querySelector?.('.dropIcoRX')
					if (e?.querySelector?.('.active')) {
						if(e?.childNodes[1]?.classList?.contains?.('rightChildRX')){
							if (!e?.childNodes[0]?.classList?.contains?.('activeR')) {
								e?.childNodes[0].classList.add?.('activeR')
							}
						}else {
							if (!e?.classList?.contains?.('open')) {
								e.classList.add?.('open')
							}
							if (ico && !ico?.classList?.contains?.('open')) {
								ico.classList.add?.('open')
							}
						}
					}else {
						if(e?.childNodes[1]?.classList?.contains?.('rightChildRX')){
							if (e?.childNodes[0]?.classList?.contains?.('activeR')) {
								e?.childNodes[0].classList.remove?.('activeR')
							}
						}else {
							if (e?.classList?.contains?.('open')&&!e?.classList?.contains?.('fromIcoMenu')) {
								e.classList.remove?.('open')
							}
							if (ico?.classList?.contains?.('open')&&!ico?.classList?.contains?.('fromIcoMenu')) {
								ico.classList.remove?.('open')
							}
						}
					}
				}
			}
		}
	}
</script>
