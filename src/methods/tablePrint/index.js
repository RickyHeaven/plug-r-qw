/**
 * created 2024.03.13
 * @author Ricky <zhangqingcq@foxmail.com>
 * @description 表格打印，可以在预览页面调整每列宽度以及可以选择打印的列
 */

import _ from "lodash"

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
        path: '/tablePrint:isFrom',
        name: 'tablePrint',
        component: () => import('./printModal.vue')
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
 * @param {Object} config 打印设置，如customClass,用于定制打印页面样式，目前仅支持该设置
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
  window.sessionStorage.setItem('print_' + _router?.currentRoute?.fullPath, JSON.stringify({
    columns: columnsB,
    data,
    title,
    config
  }))
  const r = _router.resolve({
    name: 'tablePrint',
    params:{isFrom:_router?.currentRoute?.fullPath}
  })
  window.open(r.href, '_blank')
}

export default {
  init,
  print
}