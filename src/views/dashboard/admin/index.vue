<template>
  <div class="dashboard-container">
    <!--<panel-group></panel-group>-->
    <h1>今日工作安排</h1>
    <div class="table-wrapper">

      <el-table :key="0" :data="list" v-loading="listLoading" element-loading-text="正在载入" border fit
                highlight-current-row="" @row-click="rowClick">


        <el-table-column align="center" label="预约时间" width="300">
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


        <el-table-column align="center" label="备注" width="500">
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
  import PanelGroup from './components/PanelGroup'
  import SliderContent from './components/SliderContent'
  import RightSlider from '@/components/RightSlider'
  import {formatDate, changeDate} from '@/utils/time'

  import eventAPi from '@/api/schedule'
  import customerApi from '@/api/customer'

  export default {
    name: "admin",
    data() {
      return {
        listLoading: false,
        today: formatDate(new Date()),
        currentScheduler: {},
        customerInfo: {},
        isShowRightSlide: false,
        list: null,
        textMap: {
          create: '创建客户',
          update: '更新信息'
        },
        dialogStatus: 'create',
        customerForm: {
          name: '',
          phone: '',
          gender: '',
          age: '',
          address: ''
        },
        dialogVisible: false,
        rules: {}
      }
    },
    components: {
      PanelGroup,
      RightSlider,
      SliderContent,
    },
    created() {
      this.fetchEvent()
    },
    methods: {
      fetchEvent() {
        this.listLoading = true
        eventAPi.getDateEvents(this.today).then(res => {
          this.list = res.data
          this.listLoading = false
        })
      },
      rowClick(row) {
        console.log(row)
        this.currentScheduler = row
        this.isShowRightSlide = true
        this.retriveCustomer(row.event.customer.id)
      },
      retriveCustomer(customer_id) {
        customerApi.retriveCustomer(customer_id).then(res => {
          console.log(res.data)
          this.customerInfo = res.data;
        })
      }

    }
  }
</script>
<style scoped>
  .dashboard-container {
    padding: 20px;
  }

  .table-wrapper {
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
  }
</style>
