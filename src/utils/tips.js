/*
*  author  suizhenwei
*  time    2018-9-17
*  work    alert,confirm,prompt,dalog
*/
import Vue from 'vue';
import Main from '@/components/conManage'
let MessageConstructor = Vue.extend(Main);
let instance;
let instances = [];
let seed = 1;
const Message = (options) => {
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;
  options.onClose = function () {
    Message.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instances.push(instance);
  return instance.vm;
}
Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

export default new Vue;
