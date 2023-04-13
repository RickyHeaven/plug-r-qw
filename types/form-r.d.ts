/**
 *Type definitions for plug-r-qw 1.3.4
 * created at 20203.03.07
 * @author Ricky email:zhangqingcq@foxmail.com
 */

import Vue from "vue"

export declare interface Option {
  label?: string

  val?: string | number
  /*待选项图标，仅checkbox和checkboxGroup支持，view-design的内置图标*/
  icon?: string

  disabled?: boolean

  [x: string]: any
}

type showFunc = (valGroup: object) => boolean

export declare interface FormItem {
  activeChange?: boolean

  addTime?: boolean

  append?: string

  asyncOption?: boolean

  autoSize?: boolean | { minRows?: number, maxRows?: number }

  booleanVal?: boolean

  borrowOption?: string

  buttonType?: boolean

  changeOnSelect?: boolean

  changeOption?: boolean | { valKey: string, key: string } | { valKey: string, key: string, notRequired?: boolean }[]

  class?: string

  clearable?: boolean

  collectLabel?: { valKey: string, key: string } | { valKey: string, key: string }[]

  data?: object

  dateType?: string

  dateOption?: object

  defaultVal?: any

  defaultVal2?: any

  disabled?: boolean

  disabledOptionByOthers?: string | string[]

  editable?: boolean

  editorConfig?: object

  filterable?: boolean

  format?: string | string[]

  height?: number | string

  icon?: string

  itemBorder?: boolean

  key?: string

  key2?: string

  label?: string

  length?: number

  level?: number

  likeInput?: boolean

  localOption?: any[]

  manualUpload?: boolean

  mapHeight?: string

  max?: number

  maxLength?: number

  maxSize?: number

  min?: number

  mode?: string

  multiple?: boolean

  numberVal?: boolean

  onlyLasVal?: boolean

  onlyLastLabel?: boolean

  options?: Option[]

  optionFilter?:<T> (d: T) => T

  optionLabel?: string | string[]

  optionUrl?: string

  optionVal?: string

  password?: boolean

  placeholder?: string

  precision?: number

  precision?: number

  prefix?: string

  prepend?: string

  readonly?: boolean

  separator?: string

  show?: { key: string, val: any[] } | { key: string, val: any[] }[] | showFunc

  showImg?: boolean

  showMap?: boolean

  showOr?: boolean

  showWodLimit?: boolean

  slotName?: string

  slotPosition?: string

  step?: number

  steps?: number[]

  suffix?: string

  title?: string

  toolbarConfig?: object

  type: string

  url?: string

  val?: any

  valKey?: string

  withCredentials?: boolean

  uploadImgMaxSize?: number

  uploadImgMaxLength?: number

  uploadImgShowBase64?: boolean

  uploadImgServe?: object

  [x: string]: any
}

export declare class FormR extends Vue {
  formData?: FormItem[] | FormItem[][]

  formRules?: object

  showMessage?: boolean

  labelWidth?: number

  contentWidth?: number

  itemWidth?: number

  inline?: boolean

  teamClass?: string

  showLongOkBt?: boolean

  longOkBtTxt?: string

  showInlineOkBt?: boolean

  inlineOkBtTxt?: string

  showInlineClearBt?: boolean

  inlineClearBtTxt?: string

  btnLoading?: boolean

  trim?: boolean

  disabled?: boolean
}
