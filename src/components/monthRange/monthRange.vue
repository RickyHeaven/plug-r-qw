<template>
  <div class="monthRangeBoxR">
    <DatePicker :open="openA" :value="valueA" transfer type="month" @on-change="changeA" @on-clickoutside="close">
      <div @click="focus">
        <Input class="aRoot" :class="{showR:valueA||valueB}" v-model="valueT" readonly>
          <Icon type="ios-close-circle" slot="suffix" />
        </Input>
      </div>
    </DatePicker>
    <DatePicker
        :open="openB" :value="valueB" transfer type="month" @on-change="changeB" @on-clickoutside="close"
    >
      <div class="bRoot"></div>
    </DatePicker>
  </div>
</template>

<script>

  export default {
    name: "monthRange",
    model: {
      prop: 'value',
      event: 'submit'
    },
    props: {
      value: {
        type: Array,
        default() {
          return [null, null]
        }
      }
    },
    data() {
      return {
        openA: false,
        openB: false
      }
    },
    computed: {
      valueA: {
        get() {
          return this.value && this.value[0] || null
        },
        set(v) {
          this.$emit('submit', [v, this.valueB])
        }
      },
      valueB: {
        get() {
          return this.value && this.value[1] || null
        },
        set(v) {
          this.$emit('submit', [this.valueA, v])
        }
      },
      valueT(){
        return (this.valueA || '') + ((this.valueA || this.valueB) && ' - ' || '') + (this.valueB || '')
      }
    },
    mounted() {
      document.querySelector('.monthRangeBoxR .aRoot .ivu-input-suffix').addEventListener('click', e => {
        e.stopPropagation()
        this.clear()
      })
    },
    methods: {
      focus() {
        this.openA = true
      },
      changeA(d) {
        this.valueA = d
        this.openA = false
        this.openB = true
      },
      changeB(d) {
        this.valueB = d
        this.openB = false
      },
      clear() {
        this.$emit('submit', [null, null])
      },
      close() {
        this.openA = false
        this.openB = false
        if (this.valueA && this.valueB === null) {
          this.valueA = null
        }
      }
    }
  }
</script>
