<!--created 2019.06.15-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div class="btTablePage fullHeight">
    <div class="topBtn" v-show="showTopRow">
      <slot name="tableSetting"></slot>

      <slot name="topMsg"></slot>

      <slot name="topBtnGroup"></slot>
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
              :class="{noBorderTable:noBorderTable,fullHeightTable:!fixedTable}"
              :columns="columnsT"
              :data="dataT"
              :highlight-row="radio||highlightRow"
              @on-select="onSelect"
              @on-select-all="onSelectAll"
              @on-select-cancel="onSelectCancel"
              @on-select-all-cancel="onSelectAllCancel"
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
  import {toLine, oneOf, tooltipManual} from '../../methods/functionGroup.js'
  import $fetch from '../../methods/fetch.js'
  import _ from 'lodash'
  import {setTimeout} from '../../methods/timer'

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
      selection: {
        /*是否展示每列开头选择框*/
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
      radio: {
        /*表格是否是单选表格，每次只能选中一行*/
        type: Boolean,
        default: false
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
      getDataLoading: {
        /*拉取表格数据时显示遮罩层*/
        type: Boolean,
        default: false
      },
      showTopRow: {
        /*展示顶行（列表设置、批量操作按钮、导出等按钮、统计信息等）,各项子内容通过slot接入*/
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dataT: this.data,
        searchDataT: _.cloneDeep(this.searchData),
        pageSizeT: this.pageSize,
        current: 1,
        total: 0,
        selected: [],
        selectedIds: [],
        currentRowId: null,
        currentRowIndex: null,
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
          ...this.searchDataT,
          current: this.current,
          size: this.pageSizeT
        }
        temp[this.order] = toLine(this.key)
        return temp
      },
      columnsT() {
        let temp = this.columns.filter(item => {
          return item.type !== 'selection'
        })
        if (this.selection && !this.radio) {
          let TTK = {
            type: "selection",
            align: "center",
            width: 60
          }
          if (this.selectionFixed) {
            TTK.fixed = this.selectionFixed
          }
          temp.unshift(TTK)
        }
        if (this.sortable === 'custom') {
          temp.forEach(item => {
            if (item.key && item.sortable !== true && item.sortable !== false) {
              item.sortable = 'custom'
            }
          })
        }
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
    },
    created() {
      this.initTable()
    },
    mounted() {
      // if (this.radio) {
      //屏蔽全选框
      // this.$refs.TableXXX.$refs.header.querySelector('thead .ivu-table-cell-with-selection').classList.add('modalHide')
      // }
      this.firstGetHeight()
      if (window.onresize) {
        let temp = window.onresize
        window.onresize = _.debounce(() => {
          temp()
          this.handleResize()
        })
      }
      else {
        window.onresize = _.debounce(this.handleResize)
      }
    },
    watch: {
      searchData: {
        handler(after) {
          this.searchDataT = _.cloneDeep(after)
          this.current = 1
          this.getDataAndClickRow()
        },
        deep: true
      }
    },
    methods: {
      firstGetHeight() {
        if (this.tableContainerHeight < 50) {
          setTimeout(this.firstGetHeight, 100)
        }
        else {
          setTimeout(this.getTableContainerHeight, 10)
        }
      },
      getTableContainerHeight() {
        this.tableContainerHeight = this.$refs.tableContainerLOI && this.$refs.tableContainerLOI.clientHeight || 0
      },
      handleResize() { /*table重新计算尺寸布局*/
        this.getTableContainerHeight()
        if (this.$refs.TableXXX) {
          this.$refs.TableXXX.handleResize()
        }
      },
      initTable() {
        if (this.initData) {
          this.getDataAndClickRow()
        }
      },
      addRow(row) {
        this.dataT.unshift(_.cloneDeep(row))
        setTimeout(() => {
          this.$refs.TableXXX.clickCurrentRow(0)
        }, 100)
      },
      setRowData(row, setCurrentRow, clickCurrentRow) { /*更新行数据（公开）*/
        let index = null
        if (_.isBoolean(setCurrentRow) && setCurrentRow) {
          index = this.currentRowIndex
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
      deleteRow(index) { /*根据索引数字删除行（公开）*/
        this.dataT.splice(index, 1)
        setTimeout(() => {
          this.$refs.TableXXX.clickCurrentRow(0)
        }, 100)
      },
      clearSelect() {/*清空选择*/
        this.$refs.TableXXX.selectAll(false)
      },
      clearTableData() {
        this.$set(this, 'dataT', [])
        this.clearPage()
        this.current = 1
        this.total = 0
      },
      clearSearchDataT() { /*searchData每次变动都会存个备份到searchDataT,但有时候我们在外面清空searchData时，
       并不希望空的searchData触发表格数据拉取（比如我们希望并手动清空table数据，同时清空查询条件form数据），于是没把空的值传递给searchData(searchData不变，
       但外面的form进行过一次清空),这样就需要手动清空备份，否则外面再次给searchData附与上一次同样的值，不会触发表格数据拉取*/
        this.searchDataT = {}
      },
      getDataAndClickRow(clickCurrentRow, order, orderKey) { /*拉取表格数据并且点击行，如果传true，则点击当前行，不传则点击 rowClickNum 指定行（公开）*/
        if (clickCurrentRow || this.rowClickNum !== -1) {
          this.getTableData(order, orderKey)
            .then(r => {
              //点击对应行
              if (this.dataT.length > 0) {
                setTimeout(() => {
                  if (clickCurrentRow) {
                    this.$refs.TableXXX.clickCurrentRow(this.currentRowIndex)
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
      onSelect(selection, row) {
        let tempCurrentRowId = row.id
        this.selectedIds.push(tempCurrentRowId)
        this.selected.push(row)
        for (let i = 0; i < this.dataT.length; i++) {
          let tempRow = this.dataT[i]
          if (this.radio && tempRow.id !== tempCurrentRowId && this.selectedIds.some(val => val === tempRow.id)) {
            for (let key in this.selectedIds) {
              if (this.selectedIds[key] === tempRow.id) {
                this.selectedIds.splice(key, 1)
                this.selected.splice(key, 1)
                break
              }
            }
            this.$refs.TableXXX.toggleSelect(i)
          }
        }
      },
      onSelectAll(selection) {
        if (!this.radio) {
          this.selectedIds = []
          this.selected = _.cloneDeep(selection)
          for (let item of selection) {
            this.selectedIds.push(item.id)
          }
        }
      },
      onSelectCancel(selection, row) {
        if (this.radio) {
          this.$refs.TableXXX.toggleSelect(row)
        }
        else {
          for (let keyB in this.selectedIds) {
            if (this.selectedIds[keyB] === row.id) {
              this.selectedIds.splice(keyB, 1)
              this.selected.splice(keyB, 1)
            }
          }
        }
      },
      onSelectAllCancel(selection) {
        if (!this.radio) {
          this.selectedIds = []
          this.selected = []
        }
      },
      getSelected() {/*获取已选行数据*/
        return _.cloneDeep(this.selected)
      },
      onRowClick(row, index) {
        if (row.id === this.currentRowId) {
          return
        }
        if (this.selection && this.rowClickSelect) {
          this.$refs.TableXXX.toggleSelect(index)
        }
        this.$emit('on-row-click', row)
        this.currentRowId = row.id
        this.currentRowIndex = index
      },
      changePage(val) {
        this.current = val
        this.getDataAndClickRow()
      },
      pageSizeChange(val) {
        this.pageSizeT = val
        if (this.current === 1) {
          this.getDataAndClickRow()
        }
      },
      onSortChange({key, order}) {
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
      clearPage() {
        this.selected = []
        this.selectedIds = []
        this.currentRowId = null
        this.currentRowIndex = null
      },
      getTableData(order, orderKey) { /*拉取表格数据（公开）*/
        return new Promise((resolve, reject) => {
          if (order) {
            this.order = order
          }
          if (orderKey) {
            this.key = orderKey
          }
          if (this.url && this.url !== '') {
            $fetch.get(this.url, this.queryData, null, [], {spin: this.getDataLoading})
              .then(r => {
                this.clearPage()
                if (r.data || r.data === null) {
                  if (r.data.records || r.data.records === null) {
                    this.dataT = r.data.records || []
                  }
                  else if (r.data.page) {
                    if (r.data.page.records || r.data.page.records === null) {
                      this.dataT = r.data.page.records || []
                    }
                  }
                  else {
                    this.dataT = r.data || []
                  }
                  this.total = r.data.page && r.data.page.total || r.data.total || r.total || 0
                  this.$emit('on-data-change')
                  resolve(r)
                }
                else {
                  console.warn('请求返回数据有误，无法使用')
                  this.clearPage()
                }
              })
              .catch(e => {
                console.warn(e)
                this.clearPage()
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
