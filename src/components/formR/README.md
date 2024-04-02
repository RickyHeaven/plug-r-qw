## formR

表单组件，支持 formData 属性定义结构，formRules 定义规则，submit 方法提交收集到的数据，全局 UI 组件，直接用

### 属性

- formData 数组，表单结构数据，如：

```
  [
    {
      type: 'input',
      key: 'name',
      label: '名称'
    }
  ]
```

注意：从@zhangqingcq/plug-r-qw@1.3.0开始，formData 支持二维数组，为`分组表单`（单个表单内部表单项有分组，用于支持表单项布局和样式控制）结构数据，如：

```
  [
    [
      {
        type: 'input',
        key: 'name',
        label: '姓名'
      },
      {
        type: 'input',
        key: 'sex',
        label: '性别'
      }
    ],
    [
      {
        type: 'input',
        key: 'post',
        label: '应聘岗位'
      },
      {
        type: 'input',
        key: 'pay',
        label: '期望薪资'
      }
    ]
  ]
```

这是一个表单，但是内部表单项可以分为“基本信息”和“应聘信息”两组，并在布局和样式上进行区分，具体可参考库内示例项目`formTeam`。

- formRules 对象，表单验证数据，如：

```
  {
    name: {
      required: true
    }
  }
```

- showMessage 布尔对象，是否显示校验信息，默认：`true`

- labelWidth 数字，表单项标签宽度，默认：`160`

- contentWidth 字符串，表单项内容宽度，默认：`'70%'`

- itemWidth 数字，表单项内容宽度，用于行内表单，默认：`200`

- inline 布尔对象，是否为行内表单，默认：`false`

- teamClass 字符串，分组表单-组容器的 class，用于布局和样式控制，默认：`formTeamBox`

- showLongOkBt 布尔对象，是否展示长确定按钮，默认：`false`

- longOkBtTxt 字符串，长确定按钮内容，默认：`'确定'`

- showInlineOkBt 布尔对象，是否展示行内短确定按钮，默认：`false`

- inlineOkBtTxt 字符串，短确定按钮内容，默认：`'确定'`

- showInlineClearBt 布尔对象，是否展示行内短清空按钮，默认：`false`

- inlineClearBtTxt 字符串，短清空按钮内容，默认：`'清空'`

- btnLoading 布尔对象，提交按钮显示 loading，默认：`false`

- trim 布尔对象，提交数据时是否去掉数据中字符串的首尾空格，默认：`true`

- disabled 布尔对象，禁用整个表单，比如仅需要展示时，默认：`false`

### 事件

- on-submit 表单被提交，返回表单收集的数据

- on-item-change 表单项的值改变，返回对象，包含事件对象和改变的数据

- on-reset 表单被重置，清空按钮被点击时或主动调用重置方法时触发

- on-re-render 表单被重新渲染

### 方法

- resetForm 重置表单，会清空表单值并刷新表单 dom，异步方法，表单项默认值不会被清除

- reRenderForm 重新渲染表单，异步方法

- refreshFormDom 刷新表单 dom，异步方法

- setItemToValGroup 设置表单项的值，可添加新字段，例如添加隐藏字段，需要提交这个值，但页面不展示，valGroup 为 formR 组件私有属性，不可直接操作，故有该方法

- updateValGroup 更新表单项的值，只能更新已有字段，valGroup 为 formR 组件私有属性，不可直接操作，故有该方法，传参示例 1：`{info:'我是新的提示信息',name:'王五',...}`

- updateFormDataT 更新表单结构，例如设置或取消禁用,或者给 type 为 txt 的表单项（没有 key）赋值，formDataT 为 formR 组件私有属性，不可直接操作，故有该方法；参数为一个对象（改变单个）或数组（改变多个），支持的属性：index-必填-需要改变的 formData 项的索引值、indexB-当表单为`分组表单`时必填（表示表单项的二位数组索引第二位）、需要改变的属性，如要改变第二个表单组件的 label 和 title, 则为:`{index:1,label:XXX,title:XX}`。注意：带选项的组件`changeOption`属性为`true`时，不要调用该方法改变 formR 内部 optionUrl，而应该直接在外面改变绑定到 formData 的数组对应子项的 optionUrl

- reValidate 手动验证表单项

- validate 主动验证整个表单

- getValGroup 获取用户已填数据，和 submit 有显著区别，submit 会校验表单，并提交 on-submit 事件。

- changeLoading 主动改变表单提交按钮 loading 状态，在开启 btnLoading 的前提下

- submit 触发提交事件，一般不需要调用，会通过组件内部提交按钮触发

### 注意

- 不要调用组件私有方法，除非你非常清楚调用不会导致未知错误

