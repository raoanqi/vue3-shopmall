<template>
  <div class="signin-page">
    <div class="signin-page-block">
      <el-form
          ref="signInForm"
          :model="form"
          :rules="rules"
          @keyup.enter.native="submitForm"
          label-position="left"
          label-width="80px">
        <el-form-item
            label="用户名"
            prop="username">
          <el-input
              v-model.trim="form.username"
              placeholder="请输入用户名"
              clearable>
          </el-input>
        </el-form-item>
        <el-form-item
            label="密码"
            prop="password">
          <el-input
              type="password"
              v-model.trim="form.password"
              placeholder="请输入密码"
              clearable
              show-password>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="signin-page-block-button">
        <el-button
            type="primary"
            @click="submitForm">
          登录
        </el-button>
        <el-button
            type="danger"
            @click="resetForm">
          重置
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue'
import Utils from '../utils'
import axios from '@/axios'
import md5 from 'js-md5'

export default {
  name: "SignIn",
  setup() {
    const signInForm = ref(null)
    const state = reactive({
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    })

    // 登录方法
    const submitForm = async () => {
      try {
        await signInForm.value.validate()
      } catch (error) {
        return
      }
      try {
        const options = {
          userName: state.form.username,
          passwordMd5: md5(state.form.password)
        }
        const res = await axios.post(`/adminUser/login`, options)
        console.log(res)
        Utils.localSet('token', res)
        window.location.href = '/'
      } catch (error) {
        console.error('登录失败')
      }
    }

    const resetForm = () => {
      signInForm.value.resetFields()
    }

    return {
      ...toRefs(state),
      signInForm,
      submitForm,
      resetForm
    }
  }
}
</script>

<style lang="scss">
.signin-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &-block {
    width: 350px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;

    &-button {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>