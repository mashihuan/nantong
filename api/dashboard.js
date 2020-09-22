import request from '@/common/request'

export function countZrr (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countZrr',
    method: 'GET',
    params
  })
}

export function countFr (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countFr',
    method: 'GET',
    params
  })
}

export function countZrrByArea (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countZrrByArea',
    method: 'GET',
    params
  })
}

export function countFrByArea (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countFrByArea',
    method: 'GET',
    params
  })
}

export function dataInvoke (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/dataInvoke',
    method: 'GET',
    params
  })
}

export function dataDimension (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/dataDimension',
    method: 'GET',
    params
  })
}

export function zrrDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/zrrDistribute',
    method: 'GET',
    params
  })
}

export function frDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/frDistribute',
    method: 'GET',
    params
  })
}
