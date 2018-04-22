import request from '@/utils/request'
import qs from 'qs'
import Cookies from 'js-cookie'

export function loginByUsername(username, password) {
  console.log(Cookies.get())
  const data =
    qs.stringify(
      {
        username: username,
        password: password,
      })
  return request({
    url: '/login',
    method: 'post',
    // withCredentials:true,
    data
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/retrive',
    method: 'get',
  })
}


export default {
  loginByUsername,
  getUserInfo
}
