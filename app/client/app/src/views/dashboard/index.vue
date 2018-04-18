<template>
  <div class="dashboard-container">
    <admin-dashboard></admin-dashboard>
  </div>
</template>

<script>
  import adminDashboard from './admin'

  export default {
    name: "dashboard",
    data() {
      return {
        customers: [],
        name: ''
      }
    },
    components: {
      adminDashboard
    },
    methods: {}

  }
</script>

<style scoped>

</style>
