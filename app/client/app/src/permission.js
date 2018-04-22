import router from './router'
import {getToken} from "./utils/auth";

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (getToken()) {
    console.log("got token")
    if (to.path === '/login') {
      console.log("login to")
      next({path: '/'})
    } else {
      console.log("other to")
      next()
    }
  } else {
    console.log("no token")
    if (whiteList.indexOf(to.path) !== -1) {
      console.log("whitelist")
      next()
    } else {
      next('/login')
      console.log("redirect to login")
    }
  }
})
