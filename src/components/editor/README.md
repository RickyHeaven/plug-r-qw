## editor
富文本编辑器，v-model绑定内容，全局UI组件，直接用

### 属性
* value 字符串，编辑器内容，推荐使用v-model绑定

* valueType 字符串，内容类型，`html`和`text`二选一，默认：`html`

* focus 布尔对象，是否自动获取焦点，默认：`false`

* changeInterval 数字，on-change事件触发时间，默认：`200`

* colors 数组，编辑器文字颜色和背景色，由16进制string组成，默认：`['#000000','#eeece0','#1c487f','#4d80bf','#c24f4a','#8baa4a','#7b5ba1','#46acc8','#f9963b','#ffffff']`

* fontNames 数组，编辑器可选字体，默认：`['黑体','仿宋','楷体','标楷体','华文仿宋','华文楷体','宋体','微软雅黑','Arial','Tahoma','Verdana','Times New Roman','Courier New']`

* uploadImgMaxSize 数字，限制上传图片大小，默认：`1024*102.4`(0.1MB)

* uploadImgMaxLength 数字，限制一次最多能传几张图片，默认：`10`

* uploadImgShowBase64 布尔对象，是否使用base64作为本地图片上传保存方式，在使用上传到服务器且不需要配置上传服务器（使用默认配置）时，给该字段赋值`false`即可，默认：`true`

* showLinkImg 布尔对象，是否使用插入网络图片功能，默认：`true`

* uploadImgServe 对象，图片上传服务器配置，注意不可和base64上传同时开启，配置了该属性时，uploadImgShowBase64会直接赋值false，传入的值无效，格式示例：
```
  {
    url:'http://xxx/xx',/*图片上传接口地址,当接口返回数据格式和默认接口数据格式一致时，配置该地址即可上传图片到服务器，否则直接配置customUploadImg自己实现上传逻辑*/
  }
```
  默认接口返回数据格式：
```
  {
    data:[{id:xx,...},...],/*id将用于图片地址拼接*/
    message:'xxx'/*出错时的错误信息*/
  }
 ```
  图片地址拼接：`url+'/'+id+'/download'`，即图片上传后的访问地址和下载地址需遵循该格式才能正常使用，否则自己实现上传逻辑
 
  自定义上传到服务器的逻辑
```
  {
    customUploadImg:(resultFiles,insertImgFn)=>{
       // resultFiles 是 input 中选中的文件列表
       // insertImgFn 是获取图片 url 后，插入到编辑器的方法
       
       // 上传图片，返回结果，将图片插入到编辑器中
       insertImgFn(imgUrl)
    }
  }
```

* previewClass 字符串，预览容器类名，用于自定义预览界面table、code、blockquote等标签样式，将你的全局样式class传给该属性，你自定义的全局样式将在编辑预览界面生效，默认：`r-editor-view`

* disabled 布尔对象，禁用编辑功能，默认：`false`
### 事件
* on-change 编辑器内容发生变化，返回编辑器内容
### 方法
* setHtml 将指定内容设为编辑器内容，直接给v-model赋值效果也一样
### 注意：
* 从编辑器中获取的 html 代码是不包含任何样式的纯 html，如果显示的时候需要对其中的table、code、blockquote等标签进行自定义样式（这样既可实现多皮肤功能），如果要使用编辑器默认样式，请在富文本容器上加上class:`r-editor-view`。

