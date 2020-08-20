## formR
表单组件，支持formData属性定义结构，formRules定义规则，submit方法提交收集到的数据，全局UI组件，直接用

### 属性
* formData 数组，表单结构数据，如：
```angular2html
  [
    {
      type: 'input',
      key: 'name',
      label: '姓名'
    }
  ]
```
* formRules 对象，表单验证数据，如：
```angular2html
  [
    name: {
      required: true
    }
  ]
```
* showMessage 布尔对象，是否显示校验信息，默认：`true`

* labelWidth 数字，表单项标签宽度，默认：`160`

* contentWidth 字符串，表单项内容宽度，默认：`'70%'`

* itemWidth 数字，表单项内容宽度，用于行内表单，默认：`200`

* inline 布尔对象，是否为行内表单，默认：`false`

* showLongOkBt 布尔对象，是否展示长确定按钮，默认：`false`

* longOkBtTxt 字符串，长确定按钮内容，默认：`'确定'`

* showInlineOkBt 布尔对象，是否展示行内短确定按钮，默认：`false`

* inlineOkBtTxt 字符串，短确定按钮内容，默认：`'确定'`

* showInlineClearBt 布尔对象，是否展示行内短清空按钮，默认：`false`

* inlineClearBtTxt 字符串，短清空按钮内容，默认：`'清空'`

* btnLoading 布尔对象，提交按钮显示loading，默认：`false`

* disabled 布尔对象，禁用整个表单，比如仅需要展示时
### 事件
* on-submit 表单被提交，返回表单收集的数据

* on-item-change 表单项的值改变，返回对象，包含事件对象和改变的数据

* on-height-change 表单高度改变，返回表单高度，如果需要根据高度做UI调整可监听该事件
### 方法
* resetForm 重置表单，会清空表单值并刷新表单dom，异步方法

* reRenderForm 重新渲染表单，异步方法

* refreshFormDom 刷新表单dom，异步方法

* setItemToValGroup 设置表单项的值，可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示

* updateValGroup 更新表单项的值，只能更新已有字段

* updateFormDataT 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值

* reValidate 手动验证表单项

* validate 主动验证整个表单

* changeLoading 主动改变表单提交按钮loading状态，在开启btnLoading的前提下

* submit 触发提交事件，一般不需要调用，会通过组件内部提交按钮触发

### 注意
* 不要调用组件私有方法，除非你非常清楚调用不会导致未知错误

* 组件的formData属性和formRules属性并非响应式，如果改变了这两个属性，可以调用reRenderForm方法重新渲染组件

* 在formData和formRules没有变化的情况下，只需要调用resetForm方法即可重置组件

* 在某些情况下，如更改了formRules，但又不想重新渲染组件（要保留用户操作等），验证信息等不会更新，只需要调用refreshFormDom方法刷新dom
(不要调用validate，否则会发生如后面没填的必填项都会变红等非预期表现)

* 组件除了props里的属性，formData还支持丰富的配置，具体用法可以参考示例

* 短按钮和长按钮不要同时开启

### formData元素支持字段说明（按字母升序）
* activeChange InputNumber（数字输入框）是否实时响应数据，设置为`false`时，只会在失焦时更改数据

* booleanVal 是否为布尔值，当需要表单项为布尔值时，给该字段赋值`true`，该表单项可接受布尔值，提交时提交布尔值，注意：需要表单项类型支持布尔值

* buttonType RadioGroup是否为按钮样式，按钮样式即为一排连在一起的按钮
 
* clearable 表单项是否可单独清空，当类型支持时才有效，具体见后面的'type说明'

* data uploadGroup远程上传时，一并携带的参数（除了文件）

* dateType DatePicker的日期格式

* dateOptions DatePicker选择器额外配置，比如不可选日期与快捷选项

* defaultVal 表单项的默认值，组件第一次渲染时会带上该值并在UI上回显，不是所有类型都支持该字段，具体见后面的'type说明'

* defaultVal2 另一个默认值，原理同key2，对应的也会有defaultVal3等

* disabled 禁用表单项，因为formData非响应式，自然该字段也非响应式，注意：这和组件props中disabled不是同一个

* editable InputNumber（数字输入框）是否可编辑，为`false`时,只能通过UI操作，不能通过光标修改

* filterable Select是否支持筛选待选项

* format uploadGroup支持的格式，不限制的话不用设置该字段

* info 表单项的提示文字，位于表单项下面，一般为蓝色（在没自定义对应主题颜色时）

* inputType input类型，区分普通input和数字输入框，只在type为input时有效，目前唯一值：`number`

* itemBorder RadioGroup选项是否带边框，默认`false`

