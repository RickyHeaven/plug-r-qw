import _ from 'lodash'

//判断变量类型
export function myTypeof(v) {
  let str = Object.prototype.toString.call(v)
  return str.replace(/\[object |]/g, "")
}

// 下划线转换驼峰
export function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

// 驼峰转换下划线
export function toLine(name) {
  return name.replace(/([A-Z])/g, "_$1")
    .toLowerCase();
}

/**
 * 去掉对象属性前后空格
 */
export function trimObj(obj) {
  if (myTypeof(obj) === 'Object') {
    for (let key in obj) {
      if (myTypeof(obj[key]) == "String") {
        obj[key] = obj[key].replace(/^\s+|\s+$/m, '');
      }
      else if (myTypeof(obj[key]) == "Object") {
        trimObj(obj[key])
      }
    }
    return obj
  }
  else {
    return obj
  }
}

// 清空集合
export function clearObj(val, ignoreList) {
  ignoreList = ignoreList || []
  if (myTypeof(val) === 'Array') {
    val.forEach((item, index) => {
      switch (myTypeof(item)) {
        case 'String':
        case 'Number':
        case 'Boolean':
        case 'Date':
          val[index] = null
          break
        case 'Array':
        case 'Object':
          clearObj(item)
          break
      }
    })
    return val
  }
  else if (myTypeof(val) === 'Object') {
    for (let key in val) {
      if (val.hasOwnProperty(key)) {
        let go = true
        for (let item of ignoreList) {
          if (item === key) {
            go = false
            break
          }
        }
        if (go) {
          switch (myTypeof(val[key])) {
            case 'String':
            case 'Number':
            case 'Boolean':
            case 'Date':
              val[key] = null
              break
            case 'Array':
            case 'Object':
              clearObj(val[key])
              break
          }
        }
      }
    }
    return val
  }
  else {
    return val
  }
}

/*用浏览器内部转换器实现html转码*/
export function htmlEncode(html) {
  //1.首先动态创建一个容器标签元素，如DIV
  let temp = document.createElement("div");
  //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
  temp.textContent !== undefined ? (temp.textContent = html) : (temp.innerText = html);
  //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
  let output = temp.innerHTML;
  temp = null;
  return output;
}

/*用浏览器内部转换器实现html解码*/
export function htmlDecode(text) {
  //1.首先动态创建一个容器标签元素，如DIV
  let temp = document.createElement("div");
  //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
  temp.innerHTML = text;
  //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
  let output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}

/*根据file文件对象获取文件地址用来预览*/
export function getFileSrc(file) {
  return new Promise(resolve => {
    let reader = new FileReader()
    reader.readAsDataURL(file) // 读出 base64
    reader.onloadend = () => {
      resolve(reader.result)
    }
  })
}

/*获取后缀名*/
export function getFileTypeByName(name) {
  return (name.split('.')
    .pop()
    .toLocaleLowerCase() || '')
}

/*判断是否为图片（type是否包含‘image’）*/
export function isImgByFile(type) {
  return (myTypeof(type) === 'String' && type.indexOf('image') > -1)
}

/*根据文件名获取图标（上传组件用）*/
export function getFileTypeIconByName(name) {
  const format = getFileTypeByName(name)
  let type = 'ios-document-outline'
  
  if ([
    'gif',
    'jpg',
    'jpeg',
    'png',
    'bmp',
    'webp'
  ].indexOf(format) > -1) {
    type = 'ios-image';
  }
  if ([
    'mp4',
    'm3u8',
    'rmvb',
    'avi',
    'swf',
    '3gp',
    'mkv',
    'flv'
  ].indexOf(format) > -1) {
    type = 'ios-film';
  }
  if ([
    'mp3',
    'wav',
    'wma',
    'ogg',
    'aac',
    'flac'
  ].indexOf(format) > -1) {
    type = 'ios-musical-notes';
  }
  if ([
    'doc',
    'txt',
    'docx',
    'pages',
    'epub',
    'pdf'
  ].indexOf(format) > -1) {
    type = 'md-document';
  }
  if ([
    'numbers',
    'csv',
    'xls',
    'xlsx'
  ].indexOf(format) > -1) {
    type = 'ios-stats';
  }
  if ([
    'keynote',
    'ppt',
    'pptx'
  ].indexOf(format) > -1) {
    type = 'ios-videocam';
  }
  
  return type;
}

/*下载一个文件（替换容易被浏览器屏蔽的window.open方法）*/
export function downloadFileReaderFile(name, href) {
  let saveLink = document.createElement("a");
  saveLink.href = href;
  saveLink.download = name;
  fakeALinkClick(saveLink);
}

