/**
 * @description 示例项目的NodeJS服务器（接口）
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.03.20
 */

const express = require('express')
const formRData = require('./data/formR')
const {_save, _delete, _get, _edit} = require('./database')

const router = express.Router()

router.get('/people', function (req, res) {
  const q = req.query
  const t = formRData.people.data.filter(e => {
    let a = true
    for (let k in q) {
      /*这里用了隐式转换，不能全等*/
      if (q.hasOwnProperty(k) && e[k] != q[k]) {
        a = false
        break
      }
    }
    return a
  })
  res.send(t)
})

function pageSelect(action, req, res) {
  const {current, size, ...others} = req.query
  const _current = current && Number(current) || 1
  const _size = size && Number(size) || 10
  let t = {}
  let r
  if (Object.keys(others).length > 0) {
    r = _get(action, _current, _size, e => {
      for (let k in others) {
        if (others.hasOwnProperty(k) && e[k].indexOf(others[k]) === -1) {
          return false
        }
      }
      
      return true
    })
  }
  else {
    r = _get(action, _current, _size)
  }
  t.data = r.data
  t.total = r.total
  t.size = _size
  t.pages = t.total && Math.ceil(t.total / _size) || 0
  res.send(t)
}

/**穿梭框--穿梭接口
 * @param r 接口入参
 * @param s 要保存数据的表
 * @param d 要删除数据的表
 * @param res handler 的相应实例 res
 * */
function transferApi(r, s, d, res) {
  const t = r.map(e => e.id)
  const a = _save(s, r)
  const c = _delete(d, e => t.indexOf(e.id) > -1)
  
  let b = {}
  if (a && c) {
    b.code = 0
    b.message = 'success'
  }
  else {
    b.code = -1
    b.message = 'error'
  }
  res.send(b)
}

/*将表from的数据按查询条件全部移到表to*/
function transferMove(from, to, r, res) {
  let t
  if (Object.keys(r).length > 0) {
    t = _get(from, 1, -1, e => {
      for (let k in r) {
        if (r.hasOwnProperty(k) && e[k].indexOf(r[k]) === -1) {
          return false
        }
      }
      return true
    })
  }
  else {
    t = _get(from, 1, -1)
  }
  
  transferApi(t && t.data && JSON.parse(JSON.stringify(t.data)) || [], to, from, res)
}

router.get('/transfer-box-added', function (req, res) {
  pageSelect('transfer-box-added', req, res)
})

router.get('/transfer-box-not-added', function (req, res) {
  pageSelect('bt-table-page', req, res)
})

router.post('/transfer-box-added', express.json(), function (req, res) {
  transferApi(req.body, 'transfer-box-added', 'bt-table-page', res)
})

router.delete('/transfer-box-not-added', express.json(), function (req, res) {
  transferApi(req.body, 'bt-table-page', 'transfer-box-added', res)
})

router.post('/transfer-box-added-all', express.json(), function (req, res) {
  transferMove('bt-table-page', 'transfer-box-added', req.body, res)
})

router.delete('/transfer-box-not-added-all', express.json(), function (req, res) {
  transferMove('transfer-box-added', 'bt-table-page', req.body, res)
})

router.get('/fetch-spin', function (req, res) {
  const tm = setTimeout(() => {
    res.send({message: '回来了'})
    clearTimeout(tm)
  }, 3000)
})

router.get('/fetch-403', function (req, res) {
  res.status(403)
  res.send({message: '登录超时'})
})

router.get('/fetch-403-b', function (req, res) {
  res.send({
    code: 403,
    message: '登录超时'
  })
})

router.post('/login', function (req, res) {
  res.send({
    code: 0,
    message: '登录成功'
  })
})

router.get('/logout', function (req, res) {
  res.send({
    code: 0,
    message: '退出登录成功'
  })
})

/**
 * 操作微型数据库
 * @param req handler的req
 * @param res handler的res
 */
function tableManage(req, res) {
  const action = req.path.substring(1)
  const m = req.method
  
  if (action) {
    if (m === 'GET') {
      pageSelect(action, req, res)
    }
    else if (m === 'POST' || m === 'PUT') {
      const r = req.body
      let typeR = Object.prototype.toString.call(r).replace(/\[object |]/g, "")
      const s = m === 'POST' ? _save(action, typeR === 'Array' ? r : [r]) : _edit(action, r)
      let b = {}
      if (s) {
        b.code = 0
        b.message = 'success'
      }
      else {
        b.code = -1
        b.message = 'error'
      }
      res.send(b)
    }
    else if (m === 'DELETE') {
      const r = _delete(action, e => e.id === Number(req.query.id))
      let t = {}
      if (r) {
        t.code = 0
        t.message = 'success'
      }
      else {
        t.code = -1
        t.message = 'error'
      }
      res.send(t)
    }
  }
  else {
    res.send('hello')
  }
}

router.get('*', express.json(), tableManage)

router.post('*', express.json(), tableManage)

router.put('*', express.json(), tableManage)

router.delete('*', express.json(), tableManage)

module.exports = router
