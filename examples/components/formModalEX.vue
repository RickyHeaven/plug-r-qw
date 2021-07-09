<template>
  <div class="examplePageL tc">
    <showReadMe/>
    <toHome/>
    <p>说明：formModal核心组件是formR,所以formData和formRules规则参考formR的例子和说明文档</p>
    <p>formModal在formR（表单）的基础上，添加了modal(弹框)相关的功能</p>
    <Button style="margin-top: 20px" @click="confirmHandle">表单弹框</Button>
    <Button style="margin-top: 20px" @click="confirmHandle('b')">带loading</Button>
    <formModal
        ref="formModal" :form-data="data" :form-rules="rules" @on-submit="handleSub" @on-close="handleClose"
    ></formModal>
    <formModal
        ref="formModalB" :form-data="data" :form-rules="rules" :btn-loading="true" @on-submit="handleSub($event,'b')"
        @on-close="handleClose('b')"
    ></formModal>
  </div>
</template>

<script>
  export default {
    name: "formModalEX",
    data() {
      return {
        data: [
          {
            type: 'input',
            key: 'name',
            label: '名称'
          },
          {
            type: 'radioGroup',
            key: 'sex',
            label: '性别',
            options: [
              {
                label: '男',
                val: 1
              },
              {
                label: '女',
                val: 0
              }
            ]
          },
          {
            type: 'radioGroup',
            key: 'married',
            label: '婚姻',
            options: [
              {
                label: '已婚',
                val: 1
              },
              {
                label: '未婚',
                val: 0
              }
            ]
          },
          {
            type:'input',
            key:'husband',
            label:'老公',
            show:[
              {key:'married',val:[1]},
              {key:'sex',val:[0]}
            ]
          },
          {
            type:'input',
            key:'wife',
            label:'老婆',
            show:[
              {key:'married',val:[1]},
              {key:'sex',val:[1]}
            ]
          }
        ],
        rules: {
          name: {
            required: true
          }
        }
      }
    },
    methods: {
      confirmHandle(d) {
        if (d === 'b') {
          this.$refs.formModalB.open()
        }
        else {
          this.$refs.formModal.open()
        }
      },
      handleClose(d){
        if (d === 'b') {
          this.$refs.formModalB.resetForm()
        }
        else {
          this.$refs.formModal.resetForm()
        }
      },
      handleSub(val, d) {
        console.log(val)
        if (d === 'b') {
          this.setTimeout(this.$refs.formModalB.close, 2000)
        }
        else {
          this.$refs.formModal.close()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .examplePageL {
    > button + button {
      margin-left: 10px;
    }
  }
</style>