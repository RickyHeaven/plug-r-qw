<template>
  <div class="examplePageL">
    <showReadMe />
    <toHome />
    <div class="eBoxA baseUA">
      <wellCard title="基础用法">
        <div class="inPage">
          <formR :form-data="data" />
        </div>
      </wellCard>
    </div>
    <div class="eBoxA baseUA">
      <wellCard title="带提交按钮">
        <div class="inPage">
          <formR :form-data="data" :show-long-ok-bt="true" @on-submit="submit" />
        </div>
      </wellCard>
    </div>
    <div class="eBoxA baseUA">
      <wellCard title="带提校验">
        <div class="inPage">
          <formR :form-data="data" :form-rules="rules3" :show-long-ok-bt="true" @on-submit="submit" />
        </div>
      </wellCard>
    </div>
    <div class="eBoxA baseUA">
      <wellCard title="禁用表单">
        <template #bts>
          <headerBt :icon="disabled4?'md-unlock':'md-lock'" @click="disabled4=!disabled4">{{disabled4?'解禁':'禁用'}}
          </headerBt>
        </template>
        <div class="inPage">
          <formR
              :form-data="data" :show-long-ok-bt="true" @on-submit="submit" :disabled="disabled4"
          />
        </div>
      </wellCard>
    </div>
    <div class="eBoxA baseUA inlineFA">
      <wellCard title="行内表单">
        <div class="inPage">
          <formR
              :form-data="data" :inline="true" :show-inline-ok-bt="true" :show-inline-clear-bt="true"
              @on-submit="submit"
          />
        </div>
      </wellCard>
    </div>
    <div class="eBoxA detailUA">
      <wellCard title="详细示例">
        <div class="inPage">
          <formR
              ref="formRef" :form-data="data5" :form-rules="rules5" :show-long-ok-bt="true" @on-submit="submitB"
          >
            <template #switchLJ="{valGroup}">
              <i-switch v-model="valGroup.switchStatus" />
            </template>

            <template slot="cnu">
              <span>阶梯</span>
              <Table border stripe :columns="columns" :data="tableData" />
            </template>
          </formR>
          表单提交的值：
          <json-viewer :value="valGroup5" theme="my-awesome-json-theme" copyable />
        </div>
      </wellCard>
    </div>
  </div>
</template>

