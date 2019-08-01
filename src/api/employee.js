import request from '@/utils/request'

function employeeList(query) {
  console.log(query)
  return request({
    url: '/customer/list',
    method: 'get',
  })

}



// export function retriveCustomer(customer_id) {
//   const data =
//     qs.stringify(
//       {
//         customer_id: customer_id,
//       })
//
//   return request({
//     url: '/customer/retrive',
//     method: 'post',
//     data
//   })
// }


export default {
  employeeList
}
