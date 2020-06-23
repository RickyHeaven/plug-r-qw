const gulp = require("gulp")
const cleanCSS = require('gulp-clean-css')
const sass = require("gulp-sass")
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const {src, dest, series} = gulp

//编译 scss
function build(cb) {
  src('./src/style/index.scss')
    .pipe(sass({style: 'expanded'}))
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

function clean(cb) {
  del([
    'plugRQw.min.css',
    './lab/iconfont/'
  ])
  cb()
}


exports.default = series(clean, build, fonts)