import {getDateEvents} from '@/api/schedule'


const scheduleEvents = {
  state: {
    events: null
  },

  mutations: {
    SET_EVENTS: (state, events) => {
      state.events = events
    }
  },
  actions: {
    pickNewDate({commit}, newDate) {
      return new Promise((resolve, reject) => {
        const events = getDateEvents(newDate).then(
          response => {
            const data = response.data
            commit('SET_EVENTS', data)
          }
        ).catch(error => {
          reject(error)
        })
      })
    }
  },
}

export default scheduleEvents