* <a name='keya'>key</a> 表单被提交时该项收集的数据所在字段，如：`{type:'input',key:'name'}`,用户输入`'Ricky'`，提交时返回`{name:'Ricky'}`

* key2 除key以外的另一要收集的数据，如时间区间，key为起始，key2为终止，以此类推，如果有三个数据，则有key3等

* <a id='labela'>label</a> 表单项标签

* length uploadGroup支持上传文件的个数限制，不限制则不设置

* level 层级，表单项特殊配置，如行政区域级联，具体见后面的'type说明'

* likeInput 表单项右侧区域模拟input样式，只有type为txt时有效

* manualUpload uploadGroup手动上传（本地上传，采集file对象）

* mapHeight inputMap的地图高度，默认值`'250px'`

* max 表单项最大值，需要类型支持时才生效

* maxLength 表单项值最大长度，需要类型支持时才生效

* maxSize uploadGroup支持上传的文件大小限制，不限制则不设置

* min 表单项允许最小值，需要类型支持时才生效

* multiple Select是否支持多选

* numberVal 表单项收集的值自动转换为number类型，需是类似number的字符串才能转，否则收集的值为字符串

* onlyLastVal 只返回最后一级的值，表单项特殊配置，如机构级联，具体见后面的'type说明'

* onlyLastLabel 只显示最后一级的label，表单项特殊配置，如机构级联，具体见后面的'type说明'

* options 有待选项的表单项，待选项数据存放在该字段下，如：`{type:'select',key:'sex',options:[{label:'男',val:1},{label:'女',val:0}]}`

* placeholder 表单项占位符，不是所有类型都支持该字段，具体见后面的'type说明'

* precision InputNumber（数字输入框）的精度，即小数位数

* readonly InputNumber（数字输入框）只读，和disabled效果类似，样式不一样

* show 表单项显示设置，对象或数组，如：`{key:'name',val:['Ricky','Tom']}`，表示只在name为Ricky或Tom时显示该表单项；如果有多个条件，
用数组装这些条件对象，如：`[{key,val...},{...}]`，它们的关系为且，即所有条件都满足才显示，如果需要条件关系为或，设置表单项showOr为true；
条件的val字段支持一个特殊值`.`,表示该条件key对应字段只要有有效值既满足，有效值意思是 0 或 false 或转为Boolean为 true

* showImg uploadGroup是否以图片方式显示已上传的图片文件

* showMap inputMap是否显示地图，默认`true`

* showOr 表单项各显示条件间关系为或运算

* slotName type为custom的插槽名字，，具体见后面的'type说明'

* step InputNumber（数字输入框）的步长，即每次点组件箭头增大或减小的值，可以是小数

* title 表单项的标题，位于表单左上方，样式见示例

* type 表单项类型，支持：txt、input、input（inputType === 'number'）、select、selectInput、alCascader、orgCascader、radio、
radioGroup、checkbox、checkboxGroup、textarea、upload、date、editor、inputMap、custom

* url 数据接口地址，表单项特殊配置，如机构级联，文件上传时为上传文件的服务器接口地址，具体见后面的'type说明'

* val 表单项值，只有type为txt时有效

* valKey 表单项值为表单中另外一个组件（兄弟项）收集数据中的一个字段，只有type为txt时有效，具体用法见后面的'type说明'

* withCredentials uploadGroup远程上传时是否携带cookie，默认`true`

### type说明
如果觉得下面有些字段描述太过简单，可以参考formData说明里该字段的描述
#### txt 纯文本
* <a href='#labela'>label</a> 标签

* val 值

* valKey 值为另一个兄弟组件收集的valKey对应的字段，响应式

* likeInput 值的样式模拟input样式

* show 显示条件

* showOr 显示条件间关系，设置true时为或运算，默认`false`

* 注意：也可以不传label和val,单纯用来布局占位；没有key值，提交时不会被带上

#### input 输入框
* label 标签

* [key](#keya) 表单项收集的数据在提交时所在字段

* defaultVal 默认值

* maxLength 最大长度限制，不限制则不设置

* placeholder 占位符，默认`'请输入'`

* disabled 禁用该表单项，非响应式，可用updateFormDataT方法更改

* clearable 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认`true`

* show 显示条件

* showOr 显示条件间关系，设置true时为或运算，默认`false`

* numberVal 值转换为number类型

#### input (inputType==='number') 数字输入框
* label 标签

* key 表单项收集的数据在提交时所在字段

* defaultVal 默认值

* max 最大值限制，不限制则不设置

* min 最小值限制，不限制则不设置

* precision 精度

* placeholder 占位符，默认`'请输入'`

* disabled 禁用该表单项，非响应式，可用updateFormDataT方法更改

* clearable 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认`true`

* show 显示条件

* showOr 显示条件间关系，设置true时为或运算，默认`false`

