<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="姓名" style="width: 150px" v-model="queryName"></el-input>
      <el-input placeholder="手机号" style="width: 250px" v-model="queryPhone"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      <el-button type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
    </div>
    <el-table :key="0" :data="list" v-loading="listLoading" element-loading-text="正在载入" border fit
              highlight-current-row="">

      <el-table-column align="center" label="id" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="姓名" width="150">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="性别" width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.sex == 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="年龄" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.age}}</span>

        </template>
      </el-table-column>

      <el-table-column align="center" label="手机号" width="250">
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="电子邮箱" width="300">
        <template slot-scope="scope">
          <span>{{scope.row.email}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="住址" width="500">
        <template slot-scope="scope">
          <span>{{scope.row.address}}</span>
        </template>
      </el-table-column>


      <el-table-column align="center" label="操作" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogVisible" width="40%">
      <el-form :rules="rules" ref="customerForm" :model="customerForm" label-position="left" label-width="70px">

        <el-form-item label="姓名" style="width: 200px" prop="name">
          <el-input v-model="customerForm.name" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="年龄" style="width: 200px" prop="age">
          <el-input v-model="customerForm.age"></el-input>
        </el-form-item>

        <el-form-item label="性别" style="width: 200px">
          <el-radio-group v-model="customerForm.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="手机号" style="width: 300px" prop="phone">
          <el-input v-model="customerForm.phone"></el-input>
        </el-form-item>


        <el-form-item label="电子邮箱" style="width: 300px" prop="email">
          <el-input v-model="customerForm.email"></el-input>
        </el-form-item>

        <el-form-item label="住址" style="width: 500px" prop="address">
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

  import customerApi from '@/api/customer'

  export default {
    name: 'customer',
    data() {
      return {
        // radio:"2",


        queryName: '',
        queryPhone: '',
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
          sex: '',
          age: '',
          address: ''
        },
        dialogVisible: false,
        rules: {
          name: [
            {required: true, message: '不能为空', trigger: 'blur'},
            {min: 2, max: 5, message: '长度2到5个字符', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '不能为空', trigger: 'blur'},

            {min: 11, max: 11, message: '输入正确的手机号', trigger: 'blur'}
          ],
        }
      }
    },
    created() {
      this.fetchCustomer()
    },
    methods: {
      resetForm() {
        this.customerForm = {
          name: '',
          phone: '',
          sex: '',
          age: '',
          address: ''
        }
      },
      fetchCustomer() {
        customerApi.getCustomer().then(response => {
          this.list = response.data
        }).catch(error => {
          console.log(error)
        })
      },
      createCustomer() {
        this.$refs['customerForm'].validate((valid) => {
          if (!valid) {
            return
          }
          customerApi.createCustomer(this.customerForm).then(
            response => {
              this.$notify({
                title: '成功',
                message: "创建成功",
                type: 'success',
                duration: 2000,
              })
              this.dialogVisible = false
              this.fetchCustomer()
            }
          ).catch(error => console.log(error))

        })


      },
      updateCustomer() {

        this.$refs['customerForm'].validate((valid) => {
          if (!valid) {
            return
          }
          customerApi.updateCustomer(this.customerForm).then(
            response => {
              this.$notify({
                title: '成功',
                message: "修改成功",
                type: 'success',
                duration: 2000,
              })
              this.dialogVisible = false
              this.fetchCustomer()
            }
          )
        })

      },
      handleUpdate(row) {
        this.customerForm = Object.assign({}, row)
        this.customerForm.sex = row.sex.toString()
        this.dialogStatus = 'update'
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs['customerForm'].clearValidate()
        })
      },
      handleCreate() {
        this.dialogStatus = 'create'
        this.resetForm()
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs['customerForm'].clearValidate()
        })
      },
      handleSearch() {
        if (!this.queryName.trim() && !this.queryPhone.trim()) {
          this.fetchCustomer()
        } else {
          const query = {
            name: this.queryName,
            phone: this.queryPhone
          }
          customerApi.searchCustomer(query).then(
            response => {
              this.list = response.data
            }
          )
        }
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
