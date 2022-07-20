<!--created 2019.06.15-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div class="btTablePage fullHeight" ref="tableBox">
    <div class="topBtn" v-show="showTopRow">
      <slot name="tableSetting" />

      <slot name="topMsg" />

      <slot name="topBtnGroup" />
    </div>
    <div
        class="tableContainer fullHeight"
        :class="{noTop: !showTopRow,noPage: noPage}"
    >
      <div class="fullHeight relativeBox">
        <div ref="tableContainerLOI" class="fullFlowContent">
          <Table
              ref="TableXXX"
              v-bind="$attrs"
              v-on="$listeners"
              :height="fixedTable&&tableContainerHeight||null"
              :class="{noBorderTable:noBorderTable,fullHeightTable:!fixedTable,lightHeadO:lightHead}"
              :columns="columnsT"
              :data="dataS"
              :highlight-row="radio||highlightRow"
              @on-select="onSelect"
              @on-selection-change="selectionHandle"
              @on-sort-change="onSortChange"
              @on-row-click="onRowClick"
          />
        </div>
      </div>
    </div>
    <div class="pageContainer" v-show="!noPage">
      <Page
          :page-size-opts="pageSizes"
          :total="total"
          :current.sync="current"
          :page-size="pageSizeT"
          show-sizer
          show-total
          size="small"
          @on-change="changePage"
          @on-page-size-change="pageSizeChange"
      />
    </div>
  </div>
</template>

