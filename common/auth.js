import Cookies from 'js-cookie'

const TokenKey = 'sessionToken'

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function getToken () {
  return Cookies.get(TokenKey)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function parseCookie (req = '') {
  const cookies = req.split(';')
  let cookie = ''
  cookies.forEach((val, index) => {
    if (val.startsWith(TokenKey)) {
      cookie = val.split('=')[1]
    }
  })
  return cookie
}
