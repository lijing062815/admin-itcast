<template>
  <div class="home">
    <el-container class="el-container">
      <el-aside width="200px" class="el-aside">Aside</el-aside>
    <el-container>
      <el-header class="el-header">Header</el-header>
      <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import {getUserList} from '@/api'
export default {
  mounted() {
    let params = {params:{query:'',pagenum:1,pagesize:1}}
    getUserList(params).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    background-color: #e5e5e5;
    .el-memu-admin:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .el-container {
      height: 100%
    }
    .el-aside {
      background-color: #545c64;
    }
    .el-header {
      display:flex;
      justify-content: space-between;
      align-items: center;
      background-color: #009688;
    }
    .logo {
      height: 60px;
      background: url(../assets/logo.png);
      background-size: cover;
      background-color: #fff;
    }
    .toggle-btn {
      padding: 0 10px;
      margin-left: -20px;
      font-size: 36px;
      line-height: 60px;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #00635a;
      }
    }
    .system-title {
      font-size: 280px;
      color: #fff;
    }
    .welcom, {
      color: #fff
    }
  }
</style>
