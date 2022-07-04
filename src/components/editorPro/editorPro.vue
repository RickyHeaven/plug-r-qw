<template>
  <div>
    <Toolbar class="editor-pro-toolbar" :editor="editor" :defaultConfig="toolbarConfigT" :mode="mode"/>
    <Editor
        class="editor-pro-editor" v-model="valueT" :defaultConfig="editorConfigT" :mode="mode" @onCreated="onCreated"
        :style="editorTextareaStyle"
    />
  </div>
</template>

<script>
  import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
  import Locale from '../../mixins/locale'
  import {oneOf} from '../../methods/functionGroup'

  export default {
    name: "editorPro",
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
      toolbarConfig: {
        type: Object,
        default() {
          return {}
        }
      },
      editorConfig: {
        type: Object,
        default() {
          return {}
        }
      },
      mode: {
        type: String,
        validator: v => oneOf(v, [
          'default',
          'simple'
        ]),
        default: 'default'
      },
      height: {
        type: String | Number,
        default: 300
      }
    },
    components: {
      Editor,
      Toolbar
    },
    data() {
      return {
        editor: null
      }
    },
    computed: {
      valueT: {
        get() {
          return this.value
        },
        set(v) {
          this.$emit('input', v)
        }
      },
      toolbarConfigT() {
        return Object.assign({
          placeholder: this.t('r.pInput'),
          insertKeys: {
            index: 31,
            keys: ['previewX']
          }
        }, this.toolbarConfig)
      },
      editorConfigT() {
        return Object.assign({}, this.editorConfig)
      },
      editorTextareaStyle() {
        return {height: typeof this.height === 'string' ? this.height : this.height + 'px'}
      }
    },
    beforeDestroy() {
      if (this.editor === null) {
        return
      }
      this.editor.destroy()
      this.editor = null
    },
    methods: {
      onCreated(d) {
        this.editor = Object.seal(d)
      }
    }
  }
</script>