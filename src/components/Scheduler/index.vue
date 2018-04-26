<template>
    <div>
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
                    <el-col :span="23" class="event-item" >
                        <div  @click="handleCreate(item.event, item.hour)">
                            <span v-if="item.event" @click.stop="handleEdit(item.event)">{{`患者: ${item.event.customer.name}    类型: ${item.event.regType}    大夫: ${item.event.doctor.name} `}}</span>

                        </div>

                    </el-col>
                </el-row>

            </template>

            <el-dialog title="预约表格" :visible.sync="dialogVisiable" width="30%" :close-on-click-modal="true"
                       @close="dialogVisiable=false">
                <el-form :model="form" label-position="left" label-width="80px" :rules="rules" ref="form">

                    <el-form-item label="姓名" style="width: 300px" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号" style="width: 300px" prop="phone">
                        <el-input v-model="form.phone" value="number"></el-input>
                    </el-form-item>


                    <el-form-item label="开始时间" style="width: 300px">
                        <el-row>
                            <el-col :span="24">{{form.bookTime}}</el-col>
                        </el-row>
                    </el-form-item>

                    <el-form-item label="备注" style="width: 300px">
                        <el-input v-model="form.memo" auto-complete="off" type="textarea"></el-input>
                    </el-form-item>


                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisiable=false">取消</el-button>
                    <el-button type="success" @click="createEvent" v-if="dialogStatus==='create'">新建</el-button>
                    <el-button type="success" @click="updateEvent" v-else>更改</el-button>
                </div>
            </el-dialog>


        </div>
    </div>

</template>

<script>
  import {formatDate, changeDate} from '@/utils/time'
  import eventApi from "@/api/schedule";

  export default {
    name: "scheduler",
    data() {
      return {
        today: formatDate(new Date()),
        loading: true,
        dialogVisiable: false,
        dialogStatus: 'create',
        pickerDate: formatDate(new Date()),
        customers: [],
        schedulerEvents: [],
        form: {
          event_id: '',
          memo: '',
          name: '',
          phone: '',
          hospital: '',
          bookTime: ''
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
          ],
          hospital: [
            {required: true, message: "不能为空", trigger: 'blur'},

          ]

        }
      }
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
      this.initData()
    },
    watch: {
      form() {
      },
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
          bookTime: ''
        }
      },
      createEvent() {
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
              this.fetchEvents(formatDate(this.pickerDate))
            }
          ).catch(error => console.error(error))


        })
      },
      updateEvent() {
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
              this.fetchEvents(formatDate(this.pickerDate))
            }
          ).catch(error => console.error(error))
        })
      },

      handleCreate(event, hour) {
        if (event === null) {
          this.dialogVisiable = true
          this.dialogStatus = 'create'
          this.resetForm()
          this.form.bookTime = formatDate(this.pickerDate) + ' ' + hour
        }
        else {
        }
        this.$nextTick(() => {
          this.$refs['form'].clearValidate()
        })
      },
      handleEdit(event) {
        this.form = {
          event_id: event.id,
          memo: event.memo,
          name: event.customer.name,
          phone: event.customer.phone,
          bookTime: event.bookTime
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
        this.fetchEvents(dateStr)
      },
      initData() {
        this.fetchEvents(this.today)
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
            event: null
          }
          eventItems.push(eventItem)

        }
        return eventItems
      },
      fetchEvents(date) {
        eventApi.getDateEvents(date).then(
          response => {
            const events = response.data

            let initEvents = this.generateInitEvents(this.startHour, this.stopHour)
            for (let i in events) {
              const event = events[i]
              const hour = parseInt(event.bookTime.split(':'))
              const index = hour - this.startHour
              initEvents[index].event = event
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
    }
  }
</script>

<style lang="scss" scoped>
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
            height: 45px;
            line-height: 45px;
            border: 1px solid #CECECE;
            .event-hour {
                display: inline-block;
                float: left;
                border-right: 1px solid #CECECE;
                color: #999999;
            }
            .event-item {
                height: 100%;
                div{
                    height: 100%;
                }
                span {
                    display: inline-block;
                    background: $blue;
                    width: 100%;
                    height: 100%;
                    color: white;
                }
            }
        }
    }

    .memo {
        margin: 30px 0;
    }

</style>
