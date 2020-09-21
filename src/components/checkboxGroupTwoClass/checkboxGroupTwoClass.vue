<template>
  <div class="boxLPA">
    <div class="headerJ">
      <div class="firstT borderBoxAS">{{firstTitle}}</div>
      <div class="secondT borderBoxAS">{{secondTitle}}</div>
    </div>
    <div class="bodyJ" v-for="(item,index) in dataT" :key="'checkboxJ'+index">
      <div class="firstCol borderBoxAS">
        <Checkbox
            v-model="item.checked" :indeterminate="item.indeterminate" @on-change="checkAll(item,$event)"
            :disabled="disabled"
        >{{item[label]}}</Checkbox>
      </div>
      <div class="secondCol borderBoxAS">
        <div class="secItem" v-for="(secItem,indexSec) in item.children" :key="'secItem'+indexSec">
          <Checkbox
              v-model="secItem.checked"
              @on-change="updateDataT"
              :disabled="disabled"
          >{{secItem[label]}}</Checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import {myTypeof} from "../../methods/functionGroup"

  export default {
    name: "checkboxGroupTwoClass",
    model: {
      prop: 'value',
      event: 'subVal'
    },
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      value: {
        type: Array,
        default() {
          return []
        }
      },
      firstTitle: {
        type: String,
        default() {
          return '一级'
        }
      },
      secondTitle: {
        type: String,
        default() {
          return '二级'
        }
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
    data() {
      return {
        leafChecked: []
      }
    },
    computed: {
      dataT() {
        let temp = _.cloneDeep(this.data)
        let valTemp = _.cloneDeep(this.leafChecked)
        for (let item of temp) {
          /*遍历data添加勾选信息*/
          let checkCount = 0
          if (item.children && (!_.isEmpty(item.children))) {
            for (let secItem of item.children) {
              /*更深一层遍历children*/
              for (let valIndex = 0, len = valTemp.length; valIndex < len; valIndex++) {
                /*遍历继承的value*/
                if (myTypeof(valTemp[valIndex]) === 'Object') {
                  /*收集多个字段的情况*/
                  let equalI = true
                  for (let collectKey of this.collectVal) {
                    if (valTemp[valIndex][collectKey] !== secItem[collectKey]) {
                      /*遍历中当前节点和value的当前遍历元素不等（收集字段对应的值有不等的），判断为当前节点没有被选中，不在判断其他收集字段，跳出循环*/
                      equalI = false
                      break
                    }
                  }
                  /*循环结束，如果equalI的值没被改为false,则表示当前节点被选中*/
                  if (equalI) {
                    /*如果当前节点被选中，当前父级中选中的子节点数加一，不在遍历value其他元素，跳出循环*/
                    secItem.checked = true
                    checkCount++
                    valTemp.splice(valIndex, 1)
                    break
                  }
                }
                else if (valTemp[valIndex] === secItem[this.collectVal]) {
                  /*收集单个字段且当前节点的对应字段的值和value中当前遍历元素相等,判断为选中，不在遍历value其他元素，跳出循环*/
                  secItem.checked = true
                  checkCount++
                  valTemp.splice(valIndex, 1)
                  break
                }
              }
              /*避免checked为Undefined*/
              (!secItem.checked) && (secItem.checked = false)
            }
          }
          if (checkCount === 0) {
            item.checked = false
            item.indeterminate = false
          }
          else if (item.children && checkCount === item.children.length) {
            item.checked = true
            item.indeterminate = false
          }
          else {
            item.checked = false
            item.indeterminate = true
          }
        }
        return temp
      }
    },
    watch: {
      value: {
        handler(after, before) {
          if (_.isEqual(this.leafChecked, after) || _.isEqual(after, before)) {
            return
          }
          this.leafChecked = after
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      checkAll(root, isCheck) {
        if (root.children) {
          for (let item of root.children) {
            item.checked = isCheck
          }
        }
        this.updateDataT()
      },
      updateDataT() {
        this.getLeafChecked(this.dataT, true)
      },
      getLeafChecked(val, isLeaf) {
        let temp = []
        for (let item of val) {
          if (!isLeaf && !this.leaf && item.checked && item.indeterminate === false) {
            /*非叶子节点模式且需要获取parent节点时，如果当前parent节点所有子节点都选中，在value中带上parent节点*/
            if (myTypeof(this.collectVal) === 'Array') {
              let ttO = {}
              for (let keyI of this.collectVal) {
                ttO[keyI] = item[keyI]
              }
              temp.push(ttO)
            }
            else if (myTypeof(this.collectVal) === 'String') {
              temp.push(item[this.collectVal])
            }
          }
          if (item.children) {
            for (let secItem of item.children) {
              if (secItem.checked) {
                if (myTypeof(this.collectVal) === 'Array') {
                  let ttO = {}
                  for (let keyI of this.collectVal) {
                    ttO[keyI] = secItem[keyI]
                  }
                  temp.push(ttO)
                }
                else if (myTypeof(this.collectVal) === 'String') {
                  temp.push(secItem[this.collectVal])
                }
              }
            }
          }
        }
        if (isLeaf) {
          this.leafChecked = temp
          if (this.leaf) {
            this.$emit('subVal', temp)
            this.$emit('on-change', _.cloneDeep(temp))
          }
          else {
            this.$nextTick(function () {
              this.getLeafChecked(this.dataT)
            })
          }
        }
        else {
          this.$emit('subVal', temp)
          this.$emit('on-change', _.cloneDeep(temp))
        }
      }
    }
  }
</script>