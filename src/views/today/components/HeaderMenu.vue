<template>
  <div class="wrapper">
    <ul>
      <li>
        今日新增
        <div class="number">
          <em>100</em>
        </div>
      </li>

      <li>
        今日预约
        <div class="number">
          <em>100</em>
        </div>
      </li>

      <li>
        今日
        <div class="number">
          <em>100</em>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "header-menu"
  }
</script>

<style lang="scss" scoped>
  /*@import "~@/styles/mixin.scss";*/

  .wrapper {
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 1rem;
    @include my-border;
  }

  ul {
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
    color: #999;
    font-style: normal;
    font-size: .7rem;
  }

  ul li {
    float: left;
    margin-right: 3rem;
  }

  .number {
    padding-top: .72rem;
    em{
      font-size: 1.2rem;
      color: #7a80fa;
      padding-right: .3em;
      font-style: normal;

    }
  }

</style>