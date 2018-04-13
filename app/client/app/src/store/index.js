import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'

Vue.use(Vuex)

const getters = {
  permission_routers: (state) => {
    return state.permission.routers;
  }
}

const store = new Vuex.Store({
  modules: {
    permission
  },
  getters
});

export default store
