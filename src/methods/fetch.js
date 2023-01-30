/**
 * created 2019.04.01
 * @author Ricky <zhangqingcq@foxmail.com>
 */
import axios from 'axios'
import messageBox from './messageBox.js'
import _ from 'lodash'
import {t} from '../locale/index'

const host = window.location.origin

// 创建自定义对象
let service = axios.create({
  baseURL: host,
  withCredentials: true // 允许携带cookie
})

function notInitYet() {
  console.info('store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})')
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
    service.store.dispatch("logout");
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
    if (service.store) {
      service.store.commit('MINUS_FETCH_COUNT')
    }
    else {
      notInitYet()
    }
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
 * 请求主体
 * @param method
 * @param url
 * @param data
 * @param msg 提示信息
 * @param rPath 返回数据路径（提取）
 * @param config 请求配置
 * @param isUrlData delete方法传参模式 true:params,false:data
 * @returns {Promise<*>}
 */
function checkRequest(method, url, data, msg, rPath, config = {}, isUrlData) {
  return new Promise((s, j) => {
    if (url) {
      if (config && config.spin) {
        if (service.store) {
          service.store.commit('ADD_FETCH_COUNT')
        }
        else {
          notInitYet()
        }
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
 * 使用this.$fetch时直接调用以下方法，例如：this.$fetch.get("/getData",{id:1})
 * @param url 请求地址
 * @param data 请求数据
 * @param msg 错误处理信息，如不需在控制台输出特定错误信息可不传，错误处理可根据返回结果false以及其他预定数据进行,例如：
 * this.$fetch.post("/getDataB",{name:'ricky'},"获取数据B失败")
 * @param rPath 请求结果按路径过滤，如：[data,list]表示data.list,如不需过滤可不传，例如：
 * this.$fetch.get("/getData",{id:1},null,['result','list'])
 *  .then(r=>{
 *      console.log(r)
 *      r相当于:data.result.list,data是网络请求结果
 *  })
 *  注意：
 *      请求最多支持5个入参，最少一个(url)，依次为：url,data,msg,rPath,config。如果要传靠后的入参，但不想传前面的，应该这样传：
 *      this.$fetch.post("/setData",{},null,[],{
 *               headers: {
 *                   'Content-Type': 'multipart/form-data'
 *                 },
 *                 spin:true
 *             }
 *        )
 * @param config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
 * @param isUrlData delete方法传参模式 true:params,false:data
 * @returns {Promise<*>}
 * @returns all 并发请求 例如：
 * this.$fetch.all(
 *  [
 *    this.$fetch.get("/getData"),
 *    this.$fetch.post("/getDataB",{name:'ricky'})
 *  ]
 * )
 * @returns spread 并发请求结果分离 例如：
 * this.$fetch.all(
 *  [
 *    this.$fetch.get("/getData"),
 *    this.$fetch.post("/getDataB",{name:'ricky'})
 *  ]
 * )
 *  .then(
 *    this.$fetch.spread(result1,result2){
 *        console.log(result1,result2)
 *    }
 *   )
 */
export default {
  init(store) {
    service.store = store
  },
  
  post(url, data = {}, msg, rPath, config) {
    return new Promise((s, j) => {
      checkRequest('post', url, data, msg, rPath, config).then(r => {
        s(r)
      }).catch(e => {
        j(e)
      })
    })
  },
  
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
   * get请求时(delete请求同理)，可以把请求写在url里，也可以写在data里，注意写在data里时，data是对象
   * 以请求devices,找到id=2,name='meter'举例：
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
  
  delete(url, data = {}, msg, rPath, config, isUrlData = true) {
    return new Promise((s, j) => {
      checkRequest('delete', url, data, msg, rPath, config, isUrlData).then(r => {
        s(r)
      }).catch(e => {
        j(e)
      })
    })
  },
  
  all: axios.all,
  spread: axios.spread,
  config: service
}
