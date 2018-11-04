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
        birthday:customer.birthday,
        source:customer.source,
        isWechat:customer.isWechat,
        isFirst:customer.isFirst,
        isYinshimei:customer.isYinshimei,
        isShidaitianshi:customer.isShidaitianshi,
        guding:customer.guding,
        isRevisit:customer.isRevisit,
        isDeal:customer.isDeal,
        isConsumed:customer.isConsumed,
        character:customer.character,
        pct:customer.pct,
        repurchaseRate:customer.repurchaseRate,
        jieshaoRate:customer.jieshaoRate,
        vip:customer.vip,
        score:customer.score,
      })

  return request({
    url: '/customer/create',
    method: 'post',
    data
  })
}

export function updateCustomer(customer) {
  console.log(customer)
  const data =
    qs.stringify(
      {
        id: customer.id,
        name: customer.name,
        age: customer.age,
        sex: customer.sex,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        birthday:customer.birthday,
        source:customer.source,
        isWechat:customer.isWechat,
        isFirst:customer.isFirst,
        isYinshimei:customer.isYinshimei,
        isShidaitianshi:customer.isShidaitianshi,
        guding:customer.guding,
        isRevisit:customer.isRevisit,
        isDeal:customer.isDeal,
        isConsumed:customer.isConsumed,
        pct:customer.pct,
        repurchaseRate:customer.repurchaseRate,
        jieshaoRate:customer.jieshaoRate,
        vip:customer.vip,
        score:customer.score,
      })
  return request({
    url: '/customer/update',
    method: 'post',
    data
  })
}

export function searchCustomer(query) {
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

export function retriveCustomer(customer_id) {
  const data =
    qs.stringify(
      {
        customer_id: customer_id,
      })

  return request({
    url: '/customer/retrive',
    method: 'post',
    data
  })
}


export default {
  getCustomer,
  createCustomer,
  updateCustomer,
  searchCustomer,
  retriveCustomer,
}
