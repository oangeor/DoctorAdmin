import Mock from 'mockjs'



export default {
  getCustomer: config => {
    // console.log(List)
    const List = []
    const COUNT = 30

    for (let i = 0; i < COUNT; i++) {
      List.push(Mock.mock({
        id:'@increment',
        name: '@cname',
        age:/\d{2}/,
        sex:/[0-1]/,
        phone: /^1[385][1-9]\d{8}/,
        email:'fsafj@sfdsa.com',
        address:/\w{10}/
      }))
    }
    return {
      error:0,
      data:List
    };
  }
}
