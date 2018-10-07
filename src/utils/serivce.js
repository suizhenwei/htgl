/*
*  author  suizhenwei
*  time    2018-9-17
*  work    注册全局的方法   $http....
*/
import Login from './fetcher';
import message from '@/base/tips';
export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      enumeroble: false,
      configurable: false,
      writable: false,
      value: Login
    });
    Object.defineProperty(Vue.prototype, '$messages', {
      enumeroble: false,
      configurable: false,
      writable: false,
      value: message
    });
  }
}
