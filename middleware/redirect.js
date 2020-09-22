import { getToken, setToken, parseCookie } from '@/common/auth'
import { IS_SSO, REDIRECT_URL } from '@/common/config'

export default function ({ route, redirect, req }) {
  // const token = process.client ? getToken() : parseCookie(req.headers.cookie)
  let token = ''
  if (process.client) {
    if (window.location.search && window.location.search.includes('sessionToken')) {
      token = window.location.search.split('=')[1]
      setToken(token)
    } else {
      token = getToken()
    }
  } else {
    parseCookie(req.headers.cookie)
  }
  if (IS_SSO) {
    if (!token && window) {
      window.location.replace(REDIRECT_URL)
      redirect(REDIRECT_URL)
      return
    }
  }
  if (!token && route.path !== '/login') {
    redirect('/login')
  }
  if (token && route.path === '/login') {
    redirect('/')
  }
}
