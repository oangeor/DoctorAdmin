import request from '@/utils/request'
import qs from 'qs'

export function getCustomer(query) {
  console.log(query)
  return request({
    url: '/customer/list',
    method: 'get',
  })

}


export function createCustomer(customer) {
  const data =
    qs.stringify(
      {
        name: customer.name,
        age: customer.age,
        sex: customer.sex,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
      })

  return request({
    url: '/customer/create',
    method: 'post',
    data
  })
}

export function update(customer) {
  console.log(customer)
  const data =
    qs.stringify(
      {
        name: customer.name,
        age: customer.age,
        sex: customer.sex,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
      })
  return request({
    url: '/customer/update',
    method: 'post',
    data
  })
}

export function search(query) {
  const data =
    qs.stringify(
      {
        name: query.name,
        phone: query.phone,
      })

  return request({
    url: '/customer/search',
    method: 'post',
    data
  })
}

export default {
  getCustomer,
  createCustomer,
  update,
  search,
}
