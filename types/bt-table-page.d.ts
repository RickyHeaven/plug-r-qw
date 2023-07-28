/**
 *Type definitions for plug-r-qw 1.3.4
 * created at 20203.03.07
 * @author Ricky email:zhangqingcq@foxmail.com
 */

import Vue from "vue"

import type {TableColumn} from '@zhangqingcq/view-design-r/types'

export class TableColumnR extends TableColumn {
  showSettingCheck?: boolean

  disableShowSetting?: boolean
}

export class BtTablePage extends Vue {
  url?: string

  searchData?: object

  columns?: TableColumnR[]

  dataHandler?: (r: object | any[]) => object

  selection?: boolean

  radio?: boolean

  selectionFixed?: 'left' | 'right' | false

  rowClickSelect?: boolean

  data?: any[]

  pageSize?: number

  sortable?: 'custom' | ''

  initData?: boolean

  highlightRow?: boolean

  rowClickNum?: number

  tableEmptyTdHandle?: boolean

  noBorderTable?: boolean

  noPage?: boolean

  orderDefault?: string

  orderKey?: string

  orderKeyFormat?: 'underline' | 'camelcase'

  getDataLoading?: boolean

  showTopRow?: boolean

  lightHead?: boolean

  pageComponentSize?: string
}
