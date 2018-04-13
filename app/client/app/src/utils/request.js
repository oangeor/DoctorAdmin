import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV
})
