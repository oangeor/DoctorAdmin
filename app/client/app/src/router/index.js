import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/views/dashboard'
import Calendar from '@/views/calendar'
import Customer from '@/views/customer'
import Layout from '../views/layout/Layout'
import SvgIcon from '@/views/svg-icons'

Vue.use(Router);


export const constantRouterMap = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        component: Dashboard,
        name: 'dashboard',
        meta: {title: 'route.dashboard', icon: 'dashboard', noCache: true}
      }
    ]
  },
  {
    path: '/calendar',
    component: Layout,
    redirect: 'calendar',
    children: [
      {
        path: 'calendar',
        component: Calendar,
        name: 'calendar',
        meta: {title: 'route.calendar', icon: 'component', noCache: true}
      }
    ]
  },
  {
    path: '',
    redirect: '/customer'
  },
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/index',
    children: [
      {
        path: 'index',
        component: Customer,
        name: 'customer',
        meta: {title: 'route.customer', icon: 'people', noCache: true}
      }
    ]
  }
]

export const asyncRouterMap = [

  //
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: SvgIcon,
  //     name: 'icons',
  //     meta: {title: 'icons', icon: 'icon', noCache: true}
  //   }]
  // }


  ]

export default new Router({
  routes: constantRouterMap
})


