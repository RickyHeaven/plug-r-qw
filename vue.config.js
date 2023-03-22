const {defineConfig} = require('@vue/cli-service')
const compressionPlugin = require("compression-webpack-plugin")
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
          javascriptEnabled: true
        }
      }
    }
  },
  
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        output: {
          libraryExport: 'default'
        },
        externals: {
          '@jiaminghi/data-view': {
            root: '@jiaminghi/data-view',
            commonjs: '@jiaminghi/data-view',
            commonjs2: '@jiaminghi/data-view',
            amd: '@jiaminghi/data-view'
          },
          '@wangeditor/editor': {
            root: '@wangeditor/editor',
            commonjs: '@wangeditor/editor',
            commonjs2: '@wangeditor/editor',
            amd: '@wangeditor/editor'
          },
          '@wangeditor/editor-for-vue': {
            root: '@wangeditor/editor-for-vue',
            commonjs: '@wangeditor/editor-for-vue',
            commonjs2: '@wangeditor/editor-for-vue',
            amd: '@wangeditor/editor-for-vue'
          },
          '@zhangqingcq/view-design-r': {
            root: 'ViewUI',
            commonjs: 'view-design',
            commonjs2: 'view-design',
            amd: 'view-design'
          },
          'ar-cascader': {
            root: 'ar-cascader',
            commonjs: 'ar-cascader',
            commonjs2: 'ar-cascader',
            amd: 'ar-cascader'
          },
          axios: {
            root: 'axios',
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios'
          },
          echarts: {
            root: 'echarts',
            commonjs: 'echarts',
            commonjs2: 'echarts',
            amd: 'echarts'
          },
          'js-cookie': {
            root: 'Cookies',
            commonjs: 'js-cookie',
            commonjs2: 'js-cookie',
            amd: 'js-cookie'
          },
          lodash: {
            root: '_',
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash'
          },
          moment: {
            root: 'moment',
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment'
          },
          pinia: {
            root: 'pinia',
            commonjs: 'pinia',
            commonjs2: 'pinia',
            amd: 'pinia'
          },
          sweetalert: {
            root: 'swal',
            commonjs: 'sweetalert',
            commonjs2: 'sweetalert',
            amd: 'sweetalert'
          },
          vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
          },
          'vue-amap': {
            root: 'VueAMap',
            commonjs: 'vue-amap',
            commonjs2: 'vue-amap',
            amd: 'vue-amap'
          },
          'vue-class-component': {
            root: 'VueClassComponent',
            commonjs: 'vue-class-component',
            commonjs2: 'vue-class-component',
            amd: 'vue-class-component'
          },
          'vue-i18n': {
            root: 'VueI18n',
            commonjs: 'vue-i18n',
            commonjs2: 'vue-i18n',
            amd: 'vue-i18n'
          },
          'vue-json-viewer': {
            root: 'JsonView',
            commonjs: 'vue-json-viewer',
            commonjs2: 'vue-json-viewer',
            amd: 'vue-json-viewer'
          },
          'vue-property-decorator': {
            root: 'vue-property-decorator',
            commonjs: 'vue-property-decorator',
            commonjs2: 'vue-property-decorator',
            amd: 'vue-property-decorator'
          },
          'vue-router': {
            root: 'VueRouter',
            commonjs: 'vue-router',
            commonjs2: 'vue-router',
            amd: 'vue-router'
          },
          'vuex-class': {
            root: 'vuex-class',
            commonjs: 'vuex-class',
            commonjs2: 'vuex-class',
            amd: 'vuex-class'
          },
          wangeditor: {
            root: 'wangEditor',
            commonjs: 'wangeditor',
            commonjs2: 'wangeditor',
            amd: 'wangeditor'
          },
          xss: {
            root: 'xss',
            commonjs: 'xss',
            commonjs2: 'xss',
            amd: 'xss'
          },
          'china-map-data': {
            root: 'china-map-data',
            commonjs: 'china-map-data',
            commonjs2: 'china-map-data',
            amd: 'china-map-data'
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
    else {
      return {
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
})
