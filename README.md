# plug-r-qw
plug-in lib developed when I was in qw

### 用法
1. npm i @zhangqingcq/plug-r-qw

2. 在main.js中添加：
```
 import Vue from 'vue'
 import store from './store'
 import plugRQw from '@zhangqingcq/plug-r-qw'
 import '@zhangqingcq/plug-r-qw/lib/plugRQw.min.css'
 
 Vue.use(plugRQw)
 
 plugRQw.init({
  store:store
 })
```
3. 挂载在Vue实例下的方法，在vue单文件里用`this.XXX`调用（template里不用加this），在其他js文件里，引入vue后使用`Vue.prototype.XXX`调用，
也可以单独引用：`import {XXX} from '@zhangqingcq/plug-r-qw'` 

4. 没有挂在在Vue实例下的方法（使用频率较低），在需要的地方单独引用即可

5. 所有UI组件均被库注册为了全局组件，所以在需要的地方直接使用即可，如：
```
<iconTxtBtn icon="ios-trash" name="批量删除"/>
```
### 注意：
* 要看例子，需要下载[github上项目](https://github.com/RickyHeaven/plug-r-qw.git)，然后`npm i`安装依赖，推荐使用*cnpm*或淘宝镜像，然后`npm run serve`把项目跑起来，就可以在`/index`查看各个组件或方法的示例了。

* 因为这个库里面包含UI组件，所以需要在*main.js*引用*lab/plugRQw.min.css*才能正常显示样式，如：`import '@zhangqingcq/plug-r-qw/lib/plugRQw.min.css'`

* 如果需要定制化样式（例如主题色），则需要创建一个*less*文件（如`plugRQwTheme.less`，注意：这种情况下不再需要引入*plugRQw.min.css*）,在该文件中顶部引入*src/style/index.less* (如：`@import "~@zhangqingcq/plug-r-qw/src/style/index.less";`),然后在后面写上想要覆盖的变量名，并给出想要的值，如：`@primary: #46be87;`[默认颜色列表](/src/style/common/color.less)，[默认尺寸列表](/src/style/common/size.less)
>注意：
>1. 请不要随意改变这些变量，除非你很清楚改变后会带来的影响，他们在整个库中被多次使用。
>2. 因为该库是基于view-design封装的，所以很多样式继承了view-design，要定制那些样式，直接定制view-design即可。

* 因为有些方法使用频率较低，所以没有挂载在Vue原型或者window上，使用时需要单独引用，如：`improt {fullScreenImgPreview} from '@zhangqingcq/plug-r-qw'`

* 本库运行依赖vue、vue-router、vuex、view-design、sweetalert、lodash、axios、echarts、moment、wangeditor、xss、js-cookie、iview-area、vue-amap、vue-json-viewer，但并未将他们的代码打包到库的生产版本中，所以需要在你的项目中安装他们才能使用该库中涉及这些依赖的组件或方法（不用可以不安装）

* 本库采用@vue/cli3 脚手架搭建，用@vue/cli3或者更高版本搭建的项目引用不会有兼容问题，低于@vue/cli3版本或其他脚手架搭建的项目引用可能会有兼容问题，表现就是会有不认识的语法，解决方法：
```
  在webpack中添加loader处理库的输出文件，如@vue/cli2搭建的项目中，找到webpack.base.conf.js,在module-->rules下添加
  
  {
    test: /(index\.js|plugRQw\.umd\.min\.js)$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          'env',
          "stage-2"
        ]
      }
    },
    include: [path.resolve(__dirname,'../node_modules/@zhangqingcq/plug-r-qw')]
  }
  
  注意：
    1. 这个loader会用到'path'、'babel-loader'、'babel-core'、'babel-preset-env'、'babel-preset-stage-2'、'webpack'，如果项目没有这些npm依赖，请安装它们
    2. include的路径是该库相对于webpack.base.conf.js文件的相对路径
```