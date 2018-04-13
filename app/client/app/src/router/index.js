import Vue from 'vue'
import Router from 'vue-router'

// import dashboard from '@/views/dashboard/index'
// import dashboard from '.
import Dashboard from '@/views/dashboard'
import Calendar from '@/views/calendar'

Vue.use(Router);

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/dashboard',
    component: Layout,
    redirect:'/dashboard/index',
    children: [
      {
        path: 'index',
        component: Dashboard,
        name: 'dashboard',
        meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect:'calendar',
    children: [
      {
        path: 'calendar',
        component: Calendar,
        name: 'calendar',
        meta: {title: 'calendar', icon: 'calendar', noCache: true}
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})


