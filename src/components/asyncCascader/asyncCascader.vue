<!--created 2019.08.09-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Cascader
      ref="cascaderRT" :data="data" v-model="val" @on-change="onChange" change-on-select transfer
      :disabled="disabled" :render-format="format" :placeholder="placeholder||t('r.pSelect')" :filterable="filterable"
  ></Cascader>
</template>

<script>
  import {findPath, myTypeof} from '../../methods/functionGroup'
  import Locale from '../../mixins/locale'
  import _ from 'lodash'

  export default {
    name: "asyncCascader",
    mixins: [Locale],
    model: {
      prop: 'valProp',
      event: 'subVal'
    },
    props: {
      url: {
        /*级联数据接口地址*/
        type: String,
        default() {
          if (window.g && window.g.mgrURL) {
            return window.g.mgrURL + '/web/v1/umc/orgs'
          }
          return ''
        }
      },
      valProp: {
        /*级联绑定值(v-model)*/
        type: [
          Array,
          Number,
          String
        ]
      },
      optionVal: {
        /*v-model收集节点的哪些字段*/
        type: String,
        default: 'id'
      },
      optionLabel: {
        /*选项的标签对应接口字段*/
        type: String,
        default: 'name'
      },
      optionFilter: {
        /*筛选待选项的方法，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理）*/
        type: Function
      },
      separator: {
        /*选中的label分隔符（多级展示时）,valProp为String（多级）时分隔符*/
        type: String,
        default: '/'
      },
      onlyLastVal: {
        /*只取最后一级*/
        type: Boolean,
        default: true
      },
      onlyLastLabel: {
        /*只显示最后一级*/
        type: Boolean,
        default() {
          return true
        }
      },
      filterable: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        data: []
      }
    },
    computed: {
      val: {
        get() {
          let valProp = this.valProp
          if (_.isArray(valProp)) {
            return [].concat(valProp)
          }
          else if (_.isNumber(valProp)) {
            return findPath({
              group: this.data,
              condition: item => item.value === valProp,
              pathKey: 'value'
            })
          }
          else if (_.isString(valProp)) {
            return valProp.split(this.separator)
          }
          else if (valProp === null) {
            return []
          }
        },
        set(val) {
          if (this.onlyLastVal) {
            if (_.isEmpty(val)) {
              this.$emit('subVal', null)
              this.$emit('on-label-change', null)
            }
            else {
              this.$emit('subVal', _.last(val))
            }
          }
          else {
            if (_.isEqual(this.valProp, val)) {
              return
            }
            this.$emit('subVal', [].concat(val))
          }
        }
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        if (!this.url) {
          console.error('没有用于拉取级联数据的有效接口地址')
          return
        }
        this.$fetch.get(this.url)
          .then(r => {
            let data = null
            if (r && r.data && r.data.records) {
              data = r.data.records
            }
            else if (r && r.data) {
              data = r.data
            }
            else if (r) {
              data = r
            }
            if (data) {
              if (myTypeof(this.optionFilter) === 'Function') {
                data = this.optionFilter(data)
              }
              this.data = this.dataFilter(data)
            }
            else {
              console.warn('级联数据错误，不能使用')
            }
          })
          .catch(() => {
            console.warn('拉取级联数据出错')
          })
      },
      dataFilter(data) {
        let temp = []
        for (let item of data) {
          let tt = {
            value: item[this.optionVal],
            label: item[this.optionLabel]
          }
          if (item.children && (!_.isEmpty(item.children))) {
            tt.children = this.dataFilter(item.children)
          }
          temp.push(tt)
        }
        return temp
      },
      format(labels, selectedData) {
        if (this.onlyLastLabel) {
          return _.last(labels)
        }
        return labels.join(this.separator)
      },
      onChange(val, selectedDetail) {
        let label = null
        if (!_.isEmpty(selectedDetail)) {
          label = selectedDetail.map(item => {
            return item.label
          })
            .join(this.separator)
        }
        this.$emit('on-label-change', label)
      }
    }
  }
</script>
