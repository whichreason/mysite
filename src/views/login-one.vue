<template>
<div class="box">
  <h2>用户登录</h2>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <el-button @click="zhuce">去注册</el-button>

</el-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const res = await this.$axios({
            url: 'http://interview-api-t.itheima.net/h5/user/login',
            method: 'POST',
            data: {
              username: this.ruleForm.name,
              password: this.ruleForm.password
            }
          })
          console.log(res)
          localStorage.setItem('h5-pc', 'Bearer ' + res.data.data.token)
          this.$router.push({ path: '/' })
          this.$message({
            message: '恭喜你已经登录',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    zhuce () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>
<style scoped>
.box{
  width: 500px;
  height: 400px;
  margin: 200px auto;
  border: 3px solid black;
  border-radius: 6px;
  display: flex;
  align-content: center;
  text-align: center;
  flex-direction: column;
  background-color: bisque;
}
</style>
