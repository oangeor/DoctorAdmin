<template>
  <div>
    <el-menu class="scheduler-nav" mode="horizontal" text-color="#fff" background-color="#2fa3d8">
      <el-menu-item index="1">Day</el-menu-item>
      <el-menu-item index="2">Week</el-menu-item>
      <el-menu-item index="3">Month</el-menu-item>
      <div class="date col">
        <!--<button type="button" class="btn">-->
          <!--<i class="el-icon-date"></i>-->
        <!--</button>-->
        <!--<span>2018-05-01</span>-->
        <el-date-picker v-model="pickerDate" type="date" :clearable="false">

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
    <div class="scheduler-table">

      <template v-for="item in schedulerEvents">
        <el-row class="event-row">
          <el-col :span="1" class="event-hour">
            <span>{{item.hour}}</span>
          </el-col>
          <el-col :span="23" class="hour-events">
            <div class="events" @click="addEvent(item.events.length)">
              <el-row>
                <template v-for="event in item.events">
                  <el-col :span="8" class="event" @click="myClick">
                    <span @click.stop="eventEdit">{{event.customer.name}}</span>
                  </el-col>
                </template>

              </el-row>
            </div>

          </el-col>
        </el-row>

      </template>

      <el-dialog title="预约表格" :visible.syc="dialogVisiable" width="30%" :close-on-click-modal="true"
                 @close="dialogVisiable=false">
        <el-form :model="form" label-position="left" label-width="80px">
          <el-form-item label="名称" style="width: 300px">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>


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
          <el-button type="success" @click="dialogVisiable=false">保存</el-button>
        </div>
      </el-dialog>


    </div>
  </div>

</template>

<script>

  const generateEvents = () => {
    let eventItems = [];
    for (let i = 0; i < 9; i++) {
      let eventItem;
      const hour = 9 + i + ":00";
      eventItem = {
        hour: hour
      }
      eventItem.events = []
      if (Math.random() < 0.33) {
        for (let i = 0; i < 3; i++) {
          if (Math.random() > 0.33) {
            eventItem.events.push(
              {
                customer: {
                  id: 1,
                  name: '王大拿'
                },
                // user:{
                //   id:1,
                //   name:'李护士'
                // }
              }
            )
          }
        }
      }
      eventItems.push(eventItem)
    }
    return eventItems
  }

  export default {
    name: "index.vue",
    data() {
      return {
        schedulerEvents: generateEvents(),
        dialogVisiable: false,
        pickerDate:'2018-05-01',
        form: {
          name: ''
        }
      }
    },
    methods: {
      addEvent(eventsLength) {
        if (eventsLength < 3) {
          this.dialogVisiable = true
        }
      },
      eventEdit() {
        console.log("edit")
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
