import request from '@/utils/request'
import qs from 'qs'


export function updateMemo(memo1, date) {
  const data =
    qs.stringify(
      {
        memo1: memo1,
        date: date,
      })

  return request({
    url: '/memo/update',
    method: 'post',
    data
  })
}


export function getMemo(date) {
  const data =
    qs.stringify(
      {
        date: date,
      })

  return request({
    url: '/memo/retrive',
    method: 'post',
    data
  })
}


export default {
  updateMemo,
  getMemo,
}
