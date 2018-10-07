/*
*  author  suizhenwei
*  time    2018-9-17
*  work    alert,confirm,prompt,dalog
*/
import Vue from 'vue';
import Main from './tips.vue'
let instance;
let instances = [];
let current = 1;
const message = (opts) => {
  if(typeof opts === 'string') {
    opts = {
      message: opts
    }
  }
  const id = `hdmessage_${current++}`;
  const MessageInstance = Vue.extend(Main)
  instance = new MessageInstance({
    data: opts
  })
  instance.id = id;
  instance.vm = instance.$mount();
  let userOnClose = opts.onClose; 
  opts.onClose = () => {
    message.close(id, userOnClose);
  };
  document.body.appendChild(instance.vm.$el);
  instances.push(instance);
  return instance.vm;
}
message.close = (id, userClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userClose === 'function') {
        userClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

export default message;
