import request from '@/utils/request'

export function getDateEvents(date) {
  return request({
    url: '/events/date_events',
    method: 'get',
    // params: {}
  })
}
