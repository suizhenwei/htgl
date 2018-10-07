import Vue from 'vue'
import Router from 'vue-router'
const Login = (resolve) => require(['@/components/Login'], resolve)
const Indexs = (resolve) => require(['@/components/Home/index'], resolve)
const checkPending = (resolve) => require(['@/components/teacherList/checkPending'], resolve)
const teacherList = (resolve) => require(['@/components/teacherList/teacherList'], resolve)
const withdraw = (resolve) => require(['@/components/teacherList/withdraw'], resolve)
const welcome = (resolve) => require(['@/components/Home/welcome'], resolve)
const userList = (resolve) => require(['@/components/userList'], resolve)
const conManage = (resolve) => require(['@/components/conManage/index'], resolve)
const activity = (resolve) => require(['@/components/conManage/activity'], resolve)
const questionOrder = (resolve) => require(['@/components/questionOrder/questionOrder'], resolve)
const activityOrder = (resolve) => require(['@/components/questionOrder/activityOrder'], resolve)
const account = (resolve) => require(['@/components/account'], resolve)
const count = (resolve) => require(['@/components/count'], resolve)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      meta:{
        title:'登录'
      },
      component: Login
    },
    {
      path:'/home',
      name:'Home',
      component: Indexs,
      redirect:'/home/conManage',
      children:[
        {
          path: '/home/welcome',
          name: 'welcome',
          meta:{
            title: '欢迎惠答'
          },
          component: welcome
        },
        {
          path:'/home/checkPending',
          name:'checkPending',
          meta: {
            title: '待审核列表'
          },
          component: checkPending
        },
        {
          path: '/home/teacherList',
          name: 'teacherList',
          meta: {
            title: '导师列表'
          },
          component: teacherList
        },
        {
          path: '/home/withdraw',
          name: 'withdraw', 
          meta: {
            title: '提现管理'
          },
          component: withdraw
        },
        {
          path: '/home/userList',
          name: 'userList',
          meta: {
            title: '用户列表'
          },
          component: userList
        },
        {
          path: '/home/conManage',
          name: 'conManage',
          meta: {
            title: '内容管理'
          },
          component: conManage
        },
        {
          path: '/home/activity',
          name: 'activity',
          meta: {
            title: '活动管理'
          },
          component: activity
        },
        {
          path: '/home/questionOrder',
          name: 'questionOrder',
          meta: {
            title: '问答订单'
          },
          component: questionOrder
        },
        {
          path: '/home/activityOrder',
          name: 'activityOrder',
          meta: {
            title: '活动订单'
          },
          component: activityOrder
        },
        {
          path: '/home/account',
          name: 'account',
          meta: {
            title: '账户信息'
          },
          component: account
        },
        {
          path: '/home/count',
          name: 'count',
          meta: {
            title: '计算'
          },
          component: count
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    const title = to.meta.title ? to.meta.title : 'dedault';
    router.app.$store.dispatch('pageTitle',title)
    document.title = title;
    next()
  }, 0);
})
export default router;
