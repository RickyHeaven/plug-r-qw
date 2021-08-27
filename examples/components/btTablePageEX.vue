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
          show-top-row
          :radio="selectMode==='radio'"
          :selection="selectMode==='checkbox'"
      >
        <template slot="topMsg">共有：{{total}} 条数据。</template>
        <template slot="topBtnGroup">
          <div class="topBoxKAQ">
            <RadioGroup v-model="selectMode" style="margin-right: 20px;" @on-change="clearSelect">
              <Radio label="radio">单选</Radio>
              <Radio label="checkbox">多选</Radio>
            </RadioGroup>
            <Checkbox v-model="nodeServer" @on-change="getData">切换为node-serve数据(需开启项目nodeJs服务器)</Checkbox>
            <Button @click="getS">get select</Button>
            <Button @click="handleNew">新增</Button>
          </div>
        </template>
      </bt-table-page>
    </div>
    <form-modal :title="title" ref="formModalRef" :form-data="formData" :form-rules="formRules" @on-submit="handleSub"/>
  </div>
</template>

<script>
  import {downloadFileReaderFile} from '../../src/methods/functionGroup'
  import imgK from '../assets/testo.png'

  export default {
    name: "btTablePageEX",
    data() {
      return {
        action: 'new',
        nodeServer: false,
        selectMode: 'radio',
        total: 0,
        searchData: {},
        data: [],
        columns: [
          {
            title: 'ID',
            key: 'id',
            align: 'center',
            width: 80
          },
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
            title: "备注",
            key: "remark",
            align: "center"
          },
          {
            title: '操作',
            width: 240,
            align: "center",
            render: (h, params) => {
              return h("div", [
                h("Button", {
                  on: {
                    click: () => {
                      if (this.nodeServer) {
                        this.action = 'edit'
                        this.$refs.formModalRef.updateValGroup(params.row)
                        this.$refs.formModalRef.setItemToValGroup({id: params.row.id}, true)
                        this.$refs.formModalRef.open()
                      }
                      else {
                        this.$swal('提示', '仅在node-serve模式下可执行编辑', 'info')
                      }
                    }
                  }
                }, '编辑'),
                h("Button", {
                  on: {
                    click: () => {
                      this.messageBox({
                        content: '确定模拟执行删除操作？',
                        onOk: () => {
                          if (this.nodeServer) {
                            this.$fetch.delete('/node-serve/bt-table-page', {id: params.row.id}).then(r => {
                              if (r && r.code === 0) {
                                this.$swal('删除成功', '', 'success')
                                this.getData()
                              }
                              else {
                                this.$swal('删除失败', '', 'error')
                              }
                            })
                          }
                          else {
                            this.setTimeout(() => {
                              this.$swal('成功', '假装删除成功', 'success')
                            }, 500)
                          }
                        }
                      })
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        formData: [
          {
            type: 'txt',
            val: '正常的文件系统应该是上传文件，我们这里只是演示btTablePage使用方法，手动填写这些字段就行',
            label: '说明'
          },
          {
            type: 'input',
            key: 'name',
            label: '文件名称'
          },
          {
            type: 'inputNumber',
            key: 'size',
            label: '文件大小',
            min: 0
          },
          {
            type: 'input',
            key: 'mimeType',
            label: '文件类型'
          },
          {
            type: 'textarea',
            key: 'remark',
            label: '备注'
          }
        ],
        formRules: {
          name: {
            required: true
          },
          size: {
            required: true
          },
          mimeType: {
            required: true
          }
        }
      }
    },
    computed: {
      url() {
        return this.nodeServer ? '/node-serve/bt-table-page' : location.pathname + "testData/btTablePage.json"
      },
      title() {
        return this.action === 'new' ? '新增' : '编辑'
      },
      method() {
        return this.action === 'new' ? 'post' : 'put'
      }
    },
    methods: {
      clearSelect(){
        this.$refs.btTab.clearSelect()
      },
      handleNew() {
        if (this.nodeServer) {
          this.action = 'new'
          this.$refs.formModalRef.open()
        }
        else {
          this.$swal('提示', '仅在node-serve模式下可执行新增', 'info')
        }
      },
      handleSub(d) {
        if (d) {
          this.$fetch[this.method]('/node-serve/bt-table-page', d).then(r => {
            if (r && r.code === 0) {
              this.$swal(this.title + '成功', '', 'success')
              if (this.action === 'new') {
                this.search()
              }
              else {
                this.getData()
              }
              this.$refs.formModalRef.close()
            }
            else {
              this.$swal(this.title + '失败', '', 'error')
            }
          })
        }
      },
      getData() {
        this.$nextTick(function () {
          this.$refs.btTab.getTableData()
        })
      },
      getS() {
        console.log(this.$refs.btTab.getSelected())
        this.$swal('请在控制台查看已选数据', '', 'success')
      },
      search(data) {
        if (!data) {
          data = {}
        }
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

<style lang="scss">
  .exBox {
    button + button {
      margin-left: 8px;
    }
  }
</style>

<style lang="scss" scoped>
  .exBox {
    height: 100vh;
    padding: 50px 20px 20px 20px;
  }

  .tableLK {
    height: calc(100vh - 50px);
    position: relative;
  }

  .topBoxKAQ {
    display: inline-block;
    float: right;
  }
</style>