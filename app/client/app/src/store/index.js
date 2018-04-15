import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import schedule from './modules/schedule'

Vue.use(Vuex)

const getters = {
  permission_routers: (state) => {
    return state.permission.routers;
  },
  schedule_events: (state) => {
    return state.schedule.events;
  }
}

const store = new Vuex.Store({
  modules: {
    permission,
    schedule
  },
  getters
});

export default store