/*模拟被点击（比如模拟用户点击链接下载东西）*/
export function fakeALinkClick(obj) {
  let ev = document.createEvent("MouseEvents");
  ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  obj.dispatchEvent(ev);
}

/*以form-data方式提交请求数据时，$fetch的config参数值*/
export const formDataHeadConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

/*将普通对象转换成form-data请求参数格式*/
export function toFormData(data) {
  let temp = new FormData()
  for (let key in data) {
    if (data.hasOwnProperty(key) && data[key] !== null) {
      temp.append(key, data[key])
    }
  }
  return temp
}

/**
 *按条件查找一个元素在集合中的位置（路径）
 * @param {Array/Object} group - 集合，被查找的集合
 * @param {Function} condition - 查找条件
 * @param {String} pathKey - 返回路径元素对应集合元素的key
 * @param {String} childKey - 集合子元素的key，默认值'children'
 * @param {Array} path - 递归用参数，不用传
 * @return {Array} 返回带有路径（层级）信息的数组
 * @example group: {id:1,name:'爸爸',children:[{id:2,name:'大儿子'},{id:3,name:'二儿子'}]}
 *          condition: e=>e.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
export function findPath({group, condition, pathKey, childKey = 'children', path = []}) {
  if (group && _.isObject(group)) {
    if (_.isFunction(condition)) {
      if (_.isPlainObject(group)) {
        for (let key in group) {
          if (group.hasOwnProperty(key)) {
            let item = group[key]
            let temp = _.cloneDeep(path)
            if (condition(item)) {
              if (pathKey && item[pathKey]) {
                temp.push(item[pathKey])
              }
              else {
                temp.push(key)
              }
              return temp
            }
            else if (item[childKey] && (!_.isEmpty(item[childKey]))) {
              if (pathKey && item[pathKey]) {
                temp.push(item[pathKey])
              }
              else {
                temp.push(key)
              }
              let rr = findPath({
                group: item[childKey],
                condition: condition,
                pathKey: pathKey,
                childKey: childKey,
                path: temp
              })
              if (!_.isEmpty(rr)) {
                return rr
              }
            }
          }
        }
      }
      else if (_.isArray(group)) {
        for (let item of group) {
          let temp = _.cloneDeep(path)
          if (condition(item)) {
            if (pathKey && item[pathKey]) {
              temp.push(item[pathKey])
            }
            else {
              temp.push(group.indexOf(item))
            }
            return temp
          }
          else if (item[childKey] && item[childKey].length > 0) {
            if (pathKey && item[pathKey]) {
              temp.push(item[pathKey])
            }
            else {
              temp.push(group.indexOf(item))
            }
            let rr = findPath({
              group: item[childKey],
              condition: condition,
              pathKey: pathKey,
              childKey: childKey,
              path: temp
            })
            if (!_.isEmpty(rr)) {
              return rr
            }
          }
        }
      }
    }
    else {
      if (_.isPlainObject(group)) {
        for (let key in group) {
          if (group.hasOwnProperty(key)) {
            let item = group[key]
            let temp = _.cloneDeep(path)
            if (item === condition) {
              temp.push(key)
              return temp
            }
            else if (item[childKey] && (!_.isEmpty(item[childKey]))) {
              temp.push(key)
              let rr = findPath({
                group: item[childKey],
                condition: condition,
                pathKey: pathKey,
                childKey: childKey,
                path: temp
              })
              if (!_.isEmpty(rr)) {
                return rr
              }
            }
          }
        }
      }
      else if (_.isArray(group)) {
        for (let item of group) {
          let temp = _.cloneDeep(path)
          if (item === condition) {
            temp.push(group.indexOf(item))
            return temp
          }
          else if (item[childKey] && item[childKey].length > 0) {
            temp.push(group.indexOf(item))
            let rr = findPath({
              group: item[childKey],
              condition: condition,
              pathKey: pathKey,
              childKey: childKey,
              path: temp
            })
            if (!_.isEmpty(rr)) {
              return rr
            }
          }
        }
      }
    }
  }
  return []
}

/*判断某个值是否在集合中*/
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/*小数位数限制，超出会返回被去掉后的值*/
export function decimalDigitsLimit(val, num = 2) {
  let expStr = new RegExp("(^-?\\d+.\\d{" + num + "})(\\d+$)")
  let valStr = val && String(val) || ''
  if (expStr.test(valStr)) {
    return Number(valStr
      .replace(expStr, '$1'))
  }
  else {
    return val
  }
}

