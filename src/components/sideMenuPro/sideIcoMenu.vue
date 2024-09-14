<template>
	<ul class="groupBoxRX">
		<li
			:class="{dropItemRX:item?.children}"
			v-for="(item, i) of data" :key="item?.path + i"
			@mouseenter="handleMouseenter($event, item)"
			@mouseleave="handleMouseleave($event)"
		>
			<div
				:class="getClass(item)"
				@click="handleClick($event, item)"
			>
				<Icon class="menuIcoM" :custom="'iconfont '+(item.icon||'icon-r-menu-default')" size="20"/>
			</div>
			<sideMenuTwoLevel class="rightTwoMenu" v-show="current===item?.path" :data="[item]" :pathName="pathName" fromIcoMenu/>
		</li>
	</ul>
</template>

<script>
	import sideMenuTwoLevel from './sideMenuTwoLevel.vue'

	export default {
		name: 'sideMenuPro',
		components: { sideMenuTwoLevel },
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			},
			pathName: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				current: ''
			}
		},
		methods: {
			getClass(item) {
				let t = 'menuTxtR '
				if (item?.path === this.pathName) {
					t += 'active '
				}
				return t
			},
			handleClick(e, item) {
				e?.preventDefault?.()
				let target = e?.target

				if (!item?.children && !target.classList.contains('active')) {
					this.$router.push(item?.path)
				}
			},
			handleMouseenter(e, item) {
				e?.preventDefault?.()
				this.current = item?.path
			},
			handleMouseleave(e) {
				e?.preventDefault?.()
				this.current = ''
			}
		}
	}
</script>
