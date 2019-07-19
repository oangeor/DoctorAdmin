<template>
  <div class="wrapper">
    <ul>
      <li>
        xxx
        <div class="number">100</div>
      </li>

      <li>
        xxx
        <div class="number">100</div>
      </li>

      <li>
        xxx
        <div class="number">100</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "header-menu"
  }
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
    border: 1px solid #e6e7f3;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  ul li {
    float: left;
    margin-right: 3rem;
  }
</style>