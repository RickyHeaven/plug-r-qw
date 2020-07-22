<!--created 2020.01.07-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <Tree class="checkboxTreeGA" :data="dataT" :render="renderContent" @on-check-change="updateVal" show-checkbox></Tree>
</template>
<script>
  import {myTypeof} from "../../methods/functionGroup"

  export default {
    name: "checkboxTree",
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
      data: {
        type: Array,
        default() {
          return []
        }
      },
      expandAll: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    watch: {
      data: {
        handler(after) {
          let temp = []
          this.initData(after, temp)
          this.dataT = temp
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      initData(data, root = []) {
        let value = []
        if (myTypeof(this.value) === 'Array') {
          value = this.value
        }
        for (let item of data) {
          let temp = {
            name: item.name,
            id: item.id,
            expand: Boolean(this.expandAll || item.expand),
            checked: value.indexOf(item.id) !== -1
          }
          root.push(temp)
          if (item.children && item.children.length > 0) {
            temp.children = []
            this.initDataB(item.children, temp.children)
          }
        }
      },
      initDataB(data, root = []) {
        let value = []
        if (myTypeof(this.value) === 'Array') {
          value = this.value
        }
        for (let item of data) {
          let temp = {
            name: item.name,
            id: item.id,
            expand: Boolean(this.expandAll || item.expand),
            checked: value.indexOf(item.id) !== -1
          }
          root.push(temp)
          if (item.children && item.children.length > 0) {
            temp.children = []
            this.initData(item.children, temp.children)
          }
        }
      },
      renderContent(h, {root, node, data}) {
        return h('div', {
          style: {
            display: 'inline-block',
            width: '100%'
          },
          class: data.children && data.children.length > 0 && (data.children[0].children === undefined) ?
            'inlineChild' : ''
        }, [
          h('span', {
            style: {
              fontWeight: data.children ? 'bold' : 'normal'
            }
          }, data.name)
        ]);
      },
      updateVal(data) {
        let temp = []
        for (let item of data) {
          if (!item.children) {
            temp.push(item.id)
          }
        }
        this.$emit('subVal', temp)
      }
    }
  }
</script>