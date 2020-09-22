const TokenKey = 'sessionToken'

export function setToken (token) {
  sessionStorage.setItem(TokenKey, token)
}

export function getToken () {
  sessionStorage.getItem(TokenKey)
}

export function removeToken () {
  sessionStorage.removeItem(TokenKey)
}
