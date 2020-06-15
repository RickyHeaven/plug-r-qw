module.exports = {
  productionSourceMap: false,
  pages:{
    index:{
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
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
  }
}