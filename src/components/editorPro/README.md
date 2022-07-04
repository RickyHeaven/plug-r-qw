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

* 编辑器工具栏菜单key:`0: "bold"
               1: "underline"
               2: "italic"
               3: "through"
               4: "code"
               5: "sub"
               6: "sup"
               7: "clearStyle"
               8: "color"
               9: "bgColor"
               10: "fontSize"
               11: "fontFamily"
               12: "indent"
               13: "delIndent"
               14: "justifyLeft"
               15: "justifyRight"
               16: "justifyCenter"
               17: "justifyJustify"
               18: "lineHeight"
               19: "insertImage"
               20: "deleteImage"
               21: "editImage"
               22: "viewImageLink"
               23: "imageWidth30"
               24: "imageWidth50"
               25: "imageWidth100"
               26: "divider"
               27: "emotion"
               28: "insertLink"
               29: "editLink"
               30: "unLink"
               31: "viewLink"
               32: "codeBlock"
               33: "blockquote"
               34: "headerSelect"
               35: "header1"
               36: "header2"
               37: "header3"
               38: "header4"
               39: "header5"
               40: "todo"
               41: "redo"
               42: "undo"
               43: "fullScreen"
               44: "enter"
               45: "bulletedList"
               46: "numberedList"
               47: "insertTable"
               48: "deleteTable"
               49: "insertTableRow"
               50: "deleteTableRow"
               51: "insertTableCol"
               52: "deleteTableCol"
               53: "tableHeader"
               54: "tableFullWidth"
               55: "insertVideo"
               56: "uploadVideo"
               57: "editVideoSize"
               58: "uploadImage"
               59: "codeSelectLang"
               60: "previewX"`