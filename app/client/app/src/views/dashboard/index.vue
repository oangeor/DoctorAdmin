<template>
  <div>
    <h3>xxx</h3>
    <multiselect
      v-model="name"
      :options="customers"
      @search-change="getRemoteCustomers"
      placeholder="搜索用户"
      track-by="key"
      label="key"
    >
      <span slot="noResult">无结果</span>
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  export default {
    name: "dashboard",
    data(){
      return {
        customers:[],
        name:''
      }
    },
    components: {
      Multiselect
    },
    methods:{
      getRemoteCustomers(){

      }
    }

  }
</script>

<style scoped>

</style>
