<template>
  <div class="login-containers">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form ref="loginForm" class="login-from">
          <h1>Hello</h1>
          <h2>欢迎第一次</h2>
          <el-form-item>
            <el-input type="username" :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
let userStore = useUserStore();

let $router = useRouter()
//收集账号与密码
import { reactive } from 'vue';
let loginForm = reactive({ username: 'admin', password: '123456' })
const login = async () => {
  // console.log(123)
  try {
    await userStore.userLogin(loginForm)
    // alert();
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功'
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })


  }

}
</script>

<style scoped lang="scss">
.login-containers {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login-from {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }

    .login-btn {
      width: 100%;

    }
  }
}
</style>
