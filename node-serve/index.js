/**
 * @description 虚拟数据库
 * @author ricky zhangqingcq@foxmail.com
 * @created 2020.08.12
 */

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
      case '/transfer-box-added':
        if (method === 'GET') {
          pageSelect('transfer-box-added')
        }
        else if (method === 'POST') {
          paramsRequest(r => {
            transferApi(r, 'transfer-box-added', 'bt-table-page')
          })
        }
        break
      case '/transfer-box-not-added':
        if (method === 'GET') {
          pageSelect('bt-table-page')
        }
        else if (method === 'DELETE') {
          paramsRequest(r => {
            transferApi(r, 'bt-table-page', 'transfer-box-added')
          })
        }
        break
      case '/transfer-box-added-all':
        if (method === 'POST') {
          paramsRequest(r => {
            transferMove('bt-table-page', 'transfer-box-added', r)
          })
        }
        break
      case '/transfer-box-not-added-all':
        if (method === 'DELETE') {
          paramsRequest(r => {
            transferMove('transfer-box-added', 'bt-table-page', r)
          })
        }
        break
      case '/fetch-spin':
        let tm = setTimeout(() => {
          _send({message: '回来了'})
          clearTimeout(tm)
        }, 3000)
        break
      case '/fetch-403':
        _send({message: '登录超时'}, 403)
        break
      case '/fetch-403-b':
        _send({
          code: 403,
          message: '登录超时'
        })
        break
      case '/':
      default:
        let action = pathname.substr(1)
        if (action) {
          if (method === 'GET') {
            pageSelect(action)
          }
          else if (method === 'POST' || method === 'PUT') {
            paramsRequest(r => {
              let typeR = Object.prototype.toString.call(r).replace(/\[object |]/g, "")
              let a = method === 'POST' ? _save(action, typeR === 'Array' ? r : [r]) : _edit(action, r)
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
            deleteHandle(action, e => e.id === Number(queryObj.id))
          }
        }
        else {
          res.end('hello')
        }
    }
    
    function _send(d, c) {
      res.writeHead(c || 200, {
        'content-type': 'application/json'
      })
      res.write(JSON.stringify(d))
      res.end()
    }
    
    /*get请求查询数据*/
    function pageSelect(action) {
      let current = queryObj.current && Number(queryObj.current) || 1
      let size = queryObj.size && Number(queryObj.size) || 10
      
      let queryObjT = JSON.parse(JSON.stringify(queryObj))
      delete queryObjT.current
      delete queryObjT.size
      let keys = Object.keys(queryObjT)
      
      temp = {}
      let r
      
      if (keys.length > 0) {
        r = _get(action, current, size, e => {
          for (let iT of keys) {
            if (e[iT].indexOf(decodeURI(queryObj[iT])) === -1) {
              return false
            }
          }
          return true
        })
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
    
    /*post\put\delete请求*/
    function paramsRequest(callback) {
      let r = ''
      req.on('data', d => {
        r += d
      })
      req.on('end', () => {
        r = decodeURI(r)
        console.log('request params:', r)
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
    
    /**穿梭框--穿梭接口
     * @param r 接口入参
     * @param s 要保存数据的表
     * @param d 要删除数据的表
     * */
    function transferApi(r, s, d) {
      let t = r.map(e => e.id)
      let a = _save(s, r)
      let c = _delete(d, e => t.indexOf(e.id) > -1)
      let b = {}
      if (a && c) {
        b.code = 0
        b.message = 'success'
      }
      else {
        b.code = -1
        b.message = 'error'
      }
      _send(b)
    }
    
    /*将表from的数据按查询条件全部移到表to*/
    function transferMove(from, to, r) {
      let keys = Object.keys(r)
      let tD
      
      if (keys.length > 0) {
        tD = _get(from, 1, -1, e => {
          for (let iT of keys) {
            if (e[iT].indexOf(r[iT]) === -1) {
              return false
            }
          }
          return true
        })
      }
      else {
        tD = _get(from, 1, -1)
      }
      
      transferApi(tD && tD.data && JSON.parse(JSON.stringify(tD.data)) || [], to, from)
    }
  }
})

server.listen(PORT)
console.log('Server running at port: ' + PORT + '.')