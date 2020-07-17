<!--created 2019.07.24-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div>
    <Select v-model="selectVal" :style="labelSelectStyle" :disabled="Boolean(disabled)" transfer>
      <Option
          v-for="(item,index) in selectOption" :value="item.val" :key="'selectInputOp'+item.value+index"
          :style="{textAlign: labelTextAlign}"
      >{{
        item.label }}</Option>
    </Select>
    <Input
        v-model="inputVal" :placeholder="placeholder" :style="inputStyle" :clearable="clearable"
        :disabled="Boolean(disabled)"
    />
  </div>
</template>

<script>
  export default {
    name: "selectInput",
    model: {
      prop: 'value',
      event: 'subVal'
    },
    props: {
      value: {
        /*组件的值，建议使用v-model绑定，key对应select值，val对应input值*/
        type: Object,
        default() {
          return {
            key: null,
            val: null
          }
        }
      },
      labelWidth: {
        /*表单项标签宽度*/
        type: Number,
        default() {
          return 160
        }
      },
      labelTextAlign: {
        /*select内容对齐方式*/
        type: String,
        default() {
          return 'right'
        }
      },
      itemWidth: {
        /*表单项内容宽度,用于行内表单*/
        type: Number,
        default() {
          return 200
        }
      },
      selectOption: {
        /*选择框待选项*/
        type: Array,
        default() {
          return []
        }
      },
      placeholder: {
        type: String,
        default() {
          return '请输入'
        }
      },
      clearable: {
        type: Boolean,
        default() {
          return false
        }
      },
      disabled: {
        /*禁用，仅展示*/
        type: Boolean,
        default() {
          return false
        }
      }
    },
    computed: {
      selectVal: {
        get() {
          return this.value && this.value.key || null
        },
        set(val) {
          let temp = {
            key: val,
            val: this.inputVal
          }
          if (this.selectVal && this.selectVal !== val) {
            temp.beforeKey = this.selectVal
          }
          this.$emit('subVal', temp)
          this.$emit('on-change', temp)
        }
      },
      inputVal: {
        get() {
          return this.value && this.value.val || null
        },
        set(val) {
          let temp = {
            key: this.selectVal,
            val: val
          }
          this.$emit('subVal', temp)
          this.$emit('on-change', temp)
        }
      },
      labelSelectStyle() {
        return {
          width: this.labelWidth + 'px',
          textAlign: this.labelTextAlign
        }
      },
      inputStyle() {
        return {width: this.itemWidth + 'px'}
      }
    }
  }
</script>