<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="姓名" style="width: 150px"></el-input>
      <el-input placeholder="手机号" style="width: 250px"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" icon="el-icon-edit" >添加</el-button>
    </div>
    <el-table :key="0" :data="list" v-loading="listLoading" element-loading-text="正在载入" border fit
              highlight-current-row="">

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

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogVisible" width="40%">
      <el-form :rules="rules" ref="dataForm" :model="customerForm" label-position="left" label-width="70px">

        <el-form-item label="姓名" style="width: 200px">
          <el-input v-model="customerForm.name" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="年龄" style="width: 200px">
          <el-input v-model="customerForm.age"></el-input>
        </el-form-item>

        <el-form-item label="性别" style="width: 200px">
          <el-radio-group v-model="customerForm.gender">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
          <!--<el-input v-model="customerForm.gender"></el-input>-->
        </el-form-item>

        <el-form-item label="手机号" style="width: 300px">
          <el-input v-model="customerForm.phone"></el-input>
        </el-form-item>


        <el-form-item label="电子邮箱" style="width: 300px">
          <el-input v-model="customerForm.email"></el-input>
        </el-form-item>

        <el-form-item label="住址" style="width: 500px">
          <el-input v-model="customerForm.address"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createCustomer">创建</el-button>
        <el-button v-else @click="updateCustomer" type="primary">更新</el-button>
      </div>
    </el-dialog>

  </div>


</template>

<script>

  import {getCustomer} from '@/api/customer'

  export default {
    name: 'customer',
    data() {
      return {
        listLoading: false,
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
    created() {
      this.fetchCustomer()
    },
    mounted(){
      console.log(this)
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
      createCustomer() {
      },
      updateCustomer() {
      },
      openEditForm(row) {
        this.customerForm = Object.assign({}, row)
        this.dialogStatus = 'update'
        this.dialogVisible = true
        this.$nextTick(()=>{
          this.$refs['dataForm'].clearValidate()
        })
      }

    }
  }
</script>

<style lang="scss" scoped>
  .filter-container {
    float: left;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
