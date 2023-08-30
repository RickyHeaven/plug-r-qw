<!--created 2019.07.11-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Form
      ref="formGroupXRef" :model="valGroup" :rules="formRulesT" :label-width="labelWidth"
      :inline="inline" :show-message="showMessage" class="formXN" :key="formReRenderKey"
  >
    <!--解决form只有一个input时enter触发页面刷新的问题-->
    <FormItem style="display: none"><input type="text" /></FormItem>
    <div v-for="(box,n) of formDataT" v-if="formTeam" :class="[teamClass,'formTeamBox'+n]" :key="'formTeamBox'+n">
      <item-r
          v-for="(item,i) of box" :key="'formItem'+i" :item="item" v-if="getFormItemIfVal(item)" :style="formStyle"
          :item-style="itemStyle" :val-group="valGroup" :temp-keys="tempKeys" :inline="inline" :disabled="disabled"
          :label-width="labelWidth" :item-width="itemWidth" :mgr-url="mgrUrl" :upload-url="uploadUrl"
          @item-change="itemChange" @re-validate="reValidateAndChangeHandle" @clear-temp-key-item="clearTempKeyItem"
          @select-input-change="onSelectInputChange" @al-name-change="alNameChange"
          @async-label-change="asyncLabelChange"
      >
        <template :slot="s.slotName" v-for="s in getSlotFormData(box)" slot-scope="{valGroup}">
          <slot :name="s.slotName" :val-group="valGroup" />
        </template>
      </item-r>
    </div>
    <item-r
        v-for="(item,i) of formDataT" :key="'formItem'+i" :item="item" v-if="!formTeam&&getFormItemIfVal(item)"
        :style="formStyle" :item-style="itemStyle" :val-group="valGroup" :temp-keys="tempKeys" :inline="inline"
        :disabled="disabled" :label-width="labelWidth" :item-width="itemWidth" :mgr-url="mgrUrl" :upload-url="uploadUrl"
        @item-change="itemChange" @re-validate="reValidateAndChangeHandle" @clear-temp-key-item="clearTempKeyItem"
        @select-input-change="onSelectInputChange" @al-name-change="alNameChange" @async-label-change="asyncLabelChange"
    >
      <template :slot="s.slotName" v-for="s in getSlotFormData(formData)" slot-scope="{valGroup}">
        <slot :name="s.slotName" :val-group="valGroup" />
      </template>
    </item-r>
    <!--长提交按钮-->
    <FormItem v-if="showLongOkBt">
      <Button @click="submit" :style="itemStyle" type="primary" :loading="btnLoading&&showLoading" :disabled="disabled">{{
          longOkBtTxt || t('r.confirm')
        }}</Button>
    </FormItem>
    <div class="inlineBlock">
      <!--短提交按钮（查询）-->
      <Button
          v-if="showInlineOkBt" type="primary" :class="{inlineFormBtXN:inline,okBtnXN:true}" @click="submit"
          :loading="btnLoading&&showLoading" :disabled="disabled"
      >{{ inlineOkBtTxt || t('r.confirm') }}</Button>
      <!--取消按钮（清除）-->
      <Button
          v-if="showInlineClearBt" @click="resetForm" :class="{inlineFormBtXN:inline}" type="dashed"
      >{{ inlineClearBtTxt || t('r.clear') }}</Button>
    </div>
  </Form>
</template>

