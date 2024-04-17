import type {PluginObject} from 'vue/types/plugin'
import type {ProtoFunc, NeedImportFunc} from './plug-r-qw.methods'

interface PlugRQw extends ProtoFunc, NeedImportFunc, PluginObject<any> {
  version: string
}

export declare const plugRQw: PlugRQw