import router from './router'
import {getToken} from "./utils/auth";
import store from './store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      console.log("login to")
      next({path: '/'})
    }

    else {
      console.log("got token not login")
      if (store.getters.user_name === '') {
        store.dispatch('GetUserInfo').then(res => {
          next()
        }).catch(() => {
          console.log("error!!!!")
        })
      } else {
        next()
      }

    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      console.log("whitelist")
      next()
    } else {
      next('/login')
      console.log("redirect to login")
    }
  }
})
