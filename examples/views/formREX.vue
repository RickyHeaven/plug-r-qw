<template>
	<div class="examplePageL">
		<showReadMe />
		<div class="eBoxA baseUA">
			<wellCard title="基础用法">
				<div class="inPage">
					<formR :form-data="data" />
				</div>
			</wellCard>
		</div>
		<div class="eBoxA baseUA">
			<wellCard title="带提交按钮">
				<div class="inPage">
					<formR :form-data="data" :show-long-ok-bt="true" @on-submit="submit" />
				</div>
			</wellCard>
		</div>
		<div class="eBoxA baseUA">
			<wellCard title="带提校验">
				<div class="inPage">
					<formR :form-data="data" :form-rules="rules3" :show-long-ok-bt="true" @on-submit="submit" />
				</div>
			</wellCard>
		</div>
		<div class="eBoxA baseUA">
			<wellCard title="禁用表单">
				<template #bts>
					<headerBt :icon="disabled4 ? 'md-unlock' : 'md-lock'" @click="disabled4 = !disabled4">
						{{ disabled4 ? '解禁' : '禁用' }}
					</headerBt>
				</template>
				<div class="inPage">
					<formR :form-data="data" :show-long-ok-bt="true" @on-submit="submit" :disabled="disabled4" />
				</div>
			</wellCard>
		</div>
		<div class="eBoxA baseUA inlineFA">
			<wellCard title="行内表单">
				<div class="inPage">
					<formR
						:form-data="data"
						:inline="true"
						:show-inline-ok-bt="true"
						:show-inline-clear-bt="true"
						@on-submit="submit"
					/>
				</div>
			</wellCard>
		</div>
		<wellCard
			title="详细示例"
			fit-to-content
			style="background-color: #fff; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"
		>
			<div class="inPage detailPage">
				<formR
					ref="formRef"
					:form-data="data5"
					:form-rules="rules5"
					:label-width="220"
					:show-long-ok-bt="true"
					@on-submit="submitB"
				>
					<template #switchLJ="{ valGroup }">
						<i-switch v-model="valGroup.switchStatus" />
					</template>

					<template #cnu>
						<span>阶梯</span>
						<Table border stripe :columns="columns" :data="tableData" />
					</template>
				</formR>
				表单提交的值：
				<json-viewer :value="valGroup5" theme="my-awesome-json-theme" copyable />
			</div>
		</wellCard>
	</div>
</template>

