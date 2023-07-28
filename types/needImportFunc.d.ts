/*下面是需要单独引用的库内方法*/
export function fullScreenImgPreview(src: string): void

export function toHump(name: string): string

export function htmlEncode(text: string): HTMLElement | string

export function htmlDecode(html: HTMLElement | string): string

export function getFileSrc(file: any): any

export function getFileTypeByName(name: string): string

export function isImgByFile(type: string): boolean

export function getFileTypeIconByName(name: string): string

export function downloadFileReaderFile(name: string | number, href: string): viod

export function fakeALinkClick(obj: object): void

export function findPath({}: {
  group: object | any[], condition: (item: any) => boolean, pathKey?: string, childKey?: string, path?: any[]
}): any[]

export function getStringWidth(str: string, fontsize?: number): number

export function emptyInput(val: any): any

export function stopBubbling(e: any): void