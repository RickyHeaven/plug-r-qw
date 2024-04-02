<template>
	<echart-map
		:title="title"
		:geoItemStyle="geoItemStyle"
		:mapLabel="mapLabel"
		:mapItemStyle="mapItemStyle"
		:seriesData="seriesData"
		scatterSymbol="arrow"
		name="china-map-two"
		ref="china-map-two"
		:inRangeColor="['#4b85fa', '#175ce5', '#0a2966']"
		widthT="100%"
		heightT="100%"
		:roam="false"
	/>
</template>

<script>
	//引入echarts对象
	import * as echarts from 'echarts'
	//引入地图JSON文件，资源来自依赖包
	import { china } from 'china-map-data'
	export default {
		name: 'chinaMapTwoEX',
		data() {
			return {
				seriesData: []
			}
		},
		mounted() {
			// 随便造点数据
			this.seriesData = [
				{
					name: '宁夏',
					value: 850
				},
				{
					name: '北京',
					value: 850
				},
				{
					name: '新疆',
					value: 600
				},
				{
					name: '重庆',
					value: 800
				},
				{
					name: '四川',
					value: 1000
				}
			]
			this.$nextTick(() => {
				//注册地图，由示例页面来处理JSON数据
				this.regionName('china')
				//渲染地图，由组件来处理逻辑
				this.$refs['china-map-two'].initEcharts('china', '中国')
			})
		},
		methods: {
			//注册地图JSON文件，由页面例子来处理
			regionName(name) {
				echarts.registerMap(name, china)
			},
			//地图标题回调函数
			title() {
				return {
					text: '自定义阴影遮罩标点地图样式',
					textStyle: {
						color: '#fff',
						fontSize: 28
					},
					left: 'center',
					top: '20px'
				}
			},
			mapLabel() {
				return {
					normal: {
						show: true, //显示省份标签
						textStyle: {
							//省份标签字体颜色
							color: '#323232',
							textBorderColor: '#fff',
							textBorderWidth: 2
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
			mapItemStyle() {
				return {
					normal: {
						borderWidth: 0.4, //区域边框宽度
						borderColor: '#62aef5', //区域边框颜色
						areaColor: '#edf2fa' //区域颜色
					},
					emphasis: {
						borderWidth: 0.5,
						borderColor: '#4b0082',
						areaColor: '#ece39e',
						shadowOffsetX: 5,
						shadowOffsetY: 10,
						shadowBlur: 5,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			},
			//地图区域默认颜色回调，可定义的颜色之多，请参考echarts文档
			geoItemStyle() {
				return {
					normal: {
						//区域颜色没有值的时候默认颜色
						areaColor: '#edf2fa',
						shadowBlur: 10,
						shadowColor: '#051433',
						shadowOffsetX: 10,
						shadowOffsetY: 20
					}
				}
			}
		}
	}
</script>
