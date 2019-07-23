<template>
  <div>
    <div class="memo">
      <el-input type="textarea" autosize v-model="memo1" placeholder="请输入备忘" @blur="autoSave"></el-input>

    </div>
    <el-menu class="scheduler-nav" mode="horizontal" text-color="#fff" background-color="#409eff">


      <div class="date col">
        <el-date-picker v-model="pickerDate" type="date" :clearable="false" @change="pickNewDate">

        </el-date-picker>
      </div>
      <div class="right-menu col">
        <button type="button" class="btn" @click="showToday">
          <span>显示今天</span>
        </button>
        <div class="arrow-group">
          <button type="button" class="btn" @click="previousDay"> <</button>
          <button type="button" class="btn" @click="nextDay"> ></button>
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
            <div class="events">

              <el-row style="width: 100%;height: 100%;">
                <template v-for="events_hospital in item.events">
                  <el-col :span="8" style="height: 100%;border-right: 1px solid #CECECE">
                    <div @click="handleAdd(events_hospital.length, item.hour)" style="height: 100%">
                      <el-row>
                        <template v-for="event in events_hospital">
                          <el-col :span="8" class="event">
                            <!-- <span @click.stop="handleEdit(event)" :class="`h${event.hospital_id}-event`">{{event.customer.name}}</span> -->
                            <span @click.stop="handleEdit(event)" v-if="event.hospital_id==1" :class="{'h1-event':event.hospital_id==1,special:event.special===true}">{{event.customer.name}}</span>
                            <span @click.stop="handleEdit(event)" v-else-if="event.hospital_id==2" :class="{'h2-event':event.hospital_id==2,special:event.special===true}">{{event.customer.name}}</span>
                            <span @click.stop="handleEdit(event)" v-else :class="{'h3-event':event.hospital_id==3,special:event.special===true}">{{event.customer.name}}</span>
                          
                          </el-col>
                        </template>
                      </el-row>

                    </div>
                  </el-col>
                </template>

              </el-row>
            </div>

          </el-col>
        </el-row>

      </template>

      <el-dialog title="预约表格" :visible.sync="dialogVisiable" width="30%" :close-on-click-modal="true"
                 @close="dialogVisiable=false">
        <el-form :model="form" label-position="left" label-width="80px" :rules="rules" ref="form">

          <!--<el-row>-->
          <!--<el-col :span="14">-->

          <!--<el-form-item label="名称">-->
          <!--<multiselect-->
          <!--v-model="form.customer"-->
          <!--:options="customers"-->
          <!--@search-change="getRemoteCustomers"-->
          <!--placeholder="搜索用户"-->
          <!--track-by="name"-->
          <!--:custom-label="customLabel"-->
          <!--selectLabel="选择"-->
          <!--deselectLabel="删除"-->
          <!--&gt;-->
          <!--<span slot="noResult">无结果</span>-->
          <!--</multiselect>-->

          <!--</el-form-item>-->
          <!--</el-col>-->

          <!--</el-row>-->

          <!--<el-form-item label="id" style="width: 300px">-->
          <!--<el-input v-model="form.event_id"></el-input>-->
          <!--</el-form-item>-->

          <el-form-item label="姓名" style="width: 300px" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="手机号" style="width: 300px" prop="phone">
            <el-input v-model="form.phone" value="number"></el-input>
          </el-form-item>


          <el-form-item label="医院" style="width: 300px" prop="hospital">
            <el-select v-model="form.hospital" placeholder="请选择">
              <el-option v-for="item in hospitalOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"
              >

              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="开始时间" style="width: 300px">
            <el-date-picker
            v-model="form.bookTime"
            type="datetime"
            placeholder="选择时间"
            value-format="yyyy-MM-dd HH:mm"
            >
            </el-date-picker>
          </el-form-item>

          <el-form-item label="特殊标记" style="width: 100px">
            <el-checkbox v-model="form.special"></el-checkbox>
          </el-form-item>

          <el-form-item label="备注" style="width: 300px">
            <el-input v-model="form.memo" auto-complete="off" type="textarea"></el-input>
          </el-form-item>


        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisiable=false">取消</el-button>
          <el-button type="danger" @click="DeleteEvent" v-if="dialogStatus!=='create'">删除</el-button>
          <el-button type="success" @click="createEvent" v-if="dialogStatus==='create'">新建</el-button>
          <el-button type="success" @click="updateEvent" v-else>更改</el-button>
          
        </div>
      </el-dialog>


    </div>
  </div>

