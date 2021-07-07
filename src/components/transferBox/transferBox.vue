<!--created 2021.07.06-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div class="transferBoxRL">
    <div class="leftBoxLLL">
      <div class="fullHeight flexColumnBox">
        <div class="notGrow">
          <div class="titleLLL">{{titleLeft}}</div>
          <show-hide-panel>
            <search-form
                ref="leftForm"
                :data="formDataLeft"
                :form-rules="formRulesLeft"
                @on-search="searchLeft"
            ></search-form>
          </show-hide-panel>
        </div>

        <div class="growFlexItem">
          <bt-table-page
              ref="lTabRef"
              :columns="leftTableColumns"
              :url="leftTableUrl"
              :search-data="leftTableSearchData"
              @on-selection-change="lSelectionChange"
              :init-data="isEmpty(constSearchDataLeft)&&leftTableUrl"
              get-data-loading
              selection
          ></bt-table-page>
        </div>
      </div>
    </div>

    <div class="middleBoxLLL">
      <Button class="middleBtLLL" size="large" type="default" @click="removeAll">全部移除
        <Icon type="ios-arrow-forward"/>
      </Button>
      <Button class="middleBtLLL" size="large" type="default" @click="remove" :disabled="deleteDis">移除
        <Icon type="ios-arrow-forward"/>
      </Button>
      <Button class="middleBtLLL" size="large" type="primary" @click="add" :disabled="addDis">
        <Icon type="ios-arrow-back"/>
        添加</Button>
      <Button class="middleBtLLL" size="large" type="primary" @click="addAll">
        <Icon type="ios-arrow-back"/>
        全部添加</Button>
    </div>

    <div class="rightBoxLLL">
      <div class="fullHeight flexColumnBox">
        <div class="notGrow">
          <div class="titleLLL">{{titleRight}}</div>

          <show-hide-panel>
            <search-form
                ref="rightForm"
                :data="formDataRight"
                :form-rules="formRulesRight"
                @on-search="searchRight"
            ></search-form>
          </show-hide-panel>
        </div>

        <div class="growFlexItem">
          <bt-table-page
              ref="rTabRef"
              :columns="rightTableColumns"
              :url="rightTableUrl"
              :search-data="rightTableSearchData"
              @on-selection-change="rSelectionChange"
              :init-data="isEmpty(constSearchDataRight)&&rightTableUrl"
              get-data-loading
              selection
          ></bt-table-page>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "transferBox",
    props: {
      titleLeft: {
        type: String,
        default: '已添加'
      },
      titleRight: {
        type: String,
        default: '未添加'
      },
      formDataLeft: {
        type: Array,
        default() {
          return []
        }
      },
      formDataRight: {
        type: Array,
        default() {
          return []
        }
      },
      formRulesLeft: {
        type: Object,
        default() {
          return {}
        }
      },
      formRulesRight: {
        type: Object,
        default() {
          return {}
        }
      },
      constSearchDataLeft: {
        type: Object,
        default() {
          return {}
        }
      },
      constSearchDataRight: {
        type: Object,
        default() {
          return {}
        }
      },
      leftTableColumns: {
        type: Array,
        default() {
          return []
        }
      },
      rightTableColumns: {
        type: Array,
        default() {
          return []
        }
      },
      leftTableUrl: {
        type: String,
        default: null
      },
      rightTableUrl: {
        type: String,
        default: null
      },
      addUrl: {
        type: String,
        default: null
      },
      deleteUrl: {
        type: String,
        default: null
      },
      addAllUrl: {
        type: String,
        default: null
      },
      deleteAllUrl: {
        type: String,
        default: null
      },
      addParamsHandle: {
        type: Function,
        default: (selection) => {
          return selection.map(e => e.id)
        }
      },
      deleteParamsHandle: {
        type: Function,
        default: (selection) => {
          return selection.map(e => e.id)
        }
      },
      addAllParamsHandle: {
        type: Function,
        default: (searchData) => {
          return searchData
        }
      },
      deleteAllParamsHandle: {
        type: Function,
        default: (searchData) => {
          return searchData
        }
      },
      addMethod: {
        type: String,
        default: 'post'
      },
      addAllMethod: {
        type: String,
        default: 'post'
      },
      deleteMethod: {
        type: String,
        default: 'delete'
      },
      deleteAllMethod: {
        type: String,
        default: 'delete'
      }
    },
    data() {
      return {
        searchDataLeft: {},
        searchDataRight: {},
        lSelection: [],
        rSelection: []
      }
    },
    computed: {
      leftTableSearchData() {
        return {...this.constSearchDataLeft, ...this.searchDataLeft}
      },
      rightTableSearchData() {
        return {...this.constSearchDataRight, ...this.searchDataRight}
      },
      deleteDis() {
        return this.lSelection.length < 1
      },
      addDis() {
        return this.rSelection.length < 1
      }
    },
    methods: {
      isEmpty: _.isEmpty,
      lSelectionChange(s) {
        this.lSelection = s
      },
      rSelectionChange(s) {
        this.rSelection = s
      },
      searchLeft(d) {
        this.searchDataLeft = d
      },
      searchRight(d) {
        this.searchDataRight = d
      },
      add() {
        if (this.addUrl) {
          this.fetchX('add')
        }
      },
      remove() {
        if (this.deleteUrl) {
          this.fetchX('delete')
        }
      },
      addAll() {
        if (this.addAllUrl && this.addUrl) {
          this.fetchX('addAll')
        }
      },
      removeAll() {
        if (this.deleteAllUrl) {
          this.fetchX('deleteAll')
        }
      },
      fetchX(action) {
        let method = this[action + 'Method']
        let url = this[action + 'Url']
        let data = {}
        let msg = ''
        switch (action) {
          case 'add':
            data = this.addParamsHandle(this.rSelection)
            msg = '添加'
            break
          case 'delete':
            data = this.deleteParamsHandle(this.lSelection)
            msg = '移除'
            break
          case 'addAll':
            data = this.addAllParamsHandle(this.rightTableSearchData)
            msg = '全部添加'
            break
          case 'deleteAll':
            data = this.deleteAllParamsHandle(this.leftTableSearchData)
            msg = '全部移除'
            break
        }
        if (url) {
          this.$fetch[method](url, data, null, [], {spin: true}, false)
            .then(r => {
              if (r && r.code === 0) {
                this.$swal(msg + '成功', '', 'success')
                if (this.$refs.lTabRef) {
                  this.$refs.lTabRef.getTableData()
                }
                if (this.$refs.rTabRef) {
                  this.$refs.rTabRef.getTableData()
                }
              }
              else {
                this.$swal(msg + '失败', r && r.message || '', 'error')
              }
            })
            .catch(() => {
              this.$swal(msg + '出错', '', 'error')
            })
        }
      }
    }
  }
</script>