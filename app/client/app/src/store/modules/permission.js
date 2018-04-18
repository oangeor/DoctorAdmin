import {constantRouterMap, asyncRouterMap} from '@/router'

function filterAsyncRouter(asyncRouterMap, roles) {
  // pass
}

const permission = {
  state: {
    routers: constantRouterMap.concat(asyncRouterMap),
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
}

export default permission
