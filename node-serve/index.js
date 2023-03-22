/**
 * @description 示例项目的NodeJS服务器（接口）
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.03.20
 */

const express = require('express')
const init = require('./init')
const router = require('./router')
const uploadRouter = require('./upload')

const app = express()

const PORT = 7890

app.listen(PORT, () => {
  console.log('Express server running at http://127.0.0.1:' + PORT)
})

app.use(express.static('public'))

init()

app.use(function (req, res, next) {
  console.log('\x1b[90m', (new Date).toLocaleTimeString(), '\x1b[37m', 'path:', '\x1b[34m', req.path, '\x1b[37m',
    ' method:', "\x1b[33m", req.method, '\x1b[37m', ' query:', req.query)
  next()
})

app.use(uploadRouter)
app.use(router)
