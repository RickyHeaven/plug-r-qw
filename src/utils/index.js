/**
 * @description 公共方法 md 文档 导出
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2020.10.30
 */

let methodsR = {}
let getCP = require.context('./', false, /\.md$/)
getCP.keys().forEach((e) => {
	const key = e?.replace?.(/^\.\/(\w*)\.md$/, '$1')?.toLowerCase?.()
	if (key) {
		methodsR[key] = getCP(e)?.default
	}
})

export default methodsR
