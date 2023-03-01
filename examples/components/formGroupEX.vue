<template>
  <div class="examplePageL">
    <showReadMe/>
    <toHome/>
    <form-group
        ref="formGroup" :form-data="data" :form-rules="formRules" width="800px" @on-submit="submit"
        @on-item-change="onItemChange" cancel-bt-txt="清空" @on-cancel="clear"
    />
    <div style="margin-top: 30px">
      组件提交的值：
      <json-viewer :value="valGroup" theme="my-awesome-json-theme" copyable/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "formGroupEX",
    data() {
      return {
        valGroup: {},
        data: [
          {
            type: 'input',
            label: '名称',
            key: 'name'
          },
          {
            type: 'inputNumber',
            label: '年龄',
            key: 'age'
          },
          {
            type: 'select',
            label: '学历',
            key: 'education',
            options: [
              {
                label: '高中',
                val: 1
              },
              {
                label: '专科',
                val: 2
              },
              {
                label: '本科',
                val: 3
              },
              {
                label: '研究生',
                val: 4
              },
              {
                label: '博士',
                val: 5,
                disabled: true
              }
            ]
          },
          {
            type: 'select',
            label: '学历1',
            key: 'education1',
            multiple: true,
            options: [
              {
                label: '高中',
                val: 1
              },
              {
                label: '专科',
                val: 2
              },
              {
                label: '本科',
                val: 3
              },
              {
                label: '研究生',
                val: 4
              },
              {
                label: '博士',
                val: 5,
                disabled: true
              }
            ],
            defaultVal: [
              2,
              3
            ]
          },
          {
            type: 'input',
            label: '专业',
            key: 'major',
            show: v => v.education && v.education !== 1
          },
          {
            type: 'date',
            dateType: 'datetimerange',
            label: '学历攻读时间',
            key: 'timeEnter',
            key2: 'timeEnter2'
          },
          {
            type: 'select',
            label: '联系人',
            key: 'friend',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel'
          },
          {
            type: 'alCascader', /*行政区域级联*/
            label: '住址',
            key: 'addressCode',
            key2: 'addressName',
            level: 2
          },
          {
            type: 'inputMap',
            label: '详细地址',
            key: 'lng',
            key2: 'lat',
            key3: 'detailAddress',
            defaultVal: 106.463077,
            defaultVal2: 29.568138,
            defaultVal3: '重庆大学(地铁站)'
          },
          {
            type: 'editor',
            key: 'signature',
            label: '个性签名'
          }
        ],
        formRules: {
          age: {
            required: true
          },
          signature: {
            required: true
          },
          education1: {
            required: true
          }
        }
      }
    },
    mounted() {
      this.setTimeout(() => {
        this.$refs.formGroup.updateValGroup({
          lng: 106.499401,
          lat: 29.616077,
          detailAddress: '光电园(地铁站)'
        }, true)
      }, 5000)

    },
    methods: {
      submit(data) {
        this.valGroup = data
      },
      onItemChange(data) {
        console.log('item change:', data)
      },
      clear() {
        this.$refs.formGroup.resetForm()
      }
    }
  }
</script>

<style scoped>

</style>
