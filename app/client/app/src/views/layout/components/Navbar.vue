<template>
  <el-menu mode="horizontal" class="navbar">
    <div class="left-menu"></div>
    <div class="right-menu">
      <el-dropdown>
        <el-button type="primary">
          权医生 <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>dashboard</el-dropdown-item>
          </router-link>
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

    .right-menu {
      float: right;
    }
  }
</style>
