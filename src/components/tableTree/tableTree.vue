<!--created 2019.04.18-->
<!--author ricky email:zhangqingcq@foxmail.com-->
<!--参数：columns 同iView ui table 组件columns -->
<!--参数：data 格式见 示例参数 exampleData -->
<!--调用方法 <table-tree :columns="columns" :data="data"/> -->

<template>
  <Table
      ref="tabXY"
      :columns="columnsX"
      :data="dataX"
      :key="updateDomKey"
      :highlight-row="highlightRow"
  ></Table>
</template>

<script>
  import _ from 'lodash'
  import {myTypeof, isValidValue, setValByOption} from "../../methods/functionGroup"

  export default {
    name: "tableTree",
    props: {
      columns: { //表格结构数据
        type: Array,
        default() {
          return []
        }
      },
      data: { //表格内容
        type: Array,
        default() {
          return []
        }
      },
      highlightRow: {
        /*高亮当前行*/
        type: Boolean,
        default() {
          return false
        }
      },
      radio: {
        /*表格是否是单选表格，每次只能选中一行*/
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        dataX: [], //处理过后的表格内容数据
        noKey: 1, //每行row的唯一标识
        updateDomKey: Math.floor(Math.random() * 100000000 + 10000) //组件的key,决定是否刷新该组件（key变化则刷新）
      }
    },
    computed: {
      columnsX() {//计算过后的表格结构数据
        let temp = this.columns.filter(item => {
          return item.type !== 'selection'
        })

        if (temp[0]) {
          let key = temp[0].key
          temp[0].renderHeader = (h, params) => {
            return h('div', {style: {paddingLeft: '20px'}}, params.column.title)
          }
          temp[0].render = (h, params) => {
            return h('div', {
              class: 'tableTxtBt',
              style: {
                paddingLeft: (params.row.parentNoKey.length + 1) * 20 + 'px',
                textAlign: 'left'
              }
            }, [
              h("Checkbox", {
                props: {
                  value: params.row.checkBox
                },
                directives: [
                  {
                    name: "show",
                    value: this.radio
                  }
                ],
                on: {
                  "on-change": e => {
                    if (e === true) {
                      this.setCollectionVal(this.dataX, {checkBox: false})
                      this.setCollectionVal(this.dataX, {
                        checkBox: e,
                        ownKey: this.dataX[params.index].ownKey
                      })
                      this.$emit('on-select', params.row)
                    }
                    else {
                      this.setCollectionVal(this.dataX, {
                        checkBox: e,
                        ownKey: this.dataX[params.index].ownKey
                      })
                    }
                  },
                  click: e => {
                    console.log(e)
                    e.stopPort
                  }
                }
              }),
              h("Icon", {
                props: {
                  type: params.row.hideChild ? 'ios-arrow-forward' :
                    (params.row.hideChild === false ? 'ios-arrow-down' : '')
                },
                style: {
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.showHideClick(params)
                  }
                }
              }),
              h('span', {
                style: {
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.showHideClick(params)
                  }
                }
              }, ' ' + params.row[key])
            ])
          }
        }
        return temp
      }
    },
    mounted() {
      this.updateTab()
    },
    watch: {
      data() {
        this.updateTab()
      }
    },
    methods: {
      setCollectionVal(arr, option) {
        if (option && isValidValue(option.checkBox) && myTypeof(arr) === 'Array') {
          if (option.ownKey) {
            for (let item of arr) {
              if (item.ownKey === option.ownKey) {
                item.checkBox = option.checkBox
              }
              if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
                this.setCollectionValB(item.childrenXK, option)
              }
            }
          }
          else {
            for (let item of arr) {
              item.checkBox = option.checkBox
              if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
                this.setCollectionValB(item.childrenXK, option)
              }
            }
          }
        }
      },
      setCollectionValB(arr, option) {
        if (option && isValidValue(option.checkBox) && myTypeof(arr) === 'Array') {
          if (option.ownKey) {
            for (let item of arr) {
              if (item.ownKey === option.ownKey) {
                item.checkBox = option.checkBox
              }
              if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
                this.setCollectionVal(item.childrenXK, option)
              }
            }
          }
          else {
            for (let item of arr) {
              item.checkBox = option.checkBox
              if (myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
                this.setCollectionVal(item.childrenXK, option)
              }
            }
          }
        }
      },
      handleResize() {
        this.$refs.tabXY.handleResize()
      },
      updateTab() {
        let temp = _.cloneDeep(this.data)
        this.addHideChildAttr(temp)
        this.showDefault(temp, _.cloneDeep(temp))
        this.dataX = _.cloneDeep(temp)
      },
      showDefault(root, data) {
        data.forEach((e, i) => {
          if (e.hideChild === false) {
            let child_ = _.cloneDeep(e.childrenXK)
            root.splice(i + 1, 0, ...child_)//向当前行下面插入直接子节点
            this.showDefaultB(root, _.cloneDeep(child_))
          }
        })
      },
      showDefaultB(root, data) {
        data.forEach((e, i) => {
          if (e.hideChild === false) {
            let child_ = _.cloneDeep(e.childrenXK)
            root.splice(i + 1, 0, ...child_)//向当前行下面插入直接子节点
            this.showDefault(root, _.cloneDeep(child_))
          }
        })
      },
      showHideClick(params) {
        if (params.row.hideChild) {//收起状态下，打开
          this.dataX[params.index].hideChild = false
          let child_ = _.cloneDeep(params.row.childrenXK)
          this.dataX.splice(params.index + 1, 0, ...child_)//向当前行下面插入直接子节点
          //如果子节点中有默认打开的，则插入孙子节点
          this.openChild(params.row.childrenXK, params.index + 1)
        }
        else if (params.row.hideChild === false) {//打开状态，收起
          this.hideChildNode(params)
        }
      },
      openChild(data, index) {
        data.forEach((e, i) => {
          if (e.hideChild === false) {
            let childB = _.cloneDeep(e.childrenXK)
            this.dataX.splice(index + i + 1, 0, ...childB)
            this.openChild(e.childrenXK, index + i + 1)
          }
        })
      },
      addHideChildAttr(data, parentNoKey) {
        for (let item of data) {
          item.ownKey = this.noKey
          this.noKey++
          item.parentNoKey = item.parentNoKey || []
          if (parentNoKey !== undefined) {
            item.parentNoKey.push(...parentNoKey)
          }
          if (item.children) {
            item.childrenXK = item.children
            delete item.children
          }
          if (this.myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
            if (item.hideChild !== false) {
              item.hideChild = true
            }
            this.addHideChildAttrB(item.childrenXK, [
              item.ownKey,
              ...item.parentNoKey
            ])
          }
        }
      },
      addHideChildAttrB(data, parentNoKey) {//为了代替递归（递归效率太低），写了两个相似的方法
        for (let item of data) {
          item.ownKey = this.noKey
          this.noKey++
          item.parentNoKey = item.parentNoKey || []
          if (parentNoKey !== undefined) {
            item.parentNoKey.push(...parentNoKey)
          }
          if (item.children) {
            item.childrenXK = item.children
            delete item.children
          }
          if (this.myTypeof(item.childrenXK) === 'Array' && item.childrenXK.length > 0) {
            if (item.hideChild !== false) {
              item.hideChild = true
            }
            this.addHideChildAttr(item.childrenXK, [
              item.ownKey,
              ...item.parentNoKey
            ])
          }
        }
      },
      hideChildNode(params) {//收起（从table移除）点击行在table中显示的所有子节点
        let count = this.getChildCount(params.row.ownKey)
        if (count) {
          this.dataX.splice(params.index + 1, count)//收起（从table中移除）点击行下所有显示在table中的子节点（子节点一定是跟在父节点后面的）
        }
        //更改收展状态
        setValByOption({
          group: [this.dataX[params.index]],
          condition: e => e.hideChild === false,
          key: 'hideChild',
          val: true,
          childKey:'childrenXK'
        })
      },
      /**
       * 手动添加单个子节点
       * @param index [非负整数] 要添加子节点的节点的序列号，由上到下，从0开始，可用params.row._index
       * @param node [object] 新节点数据,格式相当于table的data的一个元素
       * @returns {Promise<unknown>} 成功则返回添加的节点在组件中的数据，失败则返回失败原因
       */
      addLocalNode(index, node) {
        return new Promise((resolve, reject) => {
          if (!_.isInteger(index) || index < 0) {
            reject('索引序号index必须是正整数或0!')
          }
          else if (index > this.dataX.length - 1) {
            reject('无效的索引序号index!')
          }
          if (!_.isPlainObject(node) || _.isEmpty(node)) {
            reject('节点数据异常，无法添加节点！')
          }
          let parent = this.dataX[index]
          if (parent.hideChild !== false) {
            parent.hideChild = false
          }
          let parenNoKeyT = [//新节点的parentNoKey
            parent.ownKey,
            ...parent.parentNoKey
          ]
          let nodeT = {//新节点数据
            ...node,
            ownKey: ++this.noKey,
            parentNoKey: parenNoKeyT
          }
          for (let item of this.dataX) {//在table内容数据dataX中的节点（新节点的所有上辈）的对应位置（层级,即第几层children）上添加新节点数据
            let level = parenNoKeyT.indexOf(item.ownKey)//父辈等级（父辈ownKey在新节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
            if (level > -1) {//如果是新节点父辈
              if (item.childrenXK === undefined) {
                item.childrenXK = []
              }
              let childrenXK = item.childrenXK
              let temp = item
              for (let i = 0; i < level + 1; i++) {//找到正确的位置(层级)添加新节点数据
                if (i === level) {
                  childrenXK.push(_.cloneDeep(nodeT))
                  if (item.hideChild === undefined) {
                    item.hideChild = true
                  }
                  break
                }
                else {
                  temp = _.find(temp.childrenXK, e => parenNoKeyT.indexOf(e.ownKey) !== -1)//找到下一层级（children）中的父辈数据节点，进行下一循环
                  if (temp.hideChild === undefined) {
                    temp.hideChild = true
                  }
                  if (temp.childrenXK === undefined) {
                    temp.childrenXK = []
                  }
                  childrenXK = temp.childrenXK
                }
              }
            }
          }
          this.dataX.splice(index + 1 + this.getChildCount(parent.ownKey), 0, _.cloneDeep(nodeT))//在tableX中直接父节点下添加新节点（直接展示出来）
          this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
          resolve(_.cloneDeep(nodeT))
        })
      },
      /**
       * 手动编辑单个子节点
       * @param index [非负整数] 要编辑节点的节点的序列号，由上到下，从0开始，可用params.row._index
       * @param node [object] 节点的新数据,格式相当于table的data的一个元素
       * @returns {Promise<unknown>} 成功则返回编辑后的节点在组件中的数据，失败则返回失败原因
       */
      editLocalNode(index, node) {
        return new Promise((resolve, reject) => {
          if (!_.isInteger(index) || index < 0) {
            reject('索引序号index必须是正整数或0!')
          }
          else if (index > this.dataX.length - 1) {
            reject('无效的索引序号index!')
          }
          if (!_.isPlainObject(node) || _.isEmpty(node)) {
            reject('节点数据异常，无法添加节点！')
          }
          let thisNode = this.dataX[index]
          //节点新数据
          let nodeT = Object.assign(thisNode, node)
          this.dataX[index] = nodeT//更新当前节点
          for (let item of this.dataX) {//在table内容数据dataX中的节点（当前节点的所有上辈）的对应位置（层级,即第几层children）上修改节点数据
            let level = nodeT.parentNoKey.indexOf(item.ownKey)//父辈等级（父辈ownKey在当前节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
            if (level > -1) {//如果是当前节点父辈
              let childrenXK = item.childrenXK
              for (let i = 0; i < level + 1; i++) {//找到正确的位置(层级)修改节点新数据
                if (i === level) {
                  let tIndex = _.findIndex(childrenXK, e => e.ownKey === nodeT.ownKey)
                  if (tIndex > -1) {
                    childrenXK[tIndex] = _.cloneDeep(nodeT)
                  }
                  break
                }
                else {
                  let temp = _.find(childrenXK, e => nodeT.parentNoKey.indexOf(e.ownKey) !== -1)//找到下一层级（children）中的父辈数据节点，进行下一循环
                  childrenXK = temp.childrenXK
                }
              }
            }
          }
          this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
          resolve(_.cloneDeep(nodeT))
        })
      },
      /**
       * 手动删除单个子节点
       * @param index [非负整数] 要删除节点的节点的序列号，由上到下，从0开始，可用params.row._index
       * @returns {Promise<unknown>} 成功则返回删除后的整棵表格树数据，失败则返回失败原因
       */
      deleteLocalNode(index) {
        return new Promise((resolve, reject) => {
          if (!_.isInteger(index) || index < 0) {
            reject('索引序号index必须是正整数或0!')
          }
          else if (index > this.dataX.length - 1) {
            reject('无效的索引序号index!')
          }
          let thisNode = this.dataX[index]
          this.dataX.splice(index, 1)//删除当前节点
          this.deleteLocalChildNode(thisNode.ownKey, index)
          for (let item of this.dataX) {//在table内容数据dataX中的节点（当前节点的所有上辈）的对应位置（层级,即第几层children）上删除节点数据
            let level = thisNode.parentNoKey.indexOf(item.ownKey)//父辈等级（父辈ownKey在当前节点parentNoKey中的位置，等级越高，位置越靠后，直接父节点在最前面）
            if (level > -1) {//如果是当前节点父辈
              let childrenXK = item.childrenXK
              let temp = item
              for (let i = 0; i < level + 1; i++) {//找到正确的位置(层级)删除节点新数据
                if (i === level) {
                  let tIndex = _.findIndex(childrenXK, e => e.ownKey === thisNode.ownKey)
                  if (tIndex > -1) {
                    childrenXK.splice(tIndex, 1)
                    if (childrenXK.length === 0) {
                      temp.hideChild = null
                    }
                  }
                  break
                }
                else {
                  temp = _.find(childrenXK, e => thisNode.parentNoKey.indexOf(e.ownKey) !== -1)//找到下一层级（children）中的父辈数据节点，进行下一循环
                  childrenXK = temp.childrenXK
                }
              }
            }
          }
          this.updateDomKey = Math.floor(Math.random() * 100000000 + 10000) //更新dom
          resolve(_.cloneDeep(this.dataX))
        })
      },
      deleteLocalChildNode(ownKey, index) {//删除tableX中所有展示的后辈节点
        let count = this.getChildCount(ownKey)
        if (count) {
          this.dataX.splice(index, count)//收起（从table中移除）点击行下所有显示在table中的子节点（子节点一定是跟在父节点后面的）
        }
      },
      getChildCount(ownKey) {
        let count = 0
        for (let item of this.dataX) {
          if (item.parentNoKey.indexOf(ownKey) !== -1) {//如果当前行的parentNoKey里有删除行的ownKey,则表示当前行是删除行的子节点
            count++
          }
        }
        return count
      }
    }
  };
</script>
