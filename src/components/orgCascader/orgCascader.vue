<!--created 2019.08.09-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Cascader
      ref="cascaderRT" :data="data" v-model="val" @on-change="onChange" change-on-select transfer
      :disabled="disabled" :render-format="format" :placeholder="placeholder"
  ></Cascader>
</template>

<script>
  import {findPath} from '../../methods/functionGroup'

  export default {
    name: "orgCascader",
    model: {
      prop: 'valProp',
      event: 'submitVal'
    },
    props: {
      url: {
        /*级联数据接口地址*/
        type: String,
        default() {
          if (window.g && window.g.mgrURL) {
            return window.g.mgrURL + '/umc/orgs'
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
      separator: {
        /*选中的label分隔符（多级展示时）,valProp为String（多级）时分隔符*/
        type: String,
        default() {
          return '/'
        }
      },
      onlyLastVal: {
        /*只取最后一级*/
        type: Boolean,
        default() {
          return true
        }
      },
      onlyLastLabel: {
        /*只显示最后一级*/
        type: Boolean,
        default() {
          return true
        }
      },
      placeholder: {
        type: String,
        default() {
          return '请选择'
        }
      },
      disabled: {
        type: Boolean,
        default() {
          return false
        }
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
          if (window._.isArray(valProp)) {
            return [].concat(valProp)
          }
          else if (window._.isNumber(valProp)) {
            return findPath({
              group: this.data,
              condition: item => item.value === valProp,
              pathKey: 'value'
            })
          }
          else if (window._.isString(valProp)) {
            return valProp.split(this.separator)
          }
          else if (valProp === null) {
            return []
          }
        },
        set(val) {
          if (this.onlyLastVal) {
            if (window._.isEmpty(val)) {
              this.$emit('submitVal', null)
            }
            else {
              this.$emit('submitVal', window._.last(val))
            }
          }
          else {
            if(_.isEqual(this.valProp,val)){
              return
            }
            this.$emit('submitVal', [].concat(val))
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
          console.error('没有用于拉取机构数据的有效接口地址')
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
              this.data = this.dataFilter(data)
            }
            else {
              console.warn('机构数据错误，不能使用')
            }
          })
          .catch(() => {
            console.warn('拉取机构数据出错')
          })
      },
      dataFilter(data) {
        let temp = []
        for (let item of data) {
          let tt = {
            value: item.id,
            label: item.name,
            level: item.level
          }
          if (item.children && (!window._.isEmpty(item.children))) {
            tt.children = this.dataFilter(item.children)
          }
          temp.push(tt)
        }
        return temp
      },
      format(labels, selectedData) {
        if (this.onlyLastLabel) {
          return window._.last(labels)
        }
        return labels.join(this.separator)
      },
      onChange(val, selectedDetail) {
        let name = null
        if (!window._.isEmpty(selectedDetail)) {
          name = selectedDetail.map(item => {
            return item.label
          })
            .join(this.separator)
        }
        this.$emit('on-name-change', name)
      }
    }
  }
</script>
