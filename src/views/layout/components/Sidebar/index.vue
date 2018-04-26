<template>
  <div>
    <el-menu mode="vertical" >
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