/*文件导出，调用后端接口以form表单提交数据下载文件*/
export function downloadFileByFormSubmit(url, data = {}, method = 'get') {
  let form = document.createElement('form')
  let body = document.getElementsByTagName("body")[0]
  body.appendChild(form)
  form.setAttribute('style', 'display:none')
  form.setAttribute('target', '')
  form.setAttribute('method', method)
  form.setAttribute('action', url)
  
  if (_.isPlainObject(data)) {
    for (let key in data) {
      if (data.hasOwnProperty(key) && (data[key] || data[key] === 0 || data[key] === false || data[key] === '')) {
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', key)
        input.setAttribute('value', data[key])
        form.appendChild(input)
      }
    }
    
    form.submit()
    
    setTimeout(() => {
      body.removeChild(form)
    }, 8000)
  }
  else {
    console.error('请求数据格式有误，无法下载文件')
  }
}

export function isValidValue(val) {
  return val !== undefined && val !== null && val !== ''
}

export function isNumberValue(val) {
  let reg = /^-?\d+(.\d+)?$/
  return reg.test(val)
}

/**
 * 手动tooltip(table 的 column 的tooltip失效的情况下用)
 * @param {String/Array} contentKey - 要设置tooltip的column的key或者key组成的数组（内容按数组中key对应的内容先后拼接）
 * @param {boolean} dash - 在内容为空时是否以'--'代替显示
 * @param {String} jointMark - 在内容为多个字段拼接时，各字段间连接符，默认没有
 * @returns {function(...[*]=)}
 */
export function tooltipManual(contentKey, dash = false, jointMark = '') {
  return function (h, params) {
    let content
    if (myTypeof(contentKey) === 'Array') {
      let temp = []
      for (let item of contentKey) {
        temp.push(params.row[item])
      }
      content = temp.join(jointMark)
    }
    else {
      content = params.row[contentKey]
    }
    let contentWidth = getStringWidth(content)
    let tdWidth = params.column._width
    if (content && contentWidth > tdWidth) {
      return h('Tooltip', {
        style: {
          width: '100%'
        },
        props: {
          content: content,
          maxWidth: tdWidth * 2
        }
      }, [
        h('span', {
          style: {
            width: '100%',
            display: 'inline-block',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
            overflow: 'hidden',
            'vertical-align': 'top'
          }
        }, content)
      ])
    }
    else {
      return h('span', dash && (!isValidValue(content)) ? '--' : content)
    }
  }
}

/*获取字符串width*/
export function getStringWidth(str, fontSize = 12) {
  if (myTypeof(str) === 'String' && str.length > 0) {
    let nodesH = document.createElement('span')
    nodesH.style.fontSize = fontSize + 'px'
    nodesH.style.fontFamily = 'inherit'
    nodesH.innerHTML = str
    nodesH.style.opacity = '0'
    nodesH.style.position = 'fixed'
    nodesH.style.top = '3000px'
    document.body.append(nodesH)
    const width = nodesH.clientWidth
    document.body.removeChild(nodesH)
    return width
  }
  else {
    return 0
  }
}

/*判断数组或对象每个元素或单个变量是否是有效值*/
export function isEmptyValue(data) {
  if (_.isPlainObject(data)) {
    for (let key in data) {
      if (data.hasOwnProperty(key) && isValidValue(data[key])) {
        return false
      }
    }
    return true
  }
  else if (_.isArray(data)) {
    for (let item of data) {
      if (isValidValue(item)) {
        return false
      }
    }
    return true
  }
  else {
    return !isValidValue(data)
  }
}

/*获取字符串长度，中文2，其他1（一般用于用户输入长度限制）*/
export function stringLength(str) {
  if (myTypeof(str) === 'String') {
    return str.replace(/[^\x00-\xff]/g, "01").length
  }
  else if (myTypeof(str) === 'Number') {
    str += ''
    return str.replace(/[^\x00-\xff]/g, "01").length
  }
  else {
    return 0
  }
}

/**
 * 按条件设置集合中指定字段的值
 * @param {Array} group 目标集合
 * @param {Function} condition 匹配条件
 * @param {String} key 要设置的字段键名
 * @param val 要设置的字段的值
 * @param {String} childKey 子集键名
 */
export function setValByOption({group, condition, key, val, childKey = 'children'}) {
  if (myTypeof(group) !== 'Array' || myTypeof(condition) !== 'Function' || myTypeof(key) !== 'String' ||
    myTypeof(childKey) !== 'String') {
    return false
  }
  group.forEach(item => {
    if (condition(item)) {
      item[key] = val
    }
    if (myTypeof(item[childKey]) === 'Array' && item[childKey].length > 0) {
      setValByOption({
        group: item[childKey],
        condition,
        key,
        val,
        childKey
      })
    }
  })
}

