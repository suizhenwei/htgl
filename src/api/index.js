import http from '@/utils/fetcher'
// let HttpHot = 'http://39.105.31.83'
// 获取数据接口
const setConList = (url,params) =>{
  return http.post(url, params)
}
export {
  setConList
}
