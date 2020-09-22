import request from '@/common/request'

export function login (params) {
  return request({
    url: '/systemservice/v1/sys/login',
    method: 'POST',
    data: params
  })
}

export function getUserInfo (params) {
  return request({
    url: '/systemservice/v1/sys/getUserFromSessionToken',
    method: 'GET',
    params: {
      ...params
    }
  })
}

export function logout (params) {
  return request({
    url: '/systemservice/v1/sys/logout',
    method: 'POST',
    data: params
  })
}
