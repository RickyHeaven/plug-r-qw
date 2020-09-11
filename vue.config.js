const compressionPlugin = require("compression-webpack-plugin")

module.exports = {
  devServer: {
    open: true,
    host: 'local.qwgas.com',
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
  
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        output: {
          libraryExport: 'default'
        },
        externals: {
          vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
          },
          'vue-router': {
            root: 'VueRouter',
            commonjs: 'vue-router',
            commonjs2: 'vue-router',
            amd: 'vue-router'
          },
          vuex: {
            root: 'Vuex',
            commonjs: 'vuex',
            commonjs2: 'vuex',
            amd: 'vuex'
          },
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
            root: 'wangEditor',
            commonjs: 'wangeditor',
            commonjs2: 'wangeditor',
            amd: 'wangeditor'
          },
          'xss': {
            root: 'xss',
            commonjs: 'xss',
            commonjs2: 'xss',
            amd: 'xss'
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
          },
          'vue-json-viewer': {
            root: 'JsonView',
            commonjs: 'vue-json-viewer',
            commonjs2: 'vue-json-viewer',
            amd: 'vue-json-viewer'
          }
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
}