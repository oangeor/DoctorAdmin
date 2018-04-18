<template>
  <el-menu mode="horizontal" class="navbar">
    <div class="left-menu">
      <div class="logo">
        <a href="/">
          <img src="@/assets/logo-text.png"></img>
        </a>
      </div>
    </div>
    <div class="right-menu">
      <el-dropdown>
        <el-button type="primary">
          权医生 <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <!--<router-link to="/">-->
            <!--<el-dropdown-item>dashboard</el-dropdown-item>-->
          <!--</router-link>-->
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>账户信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>

</script>

<style lang="scss" scoped>
  .navbar {
    padding: 0 15px;
    height: 60px;
    line-height: 60px;

    .left-menu{
      float: left;
      margin-left: 50px;
    }
    .right-menu {
      float: right;
    }
  }
</style>
