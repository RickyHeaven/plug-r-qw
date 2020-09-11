let comps = {}
let getCP = require.context('./',true,/.md$/)
getCP.keys().forEach(e=>{
  comps[e.replace(/^\.\/(.*)\/.*\.\w*$/,'$1')]=getCP(e).default
})

export default comps