<template>
  <div class="c404K">
    <div class="t404">404</div>
    <div class="ct404">UH OH! {{t('r.pageNotFound')}}</div>
    <div class="p404">{{t('r.notFoundMsg')}}</div>

    <Button class="bt404" @click="back">{{t('r.backHome')}}</Button>
  </div>
</template>

<script>
  import Locale from '../../mixins/locale'

  export default {
    name: "page404",
    mixins: [Locale],
    methods: {
      back() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c404K {
    color: #0F0320;
    height: 400px;
    text-align: center;
    position: relative;
    top: 10%;

    .t404 {
      font-size: 150px;
      font-weight: bold;
    }

    .ct404 {
      font-size: 40px;
    }

    .p404 {
      margin-top: 10px;
      font-size: 18px;
    }

    .bt404 {
      margin-top: 40px;
      width: 100px;
    }
  }
</style>