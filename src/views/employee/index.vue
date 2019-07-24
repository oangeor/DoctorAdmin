<template>
  <div class="employ-container">

    <el-row class="search-row">
      <el-col :span="2">
        <el-input v-model="input"
                  placeholder="请输入内容"
                  maxlength="5"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">搜索</el-button>
      </el-col>
    </el-row>


    <div class="employee-table">
      <template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </template>

    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .search-row {
  }

  .employee-table {
    height: 70vh;
  }
</style>