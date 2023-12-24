<template>
<div class="box">
  <h2>用户注册</h2>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>

</el-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
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
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]

      }

    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.$axios({
            url: 'http://interview-api-t.itheima.net/h5/user/register',
            method: 'POST',
            data: {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            }
          })
          this.$router.push({ path: '/login' })
          this.$message({
            message: '恭喜你注册成功，现在登陆试试',
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
  background-image: url(2.jpg);
}
</style>
