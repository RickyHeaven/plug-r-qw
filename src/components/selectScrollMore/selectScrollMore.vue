<!--created 2020.11.10-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Select
      v-model="valueT" ref="selectScrollSourceRef" v-bind="$attrs" transfer filterable
      v-loadmore="loadMore" :placeholder="placeholderT" :disabled="disabled"
  >
    <Option v-for="(item,index) in options" :key="'op'+index" :value="item.value" :disabled="item.disabled">{{item.label}}</Option>
  </Select>
</template>

<script>
  import _ from 'lodash'
  import {isValidValue, myTypeof} from "../../methods/functionGroup"
  import $fetch from '../../methods/fetch'
  import Locale from '../../mixins/locale'

  export default {
    name: "selectScrollMore",
    mixins: [Locale],
    model: {
      prop: 'value',
      event: 'sub-val'
    },
    props: {
      value: {
        /*插件值，支持双向绑定v-model*/
        type: [
          String,
          Number,
          Array
        ],
        default: null
      },
      url: {
        /*待选项接口地址，不带条件*/
        type: String,
        required: true
      },
      searchData: {
        /*待选项接口条件*/
        type: Object,
        default() {
          return {
            size: 10
          }
        }
      },
      getOptions: {
        /*是否拉取待选项,false:不拉取，并清空待选项和值*/
        type: Boolean,
        default: true
      },
      optionFilter: {
        /*接口返回数据处理函数，传入接口返回的数据，返回处理后的数据*/
        type: Function
      },
      optionsLabelKey: {
        /*待选项label取接口数据中哪个字段*/
        type: [
          String,
          Array
        ],
        default: 'name'
      },
      optionsValKey: {
        /*待选项value取接口数据中哪个字段*/
        type: String,
        default: 'id'
      },
      searchKey: {
        /*搜索框的值在拉取待选项数据的条件中对应的key*/
        type: String,
        default: 'name'
      },
      searchWordsRequired: {
        /*只有在searchKey对应字段有值时（用户输入内容搜索时）拉取数据*/
        type: Boolean,
        default: false
      },
      collectLabel: {
        /*需要在选中时返回出value以外其他字段*/
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String
      },
      disabled: {
        /*禁用*/
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        current: 1,
        pages: 1,
        searchStr: null,
        options: [],
        historyData: {},
        isFresh: true,
        urlChanged: false
      }
    },
    computed: {
      placeholderT() {
        return this.searchStr ? this.t('r.searchFor') + this.searchStr : (this.placeholder || this.t('r.pInput'))
      },
      valueT: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('sub-val', val)
          if (this.collectLabel) {
            let temp = {}
            for (let e of this.options) {
              if (e[this.optionsValKey] === val) {
                temp = JSON.parse(JSON.stringify(e))
                break
              }
            }
            this.$emit('on-change', temp)
          }
        }
      },
      searchDataT() {
        return this.searchKey ? {
          ...this.searchData,
          current: this.current,
          [this.searchKey]: this.searchStr
        } : {
          ...this.searchData,
          current: this.current
        }
      }
    },
    mounted() {
      this.addInputEventListener()
    },
    watch: {
      getOptions: {
        handler(after) {
          if (after) {
            if (this.isFresh) {
              this.getData()
            }
          }
          else {
            this.reset()
          }
        },
        immediate: true
      },
      url(after) {
        if (after) {
          this.urlChanged = true
        }
      }
    },
    methods: {
      addInputEventListener() {/*私有，不可调用*/
        const inputEl = this.$refs.selectScrollSourceRef.$children[0].$refs.input
        inputEl.addEventListener('keyup', this.getOption)
      },
      setQuery(val) {/*私有，不可调用*/
        this.$refs.selectScrollSourceRef.$children[0].query = val
      },
      reset() {/*私有，不可调用*/
        if (!this.isFresh) {
          this.valueT = null
          this.isFresh = true
          this.searchStr = null
          this.options = []
          this.current = 1
          this.pages = 1
          this.historyData = {}
          this.urlChanged = false
        }
      },
      isSelect(val) {/*私有，不可调用*/
        for (let item of this.options) {
          if (item.label === val) {
            return true
          }
        }
        return false
      },
      getOption: _.debounce(function (e) {/*私有，不可调用*/
        const val = e.target.value
        if (!this.isSelect(val)) {
          if (isValidValue(val)) {
            if (this.urlChanged) {
              this.reset()
            }
            else {
              if (_.isEmpty(this.historyData)) {
                this.historyData.current = this.current
                this.historyData.pages = this.pages
                this.historyData.options = _.cloneDeep(this.options)
              }
              if (isValidValue(this.valueT)) {
                this.valueT = null
              }
            }
            this.searchStr = val
            this.options = []
            this.current = 1
            this.isFresh = true
            this.getData().then(() => {
              this.$nextTick(function () {
                this.setQuery(val)
              })
            }).catch(() => {
              this.$nextTick(function () {
                this.setQuery(val)
              })
            })
          }
          else {
            if (this.urlChanged) {
              this.reset()
              this.getData()
            }
            else {
              this.valueT = null
              this.searchStr = null
              if (this.historyData.current) {
                this.current = this.historyData.current
                this.pages = this.historyData.pages
                this.options = _.cloneDeep(this.historyData.options)
                this.historyData = {}
              }
              else {
                this.getData()
              }
            }
          }
        }
      }, 600),
      loadMore() {/*私有，不可调用*/
        if (this.urlChanged) {
          this.reset()
        }
        if (this.current < this.pages) {
          ++this.current
          this.$nextTick(function () {
            this.getData()
          })
        }
        else {
          this.$Message.warning({
            background: true,
            content: this.t('r.noMore')
          })
        }
      },
      getData() {/*私有，不可调用*/
        return new Promise((resolve, reject) => {
          if (this.getOptions) {
            if (this.searchWordsRequired && !isValidValue(this.searchStr)) {
              resolve()
              return
            }
            $fetch.get(this.url, this.searchDataT)
              .then(r => {
                this.isFresh = false
                let temp = []
                if (r && r.data && r.data.records) {
                  temp = r.data.records
                  this.pages = r.data.pages
                }
                else if (r && r.data && myTypeof(r.data) === 'Array') {
                  temp = r.data
                  this.pages = r.pages
                }
                else if (r && r.data && myTypeof(r.data) === 'Object') {
                  temp = [r.data]
                  this.pages = 1
                }
                if (myTypeof(this.optionFilter) === 'Function') {
                  temp = this.optionFilter(temp)
                }
                if (!_.isEmpty(temp)) {
                  temp = temp.map((e, i) => {
                    let label = this.t('r.optionLabel') + i
                    if (Array.isArray(this.optionsLabelKey)) {
                      let labelT = []
                      for (let j = 1, len = this.optionsLabelKey.length; j < len; j++) {
                        labelT.push(e[this.optionsLabelKey[j]])
                      }
                      label = `${e[this.optionsLabelKey[0]]}(${String(labelT)})`
                    }
                    else if (_.isString(this.optionsLabelKey)) {
                      label = e[this.optionsLabelKey]
                    }
                    if (this.collectLabel) {
                      let eT = _.cloneDeep(e)
                      delete eT.value
                      delete eT.label
                      return {
                        value: e[this.optionsValKey],
                        label: label, ...eT
                      }
                    }
                    return {
                      value: e[this.optionsValKey],
                      label: label
                    }
                  })
                }
                this.options.push(...temp)
                /*去重*/
                let hash = {}
                this.options = this.options.filter(e => {
                  if (!hash[e.value]) {
                    hash[e.value] = true
                    return e
                  }
                })
                this.$nextTick(function () {
                  this.$emit('update-option-finish')
                })
                resolve(true)
              }).catch(() => {
              this.$Message.error(this.t('r.getDataError'))
              reject(this.t('r.getDataError'))
            })
          }
          else {
            resolve()
          }
        })
      }
    }
  }
</script>
