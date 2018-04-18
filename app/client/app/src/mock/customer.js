import Mock from 'mockjs'

const List = []
const COUNT = 30

for (let i = 0; i < COUNT; i++) {
  List.push(Mock.mock({
    id:'@increment',
    name: '@cname',
    phone: /^1[385][1-9]\d{8}/,
  }))
}

export default {
  getList: config => {
    // console.log(List)
    return List;
  }
}
