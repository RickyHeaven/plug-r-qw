<template>
	<div class="examplePageL formTeamPageM">
		<showReadMe />
		<toHome />
		<div>单个表单内部带分组（用于布局和样式控制）</div>
		<formR
			ref="formRef"
			:form-data="formData"
			:form-rules="formRules"
			showInlineOkBt
			showInlineClearBt
			@on-submit="submit"
			@on-item-change="itemChange"
		>
			<template #boxTitle0>
				<Icon type="md-person" />
				基本信息
			</template>
			<template #boxTitle1>
				<Icon type="md-briefcase" />
				应聘信息
			</template>
			<template #serviceYear>
				<span>年</span>
			</template>
		</formR>
	</div>
</template>

<script>
	const ruleX = {
		validator: (rule, value, callback) => {
			if (/^-?\d*(\.\d)?$/.test(value) || value === null) {
				callback()
			} else {
				callback(new Error('必须是数字'))
			}
		},
		trigger: 'blur'
	}
	export default {
		name: 'formTeamEX',
		data() {
			return {
				formData: [
					[
						{
							type: 'custom',
							slotName: 'boxTitle0',
							class: 'boxTitleK'
						},
						{
							type: 'input',
							key: 'name',
							label: '姓名'
						},
						{
							type: 'radioGroup',
							key: 'sex',
							label: '性别',
							options: [
								{
									label: '男',
									val: 'male'
								},
								{
									label: '女',
									val: 'female'
								}
							]
						},
						{
							type: 'input',
							key: 'age',
							label: '年龄',
							append: '岁',
							numberVal: true,
							placeholder: '请输入数字'
						},
						{
							type: 'input',
							key: 'education',
							label: '学历'
						},
						{
							type: 'input',
							key: 'tel',
							label: '电话'
						},
						{
							type: 'input',
							key: 'address',
							label: '住址'
						},
						{
							type: 'radioGroup',
							key: 'marriage',
							label: '婚姻状况',
							options: [
								{
									label: '已婚',
									val: 1
								},
								{
									label: '未婚',
									val: 0
								}
							]
						},
						{
							type: 'input',
							key: 'country',
							label: '国籍'
						},
						{
							type: 'input',
							key: 'nationality',
							label: '民族'
						},
						{
							type: 'textarea',
							key: 'remark',
							label: '备注',
							autosize: {
								minRows: 4,
								maxRows: 7
							},
							maxLength: 100,
							showWordLimit: true
						}
					],
					[
						{
							type: 'custom',
							slotName: 'boxTitle1',
							class: 'boxTitleK'
						},
						{
							type: 'input',
							key: 'post',
							label: '应聘岗位'
						},
						{
							type: 'input',
							key: 'pay',
							label: '期望薪资',
							append: '元',
							numberVal: true,
							placeholder: '请输入数字'
						},
						{
							type: 'input',
							key: 'serviceYear',
							label: '工作年限',
							slotName: 'serviceYear',
							slotPosition: 'append',
							numberVal: true,
							placeholder: '请输入数字'
						},
						{
							type: 'input',
							key: 'certificate',
							label: '证书'
						},
						{
							type: 'checkbox',
							key: 'dorm',
							label: '需要宿舍'
						}
					]
				],
				formRules: {
					sex: {
						required: true
					},
					name: {
						required: true
					},
					age: ruleX,
					tel: {
						required: true
					},
					post: {
						required: true
					},
					pay: ruleX,
					serviceYear: ruleX
				}
			}
		},
		methods: {
			itemChange(d) {
				console.log(d)
			},
			submit(d) {
				console.log(d)
			}
		}
	}
</script>

<style lang="less">
	.formTeamPageM {
		.formXN {
			margin-top: 20px;

			.formTeamBox {
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				align-content: flex-start;
				padding-top: 50px;
				position: relative;

				.boxTitleK {
					position: absolute;
					top: 0;
					left: 0;
					width: 100% !important;
					padding: 4px 0 1px 20px;
					background-color: #f7f7f7;
					margin: 0 !important;

					> .ivu-form-item-content {
						margin-left: 0 !important;

						> .inlineBlock {
							width: 100% !important;

							font-size: 16px;
							font-weight: bold;

							> i {
								color: #4290f7;
								font-size: 20px;
							}
						}
					}
				}

				@media screen and (max-width: 1450px) {
					height: 405px;

					&.formTeamBox1 {
						height: 235px;
					}
				}

				@media screen and (min-width: 1451px) {
					height: 285px;

					&.formTeamBox1 {
						height: 170px;
					}
				}

				.ivu-form-item {
					width: 500px;
				}
			}

			> .inlineBlock {
				margin-left: 145px;
				padding: 15px;
				display: block;
			}
		}
	}
</style>
