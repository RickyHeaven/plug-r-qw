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

  </div>
</template>

<script>
  export default {
    name: "tableTreeEX",
    data() {
      return {
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
                      // this.editIndex = params.row._index
                      // this.action = 'new'
                      // this.$refs.formModal.resetForm()
                      // this.$refs.formModal.open()
                    }
                  }
                }, '新增下级'),
                h('Button', {
                  on: {
                    click: () => {
                      // this.editIndex = params.row._index
                      // this.action = 'edit'
                      // this.$refs.formModal.updateValGroup({
                      //   sd: params.row.sd,
                      //   np: params.row.np
                      // }, true)
                      // this.$refs.formModal.open()
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
                    hideChild: false,
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
      }
    },
    methods: {
      onSelect(e) {
        console.log('select:', e)
      }
    }
  }
</script>