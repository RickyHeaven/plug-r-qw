<!--created 2020.01.07-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Tree class="checkboxTreeGA" :data="dataT" :render="renderContent" @on-check-change="updateVal" show-checkbox></Tree>
</template>
<script>
  import {myTypeof} from "../../methods/functionGroup"
  import _ from 'lodash'

  export default {
    name: "checkboxTree",
    model: {
      prop: 'value',
      event: 'subVal'
    },
    props: {
      value: {
        /*选中的节点的集合（内容依据collectVal中的字段）*/
        type: Array,
        default() {
          return []
        }
      },
      data: {
        /*树结构数据*/
        type: Array,
        default() {
          return []
        }
      },
      expandAll: {
        /*是否默认全部展开*/
        type: Boolean,
        default: false
      },
      label: {
        /*节点的标签*/
        type: String,
        default: 'name'
      },
      collectVal: {
        /*v-model收集节点的哪些字段*/
        type: [
          String,
          Array
        ],
        default: 'id'
      },
      leaf: {
        /*叶子节点模式，v-model只返回叶子节点数据，任何选择操作都会选择叶子节点*/
        type: Boolean,
        default: true
      },
      disabled: {
        /*禁用整颗树的checkbox选择功能*/
        type: Boolean,
        default: false
      }
    },
    computed: {
      collectValT() {
        if (myTypeof(this.collectVal) === 'Array') {
          return this.collectVal
        }
        if (myTypeof(this.collectVal) === 'String') {
          return [this.collectVal]
        }
        return []
      },
      valueT() {
        if (myTypeof(this.value) === 'Array') {
          return this.value
        }
        return []
      }
    },
    watch: {
      data: {
        handler(after) {
          let temp = []
          this.initData(after, temp)
          this.dataT = temp
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      initData(data, root = []) {
        for (let item of data) {
          let checked = false
          if (this.collectValT.length > 1) {
            /*valueT的元素为Object*/
            checked = _.find(this.valueT, e => e[this.collectValT[0]] === item[this.collectValT[0]]) !== undefined
          }
          else {
            checked = this.valueT.indexOf(item[this.collectValT[0]]) !== -1
          }
          let temp = {
            name: item[this.label],
            expand: Boolean(this.expandAll || item.expand),
            checked: checked,
            disableCheckbox: this.disabled
          }
          for (let keyI of this.collectValT) {
            temp[keyI] = item[keyI]
          }
          root.push(temp)
          if (item.children && item.children.length > 0) {
            temp.children = []
            this.initDataB(item.children, temp.children)
          }
        }
      },
      initDataB(data, root = []) {
        for (let item of data) {
          let checked = false
          if (this.collectValT.length > 1) {
            /*valueT的元素为Object*/
            checked = _.find(this.valueT, e => e[this.collectValT[0]] === item[this.collectValT[0]]) !== undefined
          }
          else {
            checked = this.valueT.indexOf(item[this.collectValT[0]]) !== -1
          }
          let temp = {
            name: item[this.label],
            expand: Boolean(this.expandAll || item.expand),
            checked: checked,
            disableCheckbox: this.disabled
          }
          for (let keyI of this.collectValT) {
            temp[keyI] = item[keyI]
          }
          root.push(temp)
          if (item.children && item.children.length > 0) {
            temp.children = []
            this.initData(item.children, temp.children)
          }
        }
      },
      renderContent(h, {root, node, data}) {
        return h('div', {
          style: {
            display: 'inline-block',
            width: '100%'
          },
          class: data.children && data.children.length > 0 && (data.children[0].children === undefined) ?
            'inlineChild' : ''
        }, [
          h('span', {
            style: {
              fontWeight: data.children ? 'bold' : 'normal'
            }
          }, data.name)
        ]);
      },
      updateVal(data) {
        let temp = []
        if (this.leaf) {
          for (let item of data) {
            if (!item.children) {
              if (myTypeof(this.collectVal) === 'Array') {
                let valT = {}
                for (let keyI of this.collectVal) {
                  valT[keyI] = item[keyI]
                }
                temp.push(valT)
              }
              else {
                temp.push(item[this.collectVal])
              }
            }
          }
        }
        else {
          for (let item of data) {
            if (myTypeof(this.collectVal) === 'Array') {
              let valT = {}
              for (let keyI of this.collectVal) {
                valT[keyI] = item[keyI]
              }
              temp.push(valT)
            }
            else {
              temp.push(item[this.collectVal])
            }
          }
        }
        this.$emit('subVal', temp)
        this.$emit('on-change', _.cloneDeep(temp))
      }
    }
  }
</script>