- 组件的 formData 属性和 formRules 属性并非响应式，如果改变了这两个属性，可以调用 reRenderForm 方法重新渲染组件

- 在 formData 和 formRules 没有变化的情况下，只需要调用 resetForm 方法即可重置组件

- 在某些情况下，如更改了 formRules，但又不想重新渲染组件（要保留用户操作等），验证信息等不会更新，只需要调用 refreshFormDom 方法刷新 dom (不要调用 validate，否则会发生如后面没填的必填项都会变红等非预期表现)

- 组件除了 props 里的属性，formData 还支持丰富的配置，具体用法可以参考示例

- 短按钮和长按钮不要同时开启

### formData 元素支持字段说明（按字母升序）

- <a name='activeChange'>activeChange</a> 布尔对象，InputNumber（数字输入框）是否实时响应数据，设置为`false`时，只会在失焦时更改数据，默认:`false`

- <a name='addTime'>addTime</a> 布尔对象，DatePicker 不选择时间（只选日期）时，但提交时需要带上时间，给该字段赋值`true`,会自动加上 `00:00:00`，如果是区间，开始时间加`00:00:00`，结束时间加`23:59:59`，默认:`false`

- <a name='append'>append</a> 字符串，type 为 input 的表单项输入框头部内容。

- <a name='asyncOption'>asyncOption</a> 布尔对象，有选项的表单项的待选项数据来源于接口，需配合[optionUrl](#optionUrl)使用，默认:`false`

- <a name='autosize'>autosize</a> 对象，自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }，默认:`{minRows:2}`

- <a name='booleanVal'>booleanVal</a> 布尔对象，是否为布尔值，当需要表单项为布尔值时，给该字段赋值`true`，该表单项可接受布尔值，提交时提交布尔值，注意：需要表单项类型支持（目前仅 select 单选和 radioGroup 支持），具体见后面的'type'说明，默认：`false`

- <a name='borrowOption'>borrowOption</a> 字符串，有待选项的表单项，待选项数据来自另一表单项的待选项时（借用），需给该字段赋值另一表单项的 key 对应的值

- <a name='buttonType'>buttonType</a> 布尔对象，RadioGroup 是否为按钮样式，按钮样式即为一排连在一起的按钮，默认：`false`

- <a name='changeOnSelect'>changeOnSelect</a> 布尔对象，当此项为 true 时，点选每级菜单选项值都会发生变化，默认：`false`

