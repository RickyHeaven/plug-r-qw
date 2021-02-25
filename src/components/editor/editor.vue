<!--created 2019.08.12-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div :id="editorId"></div>
</template>

<script>
  import E from 'wangeditor'
  import {myTypeof, oneOf} from "../../methods/functionGroup"
  import xss from 'xss'
  import $swal from '../../methods/swal'
  import Locale from '../../mixins/locale'
  import {setTimeout} from '../../methods/timer'
  import _ from 'lodash'

  const {$, BtnMenu} = E

  export default {
    name: 'Editor',
    mixins: [Locale],
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      valueType: {
        /*绑定的值的类型*/
        type: String,
        validator: val => oneOf(val, [
          'html',
          'text'
        ]),
        default: 'html'
      },
      focus: {
        type: Boolean,
        default: false
      },
      changeInterval: {
        /*设置change事件触发时间间隔*/
        type: Number,
        default: 800
      },
      colors: {
        /*文字和背景色*/
        type: Array,
        default() {
          return [
            '#000000',
            '#eeece0',
            '#1c487f',
            '#4d80bf',
            '#c24f4a',
            '#8baa4a',
            '#7b5ba1',
            '#46acc8',
            '#f9963b',
            '#ffffff'
          ]
        }
      },
      fontNames: {
        /*可用字体*/
        type: Array,
        default() {
          return [
            '黑体',
            '仿宋',
            '楷体',
            '标楷体',
            '华文仿宋',
            '华文楷体',
            '宋体',
            '微软雅黑',
            'Arial',
            'Tahoma',
            'Verdana',
            'Times New Roman',
            'Courier New'
          ]
        }
      },
      uploadImgMaxSize: {
        /*限制上传图片大小,默认100k*/
        type: Number,
        default: 100 * 1024
      },
      uploadImgMaxLength: {
        /*限制一次最多能传几张图片，默认10张*/
        type: Number,
        default: 10
      },
      uploadImgShowBase64: {
        /*是否使用base64作为本地图片上传保存方式*/
        type: Boolean,
        default: true
      },
      uploadImgServe: {
        /*图片上传服务器配置，注意不可和base64上传同时开启*/
        type: Object
      },
      placeholder: {
        type: String,
        default: '请输入正文'
      },
      disabled: {
        /*是否禁用编辑功能*/
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        editor: null,
        valueT: ''
      }
    },
    computed: {
      editorId() {
        return `editor${this._uid}`
      }
    },
    created() {
      let ops = _.cloneDeep(xss.whiteList)

      for (let key in ops) {
        if (ops.hasOwnProperty(key) && myTypeof(ops[key]) === 'Array') {
          ops[key].unshift('style')
        }
      }

      this.xssP = new xss.FilterXSS({whiteList: ops})
    },
    mounted() {
      this.editor = new E(`#${this.editorId}`)

      const titleT = this.t('r.preview')
      const previewH = this.previewHandler

      //定义自定义菜单‘预览’
      class ViewMenu extends BtnMenu {
        constructor(editor) {
          const $elem = $(
            `<div class="w-e-menu" title="${titleT}"><i class="ivu-icon ivu-icon-ios-eye" style="font-size: 22px;"></i></div>`)

          super($elem, editor)
        }

        clickHandler() {
          previewH()
        }

        tryChangeActive() {
        }
      }

      //注册自定菜单
      this.editor.menus.extend('viewMenuKey', ViewMenu)

      this.editor.config.placeholder = this.placeholder
      this.editor.config.zIndex = 100
      this.editor.config.menus = [
        'head',// 标题
        'bold',// 粗体
        'fontSize',// 字号
        'fontName',//字体
        'italic',// 斜体
        'underline', // 下划线
        'strikeThrough',//删除线
        'indent',//缩进
        'lineHeight',//行高
        'foreColor',// 文字颜色
        'backColor',// 背景颜色
        'link',// 插入链接
        'list',//列表
        'justify',// 对齐方式
        'quote',//引用
        'emoticon',//表情符
        'image',// 插入图片
        'video',//视频
        'table',  // 表格
        'splitLine',//分割线
        'undo',  // 撤销
        'redo',// 重复
        'viewMenuKey'//自定义预览菜单
      ]

      this.editor.config.focus = this.focus
      this.editor.config.colors = this.colors
      this.editor.config.fontNames = this.fontNames
      this.editor.config.uploadImgMaxSize = this.uploadImgMaxSize
      this.editor.config.uploadImgMaxLength = this.uploadImgMaxLength
      if (myTypeof(this.uploadImgServe) === 'Object' && this.uploadImgServe.url && this.uploadImgServe.params) {
        this.editor.config.uploadImgShowBase64 = false

        this.editor.config.uploadImgParams = this.uploadImgServe.params
        // 配置 server 接口地址
        this.editor.config.uploadImgServer = this.uploadImgServe.url
        this.editor.config.withCredentials = true
      }else {
        this.editor.config.uploadImgShowBase64 = this.uploadImgShowBase64
      }

      this.editor.config.customAlert = s => {
        $swal.apply(this, [
          '上传失败',
          s || '',
          'warning'
        ])
      }

      this.editor.config.onchange = (html) => {
        let text = this.editor.txt.text()
        let htmlT = this.xssP.process(html)
        this.valueT = this.valueType === 'html' ? htmlT : text
        if (this.value === this.valueT) {
          return
        }

        this.$emit('input', this.valueType === 'html' ? htmlT : text)
        this.$emit('on-change', this.valueType === 'html' ? htmlT : text)
      }
      this.editor.config.onchangeTimeout = this.changeInterval
      // create这个方法一定要在所有配置项之后调用
      this.editor.create()
      if (this.value) {
        this.editor.txt.html(this.xssP.process(this.value))
      }
      setTimeout(() => {
        this.$watch(() => this.disabled, (after) => {
          if (after) {
            // 禁用编辑功能
            this.editor.$textElem.attr('contenteditable', false)
          }
          else {
            // 开启编辑功能
            this.editor.$textElem.attr('contenteditable', true)
          }
        }, {immediate: true})
        this.$watch(() => this.value, s => {
          if (s !== this.valueT) {
            this.setHtml(s)
          }
        })
      }, 10)
    },
    beforeDestroy() {
      // 销毁编辑器
      this.editor.destroy()
      this.editor = null
    },
    methods: {
      setHtml(val) {
        this.editor.txt.html(this.xssP.process(val))
      },
      previewHandler() {
        const id = this.editorId + 'preview'
        let preEl = document.getElementById(id)
        if (!preEl) {
          const body = document.getElementsByTagName('body')

          preEl = document.createElement('div')
          preEl.setAttribute('id', id)
          preEl.setAttribute('class', 'editor-preview-mask')
          preEl.innerHTML =
            `<div class="editor-preview-body"><div class="editor-preview-head"><div><span>宽</span><input type="number" value="300" min="200"><span>高</span><input type="number" value="500" min="300"></div><i class="ivu-icon ivu-icon-md-close"></i></div><div class="editor-preview-out-wall"><div class="editor-preview-wall"></div></div></div>`

          let outWallE = preEl.children[0].children[1]
          let wallE = preEl.children[0].children[1].children[0]

          let inputW = preEl.children[0].children[0].children[0].children[1]

          const spaceW = 40
          const spaceH = 70

          const wHandler = e => {
            if (e && e.type === 'keyup') {
              let notEnter = false
              if (e.key) {
                notEnter = e.key !== 'Enter'
              }
              else {
                notEnter = e.keyCode !== 13
              }
              if (notEnter) {
                return
              }
            }
            let val = e.target.value
            val = Number(val)
            if (wallE.style && wallE.style.width === val + 'px') {
              return
            }

            const bodyW = body[0].clientWidth

            if (val < 200) {
              val = 200
              e.target.value = 200
            }
            else if (val > bodyW - spaceW) {
              val = bodyW - spaceW
              e.target.value = bodyW - spaceW
            }
            wallE.style.width = val + 'px'
          }

          inputW.addEventListener('blur', wHandler)
          inputW.addEventListener('keyup', wHandler)
          let inputH = preEl.children[0].children[0].children[0].children[3]

          const hHandler = e => {
            if (e && e.type === 'keyup') {
              let notEnter = false
              if (e.key) {
                notEnter = e.key !== 'Enter'
              }
              else {
                notEnter = e.keyCode !== 13
              }
              if (notEnter) {
                return
              }
            }
            let val = e.target.value
            val = Number(val)

            if (outWallE.style && outWallE.style.height === val + 'px') {
              return
            }

            const bodyH = body[0].clientHeight

            if (val < 300) {
              val = 300
              e.target.value = 300
            }
            else if (val > bodyH - spaceH) {
              val = bodyH - spaceH
              e.target.value = bodyH - spaceH
            }
            outWallE.style.height = val + 'px'
          }

          inputH.addEventListener('blur', hHandler)
          inputH.addEventListener('keyup', hHandler)
          let closeE = preEl.children[0].children[0].children[1]
          closeE.addEventListener('click', e => {
            preEl.style.display = 'none'
          })

          wallE.innerHTML = this.value
          body[0].append(preEl)
        }
        else {
          let wallE = preEl.children[0].children[1].children[0]
          wallE.innerHTML = this.value
          preEl.style.display = 'block'
        }
      }
    }
  }
</script>
