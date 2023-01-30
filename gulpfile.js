const gulp = require("gulp")
const cleanCSS = require('gulp-clean-css')
const less = require("gulp-less")
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const {src, dest, series} = gulp

//编译 less
function build(cb) {
  src('./src/style/index.less')
    .pipe(less({style: 'expanded'}))
    .pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(cleanCSS())
    .pipe(rename('plugRQw.min.css'))
    .pipe(dest('./lib'))
  cb()
}


// 拷贝字体文件
function fonts(cb) {
  src([
    './src/style/iconfont/*.svg',
    './src/style/iconfont/*.ttf',
    './src/style/iconfont/*.woff',
    './src/style/iconfont/*.woff2'
  ])
    .pipe(dest('./lib/iconfont'))
  cb()
}

//拷贝国际化文件
function langs(cb) {
  src([
    './src/locale/lang/*.js'
  ])
    .pipe(dest('./lib/lang'))
  cb()
}

function clean(cb) {
  del([
    'plugRQw.min.css',
    './lab/iconfont/'
  ])
  cb()
}


exports.default = series(clean, build, fonts, langs)
