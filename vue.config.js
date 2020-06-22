const compressionPlugin = require("compression-webpack-plugin")

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: config =>{
    if(process.env.NODE_ENV === 'production'){
      return {
        output: {
          libraryExport: 'default'
        },
        externals: {
          'view-design': {
            root: 'ViewUI',
            commonjs: 'view-design',
            commonjs2: 'view-design',
            amd: 'view-design'
          },
          'sweetalert': {
            root: 'swal',
            commonjs: 'sweetalert',
            commonjs2: 'sweetalert',
            amd: 'sweetalert'
          },
          'lodash': {
            root: '_',
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash'
          },
          'axios': {
            root: 'axios',
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios'
          },
          'echarts': {
            root: 'echarts',
            commonjs: 'echarts',
            commonjs2: 'echarts',
            amd: 'echarts'
          },
          'moment': {
            root: 'moment',
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment'
          },
          'wangeditor': {
            root: 'wangeditor',
            commonjs: 'wangeditor',
            commonjs2: 'wangeditor',
            amd: 'wangeditor'
          },
          'js-cookie': {
            root: 'Cookies',
            commonjs: 'js-cookie',
            commonjs2: 'js-cookie',
            amd: 'js-cookie'
          },
          'iview-area': {
            root: 'iviewArea',
            commonjs: 'iview-area',
            commonjs2: 'iview-area',
            amd: 'iview-area'
          },
          'vue-amap': {
            root: 'VueAMap',
            commonjs: 'vue-amap',
            commonjs2: 'vue-amap',
            amd: 'vue-amap'
          }
        },
        plugins:[
          new compressionPlugin({
            test:/\.js$|\.html$|\.css/, //匹配文件名
            threshold:10240, //对超过10kb的数据进行压缩
            deleteOriginalAssets: false //是否删除原文件
          })
        ]
      }
    }
  },
  chainWebpack: config =>{
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
  publicPath: '/'
}