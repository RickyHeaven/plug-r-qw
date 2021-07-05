/**
 * @description 可自动销毁的定时器和计时器
 * @author ricky zhangqingcq@foxmail.com
 * @created 2020.10.30
 */

let timeoutBox = []
let intervalBox = []

export const init = function (r) {
  if (r && r.beforeEach) {
    r.beforeEach((to, from, next) => {
      timeoutBox.map(e => {
        window.clearTimeout(e)
      })
      intervalBox.map(e => {
        window.clearInterval(e)
      })
      timeoutBox.length = 0
      intervalBox.length = 0
      next()
    })
  }
  else {
    console.warn('安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})')
  }
}

export const setTimeout = function (fn, time) {
  let handler = window.setTimeout(fn, time)
  timeoutBox.push(handler)
  return handler
}

export const setInterval = function (fn, time) {
  let handler = window.setInterval(fn, time)
  intervalBox.push(handler)
  return handler
}

export default {
  init,
  setTimeout,
  setInterval
}