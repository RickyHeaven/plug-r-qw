## fetch
网络请求插件，挂在vue原型上，为$fetch，组件内使用this调用，也可单独引用；实例下包含

### 实例内方法参数
* url 字符串，请求地址，必传

* data 对象，请求参数，没有可不传，如果后面有需要传的参数，该参数需要传`{}`占位，get请求推荐使用该参数传请求参数

* msg 字符串，请求错误消息，输出在浏览器控制台，方便查找原因，可不传，占位时传`null`

* rPath 数组，过滤请求结果，会根据该数组内的字符串元素依次取请求结果中对应字段，占位时传`[]`

* config 对象，请求配置，例如设置请求头等，如果需要在请求时加遮罩层，在该字段设置`{spin:true}`，展位时传`{}`

* isUrlData 布尔对象，delete方法传参模式 `true:params,false:data`，默认：`true`

### 实例内方法(没写在这里的都是内部方法，除非非常清楚调用产生的效果，否则不要调用)
* get 以get方式请求，请求参数推荐使用data参数传递

* post 以post方式请求

* put 以put方式请求

* delete 以delete方式请求

* all 并发请求，参考axios的all

* spread 并发请求结果分离，例如：
```
this.$fetch.all(
   [
     this.$fetch.get("/getData"),
     this.$fetch.post("/getDataB",{name:'ricky'})
   ]
  )
   .then(
     this.$fetch.spread(result1,result2){
         console.log(result1,result2)
     }
   )
```
### 注意
* 所有请求方式都返回promise对象，推荐使用then和catch处理

* 除非必须使用async和await配合的同步函数，否则不推荐使用，该配合有诸多弊端