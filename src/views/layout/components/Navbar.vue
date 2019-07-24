<template>
  <el-menu mode="horizontal" class="navbar">

    <div class="right-menu">
      <el-dropdown>
        <el-button type="primary">
          {{userName}} <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
export default {
  name:'navbar',
  computed:{
    userName(){
      return this.$store.getters.user_name
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('Logout').then(()=>{
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 60px;
    line-height: 60px;

    .right-menu {
      float: right;
    }
  }
</style>
