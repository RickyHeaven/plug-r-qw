## editorPro
富文本编辑器，v-model绑定内容，全局UI组件，直接用，基于wangEditor5

### 属性
* value 字符串，编辑器内容，推荐使用v-model绑定

* toolbarConfig 对象，工具栏配置，参考[wangEditor5 工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html) 

* editorConfig 对象，编辑器配置，参考[wangEditor5 编辑器配置](https://www.wangeditor.com/v5/editor-config.html) 

* mode 字符串，`'default'` 默认模式 - 集成了 wangEditor 所有功能；`'simple'` 简洁模式 - 仅有部分常见功能，但更加简洁易用，默认：`'default'`

* height 正数/字符串，编辑区域高度，默认：`300`

* placeholder 字符串，占位符，默认：`请输入`

* disabled 布尔对象，禁用编辑功能，默认：`false`

### 注意
* 自定义上传到服务器的逻辑
```
  editorConfig.MENU_CONF['uploadImage'] ={
    async customUpload(file,insertFn){
       // file 是 input 中选中的文件列表
       // insertFn 是获取图片 url 后，插入到编辑器的方法

       // 自己实现上传，并得到图片 url alt href
       // 将图片插入到编辑器中
       insertFn(url, alt, href)
    }
  }
```

* 定制样式（编辑区域、预览层等）：编辑区class为`editor-pro-editor`，预览层id为`editor-preview`,直接另外写新样式覆写原有样式即可。

* 编辑器工具栏菜单key:
```angular2
[
  "headerSelect",
  "blockquote",
  "|",
  "bold",
  "underline",
  "italic",
  {
    "key": "group-more-style",
    "menuKeys": [
      "through",
      "code",
      "sup",
      "sub",
      "clearStyle"
    ]
  },
  "color",
  "bgColor",
  "|",
  "fontSize",
  "fontFamily",
  "lineHeight",
  "|",
  "bulletedList",
  "numberedList",
  "todo",
  {
    "key": "group-justify",
    "menuKeys": [
      "justifyLeft",
      "justifyRight",
      "justifyCenter",
      "justifyJustify"
    ]
  },
  {
    "key": "group-indent",
    "menuKeys": [
      "indent",
      "delIndent"
    ]
  },
  "|",
  "emotion",
  "insertLink",
  {
    "key": "group-image",
    "menuKeys": [
      "insertImage",
      "uploadImage"
    ]
  },
  {
    "key": "group-video",
    "menuKeys": [
      "insertVideo",
      "uploadVideo"
    ]
  },
  "insertTable",
  "codeBlock",
  "divider",
  "|",
  "undo",
  "redo",
  "|",
  "previewX",
  "fullScreen"
]
```