<script>
	export default {
		name: 'formREX',
		data() {
			return {
				data: [
					{
						type: 'input',
						key: 'name',
						label: '名称',
						placeholder: '请输入名称',
						class: 'myInputHG bigKZ' /*该formItem自定义样式类名*/
					},
					{
						type: 'radioGroup',
						key: 'sex',
						label: '性别',
						options: [
							{
								label: '男',
								val: 1
							},
							{
								label: '女',
								val: 0
							}
						]
					}
				],
				rules3: {
					name: {
						required: true
					},
					sex: {
						required: true
					}
				},
				disabled4: true,
				data5: [
					{
						type: 'txt',
						label: '注意',
						val: '因为该表单有需要请求接口的组件，所以需要在项目目录下新开一个命令窗口运行：npm run node-serve 将该项目配置好的nodeJs服务器启动起来，那些需要请求nodeJs服务器的组件才有数据'
					},
					{
						type: 'txt',
						label: '改变表单结构（示例）',
						val: '我将会在页面加载5秒之后改变'
					},
					{
						type: 'custom',
						slotName: 'switchLJ',
						label: '开关',
						key: 'switchStatus',
						defaultVal: false,
						info: 'custom 1'
					},
					{
						type: 'custom',
						slotName: 'cnu',
						label: '定价类型',
						info: 'custom 2'
					},
					{
						type: 'input',
						label: '名称',
						key: 'name',
						title: '个人信息',
						info: 'input'
					},
					{
						type: 'input',
						label: '禁用示例',
						disabled: true,
						key: 'nameDisabled',
						defaultVal: '我是默认姓名',
						info: 'input disabled'
					},
					{
						type: 'radioGroup',
						label: '性别',
						key: 'sexC',
						options: [
							{
								label: '男',
								val: 1
							},
							{
								label: '女',
								val: 0
							}
						],
						info: 'radioGroup'
					},
					{
						type: 'radioGroup',
						label: '总部所在地',
						key: 'base',
						buttonType: true,
						options: [
							{
								label: '北京',
								val: 'beijin'
							},
							{
								label: '重庆',
								val: 'chongqing'
							},
							{
								label: '上海',
								val: 'shanghai'
							}
						],
						info: 'radioGroup buttonType'
					},
					{
						type: 'radioGroup',
						label: '内部推荐',
						key: 'recommend',
						booleanVal: true /*输出值会是布尔类型*/,
						options: [
							{
								label: '是',
								val: 1
							},
							{
								label: '否',
								val: 0
							}
						],
						info: 'radioGroup booleanVal'
					},
					{
						type: 'radioGroup',
						label: '推荐人',
						key: 'referrer',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						collectLabel: {
							valKey: 'recommendReply',
							key: 'recommendReply'
						},
						show: {
							key: 'recommend',
							val: [true]
						},
						info: 'radioGroup asyncOption, 内部推荐为"是"时展示该项'
					},
					{
						type: 'radioGroup',
						label: '推荐回执',
						key: 'recommendReply',
						booleanVal: true /*输出值会是布尔类型*/,
						options: [
							{
								label: '是',
								val: 1
							},
							{
								label: '否',
								val: 0
							}
						],
						show: {
							key: 'recommend',
							val: [true]
						},
						info: '默认值为"推荐人"选中项带出，带出时"推荐人"选项recommendReply字段的boolean自动转换为"推荐回执"组件的number'
					},
					{
						type: 'inputNumber' /*数字输入框，输出值是数字*/,
						label: '年龄',
						key: 'age',
						min: 1,
						max: 150,
						info: 'inputNumber, min 1, max 150'
					},
					{
						type: 'alCascader' /*行政区域级联*/,
						label: '住址',
						key: 'addressCode',
						key2: 'addressName',
						level: 2,
						info: 'alCascader, 返回行政区域code'
					},
					{
						type: 'asyncCascader',
						label: '机构',
						key: 'orgId',
						key2: 'orgName',
						url: location.pathname + 'testData/asyncCascader.json',
						info: 'asyncCascader, 普通级联，数据来源于url对应接口返回的数据'
					},
					{
						type: 'upload' /*上传组件*/,
						label: '头像',
						key: 'logo',
						url: '/node-serve/file',
						format: ['jpg', 'png'],
						maxSize: 500,
						showImg: true,
						length: 1,
						info: 'upload, 上传组件，该示例设置了的参数：上传地址，格式jpg、png，最大500kb，1张，展示上传的图片'
					},
					{
						type: 'upload' /*上传组件*/,
						label: '附件（本地上传）',
						key: 'attachment',
						manualUpload: true,
						maxSize: 2000,
						length: 5,
						info: 'upload manualUpload, 文件会以File对象返回，该示例设置了的参数：单个文件最大2000kb，最多5件'
					},
					{
						type: 'select',
						label: '最高学历',
						key: 'education',
						collectLabel: {
							valKey: 'label',
							key: 'educationName'
						} /*选中项的标签连同值一并返回*/,
						options: [
							/*本地待选项下拉框*/
							{
								label: '高中',
								val: 1
							},
							{
								label: '专科',
								val: 2
							},
							{
								label: '本科',
								val: 3
							},
							{
								label: '研究生',
								val: 4
							},
							{
								label: '博士',
								val: 5,
								disabled: true
							}
						],
						info: 'select, 该示例展示功能：collectLabel--收集选中项的val以外另一个字段（此处为label），本地选项，指定选项禁用'
					},
					{
						type: 'input',
						label: '学校',
						key: 'school',
						show: {
							/*单一条件决定是否展示*/
							key: 'education',
							val: [2, 3, 4, 5]
						},
						info: 'input, 该示例展示功能："最高学历"有值且不为"高中"时展示该项'
					},
					{
						type: 'input',
						label: '专业',
						key: 'major',
						defaultVal: '我是默认值',
						show: [
							/*复数条件决定是否展示，需全部满足*/
							{
								key: 'education',
								val: [2, 3, 4, 5]
							},
							{
								key: 'school',
								val: ['.']
							}
						],
						info: 'input, 该示例展示功能：默认值，"最高学历"有值且不为"高中"且"学校"有值时展示该项'
					},
					{
						type: 'input',
						label: '展示条件满足一个就行',
						key: 'major2',
						showOr: true /*满足其中一项条件即可*/,
						show: [
							/*展示条件，复数条件*/
							{
								key: 'recommend',
								val: [true]
							},
							{
								key: 'education',
								val: [2, 3, 4, 5]
							}
						],
						info: 'input, 该示例展示功能："最高学历"有值且不为"高中"或"内部推荐"为"是"时展示该项'
					},
					{
						type: 'input',
						label: '正则条件',
						key: 'major3',
						show: {
							/*条件为正则表达式*/
							key: 'education' /*除了2以外所有的*/,
							reg: /^(?!2$).*$/
						},
						info: 'input, 该示例展示功能：最高学历为"专科"时隐藏该项'
					},
					{
						type: 'input',
						label: '回调函数',
						key: 'major4',
						defaultVal: 'abc' /*条件为回调函数*/,
						show: (valGroup) => valGroup.education > 3,
						info: 'input, 该示例展示功能：按回调函数判断是否展示-最高学历值大于3时展示'
					},
					{
						type: 'select',
						label: '联系人',
						key: 'friend',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						info: 'select asyncOption, 该示例展示功能：远程待选项--从接口拉取数据'
					},
					{
						type: 'select',
						label: '联系人B(多选)',
						key: 'friendB',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						multiple: true,
						info: 'select multiple, 该示例展示功能：多选'
					},
					{
						type: 'select',
						label: '联系人C(带选项筛选)',
						key: 'friendC',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						optionFilter(d) {
							return d.filter((e) => e && e.birth !== '1991')
						},
						info: 'select optionFilter, 该示例展示功能：筛选接口数据--不要"生日"为1991的'
					},
					{
						type: 'select',
						label: '联系人D（待选项禁用）',
						key: 'friendD',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						disableOptionByOthers: 'friend' /*待选项禁用，'联系人'已选的，联系人D将不能选*/,
						info: "select disableOptionByOthers, 该示例展示功能：待选项禁用，'联系人'已选的，该下拉框将不能选"
					},
					{
						type: 'select',
						label: '联系人G（多字段禁用）',
						key: 'friendG',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						disableOptionByOthers: ['friend', 'friendD'] /*待选项禁用，'联系人'和'联系人D'已选的，联系人G将不能选*/,
						info: "select disableOptionByOthers, 该示例展示功能：待选项禁用，'联系人'和'联系人D'已选的，该下拉框将不能选"
					},
					{
						type: 'select',
						label: '联系人E(借用待选项)',
						key: 'friendE',
						borrowOption: 'friend' /*借用另外一个组件的待选项*/,
						info: 'select borrowOption, 该示例展示功能：借用另外一个组件"联系人"的待选项'
					},
					{
						type: 'select',
						label: '联系人F(收集多个字段)' /*收集待选项的多个字段，一个是默认的val,另一个是label，及其他*/,
						key: 'friendF',
						collectLabel: [
							{
								valKey: 'label' /*字段在接口返回结果中名字，'label'为一个特殊值，表示取待选项的label就行*/,
								key: 'friendFName' /*该字段需要提交的名字*/
							},
							{
								valKey: 'birth' /*字段在接口返回结果中名字*/,
								key: 'friendFBirth' /*该字段需要提交的名字*/
							}
						],
						asyncOption: true,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						info: 'select collectLabel, 该示例展示功能：收集选中选项的多个字段--val(tel)、label(name)、birth'
					},
					{
						type: 'txt',
						label: '联系人F的生日',
						valKey: 'friendFBirth',
						likeInput: true,
						info: 'txt likeInput, 该示例展示功能：表单指定字段的值展示（该项展示的"联系人F"下拉collectLabel收集的birth）'
					},
					{
						type: 'select',
						label: '多选M(收集多个字段)',
						key: 'friendM',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						multiple: true,
						collectLabel: [
							{
								valKey: 'label' /*字段在接口返回结果中名字，'label'为一个特殊值，表示取待选项的label就行*/,
								key: 'friendMName' /*该字段需要提交的名字*/
							},
							{
								valKey: 'birth' /*字段在接口返回结果中名字*/,
								key: 'friendMBirth' /*该字段需要提交的名字*/
							}
						],
						info: 'select collectLabel multiple, 该示例展示功能：多选时收集选中选项的多个字段--val(tel)、label(name)、birth'
					},
					{
						type: 'date',
						dateType: 'daterange',
						addTime: true,
						label: '入职日期',
						key: 'timeEnter',
						key2: 'timeOut',
						dateOptions: {
							/*可选日期不能小于当天，且区间不超过30天*/
							disabledDate(date, from, selecting) {
								if (from && selecting) {
									return (
										date.valueOf() < Date.now() - 1000 * 60 * 60 * 24 ||
										date.valueOf() > from.valueOf() + 1000 * 60 * 60 * 24 * 30 ||
										date.valueOf() < from.valueOf() - 1000 * 60 * 60 * 24 * 30
									)
								}
								return date.valueOf() < Date.now() - 1000 * 60 * 60 * 24
							}
						},
						info: 'date daterange, 该示例展示功能：日期区间选择，可选日期不能小于当天，且区间不超过30天'
					},
					{
						type: 'time',
						dateType: 'timerange',
						label: '理想上班时间',
						key: 'onDuty',
						key2: 'offDuty',
						info: 'time timerange, 该示例展示功能：时间区间选择'
					},
					{
						type: 'date',
						dateType: 'year',
						label: '年份A',
						key: 'yearA',
						defaultVal: '2022',
						info: 'date year, 该示例展示功能：年份选择'
					},
					{
						type: 'monthRange',
						label: '月份区间',
						key: 'monthRangeA',
						key2: 'monthRangeB',
						defaultVal: '2022-03',
						defaultVal2: '2023-04',
						info: 'monthRange, 该示例展示功能：月份区间选择'
					},
					{
						type: 'txt',
						label: '原语代码',
						valKey: 'protocolAtomicActionCode',
						likeInput: true,
						info: 'txt likeInput, 该示例展示功能：表单指定字段的值展示'
					},
					{
						type: 'select',
						label: '待选项名字拼接示例',
						key: 'friendG',
						asyncOption: true,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: ['name', 'tel'] /*多字段待选项名*/,
						optionVal: 'tel',
						info: 'select, 该示例展示功能：待选项label由多个字段组成--name、tel'
					},
					{
						type: 'select',
						label: '远程加本地选项',
						key: 'friendH',
						asyncOption: true /*远程待选项*/,
						localOption: [
							/*本地待选项，只有远程下拉框才会有，否则直接写在options就行*/
							{
								val: '44444444',
								label: '这是本地选项A'
							}
						],
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						info: 'select, 该示例展示功能：待选项由本地数据和接口数据共同组成'
					},
					{
						type: 'checkbox',
						label: '需要住宿',
						key: 'room',
						info: 'checkbox'
					},
					{
						type: 'checkboxGroup',
						label: '证书',
						key: 'credential',
						options: [
							{
								val: 'CET4',
								disabled: true
							},
							{
								val: 'CET6'
							},
							{
								val: '驾照',
								icon: 'md-car'
							}
						],
						info: 'checkboxGroup'
					},
					{
						type: 'checkboxGroup',
						label: '联系人K(远程选项)',
						key: 'friendK',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						info: 'checkboxGroup asyncOption'
					},
					{
						type: 'checkboxGroup',
						label: '联系人L(收集其他字段)',
						key: 'friendL',
						asyncOption: true /*远程待选项*/,
						optionUrl: location.pathname + 'testData/formR/people.json',
						optionLabel: 'name',
						optionVal: 'tel',
						collectLabel: {
							valKey: 'label',
							key: 'friendLName'
						},
						info: 'checkboxGroup collectLabel, 该示例展示功能：收集选中项的val以外另一个字段，此处为label(name)'
					},
					{
						type: 'radio',
						label: '同步资料到云服务器',
						key: 'upload',
						info: 'radio'
					},
					{
						type: 'textarea',
						label: '备注',
						key: 'ps',
						info: 'textarea'
					},
					{
						type: 'select' /*级联（待选项级联）下拉框演示*/,
						label: '部门(条件1)',
						key: 'dep',
						asyncOption: true,
						optionUrl: location.pathname + 'testData/formR/department.json',
						optionLabel: 'name',
						optionVal: 'code',
						info: 'select, 该示例展示功能：多表单项组成复杂级联，该项为后面表单项是否展示的条件之一'
					},
					{
						type: 'select' /*级联（待选项级联）下拉框演示*/,
						label: '性别（条件2）',
						key: 'sex',
						options: [
							{
								label: '男',
								val: 1
							},
							{
								label: '女',
								val: 0
							}
						],
						info: 'select, 该示例展示功能：多表单项组成复杂级联，该项为后面表单项是否展示的条件之一'
					},
					{
						type: 'select' /*级联（待选项级联）下拉框演示*/,
						label: '话事人（待选项改变）',
						key: 'president',
						asyncOption: true,
						changeOption: [
							{
								valKey: 'dep',
								key: 'dep'
							},
							{
								valKey: 'sex',
								key: 'sex'
							},
							{
								/*不是必须的条件*/
								valKey: 'conditionM',
								key: 'conditionM',
								notRequired: true
							}
						],
						optionUrl: '/node-serve/people',
						optionLabel: 'name',
						optionVal: 'tel',
						info: 'select, 该示例展示功能：此下拉框选项会根据"部门"和"性别"的值改变'
					},
					{
						type: 'select' /*待选项地址会改变(直接改变formData对应项<即本下拉框>的optionUrl)的下拉框演示*/,
						label: '选项地址改变N',
						key: 'friendN',
						asyncOption: true,
						changeOption: true /*地址直接改变（通过监听下面的optionUrl）*/,
						optionUrl:
							null /*此处如没有初始地址，需把optionUrl设置为null(必须在这声明这个字段，否则监听不到)，需要改变时直接改变此处的值（见下方mounted示例，不要使用updateFormDataT方法，它在该场景下不适用）*/,
						optionLabel: 'name',
						optionVal: 'tel',
						placeholder: '页面加载10秒后下拉框会有可选项，没看到变化？刷新页面再来一次~',
						info: 'select changeOption, 该示例展示功能：此下拉框选项会在optionUrl得到新的值后重新拉取'
					},
					{
						type: 'inputMap',
						label: '位置',
						key: 'lng',
						key2: 'lat',
						key3: 'address',
						defaultVal: 106.585836,
						defaultVal2: 29.564123,
						defaultVal3: '朝天门(地铁站)',
						info: 'inputMap, 该示例展示功能：地图，收集地点经纬度，详细说明见InputMap组件的文档'
					},
					{
						type: 'inputMap',
						label: '地址搜索（分离式）',
						key: 'addressLng',
						key2: 'addressLat',
						key3: 'addressName',
						defaultVal: 106.499401,
						defaultVal2: 29.616077,
						defaultVal3: '光电园(地铁站)',
						inputInMap: false,
						info: 'inputMap inputInMap=false, 该示例展示功能：输入框和地图分离布局，详细说明见InputMap组件的文档'
					},
					{
						type: 'editorPro',
						label: '文章',
						key: 'articleA',
						defaultVal: '<p>你好！</p>',
						info: 'editorPro, 该示例展示功能：富文本编辑器，收集富文本，详细说明见EditorPro组件的文档'
					}
				],
				rules5: {
					logo: {
						required: true
					},
					name: {
						required: true
					},
					sex: {
						required: true
					},
					age: [
						{
							required: true
						},
						{
							type: 'number',
							message: '必须为数字'
						},
						{
							type: 'number',
							min: 1,
							message: '必须为正数'
						}
					],
					education: {
						required: true
					},
					school: {
						required: true
					},
					major: {
						required: true
					},
					monthRangeA: {
						required: true
					},
					protocolAtomicActionCode: {
						required: true
					}
				},
				columns: [
					{
						title: '月阶梯',
						key: 'stair',
						minWidth: 80,
						tooltip: true
					},
					{
						title: '用气量（m³）',
						key: 'gas',
						minWidth: 110,
						tooltip: true
					},
					{
						title: '价格（元/m³）',
						key: 'price',
						minWidth: 110,
						tooltip: true
					}
				],
				tableData: [
					{
						stair: '阶梯1',
						gas: 3,
						price: 5
					},
					{
						stair: '阶梯2',
						gas: 6,
						price: 4.5
					},
					{
						stair: '阶梯3',
						gas: 9,
						price: 4
					},
					{
						stair: '阶梯4',
						gas: 12,
						price: 3.5
					}
				],
				valGroup5: []
			}
		},
		created() {
			this.setTimeout(() => {
				this.$refs.formRef.updateFormDataT({
					index: 1,
					val: '我现在变了，没看到？刷新页面再给你变一次~'
				})
			}, 5000)
		},
		mounted() {
			this.setTimeout(() => {
				this.findCollection(this.data5, (e) => e?.key === 'friendN').optionUrl =
					location.pathname + 'testData/formR/people.json'
			}, 10000)
		},
		methods: {
			submit(val) {
				this.$swal('表单提交内容', JSON.stringify(val))
			},
			submitB(val) {
				this.valGroup5 = val
				console.log(val)
			}
		}
	}
</script>

<style lang="less" scoped>
	.detailPage {
		width: 1000px;
	}

	.inPage {
		padding: 10px;
	}

	.eBoxA {
		width: 600px;
		display: inline-block;
		margin: 0 10px 10px 0;
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

		&.baseUA {
			height: 260px;
		}

		&.inlineFA {
			width: 1210px;
		}

		&.detailUA {
			height: 3800px;
			width: 800px;
		}
	}
</style>
