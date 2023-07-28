/**
 *Type definitions for plug-r-qw 1.3.4
 * created at 20203.03.03
 * @author Ricky email:zhangqingcq@foxmail.com
 */
import {VNode} from "vue"
import {FetchConfig, Func, MessageBoxConfig, SetValByOptionConfig, TooltipManualFunc} from "./protoFunc"

export interface NeedImportFunc {
  FullScreenImgPreview: (src: string) => void
  
  ToHump: (name: string) => string
  
  HtmlEncode: (text: string) => HTMLElement | string
  
  HtmlDecode: (html: HTMLElement | string) => string
  
  GetFileSrc: (file: any) => any
  
  GetFileTypeByName: (name: string) => string
  
  IsImgByFile: (type: string) => boolean
  
  GetFileTypeIconByName: (name: string) => string
  
  DownloadFileReaderFile: (name: string | number, href: string) => viod
  
  FakeALinkClick: (obj: object) => void
  
  FindPath: ({}: {
    group: object | any[], condition: (item: any) => boolean, pathKey?: string, childKey?: string, path?: any[]
  }) => any[]
  
  GetStringWidth: (str: string, fontsize?: number) => number
  
  EmptyInput: (val: any) => any
  
  StopBubbling: (e: any) => void
}

export interface ProtoFunc {
  
  $swal: (option: string | object | false, text?: string | VNode | HTMLElement, icon?: string) => Promise<any>
  
  messageBox: ({}: MessageBoxConfig) => void
  
  myTypeof: (v: string) => string
  
  $fetch: FetchConfig
  
  trimObj: <T>(obj: T) => T
  
  clearObj: <T>(obj: T, ignoreList?: string[]) => T
  
  formDataHeadConfig: Record<string, any>
  
  toFormData: (data: Record<string, any>) => Record<string, any>
  
  oneOf: (value: any, validList: any[]) => boolean
  
  fullScreenImgByDom: (src: string) => void
  
  isValidValue: (val: any) => boolean
  
  isNumberValue: (val: any) => boolean
  
  isEmptyValue: (data: object | any[]) => boolean
  
  tooltipManual: (contentKey: string | string[] | TooltipManualFunc, dash: boolean, jiontMark: string) => any
  
  stringLength: (str: string) => number
  
  decimalDigitsLimit: (/*原值*/val: number | string,/*要限制的小数位数*/ num: number) => number | string
  
  downloadFileByFormSubmit: (url: string, data?: object, method?: string) => void
  
  $swalConfirm: (title: string, text: string, icon: string, onOk: Func) => Promise<any>
  
  setValByOption: ({}: SetValByOptionConfig) => void
  
  hasPermission: (value: string) => boolean
  
  isNaN: (v: any) => boolean
  
  dataFilterOrToUrl: (data: object, toUrl?: boolean, keepEmptyVal?: boolean) => object | string
  
  setTimeout: (fn: Func, time: number) => number
  
  setInterval: (fn: Func, time: number) => number
  
  toLine: (name: string) => string
  
  fileExport: (url: string, data?: object, method?: string) => void
  
  getColumnsKeys: (sKey: string, columns: any[], returnArray?: boolean) => string[]
  
  removeEmptyValue: <T>(data: T) => T
  
  findCollection: (group: any[] | object, condition: string | number | boolean | Func, getPath?: boolean) => any
  
  htmlPrint: (data: any) => void
  
  siblingElems: (elem: HTMLElement) => HTMLElement
}