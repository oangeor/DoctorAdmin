<template>
  <div class="sidebar-container">
    <el-menu mode="vertical" background-color="white" text-color="#666" active-text-color="#1890ff">
      <!--<el-menu mode="vertical" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">-->
      <div class="logo">
        <a href="/">
          <img src="@/assets/logo-text.png"></img>
        </a>
      </div>

      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'permission_routers'
      ])
    }
  }
</script>

<style scoped>
  .sidebar-container{
  /*width: 180px;*/
  /*background-color: #409eff;*/
  }
  .el-menu {
    height: 100%;
  }

  .logo {
    box-sizing: border-box;
    padding: 30px;
    margin-bottom: 3px;
    height: 72px;
    box-shadow: 0 1px 9px -3px rgba(0,0,0,.2);
  }
</style>
