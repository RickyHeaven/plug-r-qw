/**
 * created 2019.04.01
 * @author Ricky <zhangqingcq@foxmail.com>
 */
import axios from 'axios'
import messageBox from './messageBox.js'
import _ from 'lodash'
import {t} from '../locale/index'

import {counts} from './spin'

const host = window.location.origin

// 创建自定义对象
let service = axios.create({
  baseURL: host,
  withCredentials: true // 允许携带cookie
})

function notInitYet() {
  console.info('store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}')
}

/**
 * 拦截器，在发起请求前调用
 */
service.interceptors.request.use(q => {
  return q
}, e => {
  return Promise.reject(e)
})

function logoutHandle() {
  if (service.store) {
    if(typeof service.store === "function"){
      const store = service.store()
      if(store.logout){
        store.logout()
      }
    }else {
      service.store.dispatch("logout")
    }
  }
  else {
    notInitYet()
  }
}

/**
 * 拦截器，在请求返回时调用
 */
service.interceptors.response.use(r => {
  if (r && r.data && (r.data.code === 403 || r.data.code === 409)) {
    messageBox({
      content: t('r.http.' + r.data.code),
      onOk: logoutHandle
    })
  }
  return r
}, e => {
  if (e && e.response && (e.response.status === 403 || e.response.status === 409)) {
    messageBox({
      content: t('r.http.' + e.response.status),
      onOk: logoutHandle
    })
  }
  console.warn('请求出错：', e)
  return Promise.reject(e)
})

/**
 * 封装请求结果和错误处理
 */
function checkResult(r, msg, rPath, config) {
  if (config && config.spin) {
    counts(false)
  }
  let y = true
  let d = r && r.data
  if (d) {
    rPath = rPath ? rPath : []
    for (let e of rPath) {
      d = d[e]
      y = y && d
    }
    if (y) {
      return d
    }
    msg && console.warn(msg)
    return false
  }
  msg && console.warn(msg)
  return false
}

