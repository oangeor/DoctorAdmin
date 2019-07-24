<template>
  <div class="dashboard-container">
    <!--<panel-group></panel-group>-->
    <!--<h1>今日工作安排</h1>-->

    <header-menu/>
    <div class="left-nav">
      <left-nav/>
    </div>
    <div class="right-container">
      <today-register/>
    </div>


  </div>
</template>

<script>
  import SliderContent from './components/SliderContent'
  import RightSlider from '@/components/RightSlider'
  import HeaderMenu from './components/HeaderMenu'
  import TodayRegister from './components/TodayRegister'
  import LeftNav from './components/LeftNav'
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
      RightSlider,
      SliderContent,
      HeaderMenu,
      TodayRegister,
      LeftNav,
    },
    created() {
      // TODO: for debug
      // this.fetchEvent()
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
<style lang="scss" scoped>
  .dashboard-container {
    height: 100%;
  }

  .left-nav{
    float: left;
  }

  .right-container {
    margin-left: 180px;
    @include my-border;
    height: 100%;
  }


</style>
