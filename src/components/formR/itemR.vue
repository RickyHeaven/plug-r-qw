<template>
  <FormItem
      :label="item.type !== 'radio'&&item.type !== 'checkbox'?item.label:' '" :prop="item.key||''" class="relativeBox"
      :class="itemClass(item)"
  >
    <!--纯文本,也可以不传label和val,单纯用来布局占位-->
    <div
        v-if="item.type === 'txt'"
        :style="itemStyle" style="display: inline-block" :class="{likeInputX:item.likeInput}"
    >{{item.valKey?valGroup[item.valKey]||'无':item.val}}</div>
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
        :password="Boolean(item.password)"
        :icon="item.icon"
        :prefix="item.prefix"
        :suffix="item.suffix"
        :placeholder="item.placeholder||t('r.pInput')"
        :disabled="Boolean(item.disabled) || disabled"
        @on-blur="itemChange($event,item)"
        :clearable="item.clearable!==false"
    >
      <template v-if="item.slotPosition&&item.slotName" :slot="item.slotPosition">
        <slot :name="item.slotName" />
      </template>
      <template v-if="item.slotPosition!=='prepend'&&item.prepend" slot="prepend">
        <span>{{item.prepend}}</span>
      </template>
      <template v-if="item.slotPosition!=='append'&&item.append" slot="append">
        <span>{{item.append}}</span>
      </template>
    </Input>
    <!--下拉框-->
    <Select
        v-else-if="item.type === 'select'"
        v-model="tempKeys[item.tempKey]"
        :style="itemStyle"
        :filterable="(item.filterable === true || item.filterable === false)?item.filterable : false"
        :disabled="Boolean(item.disabled) || disabled"
        :multiple="Boolean(item.multiple)"
        :placeholder="item.placeholder||t('r.pSelect')"
        @on-change="itemChange($event,item)"
        transfer
        :clearable="item.clearable!==false"
    >
      <Option
          v-for="(optionItem,i) in item.options"
          :value="optionItem.val"
          :label="optionItem.label||optionItem.val"
          :key="'option-'+item.key + i"
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
        @on-change="itemChange($event,item)"
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
        <Icon v-if="radioItem.icon && (!item.buttonType)" :type="radioItem.icon" />
        <span>{{radioItem.label || radioItem.val}}</span>
      </Radio>
    </RadioGroup>
    <!--单选（可取消选择）-->
    <Checkbox
        v-else-if="item.type === 'checkbox'"
        v-model="valGroup[item.key]"
        :disabled="!!item.disabled"
        @on-change="itemChange($event,item)"
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
        <Icon v-if="checkItem.icon" :type="checkItem.icon" />
        <span>{{checkItem.label||checkItem.val}}</span>
      </Checkbox>
    </CheckboxGroup>
    <!--文本框-->
    <Input
        v-else-if="item.type === 'textarea'"
        type="textarea"
        v-model="tempKeys[item.tempKey]"
        :autosize="item.autosize||{minRows: 2}"
        :style="itemStyle"
        :maxlength="item.maxLength||null"
        :show-word-limit="Boolean(item.showWordLimit)"
        :placeholder="item.placeholder || t('r.pInput')"
        :disabled="Boolean(item.disabled) || disabled"
        @on-blur="itemChange($event,item)"
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
        :with-credentials="item.withCredentials!==false"
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
    <!--时间选择器-->
    <TimePicker
        :style="itemStyle"
        v-else-if="item.type === 'time'"
        v-model="tempKeys[item.tempKey]"
        :type="item.dateType"
        :disabled="Boolean(item.disabled) || disabled"
        placement="bottom-end"
        :placeholder="item.placeholder||t('r.selectTime')"
        :steps="item.steps||[]"
        :clearable="item.clearable!==false"
        :editable="false"
        :format="item.format||'HH:mm:ss'"
        transfer
        @on-change="itemChange($event,item)"
    />
    <!--月份区间选择-->
    <month-range
        :style="itemStyle"
        v-else-if="item.type === 'monthRange'"
        v-model="tempKeys[item.tempKey]"
        :disabled="Boolean(item.disabled) || disabled"
        placement="bottom-end"
        :placeholder="item.placeholder || t('r.selectDate')"
        :options1="item.dateOptions1||null"
        :options2="item.dateOptions2||null"
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
        :upload-img-max-size="item.uploadImgMaxSize||(100 * 1024)"
        :upload-img-max-length="item.uploadImgMaxLength||10"
        :upload-img-show-base64="item.uploadImgShowBase64!==false"
        :show-link-img="item.showLinkImg!==false"
        :upload-img-serve="item.uploadImgServe"
        :preview-class="item.previewClass||'r-editor-view'"
        @on-change="reValidateAndChangeHandle($event,item)"
    />
    <!--富文本编辑器Pro-->
    <editor-pro
        class="inlineBlock"
        :style="itemStyle"
        v-else-if="item.type === 'editorPro'"
        v-model="valGroup[item.key]"
        :placeholder="item.placeholder || t('r.pInput')"
        :disabled="Boolean(item.disabled) || disabled"
        :toolbar-config="item.toolbarConfig||{}"
        :editor-config="item.editorConfig||{}"
        :mode="item.mode||'simple'"
        :height="item.height||300"
        @input="itemChange($event,item)"
    />
    <input-map
        v-else-if="item.type === 'inputMap'"
        v-model="tempKeys[item.tempKey]"
        :style="itemStyle"
        :placeholder="item.placeholder || t('r.search')"
        :disabled="Boolean(item.disabled) || disabled"
        :show-map="item.showMap!==false"
        :height="item.mapHeight||'250px'"
        @on-change="itemChange($event,item)"
    />
    <div
        v-else-if="item.type === 'custom'"
        class="inlineBlock"
        :style="itemStyle"
    >
      <slot :name="item.slotName" :val-group="valGroup" />
    </div>
    <!--表单项提示文字-->
    <div v-if="Boolean(item.info)" class="formInfoTxtXN">{{item.info}}</div>
    <!--表单项标题-->
    <div v-if="Boolean(item.title)" class="formTitleTxtXN">{{item.title}}</div>
  </FormItem>
