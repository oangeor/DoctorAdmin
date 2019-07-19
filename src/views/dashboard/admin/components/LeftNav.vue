<template>
  <div class="left-nav-container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="2" >
            <span slot="title">导航三</span>
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

<style scoped>

  .el-menu-vertical {
    width: 150px;
    min-height: 400px;
  }
</style>