<script>
  import {toLine, toHump, oneOf, tooltipManual} from '../../methods/functionGroup.js'
  import $fetch from '../../methods/fetch.js'
  import _ from 'lodash'
  import {setTimeout} from '../../methods/timer'
  import {myTypeof} from "../../methods/functionGroup"

  export default {
    name: "btTablePage",
    props: {
      url: {
        /*表格拉取数据的接口地址*/
        type: String,
        default: ''
      },
      searchData: {
        /*表格条件查询数据*/
        type: Object,
        default() {
          return {}
        }
      },
      columns: {
        /*表格表头结构数据，同iView*/
        type: Array,
        default() {
          return []
        }
      },
      dataHandler: {
        /*接口数据处理方法，处理后格式须为{data:[...],total:xx}*/
        type: Function
      },
      selection: {
        /*是否展示每列开头选择框*/
        type: Boolean,
        default: false
      },
      radio: {
        /*表格是否是单选表格，每次只能选中一行*/
        type: Boolean,
        default: false
      },
      selectionFixed: {
        /*每列开头选择框固定*/
        validator: val => oneOf(val, [
          'left',
          'right',
          false
        ]),
        default: false
      },
      rowClickSelect: {
        /*是否点击行操作开头选择框*/
        type: Boolean,
        default: true
      },
      data: {
        /*表格默认数据，没有url的本地静态表格使用*/
        type: Array,
        default() {
          return []
        }
      },
      pageSize: {
        /*每页条数*/
        type: Number,
        default: 10
      },
      sortable: {
        /*排序模式*/
        validator: val => oneOf(val, [
          'custom',
          ''
        ]),
        default: ''
      },
      initData: {
        /*初始化数据，即组件创建后自动拉取第一次数据*/
        type: Boolean,
        default: true
      },
      highlightRow: {
        /*高亮当前行*/
        type: Boolean,
        default: false
      },
      rowClickNum: {
        /*自动拉取第一次数据时点击第几行，默认-1，不点击*/
        type: Number,
        default: -1
      },
      tableEmptyTdHandle: {
        /*表格内容为空是否显示为‘--’*/
        type: Boolean,
        default: false
      },
      noBorderTable: {
        /*表格无边框*/
        type: Boolean,
        default: false
      },
      noPage: {
        /*表格页签*/
        type: Boolean,
        default: false
      },
      orderDefault: {
        /*排序是升是降*/
        type: String,
        default: "desc"
      },
      orderKey: {
        /*排序的key*/
        type: String,
        default: "id"
      },
      orderKeyFormat: {
        validator: val => oneOf(val, [
          'underline',
          'camelcase'
        ]),
        default: 'underline'
      },
      getDataLoading: {
        /*拉取表格数据时显示遮罩层*/
        type: Boolean,
        default: false
      },
      showTopRow: {
        /*展示顶行（列表设置、批量操作按钮、导出等按钮、统计信息等）,各项子内容通过slot接入*/
        type: Boolean,
        default: false
      },
      lightHead: {
        /*浅色背景表头，避免和headerBar菜单紧邻时页面局部颜色不平衡*/
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        pageSizes: this.pageSizes || [
          10,
          20,
          30,
          40
        ],
        dataT: this.data,
        pageSizeT: localStorage.getItem('btPageSize') && Number(localStorage.getItem('btPageSize')) || this.pageSize,
        current: 1,
        total: 0,
        selected: [],
        currentKey: null,
        currentIndex: null,
        key: this.orderKey,
        order: this.orderDefault,
        tableContainerHeight: 300
      }
    },
    computed: {
      columnsFixed() {
        for (let item of this.columns) {
          if (item.fixed) {
            return true
          }
        }
        return false
      },
      fixedTable() {
        return this.selectionFixed || this.columnsFixed
      },
      queryData() {
        let temp = {
          ...this.searchData,
          current: this.current,
          size: this.pageSizeT
        }
        if (this.sortable === 'custom') {
          if (this.orderKeyFormat === 'underline') {
            temp[this.order] = toLine(this.key)
          }
          else if (this.orderKeyFormat === 'camelcase') {
            temp[this.order] = toHump(this.key)
          }
        }
        return temp
      },
      columnsT() {
        let temp = this.columns.filter(item => {
          return item.type !== 'selection'
        })
        if (this.selection || this.radio) {
          let TTK
          if (this.radio) {
            TTK = {
              title: ' ',
              width: 65,
              render: (h, params) => {
                return h('Radio', {
                  props: {
                    value: params.row.btChecked
                  }
                })
              }
            }
          }
          else {
            TTK = {
              type: "selection",
              width: 60
            }
          }

          if (this.selectionFixed) {
            TTK.fixed = this.selectionFixed
          }
          temp.unshift(TTK)
        }
        temp.forEach(item => {
          if (this.sortable === 'custom') {
            if (item.key && item.sortable !== true && item.sortable !== false) {
              item.sortable = 'custom'
            }
          }
          else {
            item.sortable = false
          }
          if (!item.align) {
            item.align = 'center'
          }
        })
        if (this.tableEmptyTdHandle) {
          temp.forEach(item => {
            if (item.key && item.render === undefined) {
              if (item.tooltip) {
                item.render = tooltipManual(item.key, true)
              }
              else {
                item.render = (h, params) => {
                  let td = params.row[item.key]
                  return h('span', (td === '' || td === null || td === undefined) ? '--' : td)
                }
              }
            }
          })
        }
        return temp
      },
      dataS: {
        get() {
          return this.dataT.map((e, i) => {
            return {
              btKey: 'bt-' + i,
              btChecked: false, ...e
            }
          })
        },
        set(v) {
          this.dataT = v
        }
      },
      selectedIds() {
        return this.selected.map(e => e.id)
      },
      selectedKeys() {
        return this.selected.map(e => e.btKey)
      }
    },
    created() {
      this.initTable()
    },
    watch: {
      searchData: {
        handler() {
          this.search()
        },
        deep: true
      }
    },
    methods: {
      initTable() {/*私有*/
        if (this.initData) {
          this.getDataAndClickRow()
        }
      },
      addRow(row) {/*添加行（公开），分页时不推荐使用，详细见说明文档*/
        this.dataT.unshift(_.cloneDeep(row))
        setTimeout(() => {
          this.$refs.TableXXX.clickCurrentRow(0)
        }, 100)
      },
      setRowData(row, setCurrentRow, clickCurrentRow) { /*更新行数据（公开）*/
        let index = null
        if (_.isBoolean(setCurrentRow) && setCurrentRow) {
          index = this.currentIndex
        }
        else if (_.isNumber(setCurrentRow)) {
          index = setCurrentRow
        }
        if (index !== null) {
          let temp = this.dataT[index]
          for (let key in row) {
            if (row.hasOwnProperty(key)) {
              temp[key] = row[key]
            }
          }
          if (clickCurrentRow) {
            setTimeout(() => {
              this.$refs.TableXXX.clickCurrentRow(index)
            }, 10)
          }
        }
      },
      deleteRow(index) { /*根据索引数字删除行（公开），分页时不推荐使用，详细见说明文档*/
        this.dataT.splice(index, 1)
        setTimeout(() => {
          this.$refs.TableXXX.clickCurrentRow(0)
        }, 100)
      },
      clearSelect() {/*清空选择（公开）*/
        if (this.radio) {
          if (this.selectedKeys.length > 0) {
            let i = this.selectedKeys[0].split('-')[1]
            this.$set(this.dataS[i], 'btChecked', false)
          }
        }
        else {
          this.$refs.TableXXX.selectAll(false)
        }
        if (this.selected.length > 0) {
          this.selected = []
          this.$emit('on-selection-change', [])
        }
        this.currentKey = null
        this.currentIndex = null
      },
      clearTableData() {/*清空选择（公开）,用于特殊场景下重置表格，不拉取数据，如需刷新数据直接调用getTableData*/
        this.$set(this, 'dataT', [])
        this.clearSelect()
        this.current = 1
        this.total = 0
      },
      search() {/*私有*/
        this.current = 1
        this.getDataAndClickRow()
      },
      getDataAndClickRow(clickCurrentRow, order, orderKey) { /*单选模式时（非单选模式只拉数据不点击），拉取表格数据并且点击行，如果传true，则点击当前行，不传则点击 rowClickNum 指定行（公开）*/
        if (this.radio && (clickCurrentRow || this.rowClickNum !== -1)) {
          this.getTableData(order, orderKey, clickCurrentRow)
            .then(() => {
              //点击对应行
              if (this.dataT.length > 0) {
                setTimeout(() => {
                  if (clickCurrentRow) {
                    this.$refs.TableXXX.clickCurrentRow(this.currentIndex || 0)
                  }
                  else {
                    this.$refs.TableXXX.clickCurrentRow(this.rowClickNum)
                  }
                }, 10)
              }
            })
        }
        else {
          this.getTableData()
        }
      },
      onRowClick(row, i) {/*私有*/
        if (row.btChecked && this.radio) {
          return
        }
        if ((this.selection || this.radio) && this.rowClickSelect) {
          this.$refs.TableXXX.toggleSelect(i)
        }
      },
      onSelect(s, row) {/*私有*/
        this.currentKey = row.btKey
        this.currentIndex = Number(row.btKey.split('-')[1])
        if (this.radio) {
          this.$set(this.dataT[this.currentIndex], 'btChecked', true)
        }
      },
      selectionHandle(selection) {/*私有*/
        if (this.radio) {
          for (let e of this.dataS) {
            if (e.btKey !== this.currentKey) {
              this.$set(this.dataT[Number(e.btKey.split('-')[1])], 'btChecked', false)
            }
          }
        }
        this.selected = selection
      },
      getSelected() {/*获取已选行数据（公开）*/
        return _.cloneDeep(this.selected)
      },
      changePage(v) {/*私有*/
        this.current = v
        this.getDataAndClickRow()
      },
      pageSizeChange(v) {/*私有*/
        this.pageSizeT = v
        localStorage.setItem('btPageSize', v)
        if (this.current === 1) {
          this.getDataAndClickRow()
        }
      },
      onSortChange({key, order}) {/*私有*/
        //表头排序
        if (order === 'normal') {
          /*恢复到默认页面排序*/
          this.key = this.orderKey
          this.order = this.orderDefault
        }
        else {
          this.key = key
          this.order = order
        }
        this.current = 1
        this.getTableData()
      },
      getTableData(order, orderKey, keepSelect) { /*拉取表格数据（公开）*/
        return new Promise(resolve => {
          if (order) {
            this.order = order
          }
          if (orderKey) {
            this.key = orderKey
          }
          if (this.url && this.url !== '') {
            $fetch.get(this.url, this.queryData, null, [], {spin: this.getDataLoading})
              .then(d => {
                let r
                if (!keepSelect) {
                  this.clearSelect()
                }
                if (myTypeof(this.dataHandler) === 'Function') {
                  r = this.dataHandler(d)
                }
                else {
                  r = d
                }
                if (r.data) {
                  /*接口返回数据为空时可能是用null表示，所以有下面逻辑*/
                  if (r.data.records || r.data.records === null) {
                    this.dataT = r.data.records || []
                  }
                  else if (r.data.page) {
                    if (r.data.page.records || r.data.page.records === null) {
                      this.dataT = r.data.page.records || []
                    }
                  }
                  else if (r.data.data) {
                    if (r.data.data.records || r.data.data.records === null) {
                      this.dataT = r.data.data.records || []
                    }
                  }
                  else {
                    this.dataT = r.data
                  }
                  this.total =
                    r.data.page && r.data.page.total || r.data.data && r.data.data.total || r.data.total || r.total || 0
                  if (this.total === 0 && this.current > 1 && this.dataT && this.dataT.length === 0) {
                    /*如果没有数据，将当前页置为1*/
                    this.current = 1
                  }
                  else if (this.current > 1 && this.total <= (this.current - 1) * this.pageSizeT) {
                    /*当前页并没有数据，自动拉取前一页数据*/
                    this.current--
                    this.$nextTick(function () {
                      this.getTableData(order, orderKey)
                    })
                  }
                  this.$emit('on-data-change', r)
                  resolve(r)
                }
                else {
                  console.warn('请求返回数据有误，无法使用')
                  this.clearTableData()
                  this.$emit('on-data-change', r)
                }
              })
              .catch(e => {
                console.warn(e)
                this.clearSelect()
                this.clearTableData()
                this.$emit('on-data-change', e)
              })
          }
          else {
            console.warn('没有有效的请求地址，无法获取表格数据')
          }
        })
      }
    }
  }
</script>
