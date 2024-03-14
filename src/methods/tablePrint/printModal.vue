<!--created 2024.03.12
author ricky email:zhangqingcq@foxmail.com-->

<script>
  import Locale from '../../mixins/locale'
  import tableSetting from "../../components/tableSetting/tableSetting.vue"
  import iconTxtBtn from "../../components/iconTxtBtn/iconTxtBtn.vue"
  import tableIconBtn from "../../components/tableIconBtn/tableIconBtn.vue"

  export default {
    name: "printModal",
    mixins: [Locale],
    components: {
      iconTxtBtn,
      tableIconBtn,
      tableSetting
    },
    data() {
      return {
        title: '',
        disabled: false,
        printing: false,
        help: false,
        isFrom: '',
        sKey: 'tablePrint_' + Date.now().toString(),
        customClass: '',
        columns: [],
        data: []
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$data.isFrom = vm?.$route?.params?.isFrom
        if (!vm.$data.isFrom) {
          return
        }
        const k = 'print_' + vm.$data.isFrom
        let d = window.sessionStorage.getItem(k)
        if (!d) {
          vm.$data.disabled = true
          return
        }
        const {
          columns,
          data,
          title,
          config
        } = JSON.parse(d)
        vm.$data.columns = columns
        vm.$data.data = data
        vm.$data.title = title
        vm.$data.customClass = config?.customClass
        document.title = (title || vm.$t('r.print')) + '_' + new Date().toLocaleString()
      })
    },
    methods: {
      close() {
        if (this.printing) {
          this.printing = false
        }
        if (this.isFrom) {
          window.sessionStorage.removeItem('print_' + this.isFrom)
        }
        window.sessionStorage.removeItem(this.sKey)
        window.close()
      },
      wallClick() {
        if (this.help) {
          this.help = false
        }
      },
      print() {
        this.printing = true
        this.help = false
        let ta = window.setTimeout(() => {
          window.clearTimeout(ta)
          window.print()
          let tc = setTimeout(() => {
            window.clearTimeout(tc)
            this.printing = false
          }, 10)
        }, 100)
      }
    }
  }
</script>

<template>
  <div class="tablePrintModal" :class="[{printing: printing},customClass]" @click="wallClick">
    <div class="msgL" v-show="disabled">{{ t('r.printGuide.9') }}</div>
    <div class="a4Line aL" v-show="!disabled">{{ t('r.printGuide.7') }}</div>
    <div class="a4Line bL" v-show="!disabled">{{ t('r.printGuide.8') }}</div>
    <div class="topsL" v-show="!printing&&!disabled">
      <div class="topsLTitle">{{ title || t('r.print') }}</div>
      <div class="topsLBtn">
        <icon-txt-btn icon="md-help-circle" :name="t('r.help')" @click.stop="help=!help" />
        <icon-txt-btn icon="md-print" :name="t('r.preview')" @click="print" />
        <table-setting v-model="columns" :s-key="sKey" storage="sessionStorage" />
        <tableIconBtn icon="md-close" @click="close" :title="t('r.close')" />
      </div>
      <div class="topsLHelp" v-show="help">
        <p>{{ t('r.printGuide.1') }}</p>
        <p>{{ t('r.printGuide.2') }}</p>
        <p>{{ t('r.printGuide.3') }}</p>
        <p>{{ t('r.printGuide.4') }}</p>
      </div>
    </div>
    <Table :columns="columns" :data="data" border v-show="!disabled" />
  </div>
</template>