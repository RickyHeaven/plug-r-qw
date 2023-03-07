<!--created 2020.01.07-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Tree
      :id="id" class="checkboxTreeGA" v-if="initTree" :data="dataT" :render="renderContent"
      @on-check-change="updateVal" @on-toggle-expand="changeStyle" show-checkbox
  />
</template>
<script>
  import {myTypeof, setValByOption} from "../../methods/functionGroup"
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
      inlineLeaf: {
        /*叶子节点为行内模式，横向排列*/
        type: Boolean,
        default: false
      },
      disabled: {
        /*禁用整颗树的checkbox选择功能*/
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        initTree:true,
        dataT: [],
        id: 'CKT' + Math.floor(Math.random() * 10000000 + 10000000),
        valueE: []
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
          this.initTree = false
          let temp = []
          this.initData(after, temp)
          this.dataT = temp
          this.$nextTick(function () {
            this.initTree = true

            if (this.inlineLeaf) {
              this.$nextTick(this.changeStyle)
            }
          })
        },
        immediate: true,
        deep: true
      },
      valueT(after) {
        let key
        let type = 's'
        if (myTypeof(this.collectVal) === 'Array' && this.collectVal[0]) {
          key = this.collectVal[0]
          type = 'a'
        }
        else {
          key = this.collectVal
        }
        if (!key || JSON.stringify(after) === JSON.stringify(this.valueE)) {
          this.valueE = []
          return
        }
        /*清空dataT已选*/
        setValByOption({
          group: this.dataT,
          condition: e => e.checked === true,
          key: 'checked',
          val: false
        })
        /*根据value设置dataT的已选*/
        if (type === 'a') {
          setValByOption({
            group: this.dataT,
            condition: e => _.findIndex(after, [
              key,
              e[key]
            ]) !== -1,
            key: 'checked',
            val: true
          })
        }
        else {
          setValByOption({
            group: this.dataT,
            condition: e => after.indexOf(e[key]) !== -1,
            key: 'checked',
            val: true
          })
        }
      },
      disabled: {
        handler(after) {
          setValByOption({
            group: this.dataT,
            condition: e => e.disableCheckbox !== after,
            key: 'disableCheckbox',
            val: after
          })
          if (this.inlineLeaf) {
            this.$nextTick(this.changeStyle)
          }
        },
        immediate: true
      }
    },
    methods: {
      initData(data, root = []) {
        for (let item of data) {
          let checked = false
          if (this.collectValT.length > 1) {
            /*valueT的元素为Object*/
            checked = _.find(this.valueT, e => e[_.head(this.collectValT)] === item[_.head(this.collectValT)]) !== undefined
          }
          else {
            checked = this.valueT.indexOf(item[_.head(this.collectValT)]) !== -1
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
            checked = _.find(this.valueT, e => e[_.head(this.collectValT)] === item[_.head(this.collectValT)]) !== undefined
          }
          else {
            checked = this.valueT.indexOf(item[_.head(this.collectValT)]) !== -1
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
        let classA = ''
        let isLeaf = true
        if (data.children && data.children.length > 0) {
          for (let ii of data.children) {
            if (ii.children !== undefined) {
              isLeaf = false
              break
            }
          }
          if (isLeaf && this.inlineLeaf) {
            classA = 'inlineChildXA'
          }
        }
        return h('div', {
          style: {
            display: 'inline-block',
            width: '100%'
          },
          class: classA
        }, [
          h('span', {
            style: {
              fontWeight: data.children ? 'bold' : 'normal'
            }
          }, data.name)
        ])
      },
      changeStyle(data) {
        if (data) {
          if (data.expand) {
            this.$nextTick(this.changeStyle)
          }
          return
        }
        let arr = document.querySelectorAll('#' + this.id + ' .inlineChildXA')
        if (arr.length > 0) {
          for (let item of arr) {
            let parent = item.parentNode
            let tt = parent.nextElementSibling
            if (!tt) {
              return
            }
            if (tt.tagName !== 'BR') {
              let grandParent = parent.parentNode
              let br = document.createElement('br')
              grandParent.insertBefore(br, tt)
              tt = br.nextElementSibling
              if (tt.className.indexOf('inlineTreeNodeF') === -1) {
                tt.setAttribute('class', tt.className + ' inlineTreeNodeF')
              }
            }
            while (tt.nextElementSibling) {
              tt = tt.nextElementSibling
              if (tt.className.indexOf('inlineTreeNodeF') === -1) {
                tt.setAttribute('class', tt.className + ' inlineTreeNodeF')
              }
            }
          }
        }
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
        this.valueE = temp
        this.$emit('subVal', temp)
        this.$emit('on-change', _.cloneDeep(temp))
      }
    }
  }
</script>
