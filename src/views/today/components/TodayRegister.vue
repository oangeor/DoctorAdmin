<template>
  <div class="today-register-container">

    <div class="table-wrapper">

      <el-table :key="0" :data="list" v-loading="listLoading" element-loading-text="正在载入" border fit
                highlight-current-row="" @row-click="rowClick">

        <el-table-column align="center" label="预约时间" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.event.bookingTime}}</span>
          </template>
        </el-table-column>


        <el-table-column align="center" label="用户id" width="200">
          <template slot-scope="scope">
            <span>{{scope.row.event.customer.id}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="姓名" width="300">
          <template slot-scope="scope">
            <span>{{scope.row.event.customer.name}}</span>
          </template>
        </el-table-column>


        <el-table-column align="center" label="备注">
          <template slot-scope="scope">
            <span>{{scope.row.event.memo}}</span>
          </template>
        </el-table-column>

      </el-table>

    </div>

    <right-slider width="760px" title="详细信息" :visible.sync="isShowRightSlide">
      <slider-content :model="currentScheduler" :customerInfo="customerInfo"></slider-content>
    </right-slider>
  </div>

</template>

<script>
  export default {
    name: "Event",
    data(){
      return{
        listLoading:false
      }
    }
  }
</script>

<style scoped>

  .table-wrapper {
    /*padding-left: 10px;*/
    background: #fff;
  }
</style>