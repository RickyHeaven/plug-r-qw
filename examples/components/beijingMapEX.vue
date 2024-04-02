<template>
	<echart-map
		:title="title"
		:mapItemStyle="mapItemStyle"
		:mapLabel="mapLabel"
		:tooltip="tooltip"
		name="beijing-map"
		ref="beijing-map"
		widthT="100%"
		heightT="100%"
	/>
</template>

<script>
	//引入echarts对象
	import * as echarts from 'echarts'
	//引入地图JSON文件，资源来自依赖包
	import beijing from 'china-map-data/province/beijing'
	export default {
		name: 'beijingMapEX',
		data() {
			return {}
		},
		mounted() {
			this.$nextTick(() => {
				//注册地图，由示例页面来处理JSON数据
				this.regionName('beijing')
				this.$refs['beijing-map'].initEcharts('beijing', '北京')
			})
		},
		methods: {
			//注册地图JSON文件，由页面例子来处理
			regionName(name) {
				echarts.registerMap(name, beijing)
			},
			//地图区域颜色回调函数
			mapItemStyle() {
				return {
					normal: {
						borderWidth: 1, //区域边框宽度
						borderColor: '#000', //区域边框颜色
						areaColor: '#edf2fa' //区域颜色
					},
					emphasis: {
						borderWidth: 2,
						borderColor: '#9c9c9c',
						areaColor: '#74d24b'
					}
				}
			},
			title() {
				return {
					text: '自定义显示指定地图区域（北京市）',
					textStyle: {
						color: '#000',
						fontSize: 28
					},
					left: 'center',
					top: '20px'
				}
			},
			//地图区域标签默认颜色回调，可定义的颜色之多，请参考echarts文档
			mapLabel() {
				return {
					normal: {
						show: true, //显示省份标签
						textStyle: {
							//省份标签字体颜色
							color: '#323232',
							fontSize: 12
						}
					},
					emphasis: {
						//对应的鼠标悬浮效果
						show: true,
						textStyle: {
							color: '#3b7ec3'
						}
					}
				}
			},
			//工具提示框回调
			tooltip(params) {
				return '这是' + params.seriesName + '的' + params.name
			}
		}
	}
</script>
