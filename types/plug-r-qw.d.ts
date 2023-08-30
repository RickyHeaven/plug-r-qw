import type {PluginObject} from 'vue/types/plugin'
import type {ProtoFunc, NeedImportFunc} from './plug-r-qw.methods'
import {Vue as _Vue} from 'vue/types/vue'

interface PlugRQw extends ProtoFunc, NeedImportFunc, PluginObject<any> {
  install(Vue: typeof _Vue, options: any): void
  
  version: string
}

export declare const plugRQw: PlugRQw