import request from '@/common/request'

export function countFr (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countNtFr',
    method: 'GET',
    params
  })
}

export function lastEnterprise (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/lastEnterprise',
    method: 'GET',
    params
  })
}

export function qylxDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/qylxDistribute',
    method: 'GET',
    params
  })
}

export function employeesPerMonth (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/employeesPerMonth',
    method: 'GET',
    params
  })
}

export function qyztDistribute (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/qyztDistribute',
    method: 'GET',
    params
  })
}

export function getFrgx (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/getFrgx',
    method: 'GET',
    params
  })
}

export function getFrgx2 (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/frgx',
    method: 'GET',
    params
  })
}

export function countFrHy (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countFrHy',
    method: 'GET',
    params
  })
}

// 企业各经营状况数量
export function countFrZtCurYear (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countFrZtCurYear',
    method: 'GET',
    params
  })
}

// 企业行业分类
export function listFrHy (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/listFrHy',
    method: 'GET',
    params
  })
}

// 企业地区分类
export function listFrDq (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/listFrDq',
    method: 'GET',
    params
  })
}

// 按行业获取企业柱状图数据
export function countFrHyzt (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countFrHyzt',
    method: 'GET',
    params
  })
}

// 按地区获取企业柱状图数据
export function countFrDqzt (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countFrDqzt',
    method: 'GET',
    params
  })
}

// 流动人口性别分布
export function countZrrLdrkXb (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countZrrLdrkXb',
    method: 'GET',
    params
  })
}

// 流动人口年龄分布
export function countZrrLdrkNlfb (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countZrrLdrkNlfb',
    method: 'GET',
    params
  })
}

// 流动人口户籍分布
export function countZrrLdrkHj (params) {
  return request({
    url: '/archiveservice/v1/openPlatform/countZrrLdrkHj',
    method: 'GET',
    params
  })
}
