<template>
  <div class="exBox">
    <toHome/>
    <div class="tableLK">
      <bt-table-page
          ref="btTab"
          :columns="columns"
          url="testData/btTablePage.json"
          :search-data="searchData"
          @on-row-click="onRowClick"
          sortable="custom"
      />
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
                    downloadFileReaderFile('模拟文件下载',imgK)
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
                          setTimeout(() => {
                            window.$swal('成功', '假装删除成功', 'success')
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
    methods: {
      search(data) {
        this.searchData = _.cloneDeep(data)
      },
      onRowClick(row, index) {
        console.log(row, index)
      }
    }
  }
</script>

<style scoped>
  .exBox {
    height: 100vh;
    padding-top: 50px;
  }

  .tableLK{
    height: calc(100vh - 50px);
    position: relative;
  }
</style>