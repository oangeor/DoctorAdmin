export default {
  loginByUsername(config) {
    return{
      error:0,
      data:{
        sessionid:'abcdefg'
      }
    }
  },
  getUserInfo(config){
    return {
      error:0,
      data:{
        username:"test"
      }
    }
  }
}