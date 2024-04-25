<!--created 2021.07.06-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
	<div class="transferBoxRL">
		<div class="leftBoxLLL">
			<div class="fullHeight flexColumnBox">
				<div class="notGrow">
					<div class="titleLLL">{{ titleLeft || t('r.added') }}</div>
					<show-hide-panel>
						<search-form
							ref="leftFormRef"
							:form-data="formDataLeft"
							:form-rules="formRulesLeft"
							:label-width="searchFormLabelWith"
							@on-search="searchLeft"
						/>
					</show-hide-panel>
				</div>

				<div class="growFlexItem">
					<bt-table-page
						ref="lTabRef"
						:columns="leftTableColumns"
						:url="leftTableUrl"
						:search-data="leftTableSearchData"
						@on-selection-change="lSelectionChange"
						@on-data-change="dataChangeL"
						:init-data="Boolean(isEmpty(constSearchDataLeft) && leftTableUrl)"
						get-data-loading
						selection
					/>
				</div>
			</div>
		</div>

		<div class="middleBoxLLL">
			<Button class="middleBtLLL" size="large" type="default" @click="removeAll" :disabled="delAllDis"
				>{{ t('r.removeAll') }}
				<Icon type="ios-arrow-forward" />
			</Button>
			<Button class="middleBtLLL" size="large" type="default" @click="remove" :disabled="deleteDis"
				>{{ t('r.remove') }}
				<Icon type="ios-arrow-forward" />
			</Button>
			<Button class="middleBtLLL" size="large" type="primary" @click="add" :disabled="addDis">
				<Icon type="ios-arrow-back" />
				{{ t('r.add') }}</Button
			>
			<Button class="middleBtLLL" size="large" type="primary" @click="addAll" :disabled="addAllDis">
				<Icon type="ios-arrow-back" />
				{{ t('r.addAll') }}</Button
			>
		</div>

		<div class="rightBoxLLL">
			<div class="fullHeight flexColumnBox">
				<div class="notGrow">
					<div class="titleLLL">{{ titleRight || t('r.notAdded') }}</div>

					<show-hide-panel>
						<search-form
							ref="rightFormRef"
							:form-data="formDataRight"
							:form-rules="formRulesRight"
							:label-width="searchFormLabelWith"
							@on-search="searchRight"
						/>
					</show-hide-panel>
				</div>

				<div class="growFlexItem">
					<bt-table-page
						ref="rTabRef"
						:columns="rightTableColumns"
						:url="rightTableUrl"
						:search-data="rightTableSearchData"
						@on-selection-change="rSelectionChange"
						@on-data-change="dataChangeR"
						:init-data="Boolean(isEmpty(constSearchDataRight) && rightTableUrl)"
						get-data-loading
						selection
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import _ from 'lodash'
	import Locale from '../../mixins/locale'

	export default {
		name: 'transferBox',
		mixins: [Locale],
		props: {
			titleLeft: {
				type: String
			},
			titleRight: {
				type: String
			},
			formDataLeft: {
				type: Array,
				default() {
					return []
				}
			},
			formDataRight: {
				type: Array,
				default() {
					return []
				}
			},
			formRulesLeft: {
				type: Object,
				default() {
					return {}
				}
			},
			formRulesRight: {
				type: Object,
				default() {
					return {}
				}
			},
			constSearchDataLeft: {
				type: Object,
				default() {
					return {}
				}
			},
			constSearchDataRight: {
				type: Object,
				default() {
					return {}
				}
			},
			leftTableColumns: {
				type: Array,
				default() {
					return []
				}
			},
			rightTableColumns: {
				type: Array,
				default() {
					return []
				}
			},
			leftTableUrl: {
				type: String,
				default: null
			},
			rightTableUrl: {
				type: String,
				default: null
			},
			addUrl: {
				type: String,
				default: null
			},
			deleteUrl: {
				type: String,
				default: null
			},
			addAllUrl: {
				type: String,
				default: null
			},
			deleteAllUrl: {
				type: String,
				default: null
			},
			addParamsHandle: {
				type: Function,
				default: (selection) => {
					return selection.map((e) => e?.id)
				}
			},
			deleteParamsHandle: {
				type: Function,
				default: (selection) => {
					return selection?.map?.((e) => e?.id)
				}
			},
			addAllParamsHandle: {
				type: Function,
				default: (searchData) => {
					return searchData
				}
			},
			deleteAllParamsHandle: {
				type: Function,
				default: (searchData) => {
					return searchData
				}
			},
			addMethod: {
				type: String,
				default: 'post'
			},
			addAllMethod: {
				type: String,
				default: 'post'
			},
			deleteMethod: {
				type: String,
				default: 'delete'
			},
			deleteAllMethod: {
				type: String,
				default: 'delete'
			},
			searchFormLabelWith: {
				type: Number
			}
		},
		data() {
			return {
				searchDataLeft: {},
				searchDataRight: {},
				lSelection: [],
				rSelection: [],
				leftTotal: 0,
				rightTotal: 0
			}
		},
		computed: {
			leftTableSearchData() {
				return { ...this.constSearchDataLeft, ...this.searchDataLeft }
			},
			rightTableSearchData() {
				return { ...this.constSearchDataRight, ...this.searchDataRight }
			},
			delAllDis() {
				return this.leftTotal < 1
			},
			deleteDis() {
				return this.lSelection.length < 1
			},
			addDis() {
				return this.rSelection.length < 1
			},
			addAllDis() {
				return this.rightTotal < 1
			}
		},
		methods: {
			isEmpty: _.isEmpty,
			reset() {
				/*重置穿梭框（公开）*/
				this.$refs.leftFormRef.resetForm()
				this.$refs.rightFormRef.resetForm()
				if (!_.isEmpty(this.searchDataLeft)) {
					this.searchDataLeft = {}
				}
				if (!_.isEmpty(this.searchDataRight)) {
					this.searchDataRight = {}
				}
				this.$refs.lTabRef.clearSelect()
				this.$refs.rTabRef.clearSelect()
			},
			search() {
				/*主动触发筛选/刷新数据（公开）*/
				this.$refs.lTabRef.search()
				this.$refs.rTabRef.search()
			},
			lSelectionChange(s) {
				/*私有*/
				this.lSelection = s
			},
			rSelectionChange(s) {
				/*私有*/
				this.rSelection = s
			},
			dataChangeL(d) {
				/*私有*/
				this.leftTotal = d?.data?.page?.total || d?.data?.data?.total || d?.data?.total || d?.total || 0
				this.$emit('on-data-change-l', d)
			},
			dataChangeR(d) {
				/*私有*/
				this.rightTotal = d?.data?.page?.total || d?.data?.data?.total || d?.data?.total || d?.total || 0
				this.$emit('on-data-change-r', d)
			},
			searchLeft(d) {
				/*私有*/
				this.searchDataLeft = d
			},
			searchRight(d) {
				/*私有*/
				this.searchDataRight = d
			},
			add() {
				/*私有*/
				if (this.addUrl) {
					this.fetchX('add')
				}
			},
			remove() {
				/*私有*/
				if (this.deleteUrl) {
					this.fetchX('delete')
				}
			},
			addAll() {
				/*私有*/
				if (this.addAllUrl && this.addUrl) {
					this.fetchX('addAll')
				}
			},
			removeAll() {
				/*私有*/
				if (this.deleteAllUrl) {
					this.fetchX('deleteAll')
				}
			},
			fetchX(action) {
				/*私有*/
				let method = this[action + 'Method']
				let url = this[action + 'Url']
				let data = {}
				let msg = ''
				switch (action) {
					case 'add':
						data = this.addParamsHandle(this.rSelection)
						msg = this.t('r.add')
						break
					case 'delete':
						data = this.deleteParamsHandle(this.lSelection)
						msg = this.t('r.remove')
						break
					case 'addAll':
						data = this.addAllParamsHandle(this.rightTableSearchData)
						msg = this.t('r.addAll')
						break
					case 'deleteAll':
						data = this.deleteAllParamsHandle(this.leftTableSearchData)
						msg = this.t('r.removeAll')
						break
				}
				if (url) {
					this.$fetch[method](url, data, null, [], { spin: true }, false)
						.then((r) => {
							if (r?.code === 0) {
								this.$swal(msg + this.t('r.success'), r?.message || '', 'success')
								if (this.$refs.lTabRef) {
									this.$refs.lTabRef.getTableData()
								}
								if (this.$refs.rTabRef) {
									this.$refs.rTabRef.getTableData()
								}
								this.$emit('transferred')
							} else {
								this.$swal(msg + this.t('r.failed'), r?.message || '', 'error')
							}
						})
						.catch(() => {
							this.$swal(msg + this.t('r.error'), '', 'error')
						})
				}
			}
		}
	}
</script>
