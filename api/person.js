import request from '@/common/request'

export function countNewZrrByArea (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countNewZrrByArea',
    method: 'GET',
    params
  })
}

export function sexDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/sexDistribute',
    method: 'GET',
    params
  })
}

export function ageDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/ageDistribute',
    method: 'GET',
    params
  })
}

export function hjDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/hjDistribute',
    method: 'GET',
    params
  })
}

export function bytj (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/bytj',
    method: 'GET',
    params
  })
}

export function xlDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/xlDistribute',
    method: 'GET',
    params
  })
}
