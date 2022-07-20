## formR
表单组件，支持formData属性定义结构，formRules定义规则，submit方法提交收集到的数据，全局UI组件，直接用

### 属性
* formData 数组，表单结构数据，如：
```
  [
    {
      type: 'input',
      key: 'name',
      label: '名称'
    }
  ]
```
* formRules 对象，表单验证数据，如：
```
  {
    name: {
      required: true
    }
  }
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

* trim 布尔对象，提交数据时是否去掉数据中字符串的首尾空格，默认：`true`

* disabled 布尔对象，禁用整个表单，比如仅需要展示时，默认：`false`
### 事件
* on-submit 表单被提交，返回表单收集的数据

* on-item-change 表单项的值改变，返回对象，包含事件对象和改变的数据

* on-reset 表单被重置，清空按钮被点击时或主动调用重置方法时触发

* on-re-render 表单被重新渲染
### 方法
* resetForm 重置表单，会清空表单值并刷新表单dom，异步方法，表单项默认值不会被清除

* reRenderForm 重新渲染表单，异步方法

* refreshFormDom 刷新表单dom，异步方法

* setItemToValGroup 设置表单项的值，可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示，valGroup为formR组件私有属性，不可直接操作，故有该方法

* updateValGroup 更新表单项的值，只能更新已有字段，valGroup为formR组件私有属性，不可直接操作，故有该方法，传参示例1：`{info:'我是新的提示信息',name:'王五',...}`

* updateFormDataT 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值，formDataT为formR组件私有属性，不可直接操作，故有该方法；
参数为一个对象（改变单个）或数组（改变多个），支持的属性：index-必填-需要改变的formData项的索引值、需要改变的属性，如要改变第二个表单组件的label和title,
则为:`{index:1,label:XXX,title:XX}`。注意：带选项的组件`changeOption`属性为`true`时，不要调用该方法改变formR内部optionUrl，
而应该直接在外面改变绑定到formData的数组对应子项的optionUrl

* reValidate 手动验证表单项

* validate 主动验证整个表单

* getValGroup 获取用户已填数据，和submit有显著区别，submit会校验表单，并提交on-submit事件。

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
* <a name='activeChange'>activeChange</a> 布尔对象，InputNumber（数字输入框）是否实时响应数据，设置为`false`时，只会在失焦时更改数
据，默认:`false`

* <a name='addTime'>addTime</a> 布尔对象，DatePicker不选择时间（只选日期）时，但提交时需要带上时间，给该字段赋值`true`,会自动加上
`00:00:00`，如果是区间，开始时间加`00:00:00`，结束时间加`23:59:59`，默认:`false`

* <a name='asyncOption'>asyncOption</a> 布尔对象，有选项的表单项的待选项数据来源于接口，需配合[optionUrl](#optionUrl)使用，默认:`false`

* <a name='booleanVal'>booleanVal</a> 布尔对象，是否为布尔值，当需要表单项为布尔值时，给该字段赋值`true`，该表单项可接受布尔值，提交
时提交布尔值，注意：需要表单项类型支持（目前仅select单选和radioGroup支持），具体见后面的'type'说明，默认：`false`

* <a name='borrowOption'>borrowOption</a> 字符串，有待选项的表单项，待选项数据来自另一表单项的待选项时（借用），需给该字段赋值另一表
单项的key对应的值

* <a name='buttonType'>buttonType</a> 布尔对象，RadioGroup是否为按钮样式，按钮样式即为一排连在一起的按钮，默认：`false`

* <a name='changeOnSelect'>changeOnSelect</a> 布尔对象，当此项为 true 时，点选每级菜单选项值都会发生变化，默认：`false`

* <a name='changeOption'>changeOption</a> 布尔对象/对象/数组，有待选项的表单项，待选项数据从接口拉取时，拉取地址会改变，给该字段赋值
`true`，需要改变时直接改变[optionUrl](#optionUrl)即可（该场景下直接改变绑定到formData的数组就行，不要调用updateFormDataT改变formR内部optionUrl,
updateFormDataT在此处不适用，详细使用方法见该库示例）；如果地址有的查询条件是另一表单项的值，则给该字段赋值对象，如：
`{valKey:'name',key:'user'}`表示其中一个查询条件是`&user=name表单项的值`，name表单项值改变，optionUrl就会自动改变，就会重新拉取待选项数据；
如果有多个这种条件，用数组存放他们，如：`[{valKey...},{...}]`，多个条件必须都有值才会发起请求，如果某条件可有可无（有值就带上，没有就不要该条件），
则设置该条件`notRequired`属性为`true`
 
* <a name='class'>class</a> 字符串，表单项自定义样式类名，可用于自定义单个formItem独有样式，如果想传多个class，class之间用空格隔开，所有type类型皆支持该属性

* <a name='clearable'>clearable</a> 布尔对象，表单项是否可单独清空，当类型支持时才有效，具体见后面的'type说明'，默认：`true`

* <a name='collectLabel'>collectLabel</a> 对象/数组，选项中除val外的其他字段（如label）连同值一并返回，如：
`collectLabel:{valKey:'label',key:'name'}`，
表示表单被提交时，该表单项选中项的label会以name被一起提交出去。

* <a name='data'>data</a> 对象，uploadGroup远程上传时，一并携带的参数（除了文件）

* <a name='dateType'>dateType</a> 字符串，DatePicker的日期格式，可选值：date、daterange、datetime、datetimerange、year、month，
如：`dateType:'daterange'`，注意：为区间时，需给2个key，如：`key:'start',key2:'end'`

* <a name='dateOptions'>dateOptions</a> 对象，DatePicker选择器额外配置，比如不可选日期与快捷选项，如：
```
  dateOptions: {
    disabledDate(date) {
      return date && date.valueOf() < Date.now() - 86400000
    }
  }
