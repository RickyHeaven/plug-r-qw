<!--created 2019.07.11-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Form
      ref="formGroupXRef"
      :model="valGroup"
      :rules="formRulesT"
      :label-width="labelWidth"
      :inline="inline"
      :show-message="showMessage"
      class="formXN"
      :key="formReRenderKey"
  >
    <FormItem
        v-for="(item,index) of formDataT"
        v-if="getFormItemIfVal(item)"
        :key="'formItem'+index"
        :label="item.type !== 'radio'&&item.type !== 'checkbox'?item.label:' '"
        :prop="item.key||''"
        class="relativeBox"
        :class="{withInfo:Boolean(item.info),withTitle:Boolean(item.title),inlineFormItemXN: inline,noLabel: item.type === 'selectInput',[item.class]:item.class}"
        :style="formStyle"
    >
      <!--解决form只有一个input时enter触发页面刷新的问题-->
      <input type="text" style="display: none">
      <!--纯文本,也可以不传label和val,单纯用来布局占位-->
      <span v-if="item.type === 'txt'" :class="{likeInputX:item.likeInput}">{{item.valKey?valGroup[item.valKey]||'无':item.val}}</span>
      <!--数字输入框-->
      <InputNumber
          :style="itemStyle"
          v-else-if="item.type === 'inputNumber'"
          v-model="tempKeys[item.tempKey]"
          :max="(item.max||item.max===0)?item.max:Infinity"
          :min="(item.min||item.min===0)?item.min:-Infinity"
          :precision="item.precision"
          :step="item.step||1"
          :placeholder="item.placeholder||t('r.pInput')"
          :disabled="Boolean(item.disabled) || disabled"
          :readonly="Boolean(item.readonly)"
          :editable="item.editable !== false"
          @on-blur="itemChange($event,item)"
          :active-change="Boolean(item.activeChange)"
          :clearable="item.clearable!==false"
      />
      <!--输入框-->
      <Input
          :style="itemStyle"
          v-else-if="item.type === 'input'"
          v-model="tempKeys[item.tempKey]"
          :maxlength="item.maxLength||null"
          :placeholder="item.placeholder||t('r.pInput')"
          :disabled="Boolean(item.disabled) || disabled"
          @on-blur="reValidateAndChangeHandle($event,item)"
          :clearable="item.clearable!==false"
      />
      <!--下拉框-->
      <Select
          v-else-if="item.type === 'select'"
          v-model="tempKeys[item.tempKey]"
          :style="itemStyle"
          :filterable="(item.filterable === true || item.filterable === false)?item.filterable : false"
          :disabled="Boolean(item.disabled) || disabled"
          :multiple="Boolean(item.multiple)"
          :placeholder="item.placeholder||t('r.pSelect')"
          @on-clear="clearTempKeyItem($event,item.tempKey)"
          @on-change="reValidateAndChangeHandle($event,item)"
          transfer
          :clearable="item.clearable!==false"
      >
        <Option
            v-for="(optionItem,index) in item.options"
            :value="optionItem.val"
            :label="optionItem.label||optionItem.val"
            :key="'option-'+item.key + index"
            :disabled="!!optionItem.disabled"
        />
      </Select>
      <!--选择输入框（可以选择输入的key，比如选择是想收集体重还是身高）-->
      <select-input
          v-else-if="item.type === 'selectInput'"
          v-model="tempKeys[item.tempKey]"
          :label-width="labelWidth"
          :item-width="itemWidth"
          :select-option="item.options||[]"
          :placeholder="item.placeholder||t('r.pInput')"
          :clearable="item.clearable!==false"
          :disabled="Boolean(item.disabled) || disabled"
          @on-change="onSelectInputChange"
      />
      <!--行政区域级联-->
      <al-cascader-m-c
          :style="itemStyle"
          class="inlineBlock"
          v-else-if="item.type === 'alCascader'"
          v-model="valGroup[item.key]"
          :level="(item.level||item.level ===0)?item.level:2"
          :disabled="Boolean(item.disabled) || disabled"
          :filterable="item.filterable!==false"
          :placeholder="item.placeholder||t('r.pSelect')"
          :change-on-select="Boolean(item.changeOnSelect)"
          @on-name-change="alNameChange($event,item)"
      />
      <!--远程数据级联-->
      <async-cascader
          :style="itemStyle"
          v-else-if="item.type === 'asyncCascader'"
          v-model="valGroup[item.key]"
          :url="item.url||mgrUrl + '/web/v1/umc/orgs'"
          :option-val="item.optionVal||'id'"
          :option-label="item.optionLabel||'name'"
          :option-filter="item.optionFilter||null"
          :only-last-val="item.onlyLastVal !== false"
          :only-last-label="item.onlyLastLabel !== false"
          :separator="item.separator || '/'"
          :placeholder="item.placeholder || t('r.pSelect')"
          :filterable="Boolean(item.filterable)"
          :disabled="Boolean(item.disabled) || disabled"
          @on-label-change="asyncLabelChange($event,item)"
      />
      <!--单选（不可取消选择）-->
      <Radio
          v-else-if="item.type === 'radio'"
          v-model="valGroup[item.key]"
          :disabled="Boolean(item.disabled) || disabled"
          @on-change="reValidateAndChangeHandle($event,item)"
      >{{item.label}}</Radio>
      <!--单选组-->
      <RadioGroup
          :style="itemStyle"
          v-else-if="item.type === 'radioGroup'"
          @on-change="reValidateAndChangeHandle($event,item)"
          :type="item.buttonType ? 'button': null"
          v-model="tempKeys[item.tempKey]"
      >
        <Radio
            v-for="radioItem of item.options"
            :key="'radioItem'+radioItem.val"
            :label="radioItem.val"
            :border="Boolean(item.itemBorder)"
            :disabled="Boolean(item.disabled) || disabled||radioItem.disabled"
        >
          <Icon v-if="radioItem.icon && (!item.buttonType)" :type="radioItem.icon"/>
          <span>{{radioItem.label || radioItem.val}}</span>
        </Radio>
      </RadioGroup>
      <!--单选（可取消选择）-->
      <Checkbox
          v-else-if="item.type === 'checkbox'"
          v-model="valGroup[item.key]"
          :disabled="!!item.disabled"
          @on-change="reValidateAndChangeHandle($event,item)"
      >{{item.label}}</Checkbox>
      <!--多选组-->
      <CheckboxGroup
          :style="itemStyle"
          v-else-if="item.type === 'checkboxGroup'"
          v-model="tempKeys[item.tempKey]"
          @on-change="reValidateAndChangeHandle($event,item)"
      >
        <Checkbox
            v-for="checkItem of item.options"
            :key="'checkItem'+checkItem.val"
            :label="checkItem.val"
            :disabled="Boolean(item.disabled) || disabled ||checkItem.disabled"
        >
          <Icon v-if="checkItem.icon" :type="checkItem.icon"/>
          <span>{{checkItem.label||checkItem.val}}</span>
        </Checkbox>
      </CheckboxGroup>
      <!--文本框-->
      <Input
          v-else-if="item.type === 'textarea'"
          type="textarea"
          v-model="tempKeys[item.tempKey]"
          :autosize="{minRows: 2}"
          :style="itemStyle"
          :maxlength="item.maxLength||null"
          :placeholder="item.placeholder || t('r.pInput')"
          :disabled="Boolean(item.disabled) || disabled"
          @on-blur="reValidateAndChangeHandle($event,item)"
          :clearable="item.clearable!==false"
      />
      <!--上传组件-->
      <upload-group
          :style="itemStyle"
          class="inlineBlock"
          v-else-if="item.type === 'upload'"
          v-model="valGroup[item.key]"
          :url="item.url||uploadUrl"
          :manual-upload="Boolean(item.manualUpload)"
          :format="item.format||[]"
          :data="item.data"
          :max-size="item.maxSize||0"
          :show-img="Boolean(item.showImg)"
          :length="item.length||0"
          :disabled="Boolean(item.disabled) || disabled"
          :withCredentials="item.withCredentials!==false"
          @on-file-id-change="reValidateAndChangeHandle($event,item)"
      />
      <!--日期选择器-->
      <DatePicker
          :style="itemStyle"
          v-else-if="item.type === 'date'"
          v-model="tempKeys[item.tempKey]"
          :type="item.dateType"
          :disabled="Boolean(item.disabled) || disabled"
          placement="bottom-end"
          :placeholder="item.placeholder||t('r.selectDate')"
          :options="item.dateOptions||null"
          :clearable="item.clearable!==false"
          :editable="false"
          transfer
          @on-change="itemChange($event,item)"
      />
      <!--富文本编辑器-->
      <editor
          class="inlineBlock"
          :style="itemStyle"
          v-else-if="item.type === 'editor'"
          v-model="valGroup[item.key]"
          :placeholder="item.placeholder || t('r.pInput')"
          :disabled="Boolean(item.disabled) || disabled"
          :uploadImgMaxSize="item.uploadImgMaxSize||(100 * 1024)"
          :uploadImgMaxLength="item.uploadImgMaxLength||10"
          :uploadImgShowBase64="item.uploadImgShowBase64!==false"
          :showLinkImg="item.showLinkImg!==false"
          :uploadImgServe="item.uploadImgServe"
          @on-change="reValidateAndChangeHandle($event,item)"
      />
      <input-map
          v-else-if="item.type === 'inputMap'"
          v-model="tempKeys[item.tempKey]"
          :style="itemStyle"
          :placeholder="item.placeholder || t('r.search')"
          :disabled="Boolean(item.disabled) || disabled"
          :show-map="item.showMap!==false"
          :height="item.mapHeight||'250px'"
          @on-change="reValidateAndChangeHandle($event,item)"
      />
      <div
          v-else-if="item.type === 'custom'"
          class="inlineBlock"
          :style="itemStyle"
      >
        <slot :name="item.slotName" :val-group="valGroup"/>
      </div>
      <!--表单项提示文字-->
      <div v-if="Boolean(item.info)" class="formInfoTxtXN">{{item.info}}</div>
      <!--表单项标题-->
      <div v-if="Boolean(item.title)" class="formTitleTxtXN">{{item.title}}</div>
    </FormItem>
    <!--长提交按钮-->
    <FormItem v-if="showLongOkBt">
      <Button @click="submit" :style="itemStyle" type="primary" :loading="btnLoading&&showLoading" :disabled="disabled">{{longOkBtTxt||t('r.confirm')}}</Button>
    </FormItem>
    <div class="inlineBlock">
      <!--短提交按钮（查询）-->
      <Button
          v-if="showInlineOkBt" type="primary" :class="{inlineFormBtXN:inline,okBtnXN:true}" @click="submit"
          :loading="btnLoading&&showLoading" :disabled="disabled"
      >{{inlineOkBtTxt||t('r.confirm')}}</Button>
      <!--取消按钮（清除）-->
      <Button v-if="showInlineClearBt" @click="resetForm" :class="{inlineFormBtXN:inline}" type="dashed">{{inlineClearBtTxt||t('r.clear')}}</Button>
    </div>
  </Form>
