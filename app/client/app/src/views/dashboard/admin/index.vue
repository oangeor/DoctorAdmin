<template>
  <div class="dashboard-container">
    <panel-group></panel-group>

    <div class="table-wrapper">

      <el-table :key="0" :data="list" v-loading="listLoading" element-loading-text="正在载入" border fit
                highlight-current-row="" @row-click="rowClick">

        <el-table-column align="center" label="id" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.id}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="姓名" width="600">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="手机号" width="600">
          <template slot-scope="scope">
            <span>{{scope.row.phone}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="操作" width="230" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="openEditForm(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>

    <right-slider width="760px" title="详细信息" :visible.sync="isShowRightSlide" >
      <slider-content :model="currentScheduler"></slider-content>
    </right-slider>


  </div>
</template>

<script>
  import PanelGroup from './components/PanelGroup'
  import SliderContent from './components/SliderContent'
  import RightSlider from '@/components/RightSlider'

  import {getCustomer} from '@/api/customer'

  export default {
    name: "admin",
    data() {
      return {
        listLoading: false,
        currentScheduler:{},
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
      this.fetchCustomer()
    },
    methods: {
      fetchCustomer() {
        getCustomer().then(response => {
          console.log(response.data)
          console.log(response.data)
          this.list = response.data
        }).catch(error => {
          console.log(error)
        })
      },
      rowClick(row){
        console.log(row)
        this.currentScheduler = row;
        this.isShowRightSlide = true

      }
    }
  }
</script>
<style scoped>
  .dashboard-container {
    /*margin-top: 20px;*/
    padding: 20px;
  }

  .table-wrapper {
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
  }
</style>
