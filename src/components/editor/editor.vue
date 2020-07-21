<!--created 2019.08.12-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div :id="editorId"></div>
</template>

<script>
  import Editor from 'wangeditor'
  import 'wangeditor/release/wangEditor.min.css'
  import {oneOf} from "../../methods/functionGroup"

  export default {
    name: 'Editor',
    model:{
      prop:'value',
      event:'input'
    },
    props: {
      value: {
        type: String,
        default() {
          return ''
        }
      },
      valueType: {/*绑定的值的类型*/
        type: String,
        validator: (val) => {
          return oneOf(val, [
            'html',
            'text'
          ])
        },
        default() {
          return 'html'
        }
      },
      changeInterval: {/*设置change事件触发时间间隔*/
        type: Number,
        default() {
          return 200
        }
      },
      disabled: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    computed: {
      editorId() {
        return `editor${this._uid}`
      }
    },
    methods: {
      setHtml(val) {
        this.editor.txt.html(val)
      }
    },
    mounted() {
      this.editor = new Editor(`#${this.editorId}`)
      this.editor.customConfig.zIndex = 100
      this.editor.customConfig.menus = [
        'head',// 标题
        'bold',// 粗体
        'fontSize',// 字号
        'italic',// 斜体
        'underline', // 下划线
        'foreColor',// 文字颜色
        'backColor',// 背景颜色
        'link',// 插入链接
        'justify',// 对齐方式
        'image',// 插入图片
        'table',  // 表格
        'undo',  // 撤销
        'redo'// 重复
      ]
      this.editor.customConfig.onchange = (html) => {
        let text = this.editor.txt.text()
        this.$emit('input', this.valueType === 'html' ? html : text)
        this.$emit('on-change', this.valueType === 'html' ? html : text)
      }
      this.editor.customConfig.onchangeTimeout = this.changeInterval
      // create这个方法一定要在所有配置项之后调用
      this.editor.create()
      if(this.value){
        this.editor.txt.html(this.value)
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
      }, 10)
    }
  }
</script>