<script>
  import moment from 'moment'
  import _ from 'lodash'
  import {myTypeof, isValidValue, trimObj, findCollection} from "../../methods/functionGroup"
  import $fetch from '../../methods/fetch'
  import Locale from '../../mixins/locale'
  import {setTimeout} from '../../methods/timer'
  import ItemR from "./itemR"

  export default {
    name: "formR",
    mixins: [Locale],
    components: {
      ItemR
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
      showMessage: {
        /*显示校验信息*/
        type: Boolean,
        default: true
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
      inline: {
        /*行内表单*/
        type: Boolean,
        default: false
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
      showInlineOkBt: {
        /*是否展示行内短确定按钮*/
        type: Boolean,
        default: false
      },
      inlineOkBtTxt: {
        /*短确定按钮内容*/
        type: String
      },
      showInlineClearBt: {
        /*是否展示行内短清空按钮*/
        type: Boolean,
        default: false
      },
      inlineClearBtTxt: {
        /*短清空按钮内容*/
        type: String
      },
      disabled: {
        /*整表禁用，仅展示*/
        type: Boolean,
        default: false
      },
      btnLoading: {
        /*提交按钮显示loading*/
        type: Boolean,
        default: false
      },
      trim: {
        /*是否去除提交数据中的字符串首尾空格*/
        type: Boolean,
        default: true
      },
      teamClass: {
        /*分组表单-组容器class*/
        type: String,
        default: 'formTeamBox'
      }
    },
    data() {
      return {
        valGroup: {}, /*表单项值，对外公开，提交时传递到外层*/
        formDataT: [], /*表单结构数据*/
        tempKeys: {}, /*不对外暴露表单项值*/
        watchGroup: []/*需要监听的事件集合*/,
        mgrUrl: window.g && window.g.mgrURL || null,
        selectInputKeys: [], /*selectInput的key没有写死在formData中（因为是动态的）,为了在showingKeys中能捕捉到这类组件的key,特声明此变量*/
        hiddenKeys: [], /*通过 setItemToValGroup 直接存入valGroup的字段*/
        showLoading: false,
        formReRenderKey: Math.floor(Math.random() * 100000000 + 1000), /*刷新表单*/
        uploadUrl: window.g && window.g.mgrURL && window.g.mgrURL + '/web/v1/fsc/file' || '/file', /*上传组件的文件上传地址，远程上传（直接上传到服务器）时，如果没设置，则用该地址*/
        debounceCount: false
      }
    },
    computed: {
      formTeam() {
        return Array.isArray(_.head(this.formData))
      },
      formStyle() {
        if (this.inline) {
          return {
            width: (this.itemWidth + this.labelWidth) + 'px'
          }
        }
        return {}
      },
      itemStyle() {
        if (this.inline) {
          return {width: '100%'}
        }
        return {
          width: this.contentWidth
        }
      },
      formRulesT() { /*计算规则*/
        let t = _.cloneDeep(this.formRules)
        for (let k in t) {
          if (t.hasOwnProperty(k)) {
            if (Array.isArray(t[k])) {
              for (let e of t[k]) {
                if (!(e.message || e.validator)) {
                  e.message = this.t('r.required')
                }
              }
            }
            else if (myTypeof(t[k]) === 'Object') {
              if (!(t[k].message || t[k].validator)) {
                t[k].message = this.t('r.required')
              }
            }
          }
        }
        return t
      },
      submitKeys() { /*展示的key(需要提交的)*/
        let t = []
        if (this.formTeam) {
          for (let e of this.formDataT) {
            this.submitItems(e, t)
          }
        }
        else {
          this.submitItems(this.formDataT, t)
        }
        return t.concat(this.selectInputKeys, this.hiddenKeys)
      },
      showingKeys() {
        let t = []
        if (this.formTeam) {
          for (let e of this.formDataT) {
            this.showingItems(e, t)
          }
        }
        else {
          this.showingItems(this.formDataT, t)
        }
        return t
      }
    },
    created() {
      this.initValGroup()
      this.initFormDataT()
    },
    methods: {
      getSlotFormData(d) {/*私有，获取插槽数据*/
        return d.filter(e => e.slotName)
      },
      /**
       * 计算需要提交的key
       * @param d 表单结构数据
       * @param t 储存需要提交的key的对象
       */
      submitItems(d, t) {
        for (let root of d) {
          if (root.showing === true && root.key && root.type !== 'selectInput') {
            t.push(root.key)
            if (root.key2) {
              t.push(root.key2)
            }
            if (root.collectLabel) {
              if (myTypeof(root.collectLabel) === 'Object' && root.collectLabel.key) {
                t.push(root.collectLabel.key)
              }
              else if (Array.isArray(root.collectLabel)) {
                for (let l of root.collectLabel) {
                  if (l.key) {
                    t.push(l.key)
                  }
                }
              }
            }
          }
        }
      },
      /**
       * 计算需要展示的key
       * @param d 表单结构数据
       * @param t 储存需要展示的key的对象
       */
      showingItems(d, t) {
        for (let root of d) {
          if (root.showing === true && root.key && root.type !== 'selectInput') {
            t.push(root.key)
          }
        }
      },
      resetForm() { /*重置表单，会清空表单值并刷新表单dom，异步方法（公开）*/
        return new Promise(r => {
          this.clearForm()
          this.refreshFormDom().then(() => {
            this.$emit('on-reset')
            r()
          })
        })
      },
      reRenderForm() { /*重新渲染表单，异步方法（公开）*/
        return new Promise(r => {
          for (let f of this.watchGroup) {
            f()
          }
          this.watchGroup = []
          this.tempKeys = {}
          this.initValGroup()
          this.initFormDataT()

          this.refreshFormDom().then(() => {
            this.$emit('on-re-render')
            r()
          })
        })
      },
      refreshFormDom() {/*刷新表单dom，异步方法（公开）*/
        return new Promise(r => {
          this.formReRenderKey = Math.floor(Math.random() * 100000000 + 1000)
          /*刷新表单*/
          this.$nextTick(function () {
            r()
          })
        })
      },
      clearForm() { /*清空表单值（私有，不推荐直接调用，可以调用resetForm）*/
        let defaultV = this.getDefaultValues()

        for (let k in this.valGroup) {
          if (this.valGroup.hasOwnProperty(k)) {
            if (isValidValue(defaultV[k])) {
              this.$set(this.valGroup, k, defaultV[k])
            }
            else {
              if (Array.isArray(this.valGroup[k])) {
                this.$set(this.valGroup, k, [])
              }
              else if (myTypeof(this.valGroup[k]) === 'Boolean') {
                this.$set(this.valGroup, k, false)
              }
              else {
                const formItem = findCollection(this.formData, e => e.key === k)
                if (formItem && (formItem.type === 'editor' || formItem.type === 'editorPro')) {
                  this.$set(this.valGroup, k, '')
                }
                else {
                  this.$set(this.valGroup, k, null)
                }
              }
            }
          }
        }
        this.clearTempKeys(defaultV)
      },
      clearTempKeys(defaultV) { /*清空缓存表单值（私有，不推荐直接调用，可以调用resetForm）*/
        for (let k in this.tempKeys) {
          if (this.tempKeys.hasOwnProperty(k)) {
            if (isValidValue(defaultV[k])) {
              this.$set(this.tempKeys, k, defaultV[k])
            }
            else {
              if (Array.isArray(this.tempKeys[k])) {
                this.$set(this.tempKeys, k, [])
              }
              else if (myTypeof(this.tempKeys[k]) === 'Object' && this.tempKeys[k].hasOwnProperty('key') &&
                this.tempKeys[k].hasOwnProperty('val')) {
                /*selectInput*/
                this.$set(this.tempKeys[k], 'val', null)
              }
              else {
                this.$set(this.tempKeys, k, null)
              }
            }
          }
        }
      },
      clearTempKeyItem(k) { /*清空缓存表单项值（私有）*/
        let defaultV = this.getDefaultValues()
        if (isValidValue(defaultV[k])) {
          this.$set(this.tempKeys, k, defaultV[k])
        }
        else {
          if (Array.isArray(this.tempKeys[k])) {
            this.tempKeys[k] = []
          }
          else {
            this.tempKeys[k] = null
          }
        }
      },
      getDefaultValues() {/*获取默认值（私有）*/
        let t = {}
        if (this.formTeam) {
          for (let e of this.formDataT) {
            this.defaultValItems(e, t)
          }
        }
        else {
          this.defaultValItems(this.formDataT, t)
        }
        return t
      },
      /**
       * 从表单结构数据获取默认值
       * @param d 表单结构数据
       * @param a 储存默认值的对象
       */
      defaultValItems(d, a) {
        for (let root of d) {
          if (root.tempKey && isValidValue(root.defaultVal)) {
            /*将默认值转换为表单项绑定值对应的格式*/
            this.getTempKeyDefaultVal(root, a)
          }
          if (root.key && isValidValue(root.defaultVal)) {
            a[root.key] = root.defaultVal
          }
          if (root.key2 && isValidValue(root.defaultVal2)) {
            a[root.key2] = root.defaultVal2
          }
        }
      },
      /**
       * 判断是否展示表单项（私有，高频被调用方法，每次表单中有任何值更改，都会被调用formDataT的长度<formDataT.length>次，而且还可能触发连锁反应）
       * @param root 表单项结构数据
       */
      getFormItemIfVal(root) {
        if (root.show) {
          if (myTypeof(root.show) === 'Object') {
            return this.returnIfVal(root, this.dealIfItem(root.show))
          }
          else if (Array.isArray(root.show)) {
            if (root.showOr) {
              for (let x of root.show) {
                if (this.dealIfItem(x) === true) {
                  return this.returnIfVal(root, true)
                }
              }
              return this.returnIfVal(root, false)
            }
            else {
              for (let x of root.show) {
                if (this.dealIfItem(x) === false) {
                  return this.returnIfVal(root, false)
                }
              }
              return this.returnIfVal(root, true)
            }
          }
          else if (myTypeof(root.show) === 'Function') {
            return this.returnIfVal(root, root.show(this.valGroup))
          }
        }
        else if (!root.showing) {
          this.$set(root, 'showing', true)
        }
        return true
      },
      /**
       * 判断表单项是否展示（私有）
       * @param show 表单项的展示配置数据
       * @returns {boolean}
       */
      dealIfItem(show) {
        if (show.reg && typeof show.reg.test === 'function') {
          return show.reg.test(this.valGroup[show.key])
        }
        else if (Array.isArray(show.val)) {
          for (let v of show.val) {
            if ((this.valGroup[show.key] || this.valGroup[show.key] === 0 || this.valGroup[show.key] === false) && v ===
              '.') {/*只要控制项有值及展示*/
              return true
            }
            else if (this.valGroup[show.key] === v) {
              return true
            }
          }
          return false
        }
        else {
          return false
        }
      },
      /**
       * 将是否展示的结果写入表单结构对象，同时处理默认值相关逻辑（私有）
       * @param root 表单项结构数据
       * @param {boolean}val 是否展示的结果
       */
      returnIfVal(root, val) {
        if (!root.showing && val && root.key) {
          this.$set(root, 'showing', val)

          if (root.defaultVal !== undefined) {/*对之前没展示且没值的表单项赋默认值*/
            if (root.tempKey) {
              if (this.tempKeys[root.tempKey] === null || this.tempKeys[root.tempKey] === undefined ||
                (myTypeof(this.tempKeys[root.tempKey]) === 'Object' || Array.isArray(this.tempKeys[root.tempKey])) &&
                _.isEmpty(this.tempKeys[root.tempKey])) {
                this.getTempKeyDefaultVal(root, this.tempKeys)
              }
            }
            else if (this.valGroup[root.key] === null || this.valGroup[root.key] === undefined) {
              this.$set(this.valGroup, root.key, root.defaultVal)
            }
            if (root.key2 && root.deafultVal2 !== undefined &&
              (this.valGroup[root.key2] === null || this.valGroup[root.key2] === undefined) && root.type !==
              'inputMap') {
              this.valGroup[root.key2] = root.defaultVal2
            }
          }
          if (root.tempKey) { /*在隐藏表单项展示时把它的值赋给统计对象*/
            this.tempKeysWatchHandle(this.tempKeys[root.tempKey], root)
          }
        }
        else {
          this.$set(root, 'showing', val)
        }
        return val
      },
      /**
       * 将使用tempKey的表单项的默认值赋转换成对应格式并储存(私有)
       * @param root 表单项结构数据
       * @param a 储存默认值的容器
       */
      getTempKeyDefaultVal(root, a) {
        switch (root.type) {
          case 'selectInput':
            a[root.tempKey] = {
              key: root.key,
              val: root.defaultVal
            }
            break
          case 'inputMap':
            if (root.key3) {
              a[root.tempKey] = {
                lng: root.defaultVal || 0,
                lat: root.defaultVal2 || 0,
                name: root.defaultVal3 || ''
              }
            }
            else {
              a[root.tempKey] = {
                lng: root.defaultVal || 0,
                lat: root.defaultVal2 || 0
              }
            }
            break
          case 'input':
          case 'inputNumber':
          case 'textarea':
            a[root.tempKey] = root.defaultVal
            break
          case 'radioGroup':
          case 'select':
          case 'checkboxGroup':
            if (root.booleanVal) {
              a[root.tempKey] = Boolean(root.defaultVal) ? 1 : 0
            }
            else {
              a[root.tempKey] = root.defaultVal
            }
            break
          case 'date':
          case 'time':
          case 'monthRange':
            if (root.dateType === 'date' || root.dateType === 'datetime' || root.dateType === 'time' ||
              root.dateType === 'year' || root.dateType === 'month') {
              a[root.tempKey] = root.defaultVal
            }
            else if (root.dateType === 'daterange' || root.dateType === 'datetimerange' || root.dateType ===
              'timerange' || root.type === 'monthRange') {
              a[root.tempKey] = root.defaultVal && root.defaultVal2 && [
                root.defaultVal, root.defaultVal2
              ] || []
            }
            break
        }
      },
      initFormDataT() { /*初始化表单结构（私有）*/
        let t = _.cloneDeep(this.formData)
        if (this.formTeam) {
          for (let box of t) {
            this.initItems(box)
          }
        }
        else {
          this.initItems(t)
        }
        this.formDataT = t
      },
      initItems(d) {
        for (let root of d) {
          switch (root.type) {
            case 'selectInput':
              const tempKeyF = 'selectInput' + Math.floor(Math.random() * 100000000)
              root.tempKey = tempKeyF
              this.$set(this.tempKeys, tempKeyF, {
                key: root.key || null,
                val: root.defaultVal || null
              })
              this.watchGroup.push(this.$watch(() => this.tempKeys[tempKeyF], after => {
                this.tempKeysWatchHandle(after, root)
              }, {immediate: true}))
              break
            case 'inputMap':
              const tempKeyE = 'inputMap' + Math.floor(Math.random() * 100000000)
              if (root.key) {
                root.tempKey = tempKeyE
                if (root.key3) {
                  this.$set(this.tempKeys, tempKeyE, root.defaultVal !== undefined && root.defaultVal2 !== undefined ? {
                    lng: root.defaultVal,
                    lat: root.defaultVal2,
                    name: root.defaultVal3 || ''
                  } : {
                    lng: null,
                    lat: null,
                    name: null
                  })
                }
                else {
                  this.$set(this.tempKeys, tempKeyE, root.defaultVal !== undefined && root.defaultVal2 !== undefined ? {
                    lng: root.defaultVal,
                    lat: root.defaultVal2
                  } : {
                    lng: null,
                    lat: null
                  })
                }
                this.watchGroup.push(this.$watch(() => this.tempKeys[tempKeyE], after => {
                  this.tempKeysWatchHandle(after, root)
                }, {immediate: true}))
              }
              break
            case 'input':
            case 'inputNumber':
            case 'textarea':
              const tempKeyD = 'inputT' + Math.floor(Math.random() * 100000000)
              if (root.key) {
                root.tempKey = tempKeyD
                this.$set(this.tempKeys, tempKeyD, root.defaultVal !== undefined ? root.defaultVal : null)
                this.watchGroup.push(this.$watch(() => this.tempKeys[tempKeyD], after => {
                  this.tempKeysWatchHandle(after, root)
                }, {immediate: true}))
              }
              break
            case 'select':
            case 'radioGroup':
            case 'checkboxGroup':
              if (!root.options) {
                root.options = []
              }
              if (root.asyncOption) { /*远程待选项*/
                if (root.changeOption) { /*待选项会根据条件改变*/
                  if (myTypeof(root.changeOption) === 'Object') {
                    if (root.changeOption.valKey && root.changeOption.key) {
                      this.watchGroup.push(this.$watch(() => this.valGroup[root.changeOption.valKey], after => {
                        let tV = _.cloneDeep(this.tempKeys[root.tempKey])
                        this.tempKeys[root.tempKey] = null

                        if ((after || after === 0 || after === false) && root.optionUrl) {
                          let urlT = root.optionUrl.indexOf('?') !== -1 ? root.optionUrl : root.optionUrl + '?'
                          this.initOption((urlT + '&' + root.changeOption.key + '=' + after).replace(/\?&/, '?'), root,
                            tV)
                        }
                        else {
                          root.options = []
                          if (root.localOption) {
                            root.options = [...root.localOption]
                          }
                          if (isValidValue(tV)) {
                            this.recoverVal(tV, root)
                          }
                        }
                      }, {immediate: true}))
                    }
                  }
                  else if (Array.isArray(root.changeOption)) {
                    let go = true
                    for (let cp of root.changeOption) { /*检验changeOption参数是否可用*/
                      if (!cp.valKey || !cp.key) {
                        go = false
                        break
                      }
                    }
                    if (go) {
                      this.watchGroup.push(this.$watch(() => {
                        let tUrl = ''
                        for (let cp of root.changeOption) {
                          let vT = this.valGroup[cp.valKey]
                          if (vT || vT === 0 || vT === false) {
                            /*如果条件有有效值，则拉取待选项*/
                            tUrl += ('&' + cp.key + '=' + vT)
                          }
                          else if (!cp.notRequired) {
                            /*条件为必填（notRequired!==true,默认必填），且没有有效值，则不拉取待选项*/
                            return false
                          }
                        }
                        return tUrl
                      }, after => {
                        let tV = _.cloneDeep(this.tempKeys[root.tempKey])
                        this.tempKeys[root.tempKey] = null

                        if (after && root.optionUrl) {
                          let urlT = root.optionUrl.indexOf('?') !== -1 ? root.optionUrl : root.optionUrl + '?'
                          this.initOption((urlT + after).replace(/\?&/, '?'), root, tV)
                        }
                        else {
                          root.options = []
                          if (root.localOption) {
                            root.options = [...root.localOption]
                          }

                          if (isValidValue(tV)) {
                            this.recoverVal(tV, root)
                          }
                        }
                      }, {
                        immediate: true
                      }))
                    }
                    else {
                      root.options = []
                      if (root.localOption) {
                        root.options = [...root.localOption]
                      }
                    }
                  }
                  else if (myTypeof(root.changeOption) === 'Boolean') {  /*设置changeOption为true时,当待选项地址改变后重新拉取待选项，在使用该表单组件的地方改变传入的formData对应项的optionUrl*/
                    this.watchGroup.push(
                      this.$watch(() => findCollection(this.formData, e => e.key === root.key).optionUrl, after => {
                        let tV = _.cloneDeep(this.tempKeys[root.tempKey])
                        this.tempKeys[root.tempKey] = null

                        if (after) {
                          this.initOption(after, root, tV)
                        }
                        else {
                          root.options = []
                          if (root.localOption) {
                            root.options = [...root.localOption]
                          }

                          if (isValidValue(tV)) {
                            this.recoverVal(tV, root)
                          }
                        }
                      }, {
                        immediate: true
                      }))
                  }
                }
                else {
                  this.initOption(root.optionUrl, root)
                }
              }
              else if (myTypeof(root.borrowOption) === 'String') {/*借用待选项*/
                root.options = findCollection(this.formDataT, e => e.key === root.borrowOption).options
              }

              const tempKeyC = 'opEle' + Math.floor(Math.random() * 100000000)
              if (root.key) {
                root.tempKey = tempKeyC
                if (root.type === 'select' && root.multiple || root.type === 'checkboxGroup') {
                  this.$set(this.tempKeys, tempKeyC, root.defaultVal !== undefined ? root.defaultVal : [])
                }
                else if (root.booleanVal) {
                  this.$set(this.tempKeys, tempKeyC,
                    root.defaultVal !== undefined ? (Boolean(root.defaultVal) ? 1 : 0) : null)
                }
                else {
                  this.$set(this.tempKeys, tempKeyC, root.defaultVal !== undefined ? root.defaultVal : null)
                }

                this.watchGroup.push(this.$watch(() => this.tempKeys[tempKeyC], after => {
                  this.tempKeysWatchHandle(after, root)
                }, {
                  immediate: true
                }))
              }
              break
            case 'date':
            case 'time':
            case 'monthRange':
              const tempKeyB = 'date' + Math.floor(Math.random() * 100000000)
              root.tempKey = tempKeyB
              if (root.dateType === 'date' || root.dateType === 'datetime' || root.dateType === 'time' ||
                root.dateType === 'year' || root.dateType === 'month') {
                this.$set(this.tempKeys, tempKeyB, root.defaultVal || null)
              }
              else if (root.dateType === 'daterange' || root.dateType === 'datetimerange' || root.dateType ===
                'timerange' || root.type === 'monthRange') {
                this.$set(this.tempKeys, tempKeyB, root.defaultVal && root.defaultVal2 && [
                  root.defaultVal, root.defaultVal2
                ] || [])
              }
              this.watchGroup.push(this.$watch(() => this.tempKeys[tempKeyB], after => {
                this.tempKeysWatchHandle(after, root)
              }))
              break
          }
        }
      },
      /**
       * 初始化表单项的选项，如下拉选项，多选、单选组选项（私有）
       * @param url 远程选项接口地址
       * @param root 表单项结构数据对象
       * @param itemVal 缓存的表单项旧值
       */
      initOption(url, root, itemVal) {
        $fetch.get(url)
          .then(r => {
            let tOption = (r && r.data && r.data.records) || (r && r.data) || r || []
            if (Array.isArray(tOption)) {
              if (myTypeof(root.optionFilter) === 'Function') {
                tOption = root.optionFilter(tOption)
              }
              if (root.optionLabel && root.optionVal) {
                /*label由多个字段组合成*/
                const arrLabel = Array.isArray(root.optionLabel)
                root.options.length = 0
                root.options.push(...tOption.map(eP => {
                  let rP = {}
                  if (arrLabel) {
                    /*组合成的label*/
                    let rL = ''
                    root.optionLabel.forEach((v, i) => {
                      /*需要在label中显示的字段的值*/
                      let lVal = String(eP[v])
                      if (i === 1) {
                        rL += ('（' + lVal)
                      }
                      else if (i > 1) {
                        rL += ('、' + lVal)
                      }
                      else {
                        rL += lVal
                      }
                    })
                    rP = {
                      label: rL + '）',
                      val: eP[root.optionVal]
                    }
                  }
                  else {
                    rP = {
                      label: eP[root.optionLabel],
                      val: eP[root.optionVal]
                    }
                  }
                  /*除了要收集绑定值，还要一并收集其他字段,则将其他字段加入到待选列表项*/
                  if (root.collectLabel) {
                    if (myTypeof(root.collectLabel) === 'Object') {
                      if (root.collectLabel.valKey && root.collectLabel.valKey !== 'label') {
                        rP[root.collectLabel.valKey] = eP[root.collectLabel.valKey]
                      }
                    }
                    else if (Array.isArray(root.collectLabel)) {
                      for (let tC of root.collectLabel) {
                        if (tC.valKey && tC.valKey !== 'label') {
                          rP[tC.valKey] = eP[tC.valKey]
                        }
                      }
                    }
                  }
                  if (rP.val !== null && rP.val !== undefined) {
                    return rP
                  }
                }))
              }
              else {
                root.options.length = 0
                root.options.push(...tOption)
              }
            }
            else {
              root.options.length = 0
            }
            if (root.localOption) {
              root.options.unshift(...root.localOption)
            }
            if (isValidValue(itemVal)) {
              this.recoverVal(itemVal, root)
            }

            /*待选项禁用*/
            if (root.disableOptionByOthers) {
              if (myTypeof(root.disableOptionByOthers) === 'String') {
                this.watchGroup.push(this.$watch(() => this.valGroup[root.disableOptionByOthers], (after) => {
                  this.clearTempKeyItem(root.tempKey)
                  for (let iP of root.options) {
                    if (iP.disabled) {
                      this.$set(iP, 'disabled', false)
                    }
                  }
                  if (after || after === 0 || after === false) {
                    for (let iP of root.options) {
                      if (iP.val === after) {
                        this.$set(iP, 'disabled', true)
                      }
                    }
                  }
                }, {
                  immediate: true
                }))
              }
              else if (Array.isArray(root.disableOptionByOthers)) {
                this.watchGroup.push(this.$watch(() => {
                  return root.disableOptionByOthers.filter(e => e).map(e => this.valGroup[e])
                }, after => {
                  this.clearTempKeyItem(root.tempKey)
                  for (let iP of root.options) {
                    if (iP.disabled) {
                      this.$set(iP, 'disabled', false)
                    }
                  }
                  if (after) {
                    for (let iP of root.options) {
                      for (let i = 0; i < after.length; i++) {
                        if (iP.val === after[i]) {
                          this.$set(iP, 'disabled', true)
                          after.splice(i, 1)
                          break
                        }
                      }
                    }
                  }
                }, {
                  immediate: true
                }))
              }
            }
          }).catch(e => {
          console.warn('拉取选项出错')
        })
      },
      /**
       * 如果options中选项的值和缓存的表单项旧值相等,则为表单项恢复之前因待选项改变而清除的值（私有）
       * @param itemVal 缓存的旧值
       * @param root 表单项结构数据对象
       */
      recoverVal(itemVal, root) {
        if (Array.isArray(root.options)) {
          if (_.findIndex(root.options, {val: itemVal}) !== -1) {
            this.tempKeys[root.tempKey] = itemVal
          }
        }
      },
      initValGroup() { /*初始化表单项值（私有）*/
        this.valGroup = {}
        if (this.formTeam) {
          for (let e of this.formData) {
            this.initValItems(e)
          }
        }
        else {
          this.initValItems(this.formData)
        }
      },
      /**
       * 根据表单结构数据，初始化valGroup
       * @param d 表单结构数据
       */
      initValItems(d) {
        for (let root of d) {
          if (root.key) {
            if (root.type === 'checkboxGroup' || root.type === 'select' && root.multiple) {
              this.$set(this.valGroup, root.key,
                root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : [])
            }
            else if (root.type === 'editor' || root.type === 'editorPro') {
              this.$set(this.valGroup, root.key,
                root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : '')
            }
            else {
              this.$set(this.valGroup, root.key,
                root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : null)
              if (root.key2) {
                this.$set(this.valGroup, root.key2,
                  root.defaultVal2 !== undefined && root.show === undefined ? root.defaultVal2 : null)
              }
            }
          }
        }
      },
      tempKeysWatchHandle(after, root) { /*将缓存表单值给统计对象（私有）*/
        if (root.showing) {
          switch (root.type) {
            case 'selectInput':
              if (after) {
                if (after.beforeKey) {
                  delete this.valGroup[after.beforeKey]
                }
                this.valGroup[after.key] = after.val
              }
              break
            case 'inputMap':
              if (after) {
                this.valGroup[root.key] = after.lng
                this.valGroup[root.key2] = after.lat
                if (root.key3) {
                  this.valGroup[root.key3] = after.name
                }
              }
              else {
                this.valGroup[root.key] = null
                this.valGroup[root.key2] = null
                if (root.key3) {
                  this.valGroup[root.key3] = null
                }
              }
              break
            case 'input':
            case 'inputNumber':
            case 'textarea':
              if (after || after === 0) {
                let reg = /^-?\d+(.\d+)?$/
                if (root.numberVal && reg.test(after)) {
                  this.valGroup[root.key] = Number(after)
                }
                else {
                  this.valGroup[root.key] = after
                }
              }
              else {
                this.valGroup[root.key] = null
              }
              break
            case 'select':
            case 'radioGroup':
            case 'checkboxGroup':
              if (root.booleanVal && (!root.multiple)) {
                this.valGroup[root.key] =
                  ((after === undefined || after === '' || after === null) ? null : Boolean(after))
              }
              else if (root.multiple || root.type === 'checkboxGroup') {
                this.valGroup[root.key] = Object.assign([], after)
              }
              else {
                this.valGroup[root.key] = after
              }
              /*除了要收集绑定值，还要一并收集其他字段*/
              if (root.collectLabel) {
                const targetOption = this.findOptions(root, after)

                if (myTypeof(root.collectLabel) === 'Object') {
                  if (root.collectLabel.key && root.collectLabel.valKey) {
                    const collectTempKey = this.findTempKey(root.collectLabel.key)
                    let t = null
                    if (Array.isArray(targetOption)) {
                      t = targetOption.map(e => e[root.collectLabel.valKey])
                      this.$set(this.valGroup, root.collectLabel.key, t)
                      if (collectTempKey) {
                        this.$set(this.tempKeys, collectTempKey, t)
                      }
                    }
                    else {
                      if (targetOption && isValidValue(targetOption[root.collectLabel.valKey])) {
                        t = targetOption[root.collectLabel.valKey]
                      }
                      this.$set(this.valGroup, root.collectLabel.key, t)
                      if (collectTempKey) {
                        this.$set(this.tempKeys, collectTempKey, t)
                      }
                    }

                    let sameKeyCom = findCollection(this.formDataT, e => e.key === root.collectLabel.key)
                    if (sameKeyCom && sameKeyCom.tempKey) {
                      this.tempKeys[sameKeyCom.tempKey] = this.valGroup[root.collectLabel.key]
                    }
                  }
                }
                else if (Array.isArray(root.collectLabel)) {
                  for (let l of root.collectLabel) {
                    if (l.key && l.valKey) {
                      const collectTempKey = this.findTempKey(l.key)
                      let t = null

                      if (Array.isArray(targetOption)) {
                        t = targetOption.map(e => e[l.valKey])
                        this.$set(this.valGroup, l.key, t)
                        if (collectTempKey) {
                          this.$set(this.tempKeys, collectTempKey, t)
                        }
                      }
                      else {
                        if (targetOption && isValidValue(targetOption[l.valKey])) {
                          t = targetOption[l.valKey]
                        }
                        this.$set(this.valGroup, l.key, t)
                        if (collectTempKey) {
                          this.$set(this.tempKeys, collectTempKey, t)
                        }
                      }

                      let sameKeyCom = findCollection(this.formDataT, e => e.key === l.key)
                      if (sameKeyCom && sameKeyCom.tempKey) {
                        this.tempKeys[sameKeyCom.tempKey] = this.valGroup[l.key]
                      }
                    }
                  }
                }
              }
              break
            case 'date':
            case 'time':
            case'monthRange':
              let tp = root.dateType

              const fm = {
                date: 'YYYY-MM-DD',
                daterange: 'YYYY-MM-DD',
                datetime: 'YYYY-MM-DD HH:mm:ss',
                datetimerange: 'YYYY-MM-DD HH:mm:ss',
                year: 'YYYY',
                month: 'MM'
              }

              if (tp === 'date' || tp === 'datetime' || tp === 'time' || tp === 'year' || tp === 'month') {
                if (after) {
                  if (tp === 'time') {
                    this.valGroup[root.key] = after
                  }
                  else {
                    this.valGroup[root.key] = moment(after).format(root.format || fm[tp])
                  }
                  if (tp === 'date' && root.addTime) {
                    this.valGroup[root.key] += ' 00:00:00'
                  }
                }
                else {
                  this.valGroup[root.key] = null
                }
              }
              else if (root.type === 'monthRange' || tp === 'daterange' || tp === 'datetimerange' || tp ===
                'timerange') {
                if (after && after[0] && after[1]) {
                  if (tp === 'timerange') {
                    this.valGroup[root.key] = after[0]
                    this.valGroup[root.key2] = after[1]
                  }
                  else if (root.type === 'monthRange') {
                    this.valGroup[root.key] = root.format && moment(after[0]).format(root.format) || after[0]
                    this.valGroup[root.key2] = root.format && moment(after[1]).format(root.format) || after[1]
                  }
                  else {
                    this.valGroup[root.key] = moment(after[0]).format(root.format || fm[tp])
                    this.valGroup[root.key2] = moment(after[1]).format(root.format || fm[tp])
                  }
                  if (tp === 'daterange' && root.addTime) {
                    this.valGroup[root.key] += ' 00:00:00'
                    this.valGroup[root.key2] += ' 23:59:59'
                  }
                }
                else {
                  this.valGroup[root.key] = null
                  this.valGroup[root.key2] = null
                }
              }
              break
          }
        }
      },
      findOptions(root, after) {/*collectLabel时找出选中的选项（私有）*/
        if (root.multiple || root.type === 'checkboxGroup') {
          if (after) {
            let t = []
            for (let e of root.options) {
              if (after.indexOf(e.val) !== -1) {
                t.push(e)
              }
            }
            return t
          }
          return false
        }
        else {
          if (after || after === 0 || after === false) {
            for (let e of root.options) {
              if (e.val === after) {
                return e
              }
            }
          }
          return false
        }
      },
      findTempKey(k) {
        if (this.formTeam) {
          for (let e of this.formDataT) {
            const t = this.findTempKeyItem(e, k)
            if (t) {
              return t
            }
          }
          return false
        }
        return this.findTempKeyItem(this.formDataT, k)
      },
      findTempKeyItem(d, k) {
        for (let root of d) {
          if (root.key === k) {
            return root.tempKey
          }
        }
        return false
      },
      setItemToValGroup(data, notClearOthers) { /*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示，公开）*/
        let t = {}
        for (let k in this.valGroup) {
          if (this.valGroup.hasOwnProperty(k) && data[k] !== undefined) {
            t[k] = data[k]
            delete data[k]
          }
        }
        this.updateValGroup(t, notClearOthers)
        for (let kk in data) {  /*用Object.assign出错，只有第一次能正常合并*/
          if (data.hasOwnProperty(kk)) {
            if (this.hiddenKeys.indexOf(kk) < 0) {
              this.hiddenKeys.push(kk)
            }
            this.$set(this.valGroup, kk, data[kk])
          }
        }
      },
      /**
       * 获取需要校验的表单项的key（私有）
       * @param d 更新的数据对象
       */
      getValidateKeys(d) {
        let t = _.cloneDeep(d)
        if (this.formTeam) {
          let r = []
          for (let e of this.formData) {
            r.push(...this.getValidateItems(e, t))
          }
          return r
        }
        return this.getValidateItems(this.formData, t)
      },
      /**
       * 获取需要校验的表单项的key（私有）
       * @param a 表单结构数据
       * @param d 更新的数据对象
       */
      getValidateItems(a, d) {
        return a.filter(e => {
          for (let k of Object.keys(d)) {
            /*需要校验的表单项满足条件：1.在更新队列；2.没有处于隐藏状态；3.不能是手动置空的表单项；*/
            if (e.key === k && this.showingKeys.indexOf(k) > -1 &&
              !(d[k] === null || (Array.isArray(d[k]) || myTypeof(d[k]) === 'Object') && _.isEmpty(d[k]))) {
              delete d[k]
              return true
            }
          }
          return false
        }).map(e => e.key)
      },
      /**
       * 更新表单项的值（只能更新已有字段，公开）
       * @param data 新数据
       * @param notClearOthers 是否清空其他表单项，默认清空
       */
      updateValGroup(data, notClearOthers = false) {
        let t = _.cloneDeep(data)
        this.updateTempKeys(data, notClearOthers)
        /*先更新tempKeys再更新valGroup 避免更新同key的tempKeys元素清空valGroup元素*/
        for (let k in this.valGroup) {
          if (this.valGroup.hasOwnProperty(k) && data[k] !== undefined && data[k] !== '--') {
            if (Array.isArray(data[k])) {
              data[k] = data[k].filter(e => e !== '--')
            }
            else if (myTypeof(data[k]) === 'Object') {
              for (let n in data[k]) {
                if (data[k].hasOwnProperty(n) && data[k][n] === '--') {
                  data[k][n] = null
                }
              }
            }
            this.valGroup[k] = data[k]
          }
          else if (!notClearOthers) {
            this.valGroup[k] = Array.isArray(this.valGroup[k]) ? [] : null
          }
        }
        this.validateFields(this.getValidateKeys(t))
      },
      /**
       * 更新未暴露表单项值（私有）
       * @param data 新数据
       * @param notClearOthers 是否清空其他表单项，默认清空
       */
      updateTempKeys(data, notClearOthers = false) {
        if (this.formTeam) {
          for (let t of this.formDataT) {
            this.updateTempKeyItem(t, data, notClearOthers)
          }
        }
        else {
          this.updateTempKeyItem(this.formDataT, data, notClearOthers)
        }
      },
      /**
       * 更新tampKey
       * @param a 表单结构数据
       * @param d 新数据
       * @param notClearOthers 是否清空其他表单项，默认清空
       */
      updateTempKeyItem(a, d, notClearOthers = false) {
        for (let root of a) {
          if ((notClearOthers && (d[root.key] !== undefined || d[root.key2] !== undefined) || !notClearOthers) &&
            root.tempKey) {
            switch (root.type) {
              case 'inputMap':
                if (myTypeof(d[root.key]) === 'Number' && myTypeof(d[root.key2] === 'Number')) {
                  if (root.key3) {
                    this.tempKeys[root.tempKey] = {
                      lng: d[root.key],
                      lat: d[root.key2],
                      name: d[root.key3]
                    }
                  }
                  else {
                    this.tempKeys[root.tempKey] = {
                      lng: d[root.key],
                      lat: d[root.key2]
                    }
                  }
                }
                else {
                  if (root.key3) {
                    this.tempKeys[root.tempKey] = {
                      lng: null,
                      lat: null,
                      name: null
                    }
                  }
                  else {
                    this.tempKeys[root.tempKey] = {
                      lng: null,
                      lat: null
                    }
                  }
                }
                break
              case 'input':
              case 'inputNumber':
              case 'textarea':
                if (d[root.key] && d[root.key] !== '--' || d[root.key] === 0) {
                  this.tempKeys[root.tempKey] = d[root.key]
                }
                else {
                  this.tempKeys[root.tempKey] = null
                }
                break
              case 'select':
              case 'radioGroup':
              case 'checkboxGroup':
                if (d[root.key] && d[root.key] !== '--' || d[root.key] === 0 || d[root.key] === false) {
                  if (root.multiple || root.type === 'checkboxGroup') {
                    this.$set(this.tempKeys, root.tempKey, [...d[root.key]])
                  }
                  else if (root.booleanVal) {
                    this.$set(this.tempKeys, root.tempKey, Boolean(d[root.key]) ? 1 : 0)
                  }
                  else {
                    this.$set(this.tempKeys, root.tempKey, d[root.key])
                  }
                }
                else {
                  if (root.multiple || root.type === 'checkboxGroup') {/*当notClearOthers为false时用来清空*/
                    this.$set(this.tempKeys, root.tempKey, [])
                  }
                  else {
                    this.$set(this.tempKeys, root.tempKey, null)
                  }
                }
                break
              case 'date':
              case 'time':
                if (root.dateType === 'date' || root.dateType === 'datetime' || root.dateType === 'year' ||
                  root.dateType === 'month' || root.dateType === 'time') {
                  this.tempKeys[root.tempKey] = d[root.key] && d[root.key] !== '--' ? d[root.key] : null
                }
                else if (root.dateType === 'daterange' || root.dateType === 'datetimerange' || root.dateType ===
                  'timerange') {
                  this.tempKeys[root.tempKey] =
                    d[root.key] && d[root.key] !== '--' && d[root.key2] && d[root.key2] !== '--' && [
                      d[root.key], d[root.key2]
                    ] || []
                }
                break
            }
          }
        }
      },
      /**
       * 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值（公开）；
       * @param {Object|Array} d 为对象（改变单个）或数组（改变多个），支持的属性：index（必填）-需要改变的formData项的索引值、
       * indexB-当表单为`分组表单`时必填（表示表单项的二位数组索引第二位）、需要改变的属性，如要改变第二个表单组件的label和title,
       * 则为:{index:1,label:XXX,title:XXX}
       */
      updateFormDataT(d) {
        if (Array.isArray(d)) {
          for (let e of d) {
            this.changeDataHandle(e)
          }
        }
        else if (myTypeof(d) === 'Object') {
          this.changeDataHandle(d)
        }
      },
      /**
       * 改变表单结构（私有）
       * @param d 同updateFormDataT的 d
       */
      changeDataHandle(d) {
        const {
          index,
          indexB,
          key,
          val
        } = d
        if (this.formTeam) {
          if ((index || index === 0) && (indexB || indexB === 0)) {
            if (key && (val || val !== undefined)) {
              this.$set(this.formDataT[index][indexB], key, val)
            }
            else {
              for (let k of Object.keys(d)) {
                if (k !== 'index' && key !== 'indexB') {
                  this.$set(this.formDataT[index][indexB], k, d[k])
                }
              }
            }
          }
        }
        else {
          if (index || index === 0) {
            if (key && (val || val !== undefined)) {
              this.$set(this.formDataT[index], key, val)
            }
            else {
              for (let k of Object.keys(d)) {
                if (k !== 'index') {
                  this.$set(this.formDataT[index], k, d[k])
                }
              }
            }
          }
        }
      },
      asyncLabelChange({
        label,
        root
      }) { /*更新远程数据级联名称（私有）*/
        if (root.key2) {
          this.$set(this.valGroup, root.key2, label)
        }
        this.itemChange({
          e: label,
          root
        })
      },
      onSelectInputChange(d) { /*更新选择输入框值（私有）*/
        if (d.beforeKey) {
          _.remove(this.selectInputKeys, o => o === d.beforeKey)
        }
        if (d.key) {
          if (this.selectInputKeys.indexOf(d.key) === -1) {
            this.selectInputKeys.push(d.key)
          }
          this.itemChange({
            e: null,
            root: d
          })
        }
      },
      alNameChange({
        name,
        root
      }) { /*更新行政区域名称（私有）*/
        if (root.key2) {
          this.valGroup[root.key2] = name
        }
        this.itemChange({
          e: name,
          root
        })
      },
      /**
       * 重新校验（私有）
       * @param e 事件的$event对象，一般是组件change事件的值
       * @param root 表单项结构数据
       */
      reValidateAndChangeHandle({
        e,
        root
      }) {
        this.itemChange({
          e: e,
          root
        })
        this.$nextTick(function () {
          this.$refs.formGroupXRef.validateField(root.key)
        })
      },
      /**
       * 表单项值更新（私有）
       * @param e 事件的$event对象，一般是组件change事件的值
       * @param root 表单项结构数据
       */
      itemChange({
        e,
        root
      }) {
        setTimeout(() => {
          let d = {
            event: e
          }
          if (root.key) {
            d[root.key] = this.valGroup[root.key]
          }
          if (root.key2) {
            d[root.key2] = this.valGroup[root.key2]
          }
          if (root.collectLabel && root.collectLabel.key) {
            d[root.collectLabel.key] = this.valGroup[root.collectLabel.key]
          }
          else if (Array.isArray(root.collectLabel)) {
            for (let l of root.collectLabel) {
              d[l.key] = this.valGroup[l.key]
            }
          }
          this.$emit('on-item-change', d)
        }, 500)
      },
      /**
       * 获取需要提交的数据(私有)
       * @return {{}}submit的值
       */
      getValGroup() {
        let t = {}
        for (let e of this.submitKeys) {
          t[e] = this.valGroup[e]
        }
        if (this.trim) {
          t = trimObj(t)
        }
        return t
      },
      validate() {/*主动验证整个表单（公开）*/
        this.$refs.formGroupXRef.validate()
      },
      /**
       * 手动验证表单项（公开）
       * @param prop 需要校验的表单项(rules中对应的key)
       */
      reValidate(prop) {
        setTimeout(() => {
          this.$refs.formGroupXRef.validateField(prop, () => {
          })
        }, 10)
      },
      /**
       * 批量校验部分表单
       * @param {Array}props 需要校验的表单prop集合
       */
      validateFields(props) {
        setTimeout(() => {
          if (Array.isArray(props)) {
            for (let e of props) {
              this.$refs.formGroupXRef.validateField(e, () => {
              })
            }
          }
        }, 10)
      },
      changeLoading(v) {/*主动改变表单按钮loading状态（在开启btnLoading的前提下，公开）*/
        if (v === undefined) {
          return
        }
        this.showLoading = Boolean(v)
      },
      submit() {/*触发提交事件（一般不需要调用，会通过插件内部提交按钮触发，公开）*/
        if (this.disabled) {
          return
        }
        this.$refs.formGroupXRef.validate(valid => {
          if (!this.debounceCount) {
            this.debounceCount = true
            if (valid) {
              this.showLoading = true

              this.$emit('on-submit', this.getValGroup())
            }
            setTimeout(() => {
              this.debounceCount = false
            }, 2000)
          }
        })
      }
    }
  }
</script>
