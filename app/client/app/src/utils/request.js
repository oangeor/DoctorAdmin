import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
})

// service.interceptors.request.use()

export default service
