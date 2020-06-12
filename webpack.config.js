const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    path: path.join(__dirname, 'dist'), // 输出路径
    filename: 'plugRQw.min.js', // 打包输出文件类型
    library: 'plugRQw', // string,导出库(exported library)的名称
    libraryTarget: 'umd' // 通用模块定义,导出库(exported library)的类型
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: 'development'
}
