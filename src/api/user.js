/*
 * @Author: yeyuhang
 * @Date: 2020-12-09 11:29:19
 * @LastEditTime: 2020-12-14 11:59:03
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import request from '@/utils/request'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, tokenName } from '@/config'

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}
export async function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function getUserInfo(accessToken) {
  return request({
    url: '/userInfo',
    method: 'post',
    data: {
      [tokenName]: accessToken,
    },
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: '/register',
    method: 'post',
  })
}

export function getUserList() {
  return request({
    url: '/user/getUserList',
    method: 'get',
  })
}
