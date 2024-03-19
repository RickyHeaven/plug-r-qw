/**
 * created 2024.03.13
 * @author Ricky <zhangqingcq@foxmail.com>
 * @description 表格打印，可以在预览页面调整每列宽度以及可以选择打印的列，该插件依赖于vue-router，需要在安装库时传入router，详见该库使用说明文档
 * 注意：1.该插件依赖于vue-router，需要在安装库时传入router，详见该库使用说明文档；
 * 2.打印时会新开一个浏览器窗口，路由为'/tablePrint'，该路由页面需要铺满浏览器窗口，即该路由所在的router-view外部不会有任何dom元素渲染在页面上（隐藏的不影响打印）。
 */

import _ from "lodash"
import printModal from "./printModal.vue"

let _router = null

function init(router) {
  if (router?.addRoute) {
    const t = router.getRoutes()
    let add = true
    for (let e of t) {
      if (e.name === 'tablePrint') {
        add = false
        break
      }
    }
    if (add) {
      router.addRoute({
        path: '/tablePrint/:isFrom',
        name: 'tablePrint',
        component: printModal
      })
    }
    
    _router = router
  }
}

/**
 * 供外部使用的打印API
 * @param {Array} columns Table的列设置，同view-design
 * @param {Array} data Table的数据
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：1.customClass,用于定制打印页面样式；2.autoPrint,是否直接打印
 */
function print(columns, data, title, config) {
  if (!_router) {
    return
  }
  let _columns = _.cloneDeep(columns.filter(e => {
    return e.key
  }))
  let columnsB
  if (_columns[0].type === 'selection') {
    _columns.shift()
  }
  if (!_columns.length) {
    columnsB = []
  }else {
    columnsB = _columns.map(item => {
      item.width = item.minWidth || 100
      item.sortable = false
      delete item.minWidth
      delete item.__id
      item.resizable = true
      return item
    })
  }
  let _p = _router?.currentRoute?.fullPath
  if(_p){
    _p = _p.replace('/', '_')
  }
  window.sessionStorage.setItem('print_' + _p, JSON.stringify({
    columns: columnsB,
    data,
    title,
    config
  }))
  const r = _router.resolve({
    name: 'tablePrint',
    params:{isFrom:_p}
  })
  window.open(r.href, '_blank')
}

export default {
  init,
  print
}