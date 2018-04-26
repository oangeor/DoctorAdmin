import Mock from "mockjs";

export default {
  getDateEvents: config => {
    let events = []
    for (let i = 0; i < 10; i++) {
      const startHour = 8
      if (Math.random() > 0.33) {
        continue
      }
      const bookTime = `${startHour + i}:00`
      events.push(Mock.mock({
        bookTime: bookTime,
        id: '@increment',
        customer: {
          id: '@increment',
          name: '@cname',
          phone: /^1[385][1-9]\d{8}/,


        },
        regType: '初诊',
        doctor: {
          id:'@increment',
          name:'@cname(1)'
        },
        memo: 'ffsdfsdsd'
      }))

    }
    return {
      error: 0,
      data: events
    };
  },

  updateDateEvent(config) {
    return {
      error: 0
    }
  },
  createDateEvent(config){
    return{
      error:0
    }
  }
}
