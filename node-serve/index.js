const PORT = 7890

let http = require('http')
let url = require('url')
let fs = require('fs')
let fTypes = require('./fileTypes').types
let path = require('path')
let {_save, _delete, _get, _edit} = require('./database')
let formRData = require('./data/formR')
let selectScrollMoreData = require('./data/selectScrollMore')
let btTablePageData = require('./data/btTablePage')

_save('select-scroll-more', selectScrollMoreData.data)
_save('bt-table-page', btTablePageData.data)

let server = new http.Server

server.on('request', function (req, res) {
  let parseT = url.parse(req.url)
  let pathname = parseT.pathname
  let ext = path.extname(pathname)
  ext = ext ? ext.slice(1) : 'unknown'
  if (pathname.indexOf('favicon') !== -1) {
    pathname = path.join('public', pathname)
  }
  let query = parseT.query
  let queryArr = query ? query.split('&') : []
  let queryObj = {}
  for (let item of queryArr) {
    let [key, val] = item.split('=')
    queryObj[key] = val
  }
  console.log('pathname: ' + pathname + ' + + + + + query: ', queryObj)
  if (ext !== 'unknown') {
    if (fs.existsSync(pathname)) {
      fs.readFile(pathname, 'binary', function (err, file) {
        if (err) {
          res.writeHead(500, {
            'Content-Type': 'text/plain'
          })
          res.end(err)
        }
        else {
          let typeT = fTypes[ext] || 'text/plain'
          res.writeHead(200, {
            'Content-Type': typeT
          })
          res.write(file, 'binary')
          res.end()
        }
      })
    }
    else {
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      })
      res.write('This request URL ' + pathname + ' was not found on this server.')
      res.end()
    }
  }
  else {
    let temp
    switch (pathname) {
      case '/people':
        temp = formRData.people.data.filter(e => {
          let tt = true
          for (let key in queryObj) {
            if (queryObj.hasOwnProperty(key) && e[key] !== queryObj[key]) {
              tt = false
              break
            }
          }
          return tt
        })
        res.writeHead(200, {
          'content-type': 'application/json'
        })
        res.write(JSON.stringify(temp))
        res.end()
        break
      case '/select-scroll-more':
        pageSelect('select-scroll-more')
        break
      case '/bt-table-page':
        pageSelect('bt-table-page')
        break
      case '/':
      default:
        res.end('hello')
    }
    
    function pageSelect(action) {
      let current = queryObj.current && Number(queryObj.current) || 1
      let size = queryObj.size && Number(queryObj.size) || 10
      temp = {}
      let r
      if (queryObj.name) {
        const name = decodeURI(queryObj.name)
        r = _get(action, current, size, e => e.name.indexOf(name) > -1)
      }
      else {
        r = _get(action, current, size)
      }
      temp.data = r.data
      temp.total = r.total
      temp.size = size
      temp.pages = temp.total && Math.ceil(temp.total / size) || 0
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.write(JSON.stringify(temp))
      res.end()
    }
  }
})

server.listen(PORT)
console.log('Server running at port: ' + PORT + '.')