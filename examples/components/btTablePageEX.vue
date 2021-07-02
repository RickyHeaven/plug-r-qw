<template>
  <div class="exBox">
    <showReadMe/>
    <toHome/>
    <div class="tableLK">
      <bt-table-page
          ref="btTab"
          :columns="columns"
          :url='url'
          :search-data="searchData"
          @on-row-click="onRowClick"
          @on-data-change="setTotal"
          sortable="custom"
          :pageSize="3"
          show-top-row
          radio
      >
        <template slot="topMsg">共有：{{total}} 条数据。</template>
        <template slot="topBtnGroup">
          <div style="display: inline-block;float: right">
            <Checkbox v-model="nodeServer" @on-change="getData">切换为node-server数据(需开启项目nodeJs服务器)</Checkbox>
            <Button class="bbA" @click="getS">get select</Button>
            <Button class="bbA">导出</Button>
            <Button class="bbA">新增</Button>
          </div>
        </template>
      </bt-table-page>
    </div>
  </div>
</template>

<script>
  import {downloadFileReaderFile} from '../../src/methods/functionGroup'
  import imgK from '../assets/testo.png'

  export default {
    name: "btTablePageEX",
    data() {
      return {
        nodeServer: false,
        total: 0,
        searchData: {},
        data: [],
        columns: [
          {
            title: "文件名称",
            key: "name",
            align: "center",
            minWidth: 250,
            render: (h, params) => {
              return h("span", {
                class: 'linkM',
                on: {
                  click: () => {
                    downloadFileReaderFile('模拟文件下载', imgK)
                  }
                },
              }, params.row.name)
            }
          },
          {
            title: "文件类型",
            key: "mimeType",
            align: "center"
          },
          {
            title: "文件大小",
            key: "size",
            align: "center"
          },
          {
            title: "存储路径",
            key: "storagePath",
            align: "center"
          },
          {
            title: "存储组",
            key: "storageGroup",
            align: "center"
          },
          {
            title: "创建时间",
            key: "createdAt",
            align: "center"
          },
          {
            title: '操作',
            width: 240,
            align: "center",
            render: (h, params) => {
              return h("div", [
                h("Button", {
                  style: {},
                  on: {
                    click: () => {
                      this.messageBox({
                        content: '确定模拟执行删除操作？',
                        onOk: () => {
                          /*在这里调接口删除数据并给成功失败提示，然后主动拉取table数据*/
                          this.setTimeout(() => {
                            this.$swal('成功', '假装删除成功', 'success')
                          }, 500)
                        }
                      })
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ]
      }
    },
    computed: {
      url() {
        return this.nodeServer ? '/node-serve/bt-table-page' : location.pathname + "testData/btTablePage.json"
      }
    },
    methods: {
      getData(){
        this.$nextTick(function () {
          this.$refs.btTab.getTableData()
        })
      },
      getS() {
        console.log(this.$refs.btTab.getSelected())
      },
      search(data) {
        this.searchData = _.cloneDeep(data)
      },
      onRowClick(row, index) {
        console.log('row click-->', row, index)
      },
      setTotal() {
        this.total = this.$refs.btTab.total
      }
    }
  }
</script>

<style scoped>
  .exBox {
    height: 100vh;
    padding: 50px 20px 20px 20px;
  }

  .tableLK {
    height: calc(100vh - 50px);
    position: relative;
  }

  .bbA {
    margin-left: 8px;
  }
</style>