/**
 * @description 示例项目的NodeJS服务器（接口）
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.03.20
 */

const express = require('express')
const init = require('./init')
const router = require('./router')

const app = express()

const PORT = 7890

app.listen(PORT, () => {
  console.log('Express server running at http://127.0.0.1:' + PORT)
})

app.use(express.static('public'))

init()

/*拦截所有请求,extended:false表示方法内部使用querystring模块处理请求参数的格式*/
/* app.use(express.urlencoded({extended:false}))*/
app.use(express.json())

app.use(function (req, res, next) {
  console.log('\x1b[90m', (new Date).toLocaleTimeString(), '\x1b[37m', 'path:', '\x1b[34m', req.path, '\x1b[37m',
    ' method:', "\x1b[33m", req.method, '\x1b[37m', ' query:', req.query)
  next()
})

app.use(router)
