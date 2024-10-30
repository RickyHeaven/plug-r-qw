<template>
	<ul class="groupBoxRX">
		<li
			:class="{ dropItemRX: item?.children, open: fromIcoMenu, fromIcoMenu: fromIcoMenu }"
			v-for="(item, i) of data"
			:key="item?.path + i"
		>
			<div :class="getClass(item)" @click="handleClick($event, item)" :style="{ paddingLeft: item?.level * 20 + 'px' }">
				<Icon class="menuIcoL" :custom="'iconfont ' + (item.icon || 'icon-r-menu-default')" />
				<span>{{ item?.name || '-- no name --' }}</span>
				<Icon
					:class="['dropIcoRX', { open: fromIcoMenu, fromIcoMenu: fromIcoMenu }]"
					type="ios-arrow-forward"
					v-show="item.children && item.children.length > 0"
				/>
			</div>
			<sideMenuProGroup :data="item?.children" v-if="item?.children" :path-name="pathName" />
		</li>
	</ul>
</template>

<script>
	import SideMenuProGroup from './sideMenuProGroup.vue'

	export default {
		name: 'sideMenuTwoLevel',
		components: { SideMenuProGroup },
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
			},
			fromIcoMenu: {
				type: Boolean
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

				if (item && !item?.children && !target.classList.contains('active')) {
					this.$router.push(item?.path)
					return
				}

				const ico = target?.querySelector?.('.dropIcoRX')
				const parent = target.parentNode
				const siblings = this.siblingElems(parent)
				for (let item of siblings) {
					item?.classList?.remove?.('open')
					const icoI = item?.querySelector?.('.dropIcoRX')
					icoI?.classList?.remove?.('open') //手风琴效果
					const child = item?.querySelectorAll?.('.open')
					for (let e of child) {
						e?.classList?.remove?.('open')
					}
				}
				parent?.classList?.toggle?.('open')
				ico?.classList?.toggle?.('open')
			}
		}
	}
</script>
