<template>
  <div class="login">
    <div class="bg1" />
    <div class="bg2" />
    <div class="bg3" />
    <div class="login-inner">
      <el-row>
        <el-col :span="12" class="login-bg">
          <div class="bg-inner" />
        </el-col>
        <el-col :span="12" class="login-form">
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            class="from"
          >
            <el-form-item>
              <h3 class="form-title">
                登录
              </h3>
            </el-form-item>
            <el-form-item prop="loginName">
              <el-input
                v-model="ruleForm.loginName"
                placeholder="账号"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                placeholder="密码"
                show-password
              />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="login-btn"
                :loading="loading"
                @click="handleLogin"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <footer class="footer">
      <span>南通数字空间</span>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import asyncData from '@/common/mixin'
export default {
  layout: 'blank',
  mixins: [asyncData],
  data () {
    return {
      loading: false,
      ruleForm: {
        loginName: 'sys_admin',
        password: 'admin'
      },
      rules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    // 登录
    handleLogin () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.login({
            ...this.ruleForm
          }).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  min-height: 100%;
  min-width: 1190px;
  padding-top: 100px;
  background:linear-gradient(135deg,rgba(7,11,31,1) 0%,rgba(13,19,50,1) 100%);
  .login-inner {
    width: 980px;
    height: 400px;
    margin: 0 auto;
    border-radius: 11px;
    overflow: hidden;
    .login-bg {
      width: 490px;
      height: 400px;
      padding: 30px 60px;
      background-color: #1B244C;
      .bg-inner {
        width: 100%;
        height: 100%;
        background: url('/login/login_bg.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .login-form {
      height: 400px;
      background: #fff;
    }
    .from {
      width: 300px;
      margin: 0 auto;
      margin-top: 60px;
      .el-form-item {
        margin-bottom: 30px;
      }
      .form-title {
        font-size:23px;
        text-align: center;
      }
      .login-btn {
        width: 100%;
        margin-top: 40px;
      }
    }
  }
  .bg1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 98px;
    height: 98px;
    background: url('/login/bg01.png');
    background-size: 100% 100%;
  }
  .bg2 {
    position: absolute;
    right: 0;
    top: 0;
    width: 130px;
    height: 180px;
    background: url('/login/bg02.png');
    background-size: 100% 100%;
  }
  .bg3 {
    position: absolute;
    left: 60px;
    bottom: 0;
    width: 190px;
    height: 70px;
    background: url('/login/bg03.png');
    background-size: 100% 100%;
  }
  .footer {
    width: 980px;
    margin: 50px auto;
    font-size: 14px;
    letter-spacing: 6px;
    text-align: center;
    color: #4D73F4;
    span {
      position: relative;
      &:before, &:after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        content: '';
        width: 62px;
        height: 1px;
      }
      &:before {
        left: -65px;
        background: url('/login/login_line_left.png');
        background-size: 100% 100%;
      }
      &:after {
        right: -65px;
        background: url('/login/login_line_right.png');
        background-size: 100% 100%;
      }
    }
  }
}
</style>
