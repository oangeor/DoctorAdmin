import request from '@/utils/request'
import qs from 'qs'

export function getDateEvents(query) {
  const data = qs.stringify({
    queryDate: query
  })
  return request({
    url: '/event/list',
    method: 'post',
    data
  })
}


export function createDateEvents(event) {
  const data =
    qs.stringify(
      {
        bookTime: event.bookTime,
        hospital: event.hospital,
        memo: event.memo,
        name: event.name,
        phone: event.phone,
      })

  return request({
    url: '/event/create',
    method: 'post',
    data
  })
}

export function updateDateEvent(event) {
  const data =
    qs.stringify(
      {
        event_id: event.event_id,
        name: event.name,
        phone: event.phone,
        hospital_id: event.hospital,
        memo: event.memo,
        bookingTime: event.bookTime,
      })
  return request({
    url: '/event/update',
    method: 'post',
    data
  })
}


export default {
  getDateEvents,
  createDateEvents,
  updateDateEvent
}
