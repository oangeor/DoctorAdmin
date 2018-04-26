import Mock from 'mockjs'
import eventsApi from './schedule'
import customerApi from './customer'
import loginApi from './login'

Mock.mock(/\/api\/login/, 'post', loginApi.loginByUsername)
Mock.mock(/\/api\/user\/retrive/, 'get', loginApi.getUserInfo)

Mock.mock(/\/api\/customer\/list/, 'post', customerApi.getCustomer)
Mock.mock(/\/api\/customer\/update/, 'post', customerApi.updateCustomer)
Mock.mock(/\/api\/customer\/create/, 'post', customerApi.createCustomer)

Mock.mock(/\/api\/event\/list/, 'post', eventsApi.getDateEvents)
Mock.mock(/\/api\/event\/update/, 'post', eventsApi.updateDateEvent)
Mock.mock(/\/api\/event\/create/, 'post', eventsApi.createDateEvent)
