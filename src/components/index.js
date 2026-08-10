/**
 * @description 组件 md 文档 导出
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2020.10.30
 */

let comps = {}
let getCP = require.context('./', true, /\.md$/)
getCP.keys().forEach((e) => {
	const key = e?.replace?.(/^\.\/(\w*)\/.*\.md$|^\.\/(\w*)\.md$/, '$1$2')
	if (key) {
		comps[key] = getCP(e)?.default
	}
})

export default comps
