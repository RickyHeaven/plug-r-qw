<template>
  <div class="exBox">
    <!--<div class="fullHeight flexColumnBox">-->
    <!--<div class="notGrow">-->
    <!--<search-form :data="data" @on-search="search"></search-form>-->
    <!--</div>-->
    <!--<div class="growFlexItem">-->

    <bt-table-page
        ref="btTab"
        :columns="columns"
        url="/umc/admin/maintaince/files"
        :search-data="searchData"
        @on-row-click="onRowClick"
        sortable="custom"
    />

    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import {downloadFileReaderFile} from '../../src/methods/functionGroup'

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
            tooltip: "true",
            render: (h, params) => {
              return h("span", {
                class: 'linkM',
                on: {
                  click: () => {
                    downloadFileReaderFile(window.g.umcURL + "/admin/maintaince/file/" + params.row.id+"/download")
                  }
                },
              }, params.row.name)
            }
          },
          {
            title: "文件类型",
            key: "mimeType",
            align: "center",
            tooltip: "true"
          },
          {
            title: "文件大小",
            key: "size",
            align: "center",
            tooltip: "true"
          },
          {
            title: "存储路径", /*后端接口明明错误storage*/
            key: "storegePath",
            align: "center",
            tooltip: "true"
          },
          {
            title: "存储组",
            key: "storegeGroup",
            align: "center",
            tooltip: "true"
          },
          {
            title: "创建时间",
            key: "createdAt",
            align: "center",
            tooltip: "true"
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
                        content: '确定执行删除操作？',
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
  }
</style>