- <a name='changeOption'>changeOption</a> 布尔对象/对象/数组，有待选项的表单项，待选项数据从接口拉取时，拉取地址会改变，给该字段赋值 `true`，需要改变时直接改变[optionUrl](#optionUrl)即可（该场景下直接改变绑定到 formData 的数组就行，不要调用 updateFormDataT 改变 formR 内部 optionUrl, updateFormDataT 在此处不适用，详细使用方法见该库示例）；如果地址有的查询条件是另一表单项的值，则给该字段赋值对象，如： `{valKey:'name',key:'user'}`表示其中一个查询条件是`&user=name表单项的值`，name 表单项值改变，optionUrl 就会自动改变，就会重新拉取待选项数据；如果有多个这种条件，用数组存放他们，如：`[{valKey...},{...}]`，多个条件必须都有值才会发起请求，如果某条件可有可无（有值就带上，没有就不要该条件），则设置该条件`notRequired`属性为`true`

- <a name='class'>class</a> 字符串，表单项自定义样式类名，可用于自定义单个 formItem 独有样式，如果想传多个 class，class 之间用空格隔开，所有 type 类型皆支持该属性

- <a name='clearable'>clearable</a> 布尔对象，表单项是否可单独清空，当类型支持时才有效，具体见后面的'type 说明'，默认：`true`

- <a name='collectLabel'>collectLabel</a> 对象/数组，选项中除 val 外的其他字段（如 label）连同值一并返回，如： `collectLabel:{valKey:'label',key:'name'}`，表示表单被提交时，该表单项选中项的 label 会以 name 被一起提交出去。

- <a name='data'>data</a> 对象，uploadGroup 远程上传时，一并携带的参数（除了文件）

- <a name='dateType'>dateType</a> 字符串，DatePicker 的日期格式，可选值：date、daterange、datetime、datetimerange、year、month，如：`dateType:'daterange'`，注意：为区间时，需给 2 个 key，如：`key:'start',key2:'end'`

- <a name='dateOptions'>dateOptions</a> 对象，DatePicker 选择器额外配置，比如不可选日期与快捷选项，如：

```
  dateOptions: {
    disabledDate(date) {
      return date?.valueOf() < Date.now() - 86400000
    }
  }
```

- <a name='defaultVal'>defaultVal</a> 表单项的默认值，组件第一次渲染时会带上该值并在 UI 上回显，不是所有类型都支持该字段，具体见后面的'type 说明'

- <a name='defaultVal2'>defaultVal2</a> 另一个默认值，原理同[key2](#key2)，对应的也会有 defaultVal3 等

- <a name='disabled'>disabled</a> 布尔对象，禁用表单项，因为 formData 非响应式，自然该字段也非响应式，注意：这和组件 props 中 disabled 不是同一个，默认：`false`

- <a name='disableOptionByOthers'>disableOptionByOthers</a> 字符串/数组，根据其他表单项的值禁用待选项，例如：表单中有一个下拉框的 key 为 fruit，目标表单项（如这里的 fruit）待选项和当前表单项（设置 disableOptionByOthers 的表单项）待选项一样，`disableOptionByOthers:'fruit'` 表示 fruit 下拉框已选的选项，当前表单项不可再选（选项被禁用），当然目标表单项 type 不是非得 select，逻辑上只要当前表单项待选项的值和目标表单项的值相等，待选项就会被禁用；如果有多个条件，用数组存放他们，如：`disableOptionByOthers:['fruit','fruitB']`

- <a name='editable'>editable</a> 布尔对象，InputNumber（数字输入框）是否可编辑，为`false`时,只能通过 UI 操作，不能通过光标修改，默认：`true`

- <a name='editorConfig'>editorConfig</a> 对象，编辑器配置，参考[wangEditor5 编辑器配置](https://www.wangeditor.com/v5/editor-config.html)

- <a name='filterable'>filterable</a> 布尔对象，是否支持筛选待选项，有的类型默认为真，有的为假，具体见后面的'type 说明'

- <a name='format'>format</a> 数组，uploadGroup 支持的格式，不限制的话不用设置该字段，如：`['jpg','png']`

- <a name='formatB'>format（date 组件）</a> 字符串，指定 date 组件返回日期格式，无特殊需求时可不传，组件有对应的默认格式，常用值： `'YYYY'、'MM'、'YYYY-MM-DD'、'YYYY-MM-DD HH:mm:ss'`，具体参考 Moment.js 官网

- <a name='formatC'>format（time 组件）</a> 字符串，指定 time 组件返回日期格式及操作界面维度，无特殊需求时可不传，组件有对应的默认格式，常用值： `'HH:mm:ss'、'HH:mm'、'HH'`

- <a name='height'>height</a> 正数/字符串，富文本编辑器 Pro 编辑区域高度，默认：`300`

- <a name='icon'>icon</a> 字符串，输入框尾部图标

- <a name='info'>info</a> 字符串，表单项的提示文字，位于表单项下面，一般为蓝色（在没自定义对应主题颜色时）

- <a name='inputType'>inputType</a> 字符串，表单项 type=input 时，可指定输入框类型(开启 password=true 时，inputType 自动变为 password)，可选值同 h5 原生 input 的 type，以页面实际表现为准，不同值使用可靠性需自己验证，默认值：`'text'`

- <a name='itemBorder'>itemBorder</a> 布尔对象，RadioGroup 选项是否带边框，默认：`false`

- <a name='key'>key</a> 字符串，表单被提交时该项收集的数据所在字段，如：`{type:'input',key:'name'}`,用户输入`'Ricky'`，提交时返回 `{name:'Ricky'}`

- <a name='key2'>key2</a> 字符串，除 key 以外的另一要收集的数据，如时间区间，key 为起始，key2 为终止，以此类推，如果有三个数据，则有 key3 等

- <a name='label'>label</a> 字符串，表单项标签

- <a name='length'>length</a> 数字，uploadGroup 支持上传文件的个数限制，不限制则不设置

- <a name='level'>level</a> 数字，层级，表单项特殊配置，如行政区域级联，具体见后面的'type 说明'

- <a name='likeInput'>likeInput</a> 布尔对象，表单项右侧区域模拟 input 样式，只有 type 为 txt 时有效，默认：`false`

- <a name='localOption'>localOption</a> 数组，表单项待选项为远程拉取时，使用该属性可设置固定的本地选项，排在远程选项前面

- <a name='manualUpload'>manualUpload</a> 布尔对象，uploadGroup 手动上传（本地上传，采集 file 对象），默认：`false`

- <a name='mapHeight'>mapHeight</a> 字符串，inputMap 的地图高度，默认值：`'250px'`

- <a name='max'>max</a> 数字，表单项最大值，需要类型支持时才生效

- <a name='maxLength'>maxLength</a> 数字，表单项值最大长度，需要类型支持时才生效

- <a name='maxSize'>maxSize</a> 数字，uploadGroup 支持上传的文件大小限制，不限制则不设置，注意不要带单位，默认单位 kb

- <a name='min'>min</a> 数字，表单项允许最小值，需要类型支持时才生效

- <a name='mode'>mode</a> 字符串，`'default'` 默认模式 - 集成了 wangEditor 所有功能；`'simple'` 简洁模式 - 仅有部分常见功能，但更加简洁易用，默认：`'simple'`

- <a name='multiple'>multiple</a> 布尔对象，Select 是否支持多选，默认：`false`

- <a name='numberVal'>numberVal</a> 布尔对象，表单项收集的值自动转换为`number`类型，需是类似`number`的字符串才能转(如：`'32.2'`、`'-13.9'`)，否则收集的值为字符串，默认：`false`

- <a name='onlyLastVal'>onlyLastVal</a> 布尔对象，只返回最后一级的值，表单项特殊配置，如远程数据级联，具体见后面的'type 说明'，默认： `true`

- <a name='onlyLastLabel'>onlyLastLabel</a> 布尔对象，只显示最后一级的 label，表单项特殊配置，如远程数据级联，具体见后面的'type 说明'，默认：`true`

- <a name='options'>options</a> 数组，有待选项的表单项，待选项数据存放在该字段下，[详细说明](#optionsDetail)，如： `{type:'select',key:'sex',options:[{label:'男',val:1},{label:'女',val:0}]}`

- <a name='optionFilter'>optionFilter</a> Function，筛选待选项的方法，入参是接口请求回来的待选项数据（不包含本地选项），返回处理后的待选项，如：

```
{
  ...,
  optionFilter(d){return d.filter(e => e.id !== 3)},
  ...
}
```

- <a name='optionLabel'>optionLabel</a> 字符串/数组，有待选项的表单项，待选项数据从接口拉取时，待选项 label 对应接口数据的字段名，如： `optionLabel:'name'`；如果选项标签需要展示多个字段，则用数组存放他们，第一字段直接展示，后面字段括号内展示，括号紧跟第一字段。

- <a name='optionUrl'>optionUrl</a> 字符串，有待选项的表单项，待选项数据从接口拉取时，接口地址放在该字段下，需配合 [asyncOption](#asyncOption)、[optionLabel](#optionLabel)、[optionVal](#optionVal)使用，注意：请求方式为 get，且不可更改

- <a name='optionVal'>optionVal</a> 字符串，有待选项的表单项，待选项数据从接口拉取时，待选项 val 对应接口数据的字段名，如：`optionVal:'id'`

- <a name='password'>password</a> 布尔对象，是否显示切换密码图标，仅 input 支持，开启该属性输入框 clearable 自动变为 false，默认：`false`

- <a name='placeholder'>placeholder</a> 字符串，表单项占位符，不是所有类型都支持该字段，具体见后面的'type 说明'

- <a name='precision'>precision</a> 数字，InputNumber（数字输入框）的精度，即小数位数

- <a name='prefix'>prefix</a> 字符串，输入框头部图标

- <a name='prepend'>prepend</a> 字符串，type 为 input 的表单项输入框尾部内容。

- <a name='readonly'>readonly</a> 布尔对象，InputNumber（数字输入框）只读，和 disabled 效果类似，样式不一样，默认：`false`

- <a name='separator'>separator</a> 字符串，label 分隔符，默认：`'/'`

- <a name='show'>show</a> 对象/数组/回调函数，表单项显示设置，[详细说明](#showDetail)如：`{key:'name',val:['Ricky','Tom']}`，表示只在 name 为 Ricky 或 Tom 时显示该表单项；如果有多个条件，用数组装这些条件对象，如：`[{key,val...},{...}]`，它们的关系为且，即所有条件都满足才显示，如果需要条件关系为或，给表单项[showOr](#showOr)赋值`true`；当给定格式的对象或数组不能满足业务需求时，可传一个回调函数，函数参数为`formR`的`valGroup`，回调函数需要有返回值，当返回值为真时，表单项展示，返回值为假时，表单项隐藏。

- <a name='showImg'>showImg</a> 布尔对象，uploadGroup 是否以图片方式显示已上传的图片文件，默认：`false`

- <a name='showMap'>showMap</a> 布尔对象，inputMap 是否显示地图，默认：`true`

- <a name='showOr'>showOr</a> 布尔对象，表单项各显示条件间关系为或运算，默认：`false`

- <a name='showWordLimit'>showWordLimit</a> 布尔对象，是否显示输入字数统计，可以配合 maxlength 使用，默认：`false`

- <a name='slotName'>slotName</a> 字符串，type 为 custom、input 的插槽名字，具体见后面的'type 说明'

- <a name='slotPosition'>slotPosition</a> 字符串，type 为 input 的插槽位置，如：`prepend`、`append`，目前只支持这两个值，具体可参考示例项目的`formTeam`示例

- <a name='step'>step</a> 数字，InputNumber（数字输入框）的步长，即每次点表单项箭头增大或减小的值，可以是小数

- <a name='steps'>steps</a> 数组，timePicker 选择器下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。默认值：`[]`

- <a name='suffix'>suffix</a> 字符串，输入框尾部图标

- <a name='title'>title</a> 字符串，表单项的标题，位于表单项左上方，样式见示例

- <a name='toolbarConfig'>toolbarConfig</a> 对象，工具栏配置，参考[wangEditor5 工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html)

- <a name='type'>type</a> 字符串，表单项类型，支持：txt、input、inputNumber、select、selectInput、alCascader、asyncCascader、radio、radioGroup、checkbox、checkboxGroup、textarea、upload、date、time、monthRange、editor、editorPro、inputMap、custom

- <a name='url'>url</a> 字符串，数据接口地址，表单项特殊配置，如远程数据级联，文件上传时为上传文件的服务器接口地址，具体见后面的'type 说明'

- <a name='val'>val</a> 表单项值，只有 type 为 txt 时有效

- <a name='valKey'>valKey</a> 字符串，表单项值为表单中另外一个表单项（兄弟项）收集数据中的一个字段，只有 type 为 txt 时有效，具体用法见后面的'type 说明'

- <a name='withCredentials'>withCredentials</a> 布尔对象，uploadGroup 远程上传时是否携带 cookie，默认：`true`

- <a name='uploadImgMaxSize'>uploadImgMaxSize</a> 数字，限制上传图片大小，editor 组件独有属性，默认：102400(100k)

- <a name='uploadImgMaxLength'>uploadImgMaxLength</a> 数字，限制一次最多能传几张图片，editor 组件独有属性，默认：10

- <a name='uploadImgShowBase64'>uploadImgShowBase64</a> 布尔对象，是否使用 base64 作为本地图片上传保存方式，editor 组件独有属性，默认：true

- <a name='uploadImgServe'>uploadImgServe</a> 对象，具体参考[editor](../editor/README.md)组件的 README.md 文档，editor 组件独有属性

### formData 元素字段详细说明

#### <a name='optionsDetail'>options</a>

- label 字符串，待选项标签，即用户看到的

- val 字符串/数字，待选项的值，即需要收集的，注意：若为数字，如果有验证，验证规则中需要加上`type:'number'`，view-design 默认验证类型为 string；若表单项值为 boolean，需配合`booleanVal:true`使用，该字段还是数字（因为如 radioGroup 和 select 的选项不支持 boolean），一般用`1`和`0`，提交表单项时组件会自动将其转为 boolean

- icon 字符串，待选项的图标，仅 checkbox 和 checkboxGroup 支持，view-design 的内置图标

- disabled 布尔对象，待选项是否禁用，默认：`false`

#### <a name='showDetail'>show</a>

- key 字符串，目标表单项（控制当前表单项是否展示的表单项）的 key，当前表单项即设置 show 属性的表单项，如：`key:'age'`

- val 数组，目标表单项为哪些值时，满足条件，如：`[1,2]`表示 age 为 1 或 2 时，满足条件；该字段接受一个特殊值`'.'`，表示该条件 key 对应字段只要有有效值既满足，有效值意思是`0` `false`或转为 Boolean 结果为`true`的值

- reg 正则表达式，当 val 这个字段已经不能满足业务需求时，可用`reg`传递正则表达式（val 无需再传值），当正则表达式匹配给定 key 对应的值成功时，表单项展示，否则隐藏。

注意：如果条件有多个，show 的类型变为多个条件对象组成的数组；多个条件间关系为且，如果想要为或，需设置[showOr](#showOr)为`true`

### type 说明

如果觉得下面有些字段描述太过简单，可以参考 formData 说明里该字段的描述

#### txt 纯文本

- [label](#label) 标签

- [val](#val) 值

- [valKey](#valKey) 值为另一个兄弟表单项收集的 valKey 对应的字段，响应式

- [likeInput](#likeInput) 值的样式模拟 input 样式，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [class](#class) 单个表单项的自定义样式类名

- 注意：也可以不传 label 和 val,单纯用来布局占位；没有 key 值，提交时不会被带上

#### input 输入框

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [maxLength](#maxLength) 最大长度限制，不限制则不设置

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [inputType](#inputType) 字符串，表单项 type=input 时，可指定输入框类型(开启 password=true 时，inputType 自动变为 password)，默认值：`'text'`

- [password](#password) 布尔对象，是否显示切换密码图标，默认：`false`

- [prepend](#prepend) 字符串，输入框头部内容

- [append](#append) 字符串，输入框尾部内容

- [slotName](#slotName) 插槽名字，自定义内容通过插槽接入输入框，如自定义单位等，名字随意取，一个 formData 里不能有重复的 slotName

- [slotPosition](#slotPosition) 插槽位置，指定输入框插槽，如`'prepend','append'`等，相当于 view-design 的 input 组件 slot 名字，使用方法参考 view-design 的 input 混合型输入框文档

- [icon](#icon) 字符串，输入框尾部图标

- [prefix](#prefix) 字符串，输入框头部图标

- [suffix](#suffix) 字符串，输入框尾部图标

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [clearable](#clearable) 表单项是否可单独清空，为 true 且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### inputNumber 数字输入框

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [max](#max) 最大值限制，不限制则不设置

- [min](#min) 最小值限制，不限制则不设置

- [precision](#precision) 精度

- [step](#step) 步长

- [readonly](#readonly) 只读，默认：`false`

- [editable](#editable) 可编辑，默认：`true`

- [activeChange](#activeChange) 是否实时响应数据

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [clearable](#clearable) 表单项是否可单独清空，为 true 且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### select 下拉选择框

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [booleanVal](#booleanVal) 表单项值为布尔类型，传入的会被自动转换成 boolean，输出也是 boolean，默认：`false`

- [options](#options) 待选项

- [borrowOption](#borrowOption) 借用待选项

- [collectLabel](#collectLabel) 收集选项中其他字段（除 val 外）

- [filterable](#filterable) 是否可筛选待选项，默认：`false`

- [multiple](#multiple) 是否可筛选待选项，默认：`false`

- [asyncOption](#asyncOption) 待选项数据来源于接口，默认：`false`

- [optionUrl](#optionUrl) 待选项数据来源接口地址

- [optionLabel](#optionLabel) 待选项 label 对应接口数据的字段名

- [optionVal](#optionVal) 待选项 val 对应接口数据的字段名

- [localOption](#localOption) 数组，表单项待选项为远程拉取时，使用该属性可设置固定的本地选项，排在远程选项前面

- [optionFilter](#optionFilter) 待选项筛选方法

- [disableOptionByOthers](#disableOptionByOthers) 根据其他表单项的值禁用待选项

- [changeOption](#changeOption) 待选项数据来源于接口，接口地址是否改变

- [placeholder](#placeholder) 占位符，默认：`'请选择'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [clearable](#clearable) 表单项是否可单独清空，为 true 且选择框有值时，光标移动到选择框尾部会有小叉，点击清空，默认：`true`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### selectInput 选择输入框

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段，如果有默认值，默认值会存放在该字段下，该表单项该字段是会随着选择框的值改变的，key 改变时表单项值会自动清空

- [defaultVal](#defaultVal) 默认值

- [options](#options) 待选项

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [clearable](#clearable) 表单项是否可单独清空，为 true 且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### alCascader 行政区域级联

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值，行政区域编码，如：`500103000000`

- [level](#level) 行政区域级数，默认：`2`，表示到区县级；0-省级，1-市级，2-区县，该库自 1.1.37 版本以后不再支持街道选取（level:3 不再支持），因为数据来源 area-data 自 2.0 版本以后不再包含街道数据

- [changeOnSelect](#changeOnSelect) 布尔对象，当此项为 true 时，点选每级菜单选项值都会发生变化，默认：`false`

- [filterable](#filterable) 是否支持筛选待选项，默认：`true`

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### asyncCascader 远程数据级联

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [url](#url) 节点数据接口地址

- [optionVal](#optionVal) 节点 val 对应接口数据字段

- [optionLabel](#optionLabel) 节点 label 对应接口数据字段，注意：不同于其他表单项，这里仅支持字符串

- [optionFilter](#optionFilter) 自定义待选项筛选逻辑，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理）

- [onlyLastVal](#onlyLastVal) 该字段为`true`时，只返回选中的最后一级的值，否则返回数组，数组包含每一级的值，默认：`true`

- [onlyLastLabel](#onlyLastLabel) 该字段为`true`时，只显示选中的最后一级 label，否则显示每一级的 label，用分隔符隔开，默认：`true`

- [filterable](#filterable) 是否支持筛选待选项，默认：`false`

- [separator](#separator) 选中的 label 分隔符，显示全部 label 时生效，默认：`'/'`

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### radio 单选框

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

- 注意：该类型表单项值为 boolean

#### radioGroup 单选框组

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [options](#options) 待选项

- [borrowOption](#borrowOption) 借用待选项

- [collectLabel](#collectLabel) 收集选项中其他字段（除 val 外）

- [asyncOption](#asyncOption) 待选项数据来源于接口，默认：`false`

- [optionUrl](#optionUrl) 待选项数据来源接口地址

- [optionLabel](#optionLabel) 待选项 label 对应接口数据的字段名

- [optionVal](#optionVal) 待选项 val 对应接口数据的字段名

- [optionFilter](#optionFilter) 待选项筛选方法

- [disableOptionByOthers](#disableOptionByOthers) 根据其他表单项的值禁用待选项

- [changeOption](#changeOption) 待选项数据来源于接口，接口地址是否改变

- [booleanVal](#booleanVal) 表单项值为布尔类型，传入的会被自动转换成 boolean，输出也是 boolean，默认：`false`

- [buttonType](#buttonType) 以按钮组的样式展示，默认：`false`

- [itemBorder](#itemBorder) 选项带边框（不可和 buttonType 同时开启），默认：`false`

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### checkbox 复选框

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [class](#class) 单个表单项的自定义样式类名

- 注意：该类型表单项值为 boolean

#### checkboxGroup 复选框组

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [options](#options) 待选项

- [borrowOption](#borrowOption) 借用待选项

- [collectLabel](#collectLabel) 收集选项中其他字段（除 val 外）

- [asyncOption](#asyncOption) 待选项数据来源于接口，默认：`false`

- [optionUrl](#optionUrl) 待选项数据来源接口地址

- [optionLabel](#optionLabel) 待选项 label 对应接口数据的字段名

- [optionVal](#optionVal) 待选项 val 对应接口数据的字段名

- [localOption](#localOption) 数组，表单项待选项为远程拉取时，使用该属性可设置固定的本地选项，排在远程选项前面

- [optionFilter](#optionFilter) 待选项筛选方法

- [disableOptionByOthers](#disableOptionByOthers) 根据其他表单项的值禁用待选项

- [changeOption](#changeOption) 待选项数据来源于接口，接口地址是否改变

- [buttonType](#buttonType) 以按钮组的样式展示，默认：`false`

- [itemBorder](#itemBorder) 选项带边框（不可和 buttonType 同时开启），默认：`false`

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

- 注意：该类型表单项值为数组

#### textarea 文本框

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [maxLength](#maxLength) 最大长度限制，不限制则不设置

- [showWordLimit](#showWordLimit) 布尔对象，是否显示输入字数统计，可以配合 maxlength 使用，默认：`false`

- [autosize](#autosize) 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }，默认:`{minRows:2}`

- [numberVal](#numberVal) 值转换为 number 类型

- [placeholder](#placeholder) 占位符，默认：`'请输入'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [clearable](#clearable) 表单项是否可单独清空，为 true 且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### upload 上传组件

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值，仅远程上传时支持默认值，为文件 id

- [url](#url) 远程上传接口地址

- [data](#data) 远程上传接口请求参数（不包含 file 对象）

- [withCredentials](#withCredentials) 远程上传接口请求是否带上 cookie，默认：`true`

- [manualUpload](#manualUpload) 本地上传，采集 file 对象，默认：`false`

- [format](#format) 上传文件格式限制，后缀名组成的数组，不限制则不设置

- [maxSize](#maxSize) 上传文件大小限制，单位 kb，配置时写数字，不要带单位

- [length](#length) 上传文件个数限制

- [showImg](#showImg) 以缩略图方式展示已上传文件，如果有文件不是图片，则自动切换成列表展示，默认：`false`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

- 注意：远程上传时，值为上传成功后接口返回的文件 id，或 id 组成的数组；本地上传时，值为 file 对象，或 file 对象组成的数组；远程上传时有诸多限制，具体参考[uploadGroup](../uploadGroup/README.md)组件的 README.md 文档

#### date 日期选择器

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [defaultVal2](#defaultVal2) 默认值 2，为区间时间时，结束时间默认值

- [dateType](#dateType) 日期类型，可选值：`'date'、'daterange'、'datetime'、'datetimerange'、'year'、'month'`

- [format](#formatB) 日期格式，不传时使用默认格式，常用值：`'YYYY'、'MM'、'YYYY-MM-DD'、'YYYY-MM-DD HH:mm:ss'`，具体参考 Moment.js 官网

- [dateOptions](#dateOptions) DatePicker 选择器额外配置，比如不可选日期与快捷选项

- [placeholder](#placeholder) 占位符，默认：`'请选择'`

- [clearable](#clearable) 表单项是否可单独清空，为 true 且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### time 时间选择器

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [defaultVal2](#defaultVal2) 默认值 2，为区间时间时，结束时间默认值

- [dateType](#dateType) 时间类型，可选值：`'time'、'timerange'`

- [format](#formatC) 时间格式（控制返回值的格式和操作界面维度），不传时使用默认格式，常用值：`'HH:mm:ss'、'HH:mm'、'HH'`

- [steps](#steps) timePicker 选择器下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。默认值：`[]`

- [placeholder](#placeholder) 占位符，默认：`'请选择'`

- [clearable](#clearable) 表单项是否可单独清空，为 true 且输入框有值时，光标移动到输入框尾部会有小叉，点击清空，默认：`true`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### monthRange 月份区间选择器

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值,开始时间默认值

- [defaultVal2](#defaultVal2) 默认值 2，结束时间默认值

- [format](#formatC) 时间格式（控制返回值的格式和操作界面维度），不传时使用默认格式，默认值：`'yyyy-MM'`

- [dateOptions1](#dateOptions) 开始月份 DatePicker 选择器额外配置，比如不可选日期与快捷选项

- [dateOptions2](#dateOptions) 结束月份 DatePicker 选择器额外配置，比如不可选日期与快捷选项

- [placeholder](#placeholder) 占位符，默认：`'请选择日期'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### editor 富文本编辑器

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [uploadImgMaxSize](#uploadImgMaxSize) 数字，限制上传图片大小，默认：102400(100k)

- [uploadImgMaxLength](#uploadImgMaxLength) 数字，限制一次最多能传几张图片，默认：10

- [uploadImgShowBase64](#uploadImgShowBase64) 布尔对象，是否使用 base64 作为本地图片上传保存方式，默认：true

- [uploadImgServe](#uploadImgServe) 对象，具体参考[editor](../editor/README.md)组件的 README.md 文档

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### editorPro 富文本编辑器 Pro

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [toolbarConfig](#toolbarConfig) 对象，工具栏配置，参考[wangEditor5 工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html)

- [editorConfig](#editorConfig) 对象，编辑器配置，参考[wangEditor5 编辑器配置](https://www.wangeditor.com/v5/editor-config.html)

- [mode](#mode) 字符串，`'default'` 默认模式 - 集成了 wangEditor 所有功能；`'simple'` 简洁模式 - 仅有部分常见功能，但更加简洁易用，默认：`'simple'`

- [height](#height) 正数/字符串，编辑区域高度，默认：`300`

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### inputMap 地图组件

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段，经度，必填，如：`lng`

- [key2](#key2) 表单项收集的数据在提交时所在字段，纬度，必填，如：`lat`

- [key3](#key2) 表单项收集的数据在提交时所在字段，地址名字，非必填，如：`name`

- [defaultVal](#defaultVal) 默认值，经度

- [defaultVal2](#defaultVal2) 默认值 2，纬度

- [defaultVal3](#defaultVal2) 默认值 3，地址名字

- [showMap](#showMap) 显示地图，默认：`true`

- [mapHeight](#mapHeight) 地图高度，默认：`'250px'`

- [placeholder](#placeholder) 占位符，默认：`'搜索'`

- [disabled](#disabled) 禁用该表单项，非响应式，可用 updateFormDataT 方法更改，默认：`false`

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [title](#title) 表单项的标题，位于表单项左上方

- [class](#class) 单个表单项的自定义样式类名

#### custom 自定义组件

- [label](#label) 标签

- [key](#key) 表单项收集的数据在提交时所在字段

- [defaultVal](#defaultVal) 默认值

- [slotName](#slotName) 插槽名字，自定义组件通过插槽接入表单

- [show](#show) 显示条件

- [showOr](#showOr) 显示条件间关系，设置 true 时为或运算，默认：`false`

- [info](#info) 表单项的提示文字，位于表单项下面

- [class](#class) 单个表单项的自定义样式类名

- 注意：自定义组件限制非常少，理论上想放什么进来都行，需遵循几点，具名插槽模板放在 formR 组件标签内，将 valGroup（表单组件收集值的对象）传进模板，如：

```
  <form-r>
    <template #myFormItem='{valGroup}'>
      <i-switch v-model='valGroup.myKey'/>
    </template>
  </form-r>

  其中myFormItem为slotName的值，myKey为key的值
```

- 注意：有时候自定义组件不靠 formR 组件收集值（仅展示或有独立的采集值的逻辑），则不需要设置 key，也不支持 defaultVal，如：

```
  <formR>
    <template #myFormItem2>
      <Table :columns='columns' :data='data'/>
    </template>
  </formR>

  其中myFormItem2为slotName的值，columns和data是使用formR组件的地方定义的table的数据
```
