let methodsR = {}
let getCP = require.context('./', false, /.md$/)
getCP.keys().forEach((e) => {
	methodsR[e?.replace?.(/^\.\/(\w*)\.md$/, '$1')?.toLowerCase?.()] = getCP(e)?.default
})

export default methodsR
