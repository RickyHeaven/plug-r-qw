<template>
  <div class="tabSetF">
    <div class="tabSetBt" @click="labelClick">
      <Icon type="md-settings" size="17"/>
      <span>列表显示设置</span>
    </div>
    <div class="tabSetCard" v-show="show" :style="{top:top,right:right,width:width,backgroundColor:bg}">
      <div class="topCheck">
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll"
        >全选</Checkbox>
        <span style="cursor: pointer;float: right" @click="save">确定</span>
      </div>
      <CheckboxGroup v-model="checkAllGroup">
        <Checkbox
            v-for="(itemT,index) in groupX" class="setItem" :label="itemT&&itemT.label" :key="'tabSet_'+sKey+index"
            :disabled="itemT&&itemT.disabled"
        ></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script>
  /**
   * 列表显示设置插件
   * @desc 利用table的columns和localstorage对table进行列的显示设置
   * @author ricky email:zhangqingcq@foxmail.com
   * @date 2020.03.23
   * @param {array} value - 插件的值（v-model,对应table的columns）必填
   * @param {string} sKey - 插件数据在localstorage的唯一标识，命名规则：插件所在单文件名称_取名时间，如areaNew_202003231639 必填
   * @param {string} [top] - 设置面板定位-上（相对于按钮）
   * @param {string} [right] - 设置面板定位-右（相对于按钮）
   * @param {string} [width] - 设置面板宽度
   * @param {string} [bg] - 设置面板背景色
   * @param {boolean} [defaultCheck] - 是否设置默认勾选（默认false），如果设为true,则在v-model绑定的columns项里设置showSettingCheck为true
   * @example 调用示例 <table-search v-model="areaName" :open="openSearch" placeholder="片区名称" @on-search="search" @on-toggle="openSearch=!openSearch"/>
   */
  import _ from 'lodash'

  export default {
    name: "tableSetting",
    model: {
      prop: 'value',
      event: 'subVal'
    },
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      },
      sKey: {
        type: String,
        required: true
      },
      top: {
        type: String,
        default() {
          return '30px'
        }
      },
      right: {
        type: String,
        default() {
          return '0'
        }
      },
      width: {
        type: String,
        default() {
          return '150px'
        }
      },
      bg: {
        type: String,
        default() {
          return '#ccc'
        }
      },
      defaultCheck: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        indeterminate: true,
        checkAll: false,
        show: false,
        groupT: []
      }
    },
    computed: {
      groupX() {
        if (this.value.length > this.groupT.length) {
          this.groupT = _.cloneDeep(this.value)
        }
        return this.groupT.map(e => {
          let temp = {'label': e && e.title || '未知列'}
          if (e && e.disableShowSetting) {
            temp.disabled = true
          }
          return temp
        })
      },
      disabledGroup() {
        return this.groupX.filter(e => e.disabled)
      },
      checkAllGroup: {
        get() {
          return this.value.map(e => e && e.title || '未知列')
        },
        set(val) {
          let subV = this.groupT.filter(e => {
            for (let item of val) {
              if (item === e.title) {
                return true
              }
            }
            return false
          })
          this.$emit('subVal', subV)
        }
      }
    },
    mounted() {
      let localStr = localStorage.getItem(this.sKey)
      if (localStr) {
        this.checkAllGroup = JSON.parse(decodeURI(localStr))
      } else {
        if (this.defaultCheck) {
          this.checkAllGroup = this.value.filter(e => e.showSettingCheck)
            .map(e => e && e.title || '未知列')
        }
      }
    },
    watch: {
      checkAllGroup: {
        handler(after) {
          this.checkAllGroupChange(after)
        },
        immediate: true
      }
    },
    methods: {
      labelClick() {
        if (!this.show) {
          this.show = true
        }
      },
      save() {
        localStorage.setItem(this.sKey, encodeURI(JSON.stringify(this.checkAllGroup)))
        this.show = false
        // this.$Message.success('显示设置已保存！')
      },
      handleCheckAll() {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = this.groupX.map(e => e.label);
        } else {
          this.checkAllGroup = this.disabledGroup.map(e => e.label);
        }
      },
      checkAllGroupChange(data) {
        if (data.length === this.groupX.length) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > this.disabledGroup.length) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      }
    }
  }
</script>