</template>

<script>
  import moment from 'moment'
  import _ from 'lodash'
  import {myTypeof, isValidValue, trimObj} from "../../methods/functionGroup"
  import $fetch from '../../methods/fetch'
  import selectInput from '../selectInput/selectInput.vue'
  import alCascaderMC from '../alCascaderMC/alCascaderMC.vue'
  import asyncCascader from '../asyncCascader/asyncCascader.vue'
  import uploadGroup from '../uploadGroup/uploadGroup.vue'
  import editor from '../editor/editor.vue'
  import inputMap from '../inputMap/inputMap.vue'
  import Locale from '../../mixins/locale'
  import {setTimeout} from '../../methods/timer'

  export default {
    name: "formR",
    mixins: [Locale],
    components: {
      selectInput,
      alCascaderMC,
      asyncCascader,
      uploadGroup,
      editor,
      inputMap
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
      }
    },
    data() {
      return {
        valGroup: {}, /*表单项值，对外公开，提交时传递到外层*/
        formDataT: [], /*表单结构数据*/
        tempKeys: {}, /*不对外暴露表单项值*/
        unwatchGroup: []/*需要监听的事件集合*/,
        mgrUrl: window.g && window.g.mgrURL || null,
        selectInputKeys: [], /*selectInput的key没有写死在formData中（因为是动态的）,为了在showingKeys中能捕捉到这类组件的key,特声明此变量*/
        hiddenKeys: [], /*通过 setItemToValGroup 直接存入valGroup的字段*/
        showLoading: false,
        formReRenderKey: Math.floor(Math.random() * 100000000 + 1000), /*刷新表单*/
        clientHeightR: 0,
        uploadUrl: window.g && window.g.mgrURL && window.g.mgrURL + '/web/v1/fsc/file' || '/file', /*上传组件的文件上传地址，远程上传（直接上传到服务器）时，如果没设置，则用该地址*/
        debounceCount: false
      }
    },
    computed: {
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
        let temp = _.cloneDeep(this.formRules)
        for (let key in temp) {
          if (temp.hasOwnProperty(key)) {
            if (myTypeof(temp[key]) === 'Array') {
              for (let item of temp[key]) {
                if (!(item.message || item.validator)) {
                  item.message = this.t('r.required')
                }
              }
            }
            else if (myTypeof(temp[key]) === 'Object') {
              if ((!temp[key].message || temp[key].validator)) {
                temp[key].message = this.t('r.required')
              }
            }
          }
        }
        return temp
      },
      showingKeys() { /*展示的key(需要提交的)*/
        let temp = []
        for (let item of this.formDataT) {
          if (item.showing === true && item.key && item.type !== 'selectInput') {
            temp.push(item.key)
            if (item.key2) {
              temp.push(item.key2)
            }
            if (item.collectLabel) {
              if (_.isPlainObject(item.collectLabel) && item.collectLabel.key) {
                temp.push(item.collectLabel.key)
              }
              else if (_.isArray(item.collectLabel)) {
                for (let labelItem of item.collectLabel) {
                  if (labelItem.key) {
                    temp.push(labelItem.key)
                  }
                }
              }
            }
          }
        }
        temp.push(...[
          ...this.selectInputKeys,
          ...this.hiddenKeys
        ])
        return temp
      }
    },
    created() {
      this.initValGroup()
      this.initFormDataT()
    },
    methods: {
      resetForm() { /*重置表单，会清空表单值并刷新表单dom，异步方法（公开）*/
        return new Promise((resolve) => {
          this.clearForm()
          this.refreshFormDom().then(() => {
            this.$emit('on-reset')
            resolve()
          })
        })
      },
      reRenderForm() { /*重新渲染表单，异步方法（公开）*/
        return new Promise(resolve => {
          for (let item of this.unwatchGroup) {
            item()
          }
          this.tempKeys = {}
          this.initValGroup()
          this.initFormDataT()
          
          this.refreshFormDom().then(() => {
            this.heightChange()
            this.$emit('on-re-render')
            resolve()
          })
        })
      },
      refreshFormDom() {/*刷新表单dom，异步方法（公开）*/
        return new Promise(resolve => {
          this.formReRenderKey = Math.floor(Math.random() * 100000000 + 1000)
          /*刷新表单*/
          this.$nextTick(function () {
            resolve()
          })
        })
      },
      clearForm() { /*清空表单值（私有，不推荐直接调用，可以调用resetForm）*/
        let defaultV = this.getDefaultValues()

        for (let key in this.valGroup) {
          if (this.valGroup.hasOwnProperty(key)) {
            if (isValidValue(defaultV[key])) {
              this.$set(this.valGroup, key, defaultV[key])
            }
            else {
              if (myTypeof(this.valGroup[key]) === 'Array') {
                this.$set(this.valGroup, key, [])
              }
              else if (myTypeof(this.valGroup[key]) === 'Boolean') {
                this.$set(this.valGroup, key, false)
              }
              else {
                const formItem = _.find(this.formData, [
                  'key',
                  key
                ])
                if (formItem && formItem.type === 'editor') {
                  this.$set(this.valGroup, key, '')
                }
                else {
                  this.$set(this.valGroup, key, null)
                }
              }
            }
          }
        }
        this.clearTempKeys(defaultV)
      },
      clearTempKeys(defaultV) { /*清空缓存表单值（私有，不推荐直接调用，可以调用resetForm）*/
        for (let key in this.tempKeys) {
          if (this.tempKeys.hasOwnProperty(key)) {
            if (isValidValue(defaultV[key])) {
              this.$set(this.tempKeys, key, defaultV[key])
            }
            else {
              if (myTypeof(this.tempKeys[key]) === 'Array') {
                this.$set(this.tempKeys, key, [])
              }
              else if (myTypeof(this.tempKeys[key]) === 'Object' && this.tempKeys[key].hasOwnProperty('key') &&
                this.tempKeys[key].hasOwnProperty('val')) {
                /*selectInput*/
                this.$set(this.tempKeys[key], 'val', null)
              }
              else {
                this.$set(this.tempKeys, key, null)
              }
            }
          }
        }
      },
      clearTempKeyItem(key) { /*清空缓存表单项值（私有）*/
        let defaultV = this.getDefaultValues()
        if (isValidValue(defaultV[key])) {
          this.$set(this.tempKeys, key, defaultV[key])
        }
        else {
          if (myTypeof(this.tempKeys) === 'Array') {
            this.tempKeys[key] = []
          }
          else {
            this.tempKeys[key] = null
          }
        }
      },
      getDefaultValues() {/*获取默认值（私有）*/
        let temp = {}
        for (let e of this.formDataT) {
          if (e.tempKey && isValidValue(e.defaultVal)) {
            if (e.booleanVal) {
              temp[e.tempKey] = e.defaultVal ? 1 : 0
            }
            else {
              temp[e.tempKey] = e.defaultVal
            }
          }
          if (e.key && isValidValue(e.defaultVal)) {
            temp[e.key] = e.defaultVal
          }
          if (e.key2 && isValidValue(e.defaultVal2)) {
            temp[e.key2] = e.defaultVal2
          }
        }
        return temp
      },
      getFormItemIfVal(item) { /*判断是否展示表单项（私有）*/
        if (item.show) {
          if (myTypeof(item.show) === 'Object') {
            return this.returnIfVal(item, this.dealIfItem(item.show))
          }
          else if (myTypeof(item.show) === 'Array') {
            if (item.showOr) {
              for (let itemX of item.show) {
                if (this.dealIfItem(itemX) === true) {
                  return this.returnIfVal(item, true)
                }
              }
              return this.returnIfVal(item, false)
            }
            else {
              for (let itemX of item.show) {
                if (this.dealIfItem(itemX) === false) {
                  return this.returnIfVal(item, false)
                }
              }
              return this.returnIfVal(item, true)
            }
          }
        }
        else {
          this.$set(item, 'showing', true)
          return true
        }
      },
      dealIfItem(item) { /*处理展示表单项逻辑（私有）*/
        if (myTypeof(item.val) === 'Array') {
          for (let val of item.val) {
            if ((this.valGroup[item.key] || this.valGroup[item.key] === 0 || this.valGroup[item.key] === false) &&
              val === '.') {/*只要控制项有值及展示*/
              return true
            }
            else if (this.valGroup[item.key] === val) {
              return true
            }
          }
          return false
        }
        else {
          return false
        }
      },
      returnIfVal(root, val) { /*处理表单项展示逻辑（私有）*/
        if (val && root.key) {
          if (root.defaultVal !== undefined) {/*对之前没展示且没值的表单项赋默认值*/
            if (root.tempKey) {
              if (this.tempKeys[root.tempKey] === null ||
                ((_.isPlainObject(this.tempKeys[root.tempKey]) || _.isArray(this.tempKeys[root.tempKey])) &&
                  _.isEmpty(this.tempKeys[root.tempKey]))) {
                if (root.type === 'input' || root.type === 'inputNumber' || root.type === 'textarea' || root.type ===
                  'select' || root.type === 'checkboxGroup') {
                  this.tempKeys[root.tempKey] = root.defaultVal
                }
                else if (root.type === 'inputMap') {
                  this.tempKeys[root.tempKey] = {
                    lng: root.defaultVal,
                    lat: root.defaultVal2
                  }
                }
                else if (root.type === 'date') {
                  if (root.dateType === 'date' || root.dateType === 'datetime') {
                    this.tempKeys[root.tempKey] = root.defaultVal
                  }
                  else if (root.dateType === 'daterange' || root.dateType === 'datetimerange') {
                    this.tempKeys[root.tempKey] = item.defaultVal && item.defaultVal2 && [
                      root.defaultVal,
                      root.defaultVal2
                    ] || []
                  }
                  else if (item.dateType === 'year' || item.dateType === 'month') {
                    this.$set(this.tempKeys, tempKeyB, item.defaultVal)
                  }
                }
              }
            }
            else if (this.valGroup[root.key] === null) {
              this.$set(this.valGroup, root.key, root.defaultVal)
            }
            if (root.key2 && root.deafultVal2 !== undefined && this.valGroup[root.key2] === null && root.type !==
              'inputMap') {
              this.valGroup[root.key2] = root.defaultVal2
            }
          }
          if (root.tempKey) { /*在隐藏表单项展示时把它的值赋给统计对象*/
            this.tempKeysWatchHandle(this.tempKeys[root.tempKey], root)
          }
        }
        this.$set(root, 'showing', val)
        return val
      },
      initFormDataT() { /*初始化表单结构（私有）*/
        let temp = _.cloneDeep(this.formData)
        for (let item of temp) {
          switch (item.type) {
            case 'selectInput':
              const tempKeyF = 'selectInput' + Math.floor(Math.random() * 100000000)
              item.tempKey = tempKeyF
              this.$set(this.tempKeys, tempKeyF, {
                key: item.key || null,
                val: item.defaultVal || null
              })
              this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyF], after => {
                this.tempKeysWatchHandle(after, item)
              }, {immediate: true}))
              break
            case 'inputMap':
              const tempKeyE = 'inputMap' + Math.floor(Math.random() * 100000000)
              if (item.key) {
                item.tempKey = tempKeyE
                this.$set(this.tempKeys, tempKeyE, item.defaultVal !== undefined && item.defaultVal2 !== undefined ? {
                  lng: item.defaultVal,
                  lat: item.defaultVal2
                } : {
                  lng: null,
                  lat: null
                })
                this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyE], after => {
                  this.tempKeysWatchHandle(after, item)
                }, {immediate: true}))
              }
              break
            case 'input':
            case 'inputNumber':
            case 'textarea':
              const tempKeyD = 'inputT' + Math.floor(Math.random() * 100000000)
              if (item.key) {
                item.tempKey = tempKeyD
                this.$set(this.tempKeys, tempKeyD, item.defaultVal !== undefined ? item.defaultVal : null)
                this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyD], after => {
                  this.tempKeysWatchHandle(after, item)
                }, {immediate: true}))
              }
              break
            case 'select':
            case 'radioGroup':
            case 'checkboxGroup':
              if (!item.options) {
                item.options = []
              }
              if (item.asyncOption) { /*远程待选项*/
                if (item.changeOption) { /*待选项会根据条件改变*/
                  if (_.isPlainObject(item.changeOption)) {
                    if (item.changeOption.valKey && item.changeOption.key) {
                      this.unwatchGroup.push(this.$watch(() => this.valGroup[item.changeOption.valKey], after => {
                        let tempVal = _.cloneDeep(this.tempKeys[item.tempKey])
                        this.tempKeys[item.tempKey] = null
                        
                        if ((after || after === 0 || after === false) && item.optionUrl) {
                          let urlTA = item.optionUrl.indexOf('?') !== -1 ? item.optionUrl : item.optionUrl + '?'
                          this.initOption((urlTA + '&' + item.changeOption.key + '=' + after).replace(/\?&/, '?'), item,
                            tempVal)
                        }
                        else {
                          item.options = []
                          if (item.localOption) {
                            item.options = [...item.localOption]
                          }
                          if (isValidValue(tempVal)) {
                            this.recoverVal(tempVal, item)
                          }
                        }
                      }, {immediate: true}))
                    }
                  }
                  else if (_.isArray(item.changeOption)) {
                    let continueInitOp = true
                    for (let itemCO of item.changeOption) { /*检验changeOption参数是否可用*/
                      if ((!itemCO.valKey) || (!itemCO.key)) {
                        continueInitOp = false
                        break
                      }
                    }
                    if (continueInitOp) {
                      this.unwatchGroup.push(this.$watch(() => {
                        let tempParamUrl = ''
                        for (let itemCOT of item.changeOption) {
                          let valKeyTT = this.valGroup[itemCOT.valKey]
                          if (valKeyTT || valKeyTT === 0 || valKeyTT === false) {
                            /*如果条件有有效值，则拉取待选项*/
                            tempParamUrl += ('&' + itemCOT.key + '=' + valKeyTT)
                          }
                          else if (!itemCOT.notRequired) {
                            /*条件为必填（notRequired!==true,默认必填），且没有有效值，则不拉取待选项*/
                            return false
                          }
                        }
                        return tempParamUrl
                      }, after => {
                        let tempVal = _.cloneDeep(this.tempKeys[item.tempKey])
                        this.tempKeys[item.tempKey] = null
                        
                        if (after && item.optionUrl) {
                          let urlTA = item.optionUrl.indexOf('?') !== -1 ? item.optionUrl : item.optionUrl + '?'
                          this.initOption((urlTA + after).replace(/\?&/, '?'), item, tempVal)
                        }
                        else {
                          item.options = []
                          if (item.localOption) {
                            item.options = [...item.localOption]
                          }
                          
                          if (isValidValue(tempVal)) {
                            this.recoverVal(tempVal, item)
                          }
                        }
                      }, {
                        immediate: true
                      }))
                    }
                    else {
                      item.options = []
                      if (item.localOption) {
                        item.options = [...item.localOption]
                      }
                    }
                  }
                  else if (_.isBoolean(item.changeOption)) {  /*设置changeOption为true时,当待选项地址改变后重新拉取待选项，在使用该表单组件的地方改变传入的formData对应项的optionUrl*/
                    this.unwatchGroup.push(this.$watch(() => this.formData[_.indexOf(temp, item)].optionUrl, after => {
                      let tempVal = _.cloneDeep(this.tempKeys[item.tempKey])
                      this.tempKeys[item.tempKey] = null
                      
                      if (after) {
                        this.initOption(after, item, tempVal)
                      }
                      else {
                        item.options = []
                        if (item.localOption) {
                          item.options = [...item.localOption]
                        }
                        
                        if (isValidValue(tempVal)) {
                          this.recoverVal(tempVal, item)
                        }
                      }
                    }, {
                      immediate: true
                    }))
                  }
                }
                else {
                  this.initOption(item.optionUrl, item)
                }
              }
              else if (myTypeof(item.borrowOption) === 'String') {/*借用待选项*/
                item.options = _.find(temp, {key: item.borrowOption}).options
              }

              const tempKeyC = 'opEle' + Math.floor(Math.random() * 100000000)
              if (item.key) {
                item.tempKey = tempKeyC
                if (item.type === 'select' && item.multiple || item.type === 'checkboxGroup') {
                  this.$set(this.tempKeys, tempKeyC, item.defaultVal !== undefined ? item.defaultVal : [])
                }
                else if (item.booleanVal) {
                  this.$set(this.tempKeys, tempKeyC,
                    item.defaultVal !== undefined ? (Boolean(item.defaultVal) ? 1 : 0) : null)
                }
                else {
                  this.$set(this.tempKeys, tempKeyC, item.defaultVal !== undefined ? item.defaultVal : null)
                }

                this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyC], after => {
                  this.tempKeysWatchHandle(after, item)
                }, {
                  immediate: true
                }))
              }
              break
            case 'date':
              const tempKeyB = 'date' + Math.floor(Math.random() * 100000000)
              item.tempKey = tempKeyB
              if (item.dateType === 'date' || item.dateType === 'datetime') {
                this.$set(this.tempKeys, tempKeyB, item.defaultVal || null)
              }
              else if (item.dateType === 'daterange' || item.dateType === 'datetimerange') {
                this.$set(this.tempKeys, tempKeyB, item.defaultVal && item.defaultVal2 && [
                  item.defaultVal,
                  item.defaultVal2
                ] || [])
              }
              else if (item.dateType === 'year' || item.dateType === 'month') {
                this.$set(this.tempKeys, tempKeyB, item.defaultVal || null)
              }
              this.unwatchGroup.push(this.$watch(() => this.tempKeys[tempKeyB], after => {
                this.tempKeysWatchHandle(after, item)
              }))
              break
          }
        }
        this.formDataT = temp
      },
      initOption(url, item, val) { /*初始化表单项的选项，如下拉选项，多选、单选组选项（私有）*/
        $fetch.get(url)
          .then(r => {
            let tempOption
            if (r && r.data && r.data.records) {
              tempOption = r.data.records || []
            }
            else if (r && r.data) {
              tempOption = r.data || []
            }
            else if (r) {
              tempOption = r || []
            }
            else {
              tempOption = []
            }
            if (myTypeof(tempOption) === 'Array') {
              if (myTypeof(item.optionFilter) === 'Function') {
                tempOption = item.optionFilter(tempOption)
              }
              if (item.optionLabel && item.optionVal) {
                let opLabelType = myTypeof(item.optionLabel)
                item.options.length = 0
                item.options.push(...tempOption.map(tItem => {
                  let opItemT = {}
                  if (opLabelType === 'Array') {
                    let labelTT = ''
                    item.optionLabel.forEach((lVal, lIndexZ) => {
                      let lTT = String(tItem[lVal])
                      if (lIndexZ === 1) {
                        labelTT += ('（' + lTT)
                      }
                      else if (lIndexZ > 1) {
                        labelTT += ('、' + lTT)
                      }
                      else {
                        labelTT += lTT
                      }
                    })
                    opItemT = {
                      label: labelTT + '）',
                      val: tItem[item.optionVal]
                    }
                  }
                  else {
                    opItemT = {
                      label: tItem[item.optionLabel],
                      val: tItem[item.optionVal]
                    }
                  }
                  /*除了要收集绑定值，还要一并收集其他字段,则将其他字段加入到待选列表项*/
                  if (item.collectLabel) {
                    if (_.isPlainObject(item.collectLabel)) {
                      if (item.collectLabel.valKey && item.collectLabel.valKey !== 'label') {
                        opItemT[item.collectLabel.valKey] = tItem[item.collectLabel.valKey]
                      }
                    }
                    else if (_.isArray(item.collectLabel)) {
                      for (let labelItem of item.collectLabel) {
                        if (labelItem.valKey && labelItem.valKey !== 'label') {
                          opItemT[labelItem.valKey] = tItem[labelItem.valKey]
                        }
                      }
                    }
                  }
                  if (opItemT.val !== null && opItemT.val !== undefined) {
                    return opItemT
                  }
                }))
              }
              else {
                item.options.length = 0
                item.options.push(...tempOption)
              }
            }
            else {
              item.options.length = 0
            }
            if (item.localOption) {
              item.options.unshift(...item.localOption)
            }
            if (isValidValue(val)) {
              this.recoverVal(val, item)
            }

            /*待选项禁用*/
            if (item.disableOptionByOthers) {
              if (_.isString(item.disableOptionByOthers)) {
                this.unwatchGroup.push(this.$watch(() => {
                  return this.valGroup[item.disableOptionByOthers]
                }, (after) => {
                  this.clearTempKeyItem(item.tempKey)
                  for (let iM of item.options) {
                    if (iM.disabled) {
                      this.$set(iM, 'disabled', false)
                    }
                  }
                  if (after || after === 0 || after === false) {
                    for (let iM of item.options) {
                      if (iM.val === after) {
                        this.$set(iM, 'disabled', true)
                      }
                    }
                  }
                }, {
                  immediate: true
                }))
              }
              else if (_.isArray(item.disableOptionByOthers)) {
                this.unwatchGroup.push(this.$watch(() => {
                  let teKI = []
                  for (let ikL of item.disableOptionByOthers) {
                    if (ikL) {
                      teKI.push(this.valGroup[ikL])
                    }
                  }
                  return teKI
                }, (after) => {
                  this.clearTempKeyItem(item.tempKey)
                  for (let IKL of item.options) {
                    if (IKL.disabled) {
                      this.$set(IKL, 'disabled', false)
                    }
                  }
                  if (after) {
                    for (let iM of item.options) {
                      for (let OPL = 0; OPL < after.length; OPL++) {
                        if (iM.val === after[OPL]) {
                          this.$set(iM, 'disabled', true)
                          after.splice(OPL, 1)
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
          })
      },
      recoverVal(val, root) {/*如果待选项options中存在val,则为组件恢复之前因待选项改变而清除的值（私有）*/
        if (_.isArray(root.options)) {
          if (_.findIndex(root.options, {val: val}) !== -1) {
            this.tempKeys[root.tempKey] = val
          }
        }
      },
      initValGroup() { /*初始化表单项值（私有）*/
        this.valGroup = {}
        for (let item of this.formData) {
          if (item.key) {
            if (item.type === 'checkboxGroup' || (item.type === 'select' && item.multiple)) {
              this.$set(this.valGroup, item.key,
                item.defaultVal !== undefined && item.show === undefined ? item.defaultVal : [])
            }
            else if (item.type === 'editor') {
              this.$set(this.valGroup, item.key,
                item.defaultVal !== undefined && item.show === undefined ? item.defaultVal : '')
            }
            else {
              this.$set(this.valGroup, item.key,
                item.defaultVal !== undefined && item.show === undefined ? item.defaultVal : null)
              if (item.key2) {
                this.$set(this.valGroup, item.key2,
                  item.defaultVal2 !== undefined && item.show === undefined ? item.defaultVal2 : null)
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
              }
              else {
                this.valGroup[root.key] = null
                this.valGroup[root.key2] = null
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

                if (_.isPlainObject(root.collectLabel)) {
                  if (root.collectLabel.key && root.collectLabel.valKey) {
                    if (_.isArray(targetOption)) {
                      this.$set(this.valGroup, root.collectLabel.key,
                        targetOption.map(e => e[root.collectLabel.valKey]))
                    }
                    else {
                      this.$set(this.valGroup, root.collectLabel.key,
                        targetOption && targetOption[root.collectLabel.valKey] || null)
                    }
                  }
                }
                else if (_.isArray(root.collectLabel)) {
                  for (let item of root.collectLabel) {
                    if (item.key && item.valKey) {
                      if (_.isArray(targetOption)) {
                        this.$set(this.valGroup, item.key, targetOption.map(e => e[item.valKey]))
                      }
                      else {
                        this.$set(this.valGroup, item.key, targetOption && targetOption[item.valKey] || null)
                      }
                    }
                  }
                }
              }
              break
            case 'date':
              const format = root.format || 'YYYY-MM-DD'
              const formatB = root.format || 'YYYY-MM-DD HH:mm:ss'
              const formatC = root.format || 'YYYY'
              const formatD = root.format || 'MM'
              if (root.dateType === 'date') {
                if (after) {
                  this.valGroup[root.key] = moment(after)
                    .format(format)
                  if (root.addTime) {
                    this.valGroup[root.key] += ' 00:00:00'
                  }
                }
                else {
                  this.valGroup[root.key] = null
                }
              }
              else if (root.dateType === 'daterange') {
                if (after && after[0] && after[1]) {
                  this.valGroup[root.key] = moment(after[0])
                    .format(format)
                  this.valGroup[root.key2] = moment(after[1])
                    .format(format)
                  if (root.addTime) {
                    this.valGroup[root.key] += ' 00:00:00'
                    this.valGroup[root.key2] += ' 23:59:59'
                  }
                }
                else {
                  this.valGroup[root.key] = null
                  this.valGroup[root.key2] = null
                }
              }
              else if (root.dateType === 'datetime') {
                if (after) {
                  this.valGroup[root.key] = moment(after)
                    .format(formatB)
                }
                else {
                  this.valGroup[root.key] = null
                }
              }
              else if (root.dateType === 'datetimerange') {
                if (after && after[0] && after[1]) {
                  this.valGroup[root.key] = moment(after[0])
                    .format(formatB)
                  this.valGroup[root.key2] = moment(after[1])
                    .format(formatB)
                }
                else {
                  this.valGroup[root.key] = null
                  this.valGroup[root.key2] = null
                }
              }
              else if (root.dateType === 'year') {
                if (after) {
                  this.valGroup[root.key] = moment(after)
                    .format(formatC)
                }
                else {
                  this.valGroup[root.key] = null
                }
              }
              else if (root.dateType === 'month') {
                if (after) {
                  this.valGroup[root.key] = moment(after)
                    .format(formatD)
                }
                else {
                  this.valGroup[root.key] = null
                }
              }
              break
          }
        }
      },
      findOptions(root, after) {/*collectLabel时找出选中的选项（私有）*/
        if (root.multiple || root.type === 'checkboxGroup') {
          let t = []
          for (let e of root.options) {
            if (after.indexOf(e.val) !== -1) {
              t.push(e)
            }
          }
          return t
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
      setItemToValGroup(data, notClearOthers) { /*设置表单项的值（可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示，公开）*/
        let temp = {}
        for (let key in this.valGroup) {
          if (this.valGroup.hasOwnProperty(key) && data[key] !== undefined) {
            temp[key] = data[key]
            delete data[key]
          }
        }
        this.updateValGroup(temp, notClearOthers)
        for (let kk in data) {  /*用Object.assign出错，只有第一次能正常合并*/
          if (data.hasOwnProperty(kk)) {
            if (this.hiddenKeys.indexOf(kk) < 0) {
              this.hiddenKeys.push(kk)
            }
            this.$set(this.valGroup, kk, data[kk])
          }
        }
      },
      updateValGroup(data, notClearOthers) { /*更新表单项的值（只能更新已有字段，公开）*/
        this.updateTempKeys(data, notClearOthers)
        /*先更新tempKeys再更新valGroup 避免更新同key的tempKeys元素清空valGroup元素*/
        for (let key in this.valGroup) {
          if (this.valGroup.hasOwnProperty(key) && data[key] !== undefined && data[key] !== '--') {
            if (myTypeof(data[key]) === 'Array') {
              data[key] = data[key].filter(e => e !== '--')
            }
            else if (myTypeof(data[key]) === 'Object') {
              for (let keyN in data[key]) {
                if (data[key].hasOwnProperty(keyN) && data[key][keyN] === '--') {
                  data[key][keyN] = null
                }
              }
            }
            this.valGroup[key] = data[key]
          }
          else if (!notClearOthers) {
            this.valGroup[key] = (myTypeof(this.valGroup[key]) === 'Array' ? [] : null)
          }
        }
      },
      updateTempKeys(data, notClearOthers) { /*更新未暴露表单项值（私有）*/
        for (let item of this.formDataT) {
          if ((notClearOthers && (data[item.key] !== undefined || data[item.key2] !== undefined) || !notClearOthers) &&
            item.tempKey) {
            switch (item.type) {
              case 'inputMap':
                if (_.isNumber(data[item.key]) && _.isNumber(data[item.key2])) {
                  this.tempKeys[item.tempKey] = {
                    lng: data[item.key],
                    lat: data[item.key2]
                  }
                }
                else {
                  this.tempKeys[item.tempKey] = {
                    lng: null,
                    lat: null
                  }
                }
                break
              case 'input':
              case 'inputNumber':
              case 'textarea':
                if (data[item.key] && data[item.key] !== '--' || data[item.key] === 0) {
                  this.tempKeys[item.tempKey] = data[item.key]
                }
                else {
                  this.tempKeys[item.tempKey] = null
                }
                break
              case 'select':
              case 'radioGroup':
              case 'checkboxGroup':
                if (data[item.key] && data[item.key] !== '--' || data[item.key] === 0 || data[item.key] === false) {
                  if (item.multiple || item.type === 'checkboxGroup') {
                    this.$set(this.tempKeys, item.tempKey, [...data[item.key]])
                  }
                  else if (item.booleanVal) {
                    this.$set(this.tempKeys, item.tempKey, Boolean(data[item.key]) ? 1 : 0)
                  }
                  else {
                    this.$set(this.tempKeys, item.tempKey, data[item.key])
                  }
                }
                else {
                  if (item.multiple || item.type === 'checkboxGroup') {/*当notClearOthers为false时用来清空*/
                    this.$set(this.tempKeys, item.tempKey, [])
                  }
                  else {
                    this.$set(this.tempKeys, item.tempKey, null)
                  }
                }
                break
              case 'date':
                if (item.dateType === 'date' || item.dateType === 'datetime') {
                  this.tempKeys[item.tempKey] = data[item.key] && data[item.key] !== '--' ? data[item.key] : null
                }
                else if (item.dateType === 'daterange' || item.dateType === 'datetimerange') {
                  this.tempKeys[item.tempKey] =
                    data[item.key] && data[item.key] !== '--' && data[item.key2] && data[item.key2] !== '--' && [
                      data[item.key],
                      data[item.key2]
                    ] || []
                }
                else if (item.dateType === 'year' || item.dateType === 'month') {
                  this.tempKeys[item.tempKey] = data[item.key] && data[item.key] !== '--' ? data[item.key] : null
                }
                break
            }
          }
        }
      },
      updateFormDataT(d) { /*更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值（公开）；
       d为对象（改变单个）或数组（改变多个），支持的属性：index-必填-需要改变的formData项的索引值、需要改变的属性，如要改变第二个表单组件的label和title,则为:{index:1,label:XXX,title:XXX}*/
        if (myTypeof(d) === 'Array') {
          for (let e of d) {
            this.changeDataHandle(e)
          }
        }
        else if (myTypeof(d) === 'Object') {
          this.changeDataHandle(d)
        }
        this.heightChange()
      },
      changeDataHandle(d) {/*改变表单结构（私有）*/
        let {index, key, val} = d
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
      },
      reValidate(prop) { /*手动验证表单项（公开）*/
        setTimeout(() => {
          this.$refs.formGroupXRef.validateField(prop, () => {
          })
        }, 1)
      },
      asyncLabelChange(label, root) { /*更新远程数据级联名称（私有）*/
        if (root.key2) {
          this.$set(this.valGroup, root.key2, label)
        }
        this.itemChange(label, root)
      },
      onSelectInputChange(data) { /*更新选择输入框值（私有）*/
        if (data.beforeKey) {
          _.remove(this.selectInputKeys, o => o === data.beforeKey)
        }
        if (data.key) {
          if (this.selectInputKeys.indexOf(data.key) === -1) {
            this.selectInputKeys.push(data.key)
          }
          this.itemChange(null, data)
        }
      },
      alNameChange(name, root) { /*更新行政区域名称（私有）*/
        if (root.key2) {
          this.valGroup[root.key2] = name
        }
        this.itemChange(name, root)
      },
      reValidateAndChangeHandle(val, root) {/*重新校验（私有）*/
        this.itemChange(val, root)
        this.$nextTick(function () {
          this.$refs.formGroupXRef.validateField(root.key)
        })
      },
      heightChange() {/*私有*/
        this.$nextTick(function () {
          if (this.clientHeightR !== this.$el.clientHeight) {
            this.clientHeightR = this.$el.clientHeight
            this.$emit('on-height-change', this.clientHeightR)
          }
        })
      },
      itemChange(e, root) { /*表单项值更新（私有）*/
        setTimeout(() => {
          let data = {
            event: e
          }
          if (root.key) {
            data[root.key] = this.valGroup[root.key]
          }
          if (root.key2) {
            data[root.key2] = this.valGroup[root.key2]
          }
          if (root.collectLabel && root.collectLabel.key) {
            data[root.collectLabel.key] = this.valGroup[root.collectLabel.key]
          }
          else if (_.isArray(root.collectLabel)) {
            for (let item of root.collectLabel) {
              data[item.key] = this.valGroup[item.key]
            }
          }
          this.$emit('on-item-change', data)
        }, 500)
        this.heightChange()
      },
      getValGroup() {/*生成valGroup(私有)*/
        let temp = {}
        for (let item of this.showingKeys) {
          temp[item] = this.valGroup[item]
        }
        if (this.trim) {
          temp = trimObj(temp)
        }
        return temp
      },
      validate() {/*主动验证整个表单（公开）*/
        this.$refs.formGroupXRef.validate()
      },
      changeLoading(val) {/*主动改变表单按钮loading状态（在开启btnLoading的前提下，公开）*/
        if (val === undefined) {
          return
        }
        this.showLoading = Boolean(val)
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