<script>
  export default {
    name: "formREX",
    data() {
      return {
        data: [
          {
            type: 'input',
            key: 'name',
            label: '名称',
            placeholder: '请输入名称',
            class: 'myInputHG bigKZ'/*该formItem自定义样式类名*/
          }, {
            type: 'radioGroup',
            key: 'sex',
            label: '性别',
            options: [
              {
                label: '男',
                val: 1
              }, {
                label: '女',
                val: 0
              }
            ]
          }
        ],
        rules3: {
          name: {
            required: true
          },
          sex: {
            required: true
          }
        },
        disabled4: true,
        data5: [
          {
            type: 'txt',
            label: '注意',
            val: '因为该表单有需要请求接口的组件，所以需要在项目目录下新开一个命令窗口运行：npm run node-serve 将该项目配置好的nodeJs服务器启动起来，那些需要请求nodeJs服务器的组件才有数据'
          }, {
            type: 'txt',
            label: '改变表单结构（示例）',
            val: '我将会在页面加载5秒之后改变'
          }, {
            type: 'custom',
            slotName: 'switchLJ',
            label: '开关',
            key: 'switchStatus',
            defaultVal: false
          }, {
            type: 'custom',
            slotName: 'cnu',
            label: '定价类型'
          }, {
            type: 'input',
            label: '名称',
            key: 'name',
            title: '个人信息'
          }, {
            type: 'input',
            label: '禁用示例',
            disabled: true,
            key: 'nameDisabled',
            defaultVal: '我是默认姓名'
          }, {
            type: 'radioGroup',
            label: '性别',
            key: 'sexC',
            options: [
              {
                label: '男',
                val: 1
              }, {
                label: '女',
                val: 0
              }
            ]
          }, {
            type: 'radioGroup',
            label: '总部所在地',
            key: 'base',
            buttonType: true,
            options: [
              {
                label: '北京',
                val: 'beijin'
              }, {
                label: '重庆',
                val: 'chongqing'
              }, {
                label: '上海',
                val: 'shanghai'
              }
            ]
          }, {
            type: 'radioGroup',
            label: '内部推荐',
            key: 'recommend',
            booleanVal: true, /*输出值会是布尔类型*/
            options: [
              {
                label: '是',
                val: 1
              }, {
                label: '否',
                val: 0
              }
            ]
          }, {
            type: 'radioGroup',
            label: '推荐人',
            key: 'referrer',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel',
            show: {
              key: 'recommend',
              val: [true]
            }
          }, {
            type: 'inputNumber', /*数字输入框，输出值是数字*/
            label: '年龄',
            key: 'age',
            min: 1,
            max: 150
          }, {
            type: 'alCascader', /*行政区域级联*/
            label: '住址',
            key: 'addressCode',
            key2: 'addressName',
            level: 2
          }, {
            type: 'asyncCascader',
            label: '机构',
            key: 'orgId',
            key2: 'orgName',
            url: location.pathname + 'testData/asyncCascader.json'
          }, {
            type: 'upload', /*上传组件*/
            label: '头像',
            key: 'logo',
            url: '/node-serve/file',
            format: [
              'jpg', 'png'
            ],
            maxSize: 500,
            showImg: true,
            length: 1
          }, {
            type: 'upload', /*上传组件*/
            label: '附件（本地上传）',
            key: 'attachment',
            manualUpload: true,
            maxSize: 2000,
            length: 5
          }, {
            type: 'select',
            label: '最高学历',
            key: 'education',
            collectLabel: {
              valKey: 'label',
              key: 'educationName'
            }, /*选中项的标签连同值一并返回*/
            options: [
              /*本地待选项下拉框*/
              {
                label: '高中',
                val: 1
              }, {
                label: '专科',
                val: 2
              }, {
                label: '本科',
                val: 3
              }, {
                label: '研究生',
                val: 4
              }, {
                label: '博士',
                val: 5,
                disabled: true
              }
            ],
            info: '注意：必须是教育部认证学历' /*下方提示文字*/
          }, {
            type: 'input',
            label: '学校',
            key: 'school',
            show: {
              /*单一条件决定是否展示*/
              key: 'education',
              val: [
                2, 3, 4, 5
              ]
            }
          }, {
            type: 'input',
            label: '专业',
            key: 'major',
            defaultVal: '我是默认值',
            show: [
              /*复数条件决定是否展示，需全部满足*/
              {
                key: 'education',
                val: [
                  2, 3, 4, 5
                ]
              }, {
                key: 'school',
                val: ['.']
              }
            ]
          }, {
            type: 'input',
            label: '展示条件满足一个就行',
            key: 'major2',
            showOr: true, /*满足其中一项条件即可*/
            show: [
              /*展示条件，复数条件*/
              {
                key: 'recommend',
                val: [true]
              }, {
                key: 'education',
                val: [
                  2, 3, 4, 5
                ]
              }
            ]
          }, {
            type: 'input',
            label: '正则条件',
            key: 'major3',
            show: {
              /*条件为正则表达式*/
              key: 'education', /*除了2以外所有的*/
              reg: /^(?!2$).*$/
            }
          }, {
            type: 'input',
            label: '回调函数',
            key: 'major4',
            defaultVal: 'abc', /*条件为回调函数*/
            show: valGroup => valGroup.education > 3
          }, {
            type: 'select',
            label: '联系人',
            key: 'friend',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel'
          }, {
            type: 'select',
            label: '联系人B(多选)',
            key: 'friendB',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel',
            multiple: true
          }, {
            type: 'select',
            label: '联系人C(带选项筛选)',
            key: 'friendC',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel',
            optionFilter(d) {
              return d.filter(e => e.birth !== '1991')
            }
          }, {
            type: 'select',
            label: '联系人D（待选项禁用）',
            key: 'friendD',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel',
            disableOptionByOthers: 'friend'/*待选项禁用，‘联系人’已选的，联系人D将不能选*/
          }, {
            type: 'select',
            label: '联系人G（多字段禁用）',
            key: 'friendG',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel',
            disableOptionByOthers: ['friend', 'friendD']/*待选项禁用，‘联系人’和‘联系人D’已选的，联系人G将不能选*/
          }, {
            type: 'select',
            label: '联系人E(借用待选项)',
            key: 'friendE',
            borrowOption: 'friend' /*借用另外一个组件的待选项*/
          }, {
            type: 'select',
            label: '联系人F(收集多个字段)', /*收集待选项的多个字段，一个是默认的val,另一个是label，及其他*/
            key: 'friendF',
            collectLabel: [
              {
                valKey: 'label', /*字段在接口返回结果中名字，'label'为一个特殊值，表示取待选项的label就行*/
                key: 'friendFName' /*该字段需要提交的名字*/
              }, {
                valKey: 'birth', /*字段在接口返回结果中名字*/
                key: 'friendFBirth' /*该字段需要提交的名字*/
              }
            ],
            asyncOption: true,
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel'
          }, {
            type: 'select',
            label: '多选M(收集多个字段)',
            key: 'friendM',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel',
            multiple: true,
            collectLabel: [
              {
                valKey: 'label', /*字段在接口返回结果中名字，'label'为一个特殊值，表示取待选项的label就行*/
                key: 'friendMName' /*该字段需要提交的名字*/
              }, {
                valKey: 'birth', /*字段在接口返回结果中名字*/
                key: 'friendMBirth' /*该字段需要提交的名字*/
              }
            ]
          }, {
            type: 'date',
            dateType: 'daterange',
            addTime: true,
            label: '学历攻读时间',
            key: 'timeEnter',
            key2: 'timeOut',
            dateOptions: {
              disabledDate(date) {
                return date && date.valueOf() < Date.now() - 86400000
              }
            }
          }, {
            type: 'time',
            dateType: 'timerange',
            label: '理想上班时间',
            key: 'onDuty',
            key2: 'offDuty'
          }, {
            type: 'date',
            dateType: 'year',
            label: '年份A',
            key: 'yearA',
            defaultVal: '2022'
          }, {
            type: 'monthRange',
            label: '月份区间',
            key: 'monthRangeA',
            key2: 'monthRangeB',
            defaultVal: '2022-03',
            defaultVal2: '2023-04'
          }, {
            type: 'txt',
            label: '原语代码',
            valKey: 'protocolAtomicActionCode',
            likeInput: true
          }, {
            type: 'select',
            label: '待选项名字拼接示例',
            key: 'friendG',
            asyncOption: true,
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: [
              'name', 'tel'
            ], /*多字段待选项名*/
            optionVal: 'tel'
          }, {
            type: 'select',
            label: '远程加本地选项',
            key: 'friendH',
            asyncOption: true, /*远程待选项*/
            localOption: [
              /*本地待选项，只有远程下拉框才会有，否则直接写在options就行*/
              {
                val: '44444444',
                label: '这是本地选项A'
              }
            ],
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel'
          }, {
            type: 'checkbox',
            label: '需要住宿',
            key: 'room'
          }, {
            type: 'checkboxGroup',
            label: '证书',
            key: 'credential',
            options: [
              {
                val: 'CET4',
                disabled: true
              }, {
                val: 'CET6'
              }, {
                val: '驾照',
                icon: 'md-car'
              }
            ]
          }, {
            type: 'checkboxGroup',
            label: '联系人K(远程选项)',
            key: 'friendK',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel'
          }, {
            type: 'checkboxGroup',
            label: '联系人L(收集其他字段)',
            key: 'friendL',
            asyncOption: true, /*远程待选项*/
            optionUrl: location.pathname + "testData/formR/people.json",
            optionLabel: 'name',
            optionVal: 'tel',
            collectLabel: {
              valKey: 'label',
              key: 'friendLName'
            }
          }, {
            type: 'radio',
            label: '同步资料到云服务器',
            key: 'upload'
          }, {
            type: 'textarea',
            label: '备注',
            key: 'ps'
          }, {
            type: 'select', /*级联（待选项级联）下拉框演示*/
            label: '部门(条件1)',
            key: 'dep',
            asyncOption: true,
            optionUrl: location.pathname + "testData/formR/department.json",
            optionLabel: 'name',
            optionVal: 'code'
          }, {
            type: 'select', /*级联（待选项级联）下拉框演示*/
            label: '性别（条件2）',
            key: 'sex',
            options: [
              {
                label: '男',
                val: 1
              }, {
                label: '女',
                val: 0
              }
            ]
          }, {
            type: 'select', /*级联（待选项级联）下拉框演示*/
            label: '话事人（待选项改变）',
            key: 'president',
            asyncOption: true,
            changeOption: [
              {
                valKey: 'dep',
                key: 'dep'
              }, {
                valKey: 'sex',
                key: 'sex'
              }, {
                /*不是必须的条件*/
                valKey: 'conditionM',
                key: 'conditionM',
                notRequired: true
              }
            ],
            optionUrl: "/node-serve/people",
            optionLabel: 'name',
            optionVal: 'tel'
          }, {
            type: 'select', /*待选项地址会改变(直接改变formData对应项<即本下拉框>的optionUrl)的下拉框演示*/
            label: '选项地址改变N',
            key: 'friendN',
            asyncOption: true,
            changeOption: true, /*地址直接改变（通过监听下面的optionUrl）*/
            optionUrl: null, /*此处如没有初始地址，需把optionUrl设置为null(必须在这声明这个字段，否则监听不到)，需要改变时直接改变此处的值（见下方mounted示例，不要使用updateFormDataT方法，它在该场景下不适用）*/
            optionLabel: 'name',
            optionVal: 'tel',
            placeholder: "页面加载10秒后下拉框会有可选项，没看到变化？刷新页面再来一次~"
          }, {
            type: 'inputMap',
            label: '位置',
            key: 'lng',
            key2: 'lat',
            defaultVal: 100.225668,
            defaultVal2: 25.589449
          }, {
            type: 'editorPro',
            label: '文章',
            key: 'articleA',
            defaultVal: '<p>你好！</p>'
          }
        ],
        rules5: {
          logo: {
            required: true
          },
          name: {
            required: true
          },
          sex: {
            required: true
          },
          age: [
            {
              required: true
            }, {
              type: 'number',
              message: '必须为数字'
            }, {
              type: 'number',
              min: 1,
              message: '必须为正数'
            }
          ],
          education: {
            required: true
          },
          school: {
            required: true
          },
          major: {
            required: true
          },
          monthRangeA: {
            required: true
          },
          protocolAtomicActionCode: {
            required: true
          }
        },
        columns: [
          {
            title: "月阶梯",
            key: "stair",
            minWidth: 80,
            align: "center",
            tooltip: true
          }, {
            title: "用气量（m³）",
            key: "gas",
            minWidth: 110,
            align: "center",
            tooltip: true
          }, {
            title: "价格（元/m³）",
            key: "price",
            minWidth: 110,
            align: "center",
            tooltip: true
          }
        ],
        tableData: [
          {
            stair: '阶梯1',
            gas: 3,
            price: 5
          }, {
            stair: '阶梯2',
            gas: 6,
            price: 4.5
          }, {
            stair: '阶梯3',
            gas: 9,
            price: 4
          }, {
            stair: '阶梯4',
            gas: 12,
            price: 3.5
          }
        ],
        valGroup5: []
      }
    },
    created() {
      this.setTimeout(() => {
        this.$refs.formRef.updateFormDataT({
          index: 1,
          val: '我现在变了，没看到？刷新页面再给你变一次~'
        })
      }, 5000)
    },
    mounted() {
      this.setTimeout(() => {
        this.findCollection(this.data5, e => e.key === 'friendN').optionUrl =
          location.pathname + "testData/formR/people.json"
      }, 10000)
    },
    methods: {
      submit(val) {
        this.$swal('表单提交内容', JSON.stringify(val))
      },
      submitB(val) {
        this.valGroup5 = val
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .eBoxA {
    width: 600px;
    display: inline-block;
    margin: 0 10px 10px 0;

    .inPage {
      padding: 10px;
    }

    &.baseUA {
      height: 240px;
    }

    &.inlineFA {
      width: 1210px;
    }

    &.detailUA {
      height: 3800px;
      width: 800px;
    }
  }
</style>
