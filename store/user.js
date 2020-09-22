import { getToken, setToken, removeToken } from '@/common/auth'
import { login, getUserInfo, logout } from '@/api/user'

export const state = () => ({
  identity: '',
  token: getToken(),
  userInfo: {}
})

export const actions = {
  // 登录
  async login ({ commit }, userInfo) {
    const { loginName, password } = userInfo
    const res = await login({
      loginName: loginName.trim(),
      password,
      sessionToken: uuid()
    })
    commit('SET_TOKEN', res.sessionToken)
    setToken(res.sessionToken)
  },
  // 获取用户信息
  async getUserInfo ({ commit, state }) {
    const res = await getUserInfo({
      sessionToken: getToken()
    })
    commit('GET_USER_INFO', res.data)
  },
  // 登出
  async logout ({ commit, state }) {
    await logout({
      sessionToken: getToken()
    })
    removeToken()
    commit('SET_TOKEN', '')
  },
  // 清除token
  resetToken ({ commit }) {
    removeToken()
    commit('SET_TOKEN', '')
  }
}

export const mutations = {
  switchIdentity (state, identity) {
    state.identity = identity
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  GET_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
  }
}

function uuid () {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  const uuid = s.join('')
  return uuid
}
