<!--created 2019.08.06-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div class="flexColumnBox wellCardR">
    <div class="panelHeader notGrow">
      <div class="fl" style="font-weight: bold">{{title}}</div>
      <slot name="bts"/>
    </div>
    <div class="growFlexItem relativeBox">
      <div class="fullFlowContent">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "wellCard",
    props:{
      title:{
        type:String,
        default(){
          return '标题'
        }
      }
    }
  }
</script>