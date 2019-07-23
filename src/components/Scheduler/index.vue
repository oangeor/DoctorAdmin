<template>
  <div>
    <div class="nav-wrapper">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="day">日</el-menu-item>
        <el-menu-item index="week">周</el-menu-item>
        <el-menu-item index="month">月</el-menu-item>
      </el-menu>

    </div>

    <calendar
      ref="tuiCal"
      style="height: 800px;"
      :schedules="scheduleList"
      :template="template"
      :useCreationPopup="false"
      :useDetailPopup="false"
      @clickSchedule="onClickSchedule"
      @beforeCreateSchedule="onBeforeCreateSchedule"
      :theme="theme"/>


    <!--<el-dialog title="收货地址" :visible.sync="dialogDetailVisible">-->
      <!--<el-form :model="form">-->
        <!--<el-form-item label="活动名称" :label-width="formLabelWidth">-->
          <!--<el-input v-model="form.name" autocomplete="off"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="活动区域" :label-width="formLabelWidth">-->
          <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
            <!--<el-option label="区域一" value="shanghai"></el-option>-->
            <!--<el-option label="区域二" value="beijing"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogDetailVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="dialogDetailVisible = false">确 定</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->

  </div>


</template>

<script>
  import 'tui-calendar/dist/tui-calendar.css'
  import {Calendar} from '@toast-ui/vue-calendar'
  import myTheme from './myTheme';

  const today = new Date();


  const getDate = (type, start, value, operator) => {
    start = new Date(start);
    type = type.charAt(0).toUpperCase() + type.slice(1);
    if (operator === '+') {
      start[`set${type}`](start[`get${type}`]() + value);
    } else {
      start[`set${type}`](start[`get${type}`]() - value);
    }
    return start;
  };

  export default {
    name: "index.vue",
    components: {
      'calendar': Calendar
    },
    data() {
      return {
        activeIndex: "month",
        theme: myTheme,
        scheduleList: [
          {
            id: '1',
            calendarId: '0',
            title: 'TOAST UI Calendar Study',
            category: 'time',
            dueDateClass: '',
            start: today.toISOString(),
            end: getDate('hours', today, 3, '+').toISOString(),
            note: "123123123",
          },
          {
            id: '4',
            calendarId: '1',
            title: 'Report',
            category: 'time',
            dueDateClass: '',
            start: today.toISOString(),
            end: getDate('hours', today, 1, '+').toISOString(),
            note: "123123123",
          }
        ],
        dateRange: '',
        dialogDetail: false,
        form:{},
        template: {
          // milestone(schedule) {
          //   return `<span style="color:red;background-color: red">${schedule.title}</span>`;
          // },
          // milestoneTitle() {
          //   return 'Milestone';
          // },
          // allday(schedule) {
          //   return `${schedule.title}<i class="fa fa-refresh"></i>`;
          // },
          // alldayTitle() {
          //   return 'All Day';
          // }
        },


      }
    },
    // watch: {
    //   activeIndex(newValue) {
    //     console.log(newValue)
    //
    //   }
    // },
    methods: {
      init() {
        this.setRenderRangeText();
      },
      setRenderRangeText() {
        const {invoke} = this.$refs.tuiCal;
        const view = invoke('getViewName');
        const calDate = invoke('getDate');
        const rangeStart = invoke('getDateRangeStart');
        const rangeEnd = invoke('getDateRangeEnd');
        let year = calDate.getFullYear();
        let month = calDate.getMonth() + 1;
        let date = calDate.getDate();
        let dateRangeText = '';
        let endMonth, endDate, start, end;
        switch (view) {
          case 'month':
            dateRangeText = `${year}-${month}`;
            break;
          case 'week':
            year = rangeStart.getFullYear();
            month = rangeStart.getMonth() + 1;
            date = rangeStart.getDate();
            endMonth = rangeEnd.getMonth() + 1;
            endDate = rangeEnd.getDate();
            start = `${year}-${month}-${date}`;
            end = `${endMonth}-${endDate}`;
            dateRangeText = `${start} ~ ${end}`;
            break;
          default:
            dateRangeText = `${year}-${month}-${date}`;
        }
        this.dateRange = dateRangeText;
      },
      onClickSchedule(res) {
        console.group('onClickSchedule');
        console.log('MouseEvent : ', res);
        console.log('Calendar Info : ', res.calendar);
        console.log('Schedule Info : ', res.schedule);
        console.groupEnd();
      },
      onBeforeCreateSchedule(res) {
        console.log(res)
      },
      // 导航栏
      handleSelect(key, keyPath) {
        if (this.selectedView != key) {
          this.$refs.tuiCal.invoke('changeView', key, true);
          this.setRenderRangeText();
        }
      }
    }

  }
</script>

<style scoped>
  .nav-wrapper {
    margin-bottom: 2em;
  }

</style>