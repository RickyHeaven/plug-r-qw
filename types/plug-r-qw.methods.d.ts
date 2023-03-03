/**
 *Type definitions for plug-r-qw 1.3.4
 * created at 20203.03.03 by Ricky
 */
import Vue from "vue"

declare module "vue/types/vue" {
  interface Vue {
    setTimeout: (any, number) => number
  }
}
