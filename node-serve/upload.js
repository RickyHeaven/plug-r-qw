/**
 * @description 文件上传、下载、拉取信息接口
 * @author ricky zhangqingcq@foxmail.com
 * @created 2021.03.21
 */

const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({
  fileFilter(req, file, callback) {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    callback(null, true)
  }
})

const {_save, _get} = require('./fileBase')

router.post('/file', upload.array('files'), function (req, res) {
  if (req.files) {
    let t = []
    for (let e of req.files) {
      const id = _save(e)
      if (id) {
        t.push({
          id: id,
          mimeType: e.mimetype,
          name: e.originalname
        })
      }
    }
    res.send({
      code: 0,
      data: t
    })
  }
  else {
    res.send({
      code: -1,
      message: '上传失败，未获取到文件'
    })
  }
})
router.get('/file/:id', function (req, res) {
  if (req.params && (req.params.id || req.params.id == 0)) {
    const f = _get(req.params.id)
    if (f) {
      res.send({
        data: {
          returnValue: [
            {
              id: req.params.id,
              name: f.originalname,
              mimeType: f.mimetype
            }
          ]
        }
      })
      return
    }
  }
  res.send({
    code: -1,
    message: '文件信息获取失败'
  })
})

router.get('/file/:id/download', function (req, res) {
  if (req.params && (req.params.id || req.params.id == 0)) {
    const f = _get(req.params.id)
    if (f) {
      res.set({
        "Content-Disposition": "attachment;filename=" + encodeURI(f.originalname)
      })
      res.send(f.buffer)
      return
    }
  }
  
  res.send({
    code: -1,
    message: '文件获取失败'
  })
})

module.exports = router
