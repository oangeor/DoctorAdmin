<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="姓名" style="width: 150px" v-model="queryName"></el-input>
      <el-input placeholder="手机号" style="width: 250px" v-model="queryPhone"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      <el-button type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
    </div>
    <el-table :key="0" :data="list" v-loading="listLoading" element-loading-text="正在载入" border fit
              highlight-current-row="" @row-click="rowClick">

      <el-table-column align="center" label="id" width="50">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="姓名" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="性别" width="50">
        <template slot-scope="scope">
          <span v-if="scope.row.sex == 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="年龄" width="50">
        <template slot-scope="scope">
          <span>{{scope.row.age}}</span>

        </template>
      </el-table-column>

      <el-table-column align="center" label="手机号" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>


      <el-table-column align="center" label="操作" width="70"  fixed="right" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click.stop="handleUpdate(scope.row)">编辑</el-button>
        </template>
      </el-table-column>



      <el-table-column align="center" label="生日" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.birthday}}</span>
        </template>
      </el-table-column>

                 <el-table-column align="center" label="来源途径" width="150">
        <template slot-scope="scope">
          <span>{{scope.row.source}}</span>
        </template>
      </el-table-column>

      <!-- <el-table-column align="center" label="是否加微信" width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.sex == 1">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column> -->

            <el-table-column align="center" label="加微信" width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.isWechat == 1">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>

            <el-table-column align="center" label="初/复诊" width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.isFirst == 1">复诊</span>
          <span v-else>初诊</span>
        </template>
      </el-table-column>


            <el-table-column align="center" label="隐适美" width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.isYinshimei == 1">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>


            <el-table-column align="center" label="时代天使" width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.isShidaitianshi == 1">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>

                 <!--<el-table-column align="center" label="固定矫治" width="200">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.guding}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->



        <!--<el-table-column align="center" label="回访" width="50">-->
        <!--<template slot-scope="scope">-->
          <!--<span v-if="scope.row.isRevisit == 1">是</span>-->
          <!--<span v-else>否</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

        <!--<el-table-column align="center" label="成交" width="50">-->
        <!--<template slot-scope="scope">-->
          <!--<span v-if="scope.row.isDeal == 1">是</span>-->
          <!--<span v-else>否</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

        <!--<el-table-column align="center" label="消费" width="50">-->
        <!--<template slot-scope="scope">-->
          <!--<span v-if="scope.row.isConsumed == 1">是</span>-->
          <!--<span v-else>否</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

           <!--<el-table-column align="center" label="性格分类" width="150">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.character}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

      <!--<el-table-column align="center" label="客单价" width="80">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.pct}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

           <!--<el-table-column align="center" label="复购率" width="80">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.repurchaseRate}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

           <!--<el-table-column align="center" label="转介绍率" width="80">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.jieshaoRate}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

           <!--<el-table-column align="center" label="vip" width="80">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.vip}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!---->
      <!--<el-table-column align="center" label="评分" width="80">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.score}}</span>-->
        <!--</template>-->
         <!--</el-table-column>-->
      <!--<el-table-column align="center" label="电子邮箱" width="120">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.email}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->


      <!--<el-table-column align="center" label="住址" width="500">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scope.row.address}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->




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

        <el-form-item label="生日" style="width: 500px" prop="address">
          <el-input v-model="customerForm.birthday"></el-input>
        </el-form-item>


        <el-form-item label="来源途径" style="width: 500px" prop="address">
          <el-input v-model="customerForm.source"></el-input>
        </el-form-item>

       <el-form-item label="加微信" style="width: 200px">
          <el-radio-group v-model="customerForm.isWechat">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="初/复诊" style="width: 200px">
          <el-radio-group v-model="customerForm.isFirst">
            <el-radio label="1">复</el-radio>
            <el-radio label="2">初</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="隐适美" style="width: 200px">
          <el-radio-group v-model="customerForm.isYinshimei">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item label="时代天使" style="width: 200px">
          <el-radio-group v-model="customerForm.isShidaitianshi">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="固定矫治" style="width: 500px" prop="address">
          <el-input v-model="customerForm.guding"></el-input>
        </el-form-item>

       <el-form-item label="回访" style="width: 200px">
          <el-radio-group v-model="customerForm.isRevisit">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>

             <el-form-item label="成交" style="width: 200px">
          <el-radio-group v-model="customerForm.isDeal">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="消费" style="width: 200px">
          <el-radio-group v-model="customerForm.isConsumed">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item label="性格分类" style="width: 500px" prop="address">
          <el-input v-model="customerForm.character"></el-input>
        </el-form-item>

        <el-form-item label="客单价" style="width: 500px" prop="address">
          <el-input v-model="customerForm.pct"></el-input>
        </el-form-item>


        <el-form-item label="复购率" style="width: 500px" prop="address">
          <el-input v-model="customerForm.repurchaseRate"></el-input>
        </el-form-item>


        <el-form-item label="转介绍率" style="width: 500px" prop="address">
          <el-input v-model="customerForm.jieshaoRate"></el-input>
        </el-form-item>


        <el-form-item label="VIP" style="width: 500px" prop="address">
          <el-input v-model="customerForm.vip"></el-input>
        </el-form-item>


        <el-form-item label="评分" style="width: 500px" prop="address">
          <el-input v-model="customerForm.score"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createCustomer">创建</el-button>
        <el-button v-else @click="updateCustomer" type="primary">更新</el-button>
      </div>
    </el-dialog>


    <right-slider width="760px" title="详细信息" :visible.sync="isShowRightSlide">
      <slider-content :model="currentScheduler" :customerInfo="customerInfo"></slider-content>
    </right-slider>

  </div>


</template>

<script>

  import customerApi from '@/api/customer'
  import SliderContent from './components/SliderContent'
  import RightSlider from '@/components/RightSlider'

  export default {
    name: 'customer',
    data() {
      return {
        // radio:"2",
        currentScheduler:{},
        customerInfo:{},
        isShowRightSlide:false,
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
          // name: '',
          // phone: '',
          // sex: '',
          // age: '',
          // address: ''
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
    components: {
      RightSlider,
      SliderContent,
    },
    created() {
      this.fetchCustomer()
    },
    methods: {
      resetForm() {
        this.customerForm = {
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
        this.customerForm.isWechat = row.isWechat.toString()
        this.customerForm.isFirst = row.isFirst.toString()
        this.customerForm.isYinshimei = row.isYinshimei.toString()
        this.customerForm.isShidaitianshi = row.isShidaitianshi.toString()
        this.customerForm.isRevisit = row.isRevisit.toString()
        this.customerForm.isDeal = row.isDeal.toString()
        this.customerForm.isConsumed = row.isConsumed.toString()

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
      },
      rowClick(row) {
        this.currentScheduler = row
        console.log(row)
        this.isShowRightSlide = true
        this.retriveCustomer(row.id)
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
  .filter-container {
    float: left;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
