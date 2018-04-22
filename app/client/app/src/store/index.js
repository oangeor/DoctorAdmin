import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import schedule from './modules/schedule'
import user from './modules/user'

Vue.use(Vuex)

const getters = {
  permission_routers: (state) => {
    return state.permission.routers;
  },
  schedule_events: (state) => {
    return state.schedule.events;
  },
  user_name:(state) =>{
    return state.user.name
  }
}

const store = new Vuex.Store({
  modules: {
    permission,
    schedule,
    user
  },
  getters
});

export default store
