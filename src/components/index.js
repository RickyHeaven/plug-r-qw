let comps = {}
let getCP = require.context('./', true, /.md$/)
getCP.keys().forEach((e) => {
	comps[e?.replace?.(/^\.\/(\w*)\/.*\.md$|^\.\/(\w*)\.md$/, '$1$2')] = getCP(e)?.default
})

export default comps
