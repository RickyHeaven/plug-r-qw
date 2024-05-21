<!--
    @created 2022.5.6
    @author - XP email:13638232495@139.com
    @description echart地图组件
-->
<template>
	<div class="echart-main" :style="{ width: widthT, height: heightT }">
		<Button @click="oback" :style="btnStyle" v-show="back" id="back" class="hidden" type="primary">返回全国</Button>
		<div class="echart-map" :id="name"></div>
	</div>
</template>
<script>
	let provinces = [
		'shanghai',
		'hebei',
		'shanxi',
		'neimenggu',
		'liaoning',
		'jilin',
		'heilongjiang',
		'jiangsu',
		'zhejiang',
		'anhui',
		'fujian',
		'jiangxi',
		'shandong',
		'henan',
		'hubei',
		'hunan',
		'guangdong',
		'guangxi',
		'hainan',
		'sichuan',
		'guizhou',
		'yunnan',
		'xizang',
		'shanxi1',
		'gansu',
		'qinghai',
		'ningxia',
		'xinjiang',
		'beijing',
		'tianjin',
		'chongqing',
		'xianggang',
		'aomen'
	]
	let provincesText = [
		'上海',
		'河北',
		'山西',
		'内蒙古',
		'辽宁',
		'吉林',
		'黑龙江',
		'江苏',
		'浙江',
		'安徽',
		'福建',
		'江西',
		'山东',
		'河南',
		'湖北',
		'湖南',
		'广东',
		'广西',
		'海南',
		'四川',
		'贵州',
		'云南',
		'西藏',
		'陕西',
		'甘肃',
		'青海',
		'宁夏',
		'新疆',
		'北京',
		'天津',
		'重庆',
		'香港',
		'澳门'
	]

	//引入echarts对象
	import * as echarts from 'echarts'

	export default {
		name: 'echartMap',
		props: {
			name: {
				//地图名称，必传
				type: String,
				default: ''
			},
			roam: {
				//迁徒图缩放功能，默认为true
				type: Boolean,
				default: true
			},
			setSeries: {
				//自定义series内容配置，定义后会覆盖组件自带的series配置
				type: Array,
				default: () => {
					return []
				}
			},
			setGeo: {
				//地图地理配置
				type: Function,
				default: (pName, me) => {
					return {
						show: true,
						map: pName,
						roam: me.roam,
						label: {
							normal: {
								show: false
							},
							emphasis: {
								show: false
							}
						},
						itemStyle: me.geoItemStyle() //地理全局颜色，因定制化的可能性较多，由回调函数执行
					}
				}
			},
			mapType: {
				//地图类型，默认为数据展示型地图，其他类型有：migration(迁徒图)
				type: String,
				default: 'normal'
			},
			migrationData: {
				//迁徒图数据
				type: Array,
				default: () => {
					//默认数据例子
					return [
						[
							{ name: '重庆', lngLat: [106.553263, 29.564724] },
							{ name: '北京', lngLat: [116.399014, 39.924869], value: 666 }
						]
					]
				}
			},
			setLine: {
				//配置线条，没有的话默认使用组件内的配置
				type: Array,
				default: () => {
					return []
				}
			},
			setScatter: {
				//配置散点（气泡），没有的话默认使用组件内的配置
				type: Array,
				default: () => {
					return []
				}
			},
			migrationRippleEffect: {
				type: Function,
				default: () => {
					return {
						brushType: 'stroke' //波纹的绘制方式，可选 'stroke' 和 'fill'。。
					}
				}
			},
			migrationEffect: {
				// 迁徒图第一层配置
				type: Function,
				default: () => {
					return {
						show: true,
						period: 6, // 特效动画的时间，单位为 s
						trailLength: 0.1, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
						color: '#46bee9', // 移动箭头颜色
						symbol: 'pin', // 箭头的svg，有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
						symbolSize: 6 // 特效标记的大小
					}
				}
			},
			migrationLineStyle: {
				// 迁徒图第一层线条样式
				type: Function,
				default: () => {
					return {
						normal: {
							color: '#fff',
							width: 0,
							curveness: 0.2 // 幅度
						}
					}
				}
			},
			migrationEffect2: {
				// 迁徒图第二层线条配置
				type: Function,
				default: () => {
					return {
						show: true,
						period: 6, // 特效动画的时间，单位为 s
						trailLength: 0, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
						symbol: 'pin', // 箭头的svg，有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
						symbolSize: 6 // 特效标记的大小
					}
				}
			},
			migrationLineStyle2: {
				// 迁徒图第二层线条样式
				type: Function,
				default: () => {
					return {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								0,
								1,
								[
									{
										offset: 0,
										color: '#FFFFA8' // 出发
									},
									{
										offset: 1,
										color: '#58B3CC' // 结束 颜色
									}
								],
								false
							),
							width: 1.5,
							opacity: 0.4,
							curveness: 0.2
						}
					}
				}
			},
			btnStyle: Object, //返回按钮样式
			scatterLabel: {
				//标点回调函数
				type: Function,
				default: (params) => {
					//params返回数组形式，内容分别是经度、维度、值
					return params.data.value[2]
				}
			},
			tooltip: {
				//工具提示框回调函数
				type: Function,
				default: () => {
					return '随便定义任何内容也是可以的，通过回调函数取'
				}
			},
			scatterLabelPosition: {
				//标记文字位置，top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight
				type: String,
				default: 'inside'
			},
			scatterGeoShow: {
				//是否显示标点，默认显示
				type: Boolean,
				default: true
			},
			scatterGeoItemStyle: {
				//标点样式回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							color: '#F62157'
						}
					}
				}
			},
			scatterGeoLabelTextStyle: {
				//气泡标签回调函数
				type: Function,
				default: () => {
					return {
						color: '#fff',
						fontSize: 9
					}
				}
			},
			geoItemStyle: {
				//地理全局颜色回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							areaColor: '#3c8dbc', // 没有值得时候颜色
							borderColor: '#097bba'
						},
						emphasis: {
							areaColor: '#fbd456' // 鼠标滑过选中的颜色
						}
					}
				}
			},
			title: {
				//标题回调函数
				type: Function,
				default: () => {
					return {
						show: false
					}
				}
			},
			mapLabel: {
				//地图区域标签颜色回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							show: true, //显示省份标签
							textStyle: {
								color: '#895139'
							} //省份标签字体颜色
						},
						emphasis: {
							//对应的鼠标悬浮效果
							show: true,
							textStyle: {
								color: '#323232'
							}
						}
					}
				}
			},
			mapItemStyle: {
				//地图区域颜色回调函数
				type: Function,
				default: () => {
					return {
						normal: {
							borderWidth: 0.5, //区域边框宽度
							borderColor: '#0550c3', //区域边框颜色
							areaColor: '#0b7e9e' //区域颜色
						},
						emphasis: {
							borderWidth: 0.5,
							borderColor: '#4b0082',
							areaColor: '#ece39e'
						}
					}
				}
			},
			scatterSymbol: {
				//标点类型，还可以自定义图片地址
				type: String,
				default: 'pin'
			},
			maxSize4Pin: {
				//侧边最大值
				type: Number,
				default: 40
			},
			minSize4Pin: {
				//侧边最小值
				type: Number,
				default: 30
			},
			seriesData: {
				//省级数据
				type: Array,
				default: () => {
					return []
				}
			},
			seriesDataPro: {
				//市区县数据
				type: Array,
				default: () => {
					return []
				}
			},
			inRangeColor: {
				//范围区域颜色，从最大值到最小值的颜色区分
				type: Array,
				default: () => {
					return []
				}
			},
			visualMap: {
				type: Function,
				default: (me, min, max) => {
					return {
						show: me.visualMapShow,
						min: min, //侧边滑动的最小值，从数据中获取
						max: max, //侧边滑动的最大值，从数据中获取
						left: me.visualMapLeft, //组件位置
						top: me.visualMapTop, //组件位置
						inverse: me.visualMapInverse, //是否反转 visualMap 组件
						itemHeight: me.visualMapHeight, //图形的高度，即长条的高度
						itemWidth: me.visualMapWidth, //图形的宽度，即长条的高度
						text: me.visualMapText, //文本，默认为数值文本
						textStyle: me.visualMapTextStyle(), //字体样式
						calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
						seriesIndex: me.visualMapSeriesIndex, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
						orient: me.visualMapOrient, //如何放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）
						inRange: {
							color: me.inRangeColor //范围区域颜色
						}
					}
				}
			},
			visualMapText: {
				type: Array,
				default: () => {
					return ['高', '低']
				}
			},
			visualMapTextStyle: {
				//视觉映射字体样式
				type: Function,
				default: () => {
					return {}
				}
			},
			visualMapShow: {
				//视觉映射组件，默认不显示
				type: Boolean,
				default: false
			},
			visualMapOrient: {
				//如何放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）。
				type: String,
				default: 'horizontal'
			},
			visualMapSeriesIndex: {
				//指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
				type: Number,
				default: 1
			},
			visualMapHeight: {
				//视觉映射组件高度
				type: Number,
				default: null
			},
			visualMapWidth: {
				//视觉映射组件宽度
				type: Number,
				default: null
			},
			visualMapInverse: {
				//是否反转 visualMap 组件。默认false
				type: Boolean,
				default: false
			},
			visualMapLeft: {
				//视觉映射组件距离左边位置，默认5%
				type: String,
				default: '5%'
			},
			visualMapTop: {
				//视觉映射组件距离头部位置，默认95%
				type: String,
				default: '95%'
			},
			scatterGeoZlevel: {
				type: Number,
				default: 6
			},
			widthT: {
				//you know
				type: String,
				default: '870px'
			},
			heightT: {
				//you know
				type: String,
				default: '384px'
			}
		},
		data() {
			return {
				mapName: 'china', //地域名称
				myChart: null, //地图对象
				back: false //返回按钮是否显示的状态
			}
		},
		mounted() {
			//实例化DOM元素（ID,国家JSON文件）
			this.myChart = echarts.init(document.getElementById(this.name))
			// 全国时，添加click 进入省级
			let me = this
			me.myChart.on('click', (param) => {
				if (param?.data?.provinceKey) {
					if (me.seriesDataPro.length) {
						//显示返回按钮
						me.back = true
						// 遍历取到provincesText 中的下标  去拿到对应的省js
						for (let i = 0; i < provincesText.length; i++) {
							if (param.name === provincesText[i]) {
								me.mapName = provinces[i]
								//显示对应省份的方法
								me.$emit('on-click-map', provinces[i], provincesText[i])
								me.initEcharts(provinces[i], provincesText[i])
								break
							}
						}
					}
				}
			})
			//自适应样式
			if (window.echartResizeMJ === undefined) {
				window.echartResizeMJ = {}
			}
			if (!window.echartResizeMJ[me.name]) {
				window.addEventListener('resize',me.resizeHandler)
			}
		},
		methods: {
			resizeHandler(){
				if (this.myChart) {
					this.myChart.resize()
					window.echartResizeMJ[this.name] = true
				}
			},
			/**
			 * 加载地图实例化内容结构，canvas渲染基于echarts技术，数据结构基于高德地图技术
			 * 目前没有找到更好的引入方式实现，import动态加载不行，require形式也不行
			 * 欢迎其他开发者提供更好的懒加载方式，提升代码优雅性
			 * **/
			initEcharts(pName, Chinese_) {
				let max = 0,
					min = 0
				//地图类型
				switch (this.mapType) {
					case 'normal':
						let tmpSeriesData = pName === 'china' ? this.seriesData : this.seriesDataPro
						//定义侧边滑动的最大值和最小值，根据返回的数据来，没有值默认都为0
						if (tmpSeriesData?.length > 0) {
							max = Math.max.apply(
								Math,
								tmpSeriesData.map((o) => {
									return o.value
								})
							)
						}
						this.loadNormalMap(pName, Chinese_, min, max, tmpSeriesData) //渲染普通数据型地图
						break
					case 'migration':
						//定义标点大小，根据数据自动变化,maxSize4Pin和minSize4Pin设置最大图标和最小图标范围
						if (this.migrationData) {
							max = Math.max.apply(
								Math,
								this.migrationData.map((item) => {
									return item[1].value
								})
							)
						}
						this.loadMigrationMap(pName, min, max) //渲染迁徒型地图实例化对象
						break
				}
			},
			//迁徒型地图实例化对象
			loadMigrationMap(pName, min, max) {
				//事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
				let me = this
				let series = []

				// 没有配置线条的话默认使用组件内的线条配置
				if (me.setLine.length <= 0) {
					series = series.concat(me.normalLine())
				} else {
					series = series.concat(me.setLine)
				}

				//如果有设置scatterGeoShow，增加地图上出现标点的series配置，属于echart散点（气泡）图
				if (me.scatterGeoShow) {
					// 没有配置散点的话默认使用组件内的散点（气泡）配置
					if (me.setScatter.length <= 0) {
						series = series.concat(me.normalScatter(min, max))
					} else {
						series = series.concat(me.setScatter)
					}
				}

				// 指定地图的配置项和数据
				let option = {
					//标题
					title: me.title(),
					//工具提示
					tooltip: {
						trigger: 'item',
						// 鼠标滑过显示的数据
						formatter: (params) => {
							//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
							return me.tooltip(params)
						}
					},
					//地理位置
					geo: me.setGeo(pName, me),
					series: []
				}

				//如果有自定义series配置，覆盖所有之前的配置
				if (me.setSeries.length > 0) {
					series = this.setSeries
				}

				// 使用刚指定的配置项和数据显示图表
				option.series = series
				me.myChart.setOption(option)
			},
			//数据型地图实例化对象
			loadNormalMap(pName, Chinese_, min, max, data) {
				let tmpSeriesData = data
				//事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
				let me = this,
					series = []
				// 指定地图的配置项和数据
				let option = {
					//标题
					title: me.title(),
					//工具提示
					tooltip: {
						trigger: 'item',
						// 鼠标滑过显示的数据
						formatter: (params) => {
							//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
							return me.tooltip(params)
						}
					},
					//视觉映射组件
					visualMap: this.visualMap(me, min, max),
					//地理位置
					geo: me.setGeo(pName, me),
					series: []
				}

				//配置底图
				series.push({
					name: Chinese_ || pName,
					type: 'map',
					mapType: pName,
					roam: me.roam, //是否开启鼠标缩放和平移漫游
					data: tmpSeriesData,
					selectedMode: 'single',
					label: me.mapLabel(),
					itemStyle: me.mapItemStyle()
				})

				//如果有设置scatterGeoShow，增加地图上出现标点的series配置，属于echart散点（气泡）图
				if (me.scatterGeoShow) {
					if (this.setScatter.length <= 0) {
						series = series.concat(this.setMark(tmpSeriesData, max, min))
					} else {
						series = series.concat(this.setScatter)
					}
				}

				//如果有设置inRangeColor来增加城市颜色从最小数据到最大数据的强调色配置，属于echart散点（气泡）图，在series数组中优先级最高
				if (me.inRangeColor.length > 0) {
					series.unshift(this.setRegionColor(tmpSeriesData))
				}

				//如果有自定义series配置，覆盖所有之前的配置
				if (me.setSeries.length > 0) {
					series = this.setSeries
				}

				// 使用刚指定的配置项和数据显示图表
				option.series = series
				me.myChart.setOption(option)
			},
			convertCityData(data) {
				let res = []
				for (let i = 0; i < data.length; i++) {
					let dataItem = data[i]
					let fromCoord = dataItem[0].lngLat
					let toCoord = dataItem[1].lngLat
					if (fromCoord && toCoord) {
						res.push([
							{
								coord: fromCoord
							},
							{
								coord: toCoord
							}
						])
					}
				}
				return res
			},
			// 转换数据用于标记，有值的情况下才可以标记
			convertData(data) {
				let geoCoordMap = this.getGeoCoordMap(this.mapName)
				let res = []
				for (let i = 0; i < data.length; i++) {
					// 数据的名字对应的经纬度
					let geoCoord = geoCoordMap[data[i].name]
					// 如果数据data对应上
					if (geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						})
					}
				}
				return res
			},
			// 用名称获取经纬度
			getGeoCoordMap(name) {
				name = name ? name : 'china'
				// 获取地图数据对象
				let geoCoordMap = {}
				// loading start
				this.myChart.showLoading()
				let mapFeatures = echarts.getMap(name).geoJson.features
				// loading end
				this.myChart.hideLoading()
				mapFeatures.forEach(function (v) {
					// 地区名称
					let name = v.properties.name
					// 地区经纬度
					geoCoordMap[name] = v.properties.cp
				})
				return geoCoordMap
			},
			//返回地域事件，目前只有省级到中国两级，此处可以升级
			oback() {
				//隐藏返回按钮
				this.back = false
				this.mapName = 'china'
				this.$emit('on-click-map', this.mapName, '中国')
			},
			//设置地图默认散点（气泡）配置
			normalScatter(min, max) {
				return [
					{
						//标记
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: this.migrationRippleEffect(),
						symbol: this.scatterSymbol, //标点类型
						label: {
							normal: {
								show: this.scatterGeoShow,
								position: this.scatterLabelPosition,
								formatter: (params) => {
									//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
									return this.scatterLabel(params)
								},
								textStyle: this.scatterGeoLabelTextStyle()
							}
						},
						symbolSize: (val) => {
							let a = (this.maxSize4Pin - this.minSize4Pin) / (max - min)
							let b = this.maxSize4Pin - a * max
							return a * val[2] + b
						},
						itemStyle: this.scatterGeoItemStyle(),
						data: this.migrationData.map((dataItem) => {
							return {
								name: dataItem[1].name,
								value: dataItem[1].lngLat.concat([dataItem[1].value])
							}
						})
					}
				]
			},
			//设置地图默认线条配置
			normalLine() {
				return [
					{
						// 光影特效用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
						// effect出发到目的地的白色尾巴线条特效的配置
						type: 'lines',
						zlevel: 1,
						effect: this.migrationEffect(),
						// lineStyle出发到目的地的线条颜色
						lineStyle: this.migrationLineStyle(),
						data: this.convertCityData(this.migrationData) //开始到结束数据
					},
					{
						// 线条+第二层光影
						type: 'lines',
						zlevel: 2,
						effect: this.migrationEffect2(),
						lineStyle: this.migrationLineStyle2(),
						data: this.convertCityData(this.migrationData)
					}
				]
			},
			/**
       地图区域颜色，属于echart散点（气泡）图。直角坐标系上的散点图可以用来展现数据的 x，y 之间的关系，
       如果数据项有多个维度，其它维度的值可以通过不同大小的 symbol 展现成气泡图，也可以用颜色来表现。
       这些可以配合 visualMap 组件完成
       注意scatter有先后优先级顺序！
       **/
			setRegionColor(data) {
				return {
					type: 'scatter',
					coordinateSystem: 'geo',
					data: data
				}
			},
			/**
       地图标点，属于echart散点（气泡）图。直角坐标系上的散点图可以用来展现数据的 x，y 之间的关系，
       如果数据项有多个维度，其它维度的值可以通过不同大小的 symbol 展现成气泡图，也可以用颜色来表现。
       这些可以配合 visualMap 组件完成
       **/
			setMark(data, max, min) {
				return [
					{
						type: 'scatter',
						coordinateSystem: 'geo',
						symbol: this.scatterSymbol, //标点类型
						symbolSize: (val) => {
							let a = (this.maxSize4Pin - this.minSize4Pin) / (max - min)
							let b = this.maxSize4Pin - a * max
							return a * val[2] + b
						},
						label: {
							normal: {
								show: this.scatterGeoShow,
								position: this.scatterLabelPosition,
								formatter: (params) => {
									//回调函数调用的是父级函数，因为各种业务导致鼠标移入时情况都不一样，所以要把函数释放出来
									return this.scatterLabel(params)
								},
								textStyle: this.scatterGeoLabelTextStyle()
							}
						},
						itemStyle: this.scatterGeoItemStyle(),
						zlevel: this.scatterGeoZlevel,
						data: this.convertData(data)
					}
				]
			}
		},
		//生命周期结束前
		beforeDestroy() {
			//销组件毁时也一并销毁地图实例，释放内存
			if (this.myChart) {
				this.myChart.clear()
				this.myChart.dispose()
				this.myChart = null
				window.echartResizeMJ = {}
			}
			window.removeEventListener('resize',this.resizeHandler)
		}
	}
</script>
