<template>
    <dynamic-table>
        <div slot="buttons">
            <el-button type="primary">新增挂号</el-button>
            <el-button type="primary">新增患者</el-button>
        </div>
        <el-table :key="0" :data="dataList" v-loading="listLoading" element-loading-text="正在载入" border fit
                  highlight-current-row="" @row-click="rowClick">

            <el-table-column align="center" label="姓名" width="300">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="性别" width="50">
                <template slot-scope="scope">
                    <span>{{scope.row.sex}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="年龄" width="50">
                <template slot-scope="scope">
                    <span>{{scope.row.age}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="手机号" width="160">
                <template slot-scope="scope">
                    <span>{{scope.row.phone}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="医生" width="120">
                <template slot-scope="scope">
                    <span>{{scope.row.doctor}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="类型" width="120">
                <template slot-scope="scope">
                    <span>{{scope.row.regType}}</span>
                </template>
            </el-table-column>
            <!--<el-table-column align="center" label="就诊事项" width="150">-->
                <!--<template slot-scope="scope">-->
                    <!--<span>xxx</span>-->
                <!--</template>-->
            <!--</el-table-column>-->
            <el-table-column align="center" label="时间" width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.bookTime}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="状态" width="120">
                <template slot-scope="scope">
                    <span>{{scope.row.status}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary">接诊</el-button>
                </template>
            </el-table-column>
        </el-table>

    </dynamic-table>
</template>

<script>
  import DynamicTable from './DynamicTable'

  export default {
    name: "registration",
    data() {
      return {
        listLoading: false,
        dataList: [
          {
            name: '王小平',
            sex:'男',
            age:11,
            phone:13512312398,
            doctor:'王大夫',
            regType:'初诊',
            bookTime:'2018-01-01',
            status:'候诊中',
          },
          {
            name: '王小平',
            sex:'男',
            age:11,
            phone:13512312398,
            doctor:'王大夫',
            regType:'复诊',
            bookTime:'2018-01-01',
            status:'候诊中',
          },
          {
            name: '王小平',
            sex:'男',
            age:11,
            phone:13512312398,
            doctor:'王大夫',
            regType:'初诊',
            bookTime:'2018-01-01',
            status:'候诊中',
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