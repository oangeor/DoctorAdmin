import Mock from 'mockjs'

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

export default {
  getList: config => {
    // console.log(List)
    return List;
  }
}
