<template>
  <div class="app-wrapper">
    <navbar class="nav-container"></navbar>
    <sidebar class="sidebar-container"></sidebar>
    <app-main class="main-container"></app-main>
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
  .app-wrapper {
    //@include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
