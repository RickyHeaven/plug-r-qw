## date

基于 view-design 的 DatePicker
封装的日期选择器，支持DatePicker所有属性和事件，主要区别在于options属性的disabledDate回调支持更多参数，可以覆盖更多业务场景，实现更丰富的功能，如对区间选择器选择的日期区间长度进行限制，如区间不能超过30天

### 属性

ps:除支持在此列出的属性，DatePicker其他属性也都支持

- type: 字符串，显示类型，可选值为 date、daterange、datetime、datetimerange、year、month

- value: 日期，可以是 JavaScript 的 Date，例如 new Date() ，也可以是标准的日期格式（区间时是数组），推荐value 使用 v-model

- options: 对象，选择器额外配置，比如不可选日期与快捷选项，如：
  ```
  /*可选日期不能小于当天，且区间不超过30天*/
  {
    /*date:当前日期格子时间，from:区间时第一个日期（先选的那个，不一定是小的那个），selecting:区间时是否在选择中（两个日期只选择了一个时）*/
    disabledDate(date, from, selecting){
      if (from && selecting) {
        return (
          date.valueOf() < Date.now() - 1000 * 60 * 60 * 24 ||
          date.valueOf() > from.valueOf() + 1000 * 60 * 60 * 24 * 30 ||
          date.valueOf() < from.valueOf() - 1000 * 60 * 60 * 24 * 30
        )
      }
      return date.valueOf() < Date.now() - 1000 * 60 * 60 * 24
    }
  }
  ```

- placement: 字符串，日期选择器出现的位置，可选值为top top-start top-end bottom bottom-start bottom-end left left-start
  left-end right right-start right-end，默认：`bottom-end`

- placeholder： 字符串，选择框提示

- clearable： 布尔对象，是否可清除，默认：`true`

- disabled： 布尔对象，是禁用选择器，默认：`false`

### 事件

ps:除支持在此列出的事件，DatePicker其他事件也都支持监听

- on-change: 日期(v-model的值)发生变化时触发

