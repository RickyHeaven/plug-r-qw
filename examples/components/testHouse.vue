<template>
	<div></div>
</template>

<script>
	import { findCollection } from '../../src/methods/functionGroup'

	export default {
		name: 'testHouse',
		data() {
			return {
				tree: [
					{
						a: 2,
						b: 1
					},
					{
						a: 4,
						b: 5,
						children: [
							{
								a: 8,
								b: 3,
								children: [
									{
										a: 0,
										b: 1
									}
								]
							}
						]
					}
				],
				monster: [
					1,
					{
						a: 1,
						n: [
							2,
							3,
							{
								d: 3,
								p: [
									4,
									99,
									{
										m: 8
									}
								]
							}
						]
					},
					[2, [17]],
					3
				],
				objTree: {
					a: 1,
					b: {
						a: 3,
						b: {
							d: 4,
							b: {
								h: 4
							},
							c: {
								j: 6,
								n: 'ok',
								m: {
									s: 67
								}
							}
						}
					},
					k: 'nb',
					i: {
						l: 'q'
					}
				},
				arrTree: [1, 3, [5, 7, [8, 9]], 4, [10, 32]]
			}
		},
		mounted() {
			// console.log(findCollection(this.arrTree, 9, true))
			// console.log(findCollection(this.arrTree, e => e[1] === 9))
			// console.log(findCollection(this.objTree, 'ok', true))
			// console.log(findCollection(this.objTree, e => e?.n === 'ok'))
			// console.log(findCollection(this.tree, 8,true))
			// console.log(findCollection(this.tree, e => e?.a === 8))
			// console.log(findCollection(this.tree, e => e?.a === 8, true))
			// console.log(findCollection(this.monster, 99, true))
			console.log(findCollection(this.monster, (e) => e[1] === 99))
		},
		methods: {
			getItemByPath(group, path) {
				let c = group
				for (let e of path) {
					c = c[e]
				}
				return c
			}
		}
	}
</script>

<style scoped></style>
