<template>
  <div class="apppmain-container">
    <section class="app-main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </div>

</template>

<script>
  export default {
    name: "AppMain"
  }
</script>

<style scoped>
  .apppmain-container{
    margin: 15px;
    padding: 30px;
    height: 100%;
    background-color: white;
  }
  .app-main{
    height: 100%;
  }
</style>
