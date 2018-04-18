import Mock from 'mockjs'
import eventsApi from './schedule'
import customerApi from './customer'


// Mock.mock(/\/login\/login/, 'post')
Mock.mock(/\/events\/date_events/, 'get', eventsApi.getDateEvents)
Mock.mock(/\/customer\/show/, 'get', customerApi.getList)
