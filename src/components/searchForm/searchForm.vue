<!--created 2019.07.01-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <form-r
      ref="formRRef"
      v-bind="$attrs"
      v-on="$listeners"
      :form-data="formData"
      :label-width="labelWidth"
      :item-width="itemWidth"
      :inline="true"
      :show-long-ok-bt="false"
      :show-inline-ok-bt="showInlineOkBt"
      :inline-ok-bt-txt="t('r.check')"
      :show-inline-clear-bt="showInlineClearBt"
      :show-message="false"
      @on-submit="onSubmit"
  >
    <template #[item.slotName]="{valGroup}" v-for="item in formDataC" >
      <slot :name="item.slotName" :val-group="valGroup" />
    </template>
  </form-r>
</template>

<script>
  import formR from '../formR/formR.vue'
  import Locale from '../../mixins/locale'
  import {myTypeof} from "../../methods/functionGroup"

  export default {
    name: "searchForm",
    mixins: [Locale],
    components: {
      formR
    },
    props: {
      formData: {
        /*搜索表单结构数据*/
        type: Array,
        default() {
          return []
        }
      },
      labelWidth: {
        /*表单项标签宽度*/
        type: Number,
        default() {
          return this.searchFormLabelWidth
        }
      },
      itemWidth: {
        /*表单项内容宽度,用于行内表单*/
        type: Number,
        default: 202
      },
      showInlineOkBt: {
        /*显示搜索按钮*/
        type: Boolean,
        default: true
      },
      showInlineClearBt: {
        /*显示清空按钮*/
        type: Boolean,
        default: true
      }
    },
    computed: {
      formTeam() {
        return myTypeof(this.formData[0]) === 'Array'
      },
      formDataC() {
        if (this.formTeam) {
          let t = []
          for (let f of this.formData) {
            t = t.concat(f.filter(e => e.type === 'custom'))
          }
          return t
        }
        return this.formData.filter(e => e.type === 'custom')
      }
    },
    mounted() {
      this.$refs.formRRef.$el.parentNode.addEventListener('keyup',(e)=>{
        if(e.keyCode === 13){
          //回车
          this.submit()
        }
      })
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
      setItemToValGroup(data, notClearOthers) { /*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示），公开*/
        this.$refs.formRRef.setItemToValGroup(data, notClearOthers)
      },
      updateValGroup(data, notClearOthers) { /*更新表单项的值（只能更新已有字段），公开*/
        this.$refs.formRRef.updateValGroup(data, notClearOthers)
      },
      updateFormDataT(data) { /*更新表单结构，例如设置或取消禁用，公开*/
        this.$refs.formRRef.updateFormDataT(data)
      },
      validate() {/*验证表单，公开*/
        this.$refs.formRRef.validate()
      },
      reValidate(prop) {/*手动验证表单项（公开）*/
        this.$refs.formRRef.reValidate(prop)
      },
      changeLoading(val) {/*改变弹框loading状态，私有*/
        this.$refs.formRRef.changeLoading(val === undefined ? false : val)
      },
      getValGroup() {/*获取用户已填数据，公开*/
        return this.$refs.formRRef.getValGroup()
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
