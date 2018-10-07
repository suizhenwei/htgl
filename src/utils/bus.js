/*
*  author  suizhenwei
*  time    2018-9-17
*  work    可以通过实例一个vue实例Bus作为媒介，
           要相互通信的兄弟组件之中，都引入Bus，
           之后通过分别调用Bus事件触发和监听来实现组件之间的通信和参数传递
*/
import Vue from 'vue';

export default new Vue;
