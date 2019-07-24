<template>
  <div class="left-nav-container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical"
          >
          <el-menu-item index="1">
            <span slot="title">今日挂号</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">今日回访</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>

  .left-nav-container {
    @include my-border;
  }

  .el-menu-vertical {
    width: 150px;
    min-height: 400px;
  }
</style>