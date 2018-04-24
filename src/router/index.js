import Vue from 'vue'
import Router from 'vue-router'


const _import = require('./_import_' + 'production')


Vue.use(Router);


export const constantRouterMap = [
  {
    path: '/dashboard',
    component: _import('layout/index'),
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: {title: 'route.dashboard', icon: 'dashboard', noCache: true}
      }
    ]
  },
  {
    path: '/calendar',
    component: _import('layout/index'),

    redirect: 'calendar',
    children: [
      {
        path: 'calendar',
        component: _import('calendar/index'),
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
    component: _import('layout/index'),
    redirect: '/customer/index',
    children: [
      {
        path: 'index',
        component: _import('customer/index'),
        name: 'customer',
        meta: {title: 'route.customer', icon: 'people', noCache: true}
      }
    ]
  },
  {
    path: '/login',
    component: _import('login/index'),
    hidden: true,
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