function handleRequest(method, url, data, msg, rPath, config, isUrlData) {
  return new Promise((s, j) => {
    switch (method) {
      case 'get':
        service.get(url, {params: data}).then(r => {
          let d = checkResult(r, msg, rPath, config)
          if (d) {
            s(d)
          }
          else {
            j(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          j(e)
        })
        break
      case 'delete':
        let keyT = isUrlData ? 'params' : 'data'
        service.delete(url, {[keyT]: data}).then(r => {
          let d = checkResult(r, msg, rPath, config)
          if (d) {
            s(d)
          }
          else {
            j(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          j(e)
        })
        break
      case 'post':
        service.post(url, data, config).then(r => {
          let d = checkResult(r, msg, rPath, config)
          if (d) {
            s(d)
          }
          else {
            j(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          j(e)
        })
        break
      case 'put':
        service.put(url, data, config).then(r => {
          let d = checkResult(r, msg, rPath, config)
          if (d) {
            s(d)
          }
          else {
            j(r)
          }
        }).catch(e => {
          checkResult({}, msg, rPath, config)
          j(e)
        })
        break
      default:
    }
  })
}

/**
 * 检查请求传入的各个参数
 * @param method 请求方法
 * @param url 地址
 * @param data 餐宿
 * @param msg 错误信息
 * @param rPath 返回数据路径（提取）
 * @param config 请求配置
 * @param isUrlData delete方法传参模式 true:params,false:data
 * @returns {Promise<*>}
 */
function checkRequest(method, url, data, msg, rPath, config = {}, isUrlData) {
  return new Promise((s, j) => {
    if (url) {
      if (config && config.spin) {
        counts(true)
      }
      let url_ = url
      if (window && window.g) {
        /*所有特定缩写字母开头的地址，都会被改变加上config.js（public里的全局配置文件，在index.html引入，在打包后通过更改该文件用于不
         同环境的部署）里配置的地址变成绝对地址，如:
         config.js里配置了 window.g={mgrURL:'http://mgr.myweb.com'}
         请求地址 ‘/mgr/file’ 会被改变为 'http://mgr.myweb.com/file'
         */
        let httpEnv = Object.keys(window.g).filter(e => e.indexOf('URL') > -1).map(e => e.replace('URL', ''))
        
        for (let e of httpEnv) {
          let regExp = new RegExp('^\/' + e + '(?=\/.*$)', 'i')
          if (regExp.test(url) && window.g[e + 'URL']) {
            url_ = window.g[e + 'URL'] + url.replace(regExp, '')
            break
          }
        }
      }
      let data_
      if (config && config.headers && config.headers['Content-Type'] === 'multipart/form-data') {
        data_ = data
      }
      else {
        if (Array.isArray(data)) {
          data_ = []
        }
        else {
          data_ = {}
        }
        if (data && (!_.isEmpty(data))) {
          if (Array.isArray(data)) {
            for (let e of data) {
              if (e || e === 0 || e === false || (e === '' && !config.noEmptyStr)) {
                data_.push(e)
              }
            }
          }
          else {
            for (let key in data) {
              if (data.hasOwnProperty(key) &&
                (data[key] || data[key] === 0 || data[key] === false || (data[key] === '' && !config.noEmptyStr))) {
                data_[key] = data[key]
              }
            }
          }
        }
      }
      let method_ = method.toLowerCase()
      handleRequest(method_, url_, data_, msg, rPath, config, isUrlData).then(r => {
        s(r)
      }).catch(e => {
        j(e)
      })
    }
    else {
      console.error('没有请求地址:url')
      j('没有请求地址:url')
    }
  })
}

/**
 * @description 基于axios封装的请求插件，引入库时使用this.$fetch时直接调用以下方法，例如：this.$fetch.get("/getData",{id:1})，
 * 单独引入时遵循Es Modules规范即可
 * @class
 */
export default {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store
   */
  init(store) {
    service.store = store
  },
  /**
   * post 请求
   * @function
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传，例如：
   * @example this.$fetch.post("/getDataB",{name:'ricky'},"获取数据B失败")
   * @param {Array.<string>} rPath 请求结果提取路径，如：[data,list]表示data.list,如不需过滤可不传
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @return {Promise<object>}
   * @example this.$fetch.post("/getData",{id:1},null,['result','list'])
   *  .then(r=>{
   *      console.log(r)
   *      r相当于:data.result.list,data是网络请求结果
   *  })
   *
   * 注意：
   *  请求最多支持5个入参，最少一个(url)，依次为：url,data,msg,rPath,config。如果要传靠后的入参，但不想传前面的，应该这样传：
   *  this.$fetch.post("/setData",{},null,[],{
   *     headers: {
   *         'Content-Type': 'multipart/form-data'
   *       },
   *       spin:true
   *   }
   *  )
   */
  post(url, data = {}, msg, rPath, config) {
    return new Promise((s, j) => {
      checkRequest('post', url, data, msg, rPath, config).then(r => {
        s(r)
      }).catch(e => {
        j(e)
      })
    })
  },
  /**
   * put请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
   * @param {Array.<string>} rPath 请求结果提取路径
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @return {Promise<unknown>}
   */
  put(url, data = {}, msg, rPath, config) {
    return new Promise((s, j) => {
      checkRequest('put', url, data, msg, rPath, config).then(r => {
        s(r)
      }).catch(e => {
        j(e)
      })
    })
  },
  /**
   * get请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
   * @param {Array.<string>} rPath 请求结果提取路径
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @return {Promise<unknown>}
   * PS: get请求时(delete请求同理)，可以把请求参数写在url里，也可以写在data里，注意写在data里时，data是对象
   * 以请求'/devices',找到id=2,name='meter'举例：
   *  只传url时，url = '/devices?id=2&name=meter'
   *  url和data都传时,url = '/devices',data={id:2,name:'meter'}
   */
  get(url, data = {}, msg, rPath, config) {
    return new Promise((s, j) => {
      checkRequest('get', url, data, msg, rPath, config).then(r => {
        s(r)
      }).catch(e => {
        j(e)
      })
    })
  },
  /**
   * delete 请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
   * @param {Array.<string>} rPath 请求结果提取路径
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @param isUrlData 传参模式 true:params,false:data
   * @return {Promise<unknown>}
   */
  delete(url, data = {}, msg, rPath, config, isUrlData = true) {
    return new Promise((s, j) => {
      checkRequest('delete', url, data, msg, rPath, config, isUrlData).then(r => {
        s(r)
      }).catch(e => {
        j(e)
      })
    })
  },
  /**
   * 并发请求   例如：
   * @example this.$fetch.all(
   *  [
   *    this.$fetch.get("/getData"),
   *    this.$fetch.post("/getDataB",{name:'ricky'})
   *  ]
   * )
   */
  all: axios.all,
  /**
   * 并发请求结果分离 例如：
   * @example this.$fetch.all(
   *  [
   *    this.$fetch.get("/getData"),
   *    this.$fetch.post("/getDataB",{name:'ricky'})
   *  ]
   * )
   *  .then(
   *    this.$fetch.spread((result1,result2)=>{
   *        console.log(result1,result2)
   *    })
   *   )
   */
  spread: axios.spread,
  /**
   * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
   */
  config: service
}
