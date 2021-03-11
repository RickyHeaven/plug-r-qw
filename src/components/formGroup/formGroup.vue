<!--created 2019.07.05-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div :style="formGroupStyle" class="formGroupBoxVM">
    <form-r
        ref="formRRef"
        :form-data="formData"
        :form-rules="formRules"
        :show-long-ok-bt="showLongOkBt"
        :long-ok-bt-txt="longOkBtTxt||t('r.confirm')"
        :disabled="disabled"
        :inline="inline"
        :label-width="labelWidth"
        :content-width="contentWidth"
        :item-width="itemWidth"
        :btnLoading="btnLoading"
        @on-reset="onReset"
        @on-re-render="onReRender"
        @on-item-change="onItemChange"
        @on-submit="onSubmit"
    >
      <template :slot="item.slotName" v-if="item.type === 'custom'" v-for="item in formData" slot-scope="{valGroup}">
        <slot :name="item.slotName" :val-group="valGroup"></slot>
      </template>
    </form-r>
    <div class="formFooterVM" v-show="showOkBt||showCancelBt" :style="{marginLeft:labelWidth+'px' }">
      <div :style="{width:contentWidth}" class="btnBoxKAL">
        <Button
            @click="submit" class="form-save-btn" v-if="showOkBt" :loading="btnLoading&&showLoading"
        >{{okBtTxt||t('r.confirm')}}</Button>
        <Button @click="close" class="form-cancel-btn" v-if="showCancelBt">{{cancelBtTxt||t('r.cancel')}}</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import formR from '../formR/formR.vue'
  import Locale from '../../mixins/locale'
  import {setTimeout} from '../../methods/timer'

  export default {
    name: "formGroup",
    mixins: [Locale],
    components: {
      formR
    },
    props: {
      formData: {
        /*弹框结构数据*/
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
      width: {
        /*表单组宽度*/
        type: String,
        default: '100%'
      },
      labelWidth: {
        /*表单项标签宽度*/
        type: Number,
        default: 160
      },
      contentWidth: {
        /*表单项内容宽度，默认70%*/
        type: String,
        default: '70%'
      },
      itemWidth: {
        /*表单项内容宽度,用于行内表单*/
        type: Number,
        default: 200
      },
      showOkBt: {
        /*是否展示确定按钮*/
        type: Boolean,
        default: true
      },
      showCancelBt: {
        /*是否展示取消按钮*/
        type: Boolean,
        default: true
      },
      showLongOkBt: {
        /*是否展示长确定按钮*/
        type: Boolean,
        default: false
      },
      longOkBtTxt: {
        /*长确定按钮内容*/
        type: String
      },
      okBtTxt: {
        /*确定按钮内容*/
        type: String
      },
      cancelBtTxt: {
        /*取消按钮内容*/
        type: String
      },
      disabled: {
        /*整表禁用，仅展示*/
        type: Boolean,
        default: false
      },
      inline: {
        /*行内表单，表单项横向排列（不单独成行）*/
        type: Boolean,
        default: false
      },
      btnLoading: {
        /*提交按钮显示loading*/
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        formGroupStyle: {
          width: this.width
        },
        showLoading: false
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
      clearForm() {/*私有，可用resetForm代替*/
        this.$refs.formRRef.clearForm()
      },
      setItemToValGroup(data, notClearOthers) { /*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
        this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
      },
      updateValGroup(data, notClearOthers) { /*更新表单项的值（只能更新已有字段），公开*/
        this.$refs.formRRef.updateValGroup(data, notClearOthers)
      },
      updateFormDataT(data) { /*更新表单结构，例如设置或取消禁用，公开*/
        this.$refs.formRRef.updateFormDataT(data)
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
      changeLoading(val) {/*改变确定按钮loading状态，私有*/
        if (val === undefined) {
          return
        }
        this.showLoading = Boolean(val)
        this.$refs.formRRef.changeLoading(this.showLoading)
      },
      onSubmit(data) { /*响应提交事件提交数据，私有*/
        this.showLoading = true

        this.$emit('on-submit', data)
      },
      submit() { /*触发提交事件，公开*/
        this.$refs.formRRef.submit()
      },
      close() { /*触发取消按钮点击事件，公开*/
        this.$emit('on-cancel')
        setTimeout(() => {
          this.showLoading = false
          this.$refs.formRRef.changeLoading(false)
        }, 1000)
      }
    }
  }
</script>
