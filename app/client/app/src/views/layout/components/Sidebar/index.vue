<template>
  <div>
    <el-menu mode="vertical" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
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

</style>
