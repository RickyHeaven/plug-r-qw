let _data = {}

/**
 * 增
 * @param table [String] 目标table名字
 * @param data [Array] 要增加的数据
 * @private
 */
exports._save = function (table, data) {
  if (!_data[table]) {
    _data[table] = []
  }
  let l = _data[table].length
  let b = data.map((e, i) => {
    return {
      id: l + i, ...e
    }
  })
  b.reverse()
  _data[table].unshift(...b)
  return true
}

/**
 * 删
 * @param table [String] 目标table名字
 * @param condition [Function] 条件
 * @returns {boolean} 是否成功
 * @private
 */
exports._delete = function (table, condition) {
  if (!_data[table]) {
    return false
  }
  for (let e of _data[table]) {
    if (condition(e)) {
      e._r_delete = true
    }
  }
  return true
}
/**
 * 查
 * @param table [String] 目标table名字
 * @param current [Number] 当前页
 * @param size [Number] 每页条数
 * @param condition [Function] 条件
 * @returns {*}
 * @private
 */
exports._get = function (table, current, size, condition) {
  if (!_data[table]) {
    return []
  }
  let b = _data[table].filter(e => !e._r_delete)
  if (condition) {
    b = b.filter(condition)
  }
  return {
    data: b.slice((current - 1) * size, current * size),
    total: b.length
  }
}
/**
 * 改
 * @param table [String] 目标table名字
 * @param data [Object] 要改的单条数据
 * @returns {boolean} 是否成功
 * @private
 */
exports._edit = function (table, data) {
  if (!_data[table]) {
    return false
  }
  for (let e of _data[table]) {
    if (e.id === data.id) {
      e = data
      return true
    }
  }
}