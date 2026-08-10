<!--created 2019.10.17-->
<!--author Ricky email:zhangqingcq@foxmail.com-->

<template>
	<div :style="containerStyle" :class="inputInMap ? 'containerIKJ' : 'containerMapAddress'">
		<div class="searchInputWrap">
			<Input
				ref="mapInput"
				v-model="searchText"
				:class="inputInMap ? { mapInputIKJ: showMap } : 'searchInput'"
				:placeholder="placeholder || t('r.search')"
				:disabled="disabled"
				search
				enter-button
				@on-enter="handleSearch"
				@on-search="handleSearch"
			/>

			<div v-show="addressList.length > 0" class="addressListWrap">
				<div class="addressList">
					<div v-for="(item, index) in addressList" :key="index" class="addressItem" @click="selectAddress(item)">
						<span class="addressName">{{ item.name }}</span>
						<span v-if="typeof item.address === 'string'" class="addressDetail">{{ item.address }}</span>
					</div>
				</div>
			</div>
		</div>

		<div v-show="showMap" :style="mapStyle" :ref="vidT" :id="vidT"></div>
	</div>
</template>

<script>
	import { lazyAMapApiLoaderInstance } from 'vue-amap'
	import _ from 'lodash'
	import Locale from '../../mixins/locale'
	import { setTimeout } from '../../utils/timer'

	export default {
		name: 'inputMap',
		mixins: [Locale],
		model: {
			prop: 'valProp',
			event: 'update-value'
		},
		props: {
			valProp: {
				type: Object,
				default: null
			},
			width: {
				type: [String, Number],
				default: '100%'
			},
			height: {
				type: [String, Number],
				default: null
			},
			placeholder: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: false
			},
			showMap: {
				type: Boolean,
				default: true
			},
			inputInMap: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				searchText: '',
				addressList: [],
				mapX: null,
				geoCoder: null,
				autoCompleteX: null,
				infoWindow: null,
				mapReady: false
			}
		},
		computed: {
			vidT() {
				return 'vidT' + Math.floor(Math.random() * 1000000000)
			},
			widthT() {
				if (_.isNumber(this.width)) {
					return this.width + 'px'
				} else {
					return this.width
				}
			},
			heightT() {
				if (_.isNumber(this.height)) {
					return this.height + 'px'
				} else if (this.height) {
					return this.height
				} else if (_.isNumber(this.width)) {
					return this.width * 0.66 + 'px'
				} else {
					return '200px'
				}
			},
			containerStyle() {
				return {
					width: this.widthT,
					position: 'relative'
				}
			},
			mapStyle() {
				if (this.inputInMap) {
					return {
						width: this.widthT,
						height: this.heightT,
						marginTop: '6px',
						opacity: this.showMap ? 1 : 0,
						position: this.showMap ? 'relative' : 'absolute',
						top: this.showMap ? 0 : '-10000px'
					}
				} else {
					return {
						width: this.widthT,
						height: this.heightT,
						marginTop: '6px'
					}
				}
			}
		},
		watch: {
			valProp(after) {
				if (after?.name) {
					this.searchText = after.name
				}
				if (this.showMap && after?.lng && after?.lat) {
					this.createMarker({
						lng: after.lng,
						lat: after.lat,
						name: after.name
					})
				}
			}
		},
		mounted() {
			this.initSearchText()
			this.checkHeight()
		},
		beforeDestroy() {
			if (!this.mapX) {
				return
			}
			this.mapX.destroy()
			this.mapX = null
			this.geoCoder = null
			this.autoCompleteX = null
			this.infoWindow = null
		},
		methods: {
			initSearchText() {
				if (this.valProp?.name) {
					this.searchText = this.valProp.name
				}
			},
			checkHeight() {
				if (this.showMap && (this.$refs?.[this.vidT]?.clientHeight < 10 || !this.$refs[this.vidT])) {
					setTimeout(this.checkHeight, 100)
				} else {
					setTimeout(this.initMap, 1000)
				}
			},
			initMap() {
				if (!lazyAMapApiLoaderInstance) {
					console.error('高德地图示例未初始化，lazyAMapApiLoaderInstance为null')
					return
				}
				lazyAMapApiLoaderInstance.load().then(() => {
					this.mapX = new AMap.Map(this.vidT, {}).on('complete', () => {
						this.geoCoder = new AMap.Geocoder()
						this.mapReady = true

						if (this.valProp?.lng && this.valProp?.lat) {
							this.createMarker({
								lng: this.valProp.lng,
								lat: this.valProp.lat,
								name: this.valProp.name
							})
						}
					})
				})
			},
			handleSearch() {
				if (!this.searchText.trim()) return
				if (this.showMap && !this.mapReady) {
					console.warn('地图未就绪，请稍后重试')
					return
				}

				lazyAMapApiLoaderInstance.load().then(() => {
					if (!this.autoCompleteX) {
						this.autoCompleteX = new AMap.Autocomplete({
							city: '全国',
							type: ''
						})
					}

					this.autoCompleteX.search(this.searchText, (status, result) => {
						if (status === 'complete' && result.info === 'OK') {
							this.addressList = result.tips
								.slice(0, 10)
								.filter((item) => item.name && (item.address || (item.location?.lng && item.location?.lat)))
								.map((item) => ({
									name: item.name,
									address: item.address,
									lng: item.location?.lng,
									lat: item.location?.lat
								}))
						} else {
							this.addressList = []
							console.warn('地址搜索失败', result)
						}
					})
				})
			},
			selectAddress(item) {
				this.searchText = item.name
				this.addressList = []

				if (typeof item.lng === 'number' && typeof item.lat === 'number') {
					if (this.showMap) {
						this.createMarker({
							name: item.name,
							lng: item.lng,
							lat: item.lat
						})
					}
					this.$emit('update-value', {
						name: item.name,
						lng: item.lng,
						lat: item.lat
					})
					this.$emit('on-change', {
						name: item.name,
						lng: item.lng,
						lat: item.lat
					})
				} else if (item.name) {
					if (this.showMap) {
						this.geoCoder?.getLocation(item.name, (status, result) => {
							if (status === 'complete' && result.info === 'OK' && result.geocodes?.length > 0) {
								const location = result.geocodes[0].location
								this.createMarker({
									name: item.name,
									lng: location.lng,
									lat: location.lat
								})
								this.$emit('update-value', {
									name: item.name,
									lng: location.lng,
									lat: location.lat
								})
								this.$emit('on-change', {
									name: item.name,
									lng: location.lng,
									lat: location.lat
								})
							} else {
								console.warn('地址地理编码失败', result)
							}
						})
					} else {
						this.$emit('update-value', {
							name: item.name
						})
						this.$emit('on-change', {
							name: item.name
						})
					}
				}
			},
			createMarker({ lng, lat, name }) {
				if (typeof lng !== 'number' || typeof lat !== 'number') {
					console.warn('无效的坐标数据:', { lng, lat })
					return
				}
				if (!this.mapX) {
					console.warn('地图实例不存在')
					return
				}

				this.mapX.clearMap()
				let point = new AMap.LngLat(lng, lat)
				this.mapX.setCenter(point)

				let marker = new AMap.Marker({
					map: this.mapX,
					position: point,
					draggable: true
				})

				this.getAddress(lng, lat)
				marker.on('dragend', () => {
					let dragPoint = marker.getPosition()
					this.$emit('update-value', {
						name: name || null,
						lng: dragPoint.lng,
						lat: dragPoint.lat
					})
					this.getAddress(dragPoint.lng, dragPoint.lat)
				})
				marker.on('click', (e) => {
					if (this.infoWindow) {
						this.infoWindow.open(this.mapX, e?.target?.getPosition?.())
					}
				})
				this.mapX.setFitView()
			},
			getAddress(lng, lat) {
				const infoWindowClass = this.inputInMap ? 'mapInfoWindowIKJ' : 'mapInfoWindowMA'
				this.geoCoder?.getAddress([lng, lat], (status, result) => {
					if (status === 'complete' && result.info === 'OK' && result.regeocode && result.regeocode.formattedAddress) {
						this.infoWindow = new AMap.InfoWindow({
							isCustom: true,
							content: '<div class="' + infoWindowClass + '">' + result.regeocode.formattedAddress + '</div>',
							offset: new AMap.Pixel(16, -45),
							closeWhenClickMap: true
						})
					} else {
						this.infoWindow = null
						console.warn('地图获取位置信息失败', result)
					}
				})
			}
		}
	}
</script>