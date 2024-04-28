<template>
	<div class="fullHeightLK">
		<div class="loginFormBox">
			<div class="titleLK">PLUG-R-QW 示例系统</div>
			<Form ref="loginForm" autocomplete="on" :model="loginForm" :rules="loginRules" :disabled="isLogin">
				<Form-item prop="username">
					<div class="pubWords">
						用户名
						<span>Account</span>
					</div>
					<Input type="text" v-model="loginForm.username" placeholder="请输入用户名" autocomplete="on"> </Input>
				</Form-item>
				<Form-item prop="password">
					<div class="pubWords">
						密码
						<span>Password</span>
					</div>
					<Input type="password" v-model="loginForm.password" placeholder="请输入密码" @on-enter="handleLogin()">
					</Input>
				</Form-item>
			</Form>
			<Button class="mt" :type="isLogin ? 'success' : 'primary'" @click="handleLogin" long :loading="loading">
				<span v-if="!loading">{{ isLogin ? '登出' : '登录' }}</span>
				<span v-else>Loading...</span>
			</Button>
			<div class="tips"> 提示：1.此登录页面为了演示$fetch拦截器，如403，否则地址栏输入"/index"访问示例页；2.登录需要运行node-serve。 </div>
		</div>
	</div>
</template>

<script>
	import { mapWritableState } from 'pinia'
	import { useStore } from '../store'
	export default {
		name: 'login',
		data() {
			return {
				loading: false,
				isShow: false,
				loginForm: {
					username: null,
					password: null
				},
				loginRules: {
					username: {
						required: true,
						message: '该项为必填项',
						trigger: 'blur'
					},
					password: {
						required: true,
						message: '该项为必填项',
						trigger: 'blur'
					}
				}
			}
		},
		computed: {
			...mapWritableState(useStore, ['isLogin'])
		},
		methods: {
			handleLogin() {
				if (this.isLogin) {
					const store = useStore()
					store.logout
				} else {
					this.$refs.loginForm.validate((valid) => {
						if (valid) {
							this.loading = true
							let temp = new FormData()
							temp.append('username', this.loginForm.username)
							temp.append('password', this.loginForm.password)
							this.$fetch
								.post('/node-serve/login', temp, null, [], {
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								})
								.then((r) => {
									if (r?.code === 0) {
										this.isLogin = true

										this.$nextTick(function () {
											this.loading = false
										})
										this.$router.push('index')
									} else {
										this.$swal(r.message)
										this.loading = false
									}
								})
						} else {
							return false
						}
					})
				}
			}
		}
	}
</script>
<style scoped>
	.loginEnv {
		position: absolute;
		top: 10px;
		right: 20px;
	}

	.fullHeightLK {
		height: 100vh;
		background-color: #fafafa;
	}

	.titleLK {
		font-size: 40px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 20px;
	}

	.loginFormBox {
		position: relative;
		width: 600px;
		top: calc(40% - 204px);
		left: calc(50% - 300px);
		background: #fff;
		padding: 35px;
		border-radius: 10px;
	}

	.pubWords {
		letter-spacing: 0;
		text-align: left;
		color: #000;
	}

	.pubWords span {
		font-size: 14px;
		color: #e2e2e2;
		margin-left: 15px;
	}

	.tips {
		margin-top: 20px;
		font-size: 14px;
		color: #999999;
		font-weight: 500;
		letter-spacing: 0;
	}
</style>
