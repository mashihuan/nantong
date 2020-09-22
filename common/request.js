import axios from 'axios'
import { Message } from 'element-ui'
import { REDIRECT_URL } from './config'
import { removeStorage } from '@/common/storage'
import { getToken, removeToken } from '@/common/auth'
const instance = axios.create({
  baseURL: process.env.baseUrl,
  timeout: 20000,
  withCredentials: process.env.NODE_ENV === 'production',
  headers: {}
})

instance.interceptors.request.use((config) => {
  const sessionToken = getToken()
  if (sessionToken) {
    config.headers.sessionToken = sessionToken
  }
  return config
}, (err) => {
  window.console.log(err)
  return err
})

instance.interceptors.response.use((res) => {
  if (res.data.return_code !== 20000) {
    Message.close()
    Message({
      message: res.data.return_msg || 'Error',
      type: 'error',
      duration: 5000
    })
    if (res.data.return_code === 50008 || res.data.return_code === 50012 || res.data.return_code === 50014) {
      // to re-login
      // await removeStorage('index')
      // removeToken()
      // window.location.href = REDIRECT_URL
    }
    return res.data
  } else {
    return res.data
  }
}, async (err) => {
  if (err.message.includes('timeout')) {
    Message.close()
    Message({
      message: '请求超时',
      type: 'error',
      duration: 5000
    })
    return
  }
  if (err.response.status === 401) {
    await removeStorage('index')
    removeToken()
    window.location.href = REDIRECT_URL
  }
  Message({
    message: err.message,
    type: 'error',
    duration: 5000
  })
})

export default instance
