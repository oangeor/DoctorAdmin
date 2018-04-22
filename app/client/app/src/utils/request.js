import axios from 'axios'
import {getToken} from "./auth";
import {Message} from 'element-ui'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  // withCredentials: true,
})

// service.interceptors.request.use()

service.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers['X-Token'] = token
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
service.interceptors.response.use(
  response => {
    console.log(response)
    const res = response.data;
    if (res.error !== 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject('error')
    }
    else {
      return response.data;
    }
  }
)

export default service
