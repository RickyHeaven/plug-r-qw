const PORT = 7890

let http = require('http')
let url = require('url')
let fs = require('fs')
let fTypes = require('./fileTypes').types
let path = require('path')
let formRData = require('./data/formR')
let selectScrollMoreData = require('./data/selectScrollMore')
let btTablePageData = require('./data/btTablePage')

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
            if (e[key] != queryObj[key]) {
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
        pageSelect(selectScrollMoreData)
        break
      case '/bt-table-page':
        pageSelect(btTablePageData)
        break
      case '/':
      default:
        res.end('hello')
    }
    
    function pageSelect(d) {
      let current = queryObj.current && Number(queryObj.current) || 1
      let size = queryObj.size && Number(queryObj.size) || 10
      temp = {}
      if (queryObj.name) {
        const name = decodeURI(queryObj.name)
        temp.data = JSON.parse(JSON.stringify(d.data.filter(e => e.name.indexOf(name) > -1)))
          .splice((current - 1) * size, size)
      }
      else {
        temp.data = JSON.parse(JSON.stringify(d.data)).splice((current - 1) * size, size)
        temp.total = d.data.length
      }
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