<template>
	<echart-map
		:title="title"
		:geoItemStyle="geoItemStyle"
		:mapLabel="mapLabel"
		name="china-map-three"
		ref="china-map-three"
		:widthT="widthT"
		:heightT="heightT"
		map-type="migration"
		:migrationData="migrationData"
		:scatter-label="scatterLabel"
		scatterSymbol="circle"
		scatterLabelPosition="right"
		:scatterGeoItemStyle="scatterGeoItemStyle"
		:maxSize4Pin="20"
		:minSize4Pin="10"
	/>
</template>

<script>
	//引入echarts对象
	import * as echarts from 'echarts'
	//引入地图JSON文件，资源来自依赖包
	import { china } from 'china-map-data'
	export default {
		name: 'chinaMapThreeEX',
		props: {
			widthT: {
				type: String,
				default() {
					return '100%'
				}
			},
			heightT: {
				type: String,
				default() {
					return '100%'
				}
			}
		},
		data() {
			return {
				migrationData: [
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '长春', value: 66, lngLat: [125.8154, 44.2584] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '长沙', value: 66, lngLat: [113.0823, 28.2568] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '贵阳', value: 66, lngLat: [106.6992, 26.7682] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '杨凌', value: 66, lngLat: [109.1162, 34.2004] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '深圳', value: 66, lngLat: [114.5435, 22.5439] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '济南', value: 66, lngLat: [117.1582, 36.8701] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '海口', value: 66, lngLat: [110.3893, 19.8516] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '沈阳', value: 66, lngLat: [123.1238, 42.1216] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '武汉', value: 66, lngLat: [114.3896, 30.6628] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '昆明', value: 66, lngLat: [102.9199, 25.4663] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '重庆', value: 11880, lngLat: [106.553263, 29.564724] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '杭州', value: 66, lngLat: [119.5313, 29.8773] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '成都', value: 66, lngLat: [103.9526, 30.7617] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '拉萨', value: 66, lngLat: [91.1865, 30.1465] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '天津', value: 66, lngLat: [117.4219, 39.4189] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '呼和浩特', value: 66, lngLat: [111.4124, 40.4901] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '哈尔滨', value: 66, lngLat: [127.9688, 45.368] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '北京', value: 66, lngLat: [116.4551, 40.2539] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '南宁', value: 66, lngLat: [108.479, 23.1152] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '南昌', value: 66, lngLat: [116.0046, 28.6633] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '乌鲁木齐', value: 66, lngLat: [87.9236, 43.5883] }
					],
					[
						{ name: '重庆', lngLat: [106.553263, 29.564724] },
						{ name: '上海', value: 66, lngLat: [121.4648, 31.2891] }
					]
				]
			}
		},
		mounted() {
			this.$nextTick(() => {
				//注册地图，由示例页面来处理JSON数据
				this.regionName('china')
				//渲染地图，由组件来处理逻辑
				this.$refs['china-map-three'].initEcharts('china', '中国')
			})
		},
		methods: {
			scatterGeoItemStyle() {
				//标点样式配置
				return {
					normal: {
						color: '#fff'
					}
				}
			},
			//注册地图JSON文件，由页面例子来处理
			regionName(name) {
				echarts.registerMap(name, china)
			},
			scatterLabel(params) {
				//params返回数组形式，内容分别是经度、维度、值
				return params.data.name + '：' + params.data.value[2]
			},
			//地图标题回调函数
			title() {
				return {
					text: '迁途图',
					textStyle: {
						color: '#2C68FF',
						fontSize: 14
					},
					left: 'center',
					top: '22%'
				}
			},
			mapLabel() {
				return {
					normal: {
						show: true, //显示省份标签
						textStyle: {
							//省份标签字体颜色
							color: '#fff',
							fontSize: 10
						}
					},
					emphasis: {
						//对应的鼠标悬浮效果
						show: true,
						textStyle: {
							color: '#F53131'
						}
					}
				}
			},
			//地理颜色回调，可定义的颜色之多，请参考echarts文档
			geoItemStyle() {
				return {
					normal: {
						areaColor: '#0B46BD',
						borderColor: '#1a8ce9'
					},
					emphasis: {
						borderWidth: 0,
						borderColor: '#0066ba',
						areaColor: '#0494e1',
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		}
	}
</script>
