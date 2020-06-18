<template>
  <div class="fullHeight">
    <div class="loginFormBox">
      <div class="loginContent">
        <div class="loginFormContainer">
          <Form
              ref="loginForm"
              autocomplete="on"
              :model="loginForm"
              :rules="loginRules"
              class="loginForm"
          >
            <Form-item prop="tenantCode">
              <div class="pubWords">
                单位代码
                <span>Code</span>
              </div>
              <Input
                  type="text"
                  v-model="loginForm.tenantCode"
                  placeholder="请输入单位代码"
                  autocomplete="on"
                  @on-enter="handleLogin('loginForm')"
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
                  @on-blur="getCheck"
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
                  @keyup.enter.native="handleLogin('loginForm')"
              >
              </Input>
            </Form-item>
            <Form-item>
              <Button
                  class="mt"
                  type="primary"
                  @click="handleLogin('loginForm')"
                  long
                  :loading="loading"
              >
                <span v-if="!loading">登录</span>
                <span v-else>Loading...</span>
              </Button>
            </Form-item>
            <div class="tips">提示：忘记用户名和密码请联系系统管理员</div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        loading: false,
        isShow: false,
        loginForm: {
          tenantCode: "",
          username: "",
          password: ""
        },
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
    mounted() {
      document.body.addEventListener("keyup", e => {
        //回车登录
        if (e.keyCode === 13 && e.target === document.body) {
          this.handleLogin('loginForm')
        }
      }, false);
      //登录状态判断
    },
    methods: {
      ...mapMutations([
        'SET_IS_LOGIN'
      ]),
      getCheck() {
        //登录检查验证码
        if (!this.loginForm.tenantCode || !this.loginForm.username) {
          return
        }
        this.$fetch.get("/mgr/check?username=" + this.loginForm.username + "&tenantCode=" + this.loginForm.tenantCode)
          .then(res => {
            this.isShow = (res && res.code === 100001)
          })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            let temp = new FormData()
            temp.append('tenantCode', this.loginForm.tenantCode)
            temp.append('username', this.loginForm.username)
            temp.append('password', this.loginForm.password)
            this.$fetch.post("/mgr/login", temp, null, [], {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                this.SET_IS_LOGIN(true);
                if (res && res.code === 0) {
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
  };
</script>
<style scoped>
  .loginFormBox {
    width: 100%;
    height: calc(100% - 60px);
    position: relative;
  }

  .loginFormContainer {
    width: 600px;
    margin: 0 auto;
  }

  .loginContent {
    margin: 0 auto;
    height: 100%;
    overflow-y: auto;
    position: relative;
  }

  .loginForm {
    padding: 35px;
    background: #fff;
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

  .loginContent ul li {
    background: #ffffff;
    float: left;
    list-style: none;
    border: solid 1px gray;
    width: 270px;
    height: 260px;
    padding: 0 30px;
    text-align: center;
    margin-right: 195px;
    cursor: pointer;
  }

  .loginContent ul li img {
    margin-top: 42px;
  }
</style>


