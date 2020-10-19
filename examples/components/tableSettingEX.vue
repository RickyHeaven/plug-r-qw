<template>
  <div class="exBox">
    <showReadMe/>
    <toHome/>
    <div class="headBR">
      <tableSetting class="fr" v-model="columns" sKey="tableSettingEx_202007030903" top="40px" :defaultCheck="true"/>
    </div>
    <div class="tableLK">
      <bt-table-page
          :columns="columns"
          :url="url"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "tableSettingEX",
    data() {
      return {
        url: location.pathname + 'testData/btTablePage.json',
        columns: [
          {
            title: "文件名称",
            key: "name",
            align: "center",
            minWidth: 250,
            showSettingCheck: true
          },
          {
            title: "文件类型",
            key: "mimeType",
            showSettingCheck: true,
            align: "center"
          },
          {
            title: "文件大小",
            key: "size",
            showSettingCheck: true,
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
            showSettingCheck: true,
            disableShowSetting: true,
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../global/variables";

  .exBox {
    height: 100vh;
    padding: 50px 20px 20px 20px;
  }

  .tableLK {
    height: calc(100vh - 50px - #{$headerH});
    position: relative;
  }

  .headBR {
    height: $headerH;
    line-height: $headerH;
    background-color: $headerBg;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
</style>