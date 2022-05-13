<!--created 2019.08.06-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div :style="wellStyle">
    <div class="flexColumnBox wellCardR">
      <div class="panelHeader notGrow">
        <div class="fl" style="font-weight: bold">{{title||t('r.title')}}</div>
        <div class="btsF">
          <slot name="bts"/>
        </div>
      </div>
      <div class="growFlexItem relativeBox">
        <div class="fullFlowContent">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {myTypeof} from '../../methods/functionGroup.js'
  import Locale from '../../mixins/locale'

  export default {
    name: "wellCard",
    mixins: [Locale],
    props: {
      title: {
        type: String
      },
      width: {
        type: [
          Number,
          String
        ],
        default: '100%'
      },
      height: {
        type: [
          Number,
          String
        ],
        default: '100%'
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      wellStyle() {
        let temp = {}
        if(this.inline){
          temp.display = 'inline-block'
        }
        let attrArr = [
          'width',
          'height'
        ]
        for (let e of attrArr) {
          if (myTypeof(this[e]) === 'String') {
            temp[e] = this[e]
          }
          else if (myTypeof(this[e]) === 'Number' && this[e] > 0) {
            temp[e] = this[e] + 'px'
          }
        }
        return temp
      }
    }
  }
</script>