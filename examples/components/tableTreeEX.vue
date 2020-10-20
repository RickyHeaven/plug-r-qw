<template>
  <div class="examplePageL vh100">
    <showReadMe/>
    <toHome/>
    <tableTree
        ref="tableTree"
        :columns="columns"
        :data="data"
        :radio="true"
        @on-select="onSelect"
    />
    <form-modal
        ref="formModal"
        :title="title"
        :form-data="formData"
        :form-rules="formRules"
        :btnLoading="true"
        @on-submit="onSubmit"
    />
  </div>
</template>

<script>

  export default {
    name: "tableTreeEX",
    data() {
      return {
        action: 'new',
        columns: [
          {
            title: "接收人",
            key: "np",
            align: "left",
            tooltip: "true",
            minWidth: 80
          },
          {
            title: "接收渠道",
            key: "sd",
            align: "center",
            tooltip: "true",
            minWidth: 80
          },
          {
            title: "操作",
            align: "center",
            minWidth: 80,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  on: {
                    click: () => {
                      this.editIndex = params.row._index
                      this.action = 'new'
                      this.$refs.formModal.resetForm()
                      this.$refs.formModal.open()
                    }
                  }
                }, '新增下级'),
                h('Button', {
                  on: {
                    click: () => {
                      this.editIndex = params.row._index
                      this.action = 'edit'
                      this.$refs.formModal.updateValGroup({
                        sd: params.row.sd,
                        np: params.row.np
                      }, true)
                      this.$refs.formModal.open()
                    }
                  }
                }, '编辑'),
                h('Button', {
                  on: {
                    click: () => {
                      this.messageBox({
                        content: '确定执行删除操作？',
                        onOk: () => {
                          this.$refs.tableTree.deleteLocalNode(params.row._index)
                            .then(() => {
                              $swal('删除成功！', '', 'success')
                            })
                            .catch(e => {
                              console.warn(e)
                              $swal('删除出错！', '', 'error')
                            })
                        }
                      })
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data: [
          {
            np: 'ricky',
            sd: 12,
            children: [
              {
                np: 'tom',
                sd: 8,
                hideChild: false,
                children: [
                  {
                    np: 'jim',
                    sd: 5,
                    children: [
                      {
                        np: 'mike',
                        sd: 2,
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            np: 'mary',
            sd: 22,
            checkBox: true
          }
        ],
        formData: [
          {
            type: 'input',
            label: '接收人',
            key: 'np'
          },
          {
            type: 'input',
            label: '接收渠道',
            key: 'sd'
          }
        ],
        formRules: {
          np: {
            required: true
          },
          sd: {
            required: true
          }
        }
      }
    },
    computed: {
      title() {
        if (this.action === 'new') {
          return '新增'
        }
        else {
          return '编辑'
        }
      }
    },
    methods: {
      onSelect(e) {
        console.log('select:', e)
      },
      onSubmit(data) {
        if (this.action === 'new') {
          this.$refs.tableTree.addLocalNode(this.editIndex, data)
            .then(r => {
              this.$refs.formModal.close()
            })
            .catch(e => {
              this.$refs.formModal.changeLoading(false)
              console.log(e)
            })
        }
        else {
          this.$refs.tableTree.editLocalNode(this.editIndex, data)
            .then(r => {
              setTimeout(() => {//模拟请求，展示loading功能
                this.$refs.formModal.close()
              }, 1000)
            })
            .catch(e => {
              this.$refs.formModal.changeLoading(false)
              console.log(e)
            })
        }
      }
    }
  }
</script>