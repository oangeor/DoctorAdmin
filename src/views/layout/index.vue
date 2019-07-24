<template>
  <div class="layout-container">
    <navbar class="nav-container"></navbar>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>

</template>

<script>
  import {Sidebar, Navbar, AppMain} from './components'

  export default {
    components: {
      Sidebar,
      Navbar,
      AppMain
    }
  }
</script>

<style lang="scss" scoped>
  .layout-container{
    height: 100%;
  }
</style>
