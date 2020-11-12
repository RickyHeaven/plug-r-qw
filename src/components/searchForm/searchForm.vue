<!--created 2019.07.01-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div>
    <form-r
        ref="formRRef"
        :form-data="data"
        :form-rules="formRules"
        :label-width="84"
        :item-width="202"
        :inline="true"
        :show-long-ok-bt="false"
        :show-inline-ok-bt="true"
        :inline-ok-bt-txt="t('r.check')"
        :show-inline-clear-bt="showInlineClearBt"
        :show-message="false"
        :btnLoading="btnLoading"
        @on-item-change="onItemChange"
        @on-reset="onReset"
        @on-re-render="onReRender"
        @on-submit="onSubmit"
    >
      <template :slot="item.slotName" v-if="item.type === 'custom'" v-for="item in data" slot-scope="{valGroup}">
        <slot :name="item.slotName" :val-group="valGroup"></slot>
      </template>
    </form-r>
  </div>
</template>

<script>
  import formR from '../formR/formR.vue'
  import Locale from '../../mixins/locale'

  export default {
    name: "searchForm",
    mixins: [Locale],
    components: {
      formR
    },
    props: {
      data: {
        /*搜索表单结构数据*/
        type: Array,
        default() {
          return []
        }
      },
      formRules: {
        /*弹框结构规则*/
        type: Object,
        default() {
          return {}
        }
      },
      showInlineClearBt: {
        /*显示清空按钮*/
        type: Boolean,
        default: true
      },
      btnLoading: {
        /*提交按钮显示loading*/
        type: Boolean,
        default: false
      }
    },
    methods: {
      resetForm() { /*重置表单，会清空表单值并刷新表单dom，异步方法，公开*/
        return new Promise(resolve => {
          this.$refs.formRRef.resetForm()
            .then(() => {
              resolve()
            })
        })
      },
      refreshFormDom() {/*刷新表单dom，公开*/
        return new Promise(resolve => {
          this.$refs.formRRef.refreshFormDom()
            .then(() => {
              resolve()
            })
        })
      },
      reRenderForm() {/*重新渲染表单，异步方法（公开）*/
        return new Promise(resolve => {
          this.$refs.formRRef.reRenderForm()
            .then(() => {
              resolve()
            })
        })
      },
      clear() {/*私有，可使用resetForm代替*/
        this.$refs.formRRef.clearForm()
      },
      onItemChange(data) { /*表单项值改变，私有*/
        this.$emit('on-item-change', data)
      },
      onReset() {/*表单被重置，私有*/
        this.$emit('on-reset')
      },
      onReRender() {/*表单被重新渲染，私有*/
        this.$emit('on-re-render')
      },
      validate() {/*验证表单，公开*/
        this.$refs.formRRef.validate()
      },
      changeLoading(val) {/*改变弹框loading状态，私有*/
        this.$refs.formRRef.changeLoading(val === undefined ? false : val)
      },
      onSubmit(data) { /*响应提交事件提交数据，私有*/
        this.$emit('on-search', data)
      },
      submit() {/*触发提交事件，公开*/
        this.$refs.formRRef.submit()
      }
    }
  }
</script>
