/*这些是挂在Vue.prototype下的方法，使用时可以直接用this.XXX方式调用*/

import type {VNode,CreateElement} from "vue"

export type Func = () => void

export type TooltipManualFunc = (params: any) => void

type RenderFunc = (h: CreateElement) => VNode

export interface MessageBoxConfig {
	/*弹框内容，1.string,直接将文字插入对应位置；2.RenderFunc,如：(h)=>h('div',{class:'my-class'},'123')*/
  content: string | RenderFunc
  /**
   * 弹框标题内容
   * @default 提示
   */
  title?: string
  /**
   * 弹框高度,最小值130x
   * @default 130
   */
  height?: number
  /**
   * 弹框宽度，最小值416
   * @default 416
   */
  width?: number
  /*确定按钮点击回调函数*/
  onOk?: () => void
  /*取消按钮点击回调函数*/
  onCancel?: () => void
  /*关闭按钮（右上角叉叉）点击回调函数*/
  onClose?: () => void
  /**
   * 确定按钮文字
   * @default 确定
   */
  okText?: string
  /**
   * 取消按钮文字
   * @default 取消
   */
  cancelText?: string
  /**
   * 不展示内容开头的警告图标(非字符串内容默认不展示)
   * @default false
   */
  noWarnIcon?: boolean
  /**
   * 底部对齐方式
   * @default center
   */
  footerAlign?: string
  /**
   * 展示取消按钮
   * @default true
   */
  cancelBt?: boolean
}

export type RequestConfig = (/*请求地址*/url: string,/*请求数据*/data ?: any[] | object, /*错误信息，在控制台输出，方便调试*/
  msg ?: string,/*请求结果提取路径*/rPath?: string[],/*请求配置*/config?: object,/*delete方法传参模式 true:params,false:data*/
  isUrlData?: boolean) => Promise<any>

export interface SetValByOptionConfig {
  group: Array<any>
  condition: (item: any) => boolean
  key: string
  val: any
  childKey?: string
}

export interface FetchConfig {
  /*初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件*/
  init: (store: any) => void
  /*该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站*/
  config: any
  /*get请求*/
  get: RequestConfig
  /*post请求*/
  post: RequestConfig
  /*put请求*/
  put: RequestConfig
  /*delete请求*/
  delete: RequestConfig
  
  /*并发请求*/
  all<T>(values: Array<T | Promise<T>>): Promise<T[]>
  
  /*并发请求结果分离*/
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R
}

export function $swal(option: string | object | false, text?: string | VNode | HTMLElement, icon?: string): Promise<any>

export function messageBox({}: MessageBoxConfig): void

export function myTypeof(v: string): string

export const $fetch: FetchConfig

export function trimObj<T>(obj: T): T

export function clearObj<T>(obj: T, ignoreList?: string[]): T

export const formDataHeadConfig: Record<string, any>

export function toFormData(data: Record<string, any>): Record<string, any>

export function oneOf(value: any, validList: any[]): boolean

export function fullScreenImgByDom(src: string): void

export function isValidValue(val: any): boolean

export function isNumberValue(val: any): boolean

export function isEmptyValue(data: object | any[]): boolean

export function tooltipManual(contentKey: string | string[] | TooltipManualFunc, dash: boolean, jiontMark: string): any

export function stringLength(str: string): number

export function decimalDigitsLimit(/*原值*/val: number | string,/*要限制的小数位数*/ num: number): number | string

export function downloadFileByFormSubmit(url: string, data?: object, method?: string): void

export function $swalConfirm(title: string, text: string, icon: string, onOk: Func): Promise<any>

export function setValByOption({}: SetValByOptionConfig): void

export function hasPermission(value: string): boolean

export function isNaN(v: any): boolean

export function dataFilterOrToUrl(data: object, toUrl?: boolean, keepEmptyVal?: boolean): object | string

export function setTimeout(fn: Func, time: number): number

export function setInterval(fn: Func, time: number): number

export function toLine(name: string): string

export function fileExport(url: string, data?: object, method?: string): void

export function getColumnsKeys(sKey: string, columns: any[], returnArray?: boolean): string[]

export function removeEmptyValue<T>(data: T): T

export function findCollection(group: any[] | object, condition: string | number | boolean | Func,
  getPath?: boolean): any

export function htmlPrint(data: any): void

export function siblingElems(elem: HTMLElement): HTMLElement