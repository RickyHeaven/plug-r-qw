const PORT = 7890

let http = require('http')
let url = require('url')
let fs = require('fs')
let fTypes = require('./fileTypes').types
let path = require('path')
let querystring = require('querystring')
let {_save, _delete, _get, _edit} = require('./database')

let formRData = require('./data/formR')
let selectScrollMoreData = require('./data/selectScrollMore')
let btTablePageData = require('./data/btTablePage')

_save('select-scroll-more', selectScrollMoreData.data)
_save('bt-table-page', btTablePageData.data)

let server = new http.Server

server.on('request', function (req, res) {
  let method = req.method
  let urlParse = url.parse(req.url)
  let pathname = urlParse.pathname
  let isExt = path.extname(pathname)
  isExt = isExt ? isExt.slice(1) : 'unknown'
  if (pathname.indexOf('favicon') !== -1) {
    pathname = path.join('public', pathname)
  }
  let queryObj = querystring.decode(urlParse.query)
  console.log('pathname:', pathname, ' + + + + + method:', method, ' + + + + + query:', JSON.stringify(queryObj))
  if (isExt !== 'unknown') {
    if (fs.existsSync(pathname)) {
      fs.readFile(pathname, 'binary', function (err, file) {
        if (err) {
          res.writeHead(500, {
            'Content-Type': 'text/plain'
          })
          res.end(err)
        }
        else {
          let typeT = fTypes[isExt] || 'text/plain'
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
            /*这里用了隐式转换，不能全等*/
            if (e[key] != queryObj[key]) {
              tt = false
              break
            }
          }
          return tt
        })
        _send(temp)
        break
      case '/select-scroll-more':
        pageSelect('select-scroll-more')
        break
      case '/bt-table-page':
        if (method === 'GET') {
          pageSelect('bt-table-page')
        }
        else if (method === 'POST') {
          postHandle(r => {
            let a = _save('bt-table-page', [r])
            let b = {}
            if (a) {
              b.code = 0
              b.message = 'success'
            }
            else {
              b.code = -1
              b.message = 'error'
            }
            _send(b)
          })
        }
        else if (method === 'DELETE') {
          deleteHandle('bt-table-page', e => e.id === Number(queryObj.id))
        }
        else {
        
        }
        break
      case '/':
      default:
        res.end('hello')
    }
    
    function _send(d) {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.write(JSON.stringify(d))
      res.end()
    }
    
    /*get请求查询数据*/
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
      _send(temp)
    }
    
    /*post请求*/
    function postHandle(callback) {
      let r = ''
      req.on('data', d => {
        r += d
      })
      req.on('end', () => {
        r = decodeURI(r)
        console.log('post params:', r)
        if (callback) {
          callback(JSON.parse(r))
        }
      })
    }
    
    /*delete请求*/
    function deleteHandle(action, condition) {
      let r = _delete(action, condition)
      let temp = {}
      if (r) {
        temp.code = 0
        temp.message = 'success'
      }
      else {
        temp.code = -1
        temp.message = 'error'
      }
      _send(temp)
    }
  }
})

server.listen(PORT)
console.log('Server running at port: ' + PORT + '.')