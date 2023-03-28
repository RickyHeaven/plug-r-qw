/**
 * @description 虚拟微型文件数据库
 * @author ricky zhangqingcq@foxmail.com
 * @created 2021.03.21
 */

let _data = {}
let _id = 0

module.exports = {
  _save(file) {
    if (file.buffer) {
      ++_id
      _data[_id] = file
      return _id
    }
    return false
  },
  
  _get(id) {
    if (_data.hasOwnProperty(id)) {
      return _data[id]
    }
    return false
  }
}
