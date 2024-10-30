<template>
	<ul class="groupBoxRX">
		<li
			:class="{ dropItemRX: item?.children }"
			v-for="(item, i) of data"
			:key="item?.path + i"
			@mouseenter="handleMouseenter($event, item)"
			@mouseleave="handleMouseleave($event)"
		>
			<div :class="getClass(item)" @click="handleClick($event, item)" :style="{ paddingLeft: item?.level * 20 + 'px' }">
				{{ item?.name || '-- no name --' }}
				<Icon
					class="dropIcoRX"
					type="ios-arrow-forward"
					:size="16"
					v-show="item.children && item.children.length > 0"
				/>
			</div>
			<sideMenuProGroup
				class="rightChildRX"
				v-if="item?.children?.length > 0"
				v-show="current === item?.path"
				:data="item?.children"
				:path-name="pathName"
			/>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'sideMenuProGroup',
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

				if (item && !item?.children && !target.classList.contains('active')) {
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
