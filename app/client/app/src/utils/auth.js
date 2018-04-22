import Cookies from 'js-cookie'

const TokenKey = 'session-key'

export function getToken() {
  return Cookies.get(TokenKey)
}

// export function () {

// }

export function setToken(token) {
  // console.log("setToken", token)
  // Cookies.set(TokenKey, token)
  // console.log(Cookies.get(TokenKey))
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
