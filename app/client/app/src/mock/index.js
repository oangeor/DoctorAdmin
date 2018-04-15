import Mock from 'mockjs'
import eventsApi from './schedule'


// Mock.mock(/\/login\/login/, 'post')
Mock.mock(/\/events\/date_events/, 'get', eventsApi.getDateEvents)
