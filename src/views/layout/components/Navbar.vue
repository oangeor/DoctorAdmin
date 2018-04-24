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
