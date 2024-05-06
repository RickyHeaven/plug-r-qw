const { defineConfig } = require('@vue/cli-service')
const compressionPlugin = require('compression-webpack-plugin')
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		proxy: {
			'/node-serve': {
				target: 'http://localhost:7890/',
				changeOrigin: true,
				pathRewrite: {
					'^/node-serve': ''
				}
			}
		}
	},

	publicPath: './',

	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},

	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					javascriptEnabled: true,
					rewriteUrls: 'all',
					math: 'always'
				}
			}
		}
	},

	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			return {
				resolve: { alias: { '@': './example' } },
				output: {
					libraryExport: 'default'
				},
				externals: [
					'@jiaminghi/data-view',
					'@wangeditor/editor',
					'@wangeditor/editor-for-vue',
					'@zhangqingcq/view-design-r',
					'ar-cascader',
					'axios',
					'echarts',
					'js-cookie',
					'lodash',
					'moment',
					'pinia',
					'popper.js',
					'sweetalert',
					'vue',
					'vue-amap',
					'vue-class-component',
					'vue-i18n',
					'vue-json-viewer',
					'vue-property-decorator',
					'vue-router',
					'vuex-class',
					'wangeditor',
					'xss',
					'china-map-data',
					'deepmerge'
				],
				plugins: [
					new compressionPlugin({
						test: /\.js$|\.html$|\.css/, //匹配文件名
						threshold: 10240, //对超过10kb的数据进行压缩
						deleteOriginalAssets: false //是否删除原文件
					})
				]
			}
		} else {
			return {
				resolve: { alias: { '@': './example' } },
				output: {
					libraryExport: 'default'
				},
				plugins: [
					new compressionPlugin({
						test: /\.js$|\.html$|\.css/, //匹配文件名
						threshold: 10240, //对超过10kb的数据进行压缩
						deleteOriginalAssets: false //是否删除原文件
					})
				]
			}
		}
	},

	chainWebpack: (config) => {
		config.module
			.rule('js')
			.include.add('/src/')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap((options) => {
				// 修改它的选项...
				return options
			})

		config.module
			.rule('md')
			.test(/\.md$/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-markdown-loader')
			.loader('vue-markdown-loader/lib/markdown-compiler')
			.options({
				raw: true
			})
	},

	productionSourceMap: false
})
