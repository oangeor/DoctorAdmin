<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: "AppMain"
  }
</script>

<style scoped>
.app-main{
  padding: 0 15px;
  margin-top: 60px;
}
</style>
