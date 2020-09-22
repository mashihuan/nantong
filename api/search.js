import request from '@/common/request'

export function catelogList (params) {
  return request({
    url: '/archiveservice/v1/archive/query/list',
    method: 'POST',
    data: params
  })
}

export function getkeywords (params) {
  return request({
    url: '/archiveservice/v1/archive/query/suggest',
    method: 'POST',
    data: params
  })
}

export function searchList (params) {
  return request({
    url: '/archiveservice/v1/archive/query/detail',
    method: 'POST',
    data: params
  })
}

export function detail (params) {
  return request({
    url: '/archiveservice/v1/archive/query/detail',
    method: 'POST',
    data: params
  })
}

export function countRkjg (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countRkjg',
    method: 'POST',
    data: params
  })
}
