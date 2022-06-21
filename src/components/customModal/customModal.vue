<template>
  <Modal
      class="formModal"
      :title="title"
      v-bind="$attrs"
      v-on="$listeners"
      v-model="isOpen"
      :width="width"
      :mask-closable="false"
      @on-visible-change="showHide"
  >
    <slot></slot>
    <template slot="footer">
      <slot name="footer">
        <Button class="modal-save-btn" :loading="btnLoading&&loading" @click="handleSub">
          <span v-if="btnLoading&&loading">Loading...</span>
          <span v-else>{{$t('r.confirm')}}</span>
        </Button>
        <Button class="modal-cancel-btn" @click="close" v-if="!hideCancelBt">{{$t('r.cancel')}}</Button>
      </slot>
    </template>
  </Modal>
</template>

<script>
  export default {
    name: "customModal",
    props: {
      title: {
        type: String,
        default: '标题'
      },
      hideCancelBt: {
        type: Boolean,
        default: false
      },
      btnLoading: {
        type: Boolean,
        default: false
      },
      width: {
        type: [
          Number,
          String
        ],
        default: 520
      }
    },
    data() {
      return {
        isOpen: false,
        loading: false
      }
    },
    methods: {
      open() {/*打开弹框，公开*/
        this.isOpen = true
      },
      close() {/*关闭弹框，一般用于在点击确定按钮进行网络请求返回结果后关闭弹框，公开*/
        this.isOpen = false
      },
      changeLoading(d) {/*改变确定按钮loading状态，公开*/
        this.loading = Boolean(d)
      },
      showHide(d) {/*私有*/
        if (!d) {
          this.$emit('on-close')
        }
      },
      handleSub() {/*私有*/
        if (this.hideCancelBt) {
          this.close()
        }
        else {
          this.loading = true
          this.$emit('on-submit')
        }
      }
    }
  }
</script>
