<template>
    <dynamic-table>
        <div slot="buttons">
            <el-button type="primary">新增收费单</el-button>
        </div>
        <el-table :key="0" :data="dataList" v-loading="listLoading" element-loading-text="正在载入" border fit
                  highlight-current-row="" @row-click="rowClick">

            <el-table-column align="center" label="姓名" width="300">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="单号" width="200">
                <template slot-scope="scope">
                    <span>{{scope.row.sex}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="医生" width="200">
                <template slot-scope="scope">
                    <span>{{scope.row.age}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="账单时间" width="200">
                <template slot-scope="scope">
                    <span>{{scope.row.phone}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="账单金额" width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.doctor}}</span>
                </template>
            </el-table-column>


        </el-table>

    </dynamic-table>
</template>

<script>
  import DynamicTable from './DynamicTable'

  export default {
    name: "to-change",
    data() {
      return {
        listLoading: false,
        dataList: [
          {
            name: '王小平',
            sex: '男',
            age: 11,
            phone: 13512312398,
            doctor: '王大夫',
            regType: '初诊',
            bookTime: '2018-01-01',
            status: '候诊中',
          },
          {
            name: '王小平',
            sex: '男',
            age: 11,
            phone: 13512312398,
            doctor: '王大夫',
            regType: '复诊',
            bookTime: '2018-01-01',
            status: '候诊中',
          },
          {
            name: '王小平',
            sex: '男',
            age: 11,
            phone: 13512312398,
            doctor: '王大夫',
            regType: '初诊',
            bookTime: '2018-01-01',
            status: '候诊中',
          }
        ]

      }
    },
    components: {DynamicTable},
    methods: {
      rowClick() {

      }
    }

  }
</script>

<style lang="scss" scoped>
    .reg-container {
    }

    .right-buttons {
        overflow: hidden;
        margin-bottom: 10px;
        .button-group {
            float: right;
        }
    }


</style>