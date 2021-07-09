<template>
  <div class="examplePageL">
    <showReadMe/>
    <toHome/>
    <search-form :data="data" :form-rules="formRules" @on-search="search" @on-item-change="onItemChange"></search-form>
    <div style="margin-top: 30px">
      组件提交的值：
      <json-viewer :value="valGroup" theme="my-awesome-json-theme" copyable></json-viewer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchFormEX",
    data(){
      return{
        valGroup:{},
        data:[
          {
            type: 'input',
            label: '名称',
            key: 'name'
          },
          {
            type: 'input',
            label: '收件人',
            disabled:true,
            key: 'receiver',
            defaultVal:'本人'
          },
          {
            type: 'input',
            inputType:'number',
            label: '年龄',
            key: 'age'
          },
          {
            type: 'selectInput',
            key:'height',
            options:[
              {
                label:'身高',
                val:'height'
              },
              {
                label:'体重',
                val:'weight'
              }
            ]
          },
          {
            type: 'select',
            label: '学历',
            key: 'education',
            options:[
              {
                label:'高中',
                val:1
              },
              {
                label:'专科',
                val:2
              },
              {
                label:'本科',
                val:3
              },
              {
                label:'研究生',
                val:4
              },
              {
                label:'博士',
                val:5,
                disabled:true
              }
            ]
          },
          {
            type: 'input',
            label: '专业',
            key: 'major',
            show:{
              key:'education',
              val:[2,3,4,5]
            }
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
            type: 'inputMap',
            label: '地址',
            key: 'lng',
            key2: 'lat',
            showMap: false
          }
        ],
        formRules:{
          age: {
            required: true
          }
        }
      }
    },
    methods:{
      search(data){
        console.log(data)
        this.valGroup = data
      },
      onItemChange(data){
        console.log(data)
      }
    }

  }
</script>