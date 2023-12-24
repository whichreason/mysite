<template>
<div class="box">
<el-container class="el-container">
  <el-header>
    <el-row class="el-row1">
  <el-button type="warning" icon="el-icon-s-custom" @click="login" circle>{{res}}</el-button>
  <el-button type="danger" icon="el-icon-paperclip" @click="register" circle>注册</el-button>
  <el-button type="danger" icon="el-icon-delete-solid" @click="del" circle>退出</el-button>
</el-row>
</el-header>
  <el-container class="container">
    <el-aside width="150px"><el-row class="tac">

  <el-col :span="12" class="el-col">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"

      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1" >
        <template slot="title" >
          <i class="el-icon-location"></i>
          <span @click="show">展示页面</span>
        </template>
      </el-submenu>
      <el-menu-item index="2" @click="open">
        <i class="el-icon-menu"></i>
        <span slot="title">面经管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>

</el-row></el-aside>

    <el-main class="el-main">
<router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      res: ''
    }
  },
  async  created () {
    const res = await this.$axios({
      url: 'http://interview-api-t.itheima.net/h5/user/currentUser',
      headers: { Authorization: localStorage.getItem('h5-pc') }
    })
    console.log(res)
    this.res = res.data.data.username
  },
  methods: {
    login () {
      this.$router.push({ path: '/login' })
    },
    register () {
      this.$router.push({ path: '/register' })
    },
    del () {
      this.$router.push({ path: '/login' })
      localStorage.removeItem('h5-pc')
      this.$message({
        message: '已经退出登录',
        type: 'warning'
      })
    },
    show () {
      this.$router.push({ path: '/show' }).catch(error => console.log(error))
      console.log('llls')
    },
    open () {
      this.$router.push({ path: '/listitem' }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="less" scoped>
.el-container{
  height: 100vh;

}
.el-row1{
  float: right;
}

.el-col{
    width: 150px;
    height: 800px;
    background-color: #333;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>>
