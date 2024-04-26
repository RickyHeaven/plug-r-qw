<!--
    @created 2019.10.8
    @author - XP email:13638232495@139.com
    @description echarts图表组件
-->
<template>
	<div class="echart-cont" :id="name" :style="{ width: widthT, height: heightT }"></div>
</template>
<script>
	import Locale from '../../mixins/locale'
	import $fetch from '../../utils/fetch'

	//引入echarts对象
	import * as echarts from 'echarts'
	//默认主题款式 westeros - 通心粉款式，其他主题可以通过自定义引入echarts依赖后主题但名称theme一定要对应上
	import westeros from './westeros'
	echarts.registerTheme('westeros', westeros)

	export default {
		//图表样式
		name: 'echart',
		mixins: [Locale],
		props: {
			config: Object, //图表配置，可以覆盖整个图表,
			theme: {
				//图表主题名称，不传默认为 westeros - 通心粉款式
				type: String,
				default: 'westeros'
			},
			params: Object, //图表参数
			url: String, //拉取数据的接口地址
			data: Object, //图表默认数据，没有url请求可以展示静态数据
			initData: {
				//初始化数据，即组件创建后自动拉取第一次数据,默认不会
				type: Boolean,
				default: false
			},
			yAxis: {
				//Y轴数据
				type: Object,
				default() {
					return {
						type: 'value'
					}
				}
			},
			xAxis: {
				//X轴数据
				type: Object,
				default() {
					return {
						type: 'category'
					}
				}
			},
			tooltip: {
				//提示框，鼠标悬浮交互时的信息提示
				type: Object,
				default() {
					return {}
				}
			},
			series: {
				//you know
				type: Array,
				default() {
					return []
				}
			},
			name: {
				//图表名称，必传
				type: String,
				default: ''
			},
			title: {
				//图表标题
				type: String
			},
			titleColor: String, //标题颜色
			titleFontSize: Number, //标题字体大小
			titleFontWeight: [
				//标题字体粗细
				String,
				Number
			],
			titleX: String, //标题的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
			titleY: String, //标题的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
			subTitle: {
				//图表副标题
				type: String,
				default: ''
			},
			subTitleColor: String, //副标题颜色
			subTitleFontSize: Number, //副标题字体大小
			legendShow: {
				//是否显示图例，默认为显示
				type: Boolean,
				default: true
			},
			legendType: String, //图例类型，'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用。
			legendColor: String, //图例颜色
			legendFontSize: Number, //图例字体大小
			legendX: String, //图例的水平位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
			legendY: String, //图例的垂直位置，可以是 20 像素值，也可以是'20%'相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
			legendOrient: String, //图例朝向, horizontal -- 水平对齐，vertical -- 垂直对齐
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
				myChart: null, //图表对象
				dataT: this.data,
				yAxisT: this.yAxis,
				xAxisT: this.xAxis,
				seriesT: this.series
			}
		},
		created() {
			//拉取数据
			if (this.initData) {
				this.getData()
					.then((res) => {
						this.init(res)
					})
					.catch((error) => {
						console.warn('代码报错啦~')
						console.warn(error)
					})
			}
		},
		watch: {
			config: {
				handler(after) {
					//静态对象变更
					if (after) {
						this.init()
					}
				},
				deep: true
			},
			data: {
				handler(after) {
					//静态数据变更
					if (after) {
						this.dataT = after
						this.init()
					}
				},
				deep: true
			},
			series: {
				handler(after) {
					//静态数据变更
					if (after) {
						this.seriesT = after
						this.init()
					}
				},
				deep: true
			},
			params: {
				handler(after) {
					//接口参数变更
					if (after) {
						//拉取数据
						this.getData()
							.then((res) => {
								this.init(res)
							})
							.catch((error) => {
								console.warn('代码报错啦~')
								console.warn(error)
							})
					}
				},
				deep: true
			}
		},
		methods: {
			//数据拉取
			getData() {
				return new Promise((resolve, reject) => {
					if (this.url) {
						$fetch
							.get(this.url, this.params)
							.then((r) => {
								if (r.data || r.data === null) {
									if (r.data.charts || r.data.charts === null) {
										this.dataT = r.data.charts || []
									} else {
										this.dataT = r.data || []
									}
									//执行回调
									resolve(r)
								} else {
									console.warn('请求返回数据有误，无法使用')
								}
							})
							.catch((e) => {
								console.warn(e)
							})
					} else if (this?.dataT?.series || this?.seriesT?.length > 0) {
						//没有url且有静态数据也可以执行回调
						resolve()
					} else {
						console.warn('没有有效的请求地址，无法获取图表数据')
					}
				})
			}, //视图渲染
			init() {
				//事件里面进行操作，通常是当前函数this，不是父级this,可以用箭头函数或者创建变量来解决这个问题
				let me = this
				//实例化DOM元素（ID,主题）
				me.myChart = echarts.init(document.getElementById(this.name), this.theme)
				//时间轴中的时间点改变后的事件，返回给父组件
				me.myChart.on('timelinechanged', (res) => {
					me.$emit('time-line-change', res.currentIndex)
				})

				me.myChart.on('click', (res) => {
					me.$emit('series-click', res)
				})

				/**
        document.getElementById(this.name).onclick = (e)=>{
          me.$emit('series-bar-click', e)
        }
         */

				// 指定图表的配置项和数据
				let option = {}
				if (this.config) {
					option = this.config
				} else {
					option = {
						//标题
						title: {
							text: this.dataT.title ? this.dataT.title : this.title || t('r.unknown'),
							textStyle: {
								color: this.dataT.titleColor || this.titleColor,
								fontSize: this.dataT.titleFontSize || this.titleFontSize,
								fontWeight: this.dataT.titleFontWeight || this.titleFontWeight
							},
							x: this.dataT.titleX || this.titleX,
							y: this.dataT.titleY || this.titleY,
							subtext: this.dataT.subTitle ? this.dataT.subTitle : this.subTitle,
							subtextStyle: {
								color: this.dataT.subTitleColor || this.subTitleColor,
								fontSize: this.dataT.subTitleFontSize || this.subTitleFontSize
							}
						}, // 图例
						legend: {
							show: this.dataT.legendShow ? this.dataT.legendShow : this.legendShow,
							type: this.dataT.legendType || this.legendType,
							textStyle: {
								color: this.dataT.legendColor || this.legendColor,
								fontSize: this.dataT.legendFontSize || this.legendFontSize
							},
							x: this.dataT.legendX || this.legendX,
							y: this.dataT.legendY || this.legendY,
							orient: this.dataT.legendOrient || this.legendOrient
						}, // 提示框，鼠标悬浮交互时的信息提示
						tooltip: this.dataT.tooltip ? this.dataT.tooltip : this.tooltip, // 横轴坐标轴
						xAxis: this.dataT.xAxis ? this.dataT.xAxis : this.xAxisT, // 纵轴坐标轴
						yAxis: this.dataT.yAxis ? this.dataT.yAxis : this.yAxisT, //you know
						series: this.dataT.series ? this.dataT.series : this.seriesT
					}
				}

				// 使用刚指定的配置项和数据显示图表。
				me.myChart.setOption(option)

				//自适应样式
				if (window.echartResizeMJ === undefined) {
					window.echartResizeMJ = {}
				}
				if (!window.echartResizeMJ[me.name]) {
					let temp = window.onresize
					if (temp) {
						window.onresize = () => {
							if (me.myChart) {
								temp()
								me.myChart.resize()
								window.echartResizeMJ[me.name] = true
							}
						}
					} else {
						window.onresize = () => {
							if (me.myChart) {
								me.myChart.resize()
								window.echartResizeMJ[me.name] = true
							}
						}
					}
				}
			}
		},
		//生命周期结束前
		beforeDestroy() {
			//销组件毁时也一并销毁图表实例、resize监听，释放内存
			if (this.myChart) {
				this.myChart.clear()
				this.myChart.dispose()
				this.myChart = null
				window.echartResizeMJ = {}
			}
		}
	}
</script>
