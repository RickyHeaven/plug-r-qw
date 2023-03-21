/**
 * @description 示例项目的NodeJS服务器（接口）
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.03.20
 */

const {_save} = require('./database')

const selectScrollMoreData = require('./data/selectScrollMore')
const btTablePageData = require('./data/btTablePage')

module.exports = function () {
  _save('select-scroll-more', selectScrollMoreData.data)
  _save('bt-table-page', btTablePageData.data)
}
