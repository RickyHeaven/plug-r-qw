/**
 *Type definitions for plug-r-qw 1.3.4
 * created at 20203.03.07
 * @author Ricky email:zhangqingcq@foxmail.com
 */

import Vue from "vue"

export declare class AsyncCascader extends Vue {
  valProp?: any[] | number | string

  url?: string

  optionVal?: string

  optionLabel?: string

  optionFilter?: (d: object | any[]) => any

  separator?: string

  onlyLastVal?: boolean

  onlyLastLabel?: boolean

  filterable?: boolean

  placeholder?: string

  disabled?: boolean
}
