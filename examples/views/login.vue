<template>
  <div class="fullHeightLK">
    <div class="loginEnv">
      <RadioGroup size="small" v-model="envK" type="button">
        <Radio label="umc"></Radio>
        <Radio label="mgr"></Radio>
      </RadioGroup>
    </div>
    <div class="loginFormBox">
      <div class="titleLK">
        PLUG-R-QW 示例系统
      </div>
      <Form
          ref="loginForm"
          autocomplete="on"
          :model="loginForm"
          :rules="loginRules"
          :disabled="isLogin"
      >
        <Form-item prop="tenantCode" v-if="envK === 'mgr'">
          <div class="pubWords">
            单位代码
            <span>Code</span>
          </div>
          <Input
              type="text"
              v-model="loginForm.tenantCode"
              placeholder="请输入单位代码"
              autocomplete="on"
              @on-enter="handleLogin()"
          ></Input>
        </Form-item>
        <Form-item prop="username">
          <div class="pubWords">
            用户名
            <span>Account</span>
          </div>
          <Input
              type="text"
              v-model="loginForm.username"
              placeholder="请输入用户名"
              autocomplete="on"
          >
          </Input>
        </Form-item>
        <Form-item prop="password">
          <div class="pubWords">
            密码
            <span>Password</span>
          </div>
          <Input
              type="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
              @on-enter="handleLogin()"
          >
          </Input>
        </Form-item>
      </Form>
      <Button
          class="mt"
          :type="isLogin?'success':'primary'"
          @click="handleLogin"
          long
          :loading="loading"
      >
        <span v-if="!loading">{{isLogin?'登出':'登录'}}</span>
        <span v-else>Loading...</span>
      </Button>
      <div class="tips">提示：登录是为了拉取后端接口数据，否则可直接在地址栏输入"/index"</div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: "login",
    data() {
      return {
        loading: false,
        isShow: false,
        loginRules: {
          tenantCode: {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          },
          username: {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          },
          password: {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        }
      };
    },
    computed: {
      ...mapState({
        envR: store => store.user.envR,
        loginFormK: store => store.user.user,
        isLogin: store => store.user.isLogin
      }),
      envK: {
        get() {
          return this.envR
        },
        set(val) {
          this.SET_ENV_R(val)
          this.getIsLogin(val)
          this.getUser(val)
        }
      },
      loginForm: {
        get() {
          return this.loginFormK
        },
        set(val) {
          this.SET_USER(val)
        }
      }
    },
    methods: {
      ...mapMutations([
        'SET_IS_LOGIN',
        'SET_ENV_R',
        'SET_USER'
      ]),
      ...mapActions({
        logoutA:'logout',
        getIsLogin:'GET_IS_LOGIN',
        getUser:'GET_USER',
      }),
      handleLogin() {
        if (this.isLogin) {
          this.logoutA()
        }
        else {
          this.$refs.loginForm.validate(valid => {
            if (valid) {
              this.loading = true;
              let temp = new FormData()
              temp.append('username', this.loginForm.username)
              temp.append('password', this.loginForm.password)
              let url = "/umc/login"
              if (this.envK === 'mgr') {
                url = '/mgr/login'
                temp.append('tenantCode', this.loginForm.tenantCode)
              }
              this.$fetch.post(url, temp, null, [], {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
                .then(res => {
                  if (res && res.code === 0) {
                    this.SET_IS_LOGIN(true);
                    this.SET_USER(this.loginForm)

                    this.$nextTick(function () {
                      this.loading = false
                    })
                    this.$router.push('index')
                  }
                  else {
                    window.$swal(res.message);
                    this.loading = false;
                  }
                });
            }
            else {
              return false;
            }
          });
        }
      }
    }
  };
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
    font-size: 14px;
    color: #999999;
    font-weight: 500;
    letter-spacing: 0;
  }
</style>


