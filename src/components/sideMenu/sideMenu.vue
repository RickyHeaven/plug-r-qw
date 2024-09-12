<template>
	<div ref="menuRefRP" :class="['menuBoxRP','cannotSelect',{light:light}]">
		<div class="menuListR" v-show="menuDisplay">
			<side-menu-group :data="data" :pathName="pathName" />
		</div>
		<Icon
			:type="typeIco"
			:size="25"
			:class="{ showIco: !menuDisplay }"
			class="menuShowHideIco"
			:title="titleC"
			@click="showHideMenu"
			:color="menuDisplay ? '#fff' : '#333'"
		/>
	</div>
</template>

<script>
	import Locale from '../../mixins/locale'
	import SideMenuGroup from './sideMenuGroup'
	import { setTimeout } from '../../utils/timer'

	export default {
		name: 'sideMenu',
		mixins: [Locale],
		components: { SideMenuGroup },
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
				return this.menuDisplay ? 'ios-arrow-back' : 'ios-arrow-forward'
			}
		},
		data() {
			return {
				menuDisplay: true,
				pathName: null
			}
		},
		created() {
			let menuDisplay = localStorage.getItem('menuDisplayR')
			if (menuDisplay !== undefined && menuDisplay !== null && menuDisplay !== '') {
				menuDisplay = JSON.parse(menuDisplay)
			} else {
				menuDisplay = true
				localStorage.setItem('menuDisplayR', JSON.stringify(true))
			}
			this.menuDisplay = menuDisplay
		},
		watch: {
			$route: {
				handler(after) {
					this.pathName = after.path
					this.$nextTick(function(){
						setTimeout(this.addOpen,10)
					})
				},
				immediate: true
			}
		},
		methods: {
			showHideMenu() {
				this.menuDisplay = !this.menuDisplay
				localStorage.setItem('menuDisplayR', JSON.stringify(this.menuDisplay))
				this.$emit('on-change', this.menuDisplay)
			},
			addOpen() {
				let t = this.$refs.menuRefRP.querySelectorAll('.dropItemRP')
				for (let e of t) {
					if (e?.querySelector?.('.active') && !e?.classList?.contains?.('open')) {
						e.classList.add?.('open')
					}
				}
			}
		}
	}
</script>
