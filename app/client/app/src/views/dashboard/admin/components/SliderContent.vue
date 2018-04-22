<template>
  <!--<div class="right-slider-container">-->
  <!--<div class="header">-->
  <!--<span>详细信息</span>-->
  <!--<el-button icon="el-icon-close" type="text" class="close-button" circle size="mini"></el-button>-->
  <!--</div>-->
  <div class="content">
    <div class="process">
      <div class="process-title">
        <span>就诊流程</span>
      </div>
      <div class="process-flow">
        <div class="process-flow-items">
          <span>候诊中</span>
          <span>已签到</span>
          <span>已完成</span>
        </div>
        <el-progress :percentage="50" :show-text="false"></el-progress>
      </div>
    </div>
    <div class="customer-detail">
      <div class="detail-header">
        <span>{{model.name}}</span>
      </div>
      <div class="detail-items">
        <div class="detail-item">
          <span>性别:</span>
          <span>男</span>
        </div>
        <div class="detail-item">
          <span>年龄:</span>
          <span>11</span>
        </div>
        <div class="detail-item">
          <span>手机号:</span>
          <span>{{model.phone}}</span>
        </div>
        <div class="detail-item">
          <span>地址:</span>
          <span>北京市朝阳区</span>
        </div>

        <div class="detail-item">
          <span>地址:</span>
          <span>北京市朝阳区</span>
        </div>
      </div>

    </div>
    <div class="operations">
      <div class="operation-item">
        <el-button type="primary"><i class="el-icon-date"></i> 预约复诊</el-button>
      </div>
      <div class="operation-item">
        <el-button type="primary"><i class="el-icon-document"></i> 新增病历</el-button>
      </div>
      <div class="operation-item">
        <el-button type="primary"><i class="el-icon-document"></i> 新增收费单</el-button>
      </div>
    </div>
    <div class="booking-detail">
      <div class="detail-title">
        <span><i class="el-icon-document"></i>  下次预约</span>
      </div>
      <div class="detail-items">
        <div class="detail-item">
          <span>状态</span>
          <span>候诊中</span>
        </div>

        <div class="detail-item">
          <span>医生</span>
          <span>权医生</span>
        </div>

        <div class="detail-item">
          <span>预约时间</span>
          <span>2018-05-01</span>
        </div>
        <div class="detail-item">
          <span>备注</span>
          <span>-</span>
        </div>

      </div>
    </div>

  </div>
  <!--</div>-->
</template>

<script>
  export default {
    name: "slider-content",
    props: {
      model: {
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    .process {
      padding: 30px 0;
      border-bottom: 1px dashed #dbdbdb;
      .process-title {
        text-align: left;
        margin-bottom: 20px;
      }
      .process-flow {
        .process-flow-items {
          display: flex;
          justify-content: space-between;
          /*padding: 0 10px;*/
          font-size: 0.6rem;
          margin-bottom: 12px;
        }
      }
    }

    .customer-detail {
      padding: 30px 0;
      border-bottom: 1px dashed #dbdbdb;
      .detail-header {
        /*span{*/
        line-height: 2.2rem;
        height: 2.2rem;
        text-align: left;
        font-size: 1.2rem;
        font-weight: 700;
        color: black;
        /*}*/
      }
      .detail-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 30px;
        .detail-item {
          display: flex;
          text-align: left;
          width: 30%;
          padding: 6px;
          color: #999;
          font-size: 0.6rem;
        }
      }
    }
    .operations {
      padding: 30px 0;
      border-bottom: 1px dashed #dbdbdb;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      text-align: left;
      .operation-item {
        width: 33%;
      }

    }

    .booking-detail {
      padding: 15px 0;
      text-align: left;
      .detail-title {
        margin-bottom: 15px;
      }
      .detail-item {
        margin-bottom: 10px;
        font-size: 0.6rem;
        color: #999;
        & span:first-child {
          display: inline-block;
          width: 80px;
        }
      }
    }

  }


</style>
