import request from '@/utils/request'

export function getCustomer(query) {
  return request({
    url: '/customer/show',
    method: 'get',
    // params: {}
  })

}