```

* <a name='defaultVal'>defaultVal</a> 表单项的默认值，组件第一次渲染时会带上该值并在UI上回显，不是所有类型都支持该字段，具体见后面的'type说明'

* <a name='defaultVal2'>defaultVal2</a> 另一个默认值，原理同[key2](#key2)，对应的也会有defaultVal3等

* <a name='disabled'>disabled</a> 布尔对象，禁用表单项，因为formData非响应式，自然该字段也非响应式，注意：这和组件props中disabled
不是同一个，默认：`false`

* <a name='disableOptionByOthers'>disableOptionByOthers</a> 字符串/数组，根据其他表单项的值禁用待选项，例如：表单中有一个下拉框的
key为fruit，目标表单项（如这里的fruit）待选项和当前表单项（设置disableOptionByOthers的表单项）待选项一样，`disableOptionByOthers:'fruit'`
表示fruit下拉框已选的选项，当前表单项不可再选（选项被禁用），当然目标表单项type不是非得select，逻辑上只要当前表单项待选项的值和目标表单项
的值相等，待选项就会被禁用；如果有多个条件，用数组存放他们，如：`disableOptionByOthers:['fruit','fruitB']`

* <a name='editable'>editable</a> 布尔对象，InputNumber（数字输入框）是否可编辑，为`false`时,只能通过UI操作，不能通过光标修改，默认：`true`

* <a name='editorConfig'>editorConfig</a> 对象，编辑器配置，参考[wangEditor5 编辑器配置](https://www.wangeditor.com/v5/editor-config.html)

* <a name='filterable'>filterable</a> 布尔对象，是否支持筛选待选项，有的类型默认为真，有的为假，具体见后面的'type说明'

* <a name='format'>format</a> 数组，uploadGroup支持的格式，不限制的话不用设置该字段，如：`['jpg','png']`

* <a name='formatB'>format（date组件）</a> 字符串，指定date组件返回日期格式，无特殊需求时可不传，组件有对应的默认格式，常用值：
`'YYYY'、'MM'、'YYYY-MM-DD'、'YYYY-MM-DD HH:mm:ss'`，具体参考Moment.js官网

* <a name='formatC'>format（time组件）</a> 字符串，指定time组件返回日期格式及操作界面维度，无特殊需求时可不传，组件有对应的默认格式，常用值：
`'HH:mm:ss'、'HH:mm'、'HH'`

* <a name='height'>height</a> 正数/字符串，富文本编辑器Pro编辑区域高度，默认：`300`

* <a name='info'>info</a> 字符串，表单项的提示文字，位于表单项下面，一般为蓝色（在没自定义对应主题颜色时）

* <a name='itemBorder'>itemBorder</a> 布尔对象，RadioGroup选项是否带边框，默认：`false`

* <a name='key'>key</a> 字符串，表单被提交时该项收集的数据所在字段，如：`{type:'input',key:'name'}`,用户输入`'Ricky'`，提交时返回
`{name:'Ricky'}`

* <a name='key2'>key2</a> 字符串，除key以外的另一要收集的数据，如时间区间，key为起始，key2为终止，以此类推，如果有三个数据，则有key3等

* <a name='label'>label</a> 字符串，表单项标签

* <a name='length'>length</a> 数字，uploadGroup支持上传文件的个数限制，不限制则不设置

* <a name='level'>level</a> 数字，层级，表单项特殊配置，如行政区域级联，具体见后面的'type说明'

* <a name='likeInput'>likeInput</a> 布尔对象，表单项右侧区域模拟input样式，只有type为txt时有效，默认：`false`

* <a name='manualUpload'>manualUpload</a> 布尔对象，uploadGroup手动上传（本地上传，采集file对象），默认：`false`

* <a name='mapHeight'>mapHeight</a> 字符串，inputMap的地图高度，默认值：`'250px'`

* <a name='max'>max</a> 数字，表单项最大值，需要类型支持时才生效

* <a name='maxLength'>maxLength</a> 数字，表单项值最大长度，需要类型支持时才生效

* <a name='maxSize'>maxSize</a> 数字，uploadGroup支持上传的文件大小限制，不限制则不设置，注意不要带单位，默认单位kb

* <a name='min'>min</a> 数字，表单项允许最小值，需要类型支持时才生效

* <a name='mode'>mode</a> 字符串，`'default'` 默认模式 - 集成了 wangEditor 所有功能；`'simple'` 简洁模式 - 仅有部分常见功能，但更加简洁易用，默认：`'simple'`

* <a name='multiple'>multiple</a> 布尔对象，Select是否支持多选，默认：`false`

* <a name='numberVal'>numberVal</a> 布尔对象，表单项收集的值自动转换为number类型，需是类似number的字符串才能转，否则收集的值为字符串，
默认：`false`

* <a name='onlyLastVal'>onlyLastVal</a> 布尔对象，只返回最后一级的值，表单项特殊配置，如远程数据级联，具体见后面的'type说明'，默认：
`true`

* <a name='onlyLastLabel'>onlyLastLabel</a> 布尔对象，只显示最后一级的label，表单项特殊配置，如远程数据级联，具体见后面的'type说明'，
默认：`true`

* <a name='options'>options</a> 对象，有待选项的表单项，待选项数据存放在该字段下，[详细说明](#optionsDetail)，如：
`{type:'select',key:'sex',options:[{label:'男',val:1},{label:'女',val:0}]}`

* <a name='optionFilter'>optionFilter</a> Function，筛选待选项的方法，入参是接口请求回来的待选项数据（不包含本地选项），返回处理后的
待选项，如：
```
{
  ...,
  optionFilter(d){return d.filter(e => e.id !== 3)},
  ...
}
```

* <a name='optionLabel'>optionLabel</a> 字符串/数组，有待选项的表单项，待选项数据从接口拉取时，待选项label对应接口数据的字段名，如：
`optionLabel:'name'`；如果选项标签需要展示多个字段，则用数组存放他们，第一字段直接展示，后面字段括号内展示，括号紧跟第一字段。

* <a name='optionUrl'>optionUrl</a> 字符串，有待选项的表单项，待选项数据从接口拉取时，接口地址放在该字段下，需配合
[asyncOption](#asyncOption)、[optionLabel](#optionLabel)、[optionVal](#optionVal)使用，注意：请求方式为get，且不可更改

* <a name='optionVal'>optionVal</a> 字符串，有待选项的表单项，待选项数据从接口拉取时，待选项val对应接口数据的字段名，如：`optionVal:'id'`

* <a name='placeholder'>placeholder</a> 字符串，表单项占位符，不是所有类型都支持该字段，具体见后面的'type说明'

* <a name='precision'>precision</a> 数字，InputNumber（数字输入框）的精度，即小数位数

* <a name='readonly'>readonly</a> 布尔对象，InputNumber（数字输入框）只读，和disabled效果类似，样式不一样，默认：`false`

* <a name='separator'>separator</a> 字符串，label分隔符，默认：`'/'`

* <a name='show'>show</a> 对象/数组/回调函数，表单项显示设置，[详细说明](#showDetail)如：`{key:'name',val:['Ricky','Tom']}`，表示只在
name为Ricky或Tom时显示该表单项；如果有多个条件，用数组装这些条件对象，如：`[{key,val...},{...}]`，它们的关系为且，即所有条件都满足才显
示，如果需要条件关系为或，给表单项[showOr](#showOr)赋值`true`；当给定格式的对象或数组不能满足业务需求时，可传一个回调函数，函数参数为formR的valGroup，
回调函数需要有返回值，当返回值为真时，表单项展示，返回值为假时，表单项隐藏。

* <a name='showImg'>showImg</a> 布尔对象，uploadGroup是否以图片方式显示已上传的图片文件，默认：`false`

* <a name='showMap'>showMap</a> 布尔对象，inputMap是否显示地图，默认：`true`

* <a name='showOr'>showOr</a> 布尔对象，表单项各显示条件间关系为或运算，默认：`false`

* <a name='slotName'>slotName</a> 字符串，type为custom的插槽名字，，具体见后面的'type说明'

* <a name='step'>step</a> 数字，InputNumber（数字输入框）的步长，即每次点表单项箭头增大或减小的值，可以是小数

* <a name='steps'>steps</a> 数组，timePicker选择器下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。默认值：`[]`

* <a name='title'>title</a> 字符串，表单项的标题，位于表单项左上方，样式见示例

* <a name='toolbarConfig'>toolbarConfig</a> 对象，工具栏配置，参考[wangEditor5 工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html)

* <a name='type'>type</a> 字符串，表单项类型，支持：txt、input、inputNumber、select、selectInput、alCascader、asyncCascader、radio、
radioGroup、checkbox、checkboxGroup、textarea、upload、date、time、editor、editorPro、inputMap、custom

* <a name='url'>url</a> 字符串，数据接口地址，表单项特殊配置，如远程数据级联，文件上传时为上传文件的服务器接口地址，具体见后面的'type说明'

* <a name='val'>val</a> 表单项值，只有type为txt时有效

* <a name='valKey'>valKey</a> 字符串，表单项值为表单中另外一个表单项（兄弟项）收集数据中的一个字段，只有type为txt时有效，具体用法见后
面的'type说明'

* <a name='withCredentials'>withCredentials</a> 布尔对象，uploadGroup远程上传时是否携带cookie，默认：`true`

* <a name='uploadImgMaxSize'>uploadImgMaxSize</a> 数字，限制上传图片大小，editor组件独有属性，默认：102400(100k)

* <a name='uploadImgMaxLength'>uploadImgMaxLength</a> 数字，限制一次最多能传几张图片，editor组件独有属性，默认：10

* <a name='uploadImgShowBase64'>uploadImgShowBase64</a> 布尔对象，是否使用base64作为本地图片上传保存方式，editor组件独有属性，默认：true

* <a name='uploadImgServe'>uploadImgServe</a> 对象，具体参考[editor](../editor/README.md)组件的README.md文档，editor组件独有属性

### formData元素字段详细说明

#### <a name='optionsDetail'>options</a>
* label 字符串，待选项标签，即用户看到的

* val 字符串/数字，待选项的值，即需要收集的，注意：若为数字，如果有验证，验证规则中需要加上`type:'number'`，view-design默认验
证类型为string；若表单项值为boolean，需配合`booleanVal:true`使用，该字段还是数字（因为如radioGroup和select的选项不支持boolean），
一般用`1`和`0`，提交表单项时组件会自动将其转为boolean

* icon 字符串，待选项的图标，仅checkbox和checkboxGroup支持，view-design的内置图标

* disabled 布尔对象，待选项是否禁用，默认：`false`

#### <a name='showDetail'>show</a>
* key 字符串，目标表单项（控制当前表单项是否展示的表单项）的key，当前表单项即设置show属性的表单项，如：`key:'age'`

* val 数组，目标表单项为哪些值时，满足条件，如：`[1,2]`表示age为1或2时，满足条件；该字段接受一个特殊值`'.'`，表示该条件key对应字段只要有
有效值既满足，有效值意思是 0 或 false 或转为Boolean结果为 true

* reg 正则表达式，当val这个字段已经不能满足业务需求时，可启用该值传递正则表达式（val无需再传值），当正则表达式匹配给定key对应的值成功时，表单项展示，否则隐藏。

注意：如果条件有多个，show的类型变为多个条件对象组成的数组；多个条件间关系为且，如果想要为或，需设置[showOr](#showOr)为`true`

### type说明

如果觉得下面有些字段描述太过简单，可以参考formData说明里该字段的描述

#### txt 纯文本
* [label](#label) 标签

* [val](#val) 值

* [valKey](#valKey) 值为另一个兄弟表单项收集的valKey对应的字段，响应式

* [likeInput](#likeInput) 值的样式模拟input样式，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [class](#class) 单个表单项的自定义样式类名

* 注意：也可以不传label和val,单纯用来布局占位；没有key值，提交时不会被带上

#### input 输入框
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [maxLength](#maxLength) 最大长度限制，不限制则不设置

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [clearable](#clearable) 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### inputNumber 数字输入框
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [max](#max) 最大值限制，不限制则不设置

* [min](#min) 最小值限制，不限制则不设置

* [precision](#precision) 精度

* [step](#step) 步长

* [readonly](#readonly) 只读，默认：`false`

* [editable](#editable) 可编辑，默认：`true`

* [activeChange](#activeChange) 是否实时响应数据

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [clearable](#clearable) 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### select 下拉选择框
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [booleanVal](#booleanVal) 表单项值为布尔类型，传入的会被自动转换成boolean，输出也是boolean，默认：`false`

* [options](#options) 待选项

* [borrowOption](#borrowOption) 借用待选项

* [collectLabel](#collectLabel) 收集选项中其他字段（除val外）

* [filterable](#filterable) 是否可筛选待选项，默认：`false`

* [multiple](#multiple) 是否可筛选待选项，默认：`false`

* [asyncOption](#asyncOption) 待选项数据来源于接口，默认：`false`

* [optionUrl](#optionUrl) 待选项数据来源接口地址

* [optionLabel](#optionLabel) 待选项label对应接口数据的字段名

* [optionVal](#optionVal) 待选项val对应接口数据的字段名

* [optionFilter](#optionFilter) 待选项筛选方法

* [disableOptionByOthers](#disableOptionByOthers) 根据其他表单项的值禁用待选项

* [changeOption](#changeOption) 待选项数据来源于接口，接口地址是否改变

* [placeholder](#placeholder) 占位符，默认：`'请选择'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [clearable](#clearable) 表单项是否可单独清空，为true且选择框有值时，光标移动到选择框尾部会有小叉，点击清空，默认：`true`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### selectInput 选择输入框
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段，如果有默认值，默认值会存放在该字段下，该表单项该字段是会随着选择框的值改变的，key改变时表
单项值会自动清空

* [defaultVal](#defaultVal) 默认值

* [options](#options) 待选项

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [clearable](#clearable) 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### alCascader 行政区域级联
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值，行政区域编码，如：`500103000000`

* [level](#level) 行政区域级数，默认：`2`，表示到区县级；0-省级，1-市级，2-区县，该库自1.1.37版本以后不再支持街道选取（level:3不再支持），因为数据来源area-data自2.0版本以后不再包含街道数据

* [changeOnSelect](#changeOnSelect) 布尔对象，当此项为 true 时，点选每级菜单选项值都会发生变化，默认：`false`

* [filterable](#filterable) 是否支持筛选待选项，默认：`true`

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### asyncCascader 远程数据级联
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [url](#url) 节点数据接口地址

* [optionVal](#optionVal) 节点val对应接口数据字段

* [optionLabel](#optionLabel) 节点label对应接口数据字段，注意：不同于其他表单项，这里仅支持字符串

* [optionFilter](#optionFilter) 自定义待选项筛选逻辑，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理）

* [onlyLastVal](#onlyLastVal) 该字段为`true`时，只返回选中的最后一级的值，否则返回数组，数组包含每一级的值，默认：`true`

* [onlyLastLabel](#onlyLastLabel) 该字段为`true`时，只显示选中的最后一级label，否则显示每一级的label，用分隔符隔开，默认：`true`

* [filterable](#filterable) 是否支持筛选待选项，默认：`false`

* [separator](#separator) 选中的label分隔符，显示全部label时生效，默认：`'/'`

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### radio 单选框
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

* 注意：该类型表单项值为boolean

#### radioGroup 单选框组
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [options](#options) 待选项

* [borrowOption](#borrowOption) 借用待选项

* [collectLabel](#collectLabel) 收集选项中其他字段（除val外）

* [asyncOption](#asyncOption) 待选项数据来源于接口，默认：`false`

* [optionUrl](#optionUrl) 待选项数据来源接口地址

* [optionLabel](#optionLabel) 待选项label对应接口数据的字段名

* [optionVal](#optionVal) 待选项val对应接口数据的字段名

* [optionFilter](#optionFilter) 待选项筛选方法

* [disableOptionByOthers](#disableOptionByOthers) 根据其他表单项的值禁用待选项

* [changeOption](#changeOption) 待选项数据来源于接口，接口地址是否改变

* [booleanVal](#booleanVal) 表单项值为布尔类型，传入的会被自动转换成boolean，输出也是boolean，默认：`false`

* [buttonType](#buttonType) 以按钮组的样式展示，默认：`false`

* [itemBorder](#itemBorder) 选项带边框（不可和buttonType同时开启），默认：`false`

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### checkbox 复选框
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [class](#class) 单个表单项的自定义样式类名

* 注意：该类型表单项值为boolean

#### checkboxGroup 复选框组
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [options](#options) 待选项

* [borrowOption](#borrowOption) 借用待选项

* [collectLabel](#collectLabel) 收集选项中其他字段（除val外）

* [asyncOption](#asyncOption) 待选项数据来源于接口，默认：`false`

* [optionUrl](#optionUrl) 待选项数据来源接口地址

* [optionLabel](#optionLabel) 待选项label对应接口数据的字段名

* [optionVal](#optionVal) 待选项val对应接口数据的字段名

* [optionFilter](#optionFilter) 待选项筛选方法

* [disableOptionByOthers](#disableOptionByOthers) 根据其他表单项的值禁用待选项

* [changeOption](#changeOption) 待选项数据来源于接口，接口地址是否改变

* [buttonType](#buttonType) 以按钮组的样式展示，默认：`false`

* [itemBorder](#itemBorder) 选项带边框（不可和buttonType同时开启），默认：`false`

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

* 注意：该类型表单项值为数组

#### textarea 文本框
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [maxLength](#maxLength) 最大长度限制，不限制则不设置

* [numberVal](#numberVal) 值转换为number类型

* [placeholder](#placeholder) 占位符，默认：`'请输入'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [clearable](#clearable) 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### upload 上传组件
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值，仅远程上传时支持默认值，为文件id

* [url](#url) 远程上传接口地址

* [data](#data) 远程上传接口请求参数（不包含file对象）

* [withCredentials](#withCredentials) 远程上传接口请求是否带上cookie，默认：`true`

* [manualUpload](#manualUpload) 本地上传，采集file对象，默认：`false`

* [format](#format) 上传文件格式限制，后缀名组成的数组，不限制则不设置

* [maxSize](#maxSize) 上传文件大小限制，单位kb，配置时写数字，不要带单位

* [length](#length) 上传文件个数限制

* [showImg](#showImg) 以缩略图方式展示已上传文件，如果有文件不是图片，则自动切换成列表展示，默认：`false`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

* 注意：远程上传时，值为上传成功后接口返回的文件id，或id组成的数组；本地上传时，值为file对象，或file对象组成的数组；远程上传时有诸多限制，
具体参考[uploadGroup](../uploadGroup/README.md)组件的README.md文档

#### date 日期选择器
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [defaultVal2](#defaultVal2) 默认值2，为区间时间时，结束时间默认值

* [dateType](#dateType) 日期类型，可选值：`'date'、'daterange'、'datetime'、'datetimerange'、'year'、'month'`

* [format](#formatB) 日期格式，不传时使用默认格式，常用值：`'YYYY'、'MM'、'YYYY-MM-DD'、'YYYY-MM-DD HH:mm:ss'`，具体参考Moment.js官网

* [dateOptions](#dateOptions) DatePicker选择器额外配置，比如不可选日期与快捷选项

* [placeholder](#placeholder) 占位符，默认：`'请选择'`

* [clearable](#clearable) 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### time 时间选择器
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [defaultVal2](#defaultVal2) 默认值2，为区间时间时，结束时间默认值

* [dateType](#dateType) 时间类型，可选值：`'time'、'timerange'`

* [format](#formatC) 时间格式（控制返回值的格式和操作界面维度），不传时使用默认格式，常用值：`'HH:mm:ss'、'HH:mm'、'HH'`

* [steps](#steps) timePicker选择器下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。默认值：`[]`

* [placeholder](#placeholder) 占位符，默认：`'请选择'`

* [clearable](#clearable) 表单项是否可单独清空，为true且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### editor 富文本编辑器
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [uploadImgMaxSize](#uploadImgMaxSize) 数字，限制上传图片大小，默认：102400(100k)

* [uploadImgMaxLength](#uploadImgMaxLength) 数字，限制一次最多能传几张图片，默认：10

* [uploadImgShowBase64](#uploadImgShowBase64) 布尔对象，是否使用base64作为本地图片上传保存方式，默认：true

* [uploadImgServe](#uploadImgServe) 对象，具体参考[editor](../editor/README.md)组件的README.md文档

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### editorPro 富文本编辑器Pro
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [toolbarConfig](#toolbarConfig) 对象，工具栏配置，参考[wangEditor5 工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html)

* [editorConfig](#editorConfig) 对象，编辑器配置，参考[wangEditor5 编辑器配置](https://www.wangeditor.com/v5/editor-config.html) 

* [mode](#mode) 字符串，`'default'` 默认模式 - 集成了 wangEditor 所有功能；`'simple'` 简洁模式 - 仅有部分常见功能，但更加简洁易用，默认：`'simple'`

* [height](#height) 正数/字符串，编辑区域高度，默认：`300`

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### inputMap 地图组件
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段，经度

* [key2](#key2) 表单项收集的数据在提交时所在字段，纬度

* [defaultVal](#defaultVal) 默认值，经度

* [defaultVal2](#defaultVal2) 默认值2，纬度

* [showMap](#showMap) 显示地图，默认：`true`

* [mapHeight](#mapHeight) 地图高度，默认：`'250px'`

* [placeholder](#placeholder) 占位符，默认：`'搜索'`

* [disabled](#disabled) 禁用该表单项，非响应式，可用updateFormDataT方法更改，默认：`false`

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [title](#title) 表单项的标题，位于表单项左上方

* [class](#class) 单个表单项的自定义样式类名

#### custom 自定义组件
* [label](#label) 标签

* [key](#key) 表单项收集的数据在提交时所在字段

* [defaultVal](#defaultVal) 默认值

* [slotName](#slotName) 插槽名字，自定义组件通过插槽接入表单

* [show](#show) 显示条件

* [showOr](#showOr) 显示条件间关系，设置true时为或运算，默认：`false`

* [info](#info) 表单项的提示文字，位于表单项下面

* [class](#class) 单个表单项的自定义样式类名

* 注意：自定义组件限制非常少，理论上想放什么进来都行，需遵循几点，具名插槽模板放在formR组件标签内，将valGroup（表单组件收集值的对象）传进模板，如：
```
  <form-r>
    <template #myFormItem='{valGroup}'>
      <i-switch v-model='valGroup.myKey'/>
    </template>
  </form-r>
  
  其中myFormItem为slotName的值，myKey为key的值
```
* 注意：有时候自定义组件不靠formR组件收集值（仅展示或有独立的采集值的逻辑），则不需要设置key，也不支持defaultVal，如：
```
  <formR>
    <template slot='myFormItem2'>
      <Table :columns='columns' :data='data'/>
    </template>
  </formR>
  
  其中myFormItem2为slotName的值，columns和data是使用formR组件的地方定义的table的数据
```