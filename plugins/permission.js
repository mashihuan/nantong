import { getToken, setToken, parseCookie } from '@/common/auth'
import { IS_SSO, REDIRECT_URL } from '@/common/config'

export default function async ({ app, store, req, redirect }) {
  // let token = process.client ? getToken() : parseCookie(req.headers.cookie)
  // http://2.82.13.30:82/?sessionToken=6564d9e755dc46bf83005dd4601ef627
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
      return
    }
  }
  app.router.beforeEach((to, from, next) => {
    const token = process.client ? getToken() : parseCookie(req.headers.cookie)
    if (token) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  })
}
