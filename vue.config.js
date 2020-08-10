const compressionPlugin = require("compression-webpack-plugin")

module.exports = {
  devServer: {
    open: true,
    host: 'local.qwgas.com'
  },
  
  publicPath: './',
  
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        output: {
          libraryExport: 'default'
        },
        externals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          vuex: 'Vuex',
          'view-design': 'ViewUI',
          'sweetalert': 'swal',
          'lodash': '_',
          'axios': 'axios',
          'echarts': 'echarts',
          'moment': 'moment',
          'wangeditor': 'wangEditor',
          'js-cookie': 'Cookies',
          'iview-area': 'iviewArea',
          'vue-amap': 'VueAMap'
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
  
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/src/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  
  productionSourceMap: false
}