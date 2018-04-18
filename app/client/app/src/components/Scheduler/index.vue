<template>
  <div>
    <el-menu class="scheduler-nav" mode="horizontal" text-color="#fff" background-color="#2fa3d8">
      <el-menu-item index="1">Day</el-menu-item>
      <el-menu-item index="2">Week</el-menu-item>
      <el-menu-item index="3">Month</el-menu-item>
      <div class="date col">
        <el-date-picker v-model="pickerDate" type="date" :clearable="false" @change="pickNewDate">

        </el-date-picker>
      </div>
      <div class="right-menu col">
        <button type="button" class="btn">
          <span>显示今天</span>
        </button>
        <div class="arrow-group">
          <button type="button" class="btn"> <</button>
          <button type="button" class="btn"> ></button>
        </div>
      </div>
    </el-menu>
    <div class="scheduler-table" v-if="schedulerEvents" v-loading="loading">

      <template v-for="item in schedulerEvents">
        <el-row class="event-row">
          <el-col :span="1" class="event-hour">
            <span>{{item.hour}}</span>
          </el-col>
          <el-col :span="23" class="hour-events">
            <div class="events" @click="addEvent(item.events.length)">
              <el-row>
                <template v-for="event in item.events">
                  <el-col :span="8" class="event">
                    <span @click.stop="eventEdit">{{event.customer.name}}</span>
                  </el-col>
                </template>

              </el-row>
            </div>

          </el-col>
        </el-row>

      </template>

      <el-dialog title="预约表格" :visible.sync="dialogVisiable" width="30%" :close-on-click-modal="true"
                 @close="dialogVisiable=false">
        <el-form :model="form" label-position="left" label-width="80px">

          <el-row>
          <el-col :span="12">

            <el-form-item label="名称" >
              <multiselect
                v-model="form.customer"
                :options="customers"
                @search-change="getRemoteCustomers"
                placeholder="搜索用户"
                track-by="name"
                :custom-label="customLabel"
                selectLabel="选择"
              >
                <span slot="noResult">无结果</span>
              </multiselect>

            </el-form-item>
          </el-col>

          </el-row>



          <el-form-item label="医生" style="width: 300px">
            <el-input v-model="form.provider" auto-complete="off"></el-input>
          </el-form-item>


          <el-form-item label="开始时间" style="width: 300px">
            <el-row>
              <el-col :span="12">11:00</el-col>
              <el-col :span="12">11:00</el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="备注" style="width: 300px">
            <el-input v-model="form.provider" auto-complete="off" type="textarea"></el-input>
          </el-form-item>


        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisiable=false">取消</el-button>
          <el-button type="success" @click="onSubmit">保存</el-button>
        </div>
      </el-dialog>


    </div>
  </div>

</template>

<script>
  import {formatDate} from '@/utils/time'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'


  export default {
    name: "scheduler",
    data() {
      return {
        loading: true,
        dialogVisiable: true,
        // dialogVisiable: false,
        pickerDate: '2018-05-01',
        customers: [{phone:"13512345678",name:"王大拿"}],
        form: {
          customer: ''
        }
      }
    },
    components: {
      Multiselect
    },
    computed: {
      schedulerEvents() {
        console.log("get computed")
        return this.$store.getters.schedule_events
      }
    },
    mounted() {
      this.initData()
    },
    watch:{
      form(){
        console.log(form.customer)
      }
    },
    methods: {
      onSubmit() {
        this.dialogVisiable = false
      },
      addEvent(eventsLength) {
        if (eventsLength < 3) {
          this.dialogVisiable = true
        }
      },
      eventEdit() {
        console.log("edit")
      },
      pickNewDate() {
        this.loading = true
        console.log("xxx")
        const dateStr = formatDate(this.pickerDate)
        this.getDateEvents(dateStr)
      },
      initData() {
        console.log('initData')
        this.getDateEvents()
      },
      getDateEvents(dateStr) {

        this.$store.dispatch('pickNewDate', dateStr).then(
          this.loading = false
        )
      },
      getRemoteCustomers(query) {

      },
      customLabel(option){
        return `${option.phone} - ${option.name}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  i {
    color: white;
  }

  .btn {
    padding: 15px;
    border-radius: 0;
    border: none;
    background: #2fa3d8;
    display: inline-block;
    &:hover {
      background: #4bb9eb;
    }
    color: white;
  }

  .scheduler-nav {
    padding: 5px;
    .right-item {
      float: right;
    }

    .col {
      display: inline-block;
      height: 60px;
      line-height: 58px;
      color: white;
      &:hover {
        background: #4bb9eb;
      }
    }

    .right-menu {
      float: right;
    }

    .arrow-group {
      display: inline-block;
    }
  }

  .scheduler-table {
    .event-row {
      height: 50px;
      line-height: 50px;
      border: 1px solid #CECECE;
      .event-hour {
        display: inline-block;
        float: left;
        border-right: 1px solid #CECECE;
        color: #999999;
      }
      .hour-events {
        height: 100%;
        .events {
          height: 100%;
          .event {
            span {
              color: white;
              display: inline-block;
              width: 95%;
              height: 40px;
              line-height: 40px;
              border-radius: 8px;
              background: #2fa3d8;
            }
          }
        }

      }
    }
  }


</style>
