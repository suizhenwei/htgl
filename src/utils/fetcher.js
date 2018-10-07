/*
*  author  suizhenwei
*  time    2018-9-17
*  work    fetcher方法 get,post,jsonp 
*/
import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'

const reqHeaders = {
  Accept: 'text/json'
  // token:'1234',
}
const json2url = (params) => {
  return Object.keys(params).reduce((pre, key) => (`${pre}${key}=${params[key]}&`),'').slice(0,-1);
}
function errJson (err) {
  switch (err.status){
  case 404:
    return {code: 0,errmsg: '找不到'}
  case 500:
    return {code: 0,errmsg: '服务器找不到'}
  default:
    return {code: 0,errmsg: '错误'}
  }
}
const request = (url, opts) => new Promise((resolve, reject) => {
  try {
    return fetch(url, opts).then(res => {
      if (res.ok) {
        resolve(res.json())
      } else {
        reject(res)
      }
    })
  } catch (e){
    reject(errJson(e))
  }
})

export default {
  get (url, params) {
    return request(url + `?${json2url(params)}`, {
      method: 'GET',
      headers: reqHeaders
    })
  },
  post (url, params) {
    return request(url, {
      method: 'POST',
      headers: Object.assign({}, reqHeaders,{
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: json2url(params)
    })
  },
  jsonp (url, params) {
    return fetchJsonp(url + `?${json2url(params)}`, {
      jsonpCallback: 'custom_callback'
    }).then(res => res.json())
  }
}