</template>

<script>
  import Locale from "../../mixins/locale"
  import selectInput from '../selectInput/selectInput.vue'
  import alCascaderMC from '../alCascaderMC/alCascaderMC.vue'
  import asyncCascader from '../asyncCascader/asyncCascader.vue'
  import uploadGroup from '../uploadGroup/uploadGroup.vue'
  import editor from '../editor/editor.vue'
  import editorPro from '../editorPro/editorPro.vue'
  import inputMap from '../inputMap/inputMap.vue'
  import monthRange from "../monthRange/monthRange"

  export default {
    name: "itemR",
    mixins: [Locale],
    components: {
      selectInput,
      alCascaderMC,
      asyncCascader,
      uploadGroup,
      editor,
      editorPro,
      inputMap,
      monthRange
    },
    props: {
      item: Object,
      itemStyle: Object,
      valGroup: Object,
      tempKeys: Object,
      inline: Boolean,
      disabled: Boolean,
      labelWidth: Number,
      itemWidth: Number,
      mgrUrl: String,
      uploadUrl: String
    },
    methods: {
      itemClass(root) {
        return {
          withInfo: Boolean(root.info),
          withTitle: Boolean(root.title),
          inlineFormItemXN: this.inline,
          noLabel: root.type === 'selectInput',
          [root.class]: root.class,
          slotInput: root.slotPosition
        }
      },
      itemChange(e, root) {
        this.$emit('item-change', {
          e,
          root
        })
      },
      reValidateAndChangeHandle(e, root) {
        this.$emit('re-validate', {
          e,
          root
        })
      },
      onSelectInputChange(d) {
        this.$emit('select-input-change', d)
      },
      alNameChange(name, root) {
        this.$emit('al-name-change', {
          name,
          root
        })
      },
      asyncLabelChange(label, root) {
        this.$emit('async-label-change', {
          label,
          root
        })
      }
    }
  }
</script>