</template>

<script>
  import {formatDate, changeDate} from '@/utils/time'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'
  import eventApi from "@/api/schedule";
  import memoApi from '@/api/memo'

  export default {
    name: "scheduler",
    data() {
      return {
        today: formatDate(new Date()),
        // TODO
        loading: false,
        dialogVisiable: false,
        dialogStatus: 'create',
        pickerDate: formatDate(new Date()),
        customers: [],
        schedulerEvents: [],
        memo1: '',
        form: {
          event_id: '',
          memo: '',
          name: '',
          phone: '',
          hospital: '',
          // bookTimeDate: '',
          // bookTimeHour: '',
          bookTime: '',
          special:false,
        },
        hospitalOptions: [
          {
            value: 1,
            label: "世纪口腔",
          },
          {
            value: 2,
            label: "艾雅口腔",
          },
          {
            value: 3,
            label: "诊所3",
          },
        ],
        rules: {
          name: [
            {required: true, message: "请输入姓名", trigger: 'blur'},
          ],
          phone: [
            {required: true, message: "请输入手机号", trigger: 'blur'},
            // {type: 'number', message: '手机号必须为数字'}
          ],
          hospital: [
            {required: true, message: "不能为空", trigger: 'blur'},

          ]

        }
      }
    },
    components: {
      Multiselect
    },
    computed: {
      startHour() {
        return 8
      },

      stopHour() {
        return 21
      }
    },
    mounted() {
      // TODO
      // this.initData()
    },
    watch: {
      pickerDate() {
        this.pickNewDate()
      }
    },
    methods: {
      resetForm() {
        this.form = {
          event_id: '',
          memo: '',
          name: '',
          phone: '',
          hospital: '',
          bookTime: '',
          special:false
        }
      },
      createEvent() {
        // console.log(this.form)
        // return

        this.$refs.form.validate(valid => {
          if (!valid) {
            return
          }

          eventApi.createDateEvents(this.form).then(
            response => {
              this.$notify({
                title: '成功',
                message: "创建成功",
                type: 'success',
                duration: 2000,
              })
              this.dialogVisiable = false
              this.getDateEvents(formatDate(this.pickerDate))
            }
          ).catch(error => console.error(error))


        })
      },
      updateEvent() {
        console.log(this.form)
        // console.log(typeof(this.form.bookTime))
        
        // return 
        this.$refs.form.validate(valid => {
          if (!valid) {
            return
          }
          eventApi.updateDateEvent(this.form).then(
            response => {
              this.$notify({
                title: '成功',
                message: "修改成功",
                type: 'success',
                duration: 2000,
              })
              this.dialogVisiable = false
              this.getDateEvents(formatDate(this.pickerDate))
            }
          ).catch(error => console.error(error))
        })
      },
      DeleteEvent(event){
        eventApi.deleteDateEvent(this.form).then(
            response => {
              this.$notify({
                title: '成功',
                message: "删除成功",
                type: 'success',
                duration: 2000,
              })
              this.dialogVisiable = false
              this.getDateEvents(formatDate(this.pickerDate))
            }
          ).catch(error => console.error(error))
      },


      handleAdd(eventsLength, hour) {
        if (eventsLength < 6) {
          this.dialogVisiable = true
          this.dialogStatus = 'create'
          this.resetForm()
          this.form.bookTime = formatDate(this.pickerDate) + ' ' + hour
          // this.form.bookTimeDate = formatDate(this.pickerDate)
          // this.form.bookTimeHour = hour
        }
        else {
        }
        this.$nextTick(() => {
          this.$refs['form'].clearValidate()
        })
      },
      handleEdit(event) {
        this.form = {
          event_id: event.event_id,
          memo: event.memo,
          name: event.customer.name,
          phone: event.customer.phone,
          hospital: event.hospital_id,
          bookTime: event.bookingTime,
          special:event.special,
        }
        this.dialogStatus = 'update'
        this.dialogVisiable = true
        this.$nextTick(() => {
          this.$refs['form'].clearValidate()
        })
      },
      pickNewDate() {
        this.loading = true
        const dateStr = formatDate(this.pickerDate)
        this.getDateEvents(dateStr)
        this.getMemo(dateStr)
      },
      initData() {
        this.getDateEvents(this.today)
        this.getMemo(this.today)
      },
      generateInitEvents(startHour, stopHour) {
        let eventItems = [];
        for (let i = startHour; i <= stopHour; i++) {
          let eventItem;
          let hour = i
          if (hour < 10) {
            hour = `0${hour}:00`
          }
          else {
            hour = `${hour}:00`
          }
          eventItem = {
            hour: hour,
            events: [[], [], []]
          }
          eventItems.push(eventItem)

        }
        return eventItems
      },
      getDateEvents(date) {
        eventApi.getDateEvents(date).then(
          response => {
            const eventItems = response.data

            let initEvents = this.generateInitEvents(this.startHour, this.stopHour)
            for (let i in eventItems) {
              const eventItem = eventItems[i]
              const hour = parseInt(eventItem.bookingTime.split(':'))
              const index = hour - this.startHour
              const hostpital_id = eventItem.event.hospital_id
              console.log("---")
              console.log(eventItem.bookingTime)
              console.log(initEvents)
              console.log(index)
              initEvents[index].events[hostpital_id - 1].push(
                eventItem.event
              )
            }
            this.schedulerEvents = initEvents
            this.loading = false
          }
        )
      },

      customLabel(option) {
        return `${option.phone} - ${option.name}`
      },
      showToday() {
        this.pickerDate = this.today
      },
      previousDay() {
        this.pickerDate = changeDate(this.pickerDate, -1)
      },
      nextDay() {
        this.pickerDate = changeDate(this.pickerDate, 1)
      },
      getMemo(dateStr) {
        memoApi.getMemo(dateStr).then(res => {
          this.memo1 = res.data.memo1;
        })
      },
      autoSave() {
        console.log('save')
        const dateStr = formatDate(this.pickerDate)
        memoApi.updateMemo(this.memo1, dateStr).then(
          resp => {
            console.log("oooook")
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue: #409eff;
  @mixin hover {
    background: #337ecc;
    cursor: pointer;
  }

  ;
  $header-font-color: white;
  i {
    color: $header-font-color;
  }

  .btn {
    padding: 15px;
    border-radius: 0;
    border: none;
    background: $blue;
    display: inline-block;
    &:hover {
      @include hover;
    }
    color: $header-font-color;
  }

  .scheduler-nav {
    padding: 5px;
    color: $header-font-color;
    .right-item {
      float: right;
    }

    .col {
      display: inline-block;
      height: 45px;
      line-height: 45px;
      color: $header-font-color;
      &:hover {
        @include hover;
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
    margin-top: 10px;
    .event-row {
      height: 85px;
      line-height: 85px;
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
              // text-overflow: ellipsis!important;
              // white-space: normal!important;
              // overflow: hidden!important;
              margin-bottom: 3px;
              float: left;
            }
            .h1-event {
              background: $blue;
            }
            .h2-event {
              background: #f56c6c;
            }
            .h3-event {
              background: #67C23A;
            }
            .special{
              background: #8e44ad
            }
          }
        }

      }
    }
  }

  .memo {
    margin: 30px 0;
  }

</style>
