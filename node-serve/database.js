/**
 * @description 虚拟微型数据库（JSON文件持久化）
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2021.07.02
 */

const fs = require('fs')
const path = require('path')

const DATA_FILE = path.join(__dirname, 'data', 'database.json')

/**
 * 从文件加载数据
 */
function loadData() {
	try {
		if (fs.existsSync(DATA_FILE)) {
			const content = fs.readFileSync(DATA_FILE, 'utf-8')
			const parsed = JSON.parse(content)
			return {
				data: parsed.data || {},
				idCount: parsed.idCount || {}
			}
		}
	} catch (e) {
		console.error('加载数据库文件失败:', e)
	}
	return { data: {}, idCount: {} }
}

/**
 * 保存数据到文件
 */
function saveData() {
	try {
		const dir = path.dirname(DATA_FILE)
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true })
		}
		const storage = {
			data: _data,
			idCount: idCount
		}
		fs.writeFileSync(DATA_FILE, JSON.stringify(storage, null, 2), 'utf-8')
	} catch (e) {
		console.error('保存数据库文件失败:', e)
	}
}

let _data = loadData().data
let idCount = loadData().idCount

// 初始化 idCount（兼容旧数据格式：没有 idCount 的情况）
for (let table in _data) {
	if (!idCount[table] && _data[table].length > 0) {
		idCount[table] = Math.max(..._data[table].map((e) => e.id))
	}
}

/**
 * 获取下一个 ID
 * @param {String} table 表名
 * @returns {Number} 下一个 ID
 */
function getNextId(table) {
	if (!idCount[table]) {
		idCount[table] = 0
	}
	return ++idCount[table]
}

/**
 * 增
 * @param {String} table 目标table名字
 * @param {Array} data 要增加的数据
 * @private
 */
exports._save = function (table, data) {
	if (!_data[table]) {
		_data[table] = []
		idCount[table] = 0
	}
	let b = data.map((e, i) => {
		return Object.assign(e, { id: ++idCount[table] })
	})
	b.reverse()
	_data[table].unshift(...b)
	saveData()
	return true
}

/**
 * 删
 * @param {String} table 目标table名字
 * @param {Function} condition 条件
 * @returns {boolean} 是否成功
 * @private
 */
exports._delete = function (table, condition) {
	if (!_data[table]) {
		return false
	}
	_data[table] = _data[table].filter((e) => !condition(e))
	saveData()
	return true
}
/**
 * 查
 * @param {String} table 目标table名字
 * @param {Number} current 当前页
 * @param {Number} size 每页条数
 * @param {Function} condition 条件
 * @returns {*}
 * @private
 */
exports._get = function (table, current, size, condition) {
	if (!_data[table]) {
		return {
			data: [],
			total: 0
		}
	}
	let b = _data[table]
	if (condition) {
		b = b.filter(condition)
	}
	return {
		data: size === -1 ? b : b.slice((current - 1) * size, current * size),
		total: b.length
	}
}
/**
 * 改
 * @param {String} table 目标table名字
 * @param {Object} data 要改的单条数据
 * @returns {boolean} 是否成功
 * @private
 */
exports._edit = function (table, data) {
	if (!_data[table] || !data.hasOwnProperty('id')) {
		return false
	}
	for (let i = 0, len = _data[table].length; i < len; i++) {
		if (_data[table][i].id === data.id) {
			_data[table][i] = data
			saveData()
			return true
		}
	}
	return false
}