<template>
  <div class="content">
    <div class="process" v-if="false">
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
    <div class="customer-detail" v-if="true">
      <div class="detail-header">
        <span>{{customerInfo.name}}</span>
      </div>
      <div class="detail-items">
        <div class="detail-item">
          <span>性别:</span>
          <span>{{customerInfo.sex}}</span>
        </div>
        <div class="detail-item">
          <span>年龄:</span>
          <span>{{customerInfo.age}}</span>
        </div>
        <div class="detail-item">
          <span>手机号:</span>
          <span>{{customerInfo.phone}}</span>
        </div>
        <div class="detail-item">
          <span>地址:</span>
          <span>{{customerInfo.address}}</span>
        </div>

      </div>

    </div>
    <div class="operations">
    </div>
    <div class="booking-detail">

      <div class="detail-title">
        <span><i class="el-icon-document"></i>预约记录</span>
      </div>

      <template v-for="item in customerInfo.events">

        <div class="detail-items">
          <div class="detail-item" v-if="false">
            <span>状态</span>
            <span>候诊中</span>
          </div>

          <div class="detail-item">
            <span>预约时间</span>
            <span>{{item.bookingTime}}</span>
          </div>
          <div class="detail-item">
            <span>备注</span>
            <span>{{item.memo?item.memo:"无"}}</span>
          </div>

        </div>
      </template>

    </div>

  </div>
  <!--</div>-->
</template>

<script>
  export default {
    name: "slider-content",
    customerInfo: {
      sex: '',
      age: '',

    },
    props: {
      model: {
        default: function () {
          return {}
        },

      },
      customerInfo: {
        default: function () {
          return {}
        }
      },

    },
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
      .detail-items {
        margin-top: 30px;
        .detail-item {
          margin-bottom: 10px;
          font-size: 1.0rem;
          color: #999;
          & span:first-child {
            display: inline-block;
            width: 80px;
          }
        }
      }

    }

  }


</style>
